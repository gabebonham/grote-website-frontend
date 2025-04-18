'use client';

import { Progress } from '@/components/ui/progress';

const LoadingScreen = () => {
	return (
		<div>
			<h1>Carregando...</h1>
			<Progress value={99} />
		</div>
	);
};
export default LoadingScreen;
