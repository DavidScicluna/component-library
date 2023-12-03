import type { ElementType } from 'react';
import type { ClassName, PolymorphicDefaultElement } from '@common/types';
import type { ImageProps } from '../types';
type UseImageClassesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<ImageProps<Element>, 'color' | 'colorMode' | 'filters' | 'options' | 'radius'>;
type UseImageClassesReturn = Record<'container' | 'image' | 'fallback' | 'thumbnail', ClassName>;
declare const useImageClasses: <Element_1 extends ElementType = "div">(props: UseImageClassesProps<Element_1>) => UseImageClassesReturn;
export default useImageClasses;
//# sourceMappingURL=useImageClasses.d.ts.map