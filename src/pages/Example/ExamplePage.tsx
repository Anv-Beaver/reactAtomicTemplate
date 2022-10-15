import React, { useState } from "react";
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
// import {RootState} from "../../reducers/index";
import { Logo } from "./modules/header";



// * 라면 페이지를 만든다 가정
function ExamplePage() {
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const dispatch = useDispatch();

    return (
        <div>
            <Logo />
            {/* <RamenNoodle /> */}
                
        </div>
    );
}

export default ExamplePage;