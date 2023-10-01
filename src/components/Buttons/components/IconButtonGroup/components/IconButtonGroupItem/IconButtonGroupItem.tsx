import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';

import { Box } from '@components/Box';

import { useIconButtonGroupItemClasses } from './common/hooks';
import { __KEYS_ICON_BUTTON_GROUP_ITEM_CLASS__ } from './common/keys';
import type { IconButtonGroupItemProps, IconButtonGroupItemRef } from './common/types';

const IconButtonGroupItem = forwardRef(function IconButtonGroupItem<Element extends ElementType>(
	props: IconButtonGroupItemProps<Element>,
	ref: IconButtonGroupItemRef<Element>
): ReactElement {
	const { children, className = __DEFAULT_CLASSNAME__, index, total, ...rest } = props;

	const classes = useIconButtonGroupItemClasses<Element>({ index, total });

	return (
		<Box<Element>
			{...rest}
			ref={ref}
			className={classNames(__KEYS_ICON_BUTTON_GROUP_ITEM_CLASS__, { [className]: !!className })}
		>
			{children({ className: classes })}
		</Box>
	);
});

IconButtonGroupItem.displayName = 'IconButtonGroupItem';

export default IconButtonGroupItem;
