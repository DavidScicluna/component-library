import { FC, useContext } from 'react';

import { Text } from '@chakra-ui/react';


import { ConfirmModalContext } from '../..';
import { getHue } from '../../../../../common/utils/color';
import { colorMode as defaultColorMode } from '../../common/data/defaultPropValues';
import { ConfirmModalContext as ConfirmModalContextType } from '../../types';

import { ConfirmModalTitleProps } from './types';

const ConfirmModalTitle: FC<ConfirmModalTitleProps> = (props) => {
	const { colorMode = defaultColorMode } = useContext<ConfirmModalContextType>(ConfirmModalContext);

	const { children, ...rest } = props;

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
