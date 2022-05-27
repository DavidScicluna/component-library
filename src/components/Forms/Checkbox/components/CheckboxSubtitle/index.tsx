import { FC, useContext } from 'react';

import { ColorMode, Text } from '@chakra-ui/react';

import { CheckboxSubtitleProps } from './types';

import { CheckboxContext } from '../..';
import { getHue } from '../../../../../common/utils/color';
import { colorMode as defaultColorMode } from '../../common/data/defaultPropValues';
import { CheckboxContext as CheckboxContextType } from '../../types';

const CheckboxSubtitle: FC<CheckboxSubtitleProps> = (props) => {
	const { colorMode: colorModeHook = defaultColorMode } = useContext<CheckboxContextType>(CheckboxContext);

	const { children, colorMode: colorModeProp, ...rest } = props;

	const colorMode: ColorMode = colorModeProp || colorModeHook;

	return (
		<Text
			align='left'
			color={`gray.${getHue({ colorMode, type: 'text.secondary' })}`}
			fontSize='sm'
			lineHeight='normal'
			noOfLines={1}
			{...rest}
		>
			{children}
		</Text>
	);
};

export default CheckboxSubtitle;
