import type { ElementType } from 'react';
import { useMemo } from 'react';

import classNames from 'classnames';

import classes from '@common/classes';
import type { ClassName, PolymorphicDefaultElement } from '@common/types';

import {
	__DEFAULT_RADIO_IS_ACTIVE__,
	__DEFAULT_RADIO_IS_CLICKABLE__,
	__DEFAULT_RADIO_IS_DISABLED__,
	__DEFAULT_RADIO_IS_READONLY__
} from '../constants';
import type { RadioProps } from '../types';

import { useRadioResponsiveValues } from '.';

type UseRadioClassesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<
	RadioProps<Element>,
	'isActive' | 'isClickable' | 'isDisabled' | 'isReadOnly'
>;
type UseRadioClassesReturn = Record<'container' | 'element', ClassName>;

const useRadioClasses = <Element extends ElementType = PolymorphicDefaultElement>(
	props: UseRadioClassesProps<Element>
): UseRadioClassesReturn => {
	const {
		isActive: isActiveProp = __DEFAULT_RADIO_IS_ACTIVE__,
		isClickable: isClickableProp = __DEFAULT_RADIO_IS_CLICKABLE__,
		isDisabled: isDisabledProp = __DEFAULT_RADIO_IS_DISABLED__,
		isReadOnly: isReadOnlyProp = __DEFAULT_RADIO_IS_READONLY__
	} = props;

	const { isActive, isClickable, isDisabled, isReadOnly } = useRadioResponsiveValues<Element>({
		isActive: isActiveProp,
		isClickable: isClickableProp,
		isDisabled: isDisabledProp,
		isReadOnly: isReadOnlyProp
	});

	const rootClasses = useMemo<ClassName>(() => {
		return classNames(
			classes.interactivity.user_select.none,
			classes.interactivity.will_change.auto,
			classes.interactivity.cursor[!isClickable || isActive || isDisabled || isReadOnly ? 'default' : 'pointer'],
			classes.interactivity.pointer_events[!isClickable || isActive || isDisabled || isReadOnly ? 'none' : 'auto']
		);
	}, [isActive, isClickable, isDisabled, isReadOnly]);

	return classNames(rootClasses);
};

export default useRadioClasses;
