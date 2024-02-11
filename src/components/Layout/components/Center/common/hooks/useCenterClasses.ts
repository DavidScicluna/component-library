import classes from '@common/classes';
import { useGetClass } from '@common/hooks';
import type { ClassName, PolymorphicElementType } from '@common/types';

import { __DEFAULT_CENTER_SPACING__ } from '../constants';
import type { CenterProps } from '../types';

import useCenterResponsiveValues from './useCenterResponsiveValues';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

type UseCenterClassesProps<Element extends PolymorphicElementType> = Pick<CenterProps<Element>, 'spacing'>;
type UseCenterClassesReturn = ClassName;

const useCenterClasses = <Element extends PolymorphicElementType>(
	props: UseCenterClassesProps<Element>
): UseCenterClassesReturn => {
	const { spacing: spacingProp = __DEFAULT_CENTER_SPACING__ } = props;

	const { spacing } = useCenterResponsiveValues({ spacing: spacingProp });

	const spacingClassName = useGetClass((classes) => classes.spacing.gap[spacing]);

	return classNames(
		classes.layout.display.flex,
		classes.flex.direction.row,
		classes.flex.wrap.nowrap,
		classes.flex.align_items.center,
		classes.flex.justify_content.center,
		spacingClassName
	);
};

export default useCenterClasses;
