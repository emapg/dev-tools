import React, { useState } from 'react';
import { generatePassword } from '../utils/passwordUtils';
import ToolLayout from '../components/common/ToolLayout';
import CopyButton from '../components/common/CopyButton';
import { Sliders } from 'lucide-react';

export default function PasswordGenerator() {
  const [length, setLength] = useState(12);
  const [options, setOptions] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true
  });
  const [password, setPassword] = useState('');

  const handleGenerate = () => {
    const newPassword = generatePassword(length, options);
    setPassword(newPassword);
  };

  const toggleOption = (key: keyof typeof options) => {
    setOptions(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <ToolLayout
      title="Password Generator"
      description="Generate secure passwords with custom requirements"
      instructions={[
        "Select your password requirements using the checkboxes",
        "Choose the desired password length",
        "Click 'Generate Password' to create a new password",
        "Use the copy button to copy the password"
      ]}
    >
      <div className="space-y-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(options).map(([key, value]) => (
            <label key={key} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={value}
                onChange={() => toggleOption(key as keyof typeof options)}
                className="rounded text-indigo-600 focus:ring-indigo-500"
              />
              <span className="text-sm text-gray-700 capitalize">{key}</span>
            </label>
          ))}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Password Length: {length}
          </label>
          <input
            type="range"
            min="8"
            max="32"
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value))}
            className="w-full"
          />
        </div>

        <div className="relative">
          <input
            type="text"
            value={password}
            readOnly
            className="w-full p-3 pr-10 bg-gray-50 border border-gray-300 rounded-md"
            placeholder="Generated password will appear here"
          />
          {password && <CopyButton text={password} className="absolute right-2 top-2" />}
        </div>

        <button
          onClick={handleGenerate}
          className="flex items-center justify-center w-full px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          <Sliders className="h-5 w-5 mr-2" />
          Generate Password
        </button>
      </div>
    </ToolLayout>
  );
}