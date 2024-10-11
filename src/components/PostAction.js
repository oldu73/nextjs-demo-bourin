"use client";

import { useRouter } from "next/navigation";

const PostAction = ({ post }) => {
  const router = useRouter();
  const handleClick = (isDone = true) => {
    fetch("/api/posts", {
      method: "PATCH",
      body: JSON.stringify({
        id: post.id,
        isDone: isDone,
      }),
    }).then(() => router.refresh());
  };

  return (
    <div className="button-group">
      <button onClick={() => handleClick()}>Terminer</button>
      <button onClick={() => handleClick(!post.isDone)}>Toggle</button>
    </div>
  );
};

export default PostAction;
