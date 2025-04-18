'use client';

import ModalButton from '@/app/_components/_modals/ModalButton';
import LoadingScreen from '@/app/_components/LoadingScreen';
import { api } from '@/app/api/axios-client-config';
import { aboutTextsMock } from '@/app/mocks/texts-mock';
import { Text } from '@/app/types/Text';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import AboutSectionEdit from './AboutSectionEdit';

const AboutSection = () => {
	const [on, toggle] = useState<boolean>(false);
	const { data, isLoading, refetch } = useQuery({
		queryKey: ['getAbout'],
		queryFn: async () => {
			// const res = await api.get('/about');
			// const about = res.data;
			// return about;
			return aboutTextsMock;
		},
	});
	if (isLoading) return <LoadingScreen />;
	return (
		<section className="flex flex-col items-center text-center">
			<ModalButton
				open={on}
				body={
					<AboutSectionEdit
						toggle={toggle}
						texts={data as Text[]}
					/>
				}
				button={
					<Button onClick={() => toggle(true)}>
						editar
					</Button>
				}
			/>
			{data?.map((text: Text) => (
				<div key={text.id}>
					{text.id} <p>{text.content}</p>
				</div>
			))}
		</section>
	);
};
export default AboutSection;
