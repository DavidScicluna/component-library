import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__, __DEFAULT_SPACING__ } from '@common/constants';

import { Center } from '@components/Layout';

import { __KEYS_HORIZONTAL_SCROLL_ITEM_CLASS__ } from './common/keys';
import type { HorizontalScrollItemProps, HorizontalScrollItemRef } from './common/types';

const HorizontalScrollItem = forwardRef(function HorizontalScrollItem<Element extends ElementType>(
	props: HorizontalScrollItemProps<Element>,
	ref: HorizontalScrollItemRef<Element>
): ReactElement {
	const { children, className = __DEFAULT_CLASSNAME__, itemId, renderDivider, isLast = false, ...rest } = props;

	return (
		<Center<Element>
			{...rest}
			ref={ref}
			className={classNames(__KEYS_HORIZONTAL_SCROLL_ITEM_CLASS__, { [className]: !!className })}
			id={itemId}
			// itemID={itemId}
			w='100%'
			h='100%'
			spacing={0}
		>
			{children}
			{renderDivider && !isLast ? renderDivider(__DEFAULT_SPACING__) : null}
		</Center>
	);
});

export default HorizontalScrollItem;
