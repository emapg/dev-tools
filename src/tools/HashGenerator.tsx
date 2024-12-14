import React, { useState } from 'react';
import { generateHash } from '../utils/hashUtils';
import ToolLayout from '../components/common/ToolLayout';
import CopyButton from '../components/common/CopyButton';
import { Hash } from 'lucide-react';

export default function HashGenerator() {
  const [input, setInput] = useState('');
  const [algorithm, setAlgorithm] = useState('SHA-256');
  const [hash, setHash] = useState('');

  const algorithms = ['SHA-256', 'SHA-384', 'SHA-512'];

  const handleGenerate = async () => {
    if (!input.trim()) return;
    const result = await generateHash(input, algorithm);
    setHash(result);
  };

  return (
    <ToolLayout
      title="Hash Generator"
      description="Generate secure hash values using various algorithms"
      instructions={[
        "Enter the text you want to hash",
        "Select the hashing algorithm",
        "Click 'Generate Hash' to create the hash",
        "Use the copy button to copy the generated hash"
      ]}
    >
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Input Text
          </label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full h-32 p-3 border border-gray-300 rounded-md"
            placeholder="Enter text to hash..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Algorithm
          </label>
          <select
            value={algorithm}
            onChange={(e) => setAlgorithm(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md"
          >
            {algorithms.map((algo) => (
              <option key={algo} value={algo}>
                {algo}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Generated Hash
          </label>
          <div className="relative">
            <input
              type="text"
              value={hash}
              readOnly
              className="w-full p-3 pr-10 bg-gray-50 border border-gray-300 rounded-md"
              placeholder="Hash will appear here..."
            />
            {hash && <CopyButton text={hash} className="absolute right-2 top-2" />}
          </div>
        </div>

        <button
          onClick={handleGenerate}
          className="flex items-center justify-center w-full px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          <Hash className="h-5 w-5 mr-2" />
          Generate Hash
        </button>
      </div>
    </ToolLayout>
  );
}