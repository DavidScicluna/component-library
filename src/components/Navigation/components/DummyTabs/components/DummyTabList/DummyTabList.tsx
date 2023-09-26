import type { ElementType, ReactElement } from 'react';
import { createContext, forwardRef } from 'react';

import classNames from 'classnames';
import { compact, isArray } from 'lodash-es';
import { useElementSize } from 'usehooks-ts';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';

import {
	HorizontalScroll,
	HorizontalScrollOverlayLeftArrowIconButton,
	HorizontalScrollOverlayRightArrowIconButton
} from '@components/DataDisplay';
import { Grid, GridItem } from '@components/Layout';

import { useDummyTabsContext } from '../../common/hooks';
import { getDummyTabListID } from '../../common/utils';

import { __KEYS_DUMMY_TABS_TAB_LIST_CLASS__ } from './common/keys';
import type {
	DummyTabListContext as DummyTabListContextType,
	DummyTabListProps,
	DummyTabListRef
} from './common/types';

export const DummyTabListContext = createContext<DummyTabListContextType>({});

const DummyTabList = forwardRef(function DummyTabList<Element extends ElementType>(
	props: DummyTabListProps<Element>,
	ref: DummyTabListRef<Element>
): ReactElement {
	const { color, colorMode, align, id, isFitted, orientation } = useDummyTabsContext();

	const [childrenRef, { width: childrenWidth, height: childrenHeight }] = useElementSize();

	const { children, className = __DEFAULT_CLASSNAME__, renderLeft, renderRight, ...rest } = props;

	return (
		<Grid<Element>
			{...rest}
			ref={ref}
			aria-orientation={orientation}
			id={getDummyTabListID(id)}
			className={classNames(__KEYS_DUMMY_TABS_TAB_LIST_CLASS__, { [className]: !!className })}
			role='tablist'
			w='100%'
			h='100%'
			templateColumns={compact([renderLeft ? 'auto' : null, 'auto', renderRight ? 'auto' : null]).join(' ')}
			templateRows={1}
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
					<HorizontalScroll
						ref={childrenRef}
						w='100%'
						h='100%'
						colorMode={colorMode}
						LeftArrow={<HorizontalScrollOverlayLeftArrowIconButton scrollAmount='single' />}
						RightArrow={<HorizontalScrollOverlayRightArrowIconButton scrollAmount='single' />}
					>
						{children}
					</HorizontalScroll>
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

export default DummyTabList;
