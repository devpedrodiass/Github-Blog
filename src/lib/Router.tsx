import React from "react";
import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { Home } from "../pages/Home";
import { PostDetail } from "../pages/PostDetail";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout></DefaultLayout>}>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/:id" element={<PostDetail></PostDetail>}></Route>
      </Route>
    </Routes>
  );
}
