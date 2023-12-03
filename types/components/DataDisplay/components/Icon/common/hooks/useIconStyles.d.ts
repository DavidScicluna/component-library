import type { Style } from '@common/types';
import type { IconDefaultElement, IconElement, IconProps } from '../types';
type UseIconStylesProps<Element extends IconElement = IconDefaultElement> = Pick<IconProps<Element>, 'size'>;
type UseIconStylesReturn = Style;
declare const useIconStyles: <Element_1 extends "span" = "span">(props: UseIconStylesProps<Element_1>) => UseIconStylesReturn;
export default useIconStyles;
//# sourceMappingURL=useIconStyles.d.ts.map