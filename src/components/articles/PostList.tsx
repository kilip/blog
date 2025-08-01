import createExcerpt from "@/lib/create-excerpt";
import { navigate } from "astro/virtual-modules/transitions-router.js";
import type { CollectionEntry } from "astro:content";

export type Props = {
  posts: CollectionEntry<"articles">[];
};

export default function PostList({ posts }: Props) {
  const handleClick = (postId: string) => {
    // This function can be used to handle click events if needed
    console.log(`Post clicked: /articles/${postId}`);
    navigate(`/articles/${postId}`);
  };
  return (
    <div>
      {posts.map((post) => (
        <div
          key={post.id}
          className="mb-4 cursor-pointer"
          onClick={() => handleClick(post.id)}
        >
          <h2 className="text-xl font-bold">{post.data.title}</h2>
          <p
            className="text-gray-600"
            dangerouslySetInnerHTML={{ __html: createExcerpt(post.body ?? "") }}
          ></p>
        </div>
      ))}
    </div>
  );
}
