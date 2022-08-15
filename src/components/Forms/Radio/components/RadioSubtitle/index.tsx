import { FC, useContext } from 'react';

import { Text } from '@chakra-ui/react';

import { RadioContext } from '../..';
import { getColor } from '../../../../../common/utils/color';
import { colorMode as defaultColorMode, size as defaultSize } from '../../common/data/defaultPropValues';
import { RadioContext as RadioContextType } from '../../types';
import { useTheme } from '../../../../../common/hooks';

import { RadioSubtitleProps } from './types';

const RadioSubtitle: FC<RadioSubtitleProps> = (props) => {
	const theme = useTheme();

	const { colorMode = defaultColorMode, size = defaultSize } = useContext<RadioContextType>(RadioContext);

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
