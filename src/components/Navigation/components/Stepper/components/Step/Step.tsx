import type { ReactElement } from 'react';
import { forwardRef, useMemo } from 'react';

import classNames from 'classnames';
import { compact } from 'lodash-es';
import { useFocus } from 'rooks';
import { useElementSize } from 'usehooks-ts';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useBoolean, useGetResponsiveValue } from '@common/hooks';

import { Pop } from '@components/Animation';
import { Box } from '@components/Box';
import { useCarouselManager } from '@components/DataDisplay/components/Carousel/common/hooks';
import { Center, Grid, GridItem } from '@components/Layout';
import { HoverOverlay } from '@components/Overlay';

import { useStepperContext } from '../../common/hooks';
import { getStepID, getStepPanelID } from '../../common/utils';

import {
	__DEFAULT_STEP_BORDER_WIDTH__,
	__DEFAULT_STEP_IS_ACTIVE__,
	__DEFAULT_STEP_IS_COMPACT__,
	__DEFAULT_STEP_IS_DISABLED__,
	__DEFAULT_STEP_IS_UPPERCASE__
} from './common/constants';
import { useStepClasses, useStepSizeConfig } from './common/hooks';
import { __KEYS_STEP_CLASS__ } from './common/keys';
import type { StepDefaultElement, StepElement, StepMouseEvent, StepProps, StepRef } from './common/types';

