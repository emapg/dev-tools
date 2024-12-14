import React from 'react';
import { FeatureCard as FeatureCardType } from '../types';
import * as Icons from 'lucide-react';

export default function FeatureCard({ title, description, icon }: FeatureCardType) {
  const Icon = Icons[icon as keyof typeof Icons];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-center w-12 h-12 rounded-md bg-indigo-100 text-indigo-600 mb-4">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}