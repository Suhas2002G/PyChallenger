import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import axios from "axios";

const CodeEditor = () => {
  const [code, setCode] = useState("# Write your Python code here...");
  const [output, setOutput] = useState("");

  const runCode = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/executor/run/", { code });
      setOutput(response.data.output || response.data.error);
    } catch (error) {
      setOutput("Error connecting to the server.");
    }
  };

  return (
    <div>
      <Editor
        height="400px"
        width={'900px'}
        language="python"
        theme="vs-dark"
        value={code}
        onChange={(newValue) => setCode(newValue)}
        options={{ fontSize: 18, minimap: { enabled: false } }}
      />
      <button onClick={runCode} style={{ marginTop: "10px", padding: "10px" }}>
        Run Code
      </button>
      <pre>{output}</pre>
    </div>
  );
};

export default CodeEditor;
