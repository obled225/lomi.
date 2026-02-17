/* @proprietary license */

'use client';

import React, { createContext, useState, useEffect } from 'react';

interface GithubStarsContextType {
  stars: number | null;
  isLoading: boolean;
}

export const GithubStarsContext = createContext<
  GithubStarsContextType | undefined
>(undefined);

let cachedStars: number | null = null;
let isLoading = false;
let hasFetched = false;

const fetchStarsOnce = async (): Promise<number | null> => {
  if (hasFetched) return cachedStars;
  if (isLoading) return null;

  hasFetched = true;
  isLoading = true;

  try {
    const response = await fetch(
      'https://api.github.com/repos/lomiafrica/lomi.',
    );
    if (response.ok) {
      const data = await response.json();
      cachedStars = data.stargazers_count;
      return cachedStars;
    }
  } catch (error) {
    console.error('Failed to fetch GitHub star count:', error);
  } finally {
    isLoading = false;
  }
  return null;
};

export function GithubStarsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [stars, setStars] = useState<number | null>(cachedStars);
  const [isLoading, setIsLoading] = useState(!hasFetched);

  useEffect(() => {
    if (hasFetched) return;

    const scheduleFetch = () => {
      fetchStarsOnce().then((result) => {
        setStars(result);
        setIsLoading(false);
      });
    };

    let id: number | ReturnType<typeof setTimeout> | undefined;
    let usedIdle = false;
    if (typeof window !== 'undefined' && window.requestIdleCallback) {
      id = window.requestIdleCallback(scheduleFetch, { timeout: 2000 });
      usedIdle = true;
    } else if (typeof window !== 'undefined') {
      id = window.setTimeout(scheduleFetch, 2000);
    }

    return () => {
      if (typeof window === 'undefined' || id === undefined) return;
      if (usedIdle && window.cancelIdleCallback) {
        window.cancelIdleCallback(id as number);
      } else {
        window.clearTimeout(id);
      }
    };
  }, []);

  return (
    <GithubStarsContext.Provider value={{ stars, isLoading }}>
      {children}
    </GithubStarsContext.Provider>
  );
}
