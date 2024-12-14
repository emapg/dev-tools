import React, { useState } from 'react';
import { ArrowDownUp, Copy } from 'lucide-react';
import toast from 'react-hot-toast';

export default function Base64Converter() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [mode, setMode] = useState<'encode' | 'decode'>('encode');

  const handleConvert = () => {
    try {
      if (!input.trim()) {
        throw new Error('Please enter some text');
      }

      if (mode === 'encode') {
        const encoded = btoa(input);
        setOutput(encoded);
        toast.success('Text encoded successfully!');
      } else {
        const decoded = atob(input);
        setOutput(decoded);
        toast.success('Text decoded successfully!');
      }
    } catch (err) {
      toast.error(mode === 'decode' ? 'Invalid Base64 string' : 'Encoding failed');
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
    toast.success('Copied to clipboard!');
  };

  const toggleMode = () => {
    setMode(mode === 'encode' ? 'decode' : 'encode');
    setInput('');
    setOutput('');
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Base64 Converter</h1>
        <p className="text-gray-600">
          {mode === 'encode' ? 'Encode text to Base64' : 'Decode Base64 to text'}
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {mode === 'encode' ? 'Text to Encode' : 'Base64 to Decode'}
          </label>
          <textarea
            className="w-full h-32 p-4 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={mode === 'encode' ? 'Enter text to encode...' : 'Enter Base64 to decode...'}
          />
        </div>

        <div className="flex justify-center">
          <button
            onClick={toggleMode}
            className="flex items-center px-4 py-2 text-sm text-indigo-600 bg-indigo-50 rounded-md hover:bg-indigo-100"
          >
            <ArrowDownUp className="h-4 w-4 mr-2" />
            Switch to {mode === 'encode' ? 'Decode' : 'Encode'}
          </button>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {mode === 'encode' ? 'Base64 Output' : 'Decoded Text'}
          </label>
          <div className="relative">
            <textarea
              className="w-full h-32 p-4 border border-gray-300 rounded-md shadow-sm bg-gray-50"
              value={output}
              readOnly
              placeholder="Result will appear here..."
            />
            {output && (
              <button
                onClick={copyToClipboard}
                className="absolute top-2 right-2 p-2 text-gray-500 hover:text-indigo-600"
                title="Copy to clipboard"
              >
                <Copy className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleConvert}
            className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {mode === 'encode' ? 'Encode to Base64' : 'Decode from Base64'}
          </button>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">How to Use</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-600">
          <li>Choose encode or decode mode using the switch button</li>
          <li>Enter your text in the input field</li>
          <li>Click the convert button</li>
          <li>Copy the result using the copy button</li>
        </ol>
      </div>
    </div>
  );
}