import React, { useState, useEffect, useRef } from "react";
import { Redirect } from "react-router-dom";
import Quill from "react-quill";
import "react-quill/dist/quill.snow.css";
const PostForm = ({ post: propsPost, addNewPost, updatePost }) => {
  const [post, setPost] = useState({ ...propsPost });
  const [saved, setSaved] = useState(false);

  const prevPostRef = useRef();
  useEffect(() => {
    prevPostRef.current = post;
  }, [post]);
  const prevPost = prevPostRef.current;

  const quillRef = React.useRef();
  useEffect(() => {
    if (prevPost && quillRef.current) {
      if (propsPost.key !== prevPost.key) {
        setPost({ ...propsPost });
        quillRef.current.getEditor().setContents(``);
      }
    }
  }, [prevPost, propsPost]);

  const handlePostForm = (event) => {
    event.preventDefault();
    if (post.title) {
      if (updatePost) {
        updatePost(post);
      } else {
        addNewPost(post);
      }
      setSaved(true);
    } else {
      alert(" Recipe Title required");
    }
  };

  if (saved === true) {
    return <Redirect to="/" />;
  }
  return (
    <form className="container" onSubmit={handlePostForm}>
      <h1>Add a New Recipe</h1>
      <h3>
        <label htmlFor="form-title">Recipe Name:</label>
        <br />
        <input
          defaultValue={post.title}
          id="form-title"
          value={post.title}
          onChange={(event) =>
            setPost({
              ...post,
              title: event.target.value,
            })
          }
        />
      </h3>
      <h3>
        <label htmlFor="form-content">Ingredients/instructions:</label>
      </h3>
      <Quill
        ref={quillRef}
        defaultValue={post.content}
        onChange={(content, delta, source, editor) => {
          setPost({
            ...post,
            content: editor.getContents(),
          });
        }}
      />
     
      <p>
        
        <button type="submit">Save</button>
      </p>
    </form>
  );
};
export default PostForm;
