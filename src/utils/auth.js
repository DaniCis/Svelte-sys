import jwt_decode from "jwt-decode"

export function getAccessToken(){
    return localStorage.getItem('token_auth')     
}

export function getDecoded(){
    if(getAccessToken()){
        let token_decoded = jwt_decode(getAccessToken()) 
        //console.log(token_decoded)
        return token_decoded
    }
}

export function getUser(){
    let decoded = getDecoded()
    let user = decoded.nombre_usuario
    return user
}
