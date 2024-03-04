import React from "react";
import { useParams } from "react-router-dom";
import vdd from "../../videos/video1.mp4";

const Chapter = () => {
  const { id } = useParams();

  return (
    <>
      <div>Chapter {id}</div>
      <video src={vdd} controls></video>
    </>
  );
};

export default Chapter;
