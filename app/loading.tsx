"use client";
import { ClipLoader } from "react-spinners";

type Props = {
  loading: boolean;
};

const override = {
  display: "block",
  margin: "100px auto",
};

const LoadingPage = ({ loading }: Props) => {
  return (
    <ClipLoader
      color="#3b82f6"
      loading={loading}
      cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
    />
  );
};

export default LoadingPage;
