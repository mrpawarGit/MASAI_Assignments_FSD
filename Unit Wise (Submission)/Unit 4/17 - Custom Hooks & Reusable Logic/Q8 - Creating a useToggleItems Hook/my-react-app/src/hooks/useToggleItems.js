import { useState } from "react";

export default function useToggleItems(initialValue, initialPosition = 0) {
  if (!Array.isArray(initialValue) || initialValue.length === 0) {
    throw new Error(
      "useToggleItems expects a non-empty array as the first argument."
    );
  }

  const [index, setIndex] = useState(
    initialPosition >= 0 && initialPosition < initialValue.length
      ? initialPosition
      : 0
  );

  const toggleState = () => {
    setIndex((prev) => (prev + 1) % initialValue.length);
  };

  return [initialValue[index], toggleState];
}
