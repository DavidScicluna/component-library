import classNames from 'classnames';

import classes from '@common/classes';
import type { ClassName, PolymorphicElementType } from '@common/types';

import {
	__DEFAULT_CHECKBOX_IS_ACTIVE__,
	__DEFAULT_CHECKBOX_IS_CLICKABLE__,
	__DEFAULT_CHECKBOX_IS_DISABLED__,
	__DEFAULT_CHECKBOX_IS_READONLY__
} from '../constants';
import type { CheckboxProps } from '../types';

import { useCheckboxResponsiveValues } from '.';

type UseCheckboxClassesProps<Element extends PolymorphicElementType> = Pick<
	CheckboxProps<Element>,
	'isActive' | 'isClickable' | 'isDisabled' | 'isReadOnly'
>;
type UseCheckboxClassesReturn = ClassName;

const useCheckboxClasses = <Element extends PolymorphicElementType>(
	props: UseCheckboxClassesProps<Element>
): UseCheckboxClassesReturn => {
	const {
		isActive: isActiveProp = __DEFAULT_CHECKBOX_IS_ACTIVE__,
		isClickable: isClickableProp = __DEFAULT_CHECKBOX_IS_CLICKABLE__,
		isDisabled: isDisabledProp = __DEFAULT_CHECKBOX_IS_DISABLED__,
		isReadOnly: isReadOnlyProp = __DEFAULT_CHECKBOX_IS_READONLY__
	} = props;

	const { isActive, isClickable, isDisabled, isReadOnly } = useCheckboxResponsiveValues<Element>({
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
