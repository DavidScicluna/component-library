import type { AnimationConfig, AnimationDelay, AnimationDuration, AnimationEasing } from './animation';
import type { AlignContentClass, AlignContentClassArr, AlignContentClassObj, AlignItemsClass, AlignItemsClassArr, AlignItemsClassObj, AlignSelfClass, AlignSelfClassArr, AlignSelfClassObj, AnimationClass, AnimationClassArr, AnimationClassObj, BackgroundAttachmentClass, BackgroundAttachmentClassArr, BackgroundAttachmentClassObj, BackgroundBlendModeClass, BackgroundBlendModeClassArr, BackgroundBlendModeClassObj, BackgroundClipClass, BackgroundClipClassArr, BackgroundClipClassObj, BackgroundColorClass, BackgroundColorClassArr, BackgroundColorClassObj, BackgroundOriginClass, BackgroundOriginClassArr, BackgroundOriginClassObj, BackgroundPositionClass, BackgroundPositionClassArr, BackgroundPositionClassObj, BackgroundRepeatClass, BackgroundRepeatClassArr, BackgroundRepeatClassObj, BackgroundSizeClass, BackgroundSizeClassArr, BackgroundSizeClassObj, BorderColorClass, BorderColorClassArr, BorderColorClassObj, BorderStyleClass, BorderStyleClassArr, BorderStyleClassObj, BoxShadowClass, BoxShadowClassArr, BoxShadowClassObj, BoxShadowColorClass, BoxShadowColorClassArr, BoxShadowColorClassObj, BrightnessClass, BrightnessClassArr, BrightnessClassObj, CaretColorClass, CaretColorClassArr, CaretColorClassObj, ColorTypeClass, ContrastClass, ContrastClassArr, ContrastClassObj, CursorClass, CursorClassArr, CursorClassObj, DisplayClass, DisplayClassArr, DisplayClassObj, DropShadowClass, DropShadowClassArr, DropShadowClassObj, FillColorClass, FillColorClassArr, FillColorClassObj, FlexColumnClass, FlexColumnClassArr, FlexColumnClassObj, FlexDirectionClass, FlexDirectionClassArr, FlexDirectionClassObj, FlexWrapClass, FlexWrapClassArr, FlexWrapClassObj, FontStyleClass, FontStyleClassArr, FontStyleClassObj, GradientClass, GradientClassArr, GradientClassObj, GradientFromColorClass, GradientFromColorClassArr, GradientFromColorClassObj, GradientFromMiddleToClass, GradientFromMiddleToClassArr, GradientFromMiddleToClassObj, GradientMiddleColorClass, GradientMiddleColorClassArr, GradientMiddleColorClassObj, GradientToColorClass, GradientToColorClassArr, GradientToColorClassObj, GrayscaleClass, GrayscaleClassArr, GrayscaleClassObj, GridAutoClass, GridAutoClassArr, GridAutoClassObj, GridAutoFlowClass, GridAutoFlowClassArr, GridAutoFlowClassObj, GridColumnClass, GridColumnClassArr, GridColumnClassObj, GridColumnSpanClass, GridColumnSpanClassArr, GridColumnSpanClassObj, GridColumnStartEndClass, GridColumnStartEndClassArr, GridColumnStartEndClassObj, GridRowClass, GridRowClassArr, GridRowClassObj, GridRowSpanClass, GridRowSpanClassArr, GridRowSpanClassObj, GridRowStartEndClass, GridRowStartEndClassArr, GridRowStartEndClassObj, GridTemplateColumnsClass, GridTemplateColumnsClassArr, GridTemplateColumnsClassObj, GridTemplateRowsClass, GridTemplateRowsClassArr, GridTemplateRowsClassObj, HeightClass, HeightClassArr, HeightClassObj, HueRotateClass, HueRotateClassArr, HueRotateClassObj, InvertClass, InvertClassArr, InvertClassObj, JustifyContentClass, JustifyContentClassArr, JustifyContentClassObj, JustifyItemsClass, JustifyItemsClassArr, JustifyItemsClassObj, JustifySelfClass, JustifySelfClassArr, JustifySelfClassObj, MaxHeightClass, MaxHeightClassArr, MaxHeightClassObj, MaxWidthClass, MaxWidthClassArr, MaxWidthClassObj, MinHeightClass, MinHeightClassArr, MinHeightClassObj, MinWidthClass, MinWidthClassArr, MinWidthClassObj, MixBlendModeClass, MixBlendModeClassArr, MixBlendModeClassObj, ObjectFitClass, ObjectFitClassArr, ObjectFitClassObj, ObjectPositionClass, ObjectPositionClassArr, ObjectPositionClassObj, OpacityClass, OpacityClassArr, OpacityClassObj, OutlineColorClass, OutlineColorClassArr, OutlineColorClassObj, OutlineOffsetClass, OutlineOffsetClassArr, OutlineOffsetClassObj, OutlineStyleClass, OutlineStyleClassArr, OutlineStyleClassObj, OutlineWidthClass, OutlineWidthClassArr, OutlineWidthClassObj, OverflowClass, OverflowClassArr, OverflowClassObj, PlaceContentClass, PlaceContentClassArr, PlaceContentClassObj, PlaceItemsClass, PlaceItemsClassArr, PlaceItemsClassObj, PlaceSelfClass, PlaceSelfClassArr, PlaceSelfClassObj, PointerEventsClass, PointerEventsClassArr, PointerEventsClassObj, PositionClass, PositionClassArr, PositionClassObj, ResizeClass, ResizeClassArr, ResizeClassObj, RotateClass, RotateClassArr, RotateClassObj, SaturateClass, SaturateClassArr, SaturateClassObj, ScaleClass, ScaleClassArr, ScaleClassObj, ScrollbarClass, ScrollbarClassArr, ScrollbarClassObj, ScrollBehaviorClass, ScrollBehaviorClassArr, ScrollBehaviorClassObj, ScrollSnapAlignClass, ScrollSnapAlignClassArr, ScrollSnapAlignClassObj, ScrollSnapStopClass, ScrollSnapStopClassArr, ScrollSnapStopClassObj, ScrollSnapTypeClass, ScrollSnapTypeClassArr, ScrollSnapTypeClassObj, SepiaClass, SepiaClassArr, SepiaClassObj, SkewClass, SkewClassArr, SkewClassObj, TextAlignClass, TextAlignClassArr, TextAlignClassObj, TextColorClass, TextColorClassArr, TextColorClassObj, TextDecorationClass, TextDecorationClassArr, TextDecorationClassObj, TextDecorationColorClass, TextDecorationColorClassArr, TextDecorationColorClassObj, TextDecorationStyleClass, TextDecorationStyleClassArr, TextDecorationStyleClassObj, TextDecorationThicknessClass, TextDecorationThicknessClassArr, TextDecorationThicknessClassObj, TextLetterSpacingClass, TextLetterSpacingClassArr, TextLetterSpacingClassObj, TextLineClampClass, TextLineClampClassArr, TextLineClampClassObj, TextOverflowClass, TextOverflowClassArr, TextOverflowClassObj, TextTransformClass, TextTransformClassArr, TextTransformClassObj, TextUnderlineOffsetClass, TextUnderlineOffsetClassArr, TextUnderlineOffsetClassObj, TransformOriginClass, TransformOriginClassArr, TransformOriginClassObj, UserSelectClass, UserSelectClassArr, UserSelectClassObj, WhitespaceClass, WhitespaceClassArr, WhitespaceClassObj, WidthClass, WidthClassArr, WidthClassObj, WillChangeClass, WillChangeClassArr, WillChangeClassObj, WordBreakClass, WordBreakClassArr, WordBreakClassObj, ZIndexClass, ZIndexClassArr, ZIndexClassObj } from './classes';
import type { IconKey, IconKeys } from './icons';
import type { ClassName, ClassNames, Style } from './other';
import type { PolymorphicChangeEvent, PolymorphicComponentProps, PolymorphicComponentPropsWithRef, PolymorphicComponentWithRef, PolymorphicDefaultElement, PolymorphicDefaultProps, PolymorphicExtendableProps, PolymorphicFocusEvent, PolymorphicFormEvent, PolymorphicInheritableElementProps, PolymorphicMouseEvent, PolymorphicPropsOf, PolymorphicRef } from './polymorphic';
import type { ResponsiveArrayValue, ResponsiveObjectValue, ResponsiveValue } from './responsive';
import type { ThemeAppAppearanceProps, ThemeAppColor, ThemeAppColorArr, ThemeAppColorMode, ThemeAppColorObj, ThemeAppearanceProps, ThemeAspectRatio, ThemeAspectRatioArr, ThemeAspectRatioObj, ThemeBlurClass, ThemeBlurClassArr, ThemeBlurClassObj, ThemeBorderWidth, ThemeBorderWidthArr, ThemeBorderWidthObj, ThemeBreakpoint, ThemeBreakpointArr, ThemeBreakpointObj, ThemeColor, ThemeColorArr, ThemeColorHue, ThemeColorHueArr, ThemeColorHueObj, ThemeColorMode, ThemeColorModeArr, ThemeColorModeObj, ThemeColorObj, ThemeColorOpacityObj, ThemeDelay, ThemeDelayArr, ThemeDelayObj, ThemeDuration, ThemeDurationArr, ThemeDurationObj, ThemeEase, ThemeEaseArr, ThemeEaseObj, ThemeFontSize, ThemeFontSizeArr, ThemeFontSizeObj, ThemeFontWeight, ThemeFontWeightArr, ThemeFontWeightObj, ThemeLineHeight, ThemeLineHeightArr, ThemeLineHeightObj, ThemeRadius, ThemeRadiusArr, ThemeRadiusObj, ThemeSpacing, ThemeSpacingArr, ThemeSpacingObj, ThemeStrokeWidth, ThemeStrokeWidthArr, ThemeStrokeWidthObj } from './theme';
import type { Nullish, PickFrom, Undefinable } from './utility';
export type { AlignContentClass, AlignContentClassArr, AlignContentClassObj, AlignItemsClass, AlignItemsClassArr, AlignItemsClassObj, AlignSelfClass, AlignSelfClassArr, AlignSelfClassObj, AnimationClass, AnimationClassArr, AnimationClassObj, AnimationConfig, AnimationDelay, AnimationDuration, AnimationEasing, BackgroundAttachmentClass, BackgroundAttachmentClassArr, BackgroundAttachmentClassObj, BackgroundBlendModeClass, BackgroundBlendModeClassArr, BackgroundBlendModeClassObj, BackgroundClipClass, BackgroundClipClassArr, BackgroundClipClassObj, BackgroundColorClass, BackgroundColorClassArr, BackgroundColorClassObj, BackgroundOriginClass, BackgroundOriginClassArr, BackgroundOriginClassObj, BackgroundPositionClass, BackgroundPositionClassArr, BackgroundPositionClassObj, BackgroundRepeatClass, BackgroundRepeatClassArr, BackgroundRepeatClassObj, BackgroundSizeClass, BackgroundSizeClassArr, BackgroundSizeClassObj, BorderColorClass, BorderColorClassArr, BorderColorClassObj, BorderStyleClass, BorderStyleClassArr, BorderStyleClassObj, BoxShadowClass, BoxShadowClassArr, BoxShadowClassObj, BoxShadowColorClass, BoxShadowColorClassArr, BoxShadowColorClassObj, BrightnessClass, BrightnessClassArr, BrightnessClassObj, CaretColorClass, CaretColorClassArr, CaretColorClassObj, ClassName, ClassNames, ColorTypeClass, ContrastClass, ContrastClassArr, ContrastClassObj, CursorClass, CursorClassArr, CursorClassObj, DisplayClass, DisplayClassArr, DisplayClassObj, DropShadowClass, DropShadowClassArr, DropShadowClassObj, FillColorClass, FillColorClassArr, FillColorClassObj, FlexColumnClass, FlexColumnClassArr, FlexColumnClassObj, FlexDirectionClass, FlexDirectionClassArr, FlexDirectionClassObj, FlexWrapClass, FlexWrapClassArr, FlexWrapClassObj, FontStyleClass, FontStyleClassArr, FontStyleClassObj, GradientClass, GradientClassArr, GradientClassObj, GradientFromColorClass, GradientFromColorClassArr, GradientFromColorClassObj, GradientFromMiddleToClass, GradientFromMiddleToClassArr, GradientFromMiddleToClassObj, GradientMiddleColorClass, GradientMiddleColorClassArr, GradientMiddleColorClassObj, GradientToColorClass, GradientToColorClassArr, GradientToColorClassObj, GrayscaleClass, GrayscaleClassArr, GrayscaleClassObj, GridAutoClass, GridAutoClassArr, GridAutoClassObj, GridAutoFlowClass, GridAutoFlowClassArr, GridAutoFlowClassObj, GridColumnClass, GridColumnClassArr, GridColumnClassObj, GridColumnSpanClass, GridColumnSpanClassArr, GridColumnSpanClassObj, GridColumnStartEndClass, GridColumnStartEndClassArr, GridColumnStartEndClassObj, GridRowClass, GridRowClassArr, GridRowClassObj, GridRowSpanClass, GridRowSpanClassArr, GridRowSpanClassObj, GridRowStartEndClass, GridRowStartEndClassArr, GridRowStartEndClassObj, GridTemplateColumnsClass, GridTemplateColumnsClassArr, GridTemplateColumnsClassObj, GridTemplateRowsClass, GridTemplateRowsClassArr, GridTemplateRowsClassObj, HeightClass, HeightClassArr, HeightClassObj, HueRotateClass, HueRotateClassArr, HueRotateClassObj, IconKey, IconKeys, InvertClass, InvertClassArr, InvertClassObj, JustifyContentClass, JustifyContentClassArr, JustifyContentClassObj, JustifyItemsClass, JustifyItemsClassArr, JustifyItemsClassObj, JustifySelfClass, JustifySelfClassArr, JustifySelfClassObj, MaxHeightClass, MaxHeightClassArr, MaxHeightClassObj, MaxWidthClass, MaxWidthClassArr, MaxWidthClassObj, MinHeightClass, MinHeightClassArr, MinHeightClassObj, MinWidthClass, MinWidthClassArr, MinWidthClassObj, MixBlendModeClass, MixBlendModeClassArr, MixBlendModeClassObj, Nullish, ObjectFitClass, ObjectFitClassArr, ObjectFitClassObj, ObjectPositionClass, ObjectPositionClassArr, ObjectPositionClassObj, OpacityClass, OpacityClassArr, OpacityClassObj, OutlineColorClass, OutlineColorClassArr, OutlineColorClassObj, OutlineOffsetClass, OutlineOffsetClassArr, OutlineOffsetClassObj, OutlineStyleClass, OutlineStyleClassArr, OutlineStyleClassObj, OutlineWidthClass, OutlineWidthClassArr, OutlineWidthClassObj, OverflowClass, OverflowClassArr, OverflowClassObj, PickFrom, PlaceContentClass, PlaceContentClassArr, PlaceContentClassObj, PlaceItemsClass, PlaceItemsClassArr, PlaceItemsClassObj, PlaceSelfClass, PlaceSelfClassArr, PlaceSelfClassObj, PointerEventsClass, PointerEventsClassArr, PointerEventsClassObj, PolymorphicChangeEvent, PolymorphicComponentProps, PolymorphicComponentPropsWithRef, PolymorphicComponentWithRef, PolymorphicDefaultElement, PolymorphicDefaultProps, PolymorphicExtendableProps, PolymorphicFocusEvent, PolymorphicFormEvent, PolymorphicInheritableElementProps, PolymorphicMouseEvent, PolymorphicPropsOf, PolymorphicRef, PositionClass, PositionClassArr, PositionClassObj, ResizeClass, ResizeClassArr, ResizeClassObj, ResponsiveArrayValue, ResponsiveObjectValue, ResponsiveValue, RotateClass, RotateClassArr, RotateClassObj, SaturateClass, SaturateClassArr, SaturateClassObj, ScaleClass, ScaleClassArr, ScaleClassObj, ScrollbarClass, ScrollbarClassArr, ScrollbarClassObj, ScrollBehaviorClass, ScrollBehaviorClassArr, ScrollBehaviorClassObj, ScrollSnapAlignClass, ScrollSnapAlignClassArr, ScrollSnapAlignClassObj, ScrollSnapStopClass, ScrollSnapStopClassArr, ScrollSnapStopClassObj, ScrollSnapTypeClass, ScrollSnapTypeClassArr, ScrollSnapTypeClassObj, SepiaClass, SepiaClassArr, SepiaClassObj, SkewClass, SkewClassArr, SkewClassObj, Style, TextAlignClass, TextAlignClassArr, TextAlignClassObj, TextColorClass, TextColorClassArr, TextColorClassObj, TextDecorationClass, TextDecorationClassArr, TextDecorationClassObj, TextDecorationColorClass, TextDecorationColorClassArr, TextDecorationColorClassObj, TextDecorationStyleClass, TextDecorationStyleClassArr, TextDecorationStyleClassObj, TextDecorationThicknessClass, TextDecorationThicknessClassArr, TextDecorationThicknessClassObj, TextLetterSpacingClass, TextLetterSpacingClassArr, TextLetterSpacingClassObj, TextLineClampClass, TextLineClampClassArr, TextLineClampClassObj, TextOverflowClass, TextOverflowClassArr, TextOverflowClassObj, TextTransformClass, TextTransformClassArr, TextTransformClassObj, TextUnderlineOffsetClass, TextUnderlineOffsetClassArr, TextUnderlineOffsetClassObj, ThemeAppAppearanceProps, ThemeAppColor, ThemeAppColorArr, ThemeAppColorMode, ThemeAppColorObj, ThemeAppearanceProps, ThemeAspectRatio, ThemeAspectRatioArr, ThemeAspectRatioObj, ThemeBlurClass, ThemeBlurClassArr, ThemeBlurClassObj, ThemeBorderWidth, ThemeBorderWidthArr, ThemeBorderWidthObj, ThemeBreakpoint, ThemeBreakpointArr, ThemeBreakpointObj, ThemeColor, ThemeColorArr, ThemeColorHue, ThemeColorHueArr, ThemeColorHueObj, ThemeColorMode, ThemeColorModeArr, ThemeColorModeObj, ThemeColorObj, ThemeColorOpacityObj, ThemeDelay, ThemeDelayArr, ThemeDelayObj, ThemeDuration, ThemeDurationArr, ThemeDurationObj, ThemeEase, ThemeEaseArr, ThemeEaseObj, ThemeFontSize, ThemeFontSizeArr, ThemeFontSizeObj, ThemeFontWeight, ThemeFontWeightArr, ThemeFontWeightObj, ThemeLineHeight, ThemeLineHeightArr, ThemeLineHeightObj, ThemeRadius, ThemeRadiusArr, ThemeRadiusObj, ThemeSpacing, ThemeSpacingArr, ThemeSpacingObj, ThemeStrokeWidth, ThemeStrokeWidthArr, ThemeStrokeWidthObj, TransformOriginClass, TransformOriginClassArr, TransformOriginClassObj, Undefinable, UserSelectClass, UserSelectClassArr, UserSelectClassObj, WhitespaceClass, WhitespaceClassArr, WhitespaceClassObj, WidthClass, WidthClassArr, WidthClassObj, WillChangeClass, WillChangeClassArr, WillChangeClassObj, WordBreakClass, WordBreakClassArr, WordBreakClassObj, ZIndexClass, ZIndexClassArr, ZIndexClassObj };
//# sourceMappingURL=index.d.ts.map