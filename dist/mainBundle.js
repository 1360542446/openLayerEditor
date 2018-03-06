/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "temp/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mapControl = undefined;

var _mapcontrol = __webpack_require__(1);

var _mapcontrol2 = _interopRequireDefault(_mapcontrol);

var _editorControl = __webpack_require__(2);

var _editorControl2 = _interopRequireDefault(_editorControl);

var _styleJsonManager = __webpack_require__(3);

var _styleJsonManager2 = _interopRequireDefault(_styleJsonManager);

var _menuControl = __webpack_require__(4);

var _menuControl2 = _interopRequireDefault(_menuControl);

var _fileControl = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import StyleJsonEditor from './js/styleJsonEditorControl';
var styleJsonManager = new _styleJsonManager2.default();

// const styleJsonEditor = new StyleJsonEditor('#editor-content', styleJsonManager);

// import { styleJSON } from './texas.StyleJSON';
var editJson = new _editorControl2.default('#editor-content', styleJsonManager);

var mapControl = new _mapcontrol2.default(1, '#map', styleJsonManager, editJson);

var menuControl = new _menuControl2.default('#sidebar .menu .list-group-first', mapControl, styleJsonManager, editJson);

var downloadStyleJson = new _fileControl.DownloadStyleJson('#download-file');

var updateStyleJson = new _fileControl.UpdateStyleJson('#upload-file', mapControl, menuControl, styleJsonManager);

var editorDrag = function editorDrag(evt) {
    if (formerWidth - evt.clientX > 0 && formerWidth - evt.clientX < document.body.offsetWidth - document.querySelector('#editor .list-group .list-group-item').offsetWidth - 10) {
        document.querySelector('#editor').style.width = formerWidth - evt.clientX + 'px';
        document.querySelector('#map .ol-map-drag').style.left = formerDragMapLeft + editorWidthTemp - formerWidth + evt.clientX + 'px';
        document.querySelector('#map .ol-overlaycontainer-stopevent .ol-zoom').style.left = formerZoomInfoLeft + editorWidthTemp - formerWidth + evt.clientX + 'px';
        document.querySelector('#map .ol-overlaycontainer-stopevent .custom-mouse-position').style.left = formerCustomInfoLeft + editorWidthTemp - formerWidth + evt.clientX + 'px';
        document.querySelector('#map .ol-overlaycontainer-stopevent .ol-attribution').style.left = formerAttributionInfoLeft + editorWidthTemp - formerWidth + evt.clientX + 'px';

        $($('#editor-content .jsonView')[0]).getNiceScroll().resize();
    }
};
var formerWidth = 0;
var formerDragMapLeft = 0;
var formerZoomInfoLeft = 0;
var formerCustomInfoLeft = 0;
var formerAttributionInfoLeft = 0;
var editorWidthTemp = 0;
document.querySelector('#editor .editor-drag').addEventListener('mousedown', function (e) {
    formerWidth = e.clientX + document.querySelector('#editor').offsetWidth;
    formerDragMapLeft = document.querySelector('#map .ol-map-drag').offsetLeft;
    formerZoomInfoLeft = document.querySelector('#map .ol-overlaycontainer-stopevent .ol-zoom').offsetLeft;
    formerCustomInfoLeft = document.querySelector('#map .ol-overlaycontainer-stopevent .custom-mouse-position').offsetLeft;
    formerAttributionInfoLeft = document.querySelector('#map .ol-overlaycontainer-stopevent .ol-attribution').offsetLeft;
    editorWidthTemp = document.querySelector('#editor').offsetWidth;
    window.addEventListener('mousemove', editorDrag);
});

window.addEventListener('mouseup', function (e) {
    window.removeEventListener('mousemove', editorDrag);
});

document.querySelector('#editor .editor-hide-button').addEventListener('click', function (e) {
    if (document.querySelector('#editor').classList.contains('editor-close-transform')) {
        document.querySelector('#editor').classList.remove('editor-close-transform');
        document.querySelector('#editor').classList.add('editor-open-transform');

        document.querySelector('#editor .editor-hide-button').classList.add('editor-hide-button-after');
        document.querySelector('#editor .editor-hide-button span').classList.remove('icon-editor-back');
        document.querySelector('#editor .editor-hide-button span').classList.add('icon-editor-forward');

        $('.ol-overlaycontainer-stopevent .ol-attribution').animate({ left: document.querySelector('#map .ol-overlaycontainer-stopevent .ol-attribution').offsetLeft - document.querySelector('#editor').offsetWidth + 'px' }, 400);
        $('#map .ol-overlaycontainer-stopevent .custom-mouse-position').animate({ left: document.querySelector('#map .ol-overlaycontainer-stopevent .custom-mouse-position').offsetLeft - document.querySelector('#editor').offsetWidth + 'px' }, 400);
        $('#map .ol-overlaycontainer-stopevent .ol-zoom').animate({ left: document.querySelector('#map .ol-overlaycontainer-stopevent .ol-zoom').offsetLeft - document.querySelector('#editor').offsetWidth + 'px' }, 400);
        $('#map .ol-map-drag').animate({ left: document.querySelector('#map .ol-map-drag').offsetLeft - document.querySelector('#editor').offsetWidth + 'px' }, 500);
    } else {
        document.querySelector('#editor .editor-hide-button').classList.remove('editor-hide-button-after');
        document.querySelector('#editor .editor-hide-button span').classList.remove('icon-editor-forward');
        document.querySelector('#editor .editor-hide-button span').classList.add('icon-editor-back');

        document.querySelector('#editor').classList.add('editor-close-transform');
        document.querySelector('#editor').classList.remove('editor-open-transform');

        $('.ol-overlaycontainer-stopevent .ol-attribution').animate({ left: document.querySelector('#map .ol-overlaycontainer-stopevent .ol-attribution').offsetLeft + document.querySelector('#editor').offsetWidth + 'px' }, 400);
        $('#map .ol-overlaycontainer-stopevent .custom-mouse-position').animate({ left: document.querySelector('#map .ol-overlaycontainer-stopevent .custom-mouse-position').offsetLeft + document.querySelector('#editor').offsetWidth + 'px' }, 400);
        $('#map .ol-map-drag').animate({ left: document.querySelector('#map .ol-map-drag').offsetLeft + document.querySelector('#editor').offsetWidth + 'px' }, 500);
        $('#map .ol-overlaycontainer-stopevent .ol-zoom').animate({ left: document.querySelector('#map .ol-overlaycontainer-stopevent .ol-zoom').offsetLeft + document.querySelector('#editor').offsetWidth + 'px' }, 400);
    }
});

