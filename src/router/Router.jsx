import { Routes, Route } from "react-router-dom";
import InfoGraphics from "../pages/InfoGraphics";
import HeroImage from "../pages/HeroImage";
import MoreInfo from "../pages/MoreInfo";  

export default function Router() {
    return(
        <Routes>
            <Route exact path='/' element={<InfoGraphics/>}/>
            <Route exact path='/HeroImage' element={<HeroImage />}/>
            <Route exact path='/MoreInfo' element={<MoreInfo />}/>
        </Routes>
    )
}