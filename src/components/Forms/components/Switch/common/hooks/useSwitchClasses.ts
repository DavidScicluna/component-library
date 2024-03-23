import classNames from 'classnames';

import classes from '@common/classes';
import type { ClassName } from '@common/types';

import {
	DEFAULT_SWITCH_IS_ACTIVE,
	DEFAULT_SWITCH_IS_CLICKABLE,
	DEFAULT_SWITCH_IS_DISABLED,
	DEFAULT_SWITCH_IS_READONLY
} from '../constants';
import type { SwitchUniqueProps } from '../types';

import { useSwitchResponsiveValues } from '.';

type UseSwitchClassesProps = Pick<SwitchUniqueProps, 'isActive' | 'isClickable' | 'isDisabled' | 'isReadOnly'>;
type UseSwitchClassesReturn = ClassName;

const useSwitchClasses = (props: UseSwitchClassesProps): UseSwitchClassesReturn => {
	const {
		isActive: isActiveProp = DEFAULT_SWITCH_IS_ACTIVE,
		isClickable: isClickableProp = DEFAULT_SWITCH_IS_CLICKABLE,
		isDisabled: isDisabledProp = DEFAULT_SWITCH_IS_DISABLED,
		isReadOnly: isReadOnlyProp = DEFAULT_SWITCH_IS_READONLY
	} = props;

	const { isActive, isClickable, isDisabled, isReadOnly } = useSwitchResponsiveValues({
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