$('#sidebar a').tooltip();
$('#editor a').tooltip();
$('#editor .editor-hide-button').tooltip();
exports.mapControl = mapControl;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MapControl = function () {
    function MapControl(initZoom, id, styleJsonManager, styleJsonEditor) {
        _classCallCheck(this, MapControl);

        this.styleJsonEditor = styleJsonEditor;
        this.styleJsonManager = styleJsonManager;
        this.id = id;
        this.view = new ol.View({
            center: ol.proj.fromLonLat([0, 0]),
            zoom: initZoom,
            maxZoom: 19,
            maxResolution: 40075016.68557849 / 512
        });
        var centerPosition = ol.coordinate.toStringXY(ol.proj.transform(this.view.getCenter(), 'EPSG:3857', 'EPSG:4326'), 6);
        var mousePositionControl = new ol.control.MousePosition({
            coordinateFormat: ol.coordinate.createStringXY(6),
            projection: 'EPSG:4326',
            className: 'custom-mouse-position',
            target: document.querySelector(this.id + ' .ol-overlaycontainer-stopevent .ol-zoom'),
            undefinedHTML: centerPosition
        });

        var scaleLineControl = new ol.control.ScaleLine();

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
                urls: ['https://worldmapkit1.thinkgeo.com/CachedWMSServer/WmsServer.axd', 'https://worldmapkit2.thinkgeo.com/CachedWMSServer/WmsServer.axd', 'https://worldmapkit3.thinkgeo.com/CachedWMSServer/WmsServer.axd', 'https://worldmapkit4.thinkgeo.com/CachedWMSServer/WmsServer.axd', 'https://worldmapkit5.thinkgeo.com/CachedWMSServer/WmsServer.axd', 'https://worldmapkit6.thinkgeo.com/CachedWMSServer/WmsServer.axd'],
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

    _createClass(MapControl, [{
        key: 'getView',
        value: function getView() {
            return this.view;
        }
    }, {
        key: 'getMap',
        value: function getMap() {
            return this.map;
        }
    }, {
        key: 'getBing',
        value: function getBing() {
            return this.bing;
        }
    }, {
        key: 'render',
        value: function render(styleJson) {
            var _this = this;

            var layerNode = document.querySelector(this.id + ' .ol-map-layer');
            layerNode.querySelector('.ol-map-popup-closer').click();
            var restLayers = [];
            // Remove all layers from map and add them back to keep same order.
            var allLayers = this.map.getLayers().getArray();
            while (allLayers.length > 0) {
                var currentLayer = allLayers[0];
                if (!(currentLayer.constructor.name === 'WorldStreetVectorTileLayer')) {
                    restLayers.push(currentLayer);
                }
                this.map.removeLayer(currentLayer);
            }
            // Add new style json layer.
            this.map.loadStyleJson(JSON.parse(JSON.stringify(styleJson)));
            // console.log(JSON.parse(JSON.stringify(styleJson)));
            // Add rest layers;
            restLayers.forEach(function (layer) {
                _this.map.addLayer(layer);
            });
        }
    }, {
        key: '_initZoomInfo',
        value: function _initZoomInfo() {
            var nodeStopevent = document.querySelector(this.id + ' .ol-overlaycontainer-stopevent');
            nodeStopevent.removeChild(document.querySelector(this.id + ' .ol-overlaycontainer-stopevent .ol-rotate'));
            nodeStopevent.querySelector('.ol-attribution').removeChild(document.querySelector(this.id + ' .ol-overlaycontainer-stopevent .ol-attribution>button'));
            nodeStopevent.querySelector('.ol-attribution>ul').innerHTML = '<li><a href="https://thinkgeo.com/"><img src="./image/logo.png">ThinkGeo</a></li>';
            var nodeZoom = nodeStopevent.querySelector('.ol-zoom');

            nodeZoom.childNodes[0].className += ' btn btn-default';
            nodeZoom.childNodes[1].className += ' btn btn-default';

            nodeZoom.appendChild(document.createElement('button'));
            nodeZoom.querySelector('button:last-child').className = 'ol-zoom-info btn btn-default';
            nodeZoom.querySelector('button:last-child').setAttribute('disabled', 'disabled');
            nodeZoom.querySelector('.ol-zoom-info').innerText = this.view.getZoom();
            nodeZoom.querySelector('button:last-child').style.opacity = 1;
            nodeZoom.querySelector('button:last-child').style.order = -1;
            nodeZoom.querySelector('button:last-child').style.fontSize = '1em';
            nodeZoom.querySelector('button:last-child').style.fontWeight = 600;
            nodeZoom.querySelector('button:last-child').style.marginBottom = '10px';
        }
    }, {
        key: '_initMapDrag',
        value: function _initMapDrag() {
            var _this2 = this;

            document.querySelector('' + this.id).appendChild(document.createElement('div'));
            document.querySelector(this.id + '>div:last-child').className = 'ol-map-drag';
            document.querySelector(this.id + ' .ol-map-drag').style.left = document.body.offsetWidth / 2 + 'px';
            document.querySelector(this.id + ' .ol-map-drag').innerHTML = '<span>\n                    <i class="fa fa-arrows-h fa " aria-hidden="true"></i>\n                </span>';
            var drag = function drag(event) {
                var left = event.clientX;
                if (document.querySelector('#sidebar .menu .menu-list').offsetLeft === 0) {
                    var minLeft = document.querySelector('#sidebar').offsetWidth + 15;
                    document.querySelector(_this2.id + '>.ol-map-drag').style.left = (left > minLeft ? left : minLeft) + 'px';
                } else {
                    var _minLeft = document.querySelector('#sidebar').offsetWidth + document.querySelector('#sidebar .menu .menu-list').offsetWidth + 15;
                    document.querySelector(_this2.id + '>.ol-map-drag').style.left = (left > _minLeft ? left : _minLeft) + 'px';
                }

                _this2.map.render();
            };

            document.querySelector(this.id + ' .ol-map-drag').addEventListener('mousedown', function (e) {
                document.addEventListener('mousemove', drag, true);
            }, true);

            document.addEventListener('mouseup', function (e) {
                document.removeEventListener('mousemove', drag, true);
            }, true);
        }
    }, {
        key: '_initMapLayerInfo',
        value: function _initMapLayerInfo() {
            var _this3 = this;

            document.querySelector('' + this.id).appendChild(document.createElement('div'));
            document.querySelector(this.id + '>div:nth-last-child(1)').className = 'ol-map-layer';
            var layerNode = document.querySelector(this.id + ' .ol-map-layer');
            layerNode.innerHTML = '<a href="#"  class="ol-map-popup-closer"></a>\n        <div class="ol-map-popup-content"></div>';
            this.overlay = new ol.Overlay({
                element: layerNode,
                autoPan: true,
                autoPanAnimation: {
                    duration: 250
                }
            });
            layerNode.querySelector('.ol-map-popup-closer').addEventListener('click', function (e) {
                _this3.overlay.setPosition(undefined);
                e.target.blur();
                return false;
            });
            this.map.addOverlay(this.overlay);
        }
    }, {
        key: '_Event',
        value: function _Event() {
            var _this4 = this;

            this.bing.on('precompose', function (event) {
                var ctx = event.context;
                var left = document.querySelector(_this4.id + ' .ol-map-drag').offsetLeft;
                ctx.save();
                ctx.beginPath();
                ctx.rect(0, 0, ctx.canvas.width / document.querySelector('' + _this4.id).offsetWidth * left, ctx.canvas.height);
                ctx.clip();
                _this4.map.render();
            });

            this.bing.on('postcompose', function (event) {
                var ctx = event.context;
                ctx.restore();
            });

            this.view.on('change:resolution', function (e) {
                var zoom = _this4.view.getZoom();
                if ((zoom | 0) === zoom) {
                    var layerNode = document.querySelector(_this4.id + ' .ol-map-layer');
                    layerNode.querySelector('.ol-map-popup-closer').click();
                    document.getElementById('menu-list-selectAll').checked = false;
                    document.querySelector(_this4.id + ' .ol-overlaycontainer-stopevent .ol-zoom-info').innerText = _this4.view.getZoom();
                }
            });

            this.map.on('pointerdown', function (evt) {
                if (evt.pixel[0] < window.parseInt(document.querySelector(_this4.id + ' .ol-map-drag').style.left)) {
                    return;
                }
            });

            this.map.on('singleclick', function (evt) {
                if (evt.pixel[0] < window.parseInt(document.querySelector(_this4.id + ' .ol-map-drag').style.left)) {
                    return;
                }
                var coordinate = evt.coordinate;
                var pixel = _this4.map.getEventPixel(evt.originalEvent);
                var selectedFeatures = [];
                var selectedFeature = null;
                _this4.map.forEachFeatureAtPixel(pixel, function (feature) {
                    selectedFeatures.push(feature);
                });
                if (selectedFeatures.length > 1) {
                    selectedFeature = selectedFeatures[0];
                } else if (selectedFeatures.length === 1) {
                    selectedFeature = selectedFeatures[0];
                } else {
                    return;
                }

                var layerId = '';
                var filter = new Map();
                if (selectedFeature && selectedFeature.get('layerName')) {
                    layerId = selectedFeature.get('layerName');
                    // filter = selectedFeature.get('landuse');
                    var obj = selectedFeature.getProperties();
                    for (var key in obj) {
                        filter.set(key, obj[key]);
                    }
                    filter.delete('layerName');
                }
                if (!layerId) return;

                var styleIds = _this4.styleJsonManager.getStyleIdsByLayerId(layerId);
                if (styleIds && styleIds.length > 0) {
                    var temp = '';
                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;

                    try {
                        for (var _iterator = styleIds[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            var styleId = _step.value;

                            temp = temp + ('<li class=\'ol-map-popup-styleId\' title=' + styleId + '> <i class="fa fa-eye" aria-hidden="true"></i> <span title=' + styleId + ' data-fliter="' + filter + '"> ' + styleId + '</span> </li>');
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }
                        } finally {
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }

                    var str = '<p>' + layerId + '</p><hr/><ul>' + temp + '</ul>';
                    document.querySelector(_this4.id + ' .ol-map-layer .ol-map-popup-content').innerHTML = str;

                    var colorMap = _this4.styleJsonManager.getColorMapByStyleId(styleIds);
                    _this4.styleJsonManager.drawShapeAndColor(colorMap);

                    var liNodeList = document.querySelectorAll(_this4.id + ' .ol-map-layer .ol-map-popup-content .ol-map-popup-styleId span').entries();
                    var _iteratorNormalCompletion2 = true;
                    var _didIteratorError2 = false;
                    var _iteratorError2 = undefined;

                    try {
                        for (var _iterator2 = liNodeList[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                            var i = _step2.value;

                            i[1].addEventListener('click', function (e) {
                                var styleId = e.target.title || '';
                                if (styleId && _this4.styleJsonManager.getStyleByStyleId(styleId)) {
                                    var style = _this4.styleJsonManager.getStyleByStyleId(styleId);
                                    var variable = _this4.styleJsonManager.getVariableObjByStyle(style);
                                    if (Object.keys(variable).length) {
                                        _this4.styleJsonEditor.render({
                                            'variables': variable,
                                            'styleJson': style
                                        }, filter);
                                    } else {
                                        _this4.styleJsonEditor.render({
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
                                            left: document.querySelector('#map .ol-overlaycontainer-stopevent .custom-mouse-position').offsetLeft - document.querySelector('#editor').offsetWidth + 'px'
                                        }, 400);
                                        $('#map .ol-overlaycontainer-stopevent .ol-zoom').animate({
                                            left: document.querySelector('#map .ol-overlaycontainer-stopevent .ol-zoom').offsetLeft - document.querySelector('#editor').offsetWidth + 'px'
                                        }, 400);
                                        $('#map .ol-map-drag').animate({
                                            left: document.querySelector('#map .ol-map-drag').offsetLeft - document.querySelector('#editor').offsetWidth + 'px'
                                        });
                                    }
                                }
                            });
                        }
                    } catch (err) {
                        _didIteratorError2 = true;
                        _iteratorError2 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                _iterator2.return();
                            }
                        } finally {
                            if (_didIteratorError2) {
                                throw _iteratorError2;
                            }
                        }
                    }

                    var iNodeLists = document.querySelectorAll(_this4.id + ' .ol-map-layer .ol-map-popup-content .ol-map-popup-styleId i').entries();
                    var eyeFun = function eyeFun(e) {
                        var styleId = e.target.parentNode.title;
                        var style = _this4.styleJsonManager.getStyleByStyleId(styleId);
                        style.visible = style.visible !== false ? false : true;
                        _this4.render(styleJSON);
                        e.target.nextElementSibling.click();
                    };
                    var _iteratorNormalCompletion3 = true;
                    var _didIteratorError3 = false;
                    var _iteratorError3 = undefined;

                    try {
                        for (var _iterator3 = iNodeLists[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                            var _i = _step3.value;

                            _i[1].addEventListener('click', eyeFun);
                        }
                    } catch (err) {
                        _didIteratorError3 = true;
                        _iteratorError3 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion3 && _iterator3.return) {
                                _iterator3.return();
                            }
                        } finally {
                            if (_didIteratorError3) {
                                throw _iteratorError3;
                            }
                        }
                    }
                }
                _this4.overlay.setPosition(coordinate);
            });
        }
    }]);

    return MapControl;
}();

