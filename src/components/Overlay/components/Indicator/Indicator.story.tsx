import type { ReactElement } from 'react';

import { useGetColor } from '@common/hooks';
import type { PolymorphicDefaultElement } from '@common/types';

import { AspectRatio, Center } from '@components/Layout';
import { Text } from '@components/Typography';

// eslint-disable-next-line import-path/parent-depth
import { useStorybookContext } from '../../../../../.storybook/preview';

import {
	__DEFAULT_INDICATOR_IS_VISIBLE__,
	__DEFAULT_INDICATOR_OFFSET__,
	__DEFAULT_INDICATOR_PLACEMENT__
} from './common/constants';
import type { IndicatorPlacements, IndicatorProps } from './common/types';
import type { IndicatorStory, IndicatorStoryMeta } from './common/types/story';
import { Indicator as IndicatorComponent } from '.';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

export default {
	title: 'Overlay/Indicator',
	component: IndicatorComponent,
	argTypes: {
		offset: {
			name: 'offset',
			type: 'string',
			defaultValue: __DEFAULT_INDICATOR_OFFSET__,
			// description: '',
			control: { type: 'number' }
		},
		isVisible: {
			name: 'Visible',
			type: 'boolean',
			defaultValue: __DEFAULT_INDICATOR_IS_VISIBLE__,
			// description: '',
			control: { type: 'boolean' }
		},
		placement: {
			name: 'Placement',
			type: 'string',
			defaultValue: __DEFAULT_INDICATOR_PLACEMENT__,
			// description: '',
			options: [
				'bottom-center',
				'bottom-end',
				'bottom-start',
				'top-end',
				'top-start',
				'top-center',
				'middle-center',
				'middle-end',
				'middle-start'
			] as IndicatorPlacements,
			control: { type: 'radio' }
		}
	}
} as IndicatorStoryMeta;

export const Indicator: IndicatorStory = (props: IndicatorProps<PolymorphicDefaultElement>): ReactElement => {
	const { color, colorMode } = useStorybookContext();

	const overlay = useGetColor({ color, colorMode, colorType: 'color', hueType: 'divider', classType: 'bg' });
	const text = useGetColor({ colorMode, colorType: 'default', hueType: 'background', classType: 'text' });
	const background = useGetColor({ color, colorMode, colorType: 'color', hueType: 'color', classType: 'bg' });

	return (
		<IndicatorComponent
			{...props}
			renderIndicator={() => <Center w='24px' h='24px' className={classNames(overlay)} />}
		>
			<AspectRatio ratio='video'>
				<Center className={classNames(background)} w='100%' h='100%' p={2}>
					<Text align='center' color={text}>
						Hello
					</Text>
				</Center>
			</AspectRatio>
		</IndicatorComponent>
	);
};
