import { ElementType, forwardRef, ReactElement, useMemo } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { getResponsiveValue } from '@common/utils';

import Box from '@components/Box';

import { __DEFAULT_ASPECT_RATIO_RATIO__ } from './common/constants';
import type { AspectRatioProps, AspectRatioRatio, AspectRatioRef } from './common/types';

const AspectRatio = forwardRef(function AspectRatio<Element extends ElementType>(
	props: AspectRatioProps<Element>,
	ref: AspectRatioRef<Element>
): ReactElement {
	const { children, className = __DEFAULT_CLASSNAME__, ratio = __DEFAULT_ASPECT_RATIO_RATIO__, ...rest } = props;

	// TODO: Move to classes & replace with useGetClass
	const ratioClassName = useMemo<string>(() => {
		const r = getResponsiveValue<AspectRatioRatio>(ratio);
		switch (r) {
			case 'auto':
				return 'aspect-auto';
			case 'portrait':
				return 'aspect-[4/5]';
			case 'standard':
				return 'aspect-[4/3]';
			case 'vertical':
				return 'aspect-[9/16]';
			case 'video':
				return 'aspect-video';
			case 'widescreen':
				return 'aspect-[16/9]';
			default:
				return 'aspect-square';
		}
	}, [ratio]);

	return (
		<Box
			{...(rest as AspectRatioProps<Element>)}
			ref={ref}
			className={classNames(ratioClassName, { [className]: !!className })}
		>
			{children}
		</Box>
	);
});

export default AspectRatio;