const Step = forwardRef(function Step<Element extends StepElement = StepDefaultElement>(
	props: StepProps<Element>,
	ref: StepRef<Element>
): ReactElement {
	const {
		color: __DEFAULT_STEP_COLOR__,
		colorMode: __DEFAULT_STEP_COLORMODE__,
		id,
		index: panel,
		isDisabled: isStepperDisabled,
		isFitted,
		orientation,
		onChange,
		spacing: __DEFAULT_STEP_SPACING__
	} = useStepperContext();

	const [childrenRef, { width: childrenWidth, height: childrenHeight }] = useElementSize();

	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		renderLeft,
		renderRight,
		renderTop,
		renderBottom,
		color = __DEFAULT_STEP_COLOR__,
		colorMode = __DEFAULT_STEP_COLORMODE__,
		isActive: active = __DEFAULT_STEP_IS_ACTIVE__,
		isCompact: c = __DEFAULT_STEP_IS_COMPACT__,
		isDisabled: disabled = __DEFAULT_STEP_IS_DISABLED__,
		isUppercase: uppercase = __DEFAULT_STEP_IS_UPPERCASE__,
		onClick,
		spacing = __DEFAULT_STEP_SPACING__,
		...rest
	} = props;

	const { getItemByIndex, scrollToItem } = useCarouselManager();

	const [isFocused, setIsFocused] = useBoolean();

	const isActive = useGetResponsiveValue<boolean>(active);
	const isCompact = useGetResponsiveValue<boolean>(c);
	const isStepDisabled = useGetResponsiveValue<boolean>(disabled);
	const isUppercase = useGetResponsiveValue<boolean>(uppercase);

	const isDisabled = useMemo(() => isStepperDisabled || isStepDisabled, [isStepperDisabled, isStepDisabled]);
	const isSelected = useMemo(() => index === panel, [index, panel]);

	const config = useStepSizeConfig<Element>({ isCompact });

	const classes = useStepClasses<Element>({
		color,
		colorMode,
		isActive: isActive || isSelected,
		isCompact,
		isDisabled,
		isFocused,
		isUppercase
	});

	const { focusProps } = useFocus({ onFocus: () => setIsFocused.on(), onBlur: () => setIsFocused.off() });

	const handleScrollToStep = (index: number): void => {
		const item = getItemByIndex(index);
		if (item) {
			scrollToItem(item, 'center', 'center');
		}
	};

	const handleClick = (event: StepMouseEvent<Element>): void => {
		if (index !== panel) {
			if (onChange && typeof onChange === 'function') {
				onChange(index);
			}

			handleScrollToStep(index);
		}

		if (onClick) {
			onClick(event);
		}
	};

	return (
		<HoverOverlay w={isFitted ? '100%' : 'auto'} h='100%'>
			{(isHovering) => (
				<Grid<Element>
					{...focusProps}
					{...rest}
					ref={ref}
					aria-controls={getStepPanelID(id, panel)}
					aria-disabled={isDisabled}
					aria-selected={isActive || isSelected}
					id={getStepID(id, index)}
					className={classNames(__KEYS_STEP_CLASS__, classes.step, { [className]: !!className })}
					role='tab'
					stepIndex={0}
					w='100%'
					h='100%'
					templateColumns={1}
					templateRows={[
						`${__DEFAULT_STEP_BORDER_WIDTH__}px`,
						'1fr',
						`${__DEFAULT_STEP_BORDER_WIDTH__}px`
					].join(' ')}
					alignItems={isFitted ? 'center' : 'stretch'}
					alignContent={isFitted ? 'center' : 'stretch'}
					justifyItems={isFitted ? 'center' : 'stretch'}
					justifyContent={isFitted ? 'center' : 'space-between'}
					onClick={handleClick}
					spacing={spacing}
				>
					<GridItem>
						<Pop
							w='100%'
							h='100%'
							in={orientation === 'top' ? (isActive || isSelected || isHovering) && !isDisabled : true}
							unmountOnExit={false}
							initialScale={0.75}
						>
							<Box className={classNames(classes.topDivider)} w='100%' h='100%' />
						</Pop>
					</GridItem>

					<GridItem>
						<Grid
							className={classes.label}
							w='100%'
							h='100%'
							templateColumns={1}
							templateRows={compact([renderTop ? '1fr' : null, '1fr', renderBottom ? '1fr' : null]).join(
								' '
							)}
							alignItems='stretch'
							alignContent='stretch'
							justifyItems='stretch'
							justifyContent='stretch'
							spacing={spacing}
							px={config.padding.x}
							py={config.padding.y}
						>
							{renderTop ? (
								<GridItem alignSelf='center' justifySelf='center'>
									{renderTop({ color, colorMode, w: childrenWidth, h: childrenHeight })}
								</GridItem>
							) : null}

							<GridItem>
								<Grid
									w='100%'
									h='100%'
									templateColumns={compact([
										renderLeft ? 'auto' : null,
										'auto',
										renderRight ? 'auto' : null
									]).join(' ')}
									templateRows={1}
									alignItems='stretch'
									alignContent='stretch'
									justifyItems='stretch'
									justifyContent='stretch'
									spacing={spacing}
								>
									{renderLeft ? (
										<GridItem alignSelf='center' justifySelf='center'>
											{renderLeft({ color, colorMode, w: childrenWidth, h: childrenHeight })}
										</GridItem>
									) : null}

									{children ? (
										<GridItem>
											<Center ref={childrenRef} as='span' w='100%' h='100%'>
												{children}
											</Center>
										</GridItem>
									) : null}

									{renderRight ? (
										<GridItem alignSelf='center' justifySelf='center'>
											{renderRight({ color, colorMode, w: childrenWidth, h: childrenHeight })}
										</GridItem>
									) : null}
								</Grid>
							</GridItem>

							{renderBottom ? (
								<GridItem alignSelf='center' justifySelf='center'>
									{renderBottom({ color, colorMode, w: childrenWidth, h: childrenHeight })}
								</GridItem>
							) : null}
						</Grid>
					</GridItem>

					<GridItem>
						<Pop
							w='100%'
							h='100%'
							in={orientation === 'bottom' ? (isActive || isSelected || isHovering) && !isDisabled : true}
							unmountOnExit={false}
							initialScale={0.75}
						>
							<Box className={classNames(classes.bottomDivider)} w='100%' h='100%' />
						</Pop>
					</GridItem>
				</Grid>
			)}
		</HoverOverlay>
	);
});

Step.displayName = 'Step';

export default Step;
