import type { ElementType } from 'react';

import classNames from 'classnames';

import classes from '@common/classes';
import type { ClassName, PolymorphicDefaultElement } from '@common/types';

import { useButtonSizeConfig } from '@components/Buttons/components/Button/common/hooks';
import { useButtonGroupContext } from '@components/Buttons/components/ButtonGroup/common/hooks';

import type { ButtonGroupItemProps } from '../types';

type UseButtonGroupItemClassesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<
	ButtonGroupItemProps<Element>,
	'index' | 'total'
>;
type UseButtonGroupItemClassesReturn = ClassName;

const useButtonGroupItemClasses = <Element extends ElementType = PolymorphicDefaultElement>(
	props: UseButtonGroupItemClassesProps<Element>
): UseButtonGroupItemClassesReturn => {
	const { direction, isAttached, isCompact, isRound, size, variant } = useButtonGroupContext();

	const { index, total } = props;

	const { radius } = useButtonSizeConfig({ isCompact, isRound, size, variant });

	const isFirst = index === 0;
	const isLast = index === total - 1;

	switch (direction) {
		case 'row':
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
		case 'row-reverse':
			return classNames({
				[classes.borders.border_radius_tl[radius]]: isAttached && isLast,
				[classes.borders.border_radius_tl.before.inherit]: isAttached && isLast,
				[classes.borders.border_radius_bl[radius]]: isAttached && isLast,
				[classes.borders.border_radius_bl.before.inherit]: isAttached && isLast,
				[classes.borders.border_radius_tr.none]: isAttached && isLast,
				[classes.borders.border_radius_tr.before.inherit]: isAttached && isLast,
				[classes.borders.border_radius_br.none]: isAttached && isLast,
				[classes.borders.border_radius_br.before.inherit]: isAttached && isLast,
				[classes.borders.border_radius_tl.none]: isAttached && isFirst,
				[classes.borders.border_radius_tl.before.inherit]: isAttached && isFirst,
				[classes.borders.border_radius_bl.none]: isAttached && isFirst,
				[classes.borders.border_radius_bl.before.inherit]: isAttached && isFirst,
				[classes.borders.border_radius_tr[radius]]: isAttached && isFirst,
				[classes.borders.border_radius_tr.before.inherit]: isAttached && isFirst,
				[classes.borders.border_radius_br[radius]]: isAttached && isFirst,
				[classes.borders.border_radius_br.before.inherit]: isAttached && isFirst,
				[classes.borders.border_radius.important.none]: isAttached && !isFirst && !isLast,
				[classes.borders.border_radius.before.inherit]: isAttached && !isFirst && !isLast
			});
		case 'column':
			return classNames({
				[classes.borders.border_radius_tl[radius]]: isAttached && isFirst,
				[classes.borders.border_radius_tl.before.inherit]: isAttached && isFirst,
				[classes.borders.border_radius_bl.none]: isAttached && isFirst,
				[classes.borders.border_radius_bl.before.inherit]: isAttached && isFirst,
				[classes.borders.border_radius_tr[radius]]: isAttached && isFirst,
				[classes.borders.border_radius_tr.before.inherit]: isAttached && isFirst,
				[classes.borders.border_radius_br.none]: isAttached && isFirst,
				[classes.borders.border_radius_br.before.inherit]: isAttached && isFirst,
				[classes.borders.border_radius_tl.none]: isAttached && isLast,
				[classes.borders.border_radius_tl.before.inherit]: isAttached && isLast,
				[classes.borders.border_radius_bl[radius]]: isAttached && isLast,
				[classes.borders.border_radius_bl.before.inherit]: isAttached && isLast,
				[classes.borders.border_radius_tr.none]: isAttached && isLast,
				[classes.borders.border_radius_tr.before.inherit]: isAttached && isLast,
				[classes.borders.border_radius_br[radius]]: isAttached && isLast,
				[classes.borders.border_radius_br.before.inherit]: isAttached && isLast,
				[classes.borders.border_radius.important.none]: isAttached && !isFirst && !isLast,
				[classes.borders.border_radius.before.inherit]: isAttached && !isFirst && !isLast
			});
		case 'column-reverse':
			return classNames({
				[classes.borders.border_radius_tl[radius]]: isAttached && isLast,
				[classes.borders.border_radius_tl.before.inherit]: isAttached && isLast,
				[classes.borders.border_radius_bl.none]: isAttached && isLast,
				[classes.borders.border_radius_bl.before.inherit]: isAttached && isLast,
				[classes.borders.border_radius_tr[radius]]: isAttached && isLast,
				[classes.borders.border_radius_tr.before.inherit]: isAttached && isLast,
				[classes.borders.border_radius_br.none]: isAttached && isLast,
				[classes.borders.border_radius_br.before.inherit]: isAttached && isLast,
				[classes.borders.border_radius_tl.none]: isAttached && isFirst,
				[classes.borders.border_radius_tl.before.inherit]: isAttached && isFirst,
				[classes.borders.border_radius_bl[radius]]: isAttached && isFirst,
				[classes.borders.border_radius_bl.before.inherit]: isAttached && isFirst,
				[classes.borders.border_radius_tr.none]: isAttached && isFirst,
				[classes.borders.border_radius_tr.before.inherit]: isAttached && isFirst,
				[classes.borders.border_radius_br[radius]]: isAttached && isFirst,
				[classes.borders.border_radius_br.before.inherit]: isAttached && isFirst,
				[classes.borders.border_radius.important.none]: isAttached && !isFirst && !isLast,
				[classes.borders.border_radius.before.inherit]: isAttached && !isFirst && !isLast
			});
	}
};

export default useButtonGroupItemClasses;
