import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Custom blue-themed syntax highlighting for light mode
export const blueVsTheme = {
  ...vs,
  'code[class*="language-"]': {
    ...vs['code[class*="language-"]'],
    color: '#1e293b', // slate-800 for better contrast
    background: 'transparent',
    border: 'none',
  },
  'pre[class*="language-"]': {
    ...vs['pre[class*="language-"]'],
    background: 'transparent',
    color: '#1e293b',
    border: 'none',
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

// Custom blue-themed syntax highlighting for dark mode
export const blueVsDarkTheme = {
  ...vs,
  'code[class*="language-"]': {
    ...vs['code[class*="language-"]'],
    color: '#e2e8f0', // slate-200 for better contrast in dark
    background: 'transparent',
    border: 'none',
  },
  'pre[class*="language-"]': {
    ...vs['pre[class*="language-"]'],
    background: 'transparent',
    color: '#e2e8f0',
    border: 'none',
  },
  comment: {
    color: '#94a3b8', // slate-400
    fontStyle: 'italic',
  },
  keyword: {
    color: '#60a5fa', // blue-400
    fontWeight: '600',
  },
  string: {
    color: '#3b82f6', // blue-500 - using blue
  },
  number: {
    color: '#a78bfa', // violet-400
  },
  function: {
    color: '#60a5fa', // blue-400
  },
  variable: {
    color: '#e2e8f0', // slate-200
  },
  operator: {
    color: '#cbd5e1', // slate-300
  },
  punctuation: {
    color: '#94a3b8', // slate-400
  },
  property: {
    color: '#60a5fa', // blue-400
  },
};
