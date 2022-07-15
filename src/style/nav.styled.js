import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: #82008f;
    padding: 30px;
    width: 100%;
    position: fixed;
`;

export const NavbarItems = styled.a`
    font-size: 25px;
    padding-right: 15px;
    color: white;
    &:hover {
        opacity: 0.5;
        cursor: pointer;
    }
`;
