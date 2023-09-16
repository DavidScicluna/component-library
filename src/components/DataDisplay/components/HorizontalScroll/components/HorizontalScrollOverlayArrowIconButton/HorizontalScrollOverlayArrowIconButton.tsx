import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useGetColor } from '@common/hooks';

import { Fade } from '@components/Animation';
import { Center, Grid, GridItem } from '@components/Layout';

import {
	HorizontalScrollLeftLinearGradient,
	HorizontalScrollRightLinearGradient,
	useHorizontalScrollContext
} from '../..';
import { HorizontalScrollArrowIconButton } from '../HorizontalScrollArrowIconButton';

import { __KEYS_HORIZONTAL_SCROLL_OVERLAY_ARROW_ICON_BUTTON_CLASS__ } from './common/keys';
import type {
	HorizontalScrollOverlayArrowIconButtonDefaultElement,
	HorizontalScrollOverlayArrowIconButtonElement,
	HorizontalScrollOverlayArrowIconButtonProps,
	HorizontalScrollOverlayArrowIconButtonRef
} from './common/types';

const HorizontalScrollOverlayArrowIconButton = forwardRef(function HorizontalScrollOverlayArrowIconButton<
	Element extends HorizontalScrollOverlayArrowIconButtonElement = HorizontalScrollOverlayArrowIconButtonDefaultElement
>(
	props: HorizontalScrollOverlayArrowIconButtonProps<Element>,
	ref: HorizontalScrollOverlayArrowIconButtonRef<Element>
): ReactElement {
	const { colorMode, spacing } = useHorizontalScrollContext();

	const { className = __DEFAULT_CLASSNAME__, direction, isVisible = false, ...rest } = props;

	const backgroundClassName = useGetColor({
		colorMode,
		colorType: 'default',
		hueType: 'background',
		classType: 'bg'
	});

	return (
		<Fade w='100%' h='100%' in={isVisible} unmountOnExit={false}>
			<Grid
				className={classNames(__KEYS_HORIZONTAL_SCROLL_OVERLAY_ARROW_ICON_BUTTON_CLASS__, {
					[className]: !!className
				})}
				w='100%'
				h='100%'
				templateColumns={3}
				templateRows={1}
				alignItems='stretch'
				alignContent='stretch'
				justifyItems='stretch'
				justifyContent='stretch'
				spacing={0}
			>
				{direction === 'right' ? (
					<GridItem columnSpan={2}>
						<HorizontalScrollRightLinearGradient w='100%' h='100%' />
					</GridItem>
				) : null}

				<GridItem zIndex={1}>
					<Center
						className={classNames(backgroundClassName)}
						w='100%'
						h='100%'
						pl={direction === 'right' ? spacing : 0}
						pr={direction === 'left' ? spacing : 0}
					>
						<HorizontalScrollArrowIconButton<Element> {...rest} ref={ref} direction={direction} />
					</Center>
				</GridItem>

				{direction === 'left' ? (
					<GridItem columnSpan={2}>
						<HorizontalScrollLeftLinearGradient w='100%' h='100%' />
					</GridItem>
				) : null}
			</Grid>
		</Fade>
	);
});

export default HorizontalScrollOverlayArrowIconButton;
