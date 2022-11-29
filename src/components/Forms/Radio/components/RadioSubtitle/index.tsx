import { FC } from 'react';

import { Text } from '@chakra-ui/react';

import { useTheme } from '../../../../../common/hooks';
import { getColor } from '../../../../../common/utils/color';
import { useRadioContext } from '../../common/hooks';

import { RadioSubtitleProps } from './types';

const RadioSubtitle: FC<RadioSubtitleProps> = (props) => {
	const theme = useTheme();

	const { colorMode, size } = useRadioContext();

	const { children, ...rest } = props;

	return (
		<Text
			align='left'
			color={getColor({ theme, colorMode, type: 'text.secondary' })}
			fontSize={size}
			lineHeight='normal'
			noOfLines={1}
			{...rest}
		>
			{children}
		</Text>
	);
};

export default RadioSubtitle;
