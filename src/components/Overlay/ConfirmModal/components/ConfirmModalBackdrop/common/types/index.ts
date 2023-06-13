import { BoxLayout, BoxPosition } from '../../../../../../../common/types/box';
import { BackdropOverlayProps } from '../../../../../BackdropOverlay/common/types';

export type ConfirmModalBackdropProps = Omit<BackdropOverlayProps, BoxLayout | BoxPosition>;
