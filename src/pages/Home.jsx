import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_BASE_URL } from "../constants";

export const Home = () => {

  const [posts, setPosts] = useState(null)
  const [loading, setLoading] =useState(false)

  useEffect(() =>{
    const fetcher = async () =>{
      setLoading(true)
      const ser =  await fetch(`${API_BASE_URL}/posts`)
      const { posts } = await ser.json()
      setPosts(posts)
      setLoading(false)
    }
    fetcher()
  }, [])

  if(loading){
    return<div>読み込み中...</div>
  }

  if(!loading && !posts){
    return<div>記事がありません</div>
  }

  return (
    <>
      {
        posts.map(post => (
          <div key={post.id}>
            <Link to={`/posts/${post.id}`}>
              <div
                className="container mx-auto border border-gray-300 my-12 p-4"
              >

                <div
                  className="flex justify-between items-center "
                >
                  <div
                    className="text-gray-300 text-xs"
                  >
                    {new Date(post.createdAt).toLocaleDateString()}
                  </div>
                  <div
                    className="flex justify-between gap-2 text-category text-sm"
                  >
                    {
                      post.categories.map((category) => {
                        return (
                          <div
                            key={category}
                            className="border border-category rounded px-1 py-0.5 "
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
                  className="text-gray-500 text-base line-clamp-2"
                  dangerouslySetInnerHTML={{ __html: `${post.content}` }}
                >

                </div>
              </div>

            </Link>

          </div>

        ))
      }
    </>
  )
}