import type { ReactElement } from 'react';

import { sample } from 'lodash-es';

import { __DEFAULT_SPACING__ } from '@common/constants';
import colors from '@common/data/colors';
import type { BorderWidthArr } from '@common/types/classes';
import type { PolymorphicDefaultElement } from '@common/types/polymorphic';
import type { AppColor, RadiiArr } from '@common/types/theme';

// eslint-disable-next-line import-path/parent-depth
import { useStorybookContext } from '../../../../.storybook/preview';

import { __DEFAULT_MESSAGE_RADIUS__, __DEFAULT_MESSAGE_SIZE__, __DEFAULT_MESSAGE_VARIANT__ } from './common/constants';
import type { MessageProps, MessageVariant } from './common/types';
import type { MessageStory, MessageStoryMeta } from './common/types/story';
import {
	Message as MessageComponent,
	MessageActions,
	MessageBody,
	MessageIcon,
	MessageStack,
	MessageSubtitle,
	MessageTitle
} from '.';

const __DEFAULT_MESSAGE_STORY_COLOR__: AppColor = sample(colors) || 'blue';

export default {
	title: 'Data Display/Message',
	component: MessageComponent,
	argTypes: {
		radius: {
			name: 'Radius',
			type: 'string',
			defaultValue: __DEFAULT_MESSAGE_RADIUS__,
			// description: '',
			options: ['base', 'xs', 'sm', 'lg', 'xl', 'none', 'full'] as RadiiArr,
			control: { type: 'radio' }
		},
		size: {
			name: 'Size',
			type: 'string',
			defaultValue: __DEFAULT_MESSAGE_SIZE__,
			// description: '',
			options: [0, 1, 2, 4, 8] as BorderWidthArr,
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
			defaultValue: __DEFAULT_MESSAGE_VARIANT__,
			// description: '',
			options: ['solid', 'dashed', 'dotted', 'transparent'] as MessageVariant[],
			control: { type: 'radio' }
		}
	}
} as MessageStoryMeta;

export const Message: MessageStory = (props: MessageProps<PolymorphicDefaultElement>): ReactElement => {
	const { color, colorMode } = useStorybookContext();

	return (
		<MessageComponent {...props} color={color} colorMode={colorMode} p={props.spacing}>
			<MessageStack alignItems='center' justifyContent='center'>
				<MessageIcon
					color={!color ? __DEFAULT_MESSAGE_STORY_COLOR__ : color}
					icon='check'
					size='4xl'
					variant='contained'
					p={2}
				/>
				<MessageBody>
					<MessageTitle>Message Title</MessageTitle>
					<MessageSubtitle>Message Subtitle</MessageSubtitle>
				</MessageBody>
				<MessageActions>{() => <button>click</button>}</MessageActions>
			</MessageStack>
		</MessageComponent>
	);
};
