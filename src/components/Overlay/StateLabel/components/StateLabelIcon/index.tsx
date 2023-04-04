import { FC } from 'react';

import { Center } from '@chakra-ui/react';

import { merge } from 'lodash';

import { useTheme } from '../../../../../common/hooks';
import Icon from '../../../../Icon';
import { useStateLabelContext } from '../../common/hooks';

import { variant as defaultVariant } from './common/default/props';
import useStyles from './common/styles';
import { StateLabelIconProps } from './types';

const StateLabelIcon: FC<StateLabelIconProps> = (props) => {
	const theme = useTheme();

	const { color, colorMode } = useStateLabelContext();

	const { icon, category, variant = defaultVariant, sx, ...rest } = props;

	const style = useStyles({ theme, color, colorMode, variant });

	return (
		<Center {...rest} sx={merge(style.icon, sx)}>
			<Icon
				icon={icon}
				category={category}
				w='inherit'
				width='inherit'
				h='inherit'
				height='inherit'
				maxWidth='inherit'
				maxHeight='inherit'
				fontSize='inherit'
			/>
		</Center>
	);
};

export default StateLabelIcon;
