import AxiosUtility from "./AxiosUtility"

export default class StraviewAPI {
    static readonly host: string = 'http://localhost:8080'
    static readonly contextPath: string = '/straview'

    public static createApiUrl(path: string): string {
        if(!path) return ''

        return StraviewAPI.host + StraviewAPI.contextPath + path
    }

    public static createRequestHeader(): object {
        return {
            'Authorization': 'Bearer ' + AxiosUtility.getJwtToken()
        }
    }
}