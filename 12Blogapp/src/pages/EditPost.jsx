import Container from "@/components/container/Container";
import PostForm from "@/components/post-form/PostForm";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Service from "@/appwrite/dbConfig";

const EditPost = () => {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

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

  return (
    <div className="py-6">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  );
};

export default EditPost;
