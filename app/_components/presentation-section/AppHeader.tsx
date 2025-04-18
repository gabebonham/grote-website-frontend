'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function AppHeader() {
	const [dimensions, setDimensions] = useState({ x: 0, width: 0 });
	const navContainerRef = useRef<HTMLDivElement>(null);

	const handleMouseOver = (e: React.MouseEvent<HTMLAnchorElement>) => {
		const rect = e.currentTarget.getBoundingClientRect();
		const containerRect =
			navContainerRef.current?.getBoundingClientRect();

		if (containerRect) {
			const relativeX = rect.left - containerRect.left;
			setDimensions({ x: relativeX, width: rect.width });
		}
	};

	return (
		<header className="sticky top-0 left-0 w-full z-90">
			<div className="backdrop-blur-sm flex items-center justify-between w-full px-8 mx-auto pt-2">
				<Image
					className="invert-100"
					src="/logo.png"
					alt="logo"
					width={70}
					height={70}
				/>
				<div className="relative max-[400px]:hidden">
					<div
						ref={navContainerRef}
						className="relative flex items-center w-fit justify-between text-white gap-x-12 text-lg pb-2"
					>
						<a
							href="#ab"
							onMouseOver={
								handleMouseOver
							}
							className="hover:text-purpleCustom2"
						>
							sobre
						</a>
						<a
							href="#sk"
							onMouseOver={
								handleMouseOver
							}
							className="hover:text-purpleCustom2"
						>
							skills
						</a>
						<a
							href="#proj"
							onMouseOver={
								handleMouseOver
							}
							className="hover:text-purpleCustom2"
						>
							projetos
						</a>
						<a
							href="#con"
							onMouseOver={
								handleMouseOver
							}
							className="hover:text-purpleCustom2"
						>
							contatos
						</a>

						<div
							className="max-[400px]:hidden absolute bottom-0 h-1 bg-gray-500 rounded-full transition-all duration-300 ease-in-out"
							style={{
								left: `${dimensions.x}px`,
								width: `${dimensions.width}px`,
							}}
						/>
					</div>
				</div>
			</div>
		</header>
	);
}
