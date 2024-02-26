import { forwardRef, useMemo } from 'react';

import classNames from 'classnames';
import { compact } from 'lodash-es';
import { useDimensionsRef, useFocus } from 'rooks';

import { DEFAULT_CLASSNAME } from '@common/constants';
import { useBoolean } from '@common/hooks';
import type { PolymorphicDefaultElement } from '@common/types';

import { Transition } from '@components/Animation';
import { Box } from '@components/Box';
import { useCarouselManager } from '@components/DataDisplay/components/Carousel/common/hooks';
import type { CenterRef, GridProps } from '@components/Layout';
import { Center, Grid, GridItem } from '@components/Layout';
import { HoverOverlay } from '@components/Overlay';

import { useTabsContext } from '../../common/hooks';
import { getTabID, getTabPanelID } from '../../common/utils';

import {
	DEFAULT_TAB_AS,
	DEFAULT_TAB_BORDER_WIDTH,
	DEFAULT_TAB_IS_ACTIVE,
	DEFAULT_TAB_IS_COMPACT,
	DEFAULT_TAB_IS_DISABLED,
	DEFAULT_TAB_IS_UPPERCASE
} from './common/constants';
import { useTabClasses, useTabResponsiveValues, useTabSizeConfig } from './common/hooks';
import { KEYS_TAB_CLASS } from './common/keys';
import type { TabElement, TabMouseEvent, TabProps, TabRef } from './common/types';

const Tab = forwardRef(function Tab<Element extends TabElement>(
	props: TabProps<Element>,
	ref: TabRef<Element>
): JSX.Element {
	const {
		color: DEFAULT_TAB_COLOR,
		colorMode: DEFAULT_TAB_COLORMODE,
		id,
		index: panel,
		isDisabled: isTabsDisabled,
		isFitted,
		orientation,
		onChange,
		spacing: DEFAULT_TAB_SPACING
	} = useTabsContext();

	const [childrenRef, childrenDimensions] = useDimensionsRef();
	const { width: childrenWidth = 0, height: childrenHeight = 0 } = childrenDimensions || {};

	const {
		children,
		as = DEFAULT_TAB_AS,
		className = DEFAULT_CLASSNAME,
		renderLeft,
		renderRight,
		renderTop,
		renderBottom,
		color = DEFAULT_TAB_COLOR,
		colorMode = DEFAULT_TAB_COLORMODE,
		index,
		isActive: isActiveProp = DEFAULT_TAB_IS_ACTIVE,
		isCompact: isCompactProp = DEFAULT_TAB_IS_COMPACT,
		isDisabled: isDisabledProp = DEFAULT_TAB_IS_DISABLED,
		isUppercase: isUppercaseProp = DEFAULT_TAB_IS_UPPERCASE,
		onClick,
		spacing = DEFAULT_TAB_SPACING,
		...rest
	} = props;

	const { getItemByIndex, scrollToItem } = useCarouselManager();

	const [isFocused, setIsFocused] = useBoolean();

	const {
		isActive,
		isCompact,
		isDisabled: isTabDisabled,
		isUppercase
	} = useTabResponsiveValues<Element>({
		isActive: isActiveProp,
		isCompact: isCompactProp,
		isDisabled: isDisabledProp,
		isUppercase: isUppercaseProp
	});

	const isDisabled = useMemo(() => isTabsDisabled || isTabDisabled, [isTabsDisabled, isTabDisabled]);
	const isSelected = useMemo(() => index === panel, [index, panel]);

	const config = useTabSizeConfig<Element>({ isCompact });

	const classes = useTabClasses<Element>({
		color,
		colorMode,
		isActive: isActive || isSelected,
		isCompact,
		isDisabled,
		isFocused,
		isUppercase
	});

	const { focusProps } = useFocus({ onFocus: () => setIsFocused.on(), onBlur: () => setIsFocused.off() });

	const handleScrollToTab = (index: number): void => {
		const item = getItemByIndex(index);
		if (item) {
			scrollToItem(item, 'center', 'center');
		}
	};

	const handleClick = (event: TabMouseEvent<Element>): void => {
		if (index !== panel) {
			if (onChange && typeof onChange === 'function') {
				onChange(index);
			}

			handleScrollToTab(index);
		}

		if (onClick) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			onClick(event as any);
		}
	};

	return (
		<HoverOverlay w={isFitted ? '100%' : 'auto'} h='100%'>
			{(isHovering: boolean) => (
				<Grid
					{...focusProps}
					{...(rest as GridProps<Element>)}
					as={as}
					ref={ref}
					aria-controls={getTabPanelID(id, panel)}
					aria-disabled={isDisabled}
					aria-selected={isActive || isSelected}
					id={getTabID(id, index)}
					className={classNames(KEYS_TAB_CLASS, classes.tab, { [className]: !!className })}
					role='tab'
					tabIndex={0}
					w='100%'
					h='100%'
					templateColumns={1}
					templateRows={[`${DEFAULT_TAB_BORDER_WIDTH}px`, '1fr', `${DEFAULT_TAB_BORDER_WIDTH}px`].join(' ')}
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
							in={orientation === 'top' ? (isActive || isSelected || isHovering) && !isDisabled : true}
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
							in={orientation === 'bottom' ? (isActive || isSelected || isHovering) && !isDisabled : true}
							unmountOnExit={false}
						>
							<Box className={classNames(classes.bottomDivider)} w='100%' h='100%' />
						</Transition>
					</GridItem>
				</Grid>
			)}
		</HoverOverlay>
	);
});

// Tab.displayName = 'Tab';

export default Tab;
