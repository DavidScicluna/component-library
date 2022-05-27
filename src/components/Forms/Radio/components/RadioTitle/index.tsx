import { FC, useContext } from 'react';

import { ColorMode, Text } from '@chakra-ui/react';

import { RadioTitleProps } from './types';

import { RadioContext } from '../..';
import { getHue } from '../../../../../common/utils/color';
import { colorMode as defaultColorMode } from '../../common/data/defaultPropValues';
import { RadioContext as RadioContextType } from '../../types';

const RadioTitle: FC<RadioTitleProps> = (props) => {
	const { colorMode: colorModeHook = defaultColorMode } = useContext<RadioContextType>(RadioContext);

	const { children, colorMode: colorModeProp, ...rest } = props;

	const colorMode: ColorMode = colorModeProp || colorModeHook;

	return (
		<Text
			align='left'
			color={`gray.${getHue({ colorMode, type: 'text.primary' })}`}
			fontSize='xl'
			fontWeight='bold'
			lineHeight='normal'
			noOfLines={1}
			{...rest}
		>
			{children}
		</Text>
	);
};

export default RadioTitle;
