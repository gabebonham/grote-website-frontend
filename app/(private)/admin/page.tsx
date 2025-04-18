'use client';

import { useIsMobile } from '@/app/utils/is-mobile';
import { Button } from '@/components/ui/button';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import AboutSection from './sections/about/AboutSection';
import { useState } from 'react';
import logout from '@/app/lib/logout';
import { useRouter } from 'next/navigation';

export default function AdminPage() {
	const router = useRouter();
	const isMobile = useIsMobile();
	const [section, setSection] = useState<React.ReactNode | undefined>();
	const handleLogout = () => {
		logout();
		router.push('/home');
	};
	if (isMobile)
		return (
			<main>
				<Button onClick={() => handleLogout()}>
					Logout
				</Button>
				<Carousel
					orientation="vertical"
					className="my-12"
				>
					<CarouselContent className="flex flex-col gap-y-8 items-center h-42  py-8 ">
						<CarouselItem>
							<Button className="text-4xl p-12">
								Messages
							</Button>
						</CarouselItem>
						<CarouselItem>
							<Button className="text-4xl p-8">
								Presentation
							</Button>
						</CarouselItem>
						<CarouselItem>
							<Button className="text-5xl p-12">
								Images
							</Button>
						</CarouselItem>
						<CarouselItem>
							<Button
								className="text-5xl p-12"
								onClick={() =>
									setSection(
										<AboutSection />,
									)
								}
							>
								About
							</Button>
						</CarouselItem>
						<CarouselItem>
							<Button className="text-5xl p-12">
								Skills
							</Button>
						</CarouselItem>
						<CarouselItem>
							<Button className="text-5xl p-12">
								Projects
							</Button>
						</CarouselItem>
						<CarouselItem>
							<Button className="text-5xl p-12">
								Contact
							</Button>
						</CarouselItem>
					</CarouselContent>
				</Carousel>
				{section}
			</main>
		);
	else return <div>asdf</div>;
}
