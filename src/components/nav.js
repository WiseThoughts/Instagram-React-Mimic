import { Link } from "react-router-dom";
import { Wrapper, NavbarItems, } from "../style/nav.styled";

import "../style/Nav.css"


const Nav = () => {


    return (
    <Wrapper>
        <Link to="/"><NavbarItems>Home</NavbarItems></Link>
        <Link to="/profile"><NavbarItems>Profile</NavbarItems></Link>
        <Link to="/messages"><NavbarItems>Messages</NavbarItems></Link>
        <Link className="navPaddingRight" to="/feed"><NavbarItems>Feed</NavbarItems></Link>
    </Wrapper>
);
};

export default Nav;