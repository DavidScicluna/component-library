import { FC } from 'react';

import { Text } from '@chakra-ui/react';

import { useTheme } from '../../../../../common/hooks';
import { getColor } from '../../../../../common/utils/color';
import { useStateLabelContext } from '../../common/hooks';

import { StateLabelSubtitleProps } from './common/types';

const StateLabelSubtitle: FC<StateLabelSubtitleProps> = ({ children, ...rest }) => {
	const theme = useTheme();

	const { colorMode } = useStateLabelContext();

	return (
		<Text
			align='center'
			color={getColor({ theme, colorMode, type: 'text.secondary' })}
			fontSize={['xs', 'sm']}
			lineHeight='base'
			noOfLines={0}
			{...rest}
		>
			{children}
		</Text>
	);
};

export default StateLabelSubtitle;
