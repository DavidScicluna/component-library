import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import type {
	PolymorphicComponentPropsWithRef,
	PolymorphicComponentWithRef,
	PolymorphicDefaultElement,
	PolymorphicDefaultProps
} from '@common/types';

import { Box } from '@components/Box';

import { useIconButtonGroupItemClasses } from './common/hooks';
import { __KEYS_ICON_BUTTON_GROUP_ITEM_CLASS__ } from './common/keys';
import type { IconButtonGroupItemProps, IconButtonGroupItemRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const IconButtonGroupItem: PolymorphicComponentWithRef = forwardRef(function IconButtonGroupItem<
	Element extends ElementType = PolymorphicDefaultElement
>(props: IconButtonGroupItemProps<Element>, ref: IconButtonGroupItemRef<Element>): ReactElement {
	const { children, className = __DEFAULT_CLASSNAME__, index, total, ...rest } = props;

	const classes = useIconButtonGroupItemClasses({ index, total });

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

export default <Element extends ElementType = PolymorphicDefaultElement, Props = PolymorphicDefaultProps>(
	props: PolymorphicComponentPropsWithRef<Element, Props>
) => <IconButtonGroupItem<Element> {...props} />;
