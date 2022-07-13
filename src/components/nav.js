import { Link } from "react-router-dom";

import { Wrapper, NavbarItems, } from "../style/nav.styled";



const Nav = () => {


    return (
    <Wrapper>
        <Link to="/"><NavbarItems>Home</NavbarItems></Link>
        <Link to="/profile"><NavbarItems>Profile</NavbarItems></Link>
        <Link to="/messages"><NavbarItems>Messages</NavbarItems></Link>
        <Link to="/feed"><NavbarItems>Feed</NavbarItems></Link>
    </Wrapper>
);
};

export default Nav;