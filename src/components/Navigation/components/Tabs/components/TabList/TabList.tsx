import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';
import { compact, isArray } from 'lodash-es';
import { useElementSize } from 'usehooks-ts';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';

import {
	Carousel,
	CarouselLeftLinearGradient,
	CarouselOverlayLeftArrowIconButton,
	CarouselOverlayRightArrowIconButton,
	CarouselRightLinearGradient
} from '@components/DataDisplay';
import { Grid, GridItem } from '@components/Layout';

import { useTabsContext } from '../../common/hooks';
import { getTabListID } from '../../common/utils';

import { __KEYS_TABS_TAB_LIST_CLASS__ } from './common/keys';
import type { TabListProps, TabListRef } from './common/types';

const TabList = forwardRef(function TabList<Element extends ElementType>(
	props: TabListProps<Element>,
	ref: TabListRef<Element>
): ReactElement {
	const { color, colorMode, align, id, isFitted, orientation } = useTabsContext();

	const [childrenRef, { width: childrenWidth, height: childrenHeight }] = useElementSize();

	const { children, className = __DEFAULT_CLASSNAME__, renderLeft, renderRight, ...rest } = props;

	return (
		<Grid<Element>
			{...rest}
			ref={ref}
			aria-orientation={orientation === 'top' || orientation === 'bottom' ? 'horizontal' : 'vertical'}
			id={getTabListID(id)}
			className={classNames(__KEYS_TABS_TAB_LIST_CLASS__, { [className]: !!className })}
			role='tablist'
			w='100%'
			h='100%'
			templateColumns={
				orientation === 'top' || orientation === 'bottom'
					? compact([renderLeft ? 'auto' : null, 'auto', renderRight ? 'auto' : null]).join(' ')
					: 1
			}
			templateRows={
				orientation === 'left' || orientation === 'right'
					? compact([renderLeft ? 'auto' : null, 'auto', renderRight ? 'auto' : null]).join(' ')
					: 1
			}
			alignItems='stretch'
			alignContent='stretch'
			justifyItems='stretch'
			justifyContent='stretch'
			spacing={0}
		>
			{renderLeft ? (
				<GridItem alignSelf='center' justifySelf='center'>
					{renderLeft({ color, colorMode, w: childrenWidth, h: childrenHeight })}
				</GridItem>
			) : null}

			{isArray(children) ? (
				<GridItem alignSelf='stretch' justifySelf={isFitted ? 'stretch' : align}>
					<Carousel
						ref={childrenRef}
						w='100%'
						h='100%'
						colorMode={colorMode}
						renderLeftAction={(_variant, props) => (
							<CarouselOverlayLeftArrowIconButton {...props} isCompact variant='icon' />
						)}
						renderLeftLinearGradient={() => <CarouselLeftLinearGradient />}
						renderRightAction={(_variant, props) => (
							<CarouselOverlayRightArrowIconButton {...props} isCompact variant='icon' />
						)}
						renderRightLinearGradient={() => <CarouselRightLinearGradient />}
						orientation={orientation === 'top' || orientation === 'bottom' ? 'horizontal' : 'vertical'}
						variant='overlay'
					>
						{children}
					</Carousel>
				</GridItem>
			) : null}

			{renderRight ? (
				<GridItem alignSelf='center' justifySelf='center'>
					{renderRight({ color, colorMode, w: childrenWidth, h: childrenHeight })}
				</GridItem>
			) : null}
		</Grid>
	);
});

TabList.displayName = 'TabList';

export default TabList;
