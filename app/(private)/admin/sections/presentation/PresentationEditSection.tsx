'use client';

import { Text } from '@/app/types/Text';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@radix-ui/react-scroll-area';
import { useState } from 'react';

const PresentationEditSection = ({
	texts,
	toggle,
}: {
	texts: Text[];
	toggle: (value: boolean) => void;
}) => {
	const [content, setContent] = useState<Text[]>(texts);
	const handleEdit = async () => {
		console.log(content);
		toggle(false);
	};
	const handleChange = (index: number, newContent: string) => {
		const updatedTexts = [...content];
		updatedTexts[index].content = newContent;
		setContent(updatedTexts);
	};
	return (
		<div>
			<ScrollArea className="h-96 overflow-y-auto">
				{content?.map((text: Text, index: number) => (
					<div>
						<p>ID:{text.id}</p>
						<Textarea
							value={
								content[index]
									.content
							}
							onChange={(e) =>
								handleChange(
									index,
									e.target
										.value,
								)
							}
						/>
					</div>
				))}
			</ScrollArea>
			<Button onClick={() => handleEdit()}>
				concluir edição
			</Button>
		</div>
	);
};
export default PresentationEditSection;
