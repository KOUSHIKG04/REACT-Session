import React, { useEffect, useState } from "react";
import AppService from "@/appwrite/dbConfig";
import PostCard from "@/components/PostCard";
import { Link } from "react-router-dom";
import Container from "@/components/container/Container";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    AppService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div
        className="flex items-center justify-center w-full bg-gray-50"
        style={{ minHeight: "calc(90vh - 4rem)" }}
      >
        <div className="mx-auto w-full max-w-md  text-center">
          <h1 className="text-2xl font-bold text-gray-800">
            LOGIN TO READ THE POSTS
          </h1>
          <p className="mt-4 mb-4 text-sm text-gray-600">
            YOU NEED TO BE LOGGED IN TO READ THE POSTS
          </p>{" "}
          <Link to="/login" className=" text-sm text-gray-600 ">
            CLICK HERE TO <span className="underline font-semibold">LOGIN</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 py-8">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {posts.map((post) => (
            <div key={post.$id} className="bg-white rounded-xl shadow-md p-4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Home;
