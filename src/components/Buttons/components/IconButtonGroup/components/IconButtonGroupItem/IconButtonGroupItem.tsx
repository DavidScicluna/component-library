import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import type { BoxProps } from '@components/Box';
import { Box } from '@components/Box';

import { useIconButtonGroupItemClasses } from './common/hooks';
import { KEYS_ICON_BUTTON_GROUP_ITEM_CLASS } from './common/keys';
import type { IconButtonGroupItemProps, IconButtonGroupItemRef } from './common/types';

const IconButtonGroupItem = forwardRef(function IconButtonGroupItem<Element extends PolymorphicElementType>(
	props: IconButtonGroupItemProps<Element>,
	ref: IconButtonGroupItemRef<Element>
): JSX.Element {
	const { children, className = DEFAULT_CLASSNAME, index, total, ...rest } = props;

	const classes = useIconButtonGroupItemClasses<Element>({ index, total });

	return (
		<Box
			{...(rest as BoxProps<Element>)}
			ref={ref}
			className={classNames(KEYS_ICON_BUTTON_GROUP_ITEM_CLASS, { [className]: !!className })}
		>
			{children({ className: classes })}
		</Box>
	);
});

// IconButtonGroupItem.displayName = 'IconButtonGroupItem';

export default IconButtonGroupItem;
