import { FC } from 'react';

import { Text } from '@chakra-ui/react';

import { useGetColor } from '../../../../../common/hooks';
import { useCheckboxContext } from '../../common/hooks';

import { CheckboxSubtitleProps } from './common/types';

const CheckboxSubtitle: FC<CheckboxSubtitleProps> = (props) => {
	const { colorMode, size } = useCheckboxContext();

	const { children, ...rest } = props;

	const color = useGetColor({ colorMode, type: 'text.secondary' });

	return (
		<Text align='left' color={color} fontSize={size} lineHeight='normal' noOfLines={1} {...rest}>
			{children}
		</Text>
	);
};

export default CheckboxSubtitle;
