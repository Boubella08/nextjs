import { Article } from '@/utiles/type';
import React from 'react';

interface SingleProps {
  params: { id: string };
}

const Single = async ({ params }: SingleProps) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch article");
  }

  const article: Article = await response.json();

  return (
    <section className=" fix-height p-8">
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-red-600">{article.title}</h1>
        <div className="text-gray-500 text-sm mt-2">01/01/2024</div>
        <p className="text-gray-800 mt-4">{article.body}</p>
      </div>
    </section>
  );
};

export default Single;
