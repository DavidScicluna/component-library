import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import { Box } from '@components/Box';

import { useButtonGroupContext } from '../../common/hooks';

import { useButtonGroupItemClasses } from './common/hooks';
import { KEYS_BUTTON_GROUP_ITEM_CLASS } from './common/keys';
import type { ButtonGroupItemProps, ButtonGroupItemRef } from './common/types';

const ButtonGroupItem = forwardRef(function ButtonGroupItem<Element extends PolymorphicElementType>(
	props: ButtonGroupItemProps<Element>,
	ref: ButtonGroupItemRef<Element>
): JSX.Element {
	const { isFullWidth } = useButtonGroupContext();

	const { children, className = DEFAULT_CLASSNAME, index, total, ...rest } = props;

	const classes = useButtonGroupItemClasses<Element>({ index, total });

	return (
		<Box
			{...rest}
			ref={ref}
			className={classNames(KEYS_BUTTON_GROUP_ITEM_CLASS, { [className]: !!className })}
			w={isFullWidth ? '100%' : 'auto'}
		>
			{children({ className: classes })}
		</Box>
	);
});

// ButtonGroupItem.displayName = 'ButtonGroupItem';

export default ButtonGroupItem;
