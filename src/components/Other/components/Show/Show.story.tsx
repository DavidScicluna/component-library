import type { ReactElement } from 'react';

import { useGetColor } from '@common/hooks';

import { Center } from '@components/Layout';
import { Text } from '@components/Typography';

// eslint-disable-next-line import-path/parent-depth
import { useStorybookContext } from '../../../../../.storybook/preview';

import type { ShowProps } from './common/types';
import type { ShowStory, ShowStoryMeta } from './common/types/story';
import { Show as ShowComponent } from '.';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

export default {
	title: 'Other/Show',
	component: ShowComponent,
	argTypes: {
		hasBackground: {
			name: 'Is Shown',
			type: 'boolean',
			defaultValue: false,
			// description: '',
			control: { type: 'boolean' }
		}
	}
} as ShowStoryMeta;

export const Show: ShowStory = (props: ShowProps): ReactElement => {
	const { color, colorMode } = useStorybookContext();

	const text = useGetColor({ colorMode, colorType: 'default', hueType: 'background', classType: 'text' });
	const background = useGetColor({ color, colorMode, colorType: 'color', hueType: 'color', classType: 'bg' });

	return (
		<ShowComponent {...props} color={color} colorMode={colorMode}>
			<Center className={classNames(background)} w='100%' h='100%' p={4}>
				<Text align='center' color={text}>
					Hello
				</Text>
			</Center>
		</ShowComponent>
	);
};
