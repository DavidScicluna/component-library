import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASS_PREFIX__, __DEFAULT_CLASSNAME__ } from '@common/constants';

import { Fade } from '@components/Animation';
import { Center, Grid, GridItem } from '@components/Layout';

import { Glass } from '../Glass';

import {
	__DEFAULT_STATE_OVERLAY_HAS_GLASS__,
	__DEFAULT_STATE_OVERLAY_IS_ALWAYS_VISIBLE__,
	__DEFAULT_STATE_OVERLAY_STATE__
} from './common/constants';
import type { StateOverlayProps, StateOverlayRef } from './common/types';

const StateOverlay = forwardRef(function StateOverlay<Element extends ElementType>(
	props: StateOverlayProps<Element>,
	ref: StateOverlayRef<Element>
): ReactElement {
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
			className={classNames(`${__DEFAULT_CLASS_PREFIX__}-state-overlay`, { [className]: !!className })}
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
					<Fade w='100%' h='100%' in={state === 'success'}>
						<Center w='100%' h='100%'>
							{renderSuccess(state)}
						</Center>
					</Fade>
				</GridItem>
			) : null}

			{renderEmpty ? (
				<GridItem columnStart={1} rowStart={1} zIndex={1}>
					<Fade w='100%' h='100%' in={state === 'empty'}>
						<Center w='100%' h='100%'>
							{renderEmpty(state)}
						</Center>
					</Fade>
				</GridItem>
			) : null}

			{renderError ? (
				<GridItem columnStart={1} rowStart={1} zIndex={1}>
					<Fade w='100%' h='100%' in={state === 'error'}>
						<Center w='100%' h='100%'>
							{renderError(state)}
						</Center>
					</Fade>
				</GridItem>
			) : null}

			{renderSpinner ? (
				<GridItem columnStart={1} rowStart={1} zIndex={1}>
					<Fade w='100%' h='100%' in={state === 'loading'}>
						<Center w='100%' h='100%'>
							{renderSpinner(state)}
						</Center>
					</Fade>
				</GridItem>
			) : null}

			<GridItem columnStart={1} rowStart={1}>
				<Fade w='100%' h='100%' in={isAlwaysVisible || state === 'default'}>
					<Glass
						color={color}
						colorMode={colorMode}
						w='100%'
						h='100%'
						blur={hasGlass && state !== 'default' ? blur : 'none'}
						hasBackground={hasGlass && state !== 'default'}
					>
						{children(state)}
					</Glass>
				</Fade>
			</GridItem>
		</Grid>
	);
});

export default StateOverlay;