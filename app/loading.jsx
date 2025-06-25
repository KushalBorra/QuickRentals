"use client";
import ClipLoader from "react-spinners/ClipLoader";

const overrride = {
  display: "block",
  margin: "100px auto",
};
const LoadingPage = () => {
  return (
    <ClipLoader
      color="#3b82f6"
      cssOverride={overrride}
      size={150}
      aria-label="Loading-spinner"
    />
  );
};

export default LoadingPage;
