import { useGetResponsiveValue } from '@common/hooks';

import { __DEFAULT_PROGRESS_SECTION_VALUE__ } from '../constants';
import type { ProgressSectionProps } from '../types';

type UseProgressSectionResponsiveValuesProps = Partial<Pick<ProgressSectionProps, 'value'>>;

const useProgressSectionResponsiveValues = (props: UseProgressSectionResponsiveValuesProps) => {
	const { value: valueProp = __DEFAULT_PROGRESS_SECTION_VALUE__ } = props;

	const value = useGetResponsiveValue<number>(valueProp);

	return { value };
};

export default useProgressSectionResponsiveValues;
