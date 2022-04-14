import React, {Component, Fragment} from "react"
import {Button, Container, Form, Nav, Navbar} from "react-bootstrap"
import {useNavigate} from "react-router-dom"
import AxiosUtility from "../common/AxiosUtility"

import './StraviewNavBar.scss'

import listTextImg from "../images/list-text.png"
import sevenDaysImg from "../images/7-days.png"
import clipboardImg from "../images/clipboard.png"
import bikeImg from "../images/bike.png"
import userImg from "../images/user.png"

function StraviewNavBar() {
    let navigate = useNavigate()

    function logout() {
        AxiosUtility.removeJwtToken()
        navigate('/login')
    }

    function moveToLink(url: string) {
        navigate(url)
    }

    return (
        <Navbar className="dashboardNavBar" bg="light" expand="lg">
            <Container>
                <Navbar.Brand onClick={() => moveToLink('/dashboard/status')}>Straview</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => moveToLink('/dashboard/activities')}>
                            <img src={listTextImg} alt="액티비티" />
                            액티비티
                        </Nav.Link>
                        <Nav.Link onClick={() => moveToLink('/dashboard/week-training')}>
                            <img src={sevenDaysImg} alt="이번 주 훈련관리" />
                            이번 주 훈련관리
                        </Nav.Link>
                        <Nav.Link onClick={() => moveToLink('/dashboard/training-statistics')}>
                            <img src={clipboardImg} alt="훈련 통계"/>
                            훈련 통계
                        </Nav.Link>
                        <Nav.Link onClick={() => moveToLink('/dashboard/riding-statistics')}>
                            <img src={bikeImg} alt="라이딩 통계"/>
                            라이딩 통계
                        </Nav.Link>
                        <Nav.Link onClick={() => moveToLink('/dashboard/status')}>
                            <img src={userImg} alt="나의 상태"/>
                            나의 상태
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Button className="logoutButton"
                                onClick={() => logout()}>로그아웃</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default StraviewNavBar