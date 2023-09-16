import type { ReactElement } from 'react';

import { Center } from '@components/Layout';

// eslint-disable-next-line import-path/parent-depth
import { useStorybookContext } from '../../../../.storybook/preview';
import { Button } from '../Button';

import { __DEFAULT_FILE_BUTTON_ACCEPT__, __DEFAULT_FILE_BUTTON_IS_MULTIPLE__ } from './common/constants';
import type { FileButtonProps } from './common/types';
import type { FileButtonStory, FileButtonStoryMeta } from './common/types/story';
import { FileButton as FileButtonComponent } from '.';

export default {
	title: 'Buttons/FileButton',
	component: FileButtonComponent,
	argTypes: {
		accept: {
			name: 'Accept',
			type: 'string',
			defaultValue: __DEFAULT_FILE_BUTTON_ACCEPT__,
			// description: '',
			control: { type: 'text' }
		},
		isMultiple: {
			name: 'Multiple',
			type: 'boolean',
			defaultValue: __DEFAULT_FILE_BUTTON_IS_MULTIPLE__,
			// description: '',
			control: { type: 'boolean' }
		}
	}
} as FileButtonStoryMeta;

export const FileButton: FileButtonStory = (props: FileButtonProps): ReactElement => {
	const { color, colorMode } = useStorybookContext();

	return (
		<Center w='100%'>
			<FileButtonComponent {...props}>
				{({ hasUploaded, onClick }) => (
					<Button
						{...props}
						color={hasUploaded ? 'green' : color}
						colorMode={colorMode}
						isActive={hasUploaded}
						onClick={onClick}
					>
						{hasUploaded ? 'Uploaded file' : 'Click to upload file'}
					</Button>
				)}
			</FileButtonComponent>
		</Center>
	);
};
