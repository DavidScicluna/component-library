import { forwardRef,ReactElement } from 'react';

import { Box,useColorMode } from '@chakra-ui/react';

import { colorMode as defaultColorMode } from '../../common/default/props';
import { useTheme } from '../../common/hooks';
import { getColor } from '../../common/utils/color';

import { DividerProps,DividerRef } from './types';

const Divider = forwardRef<DividerRef, DividerProps>(function Divider(props, ref): ReactElement {
	const theme = useTheme();

	const { colorMode: colorModeHook = defaultColorMode } = useColorMode();

	const { colorMode = colorModeHook, orientation = 'horizontal', ...rest } = props;

	return (
		<Box
			ref={ref}
			width={orientation === 'horizontal' ? '100%' : '2px'}
			minWidth={orientation === 'horizontal' ? '100%' : '2px'}
			maxWidth={orientation === 'horizontal' ? '100%' : '2px'}
			height={orientation === 'horizontal' ? '2px' : 'auto'}
			backgroundColor={getColor({ theme, colorMode, type: 'divider' })}
			border='none'
			flex={orientation === 'vertical' ? 1 : undefined}
			{...rest}
		/>
	);
});

export default Divider;
