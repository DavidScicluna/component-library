import type { Style } from '@common/types';
import type { TextElement, TextProps } from '../types';
type UseTextStylesProps<Element extends TextElement> = Pick<TextProps<Element>, 'color'>;
type UseTextStylesReturn = Style;
declare const useTextStyles: <Element_1 extends TextElement>(props: UseTextStylesProps<Element_1>) => UseTextStylesReturn;
export default useTextStyles;
//# sourceMappingURL=useTextStyles.d.ts.map