'use client';

import ModalButton from '@/app/_components/_modals/ModalButton';
import LoadingScreen from '@/app/_components/LoadingScreen';
import { presentationTextsMock } from '@/app/mocks/texts-mock';
import { Button } from '@/components/ui/button';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import PresentationEditSection from './PresentationEditSection';
import { Text } from '@/app/types/Text';

const PresentationSection = () => {
	const [on, toggle] = useState<boolean>(false);
	const { data, isLoading, refetch } = useQuery({
		queryKey: ['getPresentation'],
		queryFn: async () => {
			// const res = await api.get('/about');
			// const about = res.data;
			// return about;
			return presentationTextsMock;
		},
	});
	if (isLoading) return <LoadingScreen />;
	return (
		<section>
			<ModalButton
				body={
					<PresentationEditSection
						texts={data as Text[]}
						toggle={toggle}
					/>
				}
				button={
					<Button onClick={() => toggle(true)}>
						editar
					</Button>
				}
				open={on}
			/>
			{data?.map((text: Text) => (
				<div key={text.id}>
					{text.id} <p>{text.content}</p>
				</div>
			))}
		</section>
	);
};

export default PresentationSection;
