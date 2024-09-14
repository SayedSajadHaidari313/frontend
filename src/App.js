import React from "react";
import { MantineProvider, Container } from "@mantine/core";
import "@mantine/core/styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TodoPage from "./pages/todo";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TodoPage />,
  },
  {
    path: "todo",
    element: <div>Hello Todo</div>,
  },
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
