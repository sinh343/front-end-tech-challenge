import React from "react";
import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <h1>No page found - Try searching for NASA assets <Link to={"/"}>here</Link>! </h1>
  );
}