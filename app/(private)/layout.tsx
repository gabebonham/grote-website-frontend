import { decodeJWT } from '@/lib/JWT';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function AdminLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const cookieStore = await cookies();
	const tokenCookie = cookieStore.get('token');
	const token = tokenCookie?.value;

	try {
		const user = await decodeJWT(token as string);
		if (user?.role == 'foda') return <main>{children}</main>;
		else redirect('/home');
	} catch (e) {
		redirect('/home');
	}
}
