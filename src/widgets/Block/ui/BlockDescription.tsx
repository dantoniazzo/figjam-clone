import { config } from 'entities/block';
import { Text } from 'react-konva';
import { BLOCK_PADDING } from '../lib';
import { BLOCK_TITLE_HEIGHT } from './BlockTitle';

export interface BlockDescriptionProps {
  text: string;
}

export const BlockDescription = (props: BlockDescriptionProps) => {
  return (
    <Text
      padding={BLOCK_PADDING + 2}
      width={config.width}
      height={config.height}
      fill={'white'}
      text={props.text}
      fontSize={12}
      lineHeight={1.33}
      y={BLOCK_TITLE_HEIGHT + BLOCK_PADDING}
    />
  );
};
