import { styled } from '@/styles';

import { Container, tag } from './styled';

export const ChatMessage = styled(tag(Container, 'chat'), {
  variants: {
    from: {
      system: {
        color: '$darkGrey',
     
      //  color:'rgba(60, 60, 60)',
        backgroundColor: '$lightGrey',
      },

      user: {
        color: '$lightGrey',
    
        backgroundColor: '$primary',
      },
    },
  },
  defaultVariants: {
    from: 'system',
  },
});
