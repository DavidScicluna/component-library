import classNames from 'classnames';

import classes from '@common/classes';
import type { ClassName } from '@common/types';

import {
	DEFAULT_CHECKBOX_IS_ACTIVE,
	DEFAULT_CHECKBOX_IS_CLICKABLE,
	DEFAULT_CHECKBOX_IS_DISABLED,
	DEFAULT_CHECKBOX_IS_READONLY
} from '../constants';
import type { CheckboxUniqueProps } from '../types';

import { useCheckboxResponsiveValues } from '.';

type UseCheckboxClassesProps = Pick<CheckboxUniqueProps, 'isActive' | 'isClickable' | 'isDisabled' | 'isReadOnly'>;
type UseCheckboxClassesReturn = ClassName;

const useCheckboxClasses = (props: UseCheckboxClassesProps): UseCheckboxClassesReturn => {
	const {
		isActive: isActiveProp = DEFAULT_CHECKBOX_IS_ACTIVE,
		isClickable: isClickableProp = DEFAULT_CHECKBOX_IS_CLICKABLE,
		isDisabled: isDisabledProp = DEFAULT_CHECKBOX_IS_DISABLED,
		isReadOnly: isReadOnlyProp = DEFAULT_CHECKBOX_IS_READONLY
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
