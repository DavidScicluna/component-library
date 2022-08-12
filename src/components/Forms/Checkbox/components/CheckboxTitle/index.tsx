import { FC, useContext } from 'react';

import { Text } from '@chakra-ui/react';

import { CheckboxContext } from '../..';
import { getHue } from '../../../../../common/utils/color';
import { colorMode as defaultColorMode, size as defaultSize } from '../../common/data/defaultPropValues';
import { CheckboxContext as CheckboxContextType } from '../../types';

import { CheckboxTitleProps } from './types';

const CheckboxTitle: FC<CheckboxTitleProps> = (props) => {
	const { colorMode = defaultColorMode, size = defaultSize } = useContext<CheckboxContextType>(CheckboxContext);

	const { children, ...rest } = props;

	return (
		<Text
			align='left'
			color={`gray.${getHue({ colorMode, type: 'text.primary' })}`}
			fontSize={size}
			fontWeight='bold'
			lineHeight='normal'
			noOfLines={1}
			{...rest}
		>
			{children}
		</Text>
	);
};

export default CheckboxTitle;
