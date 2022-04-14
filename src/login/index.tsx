import React, {BaseSyntheticEvent, useState, useEffect} from 'react'
import axios from "axios"
import {Button, Col, Container, Form, Row} from "react-bootstrap"
import AxiosUtility from '../common/AxiosUtility'
import StraviewAPI from "../common/StraviewAPI"

import './index.scss'
import {useNavigate} from "react-router-dom";

function Login() {
    let navigate = useNavigate();

    const [userId, setUserId] = useState('')
    const [password, setPassword] = useState('')
    const [visibleErrorMessage, setVisibleErrorMessage] = useState(false)
    const [isMoveToDashboardStatus, setIsMoveToDashboardStatus] = useState(false)

    useEffect(() => {
        if(AxiosUtility.isExpiredJwtToken()) {
            AxiosUtility.removeJwtToken()
        } else {
            navigate('/dashboard/status')
        }
    }, [])

    useEffect(() => {
        if(isMoveToDashboardStatus) {
            navigate('/dashboard/status')
        }
    }, [isMoveToDashboardStatus])

    const onChangeInput = (e: BaseSyntheticEvent) => {
        if (e.target.name == 'userId') {
            setUserId(e.target.value)
        } else if (e.target.name == 'password') {
            setPassword(e.target.value)
        }
    }

    const onClickLoginButton = () => {
        let formData = new FormData()
        formData.append('userId', userId)
        formData.append('password', password)

        axios.post(StraviewAPI.createApiUrl('/api/auth/authenticate'),
            formData
        ).then((response) => {
            if (response.status == 200) {
                let data = response.data;
                AxiosUtility.setJwtToken(data.jwtToken)
                setIsMoveToDashboardStatus(true)
            } else {
                setVisibleErrorMessage(false)
            }
        }).catch((error) => {
            setVisibleErrorMessage(true)
        })
    }

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
                                <Form.Control name="userId" type="text" placeholder="사용자 ID"
                                              onChange={onChangeInput}/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name="password" type="password" placeholder="비밀번호"
                                              onChange={onChangeInput}
                                />
                            </Form.Group>
                            {visibleErrorMessage ?
                                <div className="errorMessage">
                                    사용자 ID 또는 비밀번호를 잘못 입력했습니다. <br/>
                                    입력하신 내용을 다시 확인해주세요.
                                </div>
                                : null
                            }
                            <div className="d-grid">
                                <Button name="password" className="straview" variant="primary" type="button"
                                        data-testid="loginButton"
                                        onClick={onClickLoginButton}>로그인</Button>
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

export default Login

/*
interface LoginState {
    userId: string,
    password: string,
    errorMessage: string
}

class Login extends Component<{}, LoginState> {
    constructor(props: any) {
        super(props);

        let navi = useNavigate()

        this.state = {
            userId: '',
            password: '',
            errorMessage: ''
        }
    }

    onClickLoginButton = () => {
        this.requestLogin()
    }

    onChangeInput = (e: BaseSyntheticEvent) => {
        if(e.target.name == 'userId') {
            this.setState({ userId: e.target.value })
        } else if(e.target.name == 'password') {
            this.setState({ password: e.target.value })
        }
    }

    requestLogin = async() => {
        let formData = new FormData()
        formData.append('userId', this.state.userId)
        formData.append('password', this.state.password)

        axios.post('http://localhost:8080/straview/api/auth/authenticate',
            formData
        ).then((response) => {
            if(response.status == 200) {
                let data = response.data;
                AxiosUtility.setAuthorizationToken(data.jwtToken)
                localStorage.setItem('jwtToken', data.jwtToken)
            }
        }).catch((error) => {
            this.setState({
                errorMessage: '사용자 ID 또는 비밀번호를 잘못 입력했습니다.\n입력하신 내용을 다시 확인해주세요.'
            })
        })
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
                                    <Form.Control name="userId" type="text" placeholder="사용자 ID"
                                                  onChange={this.onChangeInput}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control name="password" type="password" placeholder="비밀번호"
                                                  onChange={this.onChangeInput}
                                    />
                                </Form.Group>
                                <div className="errorMessage">{this.state.errorMessage}</div>
                                <div className="d-grid">
                                    <Button name="password" className="straview" variant="primary" type="button"
                                            data-testid="loginButton"
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
 */