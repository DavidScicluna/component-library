import classNames from 'classnames';

import classes from '@common/classes';
import type { ClassName } from '@common/types';

import { __DEFAULT_DUMMY_ICON_BUTTON_LINE_HEIGHT_SIZE__ } from '../constants';

type UseDummyIconButtonClassesReturn = ClassName;

const useDummyIconButtonClasses = (): UseDummyIconButtonClassesReturn => {
	return classNames(
		classes.typography.align.center,
		classes.typography.letter_spacing.normal,
		classes.typography.line_height[__DEFAULT_DUMMY_ICON_BUTTON_LINE_HEIGHT_SIZE__],
		classes.typography.transform.uppercase,
		classes.typography.text_overflow.ellipsis,
		classes.typography.whitespace.nowrap
	);
};

export default useDummyIconButtonClasses;
