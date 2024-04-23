/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
const baseUrl = 'https://g183k2nx-7029.brs.devtunnels.ms';
const apiClient = axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-Type': 'application/json'
    }
})

export const action = (actionCode: string)  => {
    return apiClient.get<any>(`/Share/${actionCode}`);
 }