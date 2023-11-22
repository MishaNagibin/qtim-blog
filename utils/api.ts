import axios, { AxiosError, type AxiosRequestConfig } from "axios"
import https from "https"

class Api {
    private _url: string = "https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work"

    public get = <T>(url: string): Promise<T> => this.request(url, "GET")

    private async request<T, R>(url: string, method: string): Promise<T> {
        const route = useRoute()
        return await new Promise<T>((resolve, reject) =>
            axios({
                method,
                url: encodeURI(`${this._url}/${url}`),
                httpsAgent: process.client ? undefined : new https.Agent({ rejectUnauthorized: false }),
            } as AxiosRequestConfig)
                .then((resp) => {
                    resolve(resp.data)
                })
                .catch((e: AxiosError) => {
                    reject(e.response?.data)
                }),
        )
    }
}

export default new Api()
