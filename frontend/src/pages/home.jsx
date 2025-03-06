import Login from "../components/login";
import Register from "../components/register";
import SearchComponent from "../components/search";
import Naming from "../components/naming";

export default function Home() {
    return(
        <div>
            <Login/>
            <Register/>
            <SearchComponent/>
        </div>
    );
}