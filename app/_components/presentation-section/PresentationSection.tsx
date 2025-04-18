'use client';

import Image from 'next/image';
import TextSection from '../TextSection';
import LoadingScreen from '../LoadingScreen';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { presentationTextsMock } from '@/app/mocks/texts-mock';
import { useInView } from 'react-intersection-observer';
import { Text } from '@/app/types/Text';

const PresentationSection = () => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.3,
	});
	const [backPres, setBackPres] = useState<string>('');
	const [frontPres, setFrontPres] = useState<string>('');
	const [finalPres, setFinalPres] = useState<string>('');
	const { data, isLoading, error } = useQuery<Text[]>({
		queryKey: ['lazy-products'],
		queryFn: async () => {
			// const res = await api.get('/projects');
			// return res.data;
			return presentationTextsMock;
		},
		enabled: inView,
	});
	useEffect(() => {
		data?.filter(
			(text: Text) => text.type == 'presentation',
		).forEach((text: Text, index: number) => {
			if (index == 0) setBackPres(text.content);
			if (index == 1) setFrontPres(text.content);
			if (index == 2) setFinalPres(text.content);
		});
	}, [data]);
	if (isLoading) return <LoadingScreen />;
	return (
		<section id="pres" ref={ref} className=" min-h-[500px]">
			<div className="bg-gray-800/60 brightness-200 flex p-8 py-16 max-[800px]:w-full max-[800px]:flex max-[800px]:justify-center">
				{inView && (
					<div className="w-4xl space-x-8 max-[400px]:space-x-0 max-[400px]:w-96 max-[800px]:w-full max-[800px]:w-full max-[800px]:flex max-[800px]:items-center max-[800px]:flex-col">
						<TextSection
							dcn={
								'w-lg max-[400px]:w-96 '
							}
							pcn="text-xl font-bold fade-slide-1 max-[800px]:text-center max-[400px]:text-lg"
							text={backPres}
						/>
						<TextSection
							dcn={
								'w-lg justify-self-end max-[400px]:w-96 '
							}
							pcn="text-xl text-end font-bold fade-slide-r max-[800px]:text-center max-[400px]:text-lg"
							text={frontPres}
						/>
						<TextSection
							dcn={
								'w-lg max-[400px]:w-96'
							}
							pcn="text-xl font-bold fade-slide-2 max-[800px]:text-center max-[400px]:text-lg"
							text={finalPres}
						/>
					</div>
				)}
				<div className="w-96 h-96 mb-12 max-[800px]:hidden">
					{inView && (
						<Image
							className=" w-96 brightness-50 grayscale-100 rounded-l-2xl fade-slide-rd"
							src="/me2.jpeg"
							alt="img"
							width="200"
							height="280"
						/>
					)}
				</div>
			</div>
		</section>
	);
};
export default PresentationSection;
