import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import { getPercentage } from '@common/utils';

import { Center } from '@components/Layout';

import { useProgressContext } from '../../common/hooks';

import { __DEFAULT_PROGRESS_SECTION_VALUE__ } from './common/constants';
import { useProgressSectionClasses } from './common/hooks';
import { __KEYS_PROGRESS_SECTION_CLASS__ } from './common/keys';
import type { ProgressSectionProps, ProgressSectionRef } from './common/types';

const ProgressSection = forwardRef(function ProgressSection<Element extends ElementType>(
	props: ProgressSectionProps<Element>,
	ref: ProgressSectionRef<Element>
): ReactElement {
	const { isIndeterminate, max, min, variant } = useProgressContext();

	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		color,
		colorMode,
		value: v = __DEFAULT_PROGRESS_SECTION_VALUE__,
		...rest
	} = props;

	const value = useGetResponsiveValue<number>(v);

	const classes = useProgressSectionClasses<Element>({ color, colorMode });

	return (
		<Center<Element>
			{...rest}
			ref={ref}
			className={classNames(__KEYS_PROGRESS_SECTION_CLASS__, classes, { [className]: !!className })}
			w={variant === 'horizontal' ? `${isIndeterminate ? 25 : getPercentage(value, max, min)}%` : '100%'}
			h={variant === 'vertical' ? `${isIndeterminate ? 25 : getPercentage(value, max, min)}%` : '100%'}
			spacing={0}
		>
			{children}
		</Center>
	);
});

ProgressSection.displayName = 'ProgressSection';

export default ProgressSection;
