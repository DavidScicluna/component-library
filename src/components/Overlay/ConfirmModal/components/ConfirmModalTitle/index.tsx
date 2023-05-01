import { FC } from 'react';

import { Text } from '@chakra-ui/react';

import { useTheme } from '../../../../../common/hooks';
import { getColor } from '../../../../../common/utils/color';
import { useConfirmModalContext } from '../../common/hooks';

import { ConfirmModalTitleProps } from './common/types';

const ConfirmModalTitle: FC<ConfirmModalTitleProps> = ({ children, ...rest }) => {
	const theme = useTheme();

	const { colorMode } = useConfirmModalContext();

	return (
		<Text
			align='center'
			color={getColor({ theme, colorMode, type: 'text.primary' })}
			fontSize='2xl'
			fontWeight='bold'
			lineHeight='base'
			noOfLines={1}
			{...rest}
		>
			{children}
		</Text>
	);
};

export default ConfirmModalTitle;
