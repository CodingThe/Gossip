import jwt from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET ?? "gossip";
 export const generateToken = (payload) => {
    return jwt.sign(payload, JWT_SECRET, {expiresIn:"1h"});
 }