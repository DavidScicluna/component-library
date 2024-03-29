import { useGetColor } from '../../../../common/hooks';
import React from 'react';
import { AspectRatio, Center } from '../../../Layout';
import { Text } from '../../../Typography';
import { useStorybookContext } from '../../../Provider/components/StorybookProvider';

import {
	DEFAULT_INDICATOR_IS_VISIBLE,
	DEFAULT_INDICATOR_OFFSET,
	DEFAULT_INDICATOR_PLACEMENT
} from './common/constants';
import type { IndicatorPlacement, IndicatorProps } from './common/types';
import type { IndicatorStory, IndicatorStoryMeta } from './common/types/story';
import { Indicator as IndicatorComponent } from '.';

import classNames from 'classnames';
import { PolymorphicDefaultElement } from '../../../../common/types';

export default {
	title: 'Overlay/Indicator',
	component: IndicatorComponent,
	argTypes: {
		offset: {
			name: 'offset',
			type: 'string',
			defaultValue: DEFAULT_INDICATOR_OFFSET,
			// description: '',
			control: { type: 'number' }
		},
		isVisible: {
			name: 'Visible',
			type: 'boolean',
			defaultValue: DEFAULT_INDICATOR_IS_VISIBLE,
			// description: '',
			control: { type: 'boolean' }
		},
		placement: {
			name: 'Placement',
			type: 'string',
			defaultValue: DEFAULT_INDICATOR_PLACEMENT,
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
			] as Array<IndicatorPlacement>,
			control: { type: 'radio' }
		}
	}
} as IndicatorStoryMeta;

export const Indicator: IndicatorStory = (props: IndicatorProps<PolymorphicDefaultElement>): JSX.Element => {
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
