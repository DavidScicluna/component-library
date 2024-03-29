import { Center } from '../../../Layout';

import { useStorybookContext } from '../../../Provider/components/StorybookProvider';
import React from 'react';
import { Button } from '../Button';

import { DEFAULT_COPY_BUTTON_TIMEOUT } from './common/constants';
import type { CopyButtonProps } from './common/types';
import type { CopyButtonStory, CopyButtonStoryMeta } from './common/types/story';
import { CopyButton as CopyButtonComponent } from '.';

export default {
	title: 'Buttons/CopyButton',
	component: CopyButtonComponent,
	argTypes: {
		timeout: {
			name: 'Timeout',
			type: 'number',
			defaultValue: DEFAULT_COPY_BUTTON_TIMEOUT,
			// description: '',
			control: { type: 'number' }
		},
		value: {
			name: 'Text to copy to clipboard',
			type: 'string',
			defaultValue: '',
			// description: '',
			control: { type: 'text' }
		}
	}
} as CopyButtonStoryMeta;

export const CopyButton: CopyButtonStory = (props: CopyButtonProps): JSX.Element => {
	const { color, colorMode } = useStorybookContext();

	return (
		<Center w='100%'>
			<CopyButtonComponent {...props}>
				{({ hasCopied, onCopy }) => (
					<Button {...props} color={color} colorMode={colorMode} isActive={hasCopied} onClick={onCopy}>
						{hasCopied ? `Copied: "${props.value}"` : 'Click to copy text'}
					</Button>
				)}
			</CopyButtonComponent>
		</Center>
	);
};
