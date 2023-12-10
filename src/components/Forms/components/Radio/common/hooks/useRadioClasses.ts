import classes from '@common/classes';
import type { ClassName } from '@common/types';

import {
	__DEFAULT_RADIO_IS_ACTIVE__,
	__DEFAULT_RADIO_IS_CLICKABLE__,
	__DEFAULT_RADIO_IS_DISABLED__,
	__DEFAULT_RADIO_IS_READONLY__
} from '../constants';
import type { RadioProps } from '../types';

import { useRadioResponsiveValues } from '.';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

type UseRadioClassesProps = Pick<RadioProps, 'isActive' | 'isClickable' | 'isDisabled' | 'isReadOnly'>;
type UseRadioClassesReturn = ClassName;

const useRadioClasses = (props: UseRadioClassesProps): UseRadioClassesReturn => {
	const {
		isActive: isActiveProp = __DEFAULT_RADIO_IS_ACTIVE__,
		isClickable: isClickableProp = __DEFAULT_RADIO_IS_CLICKABLE__,
		isDisabled: isDisabledProp = __DEFAULT_RADIO_IS_DISABLED__,
		isReadOnly: isReadOnlyProp = __DEFAULT_RADIO_IS_READONLY__
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
