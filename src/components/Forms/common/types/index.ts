import type { ResponsiveValueProps, ThemeAppAppearanceProps } from '@common/types';

export type FormsCommonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type FormsCommonVariant = 'outlined' | 'underline' | 'unstyled';

export type FormsNonResponsiveValueProps = {
	/**
	 * If true, the element will be styled in a more compressed state
	 *
	 * @default false
	 */
	isCompact?: boolean;
	/**
	 * If true, the element will be disabled
	 *
	 * @default false
	 */
	isDisabled?: boolean;
	/**
	 * If true, the element will take the full width of its parent
	 *
	 * @default false
	 */
	isFullWidth?: boolean;
	/**
	 * If true, the element will be invalid
	 *
	 * @default false
	 */
	isError?: boolean;
	/**
	 * If true, the element will be focused & will have the success styling
	 *
	 * @default false
	 */
	isFocused?: boolean;
	/**
	 * If `true`, the element will have an outline
	 *
	 * @default false
	 */
	isOutlined?: boolean;
	/**
	 * If true, the element will be readonly
	 *
	 * @default false
	 */
	isReadOnly?: boolean;
	/**
	 * If true, the element will be required
	 *
	 * @default false
	 */
	isRequired?: boolean;
	/**
	 * If true, the element will have the success styling
	 *
	 * @default false
	 */
	isSuccess?: boolean;
	/**
	 * If true, the element will have the warning styling
	 *
	 * @default false
	 */
	isWarning?: boolean;
	/**
	 * The size of the element
	 *
	 * @default 'md'
	 */
	size?: FormsCommonSize;
	/**
	 *  The variant of the element
	 *
	 * @default 'default'
	 */
	variant?: FormsCommonVariant;
};
export type FormsResponsiveValueProps = ResponsiveValueProps<FormsNonResponsiveValueProps>;

export type FormsUniqueProps = ThemeAppAppearanceProps & FormsResponsiveValueProps;
