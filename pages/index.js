import React, { useState } from 'react';

const IndexPage = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleGenerate = () => {
    // Logic for generating output from input
    setOutput(`Generated output for: ${input}`);
  };

  return (
    <div>
      <h1>Input Generator</h1>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your input here..."
      />
      <button onClick={handleGenerate}>Generate</button>
      <h2>Output:</h2>
      <div>{output}</div>
    </div>
  );
};

export default IndexPage;