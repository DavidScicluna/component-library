import { DEFAULT_SPACING } from '../../../../common/constants';
import { useBoolean } from '../../../../common/hooks';

import { Button, CloseIconButton } from '../../../Buttons';
import { VStack } from '../../../Layout';
import React from 'react';
import { useStorybookContext } from '../../../Provider/components/StorybookProvider';

import { DEFAULT_ALERT_DURATION, DEFAULT_ALERT_STATUS, DEFAULT_ALERT_VARIANT } from './common/constants';
import type { AlertDefaultElement, AlertProps, AlertStatus, AlertVariant } from './common/types';
import type { AlertStory, AlertStoryMeta } from './common/types/story';
import { Alert as AlertComponent, AlertDescription, AlertIcon, AlertLabel } from '.';

export default {
	title: 'Feedback/Alert',
	component: AlertComponent,
	argTypes: {
		duration: {
			name: 'Duration',
			type: 'number',
			defaultValue: DEFAULT_ALERT_DURATION,
			// description: '',
			control: { type: 'number' }
		},
		spacing: {
			name: 'Spacing (0-24 | .0, .25, .5 or .75)',
			type: 'number',
			defaultValue: DEFAULT_SPACING,
			// description: '',
			control: { type: 'number' }
		},
		status: {
			name: 'Status',
			type: 'string',
			defaultValue: DEFAULT_ALERT_STATUS,
			// description: '',
			options: ['default', 'info', 'warning', 'success', 'error'] as Array<AlertStatus>,
			control: { type: 'radio' }
		},
		variant: {
			name: 'Variant',
			type: 'string',
			defaultValue: DEFAULT_ALERT_VARIANT,
			// description: '',
			options: ['horizontal', 'vertical'] as Array<AlertVariant>,
			control: { type: 'radio' }
		}
	}
} as AlertStoryMeta;

export const Alert: AlertStory = (props: AlertProps<AlertDefaultElement>): JSX.Element => {
	const { color, colorMode } = useStorybookContext();

	const [isOpen, setIsOpen] = useBoolean();

	return (
		<VStack w='100%' h='100%'>
			{isOpen ? (
				<AlertComponent
					{...props}
					color={color}
					colorMode={colorMode}
					onClose={() => setIsOpen.off()}
					// renderActions={() => }
					renderClose={(props) => <CloseIconButton {...props} />}
					renderLabel={() => <AlertLabel>Label</AlertLabel>}
					renderDescription={() => <AlertDescription>Description</AlertDescription>}
					renderIcon={() => <AlertIcon />}
				/>
			) : (
				<Button onClick={() => setIsOpen.on()} isFullWidth>
					Toggle Alert
				</Button>
			)}
		</VStack>
	);
};
