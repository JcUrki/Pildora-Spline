import { Routes, Route } from "react-router-dom";
import InfoGraphics from "../pages/info-grafics/InfoGraphics";
import Interactive from "../pages/interactive/Interactive";
import MoreInfo from "../pages/more-info/MoreInfo";  
import Intro from "../pages/intro/Intro";

export default function Router() {
    return(
        <Routes>
            <Route path="/" element={<Intro />} />
            <Route exact path='/InfoGraphics' element={<InfoGraphics/>}/>
            <Route exact path='/Interactive' element={<Interactive />}/>
            <Route exact path='/MoreInfo' element={<MoreInfo />}/>
        </Routes>
    )
}