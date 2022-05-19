import { ReactElement } from 'react';

import { sample } from 'lodash';

import { Meta, Story } from './types';

import { IconProps, IconCategory, IconType, Icon as IconComponent } from '../..';
import icons from '../../common/data/icons';
import controls from '../common/controls';

const childrenDefaultValue: IconType | undefined = sample(icons);
const childrenOptions: IconType[] = [...icons];

const categoryDefaultValue: IconCategory = 'filled';
const categoryOptions: IconCategory[] = ['filled', 'outlined'];

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
		category: {
			name: 'Category',
			type: 'string',
			defaultValue: categoryDefaultValue,
			// description: '',
			options: categoryOptions,
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
