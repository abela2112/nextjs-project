import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { data } from "@/utils/data";

async function getPosts() {
  try {
    const res = await fetch("http://localhost:3000/api/post", {
    cache: "no-store",
  });

  if (!res.ok) {
    return null
  }
  return res.json();
  } catch (error) {
    console.log(error);
  }
}


export const metadata = {
  title: "Enjoy blogs",
  description: "This is nextjs website for blog post",
};

const Blog = async () => {
  const posts = data;
  if (!posts) return null
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <Link
          href={`/blog/${post._id}`}
          className={styles.itemContainer}
          key={post._id}
        >

          <div className={styles.imageContainer}>
            <Image
              src={post.img}
              alt={post.title}
              width={400}
              height={400}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.description}>{post.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
