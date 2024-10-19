import { AppProvider } from './provider';
import { Header } from '@/components/header';
import { Content } from '@/components/content';

export const App = () => {
	return (
		<AppProvider>
			<>
				<Header />
				<Content />
			</>
		</AppProvider>
	);
};
