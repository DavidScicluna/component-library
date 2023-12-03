import type { ElementType } from 'react';
import type { ClassName, PolymorphicDefaultElement } from '@common/types';
import type { RatingProps } from '../types';
type UseRatingClassesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<RatingProps<Element>, 'isDisabled' | 'isReadOnly'>;
type UseRatingClassesReturn = ClassName;
declare const useRatingClasses: <Element_1 extends ElementType = "div">(props: UseRatingClassesProps<Element_1>) => UseRatingClassesReturn;
export default useRatingClasses;
//# sourceMappingURL=useRatingClasses.d.ts.map