import React, { useRef, useState } from 'react';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Button } from './ui/button';

export const Content: React.FC = () => {
	const [inputText, setInputText] = useState<string>('');
	const ref = useRef<HTMLTextAreaElement>(null!);

	const handleClick = () => {
		ref.current.value = '';
		handleChange();
	};
	const handleChange = () => {
		setInputText(ref.current.value);
	};

	return (
		<div className="grid mt-10 mx-40 p-10 border rounded-md gap-10">
			<div className="grid w-full gap-1.5">
				<div className="flex items-end justify-between">
					<Label htmlFor="inputLabel">Input</Label>
					<Button onClick={handleClick}>Clear</Button>
				</div>
				<Textarea
					ref={ref}
					onChange={handleChange}
					placeholder="Enter text to be translated."
					id="inputLabel"
				/>
			</div>
			<div className="grid w-full gap-1.5">
				<Label htmlFor="outputLabel">Output</Label>
				<Textarea value={inputText} id="outputLabel" readOnly={true} />
			</div>
		</div>
	);
};
