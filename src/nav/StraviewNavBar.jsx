import React, {Component, Fragment} from "react"
import {Button, Container, Form, Nav, Navbar} from "react-bootstrap"
import {LinkContainer} from 'react-router-bootstrap'

import './StraviewNavBar.scss'

import listTextImg from "../images/list-text.png"
import sevenDaysImg from "../images/7-days.png"
import clipboardImg from "../images/clipboard.png"
import bikeImg from "../images/bike.png"
import userImg from "../images/user.png"

class StraviewNavBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            visible: false,

        }
    }

    componentDidMount() {
        const path = document.location.pathname
        const regExp = new RegExp(/\/dashboard.*/, 'i');
        this.setState({
            visible: regExp.test(path)
        })
    }

    onClickLogoutButton() {
        document.location.href = '/login'
    }

    render() {
        if(!this.state.visible) {
            return (<Fragment></Fragment>)
        }

        return (
            <Navbar className="dashboardNavBar" bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/dashboard/status">Straview</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to="/dashboard/activities">
                                <Nav.Link>
                                    <img src={listTextImg} alt="액티비티" />
                                    액티비티
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/dashboard/week-training">
                                <Nav.Link>
                                    <img src={sevenDaysImg} alt="이번 주 훈련관리" />
                                    이번 주 훈련관리
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/dashboard/training-statistics">
                                <Nav.Link>
                                    <img src={clipboardImg} alt="훈련 통계"/>
                                    훈련 통계
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/dashboard/training-statistics">
                                <Nav.Link href="/dashboard/riding-statistics" >
                                    <img src={bikeImg} alt="라이딩 통계"/>
                                    라이딩 통계
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/dashboard/status" >
                                <Nav.Link>
                                    <img src={userImg} alt="나의 상태"/>
                                    나의 상태
                                </Nav.Link>
                            </LinkContainer>
                        </Nav>
                        <Form className="d-flex">
                            <Button className="logoutButton"
                                    onClick={this.onClickLogoutButton}>로그아웃</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default StraviewNavBar