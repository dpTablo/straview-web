import React, {Component} from 'react'
import {Button, Col, Container, Form, Row} from "react-bootstrap"

import './index.scss'

class Login extends Component {
    onClickLoginButton() {
        console.log('onClickLoginButton')
        document.location.href = './dashboard/status'
    }

    render() {
        return (
            <section className="straview loginSection">
                <Container className="h-100">
                    <Row className="headerRow">
                        <Col><h1 className="text-center">Straview</h1></Col>
                    </Row>
                    <Row className="formRow">
                        <Col>
                            <Form className="loginForm">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>ID</Form.Label>
                                    <Form.Control type="text" placeholder="사용자 ID"/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="비밀번호"/>
                                </Form.Group>
                                <div className="d-grid">
                                    <Button className="straview" variant="primary" type="button"
                                            onClick={this.onClickLoginButton}>로그인</Button>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                    <Row className="footerRow align-items-end">
                        <Col className="copyrightBlock text-center">
                            <span>Copyright</span>
                            <span>dpTablo</span>
                            <span>All Rights Reserved.</span>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default Login