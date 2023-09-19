import type { ReactElement } from 'react';
import { forwardRef, useMemo } from 'react';

import type { CenterProps } from '@chakra-ui/react';
import { Center, Grid, GridItem } from '@chakra-ui/react';

import { useProviderContext } from '../../Provider/common/hooks';

import type { IndicatorProps, IndicatorRef } from './common/types';
import { getIndicatorPosition } from './common/utils';

const Indicator = forwardRef<IndicatorRef, IndicatorProps>(function Indicator(props, ref): ReactElement {
	// const theme = useTheme();

	const { color: defaultColor, colorMode: defaultColorMode } = useProviderContext();

	const {
		children,
		color = defaultColor,
		colorMode = defaultColorMode,
		renderIndicator,
		position = 'top-end',
		offset = 0,
		...rest
	} = props;

	const indicatorPosition = useMemo<CenterProps>(
		() => getIndicatorPosition({ position, offset }),
		[position, offset]
	);

	return (
		<Grid
			{...rest}
			ref={ref}
			templateColumns='1fr'
			templateRows='1fr'
			alignItems='stretch'
			justifyItems='stretch'
			justifyContent='stretch'
			gap={0}
		>
			{renderIndicator ? (
				<GridItem rowStart={1} colStart={1} zIndex={1} position='relative'>
					<Center {...indicatorPosition} position='absolute'>
						{renderIndicator({ color, colorMode })}
					</Center>
				</GridItem>
			) : null}
			<GridItem rowStart={1} colStart={1}>
				{children}
			</GridItem>
		</Grid>
	);
});

Indicator.displayName = 'Indicator';

export default Indicator;
