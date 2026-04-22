'use client';

import { useEffect, useState } from 'react';

function getMappedValue(defaultValue, map) {
  if (typeof window === 'undefined') return defaultValue;
  const hash = window.location.hash.replace('#', '');
  return map[hash] ?? defaultValue;
}

export default function useHashSync({ defaultValue, map }) {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    function syncFromHash() {
      setValue(getMappedValue(defaultValue, map));
    }

    syncFromHash();
    window.addEventListener('hashchange', syncFromHash);

    return () => window.removeEventListener('hashchange', syncFromHash);
  }, [defaultValue, map]);

  return [value, setValue];
}
