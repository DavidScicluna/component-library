import type { ReactElement } from 'react';

import classNames from 'classnames';

import classes from '@common/classes';
import { useGetColor } from '@common/hooks';
import type { PolymorphicDefaultElement } from '@common/types/polymorphic';

import { Spinner } from '@components/Feedback';
import { Center } from '@components/Layout';
import Text from '@components/Typography/components/Text';

import {
	__DEFAULT_LOADING_OVERLAY_HAS_BACKDROP__,
	__DEFAULT_LOADING_OVERLAY_HAS_GLASS__,
	__DEFAULT_LOADING_OVERLAY_IS_LOADING__
} from './common/constants';
import type { LoadingOverlayProps } from './common/types';
import type { LoadingOverlayStory, LoadingOverlayStoryMeta } from './common/types/story';
import LoadingOverlayComponent from '.';

export default {
	title: 'Overlay/LoadingOverlay',
	component: LoadingOverlayComponent,
	argTypes: {
		isLoading: {
			name: 'Loading',
			type: 'boolean',
			defaultValue: __DEFAULT_LOADING_OVERLAY_IS_LOADING__,
			// description: '',
			control: { type: 'boolean' }
		},
		hasGlass: {
			name: 'Glass',
			type: 'boolean',
			defaultValue: __DEFAULT_LOADING_OVERLAY_HAS_GLASS__,
			// description: '',
			control: { type: 'boolean' }
		},
		hasBackdrop: {
			name: 'Backdrop',
			type: 'boolean',
			defaultValue: __DEFAULT_LOADING_OVERLAY_HAS_BACKDROP__,
			// description: '',
			control: { type: 'boolean' }
		}
	}
} as LoadingOverlayStoryMeta;

export const LoadingOverlay: LoadingOverlayStory = (
	props: LoadingOverlayProps<PolymorphicDefaultElement>
): ReactElement => {
	const radius = classes.borders.borderRadius.base;

	const spinner = useGetColor({ colorType: 'default', hueType: 'text.primary' });
	const text = useGetColor({ colorType: 'default', hueType: 'background', classType: 'text' });
	const background = useGetColor({ colorType: 'color', hueType: 'color', classType: 'bg' });

	return (
		<LoadingOverlayComponent {...props} renderSpinner={() => <Spinner color={spinner} size='9xl' variant='puff' />}>
			<Center className={classNames(radius, background)} w='100%' p={4}>
				<Text align='center' color={text}>
					Hello
				</Text>
			</Center>
		</LoadingOverlayComponent>
	);
};
