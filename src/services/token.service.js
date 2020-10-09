import jwt_decode from "jwt-decode";

const token = localStorage.getItem('token');

export const tokenDecoded = token && jwt_decode(token);
export const actualDate = Math.floor(Date.now() / 1000);
export const tokenDate = token && tokenDecoded.exp;

export const isTokenValid = (actualDate, tokenDate) => {
    return actualDate < tokenDate;
}