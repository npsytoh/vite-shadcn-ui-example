import { AppProvider } from './provider';
import { Header } from '@/components/header';

export const App = () => {
	return (
		<AppProvider>
			<>
				<Header />
			</>
		</AppProvider>
	);
};
