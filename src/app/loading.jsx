const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div>
        <h2>loading...</h2>
        <span className="loading loading-ball loading-xs"></span>
        <span className="loading loading-ball loading-sm"></span>
        <span className="loading loading-ball loading-md"></span>
        <span className="loading loading-ball loading-lg"></span>
        <span className="loading loading-ball loading-xl"></span>
      </div>
    </div>
  );
};

export default Loading;
