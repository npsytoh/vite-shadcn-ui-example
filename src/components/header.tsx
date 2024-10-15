import { ModeToggle } from './mode-toggle';

export default function Header() {
	return (
		<>
			<header className="h-16 flex items-center gap-4 border container">
				<ModeToggle />
			</header>
		</>
	);
}
