import Login from "../components/login";
import Register from "../components/register";
import SearchComponent from "../components/search";

export default function Home() {
    return(
        <div>
            <Login/>
            <Register/>
            <SearchComponent/>
        </div>
    );
}