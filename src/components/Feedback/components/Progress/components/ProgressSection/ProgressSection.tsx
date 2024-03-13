import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';
import { getPercentage } from '@common/utils';

import { Center } from '@components/Layout';

import { useProgressContext } from '../../common/hooks';

import { DEFAULT_PROGRESS_SECTION_VALUE } from './common/constants';
import { useProgressSectionClasses, useProgressSectionResponsiveValues } from './common/hooks';
import { KEYS_PROGRESS_SECTION_CLASS } from './common/keys';
import type { ProgressSectionProps, ProgressSectionRef } from './common/types';

const ProgressSection = forwardRef(function ProgressSection<Element extends PolymorphicElementType>(
	props: ProgressSectionProps<Element>,
	ref: ProgressSectionRef<Element>
): JSX.Element {
	const { isIndeterminate, max, min, variant } = useProgressContext();

	const {
		children,
		className = DEFAULT_CLASSNAME,
		color,
		colorMode,
		value: valueProp = DEFAULT_PROGRESS_SECTION_VALUE,
		...rest
	} = props;

	const { value } = useProgressSectionResponsiveValues<Element>({ value: valueProp });

	const classes = useProgressSectionClasses<Element>({ color, colorMode });

	return (
		<Center
			{...rest}
			ref={ref}
			className={classNames(KEYS_PROGRESS_SECTION_CLASS, classes, { [className]: !!className })}
			w={variant === 'horizontal' ? `${isIndeterminate ? 25 : getPercentage(value, max, min)}%` : '100%'}
			h={variant === 'vertical' ? `${isIndeterminate ? 25 : getPercentage(value, max, min)}%` : '100%'}
			spacing={0}
		>
			{children}
		</Center>
	);
});

// ProgressSection.displayName = 'ProgressSection';

export default ProgressSection;
