import styled from "styled-components";

export const NavContainer = styled.nav`
    display: flex;
    width: 100%;
    height: 110px;
    background-color: #202020;
    justify-content: space-between;
`

export const Image = styled.img`
    /* width: auto;
    height: 80px;
    margin: 10px 10px; */

    width: 68px;
    height: 68px;
    margin: 21px;
    margin-left: 120px;
`

export const Input = styled.input`
    /* width: 260px;
    height: 35px;
    padding: 5px 5px;
    margin: 35px 35px; */

    display: flex;
    padding: 16px;
    gap: 16px;
    width: 320px;
    height: 56px;
    margin: 27px 0;
    margin-right: 120px;
    flex-direction: row;
    align-items: center;

    font-weight: 600;
    line-height: 16px;
    letter-spacing: 0em;
    

    background-color: rgba(204, 204, 204, 0.16);;
    border-radius: 56px;
    border: 1px solid #CCCCCC;
    color: #CCCCCC;
    outline: none;
`

export const ContainerMain = styled.main`
    display: flex;
    width: 100%;
    height: 70%;
    justify-content: center;
    background-color: #fff;
`

export const ContainerTeste = styled.div`
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(3, 550px);
`

export const FormContainer = styled.form`
    border: none;
    padding: 0;
`

export const InputSearch = styled.input`
    width: 320px;
    height: 56px;
    display: block;
    margin: 27px 0;
    padding: 9px 4px 9px 40px;
    margin-right: 120px;
    flex-direction: row;
    align-items: center;

    font-weight: 600;
    line-height: 16px;
    letter-spacing: 0em;
    

    background: transparent url('../../public/images/search.png') no-repeat 13px center;
    border-radius: 56px;
    border: 1px solid #CCCCCC;
    color: #CCCCCC;
    outline: none;
`