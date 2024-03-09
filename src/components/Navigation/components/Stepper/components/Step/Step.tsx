import { createContext, forwardRef, useMemo } from 'react';

import classNames from 'classnames';
import { compact } from 'lodash-es';
import { useDimensionsRef, useFocus } from 'rooks';

import { DEFAULT_CLASSNAME } from '@common/constants';
import { useBoolean } from '@common/hooks';
import type { PolymorphicDefaultElement, PolymorphicMouseEvent } from '@common/types';

import { Transition } from '@components/Animation';
import { Box } from '@components/Box';
import { useCarouselManager } from '@components/DataDisplay/components/Carousel/common/hooks';
import type { CenterRef } from '@components/Layout';
import { Center, Grid, GridItem } from '@components/Layout';
import { HoverOverlay } from '@components/Overlay';

import { DEFAULT_STEPPER_ID } from '../../common/constants';
import { useStepperContext } from '../../common/hooks';
import { getStepID, getStepPanelID } from '../../common/utils';

import {
	DEFAULT_STEP_AS,
	DEFAULT_STEP_BORDER_WIDTH,
	DEFAULT_STEP_INDEX,
	DEFAULT_STEP_IS_ACTIVE,
	DEFAULT_STEP_IS_COMPACT,
	DEFAULT_STEP_IS_DISABLED,
	DEFAULT_STEP_IS_UPPERCASE,
	DEFAULT_STEP_STATUS
} from './common/constants';
import { useStepClasses, useStepResponsiveValues, useStepSizeConfig } from './common/hooks';
import { KEYS_STEP_CLASS } from './common/keys';
import type {
	StepContext as StepContextType,
	StepDefaultElement,
	StepElement,
	StepProps,
	StepRef
} from './common/types';

export const StepContext = createContext<StepContextType<StepDefaultElement>>({
	id: getStepID(DEFAULT_STEPPER_ID, DEFAULT_STEP_INDEX),
	index: DEFAULT_STEP_INDEX,
	status: DEFAULT_STEP_STATUS
});

const Step = forwardRef(function Step<Element extends StepElement>(
	props: StepProps<Element>,
	ref: StepRef<Element>
): JSX.Element {
	const {
		color: DEFAULT_STEP_COLOR,
		colorMode: DEFAULT_STEP_COLORMODE,
		id: stepperId,
		index: panel,
		isDisabled: isStepperDisabled,
		isFitted,
		orientation,
		onChange,
		spacing: DEFAULT_STEP_SPACING
	} = useStepperContext();

	const [childrenRef, childrenDimensions] = useDimensionsRef();
	const { width: childrenWidth = 0, height: childrenHeight = 0 } = childrenDimensions || {};

	const {
		children,
		as = DEFAULT_STEP_AS,
		className = DEFAULT_CLASSNAME,
		renderLeft,
		renderRight,
		renderTop,
		renderBottom,
		color = DEFAULT_STEP_COLOR,
		colorMode = DEFAULT_STEP_COLORMODE,
		id: stepId,
		index = DEFAULT_STEP_INDEX,
		isActive: isActiveProp = DEFAULT_STEP_IS_ACTIVE,
		isCompact: isCompactProp = DEFAULT_STEP_IS_COMPACT,
		isDisabled: isDisabledProp = DEFAULT_STEP_IS_DISABLED,
		isUppercase: isUppercaseProp = DEFAULT_STEP_IS_UPPERCASE,
		onClick,
		status: statusProp = DEFAULT_STEP_STATUS,
		spacing = DEFAULT_STEP_SPACING,
		...rest
	} = props;

	const { getItemByIndex, scrollToItem } = useCarouselManager();

	const [isFocused, setIsFocused] = useBoolean();

	const {
		isActive,
		isCompact,
		isDisabled: isStepDisabled,
		isUppercase,
		status
	} = useStepResponsiveValues<Element>({
		isActive: isActiveProp,
		isCompact: isCompactProp,
		isDisabled: isDisabledProp,
		isUppercase: isUppercaseProp,
		status: statusProp
	});

	const id = useMemo<string>(() => stepId || getStepID(stepperId, index), [stepId, stepperId, index]);

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

	const handleClick = (event: PolymorphicMouseEvent): void => {
		if (index !== panel) {
			if (onChange && typeof onChange === 'function') {
				onChange(index);
			}

			handleScrollToStep(index);
		}

		if (onClick) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			onClick(event as any);
		}
	};

	return (
		<StepContext.Provider value={{ id, index, status }}>
			<HoverOverlay w={isFitted ? '100%' : 'auto'} h='100%'>
				{(isHovering: boolean) => (
					<Grid
						{...focusProps}
						{...rest}
						as={as}
						ref={ref}
						aria-controls={getStepPanelID(id, panel)}
						aria-disabled={isDisabled}
						aria-selected={isActive || isSelected}
						id={id}
						className={classNames(KEYS_STEP_CLASS, classes.step, { [className]: !!className })}
						role='tab'
						stepIndex={0}
						w='100%'
						h='100%'
						templateColumns={1}
						templateRows={[`${DEFAULT_STEP_BORDER_WIDTH}px`, '1fr', `${DEFAULT_STEP_BORDER_WIDTH}px`].join(
							' '
						)}
						alignItems={isFitted ? 'center' : 'stretch'}
						alignContent={isFitted ? 'center' : 'stretch'}
						justifyItems={isFitted ? 'center' : 'stretch'}
						justifyContent={isFitted ? 'center' : 'space-between'}
						onClick={handleClick}
						spacing={spacing}
					>
						<GridItem>
							<Transition
								w='100%'
								h='100%'
								transition='pop'
								in={
									orientation === 'top' ? (isActive || isSelected || isHovering) && !isDisabled : true
								}
								unmountOnExit={false}
							>
								<Box className={classNames(classes.topDivider)} w='100%' h='100%' />
							</Transition>
						</GridItem>

						<GridItem>
							<Grid
								className={classes.label}
								w='100%'
								h='100%'
								templateColumns={1}
								templateRows={compact([
									renderTop ? '1fr' : null,
									'1fr',
									renderBottom ? '1fr' : null
								]).join(' ')}
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
												<Center
													ref={childrenRef as CenterRef<PolymorphicDefaultElement>}
													as='span'
													w='100%'
													h='100%'
												>
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
							<Transition
								w='100%'
								h='100%'
								transition='pop'
								in={
									orientation === 'bottom'
										? (isActive || isSelected || isHovering) && !isDisabled
										: true
								}
								unmountOnExit={false}
							>
								<Box className={classNames(classes.bottomDivider)} w='100%' h='100%' />
							</Transition>
						</GridItem>
					</Grid>
				)}
			</HoverOverlay>
		</StepContext.Provider>
	);
});

// Step.displayName = 'Step';

export default Step;
