import type { ReactElement } from 'react';
import { createContext, forwardRef, useMemo } from 'react';

import { compact } from 'lodash-es';
import { useFocus } from 'rooks';
import { useElementSize } from 'usehooks-ts';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useBoolean } from '@common/hooks';
import type {
	PolymorphicComponentPropsWithRef,
	PolymorphicComponentWithRef,
	PolymorphicDefaultProps
} from '@common/types';

import { Transition } from '@components/Animation';
import { Box } from '@components/Box';
import { useCarouselManager } from '@components/DataDisplay/components/Carousel/common/hooks';
import type { CenterRef } from '@components/Layout';
import { Center, Grid, GridItem } from '@components/Layout';
import { HoverOverlay } from '@components/Overlay';

import { __DEFAULT_STEPPER_ID__ } from '../../common/constants';
import { useStepperContext } from '../../common/hooks';
import { getStepID, getStepPanelID } from '../../common/utils';

import {
	__DEFAULT_STEP_BORDER_WIDTH__,
	__DEFAULT_STEP_INDEX__,
	__DEFAULT_STEP_IS_ACTIVE__,
	__DEFAULT_STEP_IS_COMPACT__,
	__DEFAULT_STEP_IS_DISABLED__,
	__DEFAULT_STEP_IS_UPPERCASE__,
	__DEFAULT_STEP_STATUS__
} from './common/constants';
import { useStepClasses, useStepResponsiveValues, useStepSizeConfig } from './common/hooks';
import { __KEYS_STEP_CLASS__ } from './common/keys';
import type {
	StepContext as StepContextType,
	StepDefaultElement,
	StepElement,
	StepMouseEvent,
	StepProps,
	StepRef
} from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

export const StepContext = createContext<StepContextType>({
	id: getStepID(__DEFAULT_STEPPER_ID__, __DEFAULT_STEP_INDEX__),
	index: __DEFAULT_STEP_INDEX__,
	status: __DEFAULT_STEP_STATUS__
});

const Step: PolymorphicComponentWithRef = forwardRef(function Step<Element extends StepElement = StepDefaultElement>(
	props: StepProps<Element>,
	ref: StepRef<Element>
): ReactElement {
	const {
		color: __DEFAULT_STEP_COLOR__,
		colorMode: __DEFAULT_STEP_COLORMODE__,
		id: stepperId,
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
		id: stepId,
		index = __DEFAULT_STEP_INDEX__,
		isActive: isActiveProp = __DEFAULT_STEP_IS_ACTIVE__,
		isCompact: isCompactProp = __DEFAULT_STEP_IS_COMPACT__,
		isDisabled: isDisabledProp = __DEFAULT_STEP_IS_DISABLED__,
		isUppercase: isUppercaseProp = __DEFAULT_STEP_IS_UPPERCASE__,
		onClick,
		status: statusProp = __DEFAULT_STEP_STATUS__,
		spacing = __DEFAULT_STEP_SPACING__,
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
	} = useStepResponsiveValues({
		isActive: isActiveProp,
		isCompact: isCompactProp,
		isDisabled: isDisabledProp,
		isUppercase: isUppercaseProp,
		status: statusProp
	});

	const id = useMemo<string>(() => stepId || getStepID(stepperId, index), [stepId, stepperId, index]);

	const isDisabled = useMemo(() => isStepperDisabled || isStepDisabled, [isStepperDisabled, isStepDisabled]);
	const isSelected = useMemo(() => index === panel, [index, panel]);

	const config = useStepSizeConfig({ isCompact });

	const classes = useStepClasses({
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
		<StepContext.Provider value={{ id, index, status }}>
			<HoverOverlay w={isFitted ? '100%' : 'auto'} h='100%'>
				{(isHovering: boolean) => (
					<Grid<Element>
						{...focusProps}
						{...rest}
						ref={ref}
						aria-controls={getStepPanelID(id, panel)}
						aria-disabled={isDisabled}
						aria-selected={isActive || isSelected}
						id={id}
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
												<Center ref={childrenRef as CenterRef} as='span' w='100%' h='100%'>
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

Step.displayName = 'Step';

export default <Element extends StepElement = StepDefaultElement, Props = PolymorphicDefaultProps>(
	props: PolymorphicComponentPropsWithRef<Element, Props>
) => <Step<Element> {...props} />;
