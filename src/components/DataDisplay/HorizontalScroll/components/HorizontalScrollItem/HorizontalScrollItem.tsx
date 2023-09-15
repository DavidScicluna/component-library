import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__, __DEFAULT_SPACING__ } from '@common/constants';
import { useTheme } from '@common/hooks';

import { HStack } from '@components/Layout';

import { __KEYS_HORIZONTAL_SCROLL_ITEM_CLASS__ } from './common/keys';
import type { HorizontalScrollItemProps, HorizontalScrollItemRef } from './common/types';

const HorizontalScrollItem = forwardRef(function HorizontalScrollItem<Element extends ElementType>(
	props: HorizontalScrollItemProps<Element>,
	ref: HorizontalScrollItemRef<Element>
): ReactElement {
	const theme = useTheme();

	const { children, className = __DEFAULT_CLASSNAME__, renderDivider, isLast = false, ...rest } = props;

	return (
		<HStack<Element>
			{...rest}
			ref={ref}
			className={classNames(__KEYS_HORIZONTAL_SCROLL_ITEM_CLASS__, { [className]: !!className })}
			w='100%'
			h='100%'
			alignItems='center'
			justifyContent='center'
			spacing={0}
		>
			{children}

			{renderDivider && !isLast ? renderDivider({ padding: theme.spacing[__DEFAULT_SPACING__] }) : null}
		</HStack>
	);
});

export default HorizontalScrollItem;
