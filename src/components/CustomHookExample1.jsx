import useFetch from '../hooks/useFetch';

const CustomHookExample1 = () => {
  const { data, loading } = useFetch(
    'https://jsonplaceholder.typicode.com/posts',
    {}
  );
  if (loading) {
    return <h3>Loading...</h3>;
  }
  return (
    <div className='flex flex-col gap-3 mx-4 text-left'>
      {data.map((post) => (
        <div className='font-semibold text-2xl' key={post.id}>{post.title}</div>
      ))}
    </div>
  );
};

export default CustomHookExample1;
