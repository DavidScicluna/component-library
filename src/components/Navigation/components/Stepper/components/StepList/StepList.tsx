import { forwardRef } from 'react';

import classNames from 'classnames';
import { compact, isArray } from 'lodash-es';
import { useDimensionsRef } from 'rooks';

import { DEFAULT_CLASSNAME } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import type { CarouselDefaultElement, CarouselRef } from '@components/DataDisplay';
import {
	Carousel,
	CarouselLeftLinearGradient,
	CarouselOverlayLeftArrowIconButton,
	CarouselOverlayRightArrowIconButton,
	CarouselRightLinearGradient
} from '@components/DataDisplay';
import { Grid, GridItem } from '@components/Layout';

import { useStepperContext } from '../../common/hooks';
import { getStepListID } from '../../common/utils';

import { KEYS_STEPPER_STEP_LIST_CLASS } from './common/keys';
import type { StepListProps, StepListRef } from './common/types';

const StepList = forwardRef(function StepList<Element extends PolymorphicElementType>(
	props: StepListProps<Element>,
	ref: StepListRef<Element>
): JSX.Element {
	const { color, colorMode, align, id, isFitted, orientation } = useStepperContext();

	const [childrenRef, childrenDimensions] = useDimensionsRef();
	const { width: childrenWidth = 0, height: childrenHeight = 0 } = childrenDimensions || {};

	const { children, className = DEFAULT_CLASSNAME, renderLeft, renderRight, ...rest } = props;

	return (
		<Grid
			{...rest}
			ref={ref}
			aria-orientation={orientation === 'top' || orientation === 'bottom' ? 'horizontal' : 'vertical'}
			id={getStepListID(id)}
			className={classNames(KEYS_STEPPER_STEP_LIST_CLASS, { [className]: !!className })}
			role='tablist'
			w='100%'
			h='100%'
			templateColumns={
				orientation === 'top' || orientation === 'bottom'
					? compact([renderLeft ? 'auto' : null, 'auto', renderRight ? 'auto' : null]).join(' ')
					: 1
			}
			templateRows={
				orientation === 'left' || orientation === 'right'
					? compact([renderLeft ? 'auto' : null, 'auto', renderRight ? 'auto' : null]).join(' ')
					: 1
			}
			alignItems='stretch'
			alignContent='stretch'
			justifyItems='stretch'
			justifyContent='stretch'
			spacing={0}
		>
			{renderLeft ? (
				<GridItem alignSelf='center' justifySelf='center'>
					{renderLeft({ color, colorMode, w: childrenWidth, h: childrenHeight })}
				</GridItem>
			) : null}

			{isArray(children) ? (
				<GridItem alignSelf='stretch' justifySelf={isFitted ? 'stretch' : align}>
					<Carousel
						ref={childrenRef as CarouselRef<CarouselDefaultElement>}
						w='100%'
						h='100%'
						colorMode={colorMode}
						renderLeftAction={(_variant, props) => (
							<CarouselOverlayLeftArrowIconButton {...props} isCompact variant='icon' />
						)}
						renderLeftLinearGradient={() => <CarouselLeftLinearGradient />}
						renderRightAction={(_variant, props) => (
							<CarouselOverlayRightArrowIconButton {...props} isCompact variant='icon' />
						)}
						renderRightLinearGradient={() => <CarouselRightLinearGradient />}
						scrollAmount={1}
						orientation={orientation === 'top' || orientation === 'bottom' ? 'horizontal' : 'vertical'}
						variant='overlay'
					>
						{children}
					</Carousel>
				</GridItem>
			) : null}

			{renderRight ? (
				<GridItem alignSelf='center' justifySelf='center'>
					{renderRight({ color, colorMode, w: childrenWidth, h: childrenHeight })}
				</GridItem>
			) : null}
		</Grid>
	);
});

// StepList.displayName = 'StepList';

export default StepList;
