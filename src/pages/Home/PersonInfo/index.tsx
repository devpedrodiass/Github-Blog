import React, { useEffect, useState } from "react";
import { PersonInfoContainer } from "./styles";

import avatar from "../../../assets/avatar.svg";
import { api } from "../../../lib/axios";

interface IUserInfo {
  name: string;
  followers: number;
  githubUsername: string;
  company: string;
  url: string;
  imgUrl: string;
  description: string;
}

export function PersonInfo() {
  const [userInfo, setUserInfo] = useState<IUserInfo>();

  async function fetchUsers() {
    const response = await api.get("users/fariapv");
    const { name, followers, login, company, html_url, avatar_url, bio } =
      response.data;
    const newUserObj = {
      name,
      followers,
      githubUsername: login,
      company,
      url: html_url,
      imgUrl: avatar_url,
      description: bio,
    };
    setUserInfo(newUserObj);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <PersonInfoContainer>
      <img width={148} height={148} src={userInfo?.imgUrl} alt="Person Photo" />
      <div>
        <header>
          <h1>{userInfo?.name}</h1>
          <a href={userInfo?.url} target="_blank">
            GITHUB <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </header>
        <main>
          <p>{userInfo?.description}</p>
        </main>
        <footer>
          <span>
            <i className="fa-brands fa-github"></i>
            {userInfo?.githubUsername}
          </span>
          <span>
            <i className="fa-solid fa-building"></i>
            {userInfo?.company}
          </span>
          <span>
            <i className="fa-solid fa-user-group"></i>
            {userInfo?.followers} Followers
          </span>
        </footer>
      </div>
    </PersonInfoContainer>
  );
}
