import { forwardRef } from 'react';

import classNames from 'classnames';
import { compact, isArray } from 'lodash-es';
import { useDimensionsRef } from 'rooks';

import { DEFAULT_CLASSNAME } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import type { CarouselDefaultElement, CarouselRef } from '@components/DataDisplay';
import {
	Carousel,
	CarouselLeftLinearGradient,
	CarouselOverlayLeftArrowIconButton,
	CarouselOverlayRightArrowIconButton,
	CarouselRightLinearGradient
} from '@components/DataDisplay';
import { Grid, GridItem } from '@components/Layout';

import { useDummyTabsContext } from '../../common/hooks';
import { getDummyTabListID } from '../../common/utils';

import { KEYS_DUMMY_TABS_TAB_LIST_CLASS } from './common/keys';
import type { DummyTabListProps, DummyTabListRef } from './common/types';

const DummyTabList = forwardRef(function DummyTabList<Element extends PolymorphicElementType>(
	props: DummyTabListProps<Element>,
	ref: DummyTabListRef<Element>
): JSX.Element {
	const { color, colorMode, align, id, isFitted, orientation } = useDummyTabsContext();

	const [childrenRef, childrenDimensions] = useDimensionsRef();
	const { width: childrenWidth = 0, height: childrenHeight = 0 } = childrenDimensions || {};

	const { children, className = DEFAULT_CLASSNAME, renderLeft, renderRight, ...rest } = props;

	return (
		<Grid
			{...rest}
			ref={ref}
			aria-orientation={orientation === 'top' || orientation === 'bottom' ? 'horizontal' : 'vertical'}
			id={getDummyTabListID(id)}
			className={classNames(KEYS_DUMMY_TABS_TAB_LIST_CLASS, { [className]: !!className })}
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
						ref={childrenRef as CarouselRef<CarouselDefaultElement>}
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
						scrollAmount={1}
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

// DummyTabList.displayName = 'DummyTabList';

export default DummyTabList;
