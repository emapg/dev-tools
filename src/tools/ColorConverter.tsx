import React, { useState } from 'react';
import { hexToRgb, rgbToHex } from '../utils/colorUtils';
import ToolLayout from '../components/common/ToolLayout';
import CopyButton from '../components/common/CopyButton';
import toast from 'react-hot-toast';

export default function ColorConverter() {
  const [hex, setHex] = useState('#');
  const [rgb, setRgb] = useState({ r: '', g: '', b: '' });

  const handleHexChange = (value: string) => {
    setHex(value);
    if (value.length === 7) {
      const result = hexToRgb(value);
      if (result) {
        setRgb(result);
      }
    }
  };

  const handleRgbChange = (color: 'r' | 'g' | 'b', value: string) => {
    const numValue = value === '' ? '' : Math.min(255, Math.max(0, parseInt(value) || 0));
    const newRgb = { ...rgb, [color]: numValue };
    setRgb(newRgb);
    
    if (newRgb.r !== '' && newRgb.g !== '' && newRgb.b !== '') {
      setHex(rgbToHex(+newRgb.r, +newRgb.g, +newRgb.b));
    }
  };

  return (
    <ToolLayout
      title="Color Converter"
      description="Convert between HEX and RGB color formats"
      instructions={[
        "Enter a HEX color code (e.g., #FF0000) or RGB values",
        "The conversion will happen automatically",
        "Use the copy button to copy the converted value",
        "Preview the color in real-time"
      ]}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            HEX Color
          </label>
          <div className="relative">
            <input
              type="text"
              value={hex}
              onChange={(e) => handleHexChange(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="#000000"
              maxLength={7}
            />
            <CopyButton text={hex} className="absolute right-2 top-2" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            RGB Color
          </label>
          <div className="grid grid-cols-3 gap-2">
            {(['r', 'g', 'b'] as const).map((color) => (
              <input
                key={color}
                type="number"
                value={rgb[color]}
                onChange={(e) => handleRgbChange(color, e.target.value)}
                className="p-3 border border-gray-300 rounded-md"
                placeholder={color.toUpperCase()}
                min="0"
                max="255"
              />
            ))}
          </div>
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Color Preview
          </label>
          <div
            className="w-full h-20 rounded-md border border-gray-300"
            style={{ backgroundColor: hex }}
          />
        </div>
      </div>
    </ToolLayout>
  );
}