import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./Pages/Profile";
import data from "./assets/ArtGallery.json";
import Home from "./Pages/Home";
import "./App.css";
import Layout from "./Components/Layout";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="*"
            element={
              <Layout>
                <Home data={{ data }} />
              </Layout>
            }
          />
          <Route
            path="/profile/:id"
            element={
              <Layout>
                <Profile data={{ data }} />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </>
  );
};
export default App;
