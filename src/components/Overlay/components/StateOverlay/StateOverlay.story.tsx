import classes from '@common/classes';
import { useGetColor } from '@common/hooks';
import { PuffSpinner } from '@components/Feedback';
import { Center } from '@components/Layout';
import { Text } from '@components/Typography';

import { useStorybookContext } from '@components/Provider/components/StorybookProvider';

import {
	__DEFAULT_STATE_OVERLAY_HAS_GLASS__,
	__DEFAULT_STATE_OVERLAY_IS_ALWAYS_VISIBLE__,
	__DEFAULT_STATE_OVERLAY_STATE__
} from './common/constants';
import type { StateOverlayProps, StateOverlayState } from './common/types';
import type { StateOverlayStory, StateOverlayStoryMeta } from './common/types/story';
import { StateOverlay as StateOverlayComponent } from '.';

import classNames from 'classnames';

export default {
	title: 'Overlay/StateOverlay',
	component: StateOverlayComponent,
	argTypes: {
		isAlwaysVisible: {
			name: 'Always Visible',
			type: 'boolean',
			defaultValue: __DEFAULT_STATE_OVERLAY_IS_ALWAYS_VISIBLE__,
			// description: '',
			control: { type: 'boolean' }
		},
		hasGlass: {
			name: 'Glass',
			type: 'boolean',
			defaultValue: __DEFAULT_STATE_OVERLAY_HAS_GLASS__,
			// description: '',
			control: { type: 'boolean' }
		},
		state: {
			name: 'State',
			type: 'boolean',
			defaultValue: __DEFAULT_STATE_OVERLAY_STATE__,
			// description: '',
			options: ['success', 'error', 'empty', 'loading', 'default'] as Array<StateOverlayState>,
			control: { type: 'radio' }
		}
	}
} as StateOverlayStoryMeta;

export const StateOverlay: StateOverlayStory = (props: StateOverlayProps<any>): JSX.Element => {
	const { color, colorMode } = useStorybookContext();

	const radius = classes.borders.border_radius.base;

	const spinner = useGetColor({ colorMode, colorType: 'default', hueType: 'text.primary' });
	const text = useGetColor({ colorMode, colorType: 'default', hueType: 'background', classType: 'text' });
	const background = useGetColor({ color, colorMode, colorType: 'color', hueType: 'color', classType: 'bg' });

	return (
		<StateOverlayComponent {...props} renderSpinner={() => <PuffSpinner color={spinner} size='9xl' />}>
			{() => (
				<Center className={classNames(radius, background)} w='100%' p={4}>
					<Text align='center' color={text}>
						Hello
					</Text>
				</Center>
			)}
		</StateOverlayComponent>
	);
};
