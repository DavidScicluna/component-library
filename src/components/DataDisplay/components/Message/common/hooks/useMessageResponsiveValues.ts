import { __DEFAULT_SPACING__ } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import type { ThemeRadius, ThemeSpacing } from '@common/types';

import { __DEFAULT_MESSAGE_RADIUS__, __DEFAULT_MESSAGE_VARIANT__ } from '../constants';
import type { MessageProps, MessageVariant } from '../types';

type UseMessageResponsiveValuesProps = Partial<Pick<MessageProps, 'radius' | 'spacing' | 'variant'>>;

const useMessageResponsiveValues = (props: UseMessageResponsiveValuesProps) => {
	const {
		radius: radiusProp = __DEFAULT_MESSAGE_RADIUS__,
		spacing: spacingProp = __DEFAULT_SPACING__,
		variant: variantProp = __DEFAULT_MESSAGE_VARIANT__
	} = props;

	const radius = useGetResponsiveValue<ThemeRadius>(radiusProp);
	const spacing = useGetResponsiveValue<ThemeSpacing>(spacingProp);
	const variant = useGetResponsiveValue<MessageVariant>(variantProp);

	return { radius, spacing, variant };
};

export default useMessageResponsiveValues;
