import { allPosts } from "@/.contentlayer/generated";
import BlogContainer from "@/components/Blog/BlogContainer";
import BlogContent from "@/components/Blog/BlogContent";
import { slugify } from "@/lib/utils";

type Props = {
  params: {
    slug: string;
  };
};

export default function Post({ params: { slug } }: Props) {
  const post = allPosts.find((item) => slugify(item.title) === slug);

  if (!post) return <h1>Post not found</h1>;

  return (
    <BlogContainer post={post}>
      <BlogContent content={post.body.code} />
    </BlogContainer>
  );
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: slugify(post.title),
  }));
}
