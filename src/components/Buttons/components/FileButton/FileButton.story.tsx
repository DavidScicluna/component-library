import { Center } from '../../../Layout';

import { useStorybookContext } from '../../../Provider/components/StorybookProvider';
import React from 'react';
import { Button } from '../Button';

import { DEFAULT_FILE_BUTTON_ACCEPT, DEFAULT_FILE_BUTTON_IS_MULTIPLE } from './common/constants';
import type { FileButtonDefaultElement, FileButtonProps } from './common/types';
import type { FileButtonStory, FileButtonStoryMeta } from './common/types/story';
import { FileButton as FileButtonComponent } from '.';

export default {
	title: 'Buttons/FileButton',
	component: FileButtonComponent,
	argTypes: {
		accept: {
			name: 'Accept',
			type: 'string',
			defaultValue: DEFAULT_FILE_BUTTON_ACCEPT,
			// description: '',
			control: { type: 'text' }
		},
		isMultiple: {
			name: 'Multiple',
			type: 'boolean',
			defaultValue: DEFAULT_FILE_BUTTON_IS_MULTIPLE,
			// description: '',
			control: { type: 'boolean' }
		}
	}
} as FileButtonStoryMeta;

export const FileButton: FileButtonStory = (props: FileButtonProps<FileButtonDefaultElement>): JSX.Element => {
	const { color, colorMode } = useStorybookContext();

	return (
		<Center w='100%'>
			<FileButtonComponent {...props}>
				{({ hasUploaded, onUpload }) => (
					<Button
						// {...props}
						color={hasUploaded ? 'green' : color}
						colorMode={colorMode}
						isActive={hasUploaded}
						onClick={onUpload}
					>
						{hasUploaded ? 'Uploaded file' : 'Click to upload file'}
					</Button>
				)}
			</FileButtonComponent>
		</Center>
	);
};
