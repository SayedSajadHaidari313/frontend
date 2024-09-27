import React from "react";
import { MantineProvider, Container } from "@mantine/core";
import "@mantine/core/styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PostDetail from "./pages/posts/detail.page";
import PostsPage from "./pages/post.page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PostsPage />,
  },
  {
    path: "post/:id",
    element: <div><PostDetail/></div>,
  },
  // {
  //   path: "todo",
  //   element: <div>Hello Todo</div>,
  // },
]);

// Create a queryClient instance
const queryClient = new QueryClient();

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      {/* Pass queryClient instance here */}
      <QueryClientProvider client={queryClient}>
        <Container size={"lg"}>
          <RouterProvider router={router}>
          </RouterProvider>
        </Container>
      </QueryClientProvider>
    </MantineProvider>
  );
}

export default App;
