import type { ElementType, ReactElement } from 'react';
import { forwardRef, useMemo } from 'react';
import { ThreeDots } from 'react-loader-spinner';

import { __DEFAULT_CLASSNAME__, __DEFAULT_RADIUS__ } from '@common/constants';
import { useGetColor, useTheme } from '@common/hooks';
import type {
	PolymorphicComponentPropsWithRef,
	PolymorphicComponentWithRef,
	PolymorphicDefaultElement,
	PolymorphicDefaultProps,
	ThemeFontSize
} from '@common/types';
import { checkFontSizeType, convertREMToPixels, convertStringToNumber } from '@common/utils';

import { Box } from '@components/Box';

import { __DEFAULT_TAIL_SPIN_SPINNER_IS_VISIBLE__, __DEFAULT_TAIL_SPIN_SPINNER_SIZE__ } from './common/constants';
import { useTailSpinSpinnerResponsiveValues } from './common/hooks';
import { __KEYS_TAIL_SPIN_SPINNER_CLASS__, __KEYS_TAIL_SPIN_SPINNER_WRAPPER_CLASS__ } from './common/keys';
import type { TailSpinSpinnerProps, TailSpinSpinnerRef, TailSpinSpinnerSize } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const TailSpinSpinner: PolymorphicComponentWithRef = forwardRef(function TailSpinSpinner<
	Element extends ElementType = PolymorphicDefaultElement
>(props: TailSpinSpinnerProps<Element>, ref: TailSpinSpinnerRef<Element>): ReactElement {
	const theme = useTheme();

	const __DEFAULT_TAIL_SPIN_SPINNER_COLOR__ = useGetColor({ colorType: 'default', hueType: 'default' });

	const {
		className = __DEFAULT_CLASSNAME__,
		color = __DEFAULT_TAIL_SPIN_SPINNER_COLOR__,
		isVisible: isVisibleProp = __DEFAULT_TAIL_SPIN_SPINNER_IS_VISIBLE__,
		radius: radiusProp = __DEFAULT_RADIUS__,
		size: sizeProp = __DEFAULT_TAIL_SPIN_SPINNER_SIZE__,
		...rest
	} = props;

	const { isVisible, radius, size } = useTailSpinSpinnerResponsiveValues({
		isVisible: isVisibleProp,
		radius: radiusProp,
		size: sizeProp
	});

	const dimensions = useMemo<TailSpinSpinnerSize>(() => {
		return checkFontSizeType(size) === 'theme'
			? convertREMToPixels(convertStringToNumber(theme.fontSizes[size as ThemeFontSize], 'rem'))
			: size;
	}, [size]);

	return (
		<Box<Element>
			{...rest}
			ref={ref}
			className={classNames(__KEYS_TAIL_SPIN_SPINNER_CLASS__, { [className]: !!className })}
		>
			<ThreeDots
				width={dimensions}
				height={dimensions}
				color={color}
				radius={theme.borderRadius[radius]}
				// wrapperStyle={wrapperStyle}
				wrapperClass={__KEYS_TAIL_SPIN_SPINNER_WRAPPER_CLASS__}
				visible={isVisible}
			/>
		</Box>
	);
});

TailSpinSpinner.displayName = 'TailSpinSpinner';

export default <Element extends ElementType = PolymorphicDefaultElement, Props = PolymorphicDefaultProps>(
	props: PolymorphicComponentPropsWithRef<Element, Props>
) => <TailSpinSpinner<Element> {...props} />;
