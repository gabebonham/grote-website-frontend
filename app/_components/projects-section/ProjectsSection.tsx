'use client';

import Image from 'next/image';
import devsitev1 from '@/public/v1.png';
import { useInView } from 'react-intersection-observer';
import { useQuery } from '@tanstack/react-query';
import { api } from '@/app/api/axios-client-config';
import { projectsMock } from '@/app/mocks/projects-mock';
import LoadingScreen from '../LoadingScreen';
import { Project } from '@/app/types/Project';
import ProjectItem from './_components/ProjectItem';
import { ScrollAreaCustom } from '../ScrollAreaCustom';
import github from '@/public/github.png';
import Link from 'next/link';
import { useEffect, useState } from 'react';
const ProjectsSection = () => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});
	const [imgProjs, setImgProjs] = useState<Project[]>([]);
	const [noImgProjs, setNoImgProjs] = useState<Project[]>([]);

	const { data, isLoading, error } = useQuery({
		queryKey: ['lazy-products'],
		queryFn: async () => {
			// const res = await api.get('/projects');
			// return res.data;
			return projectsMock;
		},
		enabled: inView,
	});
	useEffect(() => {
		setImgProjs(
			data?.filter(
				(p: Project) => p.image && p.image != '',
			) as Project[],
		);
		setNoImgProjs(
			data?.filter(
				(p: Project) => !p.image || p.image == '',
			) as Project[],
		);
	}, [data]);
	if (isLoading) return <LoadingScreen />;
	return (
		<section
			id="proj"
			ref={ref}
			className="bg-white  min-h-[500px]"
		>
			<div className="bg-black/90">
				<div className="flex items-center max-[400px]:flex-col max-[400px]:items-center max-[400px]:pb-12 max-[400px]:w-full">
					<h1 className="text-4xl py-20 pl-24 self-start max-[400px]:pl-12">
						Projetos:
					</h1>
					<Link
						href={
							'https://github.com/gabebonham'
						}
					>
						<Image
							alt=""
							className={`cursor-pointer invert brightness-0 contrast-200 size-24 ml-24 max-[400px]:mx-0 max-[400px]:px-auto transition-all opacity-50 hover:opacity-90 hover:size-48 duration-500`}
							width={170}
							height={170}
							src={github}
						/>
					</Link>
				</div>
				<div>
					<div className="grid grid-cols-3 justify-center gap-y-6 max-[800px]:grid-cols-2 max-[400px]:grid-cols-1">
						{imgProjs?.map(
							(
								project: Project,
								index,
							) => (
								<ProjectItem
									key={
										project.id
									}
									project={
										project
									}
									index={
										index
									}
								/>
							),
						)}
					</div>
				</div>
				<div className="flex justify-center py-8">
					<ScrollAreaCustom
						items={
							noImgProjs?.map((i) => {
								return {
									name: i.name,
									link: i.githubLink,
									status: i.status,
								};
							}) as any[]
						}
					/>
				</div>
			</div>
		</section>
	);
};
export default ProjectsSection;
