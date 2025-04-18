'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CookieProvider } from './contexts/CookieContext';

const queryClient = new QueryClient();

export function Providers({
	children,
	cookies,
}: {
	children: React.ReactNode;
	cookies: {
		email?: string | undefined;
		id?: string | undefined;
		username?: string | undefined;
		role?: string | undefined;
	};
}) {
	return (
		<QueryClientProvider client={queryClient}>
			<CookieProvider cookies={cookies}>
				{children}
			</CookieProvider>
		</QueryClientProvider>
	);
}
