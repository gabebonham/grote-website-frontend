'use client';

import { Project } from '@/app/types/Project';
import Image from 'next/image';
import Link from 'next/link';

const ProjectItem = ({
	project,
	index,
}: {
	project: Project;
	index: number;
}) => {
	const animationHanlder = (ind: number) => {
		return ((ind - 1) % 3) + 1;
	};

	return (
		<div
			className={` flex flex-col items-center text-center gap-y-4 ${
				'fade-slide-' + animationHanlder(index)
			}`}
		>
			<Link href={project.link || '#'} className="w-fit">
				<Image
					alt=""
					className="w-48 h-32 hover:w-72 hover:h-56 rounded-lg outline-1 outline-offset-4 outline-purple-200 transition-all duration-200 hover:outline-offset-1 hover:outline-purple-400"
					src={project.image as string}
					width={200}
					height={200}
				/>
			</Link>
			<p>{project.name}</p>
			{project.status == 'Concluído' ? (
				<p className="text-green-500">Concluído</p>
			) : (
				<p className="text-blue-500">Em Andamento</p>
			)}
			<div className="w-72 text-center text-wrap break-words">
				<Link href={project.githubLink || '#'}>
					{project.githubLink}
				</Link>
			</div>
		</div>
	);
};
export default ProjectItem;
