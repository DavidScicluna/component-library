import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import { Transition } from '@components/Animation';
import type { GridProps } from '@components/Layout';
import { Center, Grid, GridItem } from '@components/Layout';

import { GlassOverlay } from '../GlassOverlay';

import {
	__DEFAULT_STATE_OVERLAY_HAS_GLASS__,
	__DEFAULT_STATE_OVERLAY_IS_ALWAYS_VISIBLE__,
	__DEFAULT_STATE_OVERLAY_STATE__
} from './common/constants';
import { useStateOverlayResponsiveValues } from './common/hooks';
import { __KEYS_STATE_OVERLAY_CLASS__ } from './common/keys';
import type { StateOverlayProps, StateOverlayRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const StateOverlay = forwardRef(function StateOverlay<Element extends PolymorphicElementType>(
	props: StateOverlayProps<Element>,
	ref: StateOverlayRef<Element>
): JSX.Element {
	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		color,
		colorMode,
		blur,
		renderSuccess: renderSuccessProp,
		renderEmpty: renderEmptyProp,
		renderError: renderErrorProp,
		renderSpinner: renderSpinnerProp,
		hasGlass: hasGlassProp = __DEFAULT_STATE_OVERLAY_HAS_GLASS__,
		isAlwaysVisible: isAlwaysVisibleProp = __DEFAULT_STATE_OVERLAY_IS_ALWAYS_VISIBLE__,
		state: stateProp = __DEFAULT_STATE_OVERLAY_STATE__,
		...rest
	} = props;

	const {
		// children,
		renderSuccess,
		renderEmpty,
		renderError,
		renderSpinner,
		hasGlass,
		isAlwaysVisible,
		state
	} = useStateOverlayResponsiveValues<Element>({
		// children: childrenProp,
		renderSuccess: renderSuccessProp,
		renderEmpty: renderEmptyProp,
		renderError: renderErrorProp,
		renderSpinner: renderSpinnerProp,
		hasGlass: hasGlassProp,
		isAlwaysVisible: isAlwaysVisibleProp,
		state: stateProp
	});

	return (
		<Grid
			{...(rest as GridProps<Element>)}
			ref={ref}
			className={classNames(__KEYS_STATE_OVERLAY_CLASS__, { [className]: !!className })}
			templateColumns={1}
			templateRows={1}
			alignItems='stretch'
			alignContent='stretch'
			justifyItems='stretch'
			justifyContent='stretch'
			spacing={0}
		>
			{renderSuccess ? (
				<GridItem columnStart={1} rowStart={1} zIndex={1}>
					<Transition w='100%' h='100%' transition='fade' in={state === 'success'}>
						<Center w='100%' h='100%'>
							{renderSuccess(state)}
						</Center>
					</Transition>
				</GridItem>
			) : null}

			{renderEmpty ? (
				<GridItem columnStart={1} rowStart={1} zIndex={1}>
					<Transition w='100%' h='100%' transition='fade' in={state === 'empty'}>
						<Center w='100%' h='100%'>
							{renderEmpty(state)}
						</Center>
					</Transition>
				</GridItem>
			) : null}

			{renderError ? (
				<GridItem columnStart={1} rowStart={1} zIndex={1}>
					<Transition w='100%' h='100%' transition='fade' in={state === 'error'}>
						<Center w='100%' h='100%'>
							{renderError(state)}
						</Center>
					</Transition>
				</GridItem>
			) : null}

			{renderSpinner ? (
				<GridItem columnStart={1} rowStart={1} zIndex={1}>
					<Transition w='100%' h='100%' transition='fade' in={state === 'loading'}>
						<Center w='100%' h='100%'>
							{renderSpinner(state)}
						</Center>
					</Transition>
				</GridItem>
			) : null}

			<GridItem columnStart={1} rowStart={1}>
				<Transition w='100%' h='100%' transition='fade' in={isAlwaysVisible || state === 'default'}>
					<GlassOverlay
						color={color}
						colorMode={colorMode}
						w='100%'
						h='100%'
						blur={hasGlass && state !== 'default' ? blur : 'none'}
						hasBackground={hasGlass && state !== 'default'}
					>
						{children(state)}
					</GlassOverlay>
				</Transition>
			</GridItem>
		</Grid>
	);
});

// StateOverlay.displayName = 'StateOverlay';

export default StateOverlay;
