import type { ElementType } from 'react';
import type { PolymorphicDefaultElement, ThemeFontSize } from '@common/types';
import type { FormControlProps } from '../types';
type UseFormControlFontSize = Record<'label' | 'description' | 'helper', ThemeFontSize>;
type UseFormControlFontSizeProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<FormControlProps<Element>, 'size'>;
type UseFormControlFontSizeReturn = UseFormControlFontSize;
declare const useFormControlFontSize: <Element_1 extends ElementType = "div">(props: UseFormControlFontSizeProps<Element_1>) => UseFormControlFontSizeReturn;
export default useFormControlFontSize;
//# sourceMappingURL=useFormControlFontSize.d.ts.map