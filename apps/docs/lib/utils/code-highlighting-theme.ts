/* @proprietary license */

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
    color: '#56A5F9', // exact blue from button variant
    fontWeight: '600',
  },
  string: {
    color: '#0284c7', // sky-600 for contrast
  },
  number: {
    color: '#7c3aed', // violet-600
  },
  function: {
    color: '#56A5F9', // exact blue from button variant
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
    color: '#56A5F9', // exact blue from button variant
  },
};

// Custom blue-themed syntax highlighting for dark mode
export const blueVsDarkTheme = {
  ...vs,
  'code[class*="language-"]': {
    ...vs['code[class*="language-"]'],
    color: '#e2e8f0', // slate-200 - inverted from operator
    background: 'hsl(0 0% 10.1961%)',
    border: 'none',
  },
  'pre[class*="language-"]': {
    ...vs['pre[class*="language-"]'],
    background: 'hsl(0 0% 10.1961%)',
    color: '#e2e8f0', // slate-200 - inverted from operator
    border: 'none',
  },
  comment: {
    color: '#94a3b8', // slate-400
    fontStyle: 'italic',
  },
  keyword: {
    color: '#0284c7', // sky-600 - exact same blue as button dark mode and chart
    fontWeight: '600',
  },
  boolean: {
    color: '#06b6d4', // cyan-500 - for true/false values
  },
  string: {
    color: '#56A5F9', // button blue for strings in dark mode
  },
  number: {
    color: '#06b6d4', // sky-400 - blue instead of purple
  },
  function: {
    color: '#0284c7', // sky-600 - exact same blue as button dark mode and chart
  },
  variable: {
    color: '#cbd5e1', // slate-300 - lighter for variables
  },
  operator: {
    color: '#7dd3fc', // sky-300 - inverted from text
  },
  punctuation: {
    color: '#94a3b8', // slate-400
  },
  property: {
    color: '#0284c7', // sky-600 - exact same blue as button dark mode and chart
  },
};