exports.default = MapControl;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _main = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EditJson = function () {
    function EditJson(id, styleJsonManager) {
        _classCallCheck(this, EditJson);

        try {
            this.node = document.querySelector(id);
            this.styleJSON = styleJSON;
        } catch (e) {
            console.error(e);
        }
        this.styleJsonManager = styleJsonManager;
        this._collapseExpendHandle = this._collapseExpendHandle.bind(this);
        this._colorValueChangedHandle = this._colorValueChangedHandle.bind(this);
        this._editorValueChangedHandle = this._editorValueChangedHandle.bind(this);
        this._editorInsertHandle = this._editorInsertHandle.bind(this);
        this._editorDeleteHandle = this._editorDeleteHandle.bind(this);
        this._colorPickerChangedHandle = this._colorPickerChangedHandle.bind(this);
        this._autoComplete = this._autoComplete.bind(this);
        this._optionValueSelectedByKeyboard = this._optionValueSelectedByKeyboard.bind(this);
        this._optionValueInserted = this._optionValueInserted.bind(this);
        this._autoCompleteMatchString = this._autoCompleteMatchString.bind(this);
        this._deleteButtonChangeHandle = this._deleteButtonChangeHandle.bind(this);
        this.autocompleteSource = this._getAllJsonKeys(styleJSON);
        this.filter = null;
        this.tempArr = [];
        this.tempJson = null;
    }

    _createClass(EditJson, [{
        key: 'render',
        value: function render(json, filter) {
            // delete useless  colorpicker node
            this.filter = filter || null;
            this.tempJson = json || null;
            $('.colorpicker').remove();
            var editorHtml = '<div class="auto-complete-ele"><select size =5>\n                            </select></div>';
            editorHtml += this._getTemplateHtml(json, null, null);
            this.node.innerHTML = editorHtml;

            $($('#editor-content .jsonView')[0]).niceScroll({
                autohidemode: false,
                cursorcolor: '#2d3c4d',
                oneaxismousemode: false,
                horizrailenabled: false
            });

            this.node.querySelector('.jsonView>.expendObj').style.display = 'none';
            this.node.querySelector('.jsonView>.leftBracket').style.display = 'none';
            this.node.querySelector('.jsonView>.rightBracket').style.display = 'none';
            this.node.querySelector('.jsonView').lastElementChild.querySelector('.delete').style.display = 'none';
            $('.colorpicker-component').colorpicker();
            this._bindEvents();
            var getAllChildrenNodes = function getAllChildrenNodes(node) {
                var flag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

                if (node.hasChildNodes()) {
                    var nodeList = node.childNodes;
                    nodeList.forEach(function (node) {
                        var tempFlag = flag;
                        if (node.classList && node.classList.contains('anchorRemove')) {
                            node.classList.remove('anchorRemove');
                            tempFlag = true;
                        }
                        if (tempFlag) {
                            node.classList && node.classList.remove('anchor');
                        }
                        getAllChildrenNodes(node, tempFlag);
                    });
                }
            };
            getAllChildrenNodes(this.node);
            if (!this.node.querySelector('.anchor') && this.node.querySelector('.rightZoom')) {
                this.node.querySelectorAll('.rightZoom').forEach(function (node) {
                    node.classList && node.classList.remove('rightZoom');
                    node.classList && node.classList.add('anchor');
                });
            }
            if (this.node.querySelector('.anchor')) {
                var node = this.node.querySelector('.anchor');
                var top = 0;
                while (node.parentNode !== this.node) {
                    if (node.className.includes('jsonView')) {
                        top += node.offsetTop;
                    }
                    node = node.parentNode;
                }
                $($('#editor-content .jsonView')[0]).getNiceScroll(0).doScrollTop(top, 0);
            }
        }
    }, {
        key: 'getStyleJson',
        value: function getStyleJson() {
            var text = this._getPlainText(this.node);
            try {
                return JSON.parse(text);
            } catch (e) {
                console.error(e);
            }
        }
    }, {
        key: '_getAllJsonKeys',
        value: function _getAllJsonKeys(json) {
            var getObjectKeys = function getObjectKeys(obj) {
                var keysArr = Object.keys(obj);
                for (var key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        var t = judgeType(obj[key]);
                        if (t) keysArr = keysArr.concat(t);
                    }
                }
                return keysArr;
            };

            var getObjectArrayKeys = function getObjectArrayKeys(arr) {
                var keysArr = [];
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var value = _step.value;

                        var t = judgeType(value);
                        if (t) keysArr = keysArr.concat(t);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }

                return keysArr;
            };

            var judgeType = function judgeType(value) {
                var temp = Object.prototype.toString.call(value);
                var type = temp.match(/[a-zA-Z]+/g)[1];
                switch (type) {
                    case 'Object':
                        {
                            return getObjectKeys(value);
                        }
                    case 'Array':
                        {
                            return getObjectArrayKeys(value);
                        }
                }
            };
            var set = new Set(getObjectKeys(json));
            return Array.from(set).sort();
        }

        // return weight  if -1 error

    }, {
        key: '_autoCompleteMatchString',
        value: function _autoCompleteMatchString(strFather, strChild, length) {
            if (!strFather || !strChild) {
                return -1;
            }
            if (strFather.startsWith(strChild)) {
                return 3;
            } else if (new RegExp(strChild.slice(0, length) + '.*' + strChild.slice(length), 'mg').test(strFather)) {
                return 2;
            } else {
                var flag = true;
                var arr = strChild.split('');
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = arr[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var i = _step2.value;

                        if (!strFather.includes(i)) {
                            flag = false;
                            break;
                        }
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }
                    } finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }

                if (flag) {
                    return 1;
                }
                return -1;
            }
        }
    }, {
        key: '_autoComplete',
        value: function _autoComplete(e) {
            var _this = this;

            var node = e.target.parentNode;
            if (!node.className.match(/(name)|(value)|(insert)/) || node.className.match(/color-val/)) {
                this.node.querySelector('.auto-complete-ele select').style.display = 'none';
                return;
            }
            node.classList.remove('editor-error');
            var text = e.target.textContent.replace(/^\,|\,$/mg, '');
            text = text.replace(/^\"|\"$/mg, '');
            var strLength = window.getSelection().getRangeAt(0).startOffset - window.getSelection().getRangeAt(0).startContainer.nodeValue.match(/^\,|^\"/mg).length;
            var tempArr1 = [],
                tempArr2 = [],
                tempArr3 = [];

            this.autocompleteSource.forEach(function (value) {
                var result = _this._autoCompleteMatchString(value, text, strLength);
                switch (result) {
                    case 3:
                        {
                            tempArr3.push(value);
                            break;
                        }
                    case 2:
                        {
                            tempArr2.push(value);
                            break;
                        }
                    case 1:
                        {
                            tempArr1.push(value);
                            break;
                        }
                }
            });
            var arr = tempArr3.sort().concat(tempArr2.sort(), tempArr1.sort());
            // console.log(tempArr4.sort(), tempArr3.sort(), tempArr2.sort(), tempArr1.sort());
            if (!arr || arr.length === 0) {
                this.node.querySelector('.auto-complete-ele select').style.display = 'none';
            }
            var str = '';
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = arr[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var i = _step3.value;

                    str = str + ('<option value="' + i + '">' + i + '</option>');
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }

            this.node.querySelector('.auto-complete-ele select').innerHTML = str;
            if (!str) {
                this.node.querySelector('.auto-complete-ele select').style.display = 'none';
                return;
            }
            this.node.querySelector('.auto-complete-ele select').style.display = 'block';
            this.tempArr[0] = node;
            this.tempArr[1] = arr.length * 10000;
            this.tempArr[2] = arr.length;
            var _ref = [node.offsetLeft, node.offsetTop, node.offsetWidth],
                left = _ref[0],
                top = _ref[1],
                width = _ref[2];

            while (node.parentNode !== this.node) {
                if (node.className.includes('jsonView')) {
                    left += node.offsetLeft;
                    top += node.offsetTop;
                }
                node = node.parentNode;
            }
            this.node.querySelector('.auto-complete-ele select').style.left = left + 'px';
            this.node.querySelector('.auto-complete-ele select').style.top = top - $('#editor-content .jsonView')[0].scrollTop + 'px';
            this.node.querySelector('.auto-complete-ele select').style.width = (width > 150 ? width : 150) + 'px';
            this.node.querySelector('.auto-complete-ele select').options[0].selected = true;
        }
    }, {
        key: '_getPlainText',
        value: function _getPlainText(node) {
            $('option').remove();
            var getAllData = function getAllData(node) {
                if (node.hasChildNodes()) {
                    var tempStr = '';
                    var childNodes = node.childNodes.entries();
                    var _iteratorNormalCompletion4 = true;
                    var _didIteratorError4 = false;
                    var _iteratorError4 = undefined;

                    try {
                        for (var _iterator4 = childNodes[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                            var arr = _step4.value;

                            if (arr[1].classList && arr[1].classList.contains('delete-checkbox')) {
                                if (arr[1].querySelector('input') && !arr[1].querySelector('input').checked) {
                                    return '';
                                }
                            }
                            tempStr += getAllData(arr[1]);
                        }
                    } catch (err) {
                        _didIteratorError4 = true;
                        _iteratorError4 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion4 && _iterator4.return) {
                                _iterator4.return();
                            }
                        } finally {
                            if (_didIteratorError4) {
                                throw _iteratorError4;
                            }
                        }
                    }

                    return tempStr;
                } else {
                    return node.textContent;
                }
            };
            var str = getAllData(node);
            str = str.replace(/\s{2}/mg, '');
            str = str.replace(/\,\s*(\})|\,\s*(\})]/mg, '$1');
            str = str.replace(/\,+/mg, ',');
            return str;
        }
    }, {
        key: '_getTemplateHtml',
        value: function _getTemplateHtml(json, key, comma) {
            var _this2 = this;

            var deleteFlag = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

            var templateHtml = '';
            var typeStr = Object.prototype.toString.call(json);
            switch (typeStr) {
                case '[object Object]':
                    {
                        var anchor = false;
                        var anchorRemove = false;
                        var rightZoom = false;
                        if (this.filter && json['filter']) {
                            this.filter.forEach(function (value, key) {
                                if (value && json['filter'].includes(value) && json['filter'].includes(key)) {
                                    anchor = true;
                                }
                            });
                            var arr = json['filter'].match(/(zoom\>\=[0-9]+)|(zoom\<\=[0-9]+)|(zoom\=[0-9]+)/mg);
                            if (arr) {
                                var zoom = _main.mapControl.getView().getZoom();
                                var str = arr.join('&&').replace(/zoom/mg, zoom);
                                if (arr.length === 1) {
                                    str = str.replace(/\=/mg, '==');
                                }
                                if (!eval(str)) {
                                    anchorRemove = true;
                                } else {
                                    rightZoom = true;
                                }
                            }
                        }
                        templateHtml += '<div class="jsonView object-json-view ' + (anchor && key !== 'styleJson' ? 'anchor' : '') + ' ' + (anchorRemove ? 'anchorRemove' : '') + ' ' + (rightZoom ? 'rightZoom' : '') + '"><div class="expendObj"></div>';
                        templateHtml += key ? '<div class="name object-type" data-value="' + key + '">"' + key + '"</div><div class="separator">:</div>' : '';
                        templateHtml += '<div class="leftBracket bracket" >{</div>\n                  <div class="children">';
                        var length = Object.keys(json).length;

                        var _loop = function _loop(_key) {
                            if (_key !== '_delete') {
                                var _deleteFlag = false;
                                var flag = --length > 0 ? ',' : '';
                                if (json.hasOwnProperty('_delete') && json['_delete'].length > 0) {
                                    json['_delete'].forEach(function (value) {
                                        if (value === _key) {
                                            _deleteFlag = true;
                                        }
                                    });
                                }
                                templateHtml += _this2._getTemplateHtml(json[_key], _key, flag, _deleteFlag);
                            }
                        };

                        for (var _key in json) {
                            _loop(_key);
                        }
                        templateHtml += '</div>\n                  <div class="rightBracket bracket"><span>}</span><div class="comma">' + (comma || '') + '</div><div class="delete"></div><div class="insert" contentEditable="false"></div></div></div>';
                        break;
                    }
                case '[object Array]':
                    {
                        templateHtml += '<div class="jsonView array-json-view"><div class="expendObj" style="left:1.5em"></div>';
                        templateHtml += key ? '<div class="name array-type" data-value="' + key + '">"' + key + '"</div><div class="separator">:</div>' : '';
                        templateHtml += '<div class="leftBracket bracket" >[</div>\n                  <div class="children">';
                        var _length = json.length;
                        var _iteratorNormalCompletion5 = true;
                        var _didIteratorError5 = false;
                        var _iteratorError5 = undefined;

                        try {
                            for (var _iterator5 = json[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                                var value = _step5.value;

                                var flag = --_length > 0 ? ',' : '';
                                templateHtml += this._getTemplateHtml(value, '', flag);
                            }
                        } catch (err) {
                            _didIteratorError5 = true;
                            _iteratorError5 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion5 && _iterator5.return) {
                                    _iterator5.return();
                                }
                            } finally {
                                if (_didIteratorError5) {
                                    throw _iteratorError5;
                                }
                            }
                        }

                        templateHtml += '</div>\n                  <div class="rightBracket bracket" ><span>]</span><div class="comma">' + (comma || '') + '</div><div class="delete"></div><div class="insert" contentEditable="false"></div></div></div>';
                        break;
                    }
                default:
                    {
                        var temp = this._renderFontColor(key, json);
                        templateHtml += '<div class="jsonView bracket ' + (deleteFlag === true ? 'delete-checkbox-jsonView' : '') + '"><div class="delete-checkbox ' + (deleteFlag === true ? 'delete-checkbox-visible' : '') + ' "><input type="checkbox" ' + (deleteFlag === false ? 'checked' : null) + ' /></div>';
                        templateHtml += key ? '<div class="name ' + (temp[0] || '') + ' ' + (deleteFlag === true ? 'delete-checkbox-true' : '') + '" data-value="' + key + '">"' + key + '"</div><div class="separator">:</div>' : '';

                        templateHtml += temp[0] === 'color-type' ? '<div contentEditable="false" class="input-group colorpicker-component" title="Using  option">\n                                        <input type="text" class="form-control input-lg colorpicker-value" style="display:none" value="' + json + '" />\n                                        <span class="input-group-addon">\n                                        <i style="border: solid 1px #9d9d9d"></i>\n                                        </span>\n                                    </div>' : '';

                        if (temp[1] && (temp[1] === 'number-val' || temp[1] === 'bool-val')) {
                            templateHtml += '<div class="value ' + (temp[1] || '') + '  ' + (deleteFlag === true ? 'delete-checkbox-true' : '') + '" data-value="' + json + '">' + json + '</div>\n                                    <div class="children"></div>\n                                    <div class="comma">' + (comma || '') + '</div>';
                        } else {
                            templateHtml += '<div class="value ' + (temp[1] || '') + '  ' + (deleteFlag === true ? 'delete-checkbox-true' : '') + '" data-value="' + json + '">"' + json + '"</div>\n                                    <div class="children"></div>\n                                    <div class="comma">' + (comma || '') + '</div>';
                        }

                        templateHtml += '<div class="insert" contentEditable="false"></div>\n                                    </div>';
                    }
            }
            return templateHtml;
        }
    }, {
        key: '_renderFontColor',
        value: function _renderFontColor(key, value) {
            if (String(value) === 'true' || String(value) === 'false') {
                return ['bool-type', 'bool-val'];
            }

            if (!isNaN(value)) {
                return ['number-type', 'number-val'];
            }

            var type = Object.prototype.toString.call(value);
            switch (type) {
                case '[object String]':
                    {
                        if (value.match(/^(\#)|^(rgb)/)) {
                            return ['color-type', 'color-val'];
                        } else {
                            return '';
                        }
                    }
                default:
                    {
                        return '';
                    }
            }
        }
    }, {
        key: '_partialRender',
        value: function _partialRender(node) {
            var text = node.querySelector('.leftBracket').textContent + node.querySelector('.children').textContent + node.lastChild.querySelector('span').textContent;
            text = text.replace(/\s{2}/mg, '');
            var json = '';
            try {
                json = JSON.parse(text);
                json['_delete'] = [];
                node.querySelectorAll('.delete-checkbox input').forEach(function (n) {
                    if (n.checked === true) {
                        return;
                    }
                    var key = n.parentNode.parentNode.querySelector('.name').getAttribute('data-value');
                    json['_delete'].push(key);
                });
            } catch (e) {
                console.error(e);
                return true;
            }

            var arrFlag = true;
            if (Object.prototype.toString.call(json) === '[object Array]') {
                arrFlag = '';
            }
            var size = Object.keys(json).length;
            var tempHtml = '';
            for (var key in json) {
                size--;
                if (key === '_delete') {
                    continue;
                }
                var deleteFlag = false;
                var _iteratorNormalCompletion6 = true;
                var _didIteratorError6 = false;
                var _iteratorError6 = undefined;

                try {
                    for (var _iterator6 = json['_delete'][Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                        var val = _step6.value;

                        if (val === key) {
                            deleteFlag = true;
                            break;
                        }
                    }
                } catch (err) {
                    _didIteratorError6 = true;
                    _iteratorError6 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion6 && _iterator6.return) {
                            _iterator6.return();
                        }
                    } finally {
                        if (_didIteratorError6) {
                            throw _iteratorError6;
                        }
                    }
                }

                if (size > 1) {
                    tempHtml += this._getTemplateHtml(json[key], arrFlag && key, ',', deleteFlag);
                } else {
                    tempHtml += this._getTemplateHtml(json[key], arrFlag && key, '', deleteFlag);
                }
            }
            node.querySelector('.children').innerHTML = tempHtml;
            $('.colorpicker-component').colorpicker();
            this._bindEvents();

            $($('#editor-content .jsonView')[0]).getNiceScroll().resize();

            this.styleJsonManager.setStyleJsonByEditor(this.getStyleJson());
            _main.mapControl.render(styleJSON);
        }
    }, {
        key: '_collapseExpendHandle',
        value: function _collapseExpendHandle(e) {
            var clickNode = e.target;
            if (clickNode.className.includes('collapseObj')) {
                clickNode.className = 'expendObj';
                clickNode.parentNode.querySelector('.children').style.display = 'inline-block';
            } else if (clickNode.className.includes('expendObj')) {
                clickNode.className = 'collapseObj';
                clickNode.parentNode.querySelector('.children').style.display = 'none';
            }
        }
    }, {
        key: '_colorPickerChangedHandle',
        value: function _colorPickerChangedHandle(e) {
            e.target.parentNode.parentNode.querySelector('.value').innerText = '"' + e.target.value + '"';
            e.target.parentNode.parentNode.querySelector('.value').setAttribute('data-value', '"' + e.target.value + '"');

            if (!document.querySelector('.colorpicker-visible')) {
                this.styleJsonManager.setStyleJsonByEditor(this.getStyleJson());
                _main.mapControl.render(styleJSON);
            }
        }
    }, {
        key: '_colorValueChangedHandle',
        value: function _colorValueChangedHandle(e) {
            if (e.target.parentNode.className.includes('color-val')) {
                var colorValue = e.target.textContent.replace(/\"/mg, '');
                e.target.parentNode.parentNode.querySelector('.colorpicker-value').value = colorValue;
                e.target.parentNode.parentNode.querySelector('i').style.backgroundColor = colorValue;
            }
        }
    }, {
        key: '_editorValueChangedHandle',
        value: function _editorValueChangedHandle(e) {
            var flag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            if (e.target.nodeName === 'SELECT') {
                return;
            }
            var tempNode = '';
            var tempFlag = false;
            if (e.target.contentEditable === 'true' && !flag) {
                return;
            }
            this.node.querySelectorAll('.value').forEach(function (node) {
                if (node.contentEditable === 'true') {
                    node.innerHTML = node.textContent;
                    node.contentEditable = false;
                    tempNode = node;
                    if ('"' + node.getAttribute('data-value') + '"' === node.textContent || node.getAttribute('data-value') === node.textContent) {
                        tempFlag = true;
                        return;
                    } else {
                        node.setAttribute('data-value', node.textContent);
                    }
                }
            });
            this.node.querySelectorAll('.name').forEach(function (node) {
                if (node.contentEditable === 'true') {
                    node.innerHTML = node.textContent;
                    node.contentEditable = false;
                    tempNode = node;
                    if ('"' + node.getAttribute('data-value') + '"' === node.textContent || node.getAttribute('data-value') === node.textContent) {
                        tempFlag = true;
                        return;
                    } else {
                        node.setAttribute('data-value', node.textContent);
                    }
                }
            });
            if (tempFlag === true) {
                return;
            }
            if (e.target.className.match(/(value)|(name)/mg) && !flag) {
                e.target.contentEditable = true;
                if (e.target !== tempNode) {
                    e.target.focus();
                    e.target.classList.add('editor-input');
                }
            }
            if (tempNode && (e.target !== tempNode || flag)) {
                var parentNode = tempNode.parentNode.parentNode;
                while (!parentNode.className.includes('jsonView')) {
                    parentNode = parentNode.parentNode;
                }
                this.node.querySelector('.auto-complete-ele select').style.display = 'none';
                if (this._partialRender(parentNode)) {
                    tempNode.contentEditable = true;
                    tempNode.classList.add('editor-error');
                } else {
                    tempNode.classList.remove('editor-input');
                    tempNode.classList.remove('editor-error');
                }
            }
        }
    }, {
        key: '_editorDeleteHandle',
        value: function _editorDeleteHandle(e) {
            if (e.target.classList.contains('delete')) {
                var parentNode = e.target.parentNode;
                while (!parentNode.className.includes('jsonView')) {
                    parentNode = parentNode.parentNode;
                }
                if (parentNode.previousSibling && parentNode.previousSibling.nodeName === 'DIV') {
                    if (parentNode.previousSibling.querySelector('.rightBracket')) {
                        if (parentNode.querySelector('.children').nextElementSibling.className.includes('comma')) {
                            parentNode.previousSibling.querySelector('.rightBracket>.comma').innerHTML = parentNode.querySelector('.children').nextElementSibling.innerHTML;
                        } else if (parentNode.querySelector('.rightBracket>.comma')) {
                            parentNode.previousSibling.querySelector('.rightBracket>.comma').innerHTML = parentNode.querySelector('.rightBracket>.comma').innerHTML;
                        }
                    } else {
                        if (parentNode.querySelector('.children').nextElementSibling.className.includes('comma')) {
                            parentNode.previousSibling.querySelector('.comma').innerHTML = parentNode.querySelector('.children').nextElementSibling.innerHTML;
                        } else if (parentNode.querySelector('.rightBracket>.comma')) {
                            parentNode.previousSibling.querySelector('.comma').innerHTML = parentNode.querySelector('.rightBracket>.comma').innerHTML;
                        }
                    }
                }
                parentNode.parentNode.removeChild(parentNode);
                this.styleJsonManager.setStyleJsonByEditor(this.getStyleJson());
                _main.mapControl.render(styleJSON);
            }
        }
    }, {
        key: '_editorInsertHandle',
        value: function _editorInsertHandle(e) {
            var flag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            if (e.target.nodeName === 'SELECT') {
                return;
            }
            var nodeList = this.node.querySelectorAll('.insert').entries();
            var _iteratorNormalCompletion7 = true;
            var _didIteratorError7 = false;
            var _iteratorError7 = undefined;

            try {
                for (var _iterator7 = nodeList[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                    var n = _step7.value;

                    if (n[1].contentEditable === 'true') {
                        var node = n[1];
                        node.classList.remove('editor-input');
                        if (node.textContent.match(/[a-zA-Z0-9]/)) {
                            // the div includes something and need to be refresh
                            var text = node.innerHTML;
                            if (node.textContent) {
                                text = node.textContent.replace(/\s{2}/, '');
                            }
                            // text = this._getPlainText(node);
                            var temp = node.parentNode;
                            while (!temp.className.includes('jsonView')) {
                                temp = temp.parentNode;
                            }
                            if (temp.nextElementSibling && temp.nextElementSibling.nodeName === 'DIV') {
                                if (!text.match(/\,$/mg)) {
                                    text += ',';
                                }
                            } else if (!temp.nextElementSibling) {
                                if (!text.match(/^\,/mg)) {
                                    text = ',' + text;
                                }
                            }
                            node.innerHTML = text;

                            var parentNode = '';
                            if (node.parentNode.className.includes('rightBracket')) {
                                parentNode = node.parentNode;
                            } else {
                                parentNode = node;
                            }
                            parentNode = parentNode.parentNode.parentNode;
                            while (!parentNode.className.includes('jsonView')) {
                                parentNode = parentNode.parentNode;
                            }

                            if (this._partialRender(parentNode)) {
                                node.contentEditable = true;
                                node.classList.add('editor-error');
                            } else {
                                if (node.previousSibling.nodeName === 'BR') {
                                    node.parentNode.removeChild(node.previousSibling);
                                }
                                node.contentEditable = false;
                                node.classList.remove('editor-error');
                                node.classList.remove('insert-margin');
                            }
                        } else {
                            if (node.previousSibling.nodeName === 'BR') {
                                node.parentNode.removeChild(node.previousSibling);
                            }
                            node.contentEditable = false;
                            node.classList.remove('editor-error');
                            node.classList.remove('insert-margin');
                        }
                    }
                    if (e.target.contentEditable === 'true' && !flag) return;
                    this.node.querySelector('.auto-complete-ele select').style.display = 'none';
                    if (e.target.className.includes('insert')) {
                        var _node = e.target;
                        if (_node.contentEditable === 'false') {
                            if (_node.previousSibling.nodeName !== 'BR') {
                                _node.insertAdjacentHTML('beforebegin', '<br \\>');
                                _node.classList.add('insert-margin');
                                // node.className += ' insert-margin';
                                _node.parentNode.style.height = 'auto';
                            }
                            _node.contentEditable = true;
                            _node.focus();
                        }
                    }
                }
            } catch (err) {
                _didIteratorError7 = true;
                _iteratorError7 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion7 && _iterator7.return) {
                        _iterator7.return();
                    }
                } finally {
                    if (_didIteratorError7) {
                        throw _iteratorError7;
                    }
                }
            }
        }
    }, {
        key: '_optionValueSelectedByKeyboard',
        value: function _optionValueSelectedByKeyboard(evt) {
            if (this.node.querySelector('.auto-complete-ele select').style.display !== 'block') {
                if (evt.key === 'Enter') {
                    evt.preventDefault();
                    var node = evt.target;
                    if (node.nodeName === 'DIV') {
                        if (node.classList && node.className.match(/insert/m)) {
                            this._editorInsertHandle(evt, true);
                        }
                        this._editorValueChangedHandle(evt, true);
                    }
                }
            }
            switch (evt.key) {
                case 'ArrowDown':
                    {
                        evt.preventDefault();
                        this.node.querySelector('.auto-complete-ele select').options[(this.tempArr[1] + 1) % this.tempArr[2]].selected = true;
                        this.tempArr[1]++;
                        break;
                    }
                case 'ArrowUp':
                    {
                        evt.preventDefault();
                        this.node.querySelector('.auto-complete-ele select').options[this.tempArr[1] % this.tempArr[2]].selected = true;
                        this.tempArr[1]--;
                        break;
                    }
                default:
                    {
                        if (evt.key === 'Enter' || evt.key === 'Tab') {
                            evt.preventDefault();
                            this.tempArr[0].textContent = '"' + this.node.querySelector('.auto-complete-ele select').value + '"';
                            this.tempArr[0].contenteditable = true;
                            this.tempArr[0].focus();
                            var text = window.getSelection().anchorNode;
                            if (text.nodeName === 'DIV') {
                                text = text.firstChild;
                            }
                            this.node.querySelector('.auto-complete-ele select').style.display = 'none';
                            var range = window.getSelection().getRangeAt(0);
                            range.collapse(true);
                            range.setStart(text, text.length || 0);
                            window.getSelection().removeAllRanges();
                            window.getSelection().addRange(range);
                        }
                    }
            }
        }
    }, {
        key: '_optionValueInserted',
        value: function _optionValueInserted(e) {
            if (e.target.nodeName === 'OPTION') {
                this.tempArr[0].textContent = '"' + e.target.value + '"';
                this.tempArr[0].contenteditable = true;
                this.tempArr[0].focus();
                var text = window.getSelection().anchorNode;
                if (text.nodeName === 'DIV') {
                    text = text.firstChild;
                }
                var range = window.getSelection().getRangeAt(0);
                range.collapse(true);
                range.setStart(text, text.length || 0);
                window.getSelection().removeAllRanges();
                window.getSelection().addRange(range);
                e.preventDefault();
                e.stopPropagation();
                if (e.target.parentNode.nodeName === 'SELECT') {
                    e.target.parentNode.style.display = 'none';
                }
            }
        }
    }, {
        key: '_deleteButtonChangeHandle',
        value: function _deleteButtonChangeHandle(e) {
            var node = e.target;
            var parentNodeNamedChildren = node.parentNode.parentNode.parentNode;
            var parentNode = parentNodeNamedChildren.parentNode;
            if (!parentNode.classList.contains('jsonView')) {
                return;
            }

            this._partialRender(parentNode);
        }
    }, {
        key: '_bindEvents',
        value: function _bindEvents() {
            var _this3 = this;

            // expend collapse
            this.node.addEventListener('mousedown', this._collapseExpendHandle);

            // color event      ?????????????????????????????????
            var colorpickeNodeArrs = this.node.querySelectorAll('.colorpicker-value').entries();
            var _iteratorNormalCompletion8 = true;
            var _didIteratorError8 = false;
            var _iteratorError8 = undefined;

            try {
                for (var _iterator8 = colorpickeNodeArrs[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                    var arr = _step8.value;

                    arr[1].onchange = this._colorPickerChangedHandle;
                }
            } catch (err) {
                _didIteratorError8 = true;
                _iteratorError8 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion8 && _iterator8.return) {
                        _iterator8.return();
                    }
                } finally {
                    if (_didIteratorError8) {
                        throw _iteratorError8;
                    }
                }
            }

            this.node.addEventListener('DOMCharacterDataModified', this._colorValueChangedHandle);
            this.node.addEventListener('DOMCharacterDataModified', this._autoComplete);
            this.node.addEventListener('mouseup', this._editorValueChangedHandle);
            this.node.addEventListener('mouseup', this._editorInsertHandle);
            this.node.addEventListener('mouseup', this._editorDeleteHandle);
            this.node.querySelectorAll('.delete-checkbox').forEach(function (node) {
                node.querySelector('input').addEventListener('change', _this3._deleteButtonChangeHandle);
            });

            this.node.querySelector('.auto-complete-ele select').addEventListener('mouseup', this._optionValueInserted);
            this.node.addEventListener('keydown', this._optionValueSelectedByKeyboard);
        }
    }]);

    return EditJson;
}();

