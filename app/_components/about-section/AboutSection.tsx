'use client';

import Image from 'next/image';
import meme1 from '@/public/meme3.png';
import meme2 from '@/public/meme.png';
import TextSection from '../TextSection';
import { useInView } from 'react-intersection-observer';
const AboutSection = () => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.3,
	});
	const about1 =
		'Oi! Eu sou Gabriel Grote de Porto Alegre RS. Sou Engenheiro De Software, FullStack, crio soluções dês de sistemas dos mais variados. Atualmente estou atuando como autonomo. Ser autônomo vem com seus desafios, mas trabalhar por conta me deu uma nova perspectiva, me fez pensar por mim mesmo, achar soluções e aprender por minha conta, ter senso crítico, raciocínio mais apurado...';
	const about2 =
		'Comecei minha jornada por conta própria, estudando algumas tecnologias. Eventualmente apliquei para estágio. Fui aceito pela Panvel. Meu tempo la foi crucial para meu desenvolvimento como, não apenas desenvolvedor, mas também como profissional. Aprendi a trabalhar em equipe, a prática. E claro, aprendi diversas coisas do mundo da TI. Eu era desenvolvedor BackEnd Java Spring Boot. O tempo passou e eu fui promovido para Junior, onde a responsabilidade e complexidade aumentaram, mesmo assim, me saí bem. Infelizmente meu tempo na Panvel chegou ao fim. Devido às enchentes, o setor onde eu trabalhava, o atacado, teve de reorganizar sua estratégia de vendas, e meu time foi desfeito. Foi uma oportunidade para experimentar minha carreira como autonomo.';
	const about3 =
		'Outras coisas sobre mim, caso queira me conhecer melhor. Sou multi artista focado em musica, produtor, guitarrista, compositor, cantor... no segundo em que não estou trabalhando, estou me ocupando criando algo.';
	return (
		<section
			id="ab"
			ref={ref}
			className="bg-[url('/aboutBg.gif')] bg-cover min-h-[500px]"
		>
			<div className="bg-black/50 ">
				<h1 className="text-4xl pt-12 pl-24">Sobre:</h1>
				<div className="flex flex-col items-center w-full py-24 gap-y-16 ">
					<div className="flex gap-x-12 max-[800px]:flex-col max-[800px]:items-center">
						<Image
							alt=""
							src={meme1}
							className={`size-96 rounded-2xl shadow-2xl max-[800px]:hidden ${
								inView
									? 'fade-slide-1'
									: 'hidden'
							}`}
						/>
						<TextSection
							text={about1}
							dcn={`w-xl max-[800px]:text-center max-[400px]:w-86  ${
								inView
									? 'fade-slide-2'
									: 'hidden'
							}`}
							pcn="text-2xl"
						/>
					</div>
					<div className="flex gap-x-12">
						<TextSection
							text={about2}
							dcn="w-xl max-[800px]:text-center max-[400px]:w-86"
							pcn={`text-lg text-end  max-[400px]:text-center ${
								inView
									? 'fade-slide-2'
									: 'hidden'
							}`}
						/>
						<Image
							alt=""
							src={meme2}
							className={`size-96 rounded-2xl max-[800px]:hidden shadow-2xl ${
								inView
									? 'fade-slide-3'
									: 'hidden'
							}`}
						/>
					</div>
					<div className="w-4xl  max-w-[780px] w-auto">
						<p className="text-lg text-center ">
							{about3}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
export default AboutSection;
