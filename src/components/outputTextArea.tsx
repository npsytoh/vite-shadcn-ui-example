import React from 'react';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import useSWR from 'swr';

interface outputTextAreaProps {
	text: string;
}

interface Translate {
	text: string;
	usage: {
		count: number;
		limit: number;
	};
}

const fetcher = async (key: string) => {
	const response = await fetch(key);
	return response.json();
};

export const OutputTextArea: React.FC<outputTextAreaProps> = ({ text }) => {
	const { data } = useSWR<Translate>(
		text ? 'http://localhost:8000/translate?text=translate&source_lang=EN&target_lang=JA' : null,
		fetcher,
	);

	console.log(data);

	return (
		<div className="grid w-full gap-1.5">
			<Label htmlFor="outputLabel">Output</Label>
			<Textarea value={text} id="outputLabel" readOnly={true} />
		</div>
	);
};
