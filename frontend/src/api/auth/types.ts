//

export interface IAuth {
   login: string
   password: string
}

export interface ILoginRequest {
   login: string
   password: string
}

export interface ILoginResponse {
   accessToken: string
}