import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Custom blue-themed syntax highlighting for light mode
export const blueVsTheme = {
  ...vs,
  'code[class*="language-"]': {
    ...vs['code[class*="language-"]'],
    color: '#1e293b', // slate-800 for better contrast
    background: 'transparent',
  },
  'pre[class*="language-"]': {
    ...vs['pre[class*="language-"]'],
    background: 'transparent',
    color: '#1e293b',
  },
  comment: {
    color: '#64748b', // slate-500
    fontStyle: 'italic',
  },
  keyword: {
    color: '#3b82f6', // blue-500
    fontWeight: '600',
  },
  string: {
    color: '#2563eb', // blue-600 - using blue instead of green
  },
  number: {
    color: '#7c3aed', // violet-600
  },
  function: {
    color: '#3b82f6', // blue-500
  },
  variable: {
    color: '#1e293b', // slate-800
  },
  operator: {
    color: '#374151', // gray-700
  },
  punctuation: {
    color: '#6b7280', // gray-500
  },
  property: {
    color: '#3b82f6', // blue-500
  },
};
