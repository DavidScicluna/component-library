import type { ElementType, ReactNode } from 'react';
import type { PolymorphicDefaultElement } from '@common/types';
import type { BoxProps, BoxRef } from '@components/Box';
import type { IconButtonProps } from '@components/Buttons';
import type { GridProps } from '@components/Layout';
export type ModalHeaderRenderCancelProps = Pick<IconButtonProps, 'color' | 'colorMode' | 'onClick' | 'size' | 'variant'>;
type ModalHeaderOtherProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<GridProps<Element>, 'spacing'> & {
    renderTitle: () => ReactNode;
    renderSubtitle?: () => ReactNode;
    renderCancel?: (props: ModalHeaderRenderCancelProps) => ReactNode;
};
export type ModalHeaderProps<Element extends ElementType = PolymorphicDefaultElement> = Omit<BoxProps<Element, ModalHeaderOtherProps<Element>>, 'children' | 'w' | 'h'>;
export type ModalHeaderRef<Element extends ElementType = PolymorphicDefaultElement> = BoxRef<Element>;
export {};
//# sourceMappingURL=index.d.ts.map