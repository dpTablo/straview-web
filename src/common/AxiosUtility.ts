import axios from "axios"
import jwt_decode from "jwt-decode"

export default class AxiosUtility {
    public static setJwtToken(jwtToken: string) {
        if(jwtToken) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${jwtToken}`
            localStorage.setItem('jwtToken', jwtToken)
        } else {
            this.removeJwtToken()
        }
    }

    public static isExpiredJwtToken(): boolean {
        const jwtToken = this.getJwtToken()
        if(jwtToken == '') return true

        let decoded: any = jwt_decode(jwtToken)

        const now = new Date()
        const nowSinceEpoch = Math.round(now.getTime() / 1000)
        return decoded.exp < nowSinceEpoch
    }

    public static removeJwtToken() {
        delete axios.defaults.headers.common['Authorization']
        localStorage.removeItem('jwtToken')
    }

    public static getJwtToken(): string {
        return localStorage.getItem('jwtToken') || ''
    }
}