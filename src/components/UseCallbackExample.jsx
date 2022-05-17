import React, { useCallback, useState } from 'react';

const UseCallbackExample = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = useCallback(() => {
    setTasks((prevState) => [
      ...prevState,
      // generate a random integer between 0 and 100
      Math.floor(Math.random() * 100),
    ]);
  }, [setTasks]);
  
  return (
    <div>
      <Button addTask={addTask}></Button>
      {tasks.map((task, index) => (
        <div key={index}>{task}</div>
      ))}
    </div>
  );
};

const Button = React.memo(({ addTask }) => {
  console.log('button rendered');
  return (
    <div className="">
      <button
        className="p-3 bg-green-600 text-green-50 rounded  m-3"
        onClick={addTask}
      >
        Add Task
      </button>
    </div>
  );
});

export default UseCallbackExample;
