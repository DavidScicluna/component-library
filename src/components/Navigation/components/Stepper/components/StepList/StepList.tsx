import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import { compact, isArray } from 'lodash-es';
import { useElementSize } from 'usehooks-ts';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import type { PolymorphicComponentWithRef, PolymorphicDefaultElement } from '@common/types';

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

import { __KEYS_STEPPER_STEP_LIST_CLASS__ } from './common/keys';
import type { StepListProps, StepListRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const StepList: PolymorphicComponentWithRef = forwardRef(function StepList<
	Element extends ElementType = PolymorphicDefaultElement
>(props: StepListProps<Element>, ref: StepListRef<Element>): ReactElement {
	const { color, colorMode, align, id, isFitted, orientation } = useStepperContext();

	const [childrenRef, { width: childrenWidth, height: childrenHeight }] = useElementSize();

	const { children, className = __DEFAULT_CLASSNAME__, renderLeft, renderRight, ...rest } = props;

	return (
		<Grid<Element>
			{...rest}
			ref={ref}
			aria-orientation={orientation === 'top' || orientation === 'bottom' ? 'horizontal' : 'vertical'}
			id={getStepListID(id)}
			className={classNames(__KEYS_STEPPER_STEP_LIST_CLASS__, { [className]: !!className })}
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
						ref={childrenRef}
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

StepList.displayName = 'StepList';

export default StepList;
