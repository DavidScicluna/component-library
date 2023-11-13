import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import type { PolymorphicDefaultElement } from '@common/types';

import { Transition } from '@components/Animation';
import { Box } from '@components/Box';
import { Grid, GridItem } from '@components/Layout';

import {
	__DEFAULT_INDICATOR_IS_VISIBLE__,
	__DEFAULT_INDICATOR_OFFSET__,
	__DEFAULT_INDICATOR_PLACEMENT__
} from './common/constants';
import { useIndicatorStyles } from './common/hooks';
import { __KEYS_INDICATOR_CLASS__ } from './common/keys';
import type { IndicatorPlacement, IndicatorProps, IndicatorRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const Indicator = forwardRef(function Indicator<Element extends ElementType = PolymorphicDefaultElement>(
	props: IndicatorProps<Element>,
	ref: IndicatorRef<Element>
): ReactElement {
	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		renderIndicator,
		isVisible: visible = __DEFAULT_INDICATOR_IS_VISIBLE__,
		offset: o = __DEFAULT_INDICATOR_OFFSET__,
		placement: p = __DEFAULT_INDICATOR_PLACEMENT__,
		...rest
	} = props;

	const isVisible = useGetResponsiveValue<boolean>(visible);
	const offset = useGetResponsiveValue<number>(o);
	const placement = useGetResponsiveValue<IndicatorPlacement>(p);

	const styles = useIndicatorStyles<Element>({ offset, placement });

	return (
		<Grid<Element>
			{...rest}
			ref={ref}
			className={classNames(__KEYS_INDICATOR_CLASS__, { [className]: !!className })}
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

Indicator.displayName = 'Indicator';

export default Indicator;
