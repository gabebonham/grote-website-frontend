'use client';

import { Text } from '@/app/types/Text';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const AboutSectionEdit = ({
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
			<ScrollArea className="h-96">
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

export default AboutSectionEdit;
