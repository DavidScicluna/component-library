import { FC } from 'react';

import { Text } from '@chakra-ui/react';

import { useGetColor } from '../../../../../common/hooks';
import { useRadioContext } from '../../common/hooks';

import { RadioSubtitleProps } from './common/types';

const RadioSubtitle: FC<RadioSubtitleProps> = (props) => {
	const { colorMode, size } = useRadioContext();

	const { children, ...rest } = props;

	const color = useGetColor({ colorMode, type: 'text.secondary' });

	return (
		<Text align='left' color={color} fontSize={size} lineHeight='normal' noOfLines={1} {...rest}>
			{children}
		</Text>
	);
};

export default RadioSubtitle;
