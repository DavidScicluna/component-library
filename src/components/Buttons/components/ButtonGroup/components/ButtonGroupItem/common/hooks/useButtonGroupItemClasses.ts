import type { ElementType } from 'react';

import classNames from 'classnames';

import classes from '@common/classes';
import type { ClassName } from '@common/types';

import { hooks as buttons_hooks } from '@components/Buttons';

import type { ButtonGroupItemProps } from '../types';

type UseButtonGroupItemClassesProps<Element extends ElementType> = Pick<
	ButtonGroupItemProps<Element>,
	'index' | 'total'
>;
type UseButtonGroupItemClassesReturn = ClassName;

const { useButtonGroupContext, useButtonSizeConfig } = buttons_hooks;

const useButtonGroupItemClasses = <Element extends ElementType>(
	props: UseButtonGroupItemClassesProps<Element>
): UseButtonGroupItemClassesReturn => {
	const { isAttached, isCompact, isFullWidth, isRound, size, variant } = useButtonGroupContext();

	const { index, total } = props;

	const { radius } = useButtonSizeConfig({ isCompact, isRound, size, variant });

	const isFirst = index === 0;
	const isLast = index === total - 1;

	return classNames(classes.sizing.width[isFullWidth ? 'full' : 'auto'], {
		[classes.borders.border_radius_tl[radius]]: isAttached && isFirst,
		[classes.borders.border_radius_tl.before.inherit]: isAttached && isFirst,
		[classes.borders.border_radius_bl[radius]]: isAttached && isFirst,
		[classes.borders.border_radius_bl.before.inherit]: isAttached && isFirst,
		[classes.borders.border_radius_tr.none]: isAttached && isFirst,
		[classes.borders.border_radius_tr.before.inherit]: isAttached && isFirst,
		[classes.borders.border_radius_br.none]: isAttached && isFirst,
		[classes.borders.border_radius_br.before.inherit]: isAttached && isFirst,
		[classes.borders.border_radius_tl.none]: isAttached && isLast,
		[classes.borders.border_radius_tl.before.inherit]: isAttached && isLast,
		[classes.borders.border_radius_bl.none]: isAttached && isLast,
		[classes.borders.border_radius_bl.before.inherit]: isAttached && isLast,
		[classes.borders.border_radius_tr[radius]]: isAttached && isLast,
		[classes.borders.border_radius_tr.before.inherit]: isAttached && isLast,
		[classes.borders.border_radius_br[radius]]: isAttached && isLast,
		[classes.borders.border_radius_br.before.inherit]: isAttached && isLast,
		[classes.borders.border_radius.important.none]: isAttached && !isFirst && !isLast,
		[classes.borders.border_radius.before.inherit]: isAttached && !isFirst && !isLast
	});
};

export default useButtonGroupItemClasses;
