import React, { useRef, useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { OutputTextArea } from '@/components/outputTextArea';

export const Content: React.FC = () => {
	const [inputText, setInputText] = useState<string>('');
	const ref = useRef<HTMLTextAreaElement>(null!);

	const handleClickClear = (): void => {
		ref.current.value = '';
		handleClickSend();
	};
	const handleClickSend = (): void => {
		setInputText(ref.current.value);
	};

	return (
		<div className="grid mt-10 mx-40 p-10 border rounded-md gap-10">
			<div>
				<div className="grid w-full gap-1.5">
					<Label htmlFor="inputLabel">Input</Label>
					<Textarea ref={ref} placeholder="Enter text to be translated." id="inputLabel" />
				</div>
				<div className="flex gap-3 justify-end pt-2">
					<Button onClick={handleClickClear}>Clear</Button>
					<Button onClick={handleClickSend}>Send</Button>
				</div>
			</div>
			<OutputTextArea text={inputText} sourceLang="EN" targetLang="JA" />
		</div>
	);
};
