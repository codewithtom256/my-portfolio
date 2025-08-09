import Link from "next/link";

export default function Blog() {
  return (
    <div>
      <h1>Blog Posts</h1>
      <p>List of blog posts will go here.</p>
      <ul>
        <li>
          <Link href="/blog/post-1">Blog Post 1</Link>
        </li>
        <li>
          <Link href="/blog/post-2">Blog Post 2</Link>
        </li>
        <li>
          <Link href="/blog/post-3">Blog Post 3</Link>
        </li>
      </ul>
    </div>
  );
}
