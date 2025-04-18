'use client';

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { X } from 'lucide-react';
import { ReactNode, useEffect, useState } from 'react';
interface ModalButtonProps {
	button: ReactNode;
	body: ReactNode;
	open: boolean;
}
const ModalButton = ({ button, body, open = false }: ModalButtonProps) => {
	const [isModalOpen, toggleModal] = useState<boolean>(open);
	useEffect(() => {
		toggleModal(open);
	}, [open]);

	return (
		<AlertDialog open={isModalOpen} onOpenChange={toggleModal}>
			<AlertDialogTrigger asChild>
				{button}
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle className="flex justify-end">
						<X
							onClick={() =>
								toggleModal(
									false,
								)
							}
						/>
					</AlertDialogTitle>
					<AlertDialogDescription>
						{body}
					</AlertDialogDescription>
				</AlertDialogHeader>
			</AlertDialogContent>
		</AlertDialog>
	);
};

export default ModalButton;
