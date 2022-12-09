import { Tile as TileLayer } from "ol/layer";

import { XYZ } from "ol/source";

/**
 * 添加天汇代理的天地图
 * @param {*} type
 * @param {*} matrixSet
 * @param {*} zIndex
 * @param {*} maxZoom
 * @returns
 */
export const addTdtXYZ = (
  type = "img",
  matrixSet = "c",
  zIndex = 1,
  maxZoom = 18
) => {
  const layer = new TileLayer({
    source: new XYZ({
      url: `https://tianditu.thxpace.com/${type}_${matrixSet}/{z}/{x}/{y}`,
      projection: "EPSG:4326",
      maxZoom,
    }),
  });

  layer.setZIndex(zIndex);

  return layer;
};
