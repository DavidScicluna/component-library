import { sample } from 'lodash-es';

import { DEFAULT_SPACING } from '../../../../common/constants';
import { appColors } from '../../../../common/data';
import type { ThemeAppColor, ThemeRadiusArr, ThemeSpacing } from '../../../../common/types';
import React from 'react';
import { useStorybookContext } from '../../../Provider/components/StorybookProvider';

import { DEFAULT_MESSAGE_RADIUS, DEFAULT_MESSAGE_VARIANT } from './common/constants';
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

const DEFAULT_MESSAGE_STORY_COLOR: ThemeAppColor = sample(appColors) || 'blue';

export default {
	title: 'Data Display/Message',
	component: MessageComponent,
	argTypes: {
		radius: {
			name: 'Radius',
			type: 'string',
			defaultValue: DEFAULT_MESSAGE_RADIUS,
			// description: '',
			options: ['base', 'xs', 'sm', 'lg', 'xl', 'none', 'full'] as ThemeRadiusArr,
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
			defaultValue: DEFAULT_MESSAGE_VARIANT,
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
					color={!color ? DEFAULT_MESSAGE_STORY_COLOR : color}
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
