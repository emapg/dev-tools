import React from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { Tool } from '../types';

export default function ToolCard({ id, name, description, icon, path }: Tool) {
  const Icon = Icons[icon as keyof typeof Icons];

  return (
    <Link
      to={path}
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
    >
      <div className="flex items-center mb-4">
        <div className="flex items-center justify-center w-12 h-12 rounded-md bg-indigo-100 text-indigo-600">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="ml-4 text-lg font-semibold text-gray-900">{name}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </Link>
  );
}