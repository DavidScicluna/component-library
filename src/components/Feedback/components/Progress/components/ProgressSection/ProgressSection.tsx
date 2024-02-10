import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';
import { getPercentage } from '@common/utils';

import type { CenterProps } from '@components/Layout';
import { Center } from '@components/Layout';

import { useProgressContext } from '../../common/hooks';

import { __DEFAULT_PROGRESS_SECTION_VALUE__ } from './common/constants';
import { useProgressSectionClasses, useProgressSectionResponsiveValues } from './common/hooks';
import { __KEYS_PROGRESS_SECTION_CLASS__ } from './common/keys';
import type { ProgressSectionProps, ProgressSectionRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const ProgressSection = forwardRef(function ProgressSection<Element extends PolymorphicElementType>(
	props: ProgressSectionProps<Element>,
	ref: ProgressSectionRef<Element>
): JSX.Element {
	const { isIndeterminate, max, min, variant } = useProgressContext();

	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		color,
		colorMode,
		value: valueProp = __DEFAULT_PROGRESS_SECTION_VALUE__,
		...rest
	} = props;

	const { value } = useProgressSectionResponsiveValues<Element>({ value: valueProp });

	const classes = useProgressSectionClasses<Element>({ color, colorMode });

	return (
		<Center
			{...(rest as CenterProps<Element>)}
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

// ProgressSection.displayName = 'ProgressSection';

export default ProgressSection;
