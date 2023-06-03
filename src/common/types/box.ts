// Margin
export type BoxMargin =
	| 'm'
	| 'margin'
	| 'mt'
	| 'marginTop'
	| 'mr'
	| 'marginRight'
	| 'me'
	| 'marginEnd'
	| 'mb'
	| 'marginBottom'
	| 'ml'
	| 'marginLeft'
	| 'ms'
	| 'marginStart'
	| 'mx'
	| 'marginX'
	| 'my'
	| 'marginY';

// Padding
export type BoxPadding =
	| 'p'
	| 'padding'
	| 'pt'
	| 'paddingTop'
	| 'pr'
	| 'paddingRight'
	| 'pe'
	| 'paddingEnd'
	| 'pb'
	| 'paddingBottom'
	| 'pl'
	| 'paddingLeft'
	| 'ps'
	| 'paddingStart'
	| 'px'
	| 'paddingX'
	| 'py'
	| 'paddingY';

// Color and background color
export type BoxColor = 'color' | 'bg' | 'background' | 'bgColor' | 'opacity';

// Gradient
export type BoxGradient = 'bgGradient' | 'bgClip' | 'backgroundClip';

// Typography
export type BoxTypography =
	| 'fontFamily'
	| 'fontSize'
	| 'fontWeight'
	| 'lineHeight'
	| 'letterSpacing'
	| 'textAlign'
	| 'fontStyle'
	| 'textTransform'
	| 'textDecoration';

// Layout, width and height
export type BoxLayout =
	| 'w'
	| 'width'
	| 'h'
	| 'height'
	| 'minW'
	| 'minWidth'
	| 'maxW'
	| 'maxWidth'
	| 'minH'
	| 'minHeight'
	| 'maxH'
	| 'maxHeight'
	| 'd'
	| 'display'
	| 'boxSize'
	| 'verticalAlign'
	| 'overflow'
	| 'overflowX'
	| 'overflowY';

// Flexbox
export type BoxFlexbox =
	| 'gap'
	| 'row-gap'
	| 'column-gap'
	| 'alignItems'
	| '*align'
	| 'alignContent'
	| 'justifyItems'
	| 'justifyContent'
	| '*justify'
	| 'flexWrap'
	| '*wrap'
	| 'flexDirection'
	| 'flexDir'
	| '*direction'
	| 'flex'
	| 'flexGrow'
	| 'flexShrink'
	| 'flexBasis'
	| 'justifySelf'
	| 'alignSelf'
	| 'order';

// Grid Layout#
export type BoxGrid =
	| 'gridGap'
	| '*gap'
	| 'gridRowGap'
	| '*rowGap'
	| 'gridColumnGap'
	| '*columnGap'
	| 'gridColumn'
	| '*column'
	| 'gridRow'
	| '*row'
	| 'gridArea'
	| '*area'
	| 'gridAutoFlow'
	| '*autoFlow'
	| 'gridAutoRows'
	| '*autoRows'
	| 'gridAutoColumns'
	| '*autoColumns'
	| 'gridTemplateRows'
	| '*templateRows'
	| 'gridTemplateColumns'
	| '*templateColumns'
	| 'gridTemplateAreas'
	| '*templateAreas';

// Background
export type BoxBackground =
	| 'bg'
	| 'background'
	| 'bgImage'
	| 'backgroundImage'
	| 'bgSize'
	| 'backgroundSize'
	| 'bgPosition'
	| 'backgroundPosition'
	| 'bgRepeat'
	| 'backgroundRepeat'
	| 'bgAttachment'
	| 'backgroundAttachment';

