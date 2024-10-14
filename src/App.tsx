import { Button } from '@/components/ui/button';

function App() {
	const handleClick = () => {
		alert('Clicked!');
	};

	return (
		<>
			<Button onClick={handleClick}>Click me!</Button>
		</>
	);
}

export default App;
