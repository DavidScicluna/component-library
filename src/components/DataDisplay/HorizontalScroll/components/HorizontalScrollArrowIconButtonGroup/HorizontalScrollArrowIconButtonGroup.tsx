import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';

import { IconButtonGroup } from '@components/Buttons/IconButtonGroup';

import DefaultHorizontalScrollLeftArrowIconButton from '../HorizontalScrollLeftArrowIconButton';
import DefaultHorizontalScrollRightArrowIconButton from '../HorizontalScrollRightArrowIconButton';

import { __KEYS_HORIZONTAL_SCROLL_ARROW_ICON_BUTTON_GROUP_CLASS__ } from './common/keys';
import type {
	HorizontalScrollArrowIconButtonGroupProps,
	HorizontalScrollArrowIconButtonGroupRef
} from './common/types';

const HorizontalScrollArrowIconButtonGroup = forwardRef(function HorizontalScrollArrowIconButtonGroup<
	Element extends ElementType
>(
	props: HorizontalScrollArrowIconButtonGroupProps<Element>,
	ref: HorizontalScrollArrowIconButtonGroupRef<Element>
): ReactElement {
	const {
		className = __DEFAULT_CLASSNAME__,
		scroll,
		LeftArrowIconButton = <DefaultHorizontalScrollLeftArrowIconButton scroll={scroll} />,
		RightArrowIconButton = <DefaultHorizontalScrollRightArrowIconButton scroll={scroll} />,
		...rest
	} = props;

	return (
		<IconButtonGroup<Element>
			{...rest}
			ref={ref}
			className={classNames(__KEYS_HORIZONTAL_SCROLL_ARROW_ICON_BUTTON_GROUP_CLASS__, {
				[className]: !!className
			})}
			w='100%'
			h='100%'
			alignItems='stretch'
			justifyContent='stretch'
			isAttached
		>
			{LeftArrowIconButton}
			{RightArrowIconButton}
		</IconButtonGroup>
	);
});

export default HorizontalScrollArrowIconButtonGroup;
