import { forwardRef, ReactElement } from 'react';

import { Box } from '@chakra-ui/react';

import { useProviderContext, useTheme } from '../../common/hooks';
import { getColor } from '../../common/utils/color';

import { DividerProps, DividerRef } from './common/types';

const Divider = forwardRef<DividerRef, DividerProps>(function Divider(props, ref): ReactElement {
	const theme = useTheme();

	const { colorMode: defaultColorMode } = useProviderContext();

	const { colorMode = defaultColorMode, orientation = 'horizontal', ...rest } = props;

	return (
		<Box
			ref={ref}
			width={orientation === 'horizontal' ? '100%' : '2px'}
			minWidth={orientation === 'horizontal' ? '100%' : '2px'}
			maxWidth={orientation === 'horizontal' ? '100%' : '2px'}
			height={orientation === 'horizontal' ? '2px' : 'auto'}
			background={getColor({ theme, colorMode, type: 'divider' })}
			backgroundColor={getColor({ theme, colorMode, type: 'divider' })}
			border='none'
			flex={orientation === 'vertical' ? 1 : undefined}
			{...rest}
		/>
	);
});

export default Divider;
