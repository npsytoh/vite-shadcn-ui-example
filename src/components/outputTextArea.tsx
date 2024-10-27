import React from 'react';
import useSWR from 'swr';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

interface outputTextAreaProps {
	text: string;
	sourceLang: string;
	targetLang: string;
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

export const OutputTextArea: React.FC<outputTextAreaProps> = ({ text, sourceLang, targetLang }) => {
	const query = new URLSearchParams({
		text,
		source_lang: sourceLang,
		target_lang: targetLang,
	});
	const { data, isLoading } = useSWR<Translate>(
		text ? `http://localhost:8000/translate?${query}` : null,
		fetcher,
		{
			revalidateOnFocus: false,
			revalidateOnReconnect: false,
		},
	);

	return (
		<div className="grid w-full gap-1.5">
			<div className="flex">
				<Label htmlFor="outputLabel">Output</Label>
			</div>
			<Textarea value={data?.text} id="outputLabel" readOnly={true} />
			<div className="flex gap-3 justify-end">
				<span>使用状況 : </span>
				<span>{data?.usage ? `${data?.usage.count} / ${data?.usage.limit}` : '-'}</span>
			</div>
		</div>
	);
};
