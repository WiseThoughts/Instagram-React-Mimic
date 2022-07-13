import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: #424651;
    padding: 30px;
    width: 96vw;
`;

export const NavbarItems = styled.a`
    font-size: 25px;
    margin-right: 25px;
    color: white;
    &:hover {
        opacity: 0.5;
        cursor: pointer;
    }
`;
