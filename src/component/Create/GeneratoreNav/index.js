import { Link } from "react-router-dom";
import  './generatoreNav.scss'
const GeneratoreNavbar=()=>{
    return (
        <div className="genNav">
           <div className="outer-table isActive"> <Link to='/ai_headshot/create'>AI Headshot Generator</Link></div>
           <div className="outer-table isActive"> <Link to='/ai_headshot/create/mylist'>My Headshots</Link></div>
        </div>
    )
}

export default GeneratoreNavbar