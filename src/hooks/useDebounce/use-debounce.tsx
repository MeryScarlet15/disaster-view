import { useEffect, useState } from "react";

export const useDebounce = (wait: number = 0) => {
  const [value, setValue] = useState<string>('')
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeOutId = window.setTimeout(() => {
      setDebouncedValue(value);
    }, wait);
    return () => {
      window.clearTimeout(timeOutId);
    };
  }, [value]);

  return {
    setValue,
    debouncedValue
  };
}