import React, { MouseEventHandler, useEffect, useState } from "react";
import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/home/Home";
import { useAppDispatch, useAppSelector } from "./hooks";
import { selectCurrentWorkoutName } from "./store/currentWorkoutSlice";
import { selectAppState } from "./store/appStateSlice";
import { appPages, appPagesType } from "./AppPages";
import About from "./components/about/About";
import Progress from "./components/progress/Progress";
import Other from "./components/other/Other";

function App() {
  const select = useAppSelector;
  const activeWorkoutName = select(selectCurrentWorkoutName);
  const appState = select(selectAppState);
  const pages: { [key in appPagesType]: JSX.Element } = {
    HOME: <Home />,
    PROGRESS: <Progress />,
    ABOUT: <About />,
    OTHER: <Other />,
  };
  const [selectedNav, setSelectedNav] = useState<appPagesType>("HOME");

  return (
    <div className="App flex min-h-screen flex-col  font-raleway">
      <Header changeNavigationHandler={setSelectedNav} />
      <main className="container mx-auto flex-grow px-4 pt-6 font-semibold text-indigo-500">
        {pages[selectedNav]}{" "}
      </main>
      <Footer />
    </div>
  );
}

export default App;
