import { config } from 'entities/block';
import { Rect, Text } from 'react-konva';
import { getColor } from 'shared';
import { BLOCK_PADDING } from '../lib';

export const BLOCK_TITLE_HEIGHT = 30;
export const FONT_SIZE = 12;

export interface BlockTitleProps {
  title: string;
  fill?: string;
  textFill?: string;
}

export const BlockTitle = (props: BlockTitleProps) => {
  return (
    <>
      <Rect
        x={BLOCK_PADDING}
        y={BLOCK_PADDING}
        width={config.width - BLOCK_PADDING * 2}
        height={BLOCK_TITLE_HEIGHT}
        fill={props.fill || getColor('--color-background-400')}
        cornerRadius={6}
      />
      <Text
        x={BLOCK_PADDING + (BLOCK_TITLE_HEIGHT - FONT_SIZE) / 2}
        y={BLOCK_PADDING + BLOCK_TITLE_HEIGHT / 2 - FONT_SIZE / 2}
        fontSize={FONT_SIZE}
        fill={props.textFill || 'white'}
        width={config.width}
        height={config.height}
        text={props.title}
      />
    </>
  );
};
