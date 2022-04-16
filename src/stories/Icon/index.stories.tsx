import { ReactElement } from 'react';

import { sample } from 'lodash';

import { Meta, Story } from './types';

import icons from '../../common/data/icons';
import { Icon as IconType } from '../../common/types/icons';
import IconComponent from '../../components/Icon';
import { Type, IconProps } from '../../components/Icon/types';
import controls from '../common/controls';

const childrenDefaultValue: IconType | undefined = sample(icons);
const childrenOptions: IconType[] = [...icons];

const typeDefaultValue: Type = 'filled';
const typeOptions: Type[] = ['filled', 'outlined'];

export default {
	title: 'Icon',
	component: IconComponent,
	argTypes: {
		icon: {
			name: 'Icon',
			defaultValue: childrenDefaultValue,
			// description: '',
			options: childrenOptions,
			control: 'select'
		},
		color: { ...controls.common.color },
		colorMode: { ...controls.theme.colorMode },
		backgroundColor: { ...controls.common.backgroundColor },
		borderRadius: { ...controls.theme.borderRadius },
		fontSize: { ...controls.theme.fontSize },
		padding: { ...controls.theme.padding },
		margin: { ...controls.theme.margin },
		type: {
			name: 'Type',
			type: 'string',
			defaultValue: typeDefaultValue,
			// description: '',
			options: typeOptions,
			control: 'radio'
		}
	}
	// parameters: {
	// 	backgrounds: {
	// 		default: 'twitter',
	// 		values: [
	// 			{ name: 'twitter', value: '#00aced' },
	// 			{ name: 'facebook', value: '#3b5998' }
	// 		]
	// 	}
	// }
} as Meta;

export const Icon: Story = (props: IconProps): ReactElement => <IconComponent {...props} />;
