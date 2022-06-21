import { FC, useContext } from 'react';

import { Text } from '@chakra-ui/react';

import { ConfirmModalSubtitleProps } from './types';

import { ConfirmModalContext } from '../..';
import { getHue } from '../../../../../common/utils/color';
import { colorMode as defaultColorMode } from '../../common/data/defaultPropValues';
import { ConfirmModalContext as ConfirmModalContextType } from '../../types';

const ConfirmModalSubtitle: FC<ConfirmModalSubtitleProps> = (props) => {
	const { colorMode = defaultColorMode } = useContext<ConfirmModalContextType>(ConfirmModalContext);

	const { children, ...rest } = props;

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

export default ConfirmModalSubtitle;
