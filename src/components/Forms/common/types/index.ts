import type { ResponsiveValue, ThemeAppAppearanceProps } from '@common/types';

export type FormsCommonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type FormsCommonVariant = 'outlined' | 'underline' | 'unstyled';

export type FormsCommonProps = ThemeAppAppearanceProps & {
	/**
	 * If true, the element will be styled in a more compressed state
	 *
	 * @default false
	 */
	isCompact?: ResponsiveValue<boolean>;
	/**
	 * If true, the element will be disabled
	 *
	 * @default false
	 */
	isDisabled?: ResponsiveValue<boolean>;
	/**
	 * If true, the element will take the full width of its parent
	 *
	 * @default false
	 */
	isFullWidth?: ResponsiveValue<boolean>;
	/**
	 * If true, the element will be invalid
	 *
	 * @default false
	 */
	isError?: ResponsiveValue<boolean>;
	/**
	 * If true, the element will be focused & will have the success styling
	 *
	 * @default false
	 */
	isFocused?: ResponsiveValue<boolean>;
	/**
	 * If `true`, the element will have an outline
	 *
	 * @default false
	 */
	isOutlined?: ResponsiveValue<boolean>;
	/**
	 * If true, the element will be readonly
	 *
	 * @default false
	 */
	isReadOnly?: ResponsiveValue<boolean>;
	/**
	 * If true, the element will be required
	 *
	 * @default false
	 */
	isRequired?: ResponsiveValue<boolean>;
	/**
	 * If true, the element will have the success styling
	 *
	 * @default false
	 */
	isSuccess?: ResponsiveValue<boolean>;
	/**
	 * If true, the element will have the warning styling
	 *
	 * @default false
	 */
	isWarning?: ResponsiveValue<boolean>;
	/**
	 * The size of the element
	 *
	 * @default 'md'
	 */
	size?: ResponsiveValue<FormsCommonSize>;
	/**
	 *  The variant of the element
	 *
	 * @default 'default'
	 */
	variant?: ResponsiveValue<FormsCommonVariant>;
};
