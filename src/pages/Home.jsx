import React from "react";
import { Link } from "react-router-dom";

export default function Home({ src }) {
  return (
    <>
      {
        src.map(post => (
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