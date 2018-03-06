export default class MapControl {
    constructor(initZoom, id, styleJsonManager, styleJsonEditor) {
        this.styleJsonEditor = styleJsonEditor;
        this.styleJsonManager = styleJsonManager;
        this.id = id;
        this.view = new ol.View({
            center: ol.proj.fromLonLat([0, 0]),
            zoom: initZoom,
            maxZoom: 19,
            maxResolution: 40075016.68557849 / 512
        });
        let centerPosition = ol.coordinate.toStringXY(ol.proj.transform(this.view.getCenter(), 'EPSG:3857', 'EPSG:4326'), 6);
        let mousePositionControl = new ol.control.MousePosition({
            coordinateFormat: ol.coordinate.createStringXY(6),
            projection: 'EPSG:4326',
            className: 'custom-mouse-position',
            target: document.querySelector(`${this.id} .ol-overlaycontainer-stopevent .ol-zoom`),
            undefinedHTML: centerPosition
        });

        let scaleLineControl = new ol.control.ScaleLine();

        this.map = new ol.mapsuite.GeoMap(JSON.parse(JSON.stringify(styleJSON)), {
            controls: ol.control.defaults({
                attributionOptions: {
                    collapsible: false
                }
            }).extend([mousePositionControl, scaleLineControl]),
            target: this.id.replace(/\#/mg, ''),
            view: this.view
        });

        scaleLineControl.setUnits('metric');

        this.bing = new ol.layer.Tile({
            // Add ThinkGeo WorldMapKit Online as the base map.
            source: new ol.source.TileWMS({
                urls: [
                    'https://worldmapkit1.thinkgeo.com/CachedWMSServer/WmsServer.axd',
                    'https://worldmapkit2.thinkgeo.com/CachedWMSServer/WmsServer.axd',
                    'https://worldmapkit3.thinkgeo.com/CachedWMSServer/WmsServer.axd',
                    'https://worldmapkit4.thinkgeo.com/CachedWMSServer/WmsServer.axd',
                    'https://worldmapkit5.thinkgeo.com/CachedWMSServer/WmsServer.axd',
                    'https://worldmapkit6.thinkgeo.com/CachedWMSServer/WmsServer.axd'
                ],
                params: {
                    LAYERS: 'OSMWorldMapKitLayer',
                    VERSION: '1.1.1'
                }
            })
        });
        this.map.addLayer(this.bing);
        this.overlay = '';
        this._initZoomInfo();
        this._initMapDrag();
        this._initMapLayerInfo();
        this._Event();
        this.map.render();
    }

    getView() {
        return this.view;
    }

    getMap() {
        return this.map;
    }

    getBing() {
        return this.bing;
    }

    render(styleJson) {
        let layerNode = document.querySelector(`${this.id} .ol-map-layer`);
        layerNode.querySelector('.ol-map-popup-closer').click();
        let restLayers = [];
        // Remove all layers from map and add them back to keep same order.
        let allLayers = this.map.getLayers().getArray();
        while (allLayers.length > 0) {
            let currentLayer = allLayers[0];
            if (!(currentLayer.constructor.name === 'WorldStreetVectorTileLayer')) {
                restLayers.push(currentLayer);
            }
            this.map.removeLayer(currentLayer);
        }
        // Add new style json layer.
        this.map.loadStyleJson(JSON.parse(JSON.stringify(styleJson)));
        // console.log(JSON.parse(JSON.stringify(styleJson)));
        // Add rest layers;
        restLayers.forEach(layer => {
            this.map.addLayer(layer);
        });
    }

    _initZoomInfo() {
        let nodeStopevent = document.querySelector(`${this.id} .ol-overlaycontainer-stopevent`);
        nodeStopevent.removeChild(document.querySelector(`${this.id} .ol-overlaycontainer-stopevent .ol-rotate`));
        nodeStopevent.querySelector(`.ol-attribution`).removeChild(document.querySelector(`${this.id} .ol-overlaycontainer-stopevent .ol-attribution>button`));
        nodeStopevent.querySelector(`.ol-attribution>ul`).innerHTML = `<li><a href="https://thinkgeo.com/"><img src="./image/logo.png">ThinkGeo</a></li>`;
        let nodeZoom = nodeStopevent.querySelector('.ol-zoom');

        nodeZoom.childNodes[0].className += ' btn btn-default';
        nodeZoom.childNodes[1].className += ' btn btn-default';

        nodeZoom.appendChild(document.createElement('button'));
        nodeZoom.querySelector(`button:last-child`).className = `ol-zoom-info btn btn-default`;
        nodeZoom.querySelector(`button:last-child`).setAttribute('disabled', 'disabled');
        nodeZoom.querySelector(`.ol-zoom-info`).innerText = this.view.getZoom();
        nodeZoom.querySelector(`button:last-child`).style.opacity = 1;
        nodeZoom.querySelector(`button:last-child`).style.order = -1;
        nodeZoom.querySelector(`button:last-child`).style.fontSize = '1em';
        nodeZoom.querySelector(`button:last-child`).style.fontWeight = 600;
        nodeZoom.querySelector(`button:last-child`).style.marginBottom = '10px';
    }

    _initMapDrag() {
        document.querySelector(`${this.id}`).appendChild(document.createElement('div'));
        document.querySelector(`${this.id}>div:last-child`).className = `ol-map-drag`;
        document.querySelector(`${this.id} .ol-map-drag`).style.left = `${document.body.offsetWidth / 2}px`;
        document.querySelector(`${this.id} .ol-map-drag`).innerHTML = `<span>
                    <i class="fa fa-arrows-h fa " aria-hidden="true"></i>
                </span>`;
        const drag = (event) => {
            let left = event.clientX;
            if (document.querySelector(`#sidebar .menu .menu-list`).offsetLeft === 0) {
                let minLeft = document.querySelector('#sidebar').offsetWidth + 15;
                document.querySelector(`${this.id}>.ol-map-drag`).style.left = `${left > minLeft ? left : minLeft}px`;
            } else {
                let minLeft = document.querySelector('#sidebar').offsetWidth + document.querySelector(`#sidebar .menu .menu-list`).offsetWidth + 15;
                document.querySelector(`${this.id}>.ol-map-drag`).style.left = `${left > minLeft ? left : minLeft}px`;
            }

            this.map.render();
        };

        document.querySelector(`${this.id} .ol-map-drag`).addEventListener('mousedown', e => {
            document.addEventListener('mousemove', drag, true);
        }, true);

        document.addEventListener('mouseup', e => {
            document.removeEventListener('mousemove', drag, true);
        }, true);
    }

    _initMapLayerInfo() {
        document.querySelector(`${this.id}`).appendChild(document.createElement('div'));
        document.querySelector(`${this.id}>div:nth-last-child(1)`).className = `ol-map-layer`;
        let layerNode = document.querySelector(`${this.id} .ol-map-layer`);
        layerNode.innerHTML = `<a href="#"  class="ol-map-popup-closer"></a>
        <div class="ol-map-popup-content"></div>`;
        this.overlay = new ol.Overlay({
            element: layerNode,
            autoPan: true,
            autoPanAnimation: {
                duration: 250
            }
        });
        layerNode.querySelector('.ol-map-popup-closer').addEventListener('click', e => {
            this.overlay.setPosition(undefined);
            e.target.blur();
            return false;
        });
        this.map.addOverlay(this.overlay);
    }

    _Event() {
        this.bing.on('precompose', event => {
            let ctx = event.context;
            let left = document.querySelector(`${this.id} .ol-map-drag`).offsetLeft;
            ctx.save();
            ctx.beginPath();
            ctx.rect(0, 0, (ctx.canvas.width / (document.querySelector(`${this.id}`).offsetWidth)) * left, ctx.canvas.height);
            ctx.clip();
            this.map.render();
        });

        this.bing.on('postcompose', event => {
            let ctx = event.context;
            ctx.restore();
        });

        this.view.on('change:resolution', e => {
            let zoom = this.view.getZoom();
            if ((zoom | 0) === zoom) {
                let layerNode = document.querySelector(`${this.id} .ol-map-layer`);
                layerNode.querySelector('.ol-map-popup-closer').click();
                document.getElementById('menu-list-selectAll').checked = false;
                document.querySelector(`${this.id} .ol-overlaycontainer-stopevent .ol-zoom-info`).innerText = this.view.getZoom();
            }
        });

        this.map.on('pointerdown', evt => {
            if (evt.pixel[0] < window.parseInt(document.querySelector(`${this.id} .ol-map-drag`).style.left)) {
                return;
            }
        });

        this.map.on('singleclick', evt => {
            if (evt.pixel[0] < window.parseInt(document.querySelector(`${this.id} .ol-map-drag`).style.left)) {
                return;
            }
            let coordinate = evt.coordinate;
            let pixel = this.map.getEventPixel(evt.originalEvent);
            let selectedFeatures = [];
            let selectedFeature = null;
            this.map.forEachFeatureAtPixel(pixel, function (feature) {
                selectedFeatures.push(feature);
            });
            if (selectedFeatures.length > 1) {
                selectedFeature = selectedFeatures[0];
            } else if (selectedFeatures.length === 1) {
                selectedFeature = selectedFeatures[0];
            } else {
                return;
            }

            let layerId = '';
            let filter = new Map();
            if (selectedFeature && selectedFeature.get('layerName')) {
                layerId = selectedFeature.get('layerName');
                // filter = selectedFeature.get('landuse');
                let obj = selectedFeature.getProperties();
                for (let key in obj) {
                    filter.set(key, obj[key]);
                }
                filter.delete('layerName');
            }
            if (!layerId) return;

            let styleIds = this.styleJsonManager.getStyleIdsByLayerId(layerId);
            if (styleIds && styleIds.length > 0) {
                let temp = '';
                for (let styleId of styleIds) {
                    temp = temp + `<li class='ol-map-popup-styleId' title=${styleId}> <i class="fa fa-eye" aria-hidden="true"></i> <span title=${styleId} data-fliter="${filter}"> ${styleId}</span> </li>`;
                }
                let str = `<p>${layerId}</p><hr/><ul>${temp}</ul>`;
                document.querySelector(`${this.id} .ol-map-layer .ol-map-popup-content`).innerHTML = str;

                let colorMap = this.styleJsonManager.getColorMapByStyleId(styleIds);
                this.styleJsonManager.drawShapeAndColor(colorMap);

                let liNodeList = document.querySelectorAll(`${this.id} .ol-map-layer .ol-map-popup-content .ol-map-popup-styleId span`).entries();
                for (let i of liNodeList) {
                    i[1].addEventListener('click', e => {
                        let styleId = e.target.title || '';
                        if (styleId && this.styleJsonManager.getStyleByStyleId(styleId)) {
                            let style = this.styleJsonManager.getStyleByStyleId(styleId);
                            let variable = this.styleJsonManager.getVariableObjByStyle(style);
                            if (Object.keys(variable).length) {
                                this.styleJsonEditor.render({
                                    'variables': variable,
                                    'styleJson': style
                                }, filter);
                            } else {
                                this.styleJsonEditor.render({
                                    'styleJson': style
                                }, filter);
                            }
                            if (document.querySelector('#editor').classList.contains('editor-close-transform')) {
                                document.querySelector('#editor').classList.remove('editor-close-transform');
                                document.querySelector('#editor').classList.add('editor-open-transform');
                                document.querySelector('#editor .editor-hide-button').classList.add('editor-hide-button-after');
                                document.querySelector('#editor .editor-hide-button span').classList.remove('icon-editor-back');
                                document.querySelector('#editor .editor-hide-button span').classList.add('icon-editor-forward');

                                $('#map .ol-overlaycontainer-stopevent .custom-mouse-position').animate({
                                    left: (document.querySelector('#map .ol-overlaycontainer-stopevent .custom-mouse-position').offsetLeft - document.querySelector('#editor').offsetWidth) + 'px'
                                }, 400);
                                $('#map .ol-overlaycontainer-stopevent .ol-zoom').animate({
                                    left: (document.querySelector('#map .ol-overlaycontainer-stopevent .ol-zoom').offsetLeft - document.querySelector('#editor').offsetWidth) + 'px'
                                }, 400);
                                $('#map .ol-map-drag').animate({
                                    left: (document.querySelector('#map .ol-map-drag').offsetLeft - document.querySelector('#editor').offsetWidth) + 'px'
                                });
                            }
                        }
                    });
                }

                let iNodeLists = document.querySelectorAll(`${this.id} .ol-map-layer .ol-map-popup-content .ol-map-popup-styleId i`).entries();
                const eyeFun = e => {
                    let styleId = e.target.parentNode.title;
                    let style = this.styleJsonManager.getStyleByStyleId(styleId);
                    style.visible = style.visible !== false ? false : true;
                    this.render(styleJSON);
                    e.target.nextElementSibling.click();
                };
                for (let i of iNodeLists) {
                    i[1].addEventListener('click', eyeFun);
                }

            }
            this.overlay.setPosition(coordinate);
        });
    }
}