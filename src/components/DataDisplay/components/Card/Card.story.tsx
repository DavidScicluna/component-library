import { DEFAULT_SPACING } from '../../../../common/constants';
import { useGetColor } from '../../../../common/hooks';
import type { ThemeRadiusArr } from '../../../../common/types';

import { DummyButton, DummyIconButton, DummyIconButtonIcon } from '../../../Buttons';
import { Text } from '../../../Typography';
import React from 'react';
import { useStorybookContext } from '../../../Provider/components/StorybookProvider';

import {
	DEFAULT_CARD_IS_ACTIVE,
	DEFAULT_CARD_IS_CLICKABLE,
	DEFAULT_CARD_IS_COLLAPSABLE,
	DEFAULT_CARD_IS_DISABLED,
	DEFAULT_CARD_IS_DIVISIBLE,
	DEFAULT_CARD_IS_FIXED,
	DEFAULT_CARD_IS_OPEN,
	DEFAULT_CARD_IS_OUTLINED,
	DEFAULT_CARD_RADIUS,
	DEFAULT_CARD_VARIANT
} from './common/constants';
import type { CardDefaultElement, CardProps, CardVariant } from './common/types';
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
			defaultValue: DEFAULT_CARD_IS_ACTIVE,
			// description: '',
			control: { type: 'boolean' }
		},
		isClickable: {
			name: 'Clickable',
			type: 'boolean',
			defaultValue: DEFAULT_CARD_IS_CLICKABLE,
			// description: '',
			control: { type: 'boolean' }
		},
		isCollapsable: {
			name: 'Collapsable',
			type: 'boolean',
			defaultValue: DEFAULT_CARD_IS_COLLAPSABLE,
			// description: '',
			control: { type: 'boolean' }
		},
		isDisabled: {
			name: 'Disabled',
			type: 'boolean',
			defaultValue: DEFAULT_CARD_IS_DISABLED,
			// description: '',
			control: { type: 'boolean' }
		},
		isDivisible: {
			name: 'Divisible',
			type: 'boolean',
			defaultValue: DEFAULT_CARD_IS_DIVISIBLE,
			// description: '',
			control: { type: 'boolean' }
		},
		isFixed: {
			name: 'Fixed',
			type: 'boolean',
			defaultValue: DEFAULT_CARD_IS_FIXED,
			// description: '',
			control: { type: 'boolean' }
		},
		isOutlined: {
			name: 'Outlined',
			type: 'boolean',
			defaultValue: DEFAULT_CARD_IS_OUTLINED,
			// description: '',
			control: { type: 'boolean' }
		},
		isOpen: {
			name: 'Open',
			type: 'boolean',
			defaultValue: DEFAULT_CARD_IS_OPEN,
			// description: '',
			control: { type: 'boolean' }
		},
		radius: {
			name: 'Radius',
			type: 'string',
			defaultValue: DEFAULT_CARD_RADIUS,
			// description: '',
			options: ['none', 'xs', 'sm', 'base', 'lg', 'xl', 'full'] as ThemeRadiusArr,
			control: { type: 'radio' }
		},
		spacing: {
			name: 'Spacing (0-24 | .0, .25, .5 or .75)',
			type: 'number',
			defaultValue: DEFAULT_SPACING,
			// description: '',
			control: { type: 'number' }
		},
		variant: {
			name: 'Variant',
			type: 'string',
			defaultValue: DEFAULT_CARD_VARIANT,
			// description: '',
			options: ['contained', 'light', 'dark', 'outlined', 'monochrome', 'transparent'] as Array<CardVariant>,
			control: { type: 'radio' }
		}
	}
} as CardStoryMeta;

export const Card: CardStory = (props: CardProps<CardDefaultElement>): JSX.Element => {
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
