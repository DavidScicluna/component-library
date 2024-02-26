import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import { Transition } from '@components/Animation';
import { Box } from '@components/Box';
import type { GridProps } from '@components/Layout';
import { Grid, GridItem } from '@components/Layout';

import {
	DEFAULT_INDICATOR_IS_VISIBLE,
	DEFAULT_INDICATOR_OFFSET,
	DEFAULT_INDICATOR_PLACEMENT
} from './common/constants';
import { useIndicatorResponsiveValues, useIndicatorStyles } from './common/hooks';
import { KEYS_INDICATOR_CLASS } from './common/keys';
import type { IndicatorProps, IndicatorRef } from './common/types';

const Indicator = forwardRef(function Indicator<Element extends PolymorphicElementType>(
	props: IndicatorProps<Element>,
	ref: IndicatorRef<Element>
): JSX.Element {
	const {
		children,
		className = DEFAULT_CLASSNAME,
		renderIndicator,
		isVisible: isVisibleProp = DEFAULT_INDICATOR_IS_VISIBLE,
		offset: offsetProp = DEFAULT_INDICATOR_OFFSET,
		placement: placementProp = DEFAULT_INDICATOR_PLACEMENT,
		...rest
	} = props;

	const { isVisible, offset, placement } = useIndicatorResponsiveValues<Element>({
		isVisible: isVisibleProp,
		offset: offsetProp,
		placement: placementProp
	});

	const styles = useIndicatorStyles<Element>({ offset, placement });

	return (
		<Grid
			{...(rest as GridProps<Element>)}
			ref={ref}
			className={classNames(KEYS_INDICATOR_CLASS, { [className]: !!className })}
			templateColumns={1}
			templateRows={1}
			alignItems='stretch'
			alignContent='stretch'
			justifyItems='stretch'
			justifyContent='stretch'
			spacing={0}
		>
			<GridItem columnStart={1} rowStart={1} zIndex={1}>
				<Transition w='100%' h='100%' transition='fade' in={isVisible}>
					<Box w='100%' h='100%' sx={styles.overlay}>
						<Box sx={styles.position}>{renderIndicator()}</Box>
					</Box>
				</Transition>
			</GridItem>

			<GridItem columnStart={1} rowStart={1}>
				{children}
			</GridItem>
		</Grid>
	);
});

// Indicator.displayName = 'Indicator';

export default Indicator;
