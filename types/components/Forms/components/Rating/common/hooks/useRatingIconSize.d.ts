import type { ElementType } from 'react';
import type { PolymorphicDefaultElement } from '@common/types';
import type { IconProps } from '@components/DataDisplay';
import type { RatingProps } from '../types';
type RatingIconSize = Pick<IconProps, 'w' | 'h' | 'size'>;
type UseRatingIconSizeProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<RatingProps<Element>, 'size'>;
type UseRatingIconSizeReturn = RatingIconSize;
declare const useRatingIconSize: <Element_1 extends ElementType = "div">(props: UseRatingIconSizeProps<Element_1>) => UseRatingIconSizeReturn;
export default useRatingIconSize;
//# sourceMappingURL=useRatingIconSize.d.ts.map