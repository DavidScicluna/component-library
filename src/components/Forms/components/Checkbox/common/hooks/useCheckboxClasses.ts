import type { ElementType } from 'react';
import { useMemo } from 'react';

import classNames from 'classnames';

import classes from '@common/classes';
import type { ClassName, PolymorphicDefaultElement } from '@common/types';

import {
	__DEFAULT_CHECKBOX_IS_ACTIVE__,
	__DEFAULT_CHECKBOX_IS_CLICKABLE__,
	__DEFAULT_CHECKBOX_IS_DISABLED__,
	__DEFAULT_CHECKBOX_IS_READONLY__
} from '../constants';
import type { CheckboxProps } from '../types';

import { useCheckboxResponsiveValues } from '.';

type UseCheckboxClassesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<
	CheckboxProps<Element>,
	'isActive' | 'isClickable' | 'isDisabled' | 'isReadOnly'
>;
type UseCheckboxClassesReturn = Record<'container' | 'element', ClassName>;

const useCheckboxClasses = <Element extends ElementType = PolymorphicDefaultElement>(
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

export default useCheckboxClasses;
