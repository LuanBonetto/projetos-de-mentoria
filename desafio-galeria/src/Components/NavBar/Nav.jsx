import React, { useState } from "react";

import { NavContainer, Image, Input, ContainerMain, ContainerTeste, FormContainer, InputSearch } from "./styled";

import logo from '../../assets/logo.svg'
import { Card } from "../Card/Card";

import {data} from '../../../data.js'

export function Nav() {
    const [search, setSeach] = useState("")

    function abbreviateNumber(value) {
        var newValue = value;
        if (value >= 1000) {
            let suffixes = ["", "mil", "milhoes", "bilhoes","trilhoes"];
            let suffixNum = Math.floor( (""+value).length/3 );
            let shortValue = '';
            for (let precision = 2; precision >= 1; precision--) {
                shortValue = parseFloat( (suffixNum != 0 ? (value / Math.pow(1000,suffixNum) ) : value).toPrecision(precision));
                let dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g,'');
                if (dotLessShortValue.length <= 2) { break; }
            }
            if (shortValue % 1 != 0)  shortValue = shortValue.toFixed(1);
            newValue = shortValue+suffixes[suffixNum];
        }
        return newValue;
    }

    return (
        <>
            <NavContainer>
                    <Image src={logo} alt='Logo Desafio'/>
                    {/* <Input type='text' placeholder="Digite aqui" onChange={(e) => setSeach(e.target.value)} /> */}
                    <FormContainer>
                        <InputSearch type='text' placeholder="Digite aqui" onChange={(e) => setSeach(e.target.value)} />
                    </FormContainer>
            </NavContainer>
            <ContainerMain>
                    <ContainerTeste>
                        {
                            data.filter((info) => {
                                if(search == ""){
                                    return info
                                } else if(info.name.toLowerCase().includes(search.toLowerCase())){
                                    return info
                                }
                            }).map((item, index) => (
                                <Card key={index} image={item.url} name={item.name} likes={abbreviateNumber(item.likes)} views={abbreviateNumber(item.views)}/>
                            ))
                        }
                    </ContainerTeste>
            </ContainerMain>
        </>
    )
}