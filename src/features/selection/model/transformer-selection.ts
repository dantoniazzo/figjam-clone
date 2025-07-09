import { getTransformer } from "entities/transformer";
import { basicRectangleConfig } from "features/rectangle";
import { Node } from "konva/lib/Node";

export const selectNode = (stageId: string, node: Node) => {
  node.setAttr("shadowColor", basicRectangleConfig.selectedShadowColor);
  node.setAttr("stroke", basicRectangleConfig.selectedStroke);
  const transformer = getTransformer(stageId);
  if (transformer) {
    deselectPreviouslySelectedNodes(stageId, node);
    transformer.nodes([node]);
  }
};

export const deselectPreviouslySelectedNodes = (
  stageId: string,
  exclude?: Node
) => {
  const transformer = getTransformer(stageId);
  if (transformer) {
    transformer.nodes().forEach((node) => {
      if (node === exclude) return;
      node.setAttr("shadowColor", basicRectangleConfig.shadowColor);
      node.setAttr("stroke", basicRectangleConfig.stroke || "");
    });
  }
};

export const unSelectAllNodes = (stageId: string) => {
  const transformer = getTransformer(stageId);
  if (transformer) {
    deselectPreviouslySelectedNodes(stageId);
    transformer.nodes([]);
  }
};
