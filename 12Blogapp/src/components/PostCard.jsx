import React from 'react'
import Service from '@/appwrite/dbConfig';
import { Link } from 'react-router-dom';

const PostCard = ({ $id, title, featuredImage }) => {
  return (
    <Link to={`/post/${$id}`}>
      <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-4">
        <div className="w-full mb-4">
          <img
            src={Service.getFilePreview(featuredImage)}
            alt={title}
            className="rounded-xl object-cover w-full h-48"
          />
        </div>
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      </div>
    </Link>
  );
};

export default PostCard
