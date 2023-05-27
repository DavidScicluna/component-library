import { FC } from 'react';

import { Text } from '@chakra-ui/react';

import { useGetColor } from '../../../../../common/hooks';
import { useRadioContext } from '../../common/hooks';

import { RadioTitleProps } from './common/types';

const RadioTitle: FC<RadioTitleProps> = (props) => {
	const { colorMode, size } = useRadioContext();

	const { children, ...rest } = props;

	const color = useGetColor({ color: 'gray', colorMode, type: 'text.primary' });

	return (
		<Text
			align='left'
			color={color}
			fontSize={size}
			fontWeight='semibold'
			lineHeight='normal'
			noOfLines={1}
			{...rest}
		>
			{children}
		</Text>
	);
};

export default RadioTitle;
