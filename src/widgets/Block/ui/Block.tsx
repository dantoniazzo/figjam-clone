import { Group, Rect } from 'react-konva';
import { colorConfig, config, type IBlock } from 'entities/block';
import { getStageIdFromEvent, type KonvaDragEvent } from 'entities/stage';
import { selectNode } from 'features/selection';
import { type Group as GroupType } from 'konva/lib/Group';
import { Connection } from 'features/connection';
import { updateConnectionsFromEvent } from 'features/connection';
import { useRef } from 'react';
import { BlockEvents, mutationEvent } from 'features/block-mutation';
import { BlockTitle } from './BlockTitle';
import { BlockDescription } from './BlockDescription';
import { capitalizeFirstLetter } from 'shared';
import { getRectFromGroup } from 'entities/node';

export const Block = (props: IBlock) => {
  const { name, ...rest } = config;
  const ref = useRef<GroupType>(null);

  const onDragEnd = (e: KonvaDragEvent) => {
    const stageId = getStageIdFromEvent(e);
    if (!stageId) return;
    mutationEvent(stageId, BlockEvents.UPDATE, {
      ...props,
      position: e.target.position(),
    } as IBlock);
  };

  return (
    <Group
      onPointerUp={(e) => {
        const stageId = getStageIdFromEvent(e);
        if (!stageId || !ref.current) return;
        const rect = getRectFromGroup(ref.current);
        selectNode(stageId, rect);
      }}
      connection={props.connection}
      name={name}
      id={props.id}
      ref={ref}
      blockType={props.type}
      text={props.text}
      position={props.position}
      draggable
      onDragMove={updateConnectionsFromEvent}
      onDragEnd={onDragEnd}
    >
      <Rect {...rest} />
      <BlockTitle
        fill={colorConfig[props.type].fill}
        title={capitalizeFirstLetter(props.type)}
        textFill={colorConfig[props.type].text}
      />
      <BlockDescription text={props.text} />
      <Connection connection={props.connection} position={props.position} />
    </Group>
  );
};
