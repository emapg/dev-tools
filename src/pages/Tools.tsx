import React from 'react';
import ToolCard from '../components/ToolCard';

const tools = [
  {
    id: 'json-formatter',
    name: 'JSON Formatter',
    description: 'Format and validate JSON data with syntax highlighting',
    icon: 'FileJson',
    path: '/tools/json-formatter'
  },
  {
    id: 'base64',
    name: 'Base64 Converter',
    description: 'Encode and decode Base64 strings',
    icon: 'FileCode',
    path: '/tools/base64'
  },
  {
    id: 'url-encoder',
    name: 'URL Encoder/Decoder',
    description: 'Encode and decode URLs',
    icon: 'Link',
    path: '/tools/url-encoder'
  },
  {
    id: 'color-converter',
    name: 'Color Converter',
    description: 'Convert between HEX and RGB color formats',
    icon: 'Palette',
    path: '/tools/color-converter'
  },
  {
    id: 'password-generator',
    name: 'Password Generator',
    description: 'Generate secure passwords with custom requirements',
    icon: 'Key',
    path: '/tools/password-generator'
  },
  {
    id: 'hash-generator',
    name: 'Hash Generator',
    description: 'Generate secure hash values using various algorithms',
    icon: 'Hash',
    path: '/tools/hash-generator'
  }
];

export default function Tools() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Developer Tools</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <ToolCard key={tool.id} {...tool} />
        ))}
      </div>
    </div>
  );
}