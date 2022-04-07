import {Component} from "react"
import {Nav, Navbar, Container, Button, Form} from "react-bootstrap"

import './index.scss'

import listTextImg from '../images/list-text.png'
import sevenDaysImg from '../images/7-days.png'
import bikeImg from '../images/bike.png'
import clipboardImg from '../images/clipboard.png'
import userImg from '../images/user.png'


class Dashboard extends Component {
    onClickLogoutButton() {
        document.location.href = './login'
    }

    render() {
        return (
            <div className="dashboard">
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="/dashboard#status">Straview</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#activities">
                                    <img src={listTextImg}/>
                                    액티비티
                                </Nav.Link>
                                <Nav.Link href="#this-week">
                                    <img src={sevenDaysImg}/>
                                    이번 주 훈련관리
                                </Nav.Link>
                                <Nav.Link href="#training-statistics">
                                    <img src={clipboardImg}/>
                                    훈련 통계
                                </Nav.Link>
                                <Nav.Link href="#riding-statistics">
                                    <img src={bikeImg}/>
                                    라이딩 통계
                                </Nav.Link>
                                <Nav.Link href="#status">
                                    <img src={userImg}/>
                                    나의 상태
                                </Nav.Link>
                            </Nav>
                            <Form className="d-flex">
                                <Button className="logoutButton">로그아웃</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default Dashboard