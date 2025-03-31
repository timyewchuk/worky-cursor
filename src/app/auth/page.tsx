'use client';

import AuthForm from '@/components/AuthForm';

export default function AuthPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold text-primary">Worky</h1>
            <p className="mt-2 text-lg text-gray-600">Your team productivity tool</p>
          </div>
          <AuthForm />
        </div>
      </div>
    </div>
  );
} 