import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import { compact, isArray } from 'lodash-es';
import { useElementSize } from 'usehooks-ts';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import type {
	PolymorphicComponentPropsWithRef,
	PolymorphicComponentWithRef,
	PolymorphicDefaultElement,
	PolymorphicDefaultProps,
	PolymorphicElementType
} from '@common/types';

import type { CarouselRef, CarouselRenderActionProps, CarouselVariant } from '@components/DataDisplay';
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

import { __KEYS_DUMMY_TABS_TAB_LIST_CLASS__ } from './common/keys';
import type { DummyTabListProps, DummyTabListRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const DummyTabList: PolymorphicComponentWithRef = forwardRef(function DummyTabList<
	Element extends PolymorphicElementType = PolymorphicDefaultElement
>(props: DummyTabListProps<Element>, ref: DummyTabListRef<Element>): ReactElement {
	const { color, colorMode, align, id, isFitted, orientation } = useDummyTabsContext();

	const [childrenRef, { width: childrenWidth, height: childrenHeight }] = useElementSize();

	const { children, className = __DEFAULT_CLASSNAME__, renderLeft, renderRight, ...rest } = props;

	return (
		<Grid<Element>
			{...rest}
			ref={ref}
			aria-orientation={orientation === 'top' || orientation === 'bottom' ? 'horizontal' : 'vertical'}
			id={getDummyTabListID(id)}
			className={classNames(__KEYS_DUMMY_TABS_TAB_LIST_CLASS__, { [className]: !!className })}
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
						ref={childrenRef as CarouselRef}
						w='100%'
						h='100%'
						colorMode={colorMode}
						renderLeftAction={(_variant: CarouselVariant, props: CarouselRenderActionProps) => (
							<CarouselOverlayLeftArrowIconButton {...props} isCompact variant='icon' />
						)}
						renderLeftLinearGradient={() => <CarouselLeftLinearGradient />}
						renderRightAction={(_variant: CarouselVariant, props: CarouselRenderActionProps) => (
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

DummyTabList.displayName = 'DummyTabList';

export default <Element extends PolymorphicElementType = PolymorphicDefaultElement, Props = PolymorphicDefaultProps>(
	props: PolymorphicComponentPropsWithRef<Element, Props>
) => <DummyTabList<Element> {...props} />;
