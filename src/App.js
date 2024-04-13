import Header from "./layout/Header/Header";
import { Route, Routes } from "react-router-dom";
import Footer from "./layout/Footer/Footer";
import Pricing from "./component/Pricing/Pricing";
import Content from "./component/Content/Content";

import "./App.scss";
import AiHeadshot from "./component/AI Headshot/pages/AiHeadshot";


import AiGeneratoreHeadshot from "./component/Create/Ai_headshot_generatore";
import My_Ai_headShot from "./component/Create/My_headshots";

function App() {
  return (
    <div class="app">
      <Header />
      <Routes>
        <Route path="/" element={<Content />}></Route>
        <Route path="/pricing" element={<Pricing />}></Route>
        <Route path="/ai_headshot" element={<AiHeadshot />}></Route>
        <Route path="/ai_headshot/create" element={<AiGeneratoreHeadshot/>}/>
        <Route path="/ai_headshot/create/mylist" element={<My_Ai_headShot/>} />
        </Routes>  
      <Footer />
    </div>
  );
}

export default App;
