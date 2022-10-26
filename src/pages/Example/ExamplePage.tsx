import React, { useState } from "react";
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
//import {RootState} from "../../reducers/index";
import { Header } from "./modules/header";
import { Body } from "./modules/body";


function ExamplePage() {
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <div>
            <Header />
            <Body />
                
        </div>
    );
}

export default ExamplePage;