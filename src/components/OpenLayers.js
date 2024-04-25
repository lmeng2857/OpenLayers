import React from "react";
import { Map } from "ol";
import { OSM } from "ol/source";
import TileLayer from "ol/layer/Tile";
import { View } from "ol";
import { useState, useEffect } from "react";

const OpenLayers = () => {
  // mistake 1--------- cannot use useState()
  //   const [map, setMap] = useState(
  //     new Map({
  //       layers: [
  //         new TileLayer({
  //           source: new OSM(),
  //         }),
  //       ],
  //       target: "js-map",
  //       view: new View({
  //         center: [0, 0],
  //         zoom: 2,
  //       }),
  //     })
  //   );
  ////////////////
  // mistake 2 ----- did not use useEffect to render map after the component is created
  //   const map = new Map({
  //     layers: [
  //       new TileLayer({
  //         source: new OSM(),
  //       }),
  //     ],
  //     target: "js-map",
  //     view: new View({
  //       center: [0, 0],
  //       zoom: 2,
  //     }),
  //   });
  //   console.log(Object.keys(map));

  //   const zoomOut = () => {
  //     const view = map.getView();
  //     const zoom = view.getZoom();
  //     view.setZoom(zoom - 1);
  //   };

  //   const zoomIn = () => {
  //     const view = map.getView();
  //     const zoom = view.getZoom();
  //     view.setZoom(zoom + 1);
  //   };

  //////////////
  useEffect(() => {
    const map = new Map({
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      target: "js-map",
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
    });
    // const zoomOut = () => {
    //   const view = map.getView();
    //   const zoom = view.getZoom();
    //   view.setZoom(zoom - 1);
    // };

    // const zoomIn = () => {
    //   const view = map.getView();
    //   const zoom = view.getZoom();
    //   view.setZoom(zoom + 1);
    // };
  }, []);

  return (
    <div>
      <div
        id="js-map"
        className="map"
        style={{ width: "2000px", height: "2000px" }}
      ></div>
    </div>
  );
};

export default OpenLayers;
