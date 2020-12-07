import { AuthenticationData } from "../types/allTypes"
import * as jwt from "jsonwebtoken"
import * as bcrypt from "bcryptjs"
import { v4 } from "uuid"


export const generateId = (): string => v4()

export function generateToken(
   payload: AuthenticationData
): string {
   return jwt.sign(
      payload,
      process.env.JWT_KEY as string,
      {
         expiresIn: process.env.JWT_EXPIRES_IN
      }
   )
}

export function getTokenData(
   token: string
): AuthenticationData {
   const result: any = jwt.verify(
      token,
      process.env.JWT_KEY as string
   )

   return { id: result.id, }
}

export const hash = async (
   plainText: string
): Promise<string> => {
   const rounds = Number(process.env.BCRYPT_COST);
   const salt = await bcrypt.genSalt(rounds);
   return bcrypt.hash(plainText, salt)
}

export const compare = async (
   plainText: string, cypherText: string
): Promise<boolean> => {
   return bcrypt.compare(plainText, cypherText)
}