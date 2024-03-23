import classNames from 'classnames';

import classes from '@common/classes';
import type { ClassName } from '@common/types';

import {
	DEFAULT_RADIO_IS_ACTIVE,
	DEFAULT_RADIO_IS_CLICKABLE,
	DEFAULT_RADIO_IS_DISABLED,
	DEFAULT_RADIO_IS_READONLY
} from '../constants';
import type { RadioUniqueProps } from '../types';

import { useRadioResponsiveValues } from '.';

type UseRadioClassesProps = Pick<RadioUniqueProps, 'isActive' | 'isClickable' | 'isDisabled' | 'isReadOnly'>;
type UseRadioClassesReturn = ClassName;

const useRadioClasses = (props: UseRadioClassesProps): UseRadioClassesReturn => {
	const {
		isActive: isActiveProp = DEFAULT_RADIO_IS_ACTIVE,
		isClickable: isClickableProp = DEFAULT_RADIO_IS_CLICKABLE,
		isDisabled: isDisabledProp = DEFAULT_RADIO_IS_DISABLED,
		isReadOnly: isReadOnlyProp = DEFAULT_RADIO_IS_READONLY
	} = props;

	const { isActive, isClickable, isDisabled, isReadOnly } = useRadioResponsiveValues({
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

export default useRadioClasses;
