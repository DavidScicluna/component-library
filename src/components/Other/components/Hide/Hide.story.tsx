import type { ReactElement } from 'react';

import { useGetColor } from '@common/hooks';

import { Center } from '@components/Layout';
import { Text } from '@components/Typography';

// eslint-disable-next-line import-path/parent-depth
import { useStorybookContext } from '../../../../../.storybook/preview';

import type { HideProps } from './common/types';
import type { HideStory, HideStoryMeta } from './common/types/story';
import { Hide as HideComponent } from '.';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

export default {
	title: 'Other/Hide',
	component: HideComponent,
	argTypes: {
		hasBackground: {
			name: 'Is Hiden',
			type: 'boolean',
			defaultValue: false,
			// description: '',
			control: { type: 'boolean' }
		}
	}
} as HideStoryMeta;

export const Hide: HideStory = (props: HideProps): ReactElement => {
	const { color, colorMode } = useStorybookContext();

	const text = useGetColor({ colorMode, colorType: 'default', hueType: 'background', classType: 'text' });
	const background = useGetColor({ color, colorMode, colorType: 'color', hueType: 'color', classType: 'bg' });

	return (
		<HideComponent {...props} color={color} colorMode={colorMode}>
			<Center className={classNames(background)} w='100%' h='100%' p={4}>
				<Text align='center' color={text}>
					Hello
				</Text>
			</Center>
		</HideComponent>
	);
};
