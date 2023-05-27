import { forwardRef, ReactElement } from 'react';

import { Box } from '@chakra-ui/react';

import { useGetColor } from '../../common/hooks';
import { useProviderContext } from '../Provider/common/hooks';

import { DividerProps, DividerRef } from './common/types';

const Divider = forwardRef<DividerRef, DividerProps>(function Divider(props, ref): ReactElement {
	const { colorMode: defaultColorMode } = useProviderContext();

	const { colorMode = defaultColorMode, orientation = 'horizontal', ...rest } = props;

	const background = useGetColor({ color: 'gray', colorMode, type: 'divider' });

	return (
		<Box
			ref={ref}
			width={orientation === 'horizontal' ? '100%' : '2px'}
			minWidth={orientation === 'horizontal' ? '100%' : '2px'}
			maxWidth={orientation === 'horizontal' ? '100%' : '2px'}
			height={orientation === 'horizontal' ? '2px' : 'auto'}
			background={background}
			backgroundColor={background}
			border='none'
			flex={orientation === 'vertical' ? 1 : undefined}
			{...rest}
		/>
	);
});

export default Divider;
