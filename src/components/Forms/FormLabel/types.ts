import { ColorMode, FormLabelProps as CUIFormLabelProps } from '@chakra-ui/react';

export type FormLabelSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type Omitted =
	// CUI Box Props
	// | BoxPadding
	// | BoxColor
	// | BoxGradient
	// | BoxTypography
	// | BoxBackground
	// | BoxBorders
	// | BoxBorderRadius
	// | BoxShadow
	// | BoxFilter
	// | BoxPseudo
	// | BoxOther
	// CUI Input Props
	'as' | 'colorScheme' | 'isInvalid';

export type FormLabelProps = {
	colorMode?: ColorMode;
	isDisabled?: boolean;
	isReadOnly?: boolean;
	size?: FormLabelSize;
} & Omit<CUIFormLabelProps, Omitted>;
