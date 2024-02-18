import { forwardRef, useMemo } from 'react';

import classNames from 'classnames';
import { compact } from 'lodash-es';
import { useDimensionsRef } from 'rooks';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import type { PolymorphicDefaultElement, PolymorphicElementType } from '@common/types';

import { Transition } from '@components/Animation';
import { Box } from '@components/Box';
import type { CenterRef, GridProps } from '@components/Layout';
import { Center, Grid, GridItem } from '@components/Layout';

import { useDummyTabsContext } from '../../common/hooks';
import { getDummyTabID, getDummyTabPanelID } from '../../common/utils';
import { DummyTabSkeleton } from '../DummyTabSkeleton';

import {
	__DEFAULT_DUMMY_TAB_BORDER_WIDTH__,
	__DEFAULT_DUMMY_TAB_IS_COMPACT__,
	__DEFAULT_DUMMY_TAB_IS_UPPERCASE__
} from './common/constants';
import { useDummyTabClasses, useDummyTabResponsiveValues, useDummyTabSizeConfig } from './common/hooks';
import { __KEYS_DUMMY_TAB_CLASS__ } from './common/keys';
import type { DummyTabProps, DummyTabRef } from './common/types';

const DummyTab = forwardRef(function DummyTab<Element extends PolymorphicElementType>(
	props: DummyTabProps<Element>,
	ref: DummyTabRef<Element>
): JSX.Element {
	const {
		color: __DEFAULT_DUMMY_TAB_COLOR__,
		colorMode: __DEFAULT_DUMMY_TAB_COLORMODE__,
		id,
		index: panel,
		isFitted,
		orientation,
		spacing: __DEFAULT_DUMMY_TAB_SPACING__
	} = useDummyTabsContext();

	const [childrenRef, childrenDimensions] = useDimensionsRef();
	const { width: childrenWidth = 0, height: childrenHeight = 0 } = childrenDimensions || {};

	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		renderLeft,
		renderRight,
		renderTop,
		renderBottom,
		color = __DEFAULT_DUMMY_TAB_COLOR__,
		colorMode = __DEFAULT_DUMMY_TAB_COLORMODE__,
		index,
		isCompact: isCompactProp = __DEFAULT_DUMMY_TAB_IS_COMPACT__,
		isUppercase: isUppercaseProp = __DEFAULT_DUMMY_TAB_IS_UPPERCASE__,
		spacing = __DEFAULT_DUMMY_TAB_SPACING__,
		...rest
	} = props;

	const { isCompact, isUppercase } = useDummyTabResponsiveValues<Element>({
		isCompact: isCompactProp,
		isUppercase: isUppercaseProp
	});

	const isSelected = useMemo(() => index === panel, [index, panel]);

	const config = useDummyTabSizeConfig<Element>({ isCompact });

	const classes = useDummyTabClasses<Element>({ color, colorMode, isSelected, isCompact, isUppercase });

	return (
		<Grid
			{...(rest as GridProps<Element>)}
			ref={ref}
			aria-controls={getDummyTabPanelID(id, panel)}
			aria-disabled='true'
			aria-selected={isSelected}
			id={getDummyTabID(id, index)}
			className={classNames(__KEYS_DUMMY_TAB_CLASS__, classes.tab, { [className]: !!className })}
			role='tab'
			tabIndex={0}
			w={isFitted ? '100%' : 'auto'}
			h='100%'
			templateColumns={1}
			templateRows={[
				`${__DEFAULT_DUMMY_TAB_BORDER_WIDTH__}px`,
				'1fr',
				`${__DEFAULT_DUMMY_TAB_BORDER_WIDTH__}px`
			].join(' ')}
			alignItems={isFitted ? 'center' : 'stretch'}
			alignContent={isFitted ? 'center' : 'stretch'}
			justifyItems={isFitted ? 'center' : 'stretch'}
			justifyContent={isFitted ? 'center' : 'space-between'}
			spacing={spacing}
		>
			<GridItem>
				<Transition
					w='100%'
					h='100%'
					transition='pop'
					in={orientation === 'top' ? isSelected : true}
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
					templateRows={compact([renderTop ? '1fr' : null, '1fr', renderBottom ? '1fr' : null]).join(' ')}
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
										<DummyTabSkeleton color={color} colorMode={colorMode} radius='xs'>
											{children}
										</DummyTabSkeleton>
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
					in={orientation === 'bottom' ? isSelected : true}
					unmountOnExit={false}
				>
					<Box className={classNames(classes.bottomDivider)} w='100%' h='100%' />
				</Transition>
			</GridItem>
		</Grid>
	);
});

// DummyTab.displayName = 'DummyTab';

export default DummyTab;
