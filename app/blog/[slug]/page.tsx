import { allPosts } from "@/.contentlayer/generated";
import BlogContainer from "@/components/Blog/BlogContainer";
import BlogContent from "@/components/Blog/BlogContent";
import { OpenGraphConfig } from "@/lib/OpenGraph";
import { generateBlogTitles, slugify } from "@/lib/utils";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params: { slug } }: Props) {
  const post = allPosts.find((item) => slugify(item.title) === slug);

  if (post) {
    return {
      title: post.title,
      ...(typeof OpenGraphConfig.post === "function"
        ? OpenGraphConfig.post({
            name: post.title,
            slug: slugify(post.title),
          })
        : null),
    };
  }

  return {};
}

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
  return generateBlogTitles();
}
