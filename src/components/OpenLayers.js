import React from "react";
import { View, Map, Feature } from "ol";
import { OSM, Vector as VectorSource } from "ol/source";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import { useState, useEffect } from "react";
import { Point, Circle } from "ol/geom";
import { fromLonLat } from "ol/proj";
import Style from "ol/style/Style";
import Icon from "ol/style/Icon";
import icon from "../asserts/location-sign-svgrepo-com.svg";
import star from "../asserts/star.png";

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
        // new VectorLayer({
        //   source: new VectorSource({
        //     features: [new Feature({ geometry: new Point([-110, 45]) })],
        //   }),
        // }),
      ],
      target: "js-map",
      view: new View({
        center: fromLonLat([-0.118092, 51.509865]),
        zoom: 10,
      }),
    });

    const marker = new VectorLayer({
      source: new VectorSource({
        features: [
          // new Feature({ geometry: new Point([-430, -220]) }),
          new Feature({
            geometry: new Point(
              fromLonLat([-0.118092, 51.509865], "EPSG:3857")
            ),
          }),
        ],
      }),
      style: new Style({
        image: new Icon({
          color: "red",
          src: icon,
          // width: [512, 512],
          scale: 0.03,
        }),
      }),
    });

    map.addLayer(marker);

    const marker_2 = new VectorLayer({
      source: new VectorSource({
        features: [
          new Feature({
            geometry: new Point(fromLonLat([-2.58791, 51.454514], "EPSG:3857")),
          }),
        ],
      }),
      style: new Style({
        image: new Icon({
          color: "red",
          src: star,
          scale: 0.03,
        }),
      }),
    });
    map.addLayer(marker_2);
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
        style={{ width: "100vw", height: "100vh" }}
      ></div>
    </div>
  );
};

export default OpenLayers;
