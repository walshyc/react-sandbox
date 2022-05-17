import { useState } from 'react';
import Todo from './Todo';

const UseRefExampleThree = () => {
  const [showTodo, setShowTodo] = useState(true);
  return (
    <div>
      {showTodo && <Todo />}

      <button
        onClick={() => setShowTodo(!showTodo)}
        className="p-3 bg-green-600 text-green-50 rounded  m-3"
      >
        Toggle Todo
      </button>
    </div>
  );
};

export default UseRefExampleThree;
