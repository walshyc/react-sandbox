import { useRef } from 'react';

const UseRefExampleOne = () => {
  const inputRef = useRef();
  const paraRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
    inputRef.current.value = 'Hello';
    inputRef.current.style.backgroundColor = 'red';
    paraRef.current.innerText = 'Goodbye';
  };

  return (
    <div>
      <form
        onSubmit={onSubmit}
        action=""
        className="flex flex-col items-start justify-start"
      >
        <label className="m-3" htmlFor="name">
          Name
        </label>
        <input
          ref={inputRef}
          type="text"
          name="name"
          id="name"
          className="p-2 bg-gray-100 text-gray-900 border border-black m-3"
        />
        <button
          type="submit"
          className="p-3 bg-green-600 text-green-50 rounded  m-3"
        >
          Submit
        </button>

        <p onClick={() => inputRef.current.focus()} ref={paraRef}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nesciunt
          deleniti maiores vel hic labore illo inventore praesentium iusto
          minima.
        </p>
      </form>
    </div>
  );
};

export default UseRefExampleOne;