// Borders
export type BoxBorders =
	| 'border'
	| 'borderWidth'
	| 'borderStyle'
	| 'borderColor'
	| 'borderTop'
	| 'borderTopWidth'
	| 'borderTopStyle'
	| 'borderTopColor'
	| 'borderRight'
	| 'borderEnd'
	| 'borderRightWidth'
	| 'borderEndWidth'
	| 'borderRightStyle'
	| 'borderEndStyle'
	| 'borderRightColor'
	| 'borderEndColor'
	| 'borderBottom'
	| 'borderBottomWidth'
	| 'borderBottomStyle'
	| 'borderBottomColor'
	| 'borderLeft'
	| 'borderStart'
	| 'borderLeftWidth'
	| 'borderStartWidth'
	| 'borderLeftStyle'
	| 'borderStartStyle'
	| 'borderLeftColor'
	| 'borderStartColor'
	| 'borderX'
	| 'borderY';

// Border Radius#
export type BoxBorderRadius =
	| 'borderRadius'
	| 'borderTopLeftRadius'
	| 'borderTopStartRadius'
	| 'borderTopRightRadius'
	| 'borderTopEndRadius'
	| 'borderBottomRightRadius'
	| 'borderBottomEndRadius'
	| 'borderBottomLeftRadius'
	| 'borderBottomStartRadius'
	| 'borderTopRadius'
	| 'borderRightRadius'
	| 'borderEndRadius'
	| 'borderBottomRadius'
	| 'borderLeftRadius'
	| 'borderStartRadius';

// Position
export type BoxPosition = 'pos' | 'position' | 'zIndex' | 'top' | 'right' | 'bottom' | 'left';

// Shadow
export type BoxShadow = 'textShadow' | 'shadow' | 'boxShadow';

// Filter
export type BoxFilter =
	| 'filter'
	| 'blur'
	| 'brightness'
	| 'contrast'
	| 'hueRotate'
	| 'invert'
	| 'saturate'
	| 'dropShadow'
	| 'backdropFilter'
	| 'backdropBlur'
	| 'backdropBrightness'
	| 'backdropContrast'
	| 'backdropHueRotate'
	| 'backdropInvert'
	| 'backdropSaturate';

// Pseudo
export type BoxPseudo =
	| '_hover'
	| '_active'
	| '_focus'
	| '_highlighted'
	| '_focusWithin'
	| '_focusVisible'
	| '_disabled'
	| '_readOnly'
	| '_before'
	| '_after'
	| '_empty'
	| '_expanded'
	| '_checked'
	| '_grabbed'
	| '_pressed'
	| '_invalid'
	| '_valid'
	| '_loading'
	| '_selected'
	| '_hidden'
	| '_autofill'
	| '_even'
	| '_odd'
	| '_first'
	| '_last'
	| '_notFirst'
	| '_notLast'
	| '_visited'
	| '_activeLink'
	| '_activeStep'
	| '_indeterminate'
	| '_groupHover'
	| '_peerHover'
	| '_groupFocus'
	| '_peerFocus'
	| '_groupFocusVisible'
	| '_peerFocusVisible'
	| '_groupActive'
	| '_peerActive'
	| '_groupDisabled'
	| '_peerDisabled'
	| '_groupInvalid'
	| '_peerInvalid'
	| '_groupChecked'
	| '_peerChecked'
	| '_groupFocusWithin'
	| '_peerFocusWithin'
	| '_peerPlaceholderShown'
	| '_placeholder'
	| '_placeholderShown'
	| '_fullScreen'
	| '_selection'
	| '_mediaDark'
	| '_mediaReduceMotion'
	| '_dark'
	| '_light'
	| '_firstLetter'
	| '_rtl'
	| '_ltr';

// Other
export type BoxOther =
	| 'animation'
	| 'appearance'
	| 'content'
	| 'transform'
	| 'transformOrigin'
	| 'visibility'
	| 'whiteSpace'
	| 'userSelect'
	| 'pointerEvents'
	| 'wordBreak'
	| 'overflowWrap'
	| 'textOverflow'
	| 'boxSizing'
	| 'cursor'
	| 'resize'
	| 'transition'
	| 'objectFit'
	| 'objectPosition'
	| 'float'
	| 'fill'
	| 'stroke'
	| 'outline';
