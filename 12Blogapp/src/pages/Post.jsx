import Container from "@/components/container/Container";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import Service from "@/appwrite/dbConfig";
import parse from "html-react-parser";

const Post = () => {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const userData = useSelector((state) => state.auth.userData);
  const navigate = useNavigate();
  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      Service.getPost(slug).then((post) => {
        if (post) {
          setPost(post);
        } else {
          navigate("/");
        }
      });
    }
  }, [slug, navigate]);

  const deletePost = () => {
    Service.deletePost(post.$id).then((status) => {
      if (status) {
        Service.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

  return post ? (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 py-8 px-4">
      <Container>
        <div className="w-full max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <div className="relative w-full flex justify-center border border-gray-200 rounded-xl overflow-hidden mb-6">
            <img
              src={Service.getFilePreview(post.featuredImage)}
              alt={post.title}
              className="rounded-xl max-h-[300px] w-full object-cover"
            />
            {isAuthor && (
              <div className="absolute top-4 right-4 flex space-x-3">
                <Link to={`/edit-post/${post.$id}`}>
                  <Button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow">
                    Edit
                  </Button>
                </Link>
                <Button
                  onClick={deletePost}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg shadow"
                >
                  Delete
                </Button>
              </div>
            )}
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {post.title}
          </h1>
          <div className="text-gray-700 text-base leading-relaxed">
            {parse(post.content)}
          </div>
        </div>
      </Container>
    </div>
  ) : null;
};

export default Post;
