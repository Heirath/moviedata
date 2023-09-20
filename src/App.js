import "./App.css";
import Nav from "./components/nav/nav";
import NavHead from "./components/nav-head/nav-head";
import Row from "./components/rows/Row";
import LoginPage from "./components/login-page/login";

import { Actions, Advanture, Crime, Drama, Family,Documentary,Fantasy,History,Horror,Music,Mystery,ScienceFiction,TVMovie,War,Western} from "./constants/url";

import { Route, Routes } from "react-router-dom";
import About from "./components/NextPage/About/About"

import Footer1 from "./components/rows/1-footer/1-footer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/moviedata" element={<LoginPage/>} />
       
    
      </Routes>
      <Routes>
        <Route
          path="/main"
          element={
            <>
            
              <NavHead/> <Nav />
              <Row url={Advanture} name={" Netflix Originals"} />
              <Row url={Actions} name={"Actions"} isSmall />
              <Row url={Drama} name={"Drama"} isSmall />
              <Row url={Crime} name={"Crime"} isSmall />
              <Row url={Documentary} name={"Documentary"} isSmall />
              <Row url={Fantasy} name={"Fantasy"} isSmall />
              <Row url={History} name={"History"} isSmall />
              <Row url={Horror} name={"Horror"} isSmall />
              <Row url={Music} name={"Music"} isSmall />
              <Row url={Mystery} name={"Mystery"} isSmall />
              <Row url={ScienceFiction} name={"Science Fiction"} isSmall />
              <Row url={TVMovie} name={"TV Movie"} isSmall />
              <Row url={War} name={"War"} isSmall />
              <Row url={Western} name={"Western"} isSmall />
              
              <Row url={Family} name={"Family"} isSmall /> <Footer1 />
            </>
          }
        />
      </Routes>

      <Routes>
        <Route
          path="/about/:movieId"
          element={
            <>
              <NavHead />
              <About />{" "}
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
