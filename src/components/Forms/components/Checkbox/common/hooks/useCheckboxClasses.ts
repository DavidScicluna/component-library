import classes from '@common/classes';
import type { ClassName } from '@common/types';

import {
	__DEFAULT_CHECKBOX_IS_ACTIVE__,
	__DEFAULT_CHECKBOX_IS_CLICKABLE__,
	__DEFAULT_CHECKBOX_IS_DISABLED__,
	__DEFAULT_CHECKBOX_IS_READONLY__
} from '../constants';
import type { CheckboxProps } from '../types';

import { useCheckboxResponsiveValues } from '.';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

type UseCheckboxClassesProps = Pick<CheckboxProps, 'isActive' | 'isClickable' | 'isDisabled' | 'isReadOnly'>;
type UseCheckboxClassesReturn = ClassName;

const useCheckboxClasses = (props: UseCheckboxClassesProps): UseCheckboxClassesReturn => {
	const {
		isActive: isActiveProp = __DEFAULT_CHECKBOX_IS_ACTIVE__,
		isClickable: isClickableProp = __DEFAULT_CHECKBOX_IS_CLICKABLE__,
		isDisabled: isDisabledProp = __DEFAULT_CHECKBOX_IS_DISABLED__,
		isReadOnly: isReadOnlyProp = __DEFAULT_CHECKBOX_IS_READONLY__
	} = props;

	const { isActive, isClickable, isDisabled, isReadOnly } = useCheckboxResponsiveValues({
		isActive: isActiveProp,
		isClickable: isClickableProp,
		isDisabled: isDisabledProp,
		isReadOnly: isReadOnlyProp
	});

	return classNames(
		classes.interactivity.user_select.none,
		classes.interactivity.will_change.auto,
		classes.interactivity.cursor[!isClickable || isActive || isDisabled || isReadOnly ? 'default' : 'pointer'],
		classes.interactivity.pointer_events[!isClickable || isActive || isDisabled || isReadOnly ? 'none' : 'auto']
	);
};

export default useCheckboxClasses;
