import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_BASE_URL } from '../constants';


export const Show = () => {
  const { id } = useParams()
  const [post, setPosts] = useState(null)
  const [loading, setLoading]= useState(false)

  useEffect(() =>{
    const fetcher = async () => {
      setLoading(true)
      const ser =  await fetch(`${API_BASE_URL}/posts/${id}`)
      const { post } = await ser.json()
      setPosts(post)
      setLoading(false)
    }
    fetcher()
  },[id])

  if(loading){
    return <div>読み込み中...</div>
  }
  
  if(!loading && !post){
    return <div>記事がありません</div>
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