import type { ElementType, ReactNode } from 'react';
import type { PolymorphicChangeEvent, PolymorphicDefaultElement, PolymorphicFocusEvent, PolymorphicMouseEvent, ResponsiveValue } from '@common/types';
import type { BoxOtherProps, BoxProps, BoxRef } from '@components/Box';
import type { FormsCommonProps, FormsCommonSize } from '@components/Forms';
import type { PushableOverlayProps } from '@components/Overlay';
import type { TextProps } from '@components/Typography';
export type CheckboxMouseEvent<Element extends ElementType = PolymorphicDefaultElement> = PolymorphicMouseEvent<Element>;
export type CheckboxChangeEvent<Element extends ElementType = PolymorphicDefaultElement> = PolymorphicChangeEvent<Element>;
export type CheckboxFocusEvent<Element extends ElementType = PolymorphicDefaultElement> = PolymorphicFocusEvent<Element>;
export type CheckboxLabelPosition = 'left' | 'right';
export type CheckboxSize = FormsCommonSize;
type PickedFormsCommonProps = 'color' | 'colorMode' | 'isCompact' | 'isDisabled' | 'isError' | 'isFocused' | 'isOutlined' | 'isReadOnly' | 'isRequired' | 'isSuccess' | 'isWarning' | 'size';
type CheckboxOtherProps = Pick<FormsCommonProps, PickedFormsCommonProps> & {
    renderLabel?: (props: TextProps) => ReactNode;
    /**
     * If true, the checkbox will be in a checked state
     *
     * @default false
     */
    isChecked?: ResponsiveValue<boolean>;
    /**
     * If true, the checkbox will be clickable
     *
     * @default false
     */
    isClickable?: ResponsiveValue<boolean>;
    /**
     * If true, the checkbox will be in indeterminate state, checked prop is ignored
     *
     * @default false
     */
    isIndeterminate?: ResponsiveValue<boolean>;
    /**
     * Position of the label relative to the checkbox
     *
     * @default 'right'
     */
    labelPosition?: ResponsiveValue<CheckboxLabelPosition>;
    onToggle?: (isChecked: boolean) => void;
} & Pick<PushableOverlayProps<PolymorphicDefaultElement>, 'isActive'>;
type OmittedBoxProps = 'children' | 'size' | keyof Omit<BoxOtherProps, 'w' | 'minW' | 'maxW' | 'h' | 'minH' | 'maxH'>;
export type CheckboxProps<Element extends ElementType = PolymorphicDefaultElement> = Omit<BoxProps<Element, CheckboxOtherProps>, OmittedBoxProps>;
export type CheckboxRef<Element extends ElementType = PolymorphicDefaultElement> = BoxRef<Element>;
export {};
//# sourceMappingURL=index.d.ts.map