import type { ElementType } from 'react';
import type { ClassName, PolymorphicDefaultElement } from '@common/types';
import type { BackgroundImageProps } from '../types';
type UseBackgroundImageClassesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<BackgroundImageProps<Element>, 'filters' | 'options' | 'radius'>;
type UseBackgroundImageClassesReturn = Record<'container' | 'image', ClassName>;
declare const useBackgroundImageClasses: <Element_1 extends ElementType = "div">(props: UseBackgroundImageClassesProps<Element_1>) => UseBackgroundImageClassesReturn;
export default useBackgroundImageClasses;
//# sourceMappingURL=useBackgroundImageClasses.d.ts.map