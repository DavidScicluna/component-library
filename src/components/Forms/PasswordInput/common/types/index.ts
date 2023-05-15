import { Nullable } from '../../../../../common/types';
import { InputProps } from '../../../Input/common/types';

export type PasswordInputProps = Omit<InputProps, 'type'> & {
	isVisible?: boolean;
	onVisibilityChange?: (bool: boolean) => void;
};

export type PasswordInputRef = Nullable<HTMLInputElement>;
