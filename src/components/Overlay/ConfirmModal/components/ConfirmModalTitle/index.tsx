import { FC, useContext } from 'react';

import { ColorMode, Text } from '@chakra-ui/react';

import { ConfirmModalTitleProps } from './types';

import { ConfirmModalContext } from '../..';
import { getHue } from '../../../../../common/utils/color';
import { colorMode as defaultColorMode } from '../../common/data/defaultPropValues';
import { ConfirmModalContext as ConfirmModalContextType } from '../../types';

const ConfirmModalTitle: FC<ConfirmModalTitleProps> = (props) => {
	const { colorMode: colorModeHook = defaultColorMode } = useContext<ConfirmModalContextType>(ConfirmModalContext);

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

export default ConfirmModalTitle;
