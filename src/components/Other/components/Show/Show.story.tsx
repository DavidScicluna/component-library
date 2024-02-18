import { useGetColor } from '@common/hooks';

import { Center } from '@components/Layout';
import { Text } from '@components/Typography';
import { useStorybookContext } from '@components/Provider/components/StorybookProvider';

import type { ShowProps } from './common/types';
import type { ShowStory, ShowStoryMeta } from './common/types/story';
import { Show as ShowComponent } from '.';

import classNames from 'classnames';

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

export const Show: ShowStory = (props: ShowProps): JSX.Element => {
	const { color, colorMode } = useStorybookContext();

	const text = useGetColor({ colorMode, colorType: 'default', hueType: 'background', classType: 'text' });
	const background = useGetColor({ color, colorMode, colorType: 'color', hueType: 'color', classType: 'bg' });

	return (
		<ShowComponent {...props}>
			<Center className={classNames(background)} w='100%' h='100%' p={4}>
				<Text align='center' color={text}>
					Hello
				</Text>
			</Center>
		</ShowComponent>
	);
};
