declare module 'jwt-encode' {
	const jwtEncode: (payload: object, secret: string) => string;
	export default jwtEncode;
}
