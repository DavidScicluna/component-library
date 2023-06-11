import { ProgressProps } from '@chakra-ui/react';

type Omitted =
	| 'colorScheme'
	| 'hasStripe'
	| 'isAnimated'
	| 'isIndeterminate'
	| 'max'
	| 'min'
	| 'size'
	| 'value'
	| 'variant';

export type StepProgressProps = Omit<ProgressProps, Omitted>;
