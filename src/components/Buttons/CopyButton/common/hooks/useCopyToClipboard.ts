/* eslint-disable no-console */
import { useState } from 'react';

type CopiedValue = string | null;
type CopyFn = (text: string) => Promise<boolean>; // Return success
type UseCopyToClipboardReturn = [CopiedValue, CopyFn];

/**
 * Based on https://usehooks-ts.com/react-hook/use-copy-to-clipboard
 *
 * This React hook provides a copy method to save a string in the and the copied value (default: null).
 * If anything doesn't work, it prints a warning in the console and the value will be null.
 */
const useCopyToClipboard = (): UseCopyToClipboardReturn => {
	const [copiedText, setCopiedText] = useState<CopiedValue>(null);

	const copy: CopyFn = async (text) => {
		if (!navigator?.clipboard) {
			console.warn('Clipboard not supported');
			return false;
		}

		// Try to save to clipboard then save it in the state if worked
		try {
			await navigator.clipboard.writeText(text);
			setCopiedText(text);
			return true;
		} catch (error) {
			console.warn('Copy failed', error);
			setCopiedText(null);
			return false;
		}
	};

	return [copiedText, copy];
};

export default useCopyToClipboard;
