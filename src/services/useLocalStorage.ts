import { useState } from 'react';

export function useLocalStorage<T>(key: string, startValue: T): [T, (v: T) => void] {
  const [value, setValue] = useState(() => {
    const data = localStorage.getItem(key);

    if (data === null) {
      return startValue;
    };

    try {
      return JSON.parse(data);
    } catch (e) {
      return startValue;
    }
  });

  // const save = (newValue: T | ((v: T) => T)) => {
  //   const valueToStorage = newValue instanceof Function
  //     ? newValue(value)
  //     : newValue;

  function save(newValue: T | ((v: T) => T)) {
    const valueToStorage = newValue instanceof Function
      ? newValue(value)
      : newValue;

    localStorage.setItem(key, JSON.stringify(valueToStorage));
    setValue(valueToStorage);
  };

  return [value, save];
}
