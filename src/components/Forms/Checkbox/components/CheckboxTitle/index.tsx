import { FC, useContext } from 'react';

import { ColorMode, Text } from '@chakra-ui/react';

import { CheckboxTitleProps } from './types';

import { CheckboxContext } from '../..';
import { getHue } from '../../../../../common/utils/color';
import { colorMode as defaultColorMode } from '../../common/data/defaultPropValues';
import { CheckboxContext as CheckboxContextType } from '../../types';

const CheckboxTitle: FC<CheckboxTitleProps> = (props) => {
	const { colorMode: colorModeHook = defaultColorMode } = useContext<CheckboxContextType>(CheckboxContext);

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

export default CheckboxTitle;
