import { useState, useRef, useEffect } from 'react';

const Todo = () => {
  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState({});

  const isMounted = useRef(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          if (isMounted.current) {
            setTodos(data);
            setLoading(false);
          }
        }, 3000);
      });

    return () => {
      isMounted.current = false;
    };
  }, [isMounted]);

  return loading ? <h3>Loading...</h3> : <h3>{todos.title}</h3>;
};

export default Todo;
