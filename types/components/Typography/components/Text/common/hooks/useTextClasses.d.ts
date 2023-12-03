import type { ClassName } from '@common/types';
import type { TextElement, TextProps } from '../types';
type UseTextClassesProps<Element extends TextElement> = Pick<TextProps<Element>, 'color' | 'colorMode' | 'align' | 'fontSize' | 'fontWeight' | 'lineClamp' | 'lineHeight' | 'textTransform' | 'isItalic' | 'isOverflown' | 'whitespace' | 'wordBreak'>;
type UseTextClassesReturn = ClassName;
declare const useTextClasses: <Element_1 extends TextElement>(props: UseTextClassesProps<Element_1>) => UseTextClassesReturn;
export default useTextClasses;
//# sourceMappingURL=useTextClasses.d.ts.map