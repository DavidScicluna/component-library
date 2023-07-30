import type { ElementType } from 'react';
import { useMemo } from 'react';

import classNames from 'classnames';

import type { ClassName } from '@common/types';
import { getResponsiveValue } from '@common/utils';

import { __DEFAULT_ASPECT_RATIO_RATIO__ } from '../constants';
import type { AspectRatioProps, AspectRatioRatio } from '../types';

type UseGetAspectRatioClassesProps<Element extends ElementType> = Pick<AspectRatioProps<Element>, 'ratio'>;
type UseGetAspectRatioClassesReturn = ClassName;

const useGetAspectRatioClasses = <Element extends ElementType>(
	props: UseGetAspectRatioClassesProps<Element>
): UseGetAspectRatioClassesReturn => {
	const { ratio = __DEFAULT_ASPECT_RATIO_RATIO__ } = props;

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

	return classNames(ratioClassName);
};

export default useGetAspectRatioClasses;
