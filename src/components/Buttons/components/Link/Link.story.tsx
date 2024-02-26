import { useGetColor } from '../../../../common/hooks';

import { Center } from '../../../Layout';
import { Text } from '../../../Typography';

import { useStorybookContext } from '../../../Provider/components/StorybookProvider';
import React from 'react';
import {
	__DEFAULT_LINK_IS_DISABLED__,
	__DEFAULT_LINK_IS_UNDERLINE__,
	__DEFAULT_LINK_IS_UNSTYLED__
} from './common/constants';
import type { LinkDefaultElement, LinkProps } from './common/types';
import type { LinkStory, LinkStoryMeta } from './common/types/story';
import { Link as LinkComponent } from '.';

export default {
	title: 'Buttons/Link',
	component: LinkComponent,
	argTypes: {
		isDisabled: {
			name: 'Disabled',
			type: 'boolean',
			defaultValue: __DEFAULT_LINK_IS_DISABLED__,
			// description: '',
			control: { type: 'boolean' }
		},
		isUnderline: {
			name: 'Underline',
			type: 'boolean',
			defaultValue: __DEFAULT_LINK_IS_UNDERLINE__,
			// description: '',
			control: { type: 'boolean' }
		},
		isUnstyled: {
			name: 'Unstyled',
			type: 'boolean',
			defaultValue: __DEFAULT_LINK_IS_UNSTYLED__,
			// description: '',
			control: { type: 'boolean' }
		}
	}
} as LinkStoryMeta;

export const Link: LinkStory = (props: LinkProps<LinkDefaultElement>): JSX.Element => {
	const { color, colorMode } = useStorybookContext();

	const text = useGetColor({ colorMode, colorType: 'default', hueType: 'text.primary', classType: 'text' });

	return (
		<Center w='auto'>
			<LinkComponent {...props} color={color} colorMode={colorMode}>
				<Text align='center' color={text}>
					Hello
				</Text>
			</LinkComponent>
		</Center>
	);
};
