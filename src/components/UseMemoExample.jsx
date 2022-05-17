import { useEffect, useState, useRef, useMemo } from 'react';

const UseMemoExample = () => {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);

  const renders = useRef(1);

  const sqrt = useMemo(() => getSqrt(number), [number]);

  useEffect(() => {
    renders.current += 1;
  });

  const onClick = () => {
    setInc((prevState) => {
      console.log(prevState);
      return prevState + 1;
    });
  };
  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        className="p-2 bg-gray-100 text-gray-900 border border-black m-3"
      />
      <h2 className="my-3">
        The sqrt of {number} is {sqrt}
      </h2>
      <button
        onClick={onClick}
        className="p-3 bg-green-600 text-green-50 rounded  m-3"
      >
        Rerender
      </button>
      <h1 className="text-3xl font-bold ">Renders: {renders.current}</h1>
    </div>
  );
};

const getSqrt = (number) => {
  for (let i = 0; i <= 10000; i++) {
    console.log(i);
  }
  console.log('expensive function called');
  return Math.sqrt(number);
};

export default UseMemoExample;
