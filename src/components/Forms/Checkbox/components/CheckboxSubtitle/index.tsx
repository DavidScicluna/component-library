import { FC, useContext } from 'react';

import { Text } from '@chakra-ui/react';


import { CheckboxContext } from '../..';
import { getHue } from '../../../../../common/utils/color';
import { colorMode as defaultColorMode } from '../../common/data/defaultPropValues';
import { CheckboxContext as CheckboxContextType } from '../../types';

import { CheckboxSubtitleProps } from './types';

const CheckboxSubtitle: FC<CheckboxSubtitleProps> = (props) => {
	const { colorMode = defaultColorMode } = useContext<CheckboxContextType>(CheckboxContext);

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

export default CheckboxSubtitle;
