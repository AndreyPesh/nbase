'use client'
import { prisma } from '@/lib/prisma';
import React from 'react';

const Post = () => {
  const addPost = async () => {
    const post = await (await fetch('/api/post', {method: 'POST', headers: {'Content-type': 'application/json'}})).json()
    // console.log(post);
    
  }
  return (
    <div>
      <button onClick={() => addPost()}>Add post</button>
    </div>
  );
};

export default Post;