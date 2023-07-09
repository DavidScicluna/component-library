import { forwardRef, ReactElement } from 'react';

import classNames from 'classnames';

import { useGetResponsiveValue } from '../../../common/hooks';
import Box from '../../Layout/Box';

import {
	TextAlign,
	TextElementType,
	TextFontSize,
	TextFontWeight,
	TextLineHeight,
	TextProps,
	TextRef,
	TextTransform,
	TextWhitespace,
	TextWordBreak
} from './common/types';

const Text = forwardRef(function Text<Element extends TextElementType>(
	props: TextProps<Element>,
	ref: TextRef<Element>
): ReactElement {
	const {
		children,
		className = '',
		align: ta = 'left',
		fontSize: fs = 'md',
		fontWeight: fw = 'normal',
		lineHeight: lh = 'normal',
		transform: tt = 'normal',
		isItalic: ii = false,
		isOverflown: io = false,
		whitespace: tw = 'normal',
		wordBreak: wb = 'normal',
		...rest
	} = props;

	const align = useGetResponsiveValue<TextAlign>(ta);
	const fontSize = useGetResponsiveValue<TextFontSize>(fs);
	const fontWeight = useGetResponsiveValue<TextFontWeight>(fw);
	const lineHeight = useGetResponsiveValue<TextLineHeight>(lh);
	const transform = useGetResponsiveValue<TextTransform>(tt);
	const isItalic = useGetResponsiveValue<boolean>(ii);
	const isOverflown = useGetResponsiveValue<boolean>(io);
	const whitespace = useGetResponsiveValue<TextWhitespace>(tw);
	const wordBreak = useGetResponsiveValue<TextWordBreak>(wb);

	return (
		<Box
			{...rest}
			ref={ref}
			className={classNames(
				`text-${align}`,
				`text-${align}`,
				`text-${fontSize === 'md' ? 'base' : fontSize}`,
				`font-${fontWeight}`,
				`leading-${lineHeight}`,
				transform === 'normal' ? `${transform}-case` : transform,
				`whitespace-${whitespace}`,
				`break-${wordBreak}`,
				{
					['italic']: isItalic,
					['not-italic']: !isItalic,
					['truncate']: isOverflown,
					[className]: !!className
				}
			)}
		>
			{children}
		</Box>
	);
});

export default Text;
