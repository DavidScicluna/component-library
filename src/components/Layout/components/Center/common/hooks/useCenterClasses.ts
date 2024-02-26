import classNames from 'classnames';

import classes from '@common/classes';
import { useGetClass } from '@common/hooks';
import type { ClassName, PolymorphicElementType } from '@common/types';

import { DEFAULT_CENTER_SPACING } from '../constants';
import type { CenterProps } from '../types';

import useCenterResponsiveValues from './useCenterResponsiveValues';

type UseCenterClassesProps<Element extends PolymorphicElementType> = Pick<CenterProps<Element>, 'spacing'>;
type UseCenterClassesReturn = ClassName;

const useCenterClasses = <Element extends PolymorphicElementType>(
	props: UseCenterClassesProps<Element>
): UseCenterClassesReturn => {
	const { spacing: spacingProp = DEFAULT_CENTER_SPACING } = props;

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
