import styled from "styled-components";

export const ContainerNav = styled.nav`
    display: flex;
    background-color: #202020;
    justify-content: space-between;
    width: 100%;
    height: 110px;
    color: #999999;
`

export const Logo = styled.img`
    width: 68px;
    height: 68px;
    margin: 21px;
    margin-left: 120px;
`

export const Input = styled.input`
    display: flex;
    padding: 16px;
    gap: 16px;
    width: 320px;
    height: 56px;
    margin: 27px 0;
    margin-right: 120px;
    flex-direction: row;
    align-items: center;

    background-color: rgba(204, 204, 204, 0.16);;
    border-radius: 56px;
    border: 1px solid #CCCCCC;
    color: #CCCCCC;
    outline: none;

    font-weight: 600;
    line-height: 16px;
    letter-spacing: 0em;

`

export const ContainerCards = styled.div`
    background: #fff;
    display: grid;
    grid-gap: 5px;
    grid-template-columns: 150px 150px 150px;
    grid-template-rows: 400px 400px 400px;
    justify-content: space-around;
`