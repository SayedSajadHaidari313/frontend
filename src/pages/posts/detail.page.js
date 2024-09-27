import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getOneTodo } from "../../utiles/Api";
import { Button, LoadingOverlay } from "@mantine/core";

function PostDetail() {
  const { id } = useParams();
  console.log(id);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["fetch-post", id],
    queryFn: () => getOneTodo(id),
  });
  const navigate = useNavigate();

  if (isLoading) {
    return <LoadingOverlay visible />;
  }
  return (
    <div>
      <Button variant="outline" onClick={() =>  {
        navigate("/")
      }}>Back</Button>
      <h1>{data?.data.title}</h1>
     <p>{data?.data.body}</p>
    </div>
  )

}
export default PostDetail;
