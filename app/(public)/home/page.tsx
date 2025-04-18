'use client';

import LoginModal from '@/app/_components/_modals/login/LoginModal';
import ModalButton from '@/app/_components/_modals/ModalButton';
import AboutSection from '@/app/_components/about-section/AboutSection';
import BlankSection from '@/app/_components/BlankSection';
import ContactSection from '@/app/_components/contact-section/ContactSection';
import AppHeader from '@/app/_components/presentation-section/AppHeader';
import PresentationSection from '@/app/_components/presentation-section/PresentationSection';
import ProjectsSection from '@/app/_components/projects-section/ProjectsSection';
import SkillsSection from '@/app/_components/skills-section/SkillsSection';
import { Button } from '@/components/ui/button';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function HomePage() {
	const [on, toggle] = useState<boolean>(false);
	const searchParams = useSearchParams();
	const myVar = searchParams.get('login');
	useEffect(() => {
		const myVar = searchParams.get('login');
		if (myVar === '123') toggle(true);
	}, [searchParams]);
	return (
		<div className="text-white bg-[url('/presentationBg.gif')] bg-contain ">
			<AppHeader />
			<ModalButton
				body={<LoginModal />}
				button={<span></span>}
				open={on}
			/>
			<PresentationSection />
			<BlankSection />
			<AboutSection />
			<SkillsSection />
			<ProjectsSection />
			<ContactSection />
		</div>
	);
}
