import { FC, useContext } from 'react';

import { Text } from '@chakra-ui/react';

import { CheckboxContext } from '../..';
import { getHue } from '../../../../../common/utils/color';
import { colorMode as defaultColorMode, size as defaultSize } from '../../common/data/defaultPropValues';
import { CheckboxContext as CheckboxContextType } from '../../types';

import { CheckboxSubtitleProps } from './types';

const CheckboxSubtitle: FC<CheckboxSubtitleProps> = (props) => {
	const { colorMode = defaultColorMode, size = defaultSize } = useContext<CheckboxContextType>(CheckboxContext);

	const { children, ...rest } = props;

	return (
		<Text
			align='left'
			color={`gray.${getHue({ colorMode, type: 'text.secondary' })}`}
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
