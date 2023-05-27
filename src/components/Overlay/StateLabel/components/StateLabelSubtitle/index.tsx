import { FC } from 'react';

import { Text } from '@chakra-ui/react';

import { useGetColor } from '../../../../../common/hooks';
import { useStateLabelContext } from '../../common/hooks';

import { StateLabelSubtitleProps } from './common/types';

const StateLabelSubtitle: FC<StateLabelSubtitleProps> = ({ children, ...rest }) => {
	const { colorMode } = useStateLabelContext();

	const color = useGetColor({ color: 'gray', colorMode, type: 'text.secondary' });

	return (
		<Text align='center' color={color} fontSize={['xs', 'sm']} lineHeight='base' noOfLines={0} {...rest}>
			{children}
		</Text>
	);
};

export default StateLabelSubtitle;
