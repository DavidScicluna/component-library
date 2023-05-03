import { TextProps } from '@chakra-ui/react';

import { CommonCardProps } from '../../../../common/types';

export type CardTitleProps = TextProps & Pick<CommonCardProps, 'colorMode'>;
