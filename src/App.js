import React from "react";
import Container from "./components/global/Container";
import Layout from "./components/global/Layout";
import SearchInput from "./components/global/SearchInput";
import Tabs from "./components/global/Tabs";
import RecipeList from "./components/recipes/RecipeList";

const App = () => {
  return (
    <Layout>
      <Container>
        <h1 className="font-bold text-2xl max-w-xs mb-5">
          Find the best recipe for cooking.
        </h1>
        <SearchInput />
      </Container>

      <Tabs />
      <RecipeList />
      <div className="h-screen"></div>
    </Layout>
  );
};

export default App;