exports.default = EditJson;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StyleJsonManager = function () {
    function StyleJsonManager() {
        // styleJSON.sources[0].options = { 'featureClass': 'ol.Feature' };

        _classCallCheck(this, StyleJsonManager);
    }

    _createClass(StyleJsonManager, [{
        key: 'getStylesByLayerId',
        value: function getStylesByLayerId(layerId) {
            var arr = styleJSON['layers'][0]['styles'].filter(function (val) {
                return val.startsWith(layerId);
            });
            return styleJSON['styles'].filter(function (value) {
                var temp = arr.filter(function (val) {
                    return value['id'] === val;
                });
                if (temp.length > 0) {
                    return value;
                }
                return false;
            });
        }
    }, {
        key: 'getStyleIdsByLayerId',
        value: function getStyleIdsByLayerId(layerId) {
            return styleJSON['layers'][0]['styles'].filter(function (val) {
                return val.startsWith(layerId);
            });
        }
    }, {
        key: 'getVariableObjByStyle',
        value: function getVariableObjByStyle(style) {
            var str = JSON.stringify(style);
            var arr = Array.from(new Set(str.match(/@[^\"]+/gm)));
            var variableObj = {};
            arr.forEach(function (key) {
                if (styleJSON['variables'][key]) {
                    variableObj[key] = styleJSON['variables'][key];
                } else {
                    for (var key2 in styleJSON['variables']) {
                        if (key2.match(key)) {
                            variableObj[key] = styleJSON['variables'][key2];
                        }
                    }
                }
            });
            return variableObj;
        }
    }, {
        key: 'getStyleByStyleId',
        value: function getStyleByStyleId(styleId) {
            return styleJSON['styles'].filter(function (value) {
                return value['id'] === styleId;
            })[0];
        }
    }, {
        key: 'getStyleIdsByZoom',
        value: function getStyleIdsByZoom(zoom) {
            var rightStyles = [];
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = styleJSON.styles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var obj = _step.value;

                    if (obj.filter && obj.filter.match(/zoom/)) {
                        var t = obj.filter.match(/(zoom\>\=[0-9]+\;zoom\<\=[0-9]+)|((zoom\<\=[0-9]+\;zoom\>\=[0-9]+))|(zoom\=[0-9]+)/g);
                        if (t) {
                            t = t[0].replace(/\;/g, '&&');
                            t = t.replace(/(zoom)\=/g, '$1==');
                            if (eval(t)) {
                                rightStyles.push(obj);
                            }
                        }
                    } else {
                        var _iteratorNormalCompletion2 = true;
                        var _didIteratorError2 = false;
                        var _iteratorError2 = undefined;

                        try {
                            for (var _iterator2 = obj.style[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                var s = _step2.value;

                                if (s.filter) {
                                    var _t = s.filter.match(/(zoom\>\=[0-9]+\;zoom\<\=[0-9]+)|((zoom\<\=[0-9]+\;zoom\>\=[0-9]+))|(zoom\=[0-9]+)/g);
                                    if (_t) {
                                        _t = _t[0].replace(/\;/g, '&&');
                                        _t = _t.replace(/(zoom)\=/g, '$1==');
                                        if (eval(_t)) {
                                            rightStyles.push(obj);
                                        }
                                    }
                                }
                            }
                        } catch (err) {
                            _didIteratorError2 = true;
                            _iteratorError2 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                    _iterator2.return();
                                }
                            } finally {
                                if (_didIteratorError2) {
                                    throw _iteratorError2;
                                }
                            }
                        }
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            var temp = new Set(rightStyles);
            temp.delete(undefined);
            return Array.from(temp);
        }
    }, {
        key: 'getStyleItemsByStyle',
        value: function getStyleItemsByStyle(styles) {
            if (!styles) return;
            var stylesId = styles.map(function (value) {
                return value.id;
            });

            var stylesObj = {
                point: [],
                line: [],
                polygon: [],
                label: []
            };

            stylesId.forEach(function (value) {
                if (value.match(/_label_/gm)) {
                    stylesObj['label'].push(value);
                } else {
                    var key = value.match(/((point)|(linestring)|(polygon))/gm);
                    if (!key) {
                        return;
                    } else {
                        if (key[0] === 'linestring') {
                            stylesObj['line'].push(value);
                        } else {
                            stylesObj[key].push(value);
                        }
                    }
                }
            });

            return stylesObj;
        }
    }, {
        key: 'setStyleJsonByEditor',
        value: function setStyleJsonByEditor(JsonObj) {
            if (JsonObj['variables']) {
                for (var key in JsonObj['variables']) {
                    if (JsonObj['variables'].hasOwnProperty(key)) {
                        styleJSON['variables'][key] = JsonObj['variables'][key];
                    }
                }
            }
            if (JsonObj['styleJson']) {
                for (var _key in styleJSON['styles']) {
                    if (styleJSON['styles'][_key]['id'] === JsonObj['styleJson']['id']) {
                        styleJSON['styles'][_key] = JsonObj['styleJson'];
                    }
                }
            }
        }
    }, {
        key: 'setColor',
        value: function setColor(params) {
            var obj = getStyleById(objId)[0];
            var colorArr = [];
            if (obj[params['colorAttr']]) {
                colorArr.push(obj[params['colorAttr']]);
                colorMap.set(objId, colorArr);
            } else {
                colorArr.push(params['defaultColor']);
                colorMap.set(objId, colorArr);
            }
            var count = 0;
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = obj['style'][Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var attrObj = _step3.value;

                    if (attrObj['filter']) {
                        if (attrObj[params['colorAttr']]) {
                            colorArr[0] = attrObj[params['colorAttr']];
                            break;
                        } else if (attrObj['style']) {
                            var _iteratorNormalCompletion4 = true;
                            var _didIteratorError4 = false;
                            var _iteratorError4 = undefined;

                            try {

                                for (var _iterator4 = attrObj['style'][Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                                    var attrObj2 = _step4.value;

                                    if (attrObj2[params['colorAttr']]) {
                                        count++;
                                        colorArr.push(attrObj2[params['colorAttr']]);
                                    } else if (attrObj2['style']) {
                                        var _iteratorNormalCompletion5 = true;
                                        var _didIteratorError5 = false;
                                        var _iteratorError5 = undefined;

                                        try {
                                            for (var _iterator5 = attrObj2['style'][Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                                                var attrObj3 = _step5.value;

                                                if (attrObj3[params['colorAttr']]) {
                                                    count++;
                                                    colorArr.push(attrObj3[params['colorAttr']]);
                                                }
                                            }
                                        } catch (err) {
                                            _didIteratorError5 = true;
                                            _iteratorError5 = err;
                                        } finally {
                                            try {
                                                if (!_iteratorNormalCompletion5 && _iterator5.return) {
                                                    _iterator5.return();
                                                }
                                            } finally {
                                                if (_didIteratorError5) {
                                                    throw _iteratorError5;
                                                }
                                            }
                                        }
                                    }
                                }
                            } catch (err) {
                                _didIteratorError4 = true;
                                _iteratorError4 = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
                                        _iterator4.return();
                                    }
                                } finally {
                                    if (_didIteratorError4) {
                                        throw _iteratorError4;
                                    }
                                }
                            }
                        } else {
                            colorArr[0] = params['defaultColor'];
                        }
                    } else {
                        count++;
                        colorArr.push(attrObj[params['colorAttr']]);
                    }
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }

            if (count > 0 && colorArr.length > 1) {
                colorArr.shift();
            }
            colorMap.set(objId, colorArr);
        }
    }, {
        key: 'getColorMapByStyleId',
        value: function getColorMapByStyleId(styleId) {
            var colorMap = new Map();
            var defaultColor = 'rgb(0,0,0)';
            if (styleId.includes('label')) {
                setColor({
                    type: 'label',
                    colorAttr: 'text-fill',
                    defaultColor: defaultColor
                });
            }
            if (styleId.includes('line')) {
                setColor({
                    type: 'line',
                    colorAttr: 'line-color',
                    defaultColor: defaultColor
                });
            }
            if (styleId.includes('point')) {
                setColor({
                    type: 'point',
                    colorAttr: 'text-fill',
                    defaultColor: defaultColor
                });
            }
            if (styleId.includes('polygon')) {
                setColor({
                    type: 'polygon',
                    colorAttr: 'polygon-fill',
                    defaultColor: defaultColor
                });
            }
            return colorMap;
        }
    }, {
        key: 'transferVariablesToColor',
        value: function transferVariablesToColor(colorMap) {
            var variables = styleJSON.variables;
            var _iteratorNormalCompletion6 = true;
            var _didIteratorError6 = false;
            var _iteratorError6 = undefined;

            try {
                for (var _iterator6 = colorMap[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                    var _step6$value = _slicedToArray(_step6.value, 2),
                        key = _step6$value[0],
                        value = _step6$value[1];

                    var _iteratorNormalCompletion7 = true;
                    var _didIteratorError7 = false;
                    var _iteratorError7 = undefined;

                    try {
                        for (var _iterator7 = value.entries()[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                            var _step7$value = _slicedToArray(_step7.value, 2),
                                index = _step7$value[0],
                                val = _step7$value[1];

                            if (val.startsWith('@')) {
                                for (var k in variables) {
                                    if (k.includes(val)) {
                                        value[index] = variables[k];
                                    }
                                }
                            }
                        }
                    } catch (err) {
                        _didIteratorError7 = true;
                        _iteratorError7 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion7 && _iterator7.return) {
                                _iterator7.return();
                            }
                        } finally {
                            if (_didIteratorError7) {
                                throw _iteratorError7;
                            }
                        }
                    }
                }
            } catch (err) {
                _didIteratorError6 = true;
                _iteratorError6 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion6 && _iterator6.return) {
                        _iterator6.return();
                    }
                } finally {
                    if (_didIteratorError6) {
                        throw _iteratorError6;
                    }
                }
            }

            return colorMap;
        }
    }, {
        key: 'drawShapeAndColor',
        value: function drawShapeAndColor(colorMap) {
            colorMap = this.transferVariablesToColor(colorMap);
            var _iteratorNormalCompletion8 = true;
            var _didIteratorError8 = false;
            var _iteratorError8 = undefined;

            try {
                for (var _iterator8 = colorMap[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                    var _step8$value = _slicedToArray(_step8.value, 2),
                        key = _step8$value[0],
                        value = _step8$value[1];

                    var lineCxt = document.getElementById(key).getContext('2d');
                    lineCxt.beginPath();
                    lineCxt.moveTo(0, 0);
                    lineCxt.lineTo(13, 13);
                    lineCxt.lineWidth = 2;
                    lineCxt.strokeStyle = colorMap.get(key);
                    lineCxt.stroke();
                }
            } catch (err) {
                _didIteratorError8 = true;
                _iteratorError8 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion8 && _iterator8.return) {
                        _iterator8.return();
                    }
                } finally {
                    if (_didIteratorError8) {
                        throw _iteratorError8;
                    }
                }
            }
        }
        // setStyleJsonByImportJsonFile(styleJSON, file) {
        //     styleJSON = file;
        //     return styleJSON;
        // }

    }]);

    return StyleJsonManager;
}();

exports.default = StyleJsonManager;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MenuControl = function () {
    function MenuControl(elementId, mapControl, styleJsonManager, styleJsonEditor) {
        _classCallCheck(this, MenuControl);

        this.mapControl = mapControl;
        this.elementId = elementId;
        this.styleJsonManager = styleJsonManager;
        this.styleJsonEditor = styleJsonEditor;
        this._initRender();
        this._event();
        this._whichExpand = null;
    }

    _createClass(MenuControl, [{
        key: '_initRender',
        value: function _initRender() {
            var selectAllStr = '\n        <div class="selectAll pretty primary">\n            <input type="checkbox" id="menu-list-selectAll"> \n            <label for="menu-list-selectAll"><i class="mdi mdi-check"></i> All</label>\n        </div>\n\n        <div class="style-list">\n            <div class="panel-group" id="accordion">\n            </div>\n        </div>';
            var node = document.querySelector(this.elementId + '>a:last-child');
            node.className = 'list-group-item menu-list-button';
            document.querySelector(this.elementId).appendChild(document.createElement('div'));
            document.querySelector(this.elementId + '>div:last-child').className = 'menu-list';
            document.querySelector(this.elementId + '>div:last-child').innerHTML = selectAllStr;
        }
    }, {
        key: 'styleListRender',
        value: function styleListRender(obj) {
            var _this = this;

            var str1 = '';
            var tempFlag = false;
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    var str2 = '';
                    if (obj[key] && obj[key].length > 0) {
                        var _iteratorNormalCompletion = true;
                        var _didIteratorError = false;
                        var _iteratorError = undefined;

                        try {
                            for (var _iterator = obj[key][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                var styleId = _step.value;
                                // arrow
                                if (document.querySelector('#editor-content').getAttribute('styleId') === styleId) {
                                    tempFlag = true;
                                    str2 += '<li class="list-group-item clicked" title="' + styleId + '"><i class="fa fa-eye" aria-hidden="true"></i>' + styleId + '</li>';
                                } else {
                                    str2 += '<li class="list-group-item" title="' + styleId + '"><i class="fa fa-eye" aria-hidden="true"></i>' + styleId + '</li>';
                                }
                            }
                        } catch (err) {
                            _didIteratorError = true;
                            _iteratorError = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion && _iterator.return) {
                                    _iterator.return();
                                }
                            } finally {
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                            }
                        }

                        var titleUpperCase = key.toUpperCase();
                        str1 += '<div class="panel panel-default">\n                                <div class="panel-heading">\n                                    <h4 class="panel-title">    \n                                        <a data-toggle="collapse" data-parent="#accordion" href="#' + key + '">' + titleUpperCase + '  <span class="badge"> ' + obj[key].length + '</span></a>\n                                    </h4>\n                                </div>\n                                <div id="' + key + '" class="panel-collapse collapse ' + (key === this._whichExpand ? 'in' : '') + '">\n                                    <ul class="panel-body list-group">' + str2 + '</ul>\n                                </div>\n                            </div>';
                    }
                }
            }

            if (!tempFlag) {
                this.styleJsonEditor.render({}, '');
            }
            document.querySelector(this.elementId + ' #accordion').innerHTML = str1;
            var nodeList = document.querySelectorAll(this.elementId + ' #accordion ul li').entries();
            var eyesList = document.querySelectorAll(this.elementId + ' #accordion ul li i').entries();
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = nodeList[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var node = _step2.value;

                    node[1].addEventListener('click', function (e) {
                        var styleId = e.target.title;
                        if (e.target.nodeName === 'I') {
                            styleId = e.target.parentNode.title;
                        }
                        if (styleId && _this.styleJsonManager.getStyleByStyleId(styleId)) {
                            var style = _this.styleJsonManager.getStyleByStyleId(styleId);
                            var variable = _this.styleJsonManager.getVariableObjByStyle(style);
                            document.querySelector('#editor-content').setAttribute('styleid', styleId);

                            if (Object.keys(variable).length) {
                                _this.styleJsonEditor.render({
                                    'variables': variable,
                                    'styleJson': style
                                });
                            } else {
                                _this.styleJsonEditor.render({
                                    'styleJson': style
                                });
                            }

                            if (document.querySelector('#editor').classList.contains('editor-close-transform')) {
                                document.querySelector('#editor').classList.remove('editor-close-transform');
                                document.querySelector('#editor').classList.add('editor-open-transform');

                                document.querySelector('#editor .editor-hide-button span').classList.remove('icon-editor-back');
                                document.querySelector('#editor .editor-hide-button span').classList.add('icon-editor-forward');

                                document.querySelector('#editor .editor-hide-button').classList.add('editor-hide-button-after');
                                $('#map .ol-map-drag').animate({ left: document.querySelector('#map .ol-map-drag').offsetLeft - document.querySelector('#editor').offsetWidth + 'px' }, 400);
                                $('#map .ol-overlaycontainer-stopevent .custom-mouse-position').animate({ left: document.querySelector('#map .ol-overlaycontainer-stopevent .custom-mouse-position').offsetLeft - document.querySelector('#editor').offsetWidth + 'px' }, 400);
                                $('#map .ol-overlaycontainer-stopevent .ol-attribution').animate({ left: document.querySelector('#map .ol-overlaycontainer-stopevent .ol-attribution').offsetLeft - document.querySelector('#editor').offsetWidth + 'px' }, 400);
                                $('#map .ol-overlaycontainer-stopevent .ol-zoom').animate({ left: document.querySelector('#map .ol-overlaycontainer-stopevent .ol-zoom').offsetLeft - document.querySelector('#editor').offsetWidth + 'px' }, 300);
                            }

                            var _nodeList = document.querySelectorAll(_this.elementId + ' #accordion ul li').entries();

                            var _iteratorNormalCompletion4 = true;
                            var _didIteratorError4 = false;
                            var _iteratorError4 = undefined;

                            try {
                                for (var _iterator4 = _nodeList[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                                    var n = _step4.value;

                                    n[1].classList.remove('clicked');
                                }
                            } catch (err) {
                                _didIteratorError4 = true;
                                _iteratorError4 = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
                                        _iterator4.return();
                                    }
                                } finally {
                                    if (_didIteratorError4) {
                                        throw _iteratorError4;
                                    }
                                }
                            }

                            e.currentTarget.classList.add('clicked');
                        }
                        $($('#editor-content .jsonView')[0]).niceScroll({
                            autohidemode: false,
                            cursorcolor: '#2d3c4d',
                            oneaxismousemode: false,
                            horizrailenabled: false
                        });
                    });
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = eyesList[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var eye = _step3.value;

                    eye[1].addEventListener('click', function (e) {
                        var styleId = e.target.parentNode.title;
                        var style = _this.styleJsonManager.getStyleByStyleId(styleId);
                        if (e.target.className.includes('fa-eye-slash')) {
                            e.target.className = e.target.className.replace(/fa\-eye\-slash/m, 'fa-eye');
                            style.visible = true;
                        } else {
                            e.target.className = e.target.className.replace(/fa\-eye/m, 'fa-eye-slash');
                            style.visible = false;
                        }
                        _this.mapControl.render(styleJSON);
                    }, false);
                }

                // all nice-scroll bind
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }

            $('.nicescroll-rails').remove();
            $('#accordion ul').niceScroll({
                zindex: 100,
                autohidemode: false,
                cursorcolor: '#2d3c4d'
            });
            $($('#editor-content .jsonView')[0]).niceScroll({
                autohidemode: false,
                cursorcolor: '#2d3c4d',
                oneaxismousemode: false,
                horizrailenabled: false
            });
            $('#accordion ul').getNiceScroll().resize();
        }
    }, {
        key: '_event',
        value: function _event() {
            var _this2 = this;

            document.querySelector(this.elementId + '>.menu-list-button').addEventListener('click', function (e) {
                var ele = document.querySelector(_this2.elementId + '>div:last-child');
                var node = document.querySelector(_this2.elementId + '>.menu-list-button');
                if (ele.className && ele.className.includes('menu-list-show')) {
                    node.classList.remove('show-menulist');
                    ele.classList.remove('menu-list-show');
                    ele.classList.add('menu-list-hidden');

                    document.querySelector('#map .ol-overlaycontainer-stopevent .ol-scale-line').classList.remove('ol-layer-position-forward');
                    document.querySelector('#map .ol-overlaycontainer-stopevent .ol-scale-line').classList.add('ol-layer-position-back');
                } else if (ele.className && ele.className.includes('menu-list-hidden')) {
                    node.classList.add('show-menulist');
                    ele.classList.remove('menu-list-hidden');
                    ele.classList.add('menu-list-show');

                    document.querySelector('#map .ol-overlaycontainer-stopevent .ol-scale-line').classList.remove('ol-layer-position-back');
                    document.querySelector('#map .ol-overlaycontainer-stopevent .ol-scale-line').classList.add('ol-layer-position-forward');
                } else {
                    node.classList.add('show-menulist');
                    ele.classList.add('menu-list-show');

                    document.querySelector('#map .ol-overlaycontainer-stopevent .ol-scale-line').classList.remove('ol-layer-position-back');
                    document.querySelector('#map .ol-overlaycontainer-stopevent .ol-scale-line').classList.add('ol-layer-position-forward');
                }
            });

            document.getElementById('menu-list-selectAll').addEventListener('change', function (e) {
                if (e.target.checked === true) {
                    _this2.styleListRender(_this2.styleJsonManager.getStyleItemsByStyle(styleJSON['styles']));
                } else {
                    var zoom = _this2.mapControl.getView().getZoom();
                    if ((zoom | 0) === zoom) {
                        var obj = _this2.styleJsonManager.getStyleItemsByStyle(_this2.styleJsonManager.getStyleIdsByZoom(zoom));
                        _this2.styleListRender(obj);
                    }
                }
                $('#accordion ul').niceScroll({
                    zindex: 100,
                    autohidemode: false,
                    cursorcolor: '#2d3c4d'
                });
                // $(`#accordion ul`).getNiceScroll().resize();
                setTimeout(function () {
                    document.body.click();
                }, 0);
            });

            document.addEventListener('click', function (e) {
                var maxHeight = document.querySelector(_this2.elementId + ' .menu-list').offsetHeight - document.querySelector(_this2.elementId + ' .menu-list .selectAll').offsetHeight * 5;
                $($('#editor-content .jsonView')[0]).getNiceScroll().resize();
                var nodelist = document.querySelectorAll(_this2.elementId + ' .style-list>.panel-group .panel').entries();
                var _iteratorNormalCompletion5 = true;
                var _didIteratorError5 = false;
                var _iteratorError5 = undefined;

                try {
                    for (var _iterator5 = nodelist[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                        var arr = _step5.value;

                        arr[1].querySelector('ul').style.maxHeight = maxHeight + 'px';
                        if (arr[1].lastElementChild.getAttribute('aria-expanded') === 'true') {
                            _this2._whichExpand = arr[1].querySelector('.panel-collapse').id;
                            $('.menu-list .nicescroll-rails').css('opacity', 1);
                            setTimeout(function () {
                                $('#accordion ul').getNiceScroll().resize();
                            }, 450);
                        } else if (arr[1].contains(e.target)) {
                            // && arr[1].lastElementChild.classList.contains('in')
                            _this2._whichExpand = '';
                            $('#accordion ul').getNiceScroll().hide();
                            $('.menu-list .nicescroll-rails').css('opacity', 0);
                        }
                    }
                } catch (err) {
                    _didIteratorError5 = true;
                    _iteratorError5 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion5 && _iterator5.return) {
                            _iterator5.return();
                        }
                    } finally {
                        if (_didIteratorError5) {
                            throw _iteratorError5;
                        }
                    }
                }
            });

            var formerZoom = 0;
            this.mapControl.getMap().on('postcompose', function (event) {
                var zoom = _this2.mapControl.getView().getZoom();
                if ((zoom | 0) === zoom && formerZoom !== zoom) {
                    formerZoom = zoom;
                    var obj = _this2.styleJsonManager.getStyleItemsByStyle(_this2.styleJsonManager.getStyleIdsByZoom(zoom));
                    _this2.styleListRender(obj);
                }
            });
        }
    }]);

    return MenuControl;
}();

