import type { ElementType } from 'react';
import type { PolymorphicDefaultElement } from '@common/types';
import type { RatingDirection, RatingHighlightMode, RatingProps } from '../types';
type UseRatingResponsiveValuesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<RatingProps<Element>, 'count' | 'direction' | 'highlightMode' | 'isDisabled' | 'isError' | 'isReadOnly' | 'isRequired' | 'isSuccess' | 'isWarning' | 'size'>;
declare const useRatingResponsiveValues: <Element_1 extends ElementType = "div">(props: UseRatingResponsiveValuesProps<Element_1>) => {
    count: number;
    direction: RatingDirection;
    highlightMode: RatingHighlightMode;
    isDisabled: boolean;
    isError: boolean;
    isReadOnly: boolean;
    isRequired: boolean;
    isSuccess: boolean;
    isWarning: boolean;
    size: import("../../../..").FormsCommonSize;
};
export default useRatingResponsiveValues;
//# sourceMappingURL=useRatingResponsiveValues.d.ts.map