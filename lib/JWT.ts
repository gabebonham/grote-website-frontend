'use server';
import jwt from 'jsonwebtoken';
export async function decodeJWT(token: string) {
	try {
		return jwt.verify(
			token,
			process.env.JWT_SECRET as string,
		) as any;
	} catch (e) {
		console.log('Error verifying token: ' + e);
	}
}
