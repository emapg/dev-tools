import React, { useState } from 'react';
import { AlertCircle, Check } from 'lucide-react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import toast from 'react-hot-toast';

export default function JsonFormatter() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  const formatJson = () => {
    try {
      if (!input.trim()) {
        throw new Error('Please enter JSON data');
      }
      const parsed = JSON.parse(input);
      const formatted = JSON.stringify(parsed, null, 2);
      setOutput(formatted);
      setError('');
      toast.success('JSON formatted successfully!');
    } catch (err) {
      setError(err.message);
      setOutput('');
      toast.error('Invalid JSON format');
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">JSON Formatter</h1>
        <p className="text-gray-600">Format and validate your JSON data with syntax highlighting</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Input JSON
          </label>
          <textarea
            className="w-full h-64 p-4 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste your JSON here..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Formatted Output
          </label>
          {output && (
            <div className="relative h-64 overflow-auto rounded-md bg-gray-50">
              <SyntaxHighlighter
                language="json"
                style={docco}
                className="h-full"
              >
                {output}
              </SyntaxHighlighter>
            </div>
          )}
          {error && (
            <div className="flex items-center p-4 text-red-700 bg-red-50 rounded-md">
              <AlertCircle className="h-5 w-5 mr-2" />
              {error}
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-center">
        <button
          onClick={formatJson}
          className="flex items-center px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <Check className="h-5 w-5 mr-2" />
          Format JSON
        </button>
      </div>

      <div className="bg-gray-50 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">How to Use</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-600">
          <li>Paste your JSON data into the input field</li>
          <li>Click the "Format JSON" button</li>
          <li>View the formatted and validated result</li>
          <li>Copy the formatted JSON or check for validation errors</li>
        </ol>
      </div>
    </div>
  );
}