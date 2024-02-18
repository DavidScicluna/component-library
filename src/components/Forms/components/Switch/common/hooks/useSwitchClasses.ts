import classNames from 'classnames';

import classes from '@common/classes';
import type { ClassName, PolymorphicElementType } from '@common/types';

import {
	__DEFAULT_SWITCH_IS_ACTIVE__,
	__DEFAULT_SWITCH_IS_CLICKABLE__,
	__DEFAULT_SWITCH_IS_DISABLED__,
	__DEFAULT_SWITCH_IS_READONLY__
} from '../constants';
import type { SwitchProps } from '../types';

import { useSwitchResponsiveValues } from '.';

type UseSwitchClassesProps<Element extends PolymorphicElementType> = Pick<
	SwitchProps<Element>,
	'isActive' | 'isClickable' | 'isDisabled' | 'isReadOnly'
>;
type UseSwitchClassesReturn = ClassName;

const useSwitchClasses = <Element extends PolymorphicElementType>(
	props: UseSwitchClassesProps<Element>
): UseSwitchClassesReturn => {
	const {
		isActive: isActiveProp = __DEFAULT_SWITCH_IS_ACTIVE__,
		isClickable: isClickableProp = __DEFAULT_SWITCH_IS_CLICKABLE__,
		isDisabled: isDisabledProp = __DEFAULT_SWITCH_IS_DISABLED__,
		isReadOnly: isReadOnlyProp = __DEFAULT_SWITCH_IS_READONLY__
	} = props;

	const { isActive, isClickable, isDisabled, isReadOnly } = useSwitchResponsiveValues<Element>({
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

export default useSwitchClasses;
