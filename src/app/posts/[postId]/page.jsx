const PostsDetails = async ({ params }) => {
  const p = await params;
  console.log(p.postId, "dynamicId in params", 3);

  return (
    <div>
      <h2>PostsDetails</h2>
    </div>
  );
};

export default PostsDetails;
