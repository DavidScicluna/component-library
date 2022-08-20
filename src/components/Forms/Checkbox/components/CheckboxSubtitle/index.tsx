import { FC, useContext } from 'react';

import { Text } from '@chakra-ui/react';

import { CheckboxContext } from '../..';
import { useTheme } from '../../../../../common/hooks';
import { getColor } from '../../../../../common/utils/color';
import { colorMode as defaultColorMode, size as defaultSize } from '../../common/data/defaultPropValues';
import { CheckboxContext as CheckboxContextType } from '../../types';

import { CheckboxSubtitleProps } from './types';

const CheckboxSubtitle: FC<CheckboxSubtitleProps> = (props) => {
	const theme = useTheme();

	const { colorMode = defaultColorMode, size = defaultSize } = useContext<CheckboxContextType>(CheckboxContext);

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
