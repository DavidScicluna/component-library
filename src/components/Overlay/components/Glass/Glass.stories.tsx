import type { ReactElement } from 'react';

import classNames from 'classnames';

import classes from '@common/classes';
import { useGetColor } from '@common/hooks';
import type { BackdropBlurArr } from '@common/types/classes';

import { Center } from '@components/Layout';
import Text from '@components/Typography/components/Text';

import { useStorybookContext } from '../../../../../.storybook/preview';

import { __DEFAULT_GLASS_BLUR__, __DEFAULT_GLASS_HAS_BACKGROUND__ } from './common/constants';
import type { GlassProps } from './common/types';
import type { GlassStory, GlassStoryMeta } from './common/types/story';
import GlassComponent from '.';

export default {
	title: 'Overlay/Glass',
	component: GlassComponent,
	argTypes: {
		blur: {
			name: 'Blur',
			type: 'string',
			defaultValue: __DEFAULT_GLASS_BLUR__,
			// description: '',
			options: [
				'none',
				'xs',
				'sm',
				'md',
				'lg',
				'xl',
				'2xl',
				'3xl',
				'4xl',
				'5xl',
				'6xl',
				'7xl',
				'8xl',
				'9xl'
			] as BackdropBlurArr,
			control: { type: 'radio' }
		},
		hasBackground: {
			name: 'Has Background',
			type: 'boolean',
			defaultValue: __DEFAULT_GLASS_HAS_BACKGROUND__,
			// description: '',
			control: { type: 'boolean' }
		}
	}
} as GlassStoryMeta;

export const Glass: GlassStory = (props: GlassProps): ReactElement => {
	const { color, colorMode } = useStorybookContext();

	const radius = classes.borders.borderRadius.base;

	const text = useGetColor({ colorType: 'default', hueType: 'background', classType: 'text' });
	const background = useGetColor({ colorType: 'color', hueType: 'color', classType: 'bg' });

	const padding = classes.spacing.p[4];

	return (
		<GlassComponent {...props} className={classNames('w-full', radius)} color={color} colorMode={colorMode}>
			<Center className={classNames('w-full', background, padding)}>
				<Text align='center' color={text}>
					Hello
				</Text>
			</Center>
		</GlassComponent>
	);
};
