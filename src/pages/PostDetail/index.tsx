import React, { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import remarkGfm from "remark-gfm";
import { api } from "../../lib/axios";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import {
  NavButton,
  PostDetailCard,
  PostDetailContainer,
  PostDetailContent,
} from "./styles";
import { formatDistanceToNow } from "date-fns";
import { enUS } from "date-fns/locale";

interface IPostDetail {
  title: string;
  comments: number;
  createdAt: string;
  githubUsername: string;
  url: string;
  body: string;
}

export function PostDetail() {
  const [post, setPost] = useState<IPostDetail>({} as IPostDetail);
  const { id } = useParams();

  async function fetchPost() {
    const response = await api.get(
      `/repos/fariapv/Github-blog-issues/issues/${id}`
    );
    const { title, comments, created_at, user, html_url, body } = response.data;
    const newPostObj = {
      title,
      githubUsername: user.login,
      comments,
      createdAt: formatDistanceToNow(new Date(created_at), {
        locale: enUS,
        addSuffix: true,
      }),
      url: html_url,
      body,
    };
    setPost(newPostObj);
  }

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <PostDetailContainer>
      <PostDetailCard>
        <header>
          <NavButton to="/" type="button">
            <i className="fa-solid fa-chevron-left"></i>
            Back
          </NavButton>
          <a href={post.url} target="_blank">
            See on Github
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </header>
        <div>
          <h1>{post.title}</h1>
        </div>
        <footer>
          <span>
            <i className="fa-brands fa-github"></i>
            {post.githubUsername}
          </span>
          <span>
            <i className="fa-solid fa-calendar"></i>
            {post.createdAt}
          </span>
          <span>
            <i className="fa-solid fa-comment"></i>
            {post.comments} Comments
          </span>
        </footer>
      </PostDetailCard>
      <PostDetailContent>
        <div>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.body}</ReactMarkdown>
        </div>
      </PostDetailContent>
    </PostDetailContainer>
  );
}
