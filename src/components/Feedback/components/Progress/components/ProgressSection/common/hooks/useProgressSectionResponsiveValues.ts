import { useGetResponsiveValue } from '@common/hooks';
import type { PolymorphicElementType } from '@common/types';

import { __DEFAULT_PROGRESS_SECTION_VALUE__ } from '../constants';
import type { ProgressSectionProps } from '../types';

type UseProgressSectionResponsiveValuesProps<Element extends PolymorphicElementType> = Partial<
	Pick<ProgressSectionProps<Element>, 'value'>
>;

const useProgressSectionResponsiveValues = <Element extends PolymorphicElementType>(
	props: UseProgressSectionResponsiveValuesProps<Element>
) => {
	const { value: valueProp = __DEFAULT_PROGRESS_SECTION_VALUE__ } = props;

	const value = useGetResponsiveValue<number>(valueProp);

	return { value };
};

export default useProgressSectionResponsiveValues;
