import type { ReactElement } from 'react';

import { __DEFAULT_SPACING__ } from '@common/constants';
import { useBoolean } from '@common/hooks';
import type { PolymorphicDefaultElement } from '@common/types';

import { Button, CloseIconButton } from '@components/Buttons';
import { VStack } from '@components/Layout';

// eslint-disable-next-line import-path/parent-depth
import { useStorybookContext } from '../../../../../.storybook/preview';

import { __DEFAULT_ALERT_DURATION__, __DEFAULT_ALERT_STATUS__, __DEFAULT_ALERT_VARIANT__ } from './common/constants';
import type { AlertProps, AlertStatus, AlertVariant } from './common/types';
import type { AlertStory, AlertStoryMeta } from './common/types/story';
import { Alert as AlertComponent, AlertDescription, AlertIcon, AlertLabel } from '.';

export default {
	title: 'Feedback/Alert',
	component: AlertComponent,
	argTypes: {
		duration: {
			name: 'Duration',
			type: 'number',
			defaultValue: __DEFAULT_ALERT_DURATION__,
			// description: '',
			control: { type: 'number' }
		},
		spacing: {
			name: 'Spacing (0-24 | .0, .25, .5 or .75)',
			type: 'number',
			defaultValue: __DEFAULT_SPACING__,
			// description: '',
			control: { type: 'number' }
		},
		status: {
			name: 'Status',
			type: 'string',
			defaultValue: __DEFAULT_ALERT_STATUS__,
			// description: '',
			options: ['default', 'info', 'warning', 'success', 'error'] as Array<AlertStatus>,
			control: { type: 'radio' }
		},
		variant: {
			name: 'Variant',
			type: 'string',
			defaultValue: __DEFAULT_ALERT_VARIANT__,
			// description: '',
			options: ['horizontal', 'vertical'] as Array<AlertVariant>,
			control: { type: 'radio' }
		}
	}
} as AlertStoryMeta;

export const Alert: AlertStory = (props: AlertProps<PolymorphicDefaultElement>): ReactElement => {
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
