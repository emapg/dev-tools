import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench } from 'lucide-react';
import FeatureCard from '../components/FeatureCard';

const features = [
  {
    title: 'Multiple Tools',
    description: 'Access a variety of development tools in one place',
    icon: 'Tools'
  },
  {
    title: 'Easy to Use',
    description: 'Simple and intuitive interface for all your development needs',
    icon: 'MousePointer'
  },
  {
    title: 'Time Saving',
    description: 'Boost your productivity with our efficient tools',
    icon: 'Clock'
  }
];

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
          Developer Tools
          <span className="block text-indigo-600">All in One Place</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Access powerful development tools to streamline your workflow and boost productivity.
        </p>
        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <Link
            to="/tools"
            className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
          >
            <Wrench className="mr-2 h-5 w-5" />
            Get Started
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div>
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Why Choose Our Tools?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Ready to streamline your development workflow?
        </h2>
        <p className="text-gray-600 mb-6">
          Explore our collection of developer tools and boost your productivity today.
        </p>
        <Link
          to="/tools"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        >
          View All Tools
        </Link>
      </div>
    </div>
  );
}