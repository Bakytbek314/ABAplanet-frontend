"use client";
import Post from "@/entities/post/ui/post";
import { usePostsStore } from "@/shared/store/usePostsStore";
import { useEffect } from "react";
import styles from "./posts.module.scss";

const Posts = () => {
    const { fetchPosts, posts } = usePostsStore();

    useEffect(() => {
        fetchPosts();
    }, []);
    return (
        <section className={styles.posts}>
            { posts && posts.map((post) => (
                <Post photo={post.photo} description={post.description} key={post.id}/>
            ))}
        </section>
    )
};

export default Posts;