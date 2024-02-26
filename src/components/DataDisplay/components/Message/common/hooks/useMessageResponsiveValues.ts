import { DEFAULT_SPACING } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import type { ThemeRadius, ThemeSpacing, Undefinable } from '@common/types';

import { DEFAULT_MESSAGE_RADIUS, DEFAULT_MESSAGE_VARIANT } from '../constants';
import type { MessageElement, MessageProps, MessageVariant } from '../types';

type UseMessageResponsiveValuesProps<Element extends MessageElement> = Partial<
	Pick<MessageProps<Element>, 'radius' | 'spacing' | 'variant'>
>;

const useMessageResponsiveValues = <Element extends MessageElement>(
	props: UseMessageResponsiveValuesProps<Element>
) => {
	const {
		radius: radiusProp = DEFAULT_MESSAGE_RADIUS,
		spacing: spacingProp = DEFAULT_SPACING,
		variant: variantProp = DEFAULT_MESSAGE_VARIANT
	} = props;

	const radius = useGetResponsiveValue<ThemeRadius>(radiusProp);
	const spacing = useGetResponsiveValue<Undefinable<ThemeSpacing>>(spacingProp);
	const variant = useGetResponsiveValue<MessageVariant>(variantProp);

	return { radius, spacing, variant };
};

export default useMessageResponsiveValues;
