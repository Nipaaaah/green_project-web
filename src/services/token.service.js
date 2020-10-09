import jwt_decode from "jwt-decode";

export const tokenDecoded = jwt_decode(localStorage.getItem('token'));
export const actualDate = Math.floor(Date.now() / 1000);
export const tokenDate = tokenDecoded.exp;

export const isTokenValid = (actualDate, tokenDate) => {
    return actualDate < tokenDate;
}