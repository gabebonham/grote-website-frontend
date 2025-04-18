'use client';
import Image from 'next/image';
import spr from '@/public/spring.png';
import nxt from '@/public/next.png';
import lnx from '@/public/linux.png';
import sql from '@/public/sql.png';
import rct from '@/public/react.png';
import unt from '@/public/un.png';
import gmk from '@/public/gm.png';
import djn from '@/public/dj.png';
import jav from '@/public/jv.png';
import tps from '@/public/ts.png';
import jsp from '@/public/js.png';
import cs from '@/public/css.png';
import ht from '@/public/h.png';
import mg from '@/public/mdb.png';
import sq from '@/public/sq.png';
import git from '@/public/git.png';
import py from '@/public/python.png';
import { useQuery } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';
import { skillsMock } from '@/app/mocks/skills-mock';
import LoadingScreen from '../LoadingScreen';
import { useEffect, useState } from 'react';
import { Skill } from '@/app/types/Skill';

const SkillsSection = () => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.3,
	});
	const [generalPrimary, setGeneralPrimary] = useState<Skill[]>([]);
	const [generalSecondary, setGeneralSecondary] = useState<Skill[]>([]);
	const [techPrimary, setTechPrimary] = useState<Skill[]>([]);
	const [techSecondary, setTechSecondary] = useState<Skill[]>([]);
	const animationHanlder = (ind: number) => {
		return ((ind - 1) % 3) + 1;
	};
	const { data, isLoading, error } = useQuery<Skill[]>({
		queryKey: ['lazy-skill'],
		queryFn: async () => {
			// const res = await api.get('/projects');
			// return res.data;
			return skillsMock;
		},
		enabled: inView,
	});
	useEffect(() => {
		setGeneralPrimary(
			data?.filter(
				(s: Skill) =>
					s.category == 'general' &&
					s.type == 'primary',
			) as Skill[],
		);
		setGeneralSecondary(
			data?.filter(
				(s: Skill) =>
					s.category == 'general' &&
					s.type == 'secondary',
			) as Skill[],
		);
		setTechPrimary(
			data?.filter(
				(s: Skill) =>
					s.category == 'tech' &&
					s.type == 'primary',
			) as Skill[],
		);
		setTechSecondary(
			data?.filter(
				(s: Skill) =>
					s.category == 'tech' &&
					s.type == 'secondary',
			) as Skill[],
		);
	}, [data]);
	if (isLoading) return <LoadingScreen />;
	return (
		<section id="sk" ref={ref} className=" bg-white min-h-[500px]">
			<div className="bg-black/90 flex flex-col items-center gap-y-24 px-12">
				<h1 className="text-4xl pt-12 pl-24 self-start max-[400px]:justify-self-center max-[400px]:pl-12">
					Skills:
				</h1>
				<div className="grid grid-cols-3 gap-x-48 gap-y-24 text-3xl max-[800px]:gap-x-24 max-[400px]:grid-cols-1 max-[400px]:text-center">
					{inView &&
						generalPrimary?.map(
							(s: Skill, index) => (
								<h3
									key={
										s.id
									}
									className={`hover:opacity-90  fade-slide2-${animationHanlder(
										index,
									)} opacity-50`}
								>
									{s.name}
								</h3>
							),
						)}
				</div>
				<div className="grid grid-cols-4 gap-32 text-lg max-[400px]:grid-cols-2">
					{inView &&
						generalSecondary?.map(
							(
								skill: Skill,
								index,
							) => (
								<h3
									key={
										skill.id
									}
									className={`hover:opacity-90  fade-slide2-${animationHanlder(
										index,
									)} opacity-50`}
								>
									{
										skill.name
									}
								</h3>
							),
						)}
				</div>
				<h2 className="text-blue-600 justify-between gap-x-8 flex items-center">
					<span>=begin</span>
					<span className="text-2xl text-white">
						tecnologias primarias
					</span>
					<span>=end</span>
				</h2>
				<div className="grid grid-cols-3 items-center gap-x-42 justify-center max-[400px]:grid-cols-1 max-[400px]:gap-y-12">
					{inView &&
						techPrimary?.map(
							(
								skill: Skill,
								index,
							) => (
								<Image
									key={
										skill.id
									}
									alt=""
									src={
										skill.image as string
									}
									className={`invert brightness-0 contrast-200 w-64  hover:opacity-90 fade-slide2-${animationHanlder(
										index,
									)} opacity-50`}
								/>
							),
						)}
				</div>
				<h2 className="text-green-600 justify-between gap-x-8 flex items-center">
					<span>{'<!-------------------'}</span>
					<span className="text-2xl text-white">
						tecnologias secundarias
					</span>
					<span>{'------------------->'}</span>
				</h2>
				<div className="grid grid-cols-4 gap-x-52 gap-y-36 max-[800px]:gap-x-20 max-[400px]:grid-cols-2">
					{inView &&
						techSecondary?.map(
							(
								skill: Skill,
								index,
							) => (
								<Image
									key={
										skill.id
									}
									alt=""
									src={
										skill.image as string
									}
									className={`invert brightness-0 contrast-200 w-28  hover:opacity-90 fade-slide2-${animationHanlder(
										index,
									)} opacity-50`}
								/>
							),
						)}
				</div>
			</div>
		</section>
	);
};
export default SkillsSection;
