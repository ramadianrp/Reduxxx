import jwt, { JwtPayload } from "jsonwebtoken";
import * as jose from "jose";

const SECRET_KEY = "ganjarpranowo03"

export const createToken = (payload: JwtPayload) =>
    jwt.sign(payload, SECRET_KEY);

export const readPayload = (token: string) =>
    jwt.verify(token, SECRET_KEY);

export const readPayloadJose = async <T>(token: string) => {

    const secret = new TextEncoder().encode(SECRET_KEY);
    const result = await jose.jwtVerify<T>(token, secret);

    return result.payload

}