exports.default = MenuControl;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DownloadStyleJson = function () {
    function DownloadStyleJson(eleId) {
        var _this = this;

        _classCallCheck(this, DownloadStyleJson);

        this.eleId = eleId;
        if (document.querySelector('' + eleId)) {
            document.querySelector('' + eleId).addEventListener('click', function (e) {
                return _this._download('style.json', JSON.stringify(styleJSON));
            });
        }
    }

    _createClass(DownloadStyleJson, [{
        key: '_download',
        value: function _download(fileName, content) {
            var aTag = document.createElement('a');
            var blob = new Blob([content]);
            aTag.download = fileName;
            aTag.href = URL.createObjectURL(blob);
            aTag.click();
            URL.revokeObjectURL(blob);
        }
    }]);

    return DownloadStyleJson;
}();

var UpdateStyleJson = function () {
    function UpdateStyleJson(eleId, mapControl, menuControl, styleJsonManager) {
        _classCallCheck(this, UpdateStyleJson);

        this.eleId = eleId;
        this.mapControl = mapControl;
        this.menuControl = menuControl;
        this.styleJsonManager = styleJsonManager;
        if (document.querySelector('' + eleId)) {
            document.querySelector('' + eleId).addEventListener('change', this._upDate.bind(this));
        }
    }

    _createClass(UpdateStyleJson, [{
        key: '_upDate',
        value: function _upDate(evt) {
            var _this2 = this;

            var readText = new FileReader();
            readText.onload = function (file) {
                styleJSON = JSON.parse(file.target.result);
                _this2.mapControl.render(styleJSON);
                var zoom = _this2.mapControl.getView().getZoom();
                if ((zoom | 0) === zoom) {
                    var obj = _this2.styleJsonManager.getStyleItemsByStyle(_this2.styleJsonManager.getStyleIdsByZoom(zoom));
                    _this2.menuControl.styleListRender(obj);
                    alert('update success');
                    event.target.value = '';
                }
            };
            readText.readAsText(evt.target.files[0], this);
        }
    }]);

    return UpdateStyleJson;
}();

exports.DownloadStyleJson = DownloadStyleJson;
exports.UpdateStyleJson = UpdateStyleJson;

/***/ })
/******/ ]);