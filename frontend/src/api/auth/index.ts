import axios, { Axios, AxiosPromise } from "axios";
import { axiosInstance } from "./instance";
import { ILoginRequest, ILoginResponse } from "./types";
import Endpoints from "./endpoints";

export const login = (params: ILoginRequest):AxiosPromise<ILoginResponse> => 
axiosInstance.post(Endpoints.AUTH.LOGIN, params)
