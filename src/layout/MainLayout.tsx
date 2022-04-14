import React, {useEffect} from "react"
import AxiosUtility from "../common/AxiosUtility";
import {useNavigate} from "react-router-dom";
import StraviewNavBar from "./StraviewNavBar"

import './MainLayout.scss'

function MainLayout(props: any) {
    let navigate = useNavigate()

    useEffect(() => {
        if(AxiosUtility.isExpiredJwtToken()) {
            navigate('/login')
        }
    }, [])

    return (
        <div>
            <StraviewNavBar />
            {props.children}
        </div>
    )
}

export default MainLayout