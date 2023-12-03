import type { ClassName } from '@common/types';
import type { LinkDefaultElement, LinkElement, LinkProps } from '../types';
type UseLinkClassesProps<Element extends LinkElement = LinkDefaultElement> = Pick<LinkProps<Element>, 'color' | 'colorMode' | 'isDisabled' | 'isUnderline' | 'isUnstyled'>;
type UseLinkClassesReturn = ClassName;
declare const useLinkClasses: <Element_1 extends "a" = "a">(props: UseLinkClassesProps<Element_1>) => UseLinkClassesReturn;
export default useLinkClasses;
//# sourceMappingURL=useLinkClasses.d.ts.map