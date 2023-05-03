import { TextProps } from '@chakra-ui/react';

import { CommonCardProps } from '../../../../common/types';

export type CardSubtitleProps = TextProps & Pick<CommonCardProps, 'colorMode'>;
