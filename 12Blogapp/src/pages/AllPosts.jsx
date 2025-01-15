import React, { useEffect, useState } from 'react'
import Service from '@/appwrite/dbConfig';
import Container from '@/components/container/Container';
import PostCard from '@/components/PostCard';

const AllPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    Service.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 py-8">
      <Container>
        {posts.length === 0 ? (
          <div className="text-center text-gray-600">
            <h2 className="text-2xl font-bold mb-4">No Posts Available</h2>
            <p>
              It seems there are no posts to display right now. Check back
              later!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {posts.map((post) => (
              <div key={post.$id} className="bg-white rounded-xl shadow-md p-4">
                <PostCard {...post} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};


export default AllPosts
