import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import type { BoxProps } from '@components/Box';
import { Box } from '@components/Box';

import { useIconButtonGroupItemClasses } from './common/hooks';
import { __KEYS_ICON_BUTTON_GROUP_ITEM_CLASS__ } from './common/keys';
import type { IconButtonGroupItemProps, IconButtonGroupItemRef } from './common/types';

const IconButtonGroupItem = forwardRef(function IconButtonGroupItem<Element extends PolymorphicElementType>(
	props: IconButtonGroupItemProps<Element>,
	ref: IconButtonGroupItemRef<Element>
): JSX.Element {
	const { children, className = __DEFAULT_CLASSNAME__, index, total, ...rest } = props;

	const classes = useIconButtonGroupItemClasses<Element>({ index, total });

	return (
		<Box
			{...(rest as BoxProps<Element>)}
			ref={ref}
			className={classNames(__KEYS_ICON_BUTTON_GROUP_ITEM_CLASS__, { [className]: !!className })}
		>
			{children({ className: classes })}
		</Box>
	);
});

// IconButtonGroupItem.displayName = 'IconButtonGroupItem';

export default IconButtonGroupItem;
