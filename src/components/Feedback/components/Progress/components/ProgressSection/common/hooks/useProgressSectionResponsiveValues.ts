import { useGetResponsiveValue } from '@common/hooks';
import type { PolymorphicElementType } from '@common/types';

import { DEFAULT_PROGRESS_SECTION_VALUE } from '../constants';
import type { ProgressSectionProps } from '../types';

type UseProgressSectionResponsiveValuesProps<Element extends PolymorphicElementType> = Partial<
	Pick<ProgressSectionProps<Element>, 'value'>
>;

const useProgressSectionResponsiveValues = <Element extends PolymorphicElementType>(
	props: UseProgressSectionResponsiveValuesProps<Element>
) => {
	const { value: valueProp = DEFAULT_PROGRESS_SECTION_VALUE } = props;

	const value = useGetResponsiveValue<number>(valueProp);

	return { value };
};

export default useProgressSectionResponsiveValues;
