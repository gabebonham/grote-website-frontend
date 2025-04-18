'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useRef, useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import jwtEncode from 'jwt-encode';
export default function LoginModal() {
	const router = useRouter();
	const usernameRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const [error, setError] = useState<string | undefined>();

	// const handleLogin = async () => {
	// 	if (
	// 		usernameRef?.current?.value &&
	// 		passwordRef?.current?.value
	// 	) {
	// 		const res = await apiPublic.post('/login', {
	// 			username: usernameRef?.current?.value,
	// 			password: passwordRef?.current?.value,
	// 		});
	// 		if (res.status == 401 || res.status == 403) {
	// 			setError('Quem é tu magrão???');
	// 		}
	// 		if (res.status == 200) {
	// 			Cookies.set('token', res.data.access_token);
	// 		}
	// 	} else {
	// 		setError('Credenciais faltando burro');
	// 	}
	// };
	const handleLogin = async () => {
		if (
			usernameRef?.current?.value &&
			passwordRef?.current?.value
		) {
			if (
				usernameRef?.current?.value == 'grote' &&
				passwordRef?.current?.value == '123'
			) {
				Cookies.set(
					'token',
					jwtEncode(
						{
							username: 'grote',
							password: '123',
							role: 'foda',
						},
						'123',
					),
				);
				router.push('/admin');
			} else {
				setError('Quem é tu magrão???');
			}
		} else {
			setError('Credenciais faltando burro');
		}
	};
	return (
		<div>
			<p className="text-red-500">{error}</p>
			user:
			<Input ref={usernameRef} />
			password:
			<Input ref={passwordRef} />
			<Button onClick={() => handleLogin()}>Login</Button>
		</div>
	);
}
