import React from 'react';
import { useParams } from 'react-router-dom';
import posts from '../data/posts';


export const Show = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id));
  
  if(!post){
    return <h2>記事が見つかりません</h2>

  }

  return (
    <>
        <div
      className="container mx-auto  my-12 p-4"
    >
      <div className="">
        <img src={post.thumbnailUrl}
          alt=""
          className=""
        />
      </div>
      <div className="p-4">
        <div
          className="flex justify-between items-start "
        >
          <div
            className="text-gray-300 text-xs"
          >
            {new Date(post.createdAt).toLocaleDateString()}
          </div>
          <div
            className="flex justify-between  text-category text-sm"
          >
            {
          post.categories.map((category) => {
            return (
            <div
              key={category}
              className="border border-category rounded px-1 py-0.5 mr-2"
            >
              {category}
            </div>
            )
          })
        } 
          </div>
        </div>
        <div
          className="mt-2 mb-4 text-gray-500 text-2xl"
        >
          {post.title}
        </div>
        <div
          className="text-gray-500 text-base "
        dangerouslySetInnerHTML={{ __html: `${post.content}` }}
        >
        </div>

      </div>
    </div>

    </>

  )
}