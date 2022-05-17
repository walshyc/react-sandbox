import useLocalStorage from '../hooks/useLocalStorage';
const CustomHookExample2 = () => {
  const [task, setTask] = useLocalStorage('task', '');
  const [tasks, setTasks] = useLocalStorage('tasks', []);

  const onSubmit = (e) => {
    e.preventDefault();
    const taskObject = {
      task,
      completed: false,
      date: new Date().toLocaleDateString(),
    };
    setTasks([...tasks, taskObject]);
    setTask('');
  };

  return (
    <>
      <form onSubmit={onSubmit} action="" className="mx-10">
        <div className="mb-3">
          <label
            htmlFor="task"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Task
          </label>
          <input
            id="task"
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button
            type="submit"
            className="p-3 bg-green-600 text-green-50 rounded  m-3"
          >
            Submit
          </button>
        </div>
      </form>
      <hr />
      {tasks.map((task, index) => (
        <div key={index} className="mb-3 text-xl font-semibold">
          <p>{task.task}</p>
          <p>{task.date}</p>
          <p>{task.completed ? 'Done' : 'Not Done'}</p>
        </div>
      ))}
    </>
  );
};

export default CustomHookExample2;
