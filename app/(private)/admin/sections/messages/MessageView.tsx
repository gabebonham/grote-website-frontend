'use client';

import { Message } from '@/app/types/Message';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Textarea } from '@/components/ui/textarea';
import { useRef, useState } from 'react';

const MessageView = ({
	message,
	toggle,
}: {
	message: Message;
	toggle: (value: boolean) => void;
}) => {
	const messageRef = useRef<HTMLTextAreaElement>(null);
	const [error, setError] = useState<string | undefined>();
	const handleSendMessage = async () => {
		if (messageRef?.current && messageRef.current.value) {
			console.log(messageRef?.current.value);
			toggle(false);
		} else {
			setError('Temq escrever né imbecil');
		}
	};
	return (
		<div className="flex flex-col items-center justify-center gap-y-4">
			<ScrollArea className="h-36">
				{message.content}
			</ScrollArea>
			<p className="text-red-400">{error}</p>
			<Textarea ref={messageRef} />
			<Button onClick={() => handleSendMessage()}>
				enviar
			</Button>
		</div>
	);
};
export default MessageView;
