import React from 'react'
import Link from 'next/link'
import { Article } from "@/utiles/type"

interface articleitemProps {
  article: Article;
}

const articleitem = ({ article }: articleitemProps) => {
  return (
    <div className="w-10 p-5 rounded-lg my-2 border-2 border-gray-700 shadow-lg md:w-2/5 lg:w-1/4">
      <h1 className="text-xl font-extrabold text-red-600 line-clamp-1">{article.title}</h1>
      <p className="my-2 text-green-400 line-clamp-2">{article.body}</p>
      <Link 
        className="text-white bg-slate-800 p-2 rounded hover:bg-red-600" 
        href={`/Article/${article.id}`} // Correct dynamic route
      >
        Read more
      </Link>
    </div>
  )
}

export default articleitem;
