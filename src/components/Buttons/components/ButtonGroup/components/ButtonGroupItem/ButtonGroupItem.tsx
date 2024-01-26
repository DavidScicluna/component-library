import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import type { BoxProps } from '@components/Box';
import { Box } from '@components/Box';

import { useButtonGroupContext } from '../../common/hooks';

import { useButtonGroupItemClasses } from './common/hooks';
import { __KEYS_BUTTON_GROUP_ITEM_CLASS__ } from './common/keys';
import type { ButtonGroupItemProps, ButtonGroupItemRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const ButtonGroupItem = forwardRef(function ButtonGroupItem<Element extends PolymorphicElementType>(
	props: ButtonGroupItemProps<Element>,
	ref: ButtonGroupItemRef<Element>
): ReactElement {
	const { isFullWidth } = useButtonGroupContext();

	const { children, className = __DEFAULT_CLASSNAME__, index, total, ...rest } = props;

	const classes = useButtonGroupItemClasses({ index, total });

	return (
		<Box
			{...(rest as BoxProps<Element>)}
			ref={ref}
			className={classNames(__KEYS_BUTTON_GROUP_ITEM_CLASS__, { [className]: !!className })}
			w={isFullWidth ? '100%' : 'auto'}
		>
			{children({ className: classes })}
		</Box>
	);
});

// ButtonGroupItem.displayName = 'ButtonGroupItem';

export default ButtonGroupItem;
