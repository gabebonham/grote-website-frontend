'use client';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import * as React from 'react';

export function ScrollAreaCustom({
	items,
}: {
	items: { name: string; link: string; status: string }[];
}) {
	return (
		<ScrollArea
			className={`h-72 w-1/2 text-center mt-4 rounded-md border `}
		>
			<div className="p-4">
				<h4 className="mb-4 text-lg font-medium leading-none">
					outros projetos:
				</h4>
				{items?.map((item, index) => (
					<div key={index}>
						<div
							key={item.link}
							className="text-sm"
						>
							{item.status ==
							'Concluído' ? (
								<p className="text-green-400">
									{
										item.name
									}
								</p>
							) : (
								<p className="text-blue-400">
									{
										item.name
									}
								</p>
							)}
							<Link
								className={
									'text-gray-500'
								}
								href={
									item.link ||
									'#'
								}
							>
								{item.link}
							</Link>
						</div>
						<Separator className="my-2" />
					</div>
				))}
			</div>
		</ScrollArea>
	);
}
