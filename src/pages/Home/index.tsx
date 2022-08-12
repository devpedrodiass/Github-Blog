import React, { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { PersonInfo } from "./PersonInfo";
import { PostCard } from "./PostCard";
import {
  HomeContainer,
  HomeContent,
  ListSection,
  SearchSection,
} from "./styles";

export interface IPost {
  title: string;
  body: string;
  created_at: string;
  number: string;
}

export function Home() {
  const [posts, setPosts] = useState<IPost[]>([] as IPost[]);
  const [postsCounter, setPostsCounter] = useState(0);

  async function fetchPosts(query = "") {
    const response = await api.get(
      `search/issues?q=${
        query ? query : ""
      }%20repo:${"fariapv"}/Github-blog-issues`
    );
    setPosts(response.data.items);
    setPostsCounter(response.data.total_count);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <HomeContainer>
      <PersonInfo></PersonInfo>
      <HomeContent>
        <SearchSection>
          <div>
            <span>Posts</span>
            <small>{postsCounter} posts</small>
          </div>
          <input
            type="text"
            onBlur={(e) => fetchPosts(e.target.value)}
            placeholder="Search a Post"
          />
        </SearchSection>
        <ListSection>
          {posts &&
            posts.map((post) => (
              <PostCard
                key={`${post.title}-${post.number}`}
                post={post}
              ></PostCard>
            ))}
        </ListSection>
      </HomeContent>
    </HomeContainer>
  );
}
