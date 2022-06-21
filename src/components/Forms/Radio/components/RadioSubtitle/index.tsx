import { FC, useContext } from 'react';

import { Text } from '@chakra-ui/react';

import { RadioSubtitleProps } from './types';

import { RadioContext } from '../..';
import { getHue } from '../../../../../common/utils/color';
import { colorMode as defaultColorMode } from '../../common/data/defaultPropValues';
import { RadioContext as RadioContextType } from '../../types';

const RadioSubtitle: FC<RadioSubtitleProps> = (props) => {
	const { colorMode = defaultColorMode } = useContext<RadioContextType>(RadioContext);

	const { children, ...rest } = props;

	return (
		<Text
			align='left'
			color={`gray.${getHue({ colorMode, type: 'text.secondary' })}`}
			fontSize='sm'
			lineHeight='normal'
			noOfLines={1}
			{...rest}
		>
			{children}
		</Text>
	);
};

export default RadioSubtitle;
