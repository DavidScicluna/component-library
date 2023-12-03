import type { ElementType, ReactNode } from 'react';
import type { PickFrom, PolymorphicChangeEvent, PolymorphicFocusEvent, PolymorphicMouseEvent } from '@common/types';
import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';
import type { IconButtonProps } from '@components/Buttons';
import type { FormsCommonProps, FormsCommonSize, FormsCommonVariant } from '@components/Forms';
export type PasswordInputMouseEvent<Element extends PasswordInputElement = PasswordInputDefaultElement> = PolymorphicMouseEvent<Element>;
export type PasswordInputChangeEvent<Element extends PasswordInputElement = PasswordInputDefaultElement> = PolymorphicChangeEvent<Element>;
export type PasswordInputFocusEvent<Element extends PasswordInputElement = PasswordInputDefaultElement> = PolymorphicFocusEvent<Element>;
export type PasswordInputDefaultElement = 'input';
export type PasswordInputElement = PickFrom<ElementType, 'input'>;
export type PasswordInputSize = FormsCommonSize;
export type PasswordInputVariant = FormsCommonVariant;
export type PasswordInputRenderToggleProps = Pick<IconButtonProps, 'color' | 'colorMode' | 'isCompact' | 'onClick' | 'size' | 'variant'> & {
    isVisible: boolean;
};
export type PasswordInputRenderProps<Element extends PasswordInputElement = PasswordInputDefaultElement> = Pick<PasswordInputOtherProps<Element>, 'color' | 'colorMode'> & {
    w?: number;
    h?: number;
};
type PickedFormsCommonProps = 'color' | 'colorMode' | 'isCompact' | 'isDisabled' | 'isError' | 'isFocused' | 'isOutlined' | 'isReadOnly' | 'isRequired' | 'isSuccess' | 'isWarning' | 'size' | 'variant';
type PasswordInputOtherProps<Element extends PasswordInputElement = PasswordInputDefaultElement> = {
    renderToggle?: (props: PasswordInputRenderToggleProps) => ReactNode;
    renderLeft?: (props: PasswordInputRenderProps<Element>) => ReactNode;
    renderRight?: (props: PasswordInputRenderProps<Element>) => ReactNode;
} & Pick<FormsCommonProps, PickedFormsCommonProps>;
type OmittedBoxProps = 'children' | keyof Omit<BoxOtherProps, 'w' | 'minW' | 'maxW' | 'h' | 'minH' | 'maxH'>;
export type PasswordInputProps<Element extends PasswordInputElement = PasswordInputDefaultElement> = Omit<BoxProps<Element, PasswordInputOtherProps<Element>>, OmittedBoxProps>;
export type PasswordInputRef<Element extends PasswordInputElement = PasswordInputDefaultElement> = BoxRef<Element>;
export {};
//# sourceMappingURL=index.d.ts.map