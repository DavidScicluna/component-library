import { FC } from 'react';

import { Text } from '@chakra-ui/react';

import { useTheme } from '../../../../../common/hooks';
import { getColor } from '../../../../../common/utils/color';
import { useConfirmModalContext } from '../../common/hooks';

import { ConfirmModalSubtitleProps } from './common/types';

const ConfirmModalSubtitle: FC<ConfirmModalSubtitleProps> = ({ children, ...rest }) => {
	const theme = useTheme();

	const { colorMode } = useConfirmModalContext();

	return (
		<Text
			align='center'
			color={getColor({ theme, colorMode, type: 'text.secondary' })}
			fontSize='sm'
			lineHeight='base'
			noOfLines={0}
			{...rest}
		>
			{children}
		</Text>
	);
};

export default ConfirmModalSubtitle;
