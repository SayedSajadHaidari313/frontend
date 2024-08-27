import React from "react";
import {  MantineProvider, Container, Select } from "@mantine/core";
import "@mantine/core/styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TodoPage from "./pages/todo";

// Create a queryClient instance
const queryClient = new QueryClient();

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      {/* Pass queryClient instance here */}
      <QueryClientProvider client={queryClient}>
        <Container size={"lg"}>
          <TodoPage />
        </Container>
      </QueryClientProvider>
    </MantineProvider>
  );
}

export default App;
