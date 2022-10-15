import React, { useState } from "react";
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
// import {RootState} from "../../reducers/index";
import { Header } from "./modules/Header";
import { Board } from "./modules/Board";
import { Logo } from "./modules/Logo"
import { InputField } from "./modules/InputField"
import { Toggles } from "./modules/Toggles"
import { DesktopRoot, Content } from "./atoms/desktopRoot";

function ExamplePage() {
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const dispatch = useDispatch();
    return (
        <div>
            <DesktopRoot>
                <Logo></Logo>
                <Toggles></Toggles>        
                <Content>
                    <InputField></InputField>
                </Content>

                <Board/>
                
            </DesktopRoot>
        </div>
        
    );
   
}

export default ExamplePage;