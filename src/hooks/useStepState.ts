import * as React from "react";

export const useCounter = ({initialCount = 0}) => {
  const [count, setCount] = React.useState(initialCount);
  const decrement = () => setCount(count - 1);
  const increment = () => setCount(count + 1);
  return { count, decrement, increment };
}

