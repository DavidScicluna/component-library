import { ReactElement, forwardRef } from 'react';

import { useColorMode, Box } from '@chakra-ui/react';

import { DividerRef, DividerProps } from './types';

const Divider = forwardRef<DividerRef, DividerProps>(function Divider(props, ref): ReactElement {
	const { colorMode: colorModeHook = 'light' } = useColorMode();

	const { colorMode = colorModeHook, orientation = 'horizontal', ...rest } = props;

	return (
		<Box
			ref={ref}
			as='hr'
			width={orientation === 'horizontal' ? '100%' : '2px'}
			height={orientation === 'horizontal' ? '2px' : '100%'}
			backgroundColor={`gray.${colorMode === 'light' ? 200 : 700}`}
			flex={1}
			{...rest}
		/>
	);
});

export default Divider;
