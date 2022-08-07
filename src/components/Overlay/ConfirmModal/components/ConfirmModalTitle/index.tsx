import { FC, useContext } from 'react';

import { Text } from '@chakra-ui/react';

import { ConfirmModalContext } from '../..';
import { getColor } from '../../../../../common/utils/color';
import { colorMode as defaultColorMode } from '../../common/data/defaultPropValues';
import { ConfirmModalContext as ConfirmModalContextType } from '../../types';
import { useTheme } from '../../../../../common/hooks';

import { ConfirmModalTitleProps } from './types';

const ConfirmModalTitle: FC<ConfirmModalTitleProps> = ({ children, ...rest }) => {
	const theme = useTheme();

	const { colorMode = defaultColorMode } = useContext<ConfirmModalContextType>(ConfirmModalContext);

	return (
		<Text
			align='left'
			color={getColor({ theme, colorMode, type: 'text.primary' })}
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
