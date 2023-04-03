import { FC } from 'react';

import { Text } from '@chakra-ui/react';

import { useTheme } from '../../../../../common/hooks';
import { getColor } from '../../../../../common/utils/color';
import { useCheckboxContext } from '../../common/hooks';

import { CheckboxSubtitleProps } from './types';

const CheckboxSubtitle: FC<CheckboxSubtitleProps> = (props) => {
	const theme = useTheme();

	const { colorMode, size } = useCheckboxContext();

	const { children, ...rest } = props;

	return (
		<Text
			align='left'
			color={getColor({ theme, colorMode, type: 'text.secondary' })}
			fontSize={size}
			lineHeight='normal'
			noOfLines={1}
			{...rest}
		>
			{children}
		</Text>
	);
};

export default CheckboxSubtitle;
