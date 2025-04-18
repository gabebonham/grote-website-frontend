'use client';

import ModalButton from '@/app/_components/_modals/ModalButton';
import LoadingScreen from '@/app/_components/LoadingScreen';
import { messagesMock } from '@/app/mocks/messages-mock';
import { Message } from '@/app/types/Message';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useQuery } from '@tanstack/react-query';
import {
	Bell,
	BellDot,
	Check,
	CircleAlert,
	CircleCheckBig,
	CircleEllipsis,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import MessageView from './MessageView';

const MessagesSection = () => {
	const [on, toggle] = useState<boolean>(false);
	const [messages, setMessages] = useState<Message[] | undefined>();
	const { data, isLoading, refetch } = useQuery({
		queryKey: ['getPresentation'],
		queryFn: async () => {
			// const res = await api.get('/about');
			// const about = res.data;
			// return about;
			return messagesMock;
		},
	});
	useEffect(() => {
		setMessages(data);
	}, [data]);
	const handleClickView = (id: string) => {
		setMessages((prev) =>
			prev?.map((m) =>
				m.id === id ? { ...m, new: false } : m,
			),
		);
	};
	const closeModal = () => {
		toggle(false);
	};
	if (isLoading) return <LoadingScreen />;
	return (
		<section>
			<ScrollArea className="h-96 px-4 text-2xl ">
				<div className="flex flex-col gap-y-8">
					{messages?.map((message: Message) => (
						<div
							key={message.id}
							className="flex items-center gap-x-4 justify-center"
						>
							<div>
								{message.new ? (
									<BellDot
										className="text-yellow-400"
										onClick={() =>
											handleClickView(
												message.id,
											)
										}
									/>
								) : (
									<Bell />
								)}
							</div>
							<div>
								{message.interested ? (
									<CircleAlert className="text-green-400" />
								) : (
									<CircleCheckBig className="text-gray-400" />
								)}
							</div>
							<div>
								{message.awnsered ? (
									<Check className="text-green-600" />
								) : (
									<CircleEllipsis className="text-yellow-500" />
								)}
							</div>

							<ModalButton
								open={on}
								body={
									<MessageView
										toggle={
											toggle
										}
										message={
											message
										}
									/>
								}
								button={
									<Button
										onClick={() =>
											toggle(
												true,
											)
										}
									>
										{message.createdAt.toLocaleDateString()}
									</Button>
								}
							/>
						</div>
					))}
				</div>
			</ScrollArea>
		</section>
	);
};
export default MessagesSection;
