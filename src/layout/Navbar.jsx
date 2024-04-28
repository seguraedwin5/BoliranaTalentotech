import { Link } from "react-router-dom";
import { Campeonatos } from "../pages";
function Navbar () {
    return(
        <div>
            <ul>
                <li><Link to={"/campeonatos"}>campeonatos</Link></li>
                <li><Link to={"/eventos"}>eventos</Link></li>
                <li><Link to={"/alquiler"}>alquiler</Link></li>
            </ul>
        </div>
    )
}
export default Navbar;