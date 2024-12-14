import React from 'react';
import { Copy } from 'lucide-react';
import toast from 'react-hot-toast';

interface CopyButtonProps {
  text: string;
  className?: string;
}

export default function CopyButton({ text, className = '' }: CopyButtonProps) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
    toast.success('Copied to clipboard!');
  };

  return (
    <button
      onClick={copyToClipboard}
      className={`p-2 text-gray-500 hover:text-indigo-600 ${className}`}
      title="Copy to clipboard"
    >
      <Copy className="h-5 w-5" />
    </button>
  );
}