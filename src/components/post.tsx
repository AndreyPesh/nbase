'use client';
import { prisma } from '@/lib/prisma';
import { Post } from '@prisma/client';
import axios from 'axios';
import React from 'react';

const Post = () => {
  const addPost = async () => {
    const post = await (
      await fetch('/api/post', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
      })
    ).json();
    // console.log(post);
  };

  const getPosts = async () => {
    const posts = await axios.get<Post[]>('/api/post', { params: { page: 0 } });
    console.log(posts);
  };

  return (
    <div>
      <button onClick={() => addPost()}>Add post</button>
      <hr />
      <button onClick={getPosts}>Get posts</button>
    </div>
  );
};

export default Post;
