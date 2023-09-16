import type { ElementType, ReactElement } from 'react';
import { forwardRef, isValidElement } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';

import { IconButtonGroup, IconButtonGroupItem } from '@components/Buttons/IconButtonGroup';
import { Center } from '@components/Layout';

import { useGetHorizontalScrollAPIContext, useHorizontalScrollContext } from '../../common/hooks';
import { HorizontalScrollLeftArrowIconButton as DefaultHorizontalScrollLeftArrowIconButton } from '../HorizontalScrollLeftArrowIconButton';
import { HorizontalScrollRightArrowIconButton as DefaultHorizontalScrollRightArrowIconButton } from '../HorizontalScrollRightArrowIconButton';

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
	const __DEFAULT_HORIZONTAL_SCROLL_ARROW_ICON_BUTTON_GROUP_SCROLL__ = useGetHorizontalScrollAPIContext();

	const { spacing: __DEFAULT_HORIZONTAL_SCROLL_ARROW_ICON_BUTTON_GROUP_SPACING__ } = useHorizontalScrollContext();

	const {
		className = __DEFAULT_CLASSNAME__,
		scroll = __DEFAULT_HORIZONTAL_SCROLL_ARROW_ICON_BUTTON_GROUP_SCROLL__,
		LeftArrow,
		RightArrow,
		spacing = __DEFAULT_HORIZONTAL_SCROLL_ARROW_ICON_BUTTON_GROUP_SPACING__,
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
			isAttached={!LeftArrow || !RightArrow}
			spacing={spacing}
		>
			<Center>
				<IconButtonGroupItem index={0} total={2}>
					{(props) =>
						isValidElement(LeftArrow) ? (
							LeftArrow
						) : (
							<DefaultHorizontalScrollLeftArrowIconButton {...props} scroll={scroll} />
						)
					}
				</IconButtonGroupItem>
			</Center>
			<Center>
				<IconButtonGroupItem index={1} total={2}>
					{(props) =>
						isValidElement(RightArrow) ? (
							RightArrow
						) : (
							<DefaultHorizontalScrollRightArrowIconButton {...props} scroll={scroll} />
						)
					}
				</IconButtonGroupItem>
			</Center>
		</IconButtonGroup>
	);
});

export default HorizontalScrollArrowIconButtonGroup;
