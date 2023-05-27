import { FC } from 'react';

import { Text } from '@chakra-ui/react';

import { useGetColor } from '../../../../../common/hooks';
import { useCheckboxContext } from '../../common/hooks';

import { CheckboxTitleProps } from './common/types';

const CheckboxTitle: FC<CheckboxTitleProps> = (props) => {
	const { colorMode, size } = useCheckboxContext();

	const { children, ...rest } = props;

	const color = useGetColor({ colorMode, type: 'text.primary' });

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

export default CheckboxTitle;
