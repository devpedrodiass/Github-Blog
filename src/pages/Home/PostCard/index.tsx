import React from "react";
import { IPost } from "..";
import { formatText } from "../../../utils/formatText";
import { PostCardContainer } from "./styles";

interface IPostCard {
  post: IPost;
}

export function PostCard({ post }: IPostCard) {
  const { createdAt, body, title, number } = post;
  return (
    <PostCardContainer to={`/${number}`}>
      <header>
        <h1>{title}</h1>
        <span>1 day ago</span>
      </header>
      <main>
        <p>{formatText(body, 80)}</p>
      </main>
    </PostCardContainer>
  );
}
