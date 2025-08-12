'use client';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'red' | 'yellow' | 'white';
}

export const LoadingSpinner = ({ size = 'md', color = 'red' }: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const colorClasses = {
    red: 'border-red-600 border-t-transparent',
    yellow: 'border-yellow-500 border-t-transparent',
    white: 'border-white border-t-transparent'
  };

  return (
    <div className={`${sizeClasses[size]} ${colorClasses[color]} border-2 rounded-full animate-spin`} />
  );
};

export const SkeletonCard = () => {
  return (
    <div className="bg-gray-200 rounded-2xl p-6 animate-pulse">
      <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
      <div className="h-4 bg-gray-300 rounded mb-2"></div>
      <div className="h-3 bg-gray-300 rounded w-3/4 mx-auto"></div>
    </div>
  );
};

export const SkeletonText = ({ lines = 3 }: { lines?: number }) => {
  return (
    <div className="animate-pulse">
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={`h-4 bg-gray-300 rounded mb-2 ${
            i === lines - 1 ? 'w-3/4' : 'w-full'
          }`}
        />
      ))}
    </div>
  );
};
