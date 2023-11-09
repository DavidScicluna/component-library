import type { ReactElement } from 'react';

import { range } from 'lodash-es';

import { __DEFAULT_SPACING__ } from '@common/constants';
import { useGetColor } from '@common/hooks';
import type { PolymorphicDefaultElement } from '@common/types';

import { Center } from '@components/Layout';
import { Text } from '@components/Typography';

// eslint-disable-next-line import-path/parent-depth
import { useStorybookContext } from '../../../../../.storybook/preview';

import {
	__DEFAULT_CAROUSEL_ORIENTTATION__,
	__DEFAULT_CAROUSEL_SCROLL_AMOUNT__,
	__DEFAULT_CAROUSEL_VARIANT__
} from './common/constants';
import type { CarouselOrientation, CarouselProps, CarouselVariant } from './common/types';
import type { CarouselStory, CarouselStoryMeta } from './common/types/story';
import CarouselDots from './components/CarouselDots/CarouselDots';
import {
	CarouselLeftArrowIconButton,
	CarouselLeftLinearGradient,
	CarouselOverlayLeftArrowIconButton,
	CarouselOverlayRightArrowIconButton,
	CarouselRightArrowIconButton,
	CarouselRightLinearGradient
} from './components';
import {
	Carousel as CarouselComponent,
	CarouselLeftArrowButton,
	CarouselOverlayLeftArrowButton,
	CarouselOverlayRightArrowButton,
	CarouselRightArrowButton
} from '.';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const items = range(20);

export default {
	title: 'Data Display/Carousel',
	component: CarouselComponent,
	argTypes: {
		scrollAmount: {
			name: 'Scroll Amount',
			type: 'number',
			defaultValue: __DEFAULT_CAROUSEL_SCROLL_AMOUNT__,
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
		orientation: {
			name: 'Orientation',
			type: 'string',
			defaultValue: __DEFAULT_CAROUSEL_ORIENTTATION__,
			// description: '',
			options: ['horizontal', 'vertical'] as Array<CarouselOrientation>,
			control: { type: 'radio' }
		},
		variant: {
			name: 'Variant',
			type: 'string',
			defaultValue: __DEFAULT_CAROUSEL_VARIANT__,
			// description: '',
			options: ['left', 'right', 'hidden', 'overlay'] as Array<CarouselVariant>,
			control: { type: 'radio' }
		}
	}
} as CarouselStoryMeta;

export const Carousel: CarouselStory = ({
	orientation,
	...rest
}: CarouselProps<PolymorphicDefaultElement>): ReactElement => {
	const { color, colorMode } = useStorybookContext();

	const text = useGetColor({ colorMode, colorType: 'default', hueType: 'background', classType: 'text' });
	const background = useGetColor({ color, colorMode, colorType: 'color', hueType: 'color', classType: 'bg' });

	return (
		<CarouselComponent
			{...rest}
			w='100%'
			h='100%'
			// maxH='100vh'
			maxH='75vh'
			color={color}
			colorMode={colorMode}
			renderDots={orientation === 'horizontal' ? () => <CarouselDots p={2} /> : undefined}
			renderLeftAction={(variant, props) =>
				orientation === 'horizontal' ? (
					variant === 'overlay' ? (
						<CarouselOverlayLeftArrowIconButton {...props} />
					) : (
						<CarouselLeftArrowIconButton {...props} />
					)
				) : variant === 'overlay' ? (
					<CarouselOverlayLeftArrowButton {...props} />
				) : (
					<CarouselLeftArrowButton {...props} />
				)
			}
			renderLeftLinearGradient={() => <CarouselLeftLinearGradient />}
			renderRightAction={(variant, props) =>
				orientation === 'horizontal' ? (
					variant === 'overlay' ? (
						<CarouselOverlayRightArrowIconButton {...props} />
					) : (
						<CarouselRightArrowIconButton {...props} />
					)
				) : variant === 'overlay' ? (
					<CarouselOverlayRightArrowButton {...props} />
				) : (
					<CarouselRightArrowButton {...props} />
				)
			}
			renderRightLinearGradient={() => <CarouselRightLinearGradient />}
			orientation={orientation}
		>
			{items.map((item, index) => (
				<Center key={item} className={classNames(background)} p={4}>
					<Text align='center' color={text}>
						{`Item ${index + 1}`}
					</Text>
				</Center>
			))}
		</CarouselComponent>
	);
};
