import Header from '@/components/header';
import { AppProvider } from './provider';

export const App = () => {
	return (
		<AppProvider>
			<>
				<Header />
			</>
		</AppProvider>
	);
};
