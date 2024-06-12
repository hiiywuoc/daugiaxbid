export interface RegisterForm {
    username: string,
    email:string,
    password:string
}
export interface LoginForm {
    email:string,
    password:string
}
export interface UserLogin {
    token:string,
    user:{
        _id:string,
        email:string,
        role:string,
        password:string
    }
}
export interface User {
    email:string,
    role:string,
    username:string
}
