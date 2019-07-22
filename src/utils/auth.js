import Cookies from 'js-cookie'

export const setCookie = function(token){
    Cookies.set('token', token)
}

export const getCookie = function() {
    return Cookies.get('token')
}

export const removeCookie = function() {
    Cookies.remove('token')
}






