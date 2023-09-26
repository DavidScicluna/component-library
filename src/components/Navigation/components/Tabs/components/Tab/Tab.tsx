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
import { useGetHorizontalScrollAPIContext } from '@components/DataDisplay';
import { Center, Grid, GridItem } from '@components/Layout';
import { HoverOverlay } from '@components/Overlay/components/HoverOverlay';

import { useTabsContext } from '../../common/hooks';
import { getTabID, getTabPanelID } from '../../common/utils';

import {
	__DEFAULT_TAB_BORDER_WIDTH__,
	__DEFAULT_TAB_IS_ACTIVE__,
	__DEFAULT_TAB_IS_COMPACT__,
	__DEFAULT_TAB_IS_DISABLED__,
	__DEFAULT_TAB_IS_UPPERCASE__
} from './common/constants';
import { useTabClasses, useTabSizeConfig } from './common/hooks';
import { __KEYS_TAB_CLASS__ } from './common/keys';
import type { TabDefaultElement, TabElement, TabMouseEvent, TabProps, TabRef } from './common/types';

const Tab = forwardRef(function Tab<Element extends TabElement = TabDefaultElement>(
	props: TabProps<Element>,
	ref: TabRef<Element>
): ReactElement {
	const {
		color: __DEFAULT_TAB_COLOR__,
		colorMode: __DEFAULT_TAB_COLORMODE__,
		id,
		index: panel,
		isDisabled: isTabsDisabled,
		isFitted,
		onChange,
		spacing: __DEFAULT_TAB_SPACING__
	} = useTabsContext();
	const scroll = useGetHorizontalScrollAPIContext();

	const [childrenRef, { width: childrenWidth, height: childrenHeight }] = useElementSize();

	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		renderLeft,
		renderRight,
		renderTop,
		color = __DEFAULT_TAB_COLOR__,
		colorMode = __DEFAULT_TAB_COLORMODE__,
		index,
		isActive: active = __DEFAULT_TAB_IS_ACTIVE__,
		isCompact: c = __DEFAULT_TAB_IS_COMPACT__,
		isDisabled: disabled = __DEFAULT_TAB_IS_DISABLED__,
		isUppercase: uppercase = __DEFAULT_TAB_IS_UPPERCASE__,
		onClick,
		spacing = __DEFAULT_TAB_SPACING__,
		...rest
	} = props;

	const [isFocused, setIsFocused] = useBoolean();

	const isActive = useGetResponsiveValue<boolean>(active);
	const isCompact = useGetResponsiveValue<boolean>(c);
	const isTabDisabled = useGetResponsiveValue<boolean>(disabled);
	const isUppercase = useGetResponsiveValue<boolean>(uppercase);

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
		if (scroll) {
			const scrollElement = scroll.getItemByIndex(index);

			if (scrollElement) {
				scroll.scrollToItem?.(scrollElement, 'smooth', 'center', 'nearest');
			}
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
					aria-controls={getTabPanelID(id, panel)}
					aria-disabled={isDisabled}
					aria-selected={isActive || isSelected}
					id={getTabID(id, index)}
					className={classNames(__KEYS_TAB_CLASS__, classes.tab, { [className]: !!className })}
					role='tab'
					tabIndex={0}
					w='100%'
					h='100%'
					templateColumns={1}
					templateRows={[
						`${__DEFAULT_TAB_BORDER_WIDTH__}px`,
						'1fr',
						`${__DEFAULT_TAB_BORDER_WIDTH__}px`
					].join(' ')}
					alignItems={isFitted ? 'center' : 'stretch'}
					alignContent={isFitted ? 'center' : 'stretch'}
					justifyItems={isFitted ? 'center' : 'stretch'}
					justifyContent={isFitted ? 'center' : 'space-between'}
					onClick={handleClick}
					spacing={spacing}
					px={spacing}
				>
					<GridItem>
						<Box className={classNames(classes.topDivider)} w='100%' h='100%' />
					</GridItem>

					<GridItem>
						<Grid
							className={classes.label}
							w='100%'
							h='100%'
							templateColumns={compact([
								renderLeft ? 'auto' : null,
								'auto',
								renderRight ? 'auto' : null
							]).join(' ')}
							templateRows={compact([renderTop ? '1fr' : null, '1fr']).join(' ')}
							alignItems='stretch'
							alignContent='stretch'
							justifyItems='stretch'
							justifyContent='stretch'
							spacing={spacing}
							px={config.padding.x}
							py={config.padding.y}
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

					<GridItem>
						<Pop
							w='100%'
							h='100%'
							in={(isActive || isSelected || isHovering) && !isDisabled}
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

Tab.displayName = 'Tab';

export default Tab;
