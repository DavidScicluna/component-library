import { forwardRef, ReactElement, useMemo } from 'react';

import { Center, CenterProps, Grid, GridItem } from '@chakra-ui/react';

import { useProviderContext } from '../../Provider/common/hooks';

import { IndicatorProps, IndicatorRef } from './common/types';
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

	const indicatorPosition = useMemo<CenterProps>(() => {
		return getIndicatorPosition({ position, offset });
	}, [position, offset]);

	return (
		<Center {...rest} ref={ref} display='inline-block'>
			<Grid
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
		</Center>
	);
});

export default Indicator;
