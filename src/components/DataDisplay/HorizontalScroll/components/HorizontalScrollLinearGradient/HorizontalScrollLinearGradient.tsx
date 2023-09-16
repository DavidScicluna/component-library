import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useAppTheme } from '@common/hooks';

import { Fade } from '@components/Animation';
import { LinearGradient } from '@components/Overlay/components/LinearGradient';

import { useHorizontalScrollContext } from '../../common/hooks';

import { __KEYS_HORIZONTAL_SCROLL_LINEAR_GRADIENT_CLASS__ } from './common/keys';
import type { HorizontalScrollLinearGradientProps, HorizontalScrollLinearGradientRef } from './common/types';

const HorizontalScrollLinearGradient = forwardRef(function HorizontalScrollLinearGradient<Element extends ElementType>(
	props: HorizontalScrollLinearGradientProps<Element>,
	ref: HorizontalScrollLinearGradientRef<Element>
): ReactElement {
	const { colorMode: __DEFAULT_HORIZONTAL_SCROLL_LINEAR_GRADIENT_COLORMODE__ } = useAppTheme();

	const { colorMode = __DEFAULT_HORIZONTAL_SCROLL_LINEAR_GRADIENT_COLORMODE__, arrowSize } =
		useHorizontalScrollContext();

	const { className = __DEFAULT_CLASSNAME__, direction, isVisible = true, ...rest } = props;

	return (
		<Fade w={arrowSize && arrowSize.w ? `${arrowSize.w}px` : '100%'} h='100%' in={isVisible} unmountOnExit={false}>
			<LinearGradient<Element>
				{...rest}
				ref={ref}
				className={classNames(__KEYS_HORIZONTAL_SCROLL_LINEAR_GRADIENT_CLASS__, { [className]: !!className })}
				direction={direction === 'left' ? 'r' : 'l'}
				from={{ color: 'gray', colorMode, hueType: 'background', position: 0 }}
				to={{ color: 'transparent', colorMode, position: 100 }}
			/>
		</Fade>
	);
});

export default HorizontalScrollLinearGradient;
