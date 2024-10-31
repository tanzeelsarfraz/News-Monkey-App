import { Component, useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  const pageSize = 50;
  const [mode, setMode] = useState("light");
  const [progress, setProgress] = useState(0); 
  const handleModeChange = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  const setLoaderBarState = (progress) => {
    setProgress(progress);
  };
    return (
      <>
        <Router>
          <Navbar
            mode={mode}
            handleModeChange={handleModeChange}
          />
          <LoadingBar
            color="#f11946"
            height={3}
            progress={progress}
          />
          <div className="container my-3">
            <Routes>
              <Route
                path="/"
                element={
                  <News apiKey = {apiKey} 
                    setLoaderBarState={setLoaderBarState}
                    key="general"
                    mode={mode}
                    pageSize={pageSize}
                    country="us"
                    category="general"
                  />
                }
              ></Route>
              <Route
                path="/business"
                element={
                  <News apiKey = {apiKey} 
                    setLoaderBarState={setLoaderBarState}
                    key="business"
                    mode={mode}
                    pageSize={pageSize}
                    country="us"
                    category="business"
                  />
                }
              ></Route>
              <Route
                path="/entertainment"
                element={
                  <News apiKey = {apiKey} 
                    setLoaderBarState={setLoaderBarState}
                    key="entertainment"
                    mode={mode}
                    pageSize={pageSize}
                    country="us"
                    category="entertainment"
                  />
                }
              ></Route>
              <Route
                path="/general"
                element={
                  <News apiKey = {apiKey} 
                    setLoaderBarState={setLoaderBarState}
                    key="general"
                    mode={mode}
                    pageSize={pageSize}
                    country="us"
                    category="general"
                  />
                }
              ></Route>
              <Route
                path="/health"
                element={
                  <News apiKey = {apiKey} 
                    setLoaderBarState={setLoaderBarState}
                    key="health"
                    mode={mode}
                    pageSize={pageSize}
                    country="us"
                    category="health"
                  />
                }
              ></Route>
              <Route
                path="/science"
                element={
                  <News apiKey = {apiKey} 
                    setLoaderBarState={setLoaderBarState}
                    key="science"
                    mode={mode}
                    pageSize={pageSize}
                    country="us"
                    category="science"
                  />
                }
              ></Route>
              <Route
                path="/sports"
                element={
                  <News apiKey = {apiKey} 
                    setLoaderBarState={setLoaderBarState}
                    key="sports"
                    mode={mode}
                    pageSize={pageSize}
                    country="us"
                    category="sports"
                  />
                }
              ></Route>
              <Route
                path="/technology"
                element={
                  <News apiKey = {apiKey} 
                    setLoaderBarState={setLoaderBarState}
                    key="technology"
                    mode={mode}
                    pageSize={pageSize}
                    country="us"
                    category="technology"
                  />
                }
              ></Route>
            </Routes>
          </div>
        </Router>
      </>
    );
  }
