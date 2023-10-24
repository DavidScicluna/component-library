import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useGetColor, useGetResponsiveValue } from '@common/hooks';

import { Fade } from '@components/Animation';
import {
	CarouselArrowIconButton,
	CarouselLeftLinearGradient,
	CarouselRightLinearGradient
} from '@components/DataDisplay';
import { useCarouselContext } from '@components/DataDisplay/components/Carousel/common/hooks';
import { Center, Grid, GridItem } from '@components/Layout';

import { __DEFAULT_CAROUSEL_OVERLAY_ARROW_ICON_BUTTON_IS_VISIBLE__ } from './common/constants';
import { __KEYS_CAROUSEL_OVERLAY_ARROW_ICON_BUTTON_CLASS__ } from './common/keys';
import type {
	CarouselOverlayArrowIconButtonDefaultElement,
	CarouselOverlayArrowIconButtonElement,
	CarouselOverlayArrowIconButtonProps,
	CarouselOverlayArrowIconButtonRef
} from './common/types';

const CarouselOverlayArrowIconButton = forwardRef(function CarouselOverlayArrowIconButton<
	Element extends CarouselOverlayArrowIconButtonElement = CarouselOverlayArrowIconButtonDefaultElement
>(props: CarouselOverlayArrowIconButtonProps<Element>, ref: CarouselOverlayArrowIconButtonRef<Element>): ReactElement {
	const { colorMode, spacing, orientation } = useCarouselContext();

	const {
		className = __DEFAULT_CLASSNAME__,
		renderLeftLinearGradient,
		renderRightLinearGradient,
		direction,
		isVisible: v = __DEFAULT_CAROUSEL_OVERLAY_ARROW_ICON_BUTTON_IS_VISIBLE__,
		...rest
	} = props;

	const isVisible = useGetResponsiveValue<boolean>(v);

	const backgroundClassName = useGetColor({
		colorMode,
		colorType: 'default',
		hueType: 'background',
		classType: 'bg'
	});

	return (
		<Fade w='100%' h='100%' in={isVisible}>
			<Grid
				className={classNames(__KEYS_CAROUSEL_OVERLAY_ARROW_ICON_BUTTON_CLASS__, {
					[className]: !!className
				})}
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
						<CarouselArrowIconButton<Element> {...rest} ref={ref} direction={direction} />
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
		</Fade>
	);
});

CarouselOverlayArrowIconButton.displayName = 'CarouselOverlayArrowIconButton';

export default CarouselOverlayArrowIconButton;
