"use client";
import { useState } from "react";
import Button from "../Button/Button";

export default function Counter() {
  const [count, setcount] = useState(0);

  const increment = () => {
    setcount(count + 1);
  };
  const decrement = () => {
    setcount(count - 1);
  };
  const reset = () => {
    setcount(0);
  };

  return (
    <div className="border-spacing-16 rounded-xl border-solid border-2 shadow-lg shadow-gray-800 ring ring-gray-500 ring-offset-4 border-gray-500 bg-gray-300 w-96 mx-auto h- mt-44 flex flex-col items-center">
      <h1 className="text-2xl mb-8 mt-11 font-bold">Counter App </h1>
      <h2 className="text-6xl font-bold mb-8">{count}</h2>
      <div className="pb-11">
        <Button
          title="Decrement"
          onclick={decrement}
          color="px-4 py-2 bg-red-500 hover:bg-red-700 text-white rounded mr-2"
        />
        <Button
          title="Reset"
          onclick={reset}
          color="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded mr-2"
        />
        <Button
          title="Increment"
          onclick={increment}
          color="px-4 py-2 bg-green-500 hover:bg-green-700 text-white rounded mr-2"
        />
      </div>
    </div>
  );
}
