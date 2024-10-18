import * as React from 'react';
import { ThemeProvider } from '@/lib/theme-provider';

interface AppProviderProps {
	children: React.ReactNode;
}

export const AppProvider: React.FunctionComponent<AppProviderProps> = ({ children }) => {
	return (
		<ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
			{children}
		</ThemeProvider>
	);
};
