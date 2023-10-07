import type { ReactElement } from 'react';

import { __DEFAULT_SPACING__ } from '@common/constants';
import { useGetColor } from '@common/hooks';
import type { PolymorphicDefaultElement, ThemeRadiusArr } from '@common/types';

import { DummyButton, DummyIconButton, DummyIconButtonIcon } from '@components/Buttons';
import { Text } from '@components/Typography';

// eslint-disable-next-line import-path/parent-depth
import { useStorybookContext } from '../../../../../.storybook/preview';

import {
	__DEFAULT_CARD_IS_ACTIVE__,
	__DEFAULT_CARD_IS_CLICKABLE__,
	__DEFAULT_CARD_IS_COLLAPSABLE__,
	__DEFAULT_CARD_IS_DISABLED__,
	__DEFAULT_CARD_IS_DIVISIBLE__,
	__DEFAULT_CARD_IS_FIXED__,
	__DEFAULT_CARD_IS_OPEN__,
	__DEFAULT_CARD_IS_OUTLINED__,
	__DEFAULT_CARD_RADIUS__,
	__DEFAULT_CARD_VARIANT__
} from './common/constants';
import type { CardProps, CardVariant } from './common/types';
import type { CardStory, CardStoryMeta } from './common/types/story';
import { CardBody, CardFooter, CardHeader, CardStack, CardSubtitle, CardTitle } from './components';
import { Card as CardComponent } from '.';

export default {
	title: 'Data Display/Card',
	component: CardComponent,
	argTypes: {
		isActive: {
			name: 'Active',
			type: 'boolean',
			defaultValue: __DEFAULT_CARD_IS_ACTIVE__,
			// description: '',
			control: { type: 'boolean' }
		},
		isClickable: {
			name: 'Clickable',
			type: 'boolean',
			defaultValue: __DEFAULT_CARD_IS_CLICKABLE__,
			// description: '',
			control: { type: 'boolean' }
		},
		isCollapsable: {
			name: 'Collapsable',
			type: 'boolean',
			defaultValue: __DEFAULT_CARD_IS_COLLAPSABLE__,
			// description: '',
			control: { type: 'boolean' }
		},
		isDisabled: {
			name: 'Disabled',
			type: 'boolean',
			defaultValue: __DEFAULT_CARD_IS_DISABLED__,
			// description: '',
			control: { type: 'boolean' }
		},
		isDivisible: {
			name: 'Divisible',
			type: 'boolean',
			defaultValue: __DEFAULT_CARD_IS_DIVISIBLE__,
			// description: '',
			control: { type: 'boolean' }
		},
		isFixed: {
			name: 'Fixed',
			type: 'boolean',
			defaultValue: __DEFAULT_CARD_IS_FIXED__,
			// description: '',
			control: { type: 'boolean' }
		},
		isOutlined: {
			name: 'Outlined',
			type: 'boolean',
			defaultValue: __DEFAULT_CARD_IS_OUTLINED__,
			// description: '',
			control: { type: 'boolean' }
		},
		isOpen: {
			name: 'Open',
			type: 'boolean',
			defaultValue: __DEFAULT_CARD_IS_OPEN__,
			// description: '',
			control: { type: 'boolean' }
		},
		radius: {
			name: 'Radius',
			type: 'string',
			defaultValue: __DEFAULT_CARD_RADIUS__,
			// description: '',
			options: ['none', 'xs', 'sm', 'base', 'lg', 'xl', 'full'] as ThemeRadiusArr,
			control: { type: 'radio' }
		},
		spacing: {
			name: 'Spacing (0-24 | .0, .25, .5 or .75)',
			type: 'number',
			defaultValue: __DEFAULT_SPACING__,
			// description: '',
			control: { type: 'number' }
		},
		variant: {
			name: 'Variant',
			type: 'string',
			defaultValue: __DEFAULT_CARD_VARIANT__,
			// description: '',
			options: ['contained', 'light', 'dark', 'outlined', 'monochrome', 'transparent'] as Array<CardVariant>,
			control: { type: 'radio' }
		}
	}
} as CardStoryMeta;

export const Card: CardStory = (props: CardProps<PolymorphicDefaultElement>): ReactElement => {
	const { color, colorMode } = useStorybookContext();

	const text = useGetColor({ colorMode, colorType: 'default', hueType: 'text.primary', classType: 'text' });

	return (
		<CardComponent {...props} w='100%' h='100%' color={color} colorMode={colorMode} p={2}>
			<CardStack>
				<CardHeader
					renderTitle={() => <CardTitle>Title</CardTitle>}
					renderSubtitle={() => <CardSubtitle>Subtitle</CardSubtitle>}
					renderActions={() => (
						<DummyIconButton color={color} colorMode={colorMode} isAnimated={false} isCompact>
							<DummyIconButtonIcon icon='crop_square' />
						</DummyIconButton>
					)}
				/>
				<CardBody p={4}>
					<Text align='center' color={text}>
						Hello
					</Text>
				</CardBody>
				<CardFooter>
					<DummyButton
						color={color}
						colorMode={colorMode}
						isAnimated={false}
						isFullWidth
						size='xs'
						variant='outlined'
					>
						Footer Button
					</DummyButton>
				</CardFooter>
			</CardStack>
		</CardComponent>
	);
};
