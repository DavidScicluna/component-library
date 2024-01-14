import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import type {
	PolymorphicComponentPropsWithRef,
	PolymorphicComponentWithRef,
	PolymorphicDefaultElement,
	PolymorphicDefaultProps,
	PolymorphicElementType
} from '@common/types';

import { Transition } from '@components/Animation';
import { Center, Grid, GridItem } from '@components/Layout';

import { GlassOverlay } from '../GlassOverlay';

import {
	__DEFAULT_STATE_OVERLAY_HAS_GLASS__,
	__DEFAULT_STATE_OVERLAY_IS_ALWAYS_VISIBLE__,
	__DEFAULT_STATE_OVERLAY_STATE__
} from './common/constants';
import { __KEYS_STATE_OVERLAY_CLASS__ } from './common/keys';
import type { StateOverlayProps, StateOverlayRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const StateOverlay: PolymorphicComponentWithRef = forwardRef(function StateOverlay<
	Element extends PolymorphicElementType = PolymorphicDefaultElement
>(props: StateOverlayProps<Element>, ref: StateOverlayRef<Element>): ReactElement {
	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		color,
		colorMode,
		blur,
		renderSuccess,
		renderEmpty,
		renderError,
		renderSpinner,
		hasGlass = __DEFAULT_STATE_OVERLAY_HAS_GLASS__,
		isAlwaysVisible = __DEFAULT_STATE_OVERLAY_IS_ALWAYS_VISIBLE__,
		state = __DEFAULT_STATE_OVERLAY_STATE__,
		...rest
	} = props;

	return (
		<Grid<Element>
			{...rest}
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

StateOverlay.displayName = 'StateOverlay';

export default <Element extends PolymorphicElementType = PolymorphicDefaultElement, Props = PolymorphicDefaultProps>(
	props: PolymorphicComponentPropsWithRef<Element, Props>
) => <StateOverlay<Element> {...props} />;
