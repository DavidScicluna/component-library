import type { ElementType } from 'react';

import classNames from 'classnames';

import classes from '@common/classes';
import type { ClassName } from '@common/types';

import { useIconButtonSizeConfig } from '@components/Buttons/components/IconButton';
import { useIconButtonGroupContext } from '@components/Buttons/IconButtonGroup';

import type { IconButtonGroupItemProps } from '../types';

type UseIconButtonGroupItemClassesProps<Element extends ElementType> = Pick<
	IconButtonGroupItemProps<Element>,
	'index' | 'total'
>;
type UseIconButtonGroupItemClassesReturn = ClassName;

const useIconButtonGroupItemClasses = <Element extends ElementType>(
	props: UseIconButtonGroupItemClassesProps<Element>
): UseIconButtonGroupItemClassesReturn => {
	const { isAttached, isCompact, isRound, size, variant } = useIconButtonGroupContext();

	const { index, total } = props;

	const { radius } = useIconButtonSizeConfig({ isCompact, isRound, size, variant });

	const isFirst = index === 0;
	const isLast = index === total - 1;

	return classNames({
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

export default useIconButtonGroupItemClasses;
