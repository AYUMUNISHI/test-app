import React from "react";
import { Link } from "react-router-dom";

export const Show = () => {
  return (
    <>
        <div
      className="container mx-auto  my-12 p-4"
    >
      <div className="">
        <img src="https://placehold.jp/800x400.png"
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
            {/* {new Date(post.createdAt).toLocaleDateString()} */}
            00000000000000000
          </div>
          <div
            className="flex justify-between  text-category text-sm"
          >
            {/* {
          post.categories.map((category) => {
            return ( */}
            <div
              // key={category}
              className="border border-category rounded px-1 py-0.5 mr-2"
            >
              React
              {/* {category} */}
            </div>
            <div
              // key={category}
              className="border border-category rounded px-1 py-0.5 mr-2 "
            >
              React
              {/* {category} */}
            </div>

            {/* )
          })
        } */}
          </div>
        </div>
        <div
          className="mt-2 mb-4 text-gray-500 text-2xl"
        >
          {/* {post.title} */}
          aaaaaaaaaaaa
        </div>
        <div
          className="text-gray-500 text-base line-clamp-2"
        // dangerouslySetInnerHTML={{ __html: `${post.content}` }}
        >
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        </div>

      </div>
    </div>

    </>

  )
}