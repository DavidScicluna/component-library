import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';
import { useGetColor } from '@common/hooks';

import { Transition } from '@components/Animation';
import { CarouselLeftLinearGradient, CarouselRightLinearGradient } from '@components/DataDisplay';
import { useCarouselContext } from '@components/DataDisplay/components/Carousel/common/hooks';
import { Center, Grid, GridItem } from '@components/Layout';

import type { CarouselArrowButtonProps } from '..';
import { CarouselArrowButton } from '..';

import {
	DEFAULT_CAROUSEL_OVERLAY_ARROW_BUTTON_AS,
	DEFAULT_CAROUSEL_OVERLAY_ARROW_BUTTON_IS_VISIBLE
} from './common/constants';
import { useCarouselOverlayArrowButtonResponsiveValues } from './common/hooks';
import { KEYS_CAROUSEL_OVERLAY_ARROW_BUTTON_CLASS } from './common/keys';
import type {
	CarouselOverlayArrowButtonElement,
	CarouselOverlayArrowButtonProps,
	CarouselOverlayArrowButtonRef
} from './common/types';

const CarouselOverlayArrowButton = forwardRef(function CarouselOverlayArrowButton<
	Element extends CarouselOverlayArrowButtonElement
>(props: CarouselOverlayArrowButtonProps<Element>, ref: CarouselOverlayArrowButtonRef<Element>): JSX.Element {
	const { colorMode, spacing, orientation } = useCarouselContext();

	const {
		as = DEFAULT_CAROUSEL_OVERLAY_ARROW_BUTTON_AS,
		className = DEFAULT_CLASSNAME,
		renderLeftLinearGradient,
		renderRightLinearGradient,
		direction: directionProp,
		isVisible: isVisibleProp = DEFAULT_CAROUSEL_OVERLAY_ARROW_BUTTON_IS_VISIBLE,
		...rest
	} = props;

	const { direction, isVisible } = useCarouselOverlayArrowButtonResponsiveValues<Element>({
		direction: directionProp as CarouselOverlayArrowButtonProps<Element>['direction'],
		isVisible: isVisibleProp as CarouselOverlayArrowButtonProps<Element>['isVisible']
	});

	const backgroundClassName = useGetColor({
		colorMode,
		colorType: 'default',
		hueType: 'background',
		classType: 'bg'
	});

	return (
		<Transition w='100%' h='100%' transition='fade' in={isVisible}>
			<Grid
				w='100%'
				h='100%'
				templateColumns={orientation === 'horizontal' ? 2 : 1}
				templateRows={orientation === 'horizontal' ? 1 : 2}
				alignItems='stretch'
				alignContent='stretch'
				justifyItems='stretch'
				justifyContent='stretch'
				spacing={0}
			>
				{direction === 'right' ? (
					<GridItem columnSpan={1} rowSpan={1}>
						{renderRightLinearGradient ? (
							renderRightLinearGradient()
						) : (
							<CarouselRightLinearGradient w='100%' h='100%' />
						)}
					</GridItem>
				) : null}

				<GridItem zIndex={1}>
					<Center
						className={classNames(backgroundClassName)}
						w='100%'
						h='100%'
						pl={orientation === 'horizontal' && direction === 'right' ? spacing : 0}
						pr={orientation === 'horizontal' && direction === 'left' ? spacing : 0}
						pt={orientation === 'vertical' && direction === 'right' ? spacing : 0}
						pb={orientation === 'vertical' && direction === 'left' ? spacing : 0}
					>
						<CarouselArrowButton
							{...(rest as CarouselArrowButtonProps<Element>)}
							as={as}
							ref={ref}
							className={classNames(KEYS_CAROUSEL_OVERLAY_ARROW_BUTTON_CLASS, {
								[className]: !!className
							})}
							direction={direction === 'left' ? 'left' : 'right'}
						/>
					</Center>
				</GridItem>

				{direction === 'left' ? (
					<GridItem columnSpan={1} rowSpan={1}>
						{renderLeftLinearGradient ? (
							renderLeftLinearGradient()
						) : (
							<CarouselLeftLinearGradient w='100%' h='100%' />
						)}
					</GridItem>
				) : null}
			</Grid>
		</Transition>
	);
});

// CarouselOverlayArrowButton.displayName = 'CarouselOverlayArrowButton';

export default CarouselOverlayArrowButton;
