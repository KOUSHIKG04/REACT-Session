import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Service } from '@/appwrite/dbConfig';


const PostForm = ({ post }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: post?.title || "",
      content: post?.content || "",
      featuredImage: post?.featuredImage || "",
      status: post?.status || "active",
    },
  });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const validateUserId = (userId) => {
    const userIdRegex = /^[a-zA-Z0-9][a-zA-Z0-9._-]{0,35}$/;
    return userIdRegex.test(userId);
  };

  const submit = async (data) => {
    try {
      if (!userData?.$id) {
        throw new Error("User data is invalid or user is not authenticated.");
      }

      const sanitizedUserId = userData.$id.slice(0, 36);

      if (!validateUserId(sanitizedUserId)) {
        throw new Error("Invalid userId format.");
      }

      if (post) {
        const file = data.image[0]
          ? await Service.uploadFile(data.image[0])
          : null;

        if (file) {
          await Service.deleteFile(post.featuredImage);
        }

        const dbPost = await Service.updatePost(post.$id, {
          ...data,
          featuredImage: file ? file.$id : post.featuredImage,
          userId: sanitizedUserId,
        });

        navigate(`/posts/${dbPost.$id}`);
      } else {
        const file = data.image[0]
          ? await Service.uploadFile(data.image[0])
          : null;

        const dbPost = await Service.createPost({
          ...data,
          featuredImage: file ? file.$id : "",
          userId: sanitizedUserId,
        });

        navigate(`/posts/${dbPost.$id}`);
      }
    } catch (error) {
      console.error(error.message);
      // Handle the error (e.g., set an error state, show a message to the user, etc.)
    }
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <input
        type="text"
        {...register('title', { required: true })}
        placeholder="Title"
      />
      {errors.title && <p>Title is required</p>}

      <textarea
        {...register('content', { required: true })}
        placeholder="Content"
      />
      {errors.content && <p>Content is required</p>}

      <input
        type="file"
        {...register('image')}
      />

      <select {...register('status')}>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>

      <button type="submit">Submit</button>
    </form>
  );
};

export default PostForm;