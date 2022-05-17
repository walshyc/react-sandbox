import { useState, useEffect, useRef } from 'react';

const UseRefexampleTwo = () => {
  const renders = useRef(1);
  const prevName = useRef('');

  const [name, setName] = useState('');

  useEffect(() => {
    renders.current = renders.current + 1;
    prevName.current = name;
  }, [name]);

  return (
    <div>
      <h1 className="text-3xl font-bold ">Renders: {renders.current}</h1>
      <h2 className="text-xl font-base ">
        Prev Name State: {prevName.current}
      </h2>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        className="p-2 bg-gray-100 text-gray-900 border border-black m-3"
      />
    </div>
  );
};

export default UseRefexampleTwo;
