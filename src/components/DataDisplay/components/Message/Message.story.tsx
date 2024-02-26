import { sample } from 'lodash-es';

import { __DEFAULT_SPACING__ } from '../../../../common/constants';
import { appColors } from '../../../../common/data';
import type { ThemeAppColor, ThemeRadiusArr, ThemeSpacing } from '../../../../common/types';
import React from 'react';
import { useStorybookContext } from '../../../Provider/components/StorybookProvider';

import { __DEFAULT_MESSAGE_RADIUS__, __DEFAULT_MESSAGE_VARIANT__ } from './common/constants';
import type { MessageDefaultElement, MessageProps, MessageVariant } from './common/types';
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

const __DEFAULT_MESSAGE_STORY_COLOR__: ThemeAppColor = sample(appColors) || 'blue';

export default {
	title: 'Data Display/Message',
	component: MessageComponent,
	argTypes: {
		radius: {
			name: 'Radius',
			type: 'string',
			defaultValue: __DEFAULT_MESSAGE_RADIUS__,
			// description: '',
			options: ['base', 'xs', 'sm', 'lg', 'xl', 'none', 'full'] as ThemeRadiusArr,
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
			options: ['solid', 'dashed', 'dotted', 'transparent'] as Array<MessageVariant>,
			control: { type: 'radio' }
		}
	}
} as MessageStoryMeta;

export const Message: MessageStory = (props: MessageProps<MessageDefaultElement>): JSX.Element => {
	const { color, colorMode } = useStorybookContext();

	return (
		<MessageComponent {...props} color={color} colorMode={colorMode} p={props.spacing as ThemeSpacing}>
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
