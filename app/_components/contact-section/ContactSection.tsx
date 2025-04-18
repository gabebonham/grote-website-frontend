'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import lin from '@/public/ln.png';
import arrow from '@/public/arrow.png';
import Image from 'next/image';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
const ContactSection = () => {
	const { ref, inView } = useInView({
		triggerOnce: true, // only trigger once
		threshold: 0.3, // percentage of element visible to trigger
	});
	return (
		<section
			id="con"
			ref={ref}
			className=" min-h-[500px] bg-[url('/contactBg.gif')] py-12 bg-cover flex flex-col items-center w-full"
		>
			<div className="w-full flex items-center pl-24 max-[400px]:flex-col max-[400px]:items-baseline max-[400px]:px-auto max-[400px]:gap-y-12 max-[800px]:pl-12 max-[800px]:pr-auto">
				<h1 className="text-5xl ">CONTATO:</h1>
				<Link
					href={
						'https://www.linkedin.com/in/gabriel-grote-92357a220/'
					}
				>
					<Image
						alt=""
						className="cursor-pointer invert brightness-0 contrast-200 size-24 ml-24 transition-all opacity-50 hover:opacity-90 hover:size-48 duration-500"
						src={lin}
						width={200}
						height={200}
					/>
				</Link>
			</div>
			<div className="bg-black w-1/2 h-96 max-[400px]:h-fit max-[400px]:pb-12 max-[400px]:w-86  max-[1000px]:w-2/3 rounded-2xl mt-48 flex flex-col items-center gap-y-4 border-2 border-gray-500 outline-1 ring-gray-500 ring-2 outline-white outline-offset-2 ring-offset-4">
				<p
					className={`w-4/5 text-center text-2xl mt-10 max-[800px]:w-full max-[1100px]:text-xl max-[400px]:text-sm`}
				>
					<span
						className={`${
							inView
								? 'animate-typing-once'
								: ''
						} `}
					>
						Tem alguma duvida? Quer marcar
					</span>
					<br />
					<span
						className={`${
							inView
								? 'animate-typing-once2'
								: ''
						} `}
					>
						uma reunião? Envie um Email
					</span>
					<br />
					<span
						className={`${
							inView
								? 'animate-typing-once3'
								: ''
						} `}
					>
						para grotegabriel@gmail.com!
					</span>
				</p>
				<Input
					placeholder={'Digite seu email aqui...'}
					className="focus-visible:border-none focus-visible:ring-0 border-0 w-96 max-[400px]:w-full "
				/>
				<Textarea
					placeholder={
						'Digite sua mensagem aqui...'
					}
					className="focus-visible:border-none focus-visible:ring-0 border-0  w-4/5 max-[400px]:w-full"
				/>
				<Button className="flex items-center justify-start bg-transparent hover:bg-transparent cursor-pointer max-[400px]:justify-self-center">
					<Image
						alt=""
						height={100}
						width={100}
						className="animate-slide-ltr-rtl size-8 mr-4 invert brightness-0 contrast-200"
						src={arrow}
					/>
					enviar
				</Button>
			</div>
		</section>
	);
};
export default ContactSection;
