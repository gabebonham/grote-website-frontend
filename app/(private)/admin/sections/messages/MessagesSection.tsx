'use client';

import LoadingScreen from '@/app/_components/LoadingScreen';
import { messagesMock } from '@/app/mocks/messages-mock';
import { Message } from '@/app/types/Message';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

const MessagesSection = () => {
	const [on, toggle] = useState<boolean>(false);
	const { data, isLoading, refetch } = useQuery({
		queryKey: ['getPresentation'],
		queryFn: async () => {
			// const res = await api.get('/about');
			// const about = res.data;
			// return about;
			return messagesMock;
		},
	});
	if (isLoading) return <LoadingScreen />;
	return (
		<section>
			<ScrollArea className="h-96">
				{data?.map((message: Message) => (
					<p>{message.content}</p>
				))}
			</ScrollArea>
		</section>
	);
};
export default MessagesSection;
