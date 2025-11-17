import React from "react";

export const LoadingState: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
    <div className="text-center">
      <div className="inline-block animate-spin rounded-full h-20 w-20 border-4 border-solid border-blue-500 border-t-transparent mb-4"></div>
      <p className="text-gray-600 text-xl font-medium">Loading features...</p>
    </div>
  </div>
);
