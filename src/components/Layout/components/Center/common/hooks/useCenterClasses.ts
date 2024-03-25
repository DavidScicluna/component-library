import classNames from 'classnames';

import classes from '@common/classes';
import { useGetClass } from '@common/hooks';
import type { ClassName } from '@common/types';

import { DEFAULT_CENTER_SPACING } from '../constants';
import type { CenterUniqueProps } from '../types';

import useCenterResponsiveValues from './useCenterResponsiveValues';

type UseCenterClassesProps = Pick<CenterUniqueProps, 'spacing'>;
type UseCenterClassesReturn = ClassName;

const useCenterClasses = (props: UseCenterClassesProps): UseCenterClassesReturn => {
	const { spacing: spacingProp } = props;

	const { spacing = DEFAULT_CENTER_SPACING } = useCenterResponsiveValues({ spacing: spacingProp });

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
