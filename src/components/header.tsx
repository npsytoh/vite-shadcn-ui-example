import React from 'react';
import { ModeToggle } from '@/lib/mode-toggle';
import { Button } from '@/components/ui/button';

export const Header: React.FunctionComponent = () => {
	return (
		<>
			<header className="h-16 max-w-full flex items-center justify-between gap-4 border container px-4">
				<Button variant={'ghost'} asChild>
					<h1>SampleApp</h1>
				</Button>
				<ModeToggle />
			</header>
		</>
	);
};
