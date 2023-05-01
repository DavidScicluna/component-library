import { FC } from 'react';

import { Text } from '@chakra-ui/react';

import { useTheme } from '../../../../../common/hooks';
import { getColor } from '../../../../../common/utils/color';
import { useCheckboxContext } from '../../common/hooks';

import { CheckboxTitleProps } from './common/types';

const CheckboxTitle: FC<CheckboxTitleProps> = (props) => {
	const theme = useTheme();

	const { colorMode, size } = useCheckboxContext();

	const { children, ...rest } = props;

	return (
		<Text
			align='left'
			color={getColor({ theme, colorMode, type: 'text.primary' })}
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
