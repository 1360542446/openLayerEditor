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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeoStyle; });
var GeoStyle = /** @class */ (function () {
    function GeoStyle(styleJson) {
        this.styles = [];
        if (styleJson) {
            this.id = styleJson["id"];
            this.visible = styleJson["visible"] === undefined ? true : styleJson["visible"];
        }
    }
    GeoStyle.prototype.initialize = function () {
        if (!this.initialized) {
            this.initializeCore();
            this.initialized = true;
        }
    };
    GeoStyle.prototype.initializeCore = function () {
    };
    GeoStyle.prototype.getStyles = function (feature, resolution, options) {
        var results = [];
        if (this.visible) {
            results = this.getConvertedStyle(feature, resolution, options);
        }
        return results;
    };
    GeoStyle.prototype.getConvertedStyle = function (feature, resolution, options) {
        this.initialize();
        return this.getConvertedStyleCore(feature, resolution, options);
    };
    GeoStyle.prototype.getConvertedStyleCore = function (feature, resolution, options) {
        return [];
    };
    GeoStyle.prototype.skewGeometry = function (geometry, xDeg, yDeg) {
        var center = ol.extent.getCenter(geometry.getExtent());
        for (var i = 0; i < geometry.flatCoordinates.length; i += 2) {
            var x = geometry.flatCoordinates[i];
            var y = geometry.flatCoordinates[i + 1];
            var rx = this.skewX(x, y, center[0], center[1], xDeg);
            var ry = this.skewY(x, y, center[0], center[1], yDeg);
            geometry.flatCoordinates[i] = rx;
            geometry.flatCoordinates[i + 1] = ry;
        }
    };
    GeoStyle.prototype.skewX = function (x, y, cx, cy, xDeg) {
        var rx = x;
        if (xDeg !== 0) {
            var xResolution = Math.tan(1.0 * xDeg * Math.PI / 180);
            var distance = void 0;
            if (x > cx) {
                if (y > cy) {
                    distance = xResolution * Math.abs(y - cy);
                }
                else {
                    distance = 0 - xResolution * Math.abs(y - cy);
                }
            }
            else {
                if (y > cy) {
                    distance = xResolution * Math.abs(y - cy);
                }
                else {
                    distance = 0 - xResolution * Math.abs(y - cy);
                }
            }
            rx += Math.round(distance);
        }
        return rx;
    };
    GeoStyle.prototype.skewY = function (x, y, cx, cy, yDeg) {
        var ry = y;
        if (yDeg !== 0) {
            var yResolution = Math.tan(1.0 * yDeg * Math.PI / 180);
            var distance = void 0;
            if (y > cy) {
                if (x > cx) {
                    distance = yResolution * Math.abs(x - cx);
                }
                else {
                    distance = 0 - yResolution * Math.abs(x - cx);
                }
            }
            else {
                if (x > cx) {
                    distance = yResolution * Math.abs(x - cx);
                }
                else {
                    distance = 0 - yResolution * Math.abs(x - cx);
                }
            }
            ry += Math.round(distance);
        }
        return ry;
    };
    GeoStyle.toRGBAColor = function (color, opacity) {
        if (opacity === void 0) { opacity = 1; }
        if (color.startsWith("#")) {
            var array = void 0;
            var r = void 0;
            var g = void 0;
            var b = void 0;
            var a = void 0;
            if (color.length === 4) {
                r = +("0x" + color.substr(1, 1) + color.substr(1, 1));
                g = +("0x" + color.substr(2, 1) + color.substr(2, 1));
                b = +("0x" + color.substr(3, 1) + color.substr(3, 1));
                a = opacity;
            }
            else {
                r = +("0x" + color.substr(1, 2));
                g = +("0x" + color.substr(3, 2));
                b = +("0x" + color.substr(5, 2));
                a = opacity;
            }
            array = [r, g, b, a];
            if (!Number.isNaN(r) && !Number.isNaN(g) && !Number.isNaN(b)) {
                return "rgba(" + array.join(",") + ")";
            }
            else {
                return "rgba(0,0,0,0)";
            }
        }
        if (color.startsWith("rgb(")) {
            color = color.replace("rgb(", "rgba(");
            color = color.substring(0, color.length - 1) + "," + opacity + ")";
        }
        if (color.startsWith("argb(")) {
            color = color.replace("argb(", "").replace(")", "");
            var array = color.split(",");
            var a = array.shift();
            array.push(a);
            color = "rgba(" + array.join(",") + ")";
        }
        return color;
    };
    GeoStyle.toOLLinearGradient = function (color, opacity, size) {
        if (opacity === void 0) { opacity = 1; }
        var canvas = document.createElement("canvas");
        var context = canvas.getContext("2d");
        context.rect(0, 0, size, size);
        var grd = context.createLinearGradient(0, 0, size, size);
        var colorStops = color.split(",");
        for (var _i = 0, colorStops_1 = colorStops; _i < colorStops_1.length; _i++) {
            var colorStop = colorStops_1[_i];
            colorStop = colorStop.trim();
            var tmpColorStop = colorStop.substr(1, colorStop.length - 2);
            var cs = tmpColorStop.split(",");
            grd.addColorStop(Number(cs[0].trim()), this.toRGBAColor(cs[1].trim(), opacity));
        }
        return grd;
    };
    GeoStyle.toOLRadialGradient = function (color, opacity, size) {
        if (opacity === void 0) { opacity = 1; }
        var canvas = document.createElement("canvas");
        var context = canvas.getContext("2d");
        context.rect(0, 0, size, size);
        var grd = context.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
        var colorStops = color.split(",");
        for (var _i = 0, colorStops_2 = colorStops; _i < colorStops_2.length; _i++) {
            var colorStop = colorStops_2[_i];
            colorStop = colorStop.trim();
            var tmpColorStop = colorStop.substr(1, colorStop.length - 2);
            var cs = tmpColorStop.split(",");
            grd.addColorStop(Number(cs[0].trim()), this.toRGBAColor(cs[1].trim(), opacity));
        }
        return grd;
    };
    return GeoStyle;
}());



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextLabelingStrategy; });
var TextLabelingStrategy = /** @class */ (function () {
    function TextLabelingStrategy() {
    }
    TextLabelingStrategy.prototype.markLocation = function (flatCoordinates, width, height, resolution, geometryType, textStyle, grid, frameState) {
        return this.markLocationCore(flatCoordinates, width, height, resolution, geometryType, textStyle, grid, frameState);
    };
    TextLabelingStrategy.prototype.markLocationCore = function (flatCoordinates, width, height, resolution, geometryType, textStyle, grid, frameState) {
        if (this.isOverlapping(flatCoordinates, width, height, textStyle.margin, textStyle.minDistance, textStyle.minPadding, textStyle.spacing, grid, frameState)) {
            return undefined;
        }
        else {
            return flatCoordinates;
        }
    };
    TextLabelingStrategy.prototype.isOverlapping = function (flatCoordinates, width, height, margin, minDistance, minPadding, spacing, grid, frameState) {
        if (flatCoordinates === undefined) {
            return true;
        }
        var gridMetrics = grid.metrics;
        var gridSize = grid.gridSize;
        var distance = (margin ? margin : 0) + (minDistance ? minDistance : 0) + (minPadding ? minPadding : 0) + (spacing ? spacing : 0);
        // if (width !== undefined && height !== undefined) {
        var coordinate = [flatCoordinates[0], flatCoordinates[1]];
        var screenCoordinates = this.convertPixelFromCoordinate(coordinate, frameState);
        var minWidth = screenCoordinates[0] - distance * 0.25;
        var minHeight = screenCoordinates[1] - distance * 0.25;
        var maxWidth = minWidth + width + distance * 0.5;
        var maxHeight = minHeight + height + distance * 0.5;
        var minWidthIndex = Math.floor(minWidth / gridSize);
        var minHeightIndex = Math.floor(minHeight / gridSize);
        var maxWidthIndex = Math.floor(maxWidth / gridSize);
        var maxHeightIndex = Math.floor(maxHeight / gridSize);
        var tmpMeterics = [];
        for (var i = minWidthIndex; i <= maxWidthIndex; i++) {
            for (var j = minHeightIndex; j <= maxHeightIndex; j++) {
                var key = i + "," + j;
                if (gridMetrics[key] !== 0) {
                    tmpMeterics.push(key);
                }
                else {
                    tmpMeterics = [];
                    return true;
                }
            }
        }
        tmpMeterics.forEach(function (o) { gridMetrics[o] = 0; });
        tmpMeterics = [];
        return false;
        // } else {
        //     let coordinate1 = [flatCoordinates[0], flatCoordinates[1]];
        //     let coordinate2 = [flatCoordinates[2], flatCoordinates[3]];
        //     let screenCoordinates1 = this.convertPixelFromCoordinate(coordinate1, frameState);
        //     let screenCoordinates2 = this.convertPixelFromCoordinate(coordinate2, frameState);
        //     let minX = (screenCoordinates1[0] < screenCoordinates2[0] ? screenCoordinates1[0] : screenCoordinates2[0]) - distance * 0.25;
        //     let minY = (screenCoordinates1[1] < screenCoordinates2[1] ? screenCoordinates1[1] : screenCoordinates2[1]) - distance * 0.25;
        //     let maxX = (screenCoordinates1[0] > screenCoordinates2[0] ? screenCoordinates1[0] : screenCoordinates2[0]) + distance * 0.5;
        //     let maxY = (screenCoordinates1[1] > screenCoordinates2[1] ? screenCoordinates1[1] : screenCoordinates2[1]) + distance * 0.5;
        //     minX = Math.floor(minX / gridSize);
        //     minY = Math.floor(minY / gridSize);
        //     maxX = Math.floor(maxX / gridSize);
        //     maxY = Math.floor(maxY / gridSize);
        //     let tmpMeterics = [];
        //     for (let i = minX; i <= maxX; i++) {
        //         for (let j = minY; j <= maxY; j++) {
        //             let key = `${i},${j}`;
        //             if (gridMetrics[key] !== 0) {
        //                 tmpMeterics.push(key);
        //             } else {
        //                 tmpMeterics = [];
        //                 return true;
        //             }
        //         }
        //     }
        //     tmpMeterics.forEach((o) => { gridMetrics[o] = 0; });
        //     tmpMeterics = [];
        //     return false;
        // }
    };
    TextLabelingStrategy.prototype.convertPixelFromCoordinate = function (coordinate, frameState) {
        if (!frameState) {
            return null;
        }
        return ol.transform.apply(frameState.coordinateToPixelTransform, coordinate.slice(0, 2));
    };
    return TextLabelingStrategy;
}());



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeoFilter; });
var GeoFilter = /** @class */ (function () {
    function GeoFilter(filterItems) {
        this.filterItems = filterItems || [];
        this.replacedValueToIndex = false;
    }
    GeoFilter.prototype.addFilterItem = function (filterItem) {
        this.filterItems.push(filterItem);
    };
    GeoFilter.prototype.initialize = function () {
        this.initializeCore();
        this.initialized = true;
    };
    GeoFilter.prototype.initializeCore = function () { };
    GeoFilter.prototype.matchOLFeature = function (feature, zoom) {
        if (!this.initialized) {
            this.initialize();
        }
        return this.matchFeatureCore(feature, zoom);
    };
    GeoFilter.prototype.replaceVaulesToPbfIndex = function (pbfLayer) {
        this.replaceVaulesToPbfIndexCore(pbfLayer);
    };
    return GeoFilter;
}());



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetectTextLabelingStrategy; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__textLabelingStrategy__ = __webpack_require__(1);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var DetectTextLabelingStrategy = /** @class */ (function (_super) {
    __extends(DetectTextLabelingStrategy, _super);
    function DetectTextLabelingStrategy() {
        var _this = _super.call(this) || this;
        _this.markLocationCore = _this.markLocationCoreCustom;
        return _this;
    }
    DetectTextLabelingStrategy.prototype.markLocationCoreCustom = function (flatCoordinates, width, height, resolution, geometryType, textStyle, grid, frameState) {
        switch (geometryType) {
            case ol.geom.GeometryType.POINT:
            case ol.geom.GeometryType.MULTI_POINT:
            case ol.geom.GeometryType.CIRCLE:
                if (this.isOverlapping(flatCoordinates, width, height, textStyle.margin, textStyle.minDistance, textStyle.minPadding, textStyle.spacing, grid, frameState)) {
                    flatCoordinates = this.movePointLabel(flatCoordinates, width, height, resolution, textStyle, grid, frameState);
                }
                break;
            case ol.geom.GeometryType.LINE_STRING:
            case ol.geom.GeometryType.MULTI_LINE_STRING:
            case ol.geom.GeometryType.POLYGON:
            case ol.geom.GeometryType.MULTI_POLYGON:
                if (this.isOverlapping(flatCoordinates, width, height, textStyle.margin, textStyle.minDistance, textStyle.minPadding, textStyle.spacing, grid, frameState)) {
                    flatCoordinates = undefined;
                }
        }
        return flatCoordinates;
    };
    DetectTextLabelingStrategy.prototype.movePointLabel = function (flatCoordinates, width, height, resolution, textStyle, grid, frameState) {
        var gridSize = grid.gridSize;
        var distance = gridSize * resolution;
        if (textStyle.placements) {
            var placements = textStyle.placements.split(",");
            for (var _i = 0, placements_1 = placements; _i < placements_1.length; _i++) {
                var placement = placements_1[_i];
                var newFlatCoordinates = this.getMovedPosition(flatCoordinates, placement, distance);
                if (!this.isOverlapping(newFlatCoordinates, width, height, textStyle.margin, textStyle.minDistance, textStyle.minPadding, textStyle.spacing, grid, frameState)) {
                    return newFlatCoordinates;
                }
            }
        }
        return undefined;
    };
    DetectTextLabelingStrategy.prototype.getMovedPosition = function (flatCoordinates, placement, distance) {
        var newFlatCoordinates;
        switch (placement) {
            case "UR":
                newFlatCoordinates = this.moveToUR(flatCoordinates, distance);
                break;
            case "U":
                newFlatCoordinates = this.moveToU(flatCoordinates, distance);
                break;
            case "UL":
                newFlatCoordinates = this.moveToUL(flatCoordinates, distance);
                break;
            case "B":
                newFlatCoordinates = this.moveToB(flatCoordinates, distance);
                break;
            case "BR":
                newFlatCoordinates = this.moveToBR(flatCoordinates, distance);
                break;
            case "BL":
                newFlatCoordinates = this.moveToBL(flatCoordinates, distance);
                break;
            case "L":
                newFlatCoordinates = this.moveToL(flatCoordinates, distance);
                break;
            case "R":
                newFlatCoordinates = this.moveToR(flatCoordinates, distance);
                break;
        }
        return newFlatCoordinates;
    };
    DetectTextLabelingStrategy.prototype.moveToUR = function (flatCoordinates, distance) {
        var newFlatCoordinates = new Array();
        newFlatCoordinates.push(flatCoordinates[0] + distance);
        newFlatCoordinates.push(flatCoordinates[1] + distance);
        newFlatCoordinates.push(flatCoordinates[2]);
        return newFlatCoordinates;
    };
    DetectTextLabelingStrategy.prototype.moveToU = function (flatCoordinates, distance) {
        var newFlatCoordinates = new Array();
        newFlatCoordinates.push(flatCoordinates[0]);
        newFlatCoordinates.push(flatCoordinates[1] + distance);
        newFlatCoordinates.push(flatCoordinates[2]);
        return newFlatCoordinates;
    };
    DetectTextLabelingStrategy.prototype.moveToUL = function (flatCoordinates, distance) {
        var newFlatCoordinates = new Array();
        newFlatCoordinates.push(flatCoordinates[0] - distance);
        newFlatCoordinates.push(flatCoordinates[1] + distance);
        newFlatCoordinates.push(flatCoordinates[2]);
        return newFlatCoordinates;
    };
    DetectTextLabelingStrategy.prototype.moveToB = function (flatCoordinates, distance) {
        var newFlatCoordinates = new Array();
        newFlatCoordinates.push(flatCoordinates[0]);
        newFlatCoordinates.push(flatCoordinates[1] - distance);
        newFlatCoordinates.push(flatCoordinates[2]);
        return newFlatCoordinates;
    };
    DetectTextLabelingStrategy.prototype.moveToBR = function (flatCoordinates, distance) {
        var newFlatCoordinates = new Array();
        newFlatCoordinates.push(flatCoordinates[0] + distance);
        newFlatCoordinates.push(flatCoordinates[1] - distance);
        newFlatCoordinates.push(flatCoordinates[2]);
        return newFlatCoordinates;
    };
    DetectTextLabelingStrategy.prototype.moveToBL = function (flatCoordinates, distance) {
        var newFlatCoordinates = new Array();
        newFlatCoordinates.push(flatCoordinates[0] - distance);
        newFlatCoordinates.push(flatCoordinates[1] - distance);
        newFlatCoordinates.push(flatCoordinates[2]);
        return newFlatCoordinates;
    };
    DetectTextLabelingStrategy.prototype.moveToL = function (flatCoordinates, distance) {
        var newFlatCoordinates = new Array();
        newFlatCoordinates.push(flatCoordinates[0] - distance);
        newFlatCoordinates.push(flatCoordinates[1]);
        newFlatCoordinates.push(flatCoordinates[2]);
        return newFlatCoordinates;
    };
    DetectTextLabelingStrategy.prototype.moveToR = function (flatCoordinates, distance) {
        var newFlatCoordinates = new Array();
        newFlatCoordinates.push(flatCoordinates[0] + distance);
        newFlatCoordinates.push(flatCoordinates[1]);
        newFlatCoordinates.push(flatCoordinates[2]);
        return newFlatCoordinates;
    };
    return DetectTextLabelingStrategy;
}(__WEBPACK_IMPORTED_MODULE_0__textLabelingStrategy__["a" /* TextLabelingStrategy */]));



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeoRangeFilter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__geoFilter__ = __webpack_require__(2);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var GeoRangeFilter = /** @class */ (function (_super) {
    __extends(GeoRangeFilter, _super);
    function GeoRangeFilter(filterItems) {
        var _this = _super.call(this, filterItems) || this;
        _this.ranges = [];
        _this.allowedValues = [];
        _this.disallowedValues = [];
        return _this;
    }
    GeoRangeFilter.prototype.initializeCore = function () {
        this.filterItems.sort(function (a, b) { return +a.value - +b.value; });
        for (var i = 0; i < this.filterItems.length; i++) {
            var filterItem = this.filterItems[i];
            this.key = filterItem.key;
            var value = +filterItem.value;
            switch (filterItem.operator) {
                case ">":
                    this.ranges.push([value + 0.00001, Number.POSITIVE_INFINITY]);
                    break;
                case ">=":
                    this.ranges.push([value, Number.POSITIVE_INFINITY]);
                    break;
                case "!=":
                    this.disallowedValues.push(value);
                    break;
                case "=":
                    this.allowedValues.push(value);
                    break;
            }
        }
        for (var i = 0; i < this.filterItems.length; i++) {
            var filterItem = this.filterItems[i];
            var value = +filterItem.value;
            var range = GeoRangeFilter.getRange(this.ranges, value);
            switch (filterItem.operator) {
                case "<":
                    if (range) {
                        range[1] = value + 0.00001;
                    }
                    else {
                        range = [Number.NEGATIVE_INFINITY, value + 0.00001];
                        this.ranges.push(range);
                    }
                    break;
                case "<=":
                    if (range) {
                        range[1] = value;
                    }
                    else {
                        range = [Number.NEGATIVE_INFINITY, value];
                        this.ranges.push(range);
                    }
                    break;
            }
        }
    };
    GeoRangeFilter.prototype.matchFeatureCore = function (feature, zoom) {
        var currentValue;
        if (this.replacedValueToIndex) {
            currentValue = feature.properties[this.key];
        }
        else {
            currentValue = feature.properties[this.key];
        }
        return this.isInRange(+currentValue);
    };
    GeoRangeFilter.prototype.replaceVaulesToPbfIndexCore = function (pbfLayer) {
        this.replacedValueToIndex = true;
    };
    GeoRangeFilter.prototype.isInRange = function (currentValue) {
        if (this.disallowedValues.includes(currentValue)) {
            return false;
        }
        if (this.allowedValues.includes(currentValue)) {
            return true;
        }
        for (var i = 0; i < this.ranges.length; i++) {
            var range = this.ranges[i];
            if (range.length === 1) {
                if (currentValue >= range[0]) {
                    return true;
                }
            }
            else {
                if (currentValue >= range[0] && currentValue <= range[1]) {
                    return true;
                }
            }
        }
    };
    GeoRangeFilter.getRange = function (ranges, value) {
        for (var i = 0; i < ranges.length; i++) {
            var range = ranges[i];
            if (value >= range[0] && value <= range[1]) {
                return range;
            }
        }
        return null;
    };
    return GeoRangeFilter;
}(__WEBPACK_IMPORTED_MODULE_0__geoFilter__["a" /* GeoFilter */]));



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__geoMap__ = __webpack_require__(6);

ol.mapsuite = {};
ol.mapsuite["GeoMap"] = __WEBPACK_IMPORTED_MODULE_0__geoMap__["a" /* Geomap */];
window["ol"] = ol;


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Geomap; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__source_geoVectorTileSource__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__geoVectorTile__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__format_geoMvt__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styleJsonCache__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styleJsonCacheItem__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tree_tree__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tree_TreeNode__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__render_geoVectorTilelayerRender__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__layer_worldStreetVectorTilelayer__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__util__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__geoTileQueue__ = __webpack_require__(31);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();











var Geomap = /** @class */ (function (_super) {
    __extends(Geomap, _super);
    function Geomap(styleJson, options) {
        var _this = _super.call(this, options) || this;
        _this.handlePostRender = _this.handlePostRenderCustom;
        var view = _this.getView();
        _this.styleJsonCache = new __WEBPACK_IMPORTED_MODULE_3__styleJsonCache__["a" /* StyleJsonCache */]();
        _this.registerGeoVector();
        if (__WEBPACK_IMPORTED_MODULE_9__util__["a" /* Util */].isStyleJsonUrl(styleJson)) {
            _this.loadStyleJsonAsyn(styleJson);
        }
        else {
            _this.loadStyleJson(styleJson);
        }
        _this.tileQueue_ = new __WEBPACK_IMPORTED_MODULE_10__geoTileQueue__["a" /* GeoTileQueue */](_this.getTilePriority.bind(_this), _this.handleTileChange_.bind(_this));
        return _this;
    }
    Geomap.prototype.loadStyleJsonAsyn = function (styleJsonUrl) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", styleJsonUrl, true);
        xhr.onload = function (event) {
            if (!xhr.status || xhr.status >= 200 && xhr.status < 300) {
                var source = void 0;
                source = xhr.responseText;
                this.loadStyleJson(JSON.parse(source));
            }
        }.bind(this);
        xhr.onerror = function () {
        }.bind(this);
        xhr.send();
    };
    Geomap.prototype.handlePostRenderCustom = function () {
        var frameState = this.frameState_;
        // Manage the tile queue
        // Image loads are expensive and a limited resource, so try to use them
        // efficiently:
        // * When the view is static we allow a large number of parallel tile loads
        //   to complete the frame as quickly as possible.
        // * When animating or interacting, image loads can cause janks, so we reduce
        //   the maximum number of loads per frame and limit the number of parallel
        //   tile loads to remain reactive to view changes and to reduce the chance of
        //   loading tiles that will quickly disappear from view.
        var tileQueue = this.tileQueue_;
        if (!tileQueue.isEmpty()) {
            var maxTotalLoading = 16;
            var maxNewLoads = maxTotalLoading;
            if (frameState) {
                var hints = frameState.viewHints;
                var checkBox = document.getElementById("loadTilesWhileInteracting");
                if (checkBox) {
                    checkBox.checked;
                    if (hints[ol.ViewHint.ANIMATING]) {
                        maxTotalLoading = checkBox.checked ? 8 : 0;
                        maxNewLoads = 2;
                    }
                    if (hints[ol.ViewHint.INTERACTING]) {
                        maxTotalLoading = checkBox.checked ? 8 : 0;
                        maxNewLoads = 2;
                    }
                }
                else {
                    if (hints[ol.ViewHint.ANIMATING]) {
                        maxTotalLoading = this.loadTilesWhileAnimating_ ? 8 : 0;
                        maxNewLoads = 2;
                    }
                    if (hints[ol.ViewHint.INTERACTING]) {
                        maxTotalLoading = this.loadTilesWhileInteracting_ ? 8 : 0;
                        maxNewLoads = 2;
                    }
                }
            }
            var currentZ = tileQueue.elements_[0][0].tileCoord[0];
            if (tileQueue.getTilesLoading() > 0) {
                for (var key in tileQueue.tilesLoadingKeys_) {
                    if (currentZ !== tileQueue.tilesLoadingKeys_[key].tileCoord[0]) {
                        var sourceKey = tileQueue.tilesLoadingKeys_[key].tileCoord.join("/");
                        tileQueue.tilesLoadingKeys_[key].disposeInternal();
                        for (var index in this.renderer_.layerRenderers_) {
                            if (this.renderer_.layerRenderers_[index].layer_ !== undefined) {
                                delete this.renderer_.layerRenderers_[index].layer_.values_.source.tileCache.entries_[sourceKey];
                            }
                        }
                        delete tileQueue.tilesLoadingKeys_[key];
                        --tileQueue.tilesLoading_;
                    }
                }
            }
            if (tileQueue.getTilesLoading() < maxTotalLoading) {
                tileQueue.reprioritize(); // FIXME only call if view has changed
                tileQueue.loadMoreTiles(maxTotalLoading, maxNewLoads);
            }
        }
        var postRenderFunctions = this.postRenderFunctions_;
        var i, ii;
        for (i = 0, ii = postRenderFunctions.length; i < ii; ++i) {
            postRenderFunctions[i](this, frameState);
        }
        postRenderFunctions.length = 0;
    };
    Geomap.prototype.loadStyleJson = function (styleJson) {
        this.styleJsonCache.clear();
        this.version = styleJson["version"];
        this.owner = styleJson["owner"];
        this.dateTime = styleJson["dateTime"];
        this.variables = this.getVariables(styleJson["variables"]);
        this.replaceVariables(styleJson, this.variables);
        var geoSources = {};
        for (var _i = 0, _a = styleJson["sources"]; _i < _a.length; _i++) {
            var sourceJson = _a[_i];
            geoSources[sourceJson["id"]] = this.createVectorTileSource(sourceJson);
        }
        for (var _b = 0, _c = styleJson["layers"]; _b < _c.length; _b++) {
            var layerJson = _c[_b];
            this.addLayer(this.createVectorTileLayer(layerJson, geoSources, styleJson["styles"]));
        }
        var tileGrid = new ol.layer.Tile({
            source: new ol.source.TileDebug({
                projection: "EPSG:3857",
                tileGrid: this.createVectorTileGrid()
            })
        });
        // this.addLayer(tileGrid);
    };
    Geomap.prototype.createVectorTileSource = function (sourceJson) {
        if (sourceJson["type"] === "MVT") {
            return new __WEBPACK_IMPORTED_MODULE_0__source_geoVectorTileSource__["a" /* GeoVectorTileSource */]({
                tileClass: __WEBPACK_IMPORTED_MODULE_1__geoVectorTile__["a" /* GeoVectorTile */],
                url: sourceJson["url"],
                format: this.getVectorSourceFormat(),
                projection: "EPSG:3857",
                tileGrid: this.createVectorTileGrid(),
                cacheSize: 128
            });
        }
    };
    Geomap.prototype.getVectorSourceFormat = function () {
        return new __WEBPACK_IMPORTED_MODULE_2__format_geoMvt__["a" /* GeoMVTFormat */](this.styleJsonCache, { minimalist: false });
    };
    Geomap.prototype.createVectorTileGrid = function () {
        return ol.tilegrid.createXYZ({ tileSize: 512, maxZoom: 22 });
    };
    Geomap.prototype.createVectorTileLayer = function (layerJson, geoSources, styleJsons) {
        var source = geoSources[layerJson["source"]];
        var vectorTileLayer = new __WEBPACK_IMPORTED_MODULE_8__layer_worldStreetVectorTilelayer__["a" /* WorldStreetVectorTileLayer */]({
            renderOrder: null,
            source: source,
            declutter: true
        });
        vectorTileLayer["id"] = layerJson["id"];
        var styleIds = layerJson["styles"];
        var view = this.getView();
        var minZoom = view.getMinZoom();
        var maxZoom = view.getMaxZoom();
        var layerName = source.getGeoFormat().getLayerName();
        var styleIdIndex = 0;
        var _loop_1 = function (styleId) {
            var styleJson = styleJsons.find(function (s) { return s.id === styleId; });
            if (styleJson) {
                var item = new __WEBPACK_IMPORTED_MODULE_4__styleJsonCacheItem__["a" /* StyleJsonCacheItem */](styleJson, minZoom, maxZoom, layerName);
                for (var zoom = item.minZoom; zoom <= item.maxZoom; zoom++) {
                    var treeNode = new __WEBPACK_IMPORTED_MODULE_6__tree_TreeNode__["a" /* TreeNode */](item);
                    this_1.createChildrenNode(treeNode, item, zoom);
                    this_1.styleJsonCache.add(zoom, layerJson["id"], item.dataLayerName, new __WEBPACK_IMPORTED_MODULE_5__tree_tree__["a" /* Tree */](treeNode, styleIdIndex));
                }
                styleIdIndex += 1;
            }
        };
        var this_1 = this;
        for (var _i = 0, styleIds_1 = styleIds; _i < styleIds_1.length; _i++) {
            var styleId = styleIds_1[_i];
            _loop_1(styleId);
        }
        return vectorTileLayer;
    };
    Geomap.prototype.createChildrenNode = function (currentNode, item, zoom) {
        if (item.subStyleCacheItems && item.subStyleCacheItems.length > 0) {
            for (var i = 0, ii = item.subStyleCacheItems.length; i < ii; i++) {
                var subStyleItem = item.subStyleCacheItems[i];
                if (zoom >= subStyleItem.minZoom && zoom <= subStyleItem.maxZoom) {
                    var node = new __WEBPACK_IMPORTED_MODULE_6__tree_TreeNode__["a" /* TreeNode */](subStyleItem);
                    currentNode.children.push(node);
                    this.createChildrenNode(node, subStyleItem, zoom);
                }
            }
        }
    };
    Geomap.prototype.getVariables = function (variablesJson) {
        var variables = {};
        for (var variablesName in variablesJson) {
            if (variablesName.indexOf(",") > 0) {
                var variableNames = variablesName.split(",");
                for (var i = 0; i < variableNames.length; i++) {
                    variables[variableNames[i]] = variablesJson[variablesName];
                }
            }
            else {
                variables[variablesName] = variablesJson[variablesName];
            }
        }
        return variables;
    };
    Geomap.prototype.replaceVariables = function (styleJson, variables) {
        for (var propertyName in styleJson) {
            var property = styleJson[propertyName];
            if (typeof property === "object") {
                this.replaceVariables(property, variables);
            }
            else if (typeof property === "string") {
                var keyWordIndex = property.indexOf("@");
                if (keyWordIndex >= 0) {
                    var lines = property.split(" ");
                    if (lines.length > 1) {
                        var tempWord = void 0;
                        var results = [];
                        for (var i = 0; i < lines.length; i++) {
                            tempWord = lines[i];
                            if (tempWord.startsWith("@")) {
                                tempWord = variables[tempWord];
                            }
                            results.push(tempWord);
                        }
                        styleJson[propertyName] = results.join(" ");
                    }
                    else {
                        styleJson[propertyName] = variables[lines[0]];
                    }
                }
            }
        }
    };
    Geomap.prototype.registerGeoVector = function () {
        ol.LayerType["GEOVECTORTILE"] = "GEOVECTORTILE";
        ol.plugins.register(ol.PluginType.LAYER_RENDERER, __WEBPACK_IMPORTED_MODULE_7__render_geoVectorTilelayerRender__["a" /* GeoVectorTileLayerRender */]);
    };
    return Geomap;
}(ol.Map));



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeoVectorTileSource; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GeoVectorTileSource = /** @class */ (function (_super) {
    __extends(GeoVectorTileSource, _super);
    function GeoVectorTileSource(options) {
        var _this = _super.call(this, options) || this;
        _this.geoFormat = options.format;
        _this.tileLoadFunction = GeoVectorTileSource.vectorTileLoadFunction;
        return _this;
    }
    GeoVectorTileSource.prototype.getGeoFormat = function () {
        return this.geoFormat;
    };
    GeoVectorTileSource.vectorTileLoadFunction = function (tile, url) {
        var loader = GeoVectorTileSource.loadFeaturesXhr(url, tile.getFormat(), tile.onLoad.bind(tile), tile.onError.bind(tile));
        tile.setLoader(loader);
    };
    GeoVectorTileSource.loadFeaturesXhr = function (url, format, success, failure) {
        return (function (extent, resolution, projection) {
            var internalFailure = function () {
                var extension = url.substring(url.lastIndexOf("."));
                var parts = url.substring(0, url.lastIndexOf(".")).split("/");
                var y = +parts.pop();
                var x = +parts.pop();
                var z = +parts.pop();
                if (z > 0) {
                    url =
                        parts.join("/") +
                            "/" +
                            (z - 1) +
                            "/" +
                            Math.floor(x / 2) +
                            "/" +
                            Math.floor(y / 2) +
                            extension;
                    process.call(this, z - 1, Math.floor(x / 2), Math.floor(y / 2), originalZ);
                }
                else {
                    failure.call(this);
                }
            };
            var process = function (z, x, y, originalZoom) {
                if (z > format.dataMaxZoom) {
                    format instanceof ol.format.MVT ? internalFailure.call(this) : failure.call(this);
                }
                else {
                    var hasRequested = false;
                    if (z === format.dataMaxZoom) {
                        var callback = function (tile, successFunction, features, instructs, sourceProjection, lastExtent) {
                            var originalCoord = tile.tileCoord;
                            if (z) {
                                tile.tileCoord = [z, x, -y - 1];
                            }
                            successFunction.call(tile, [features, instructs], sourceProjection, lastExtent);
                        };
                        hasRequested = format.tryLoadTileFromCacheOrRegosterLoadEvent([z, x, -y - 1], originalZoom, { tile: this, successFunction: success, callback: callback });
                        if (!hasRequested) {
                            var originalCoord = this.tileCoord;
                            var source = format.getCachedSource([z, x, -y - 1]);
                            if (source) {
                                format.addSourceToCache(source, originalZoom, { featureProjection: projection, originalCoord: originalCoord, tileCoord: [z, x, -y - 1] });
                                hasRequested = true;
                            }
                        }
                    }
                    if (!hasRequested) {
                        var isDataMaxZoom_1 = z === format.dataMaxZoom;
                        var xhr_1 = new XMLHttpRequest();
                        xhr_1.open("GET", typeof url === "function" ? url(extent, resolution, projection) : url, true);
                        if (format.getType() === ol.format.FormatType.ARRAY_BUFFER) {
                            xhr_1.responseType = "arraybuffer";
                        }
                        xhr_1.onload = function (event) {
                            if (!xhr_1.status || xhr_1.status >= 200 && xhr_1.status < 300) {
                                var type = format.getType();
                                /** @type {Document|Node|Object|string|undefined} */
                                var source = void 0;
                                if (type === ol.format.FormatType.JSON ||
                                    type === ol.format.FormatType.TEXT) {
                                    source = xhr_1.responseText;
                                }
                                else if (type === ol.format.FormatType.XML) {
                                    source = xhr_1.responseXML;
                                    if (!source) {
                                        source = ol.xml.parse(xhr_1.responseText);
                                    }
                                }
                                else if (type === ol.format.FormatType.ARRAY_BUFFER) {
                                    source = /** @type {ArrayBuffer} */ (xhr_1.response);
                                }
                                if (source) {
                                    var originalCoord = this.tileCoord;
                                    if (isDataMaxZoom_1) {
                                        // success.call(this, format.readFeaturesAndCreateInstructs(source, originalZoom, { featureProjection: projection, originalCoord: originalCoord, tilecoord: this.tileCoord }), format.readProjection(source), format.getLastExtent());
                                        format.addSourceToCache(source, originalZoom, { featureProjection: projection, originalCoord: originalCoord, tileCoord: [z, x, -y - 1] });
                                    }
                                    else {
                                        success.call(this, format.readFeaturesAndCreateInstructs(source, originalZoom, { featureProjection: projection, originalCoord: originalCoord, tilecoord: this.tileCoord }), format.readProjection(source), format.getLastExtent());
                                    }
                                }
                                else {
                                    format instanceof ol.format.MVT ? internalFailure.call(this) : failure.call(this);
                                }
                            }
                            else {
                                failure.call(this);
                            }
                        }.bind(this);
                        xhr_1.onerror = function () {
                            failure.call(this);
                        }.bind(this);
                        this["xhr"] = xhr_1;
                        xhr_1.send();
                    }
                }
            };
            var parts = url.substring(0, url.lastIndexOf(".")).split("/");
            var y = +parts.pop();
            var x = +parts.pop();
            var z = +parts.pop();
            var originalZ = z;
            process.call(this, z, x, y, originalZ);
        });
    };
    return GeoVectorTileSource;
}(ol.source.VectorTile));



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeoVectorTile; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GeoVectorTile = /** @class */ (function (_super) {
    __extends(GeoVectorTile, _super);
    function GeoVectorTile(tileCoord, state, src, format, tileLoadFunction) {
        var _this = _super.call(this, tileCoord, state, src, format, tileLoadFunction) || this;
        _this.disposeInternal = _this.disposeInternalCustom;
        return _this;
    }
    GeoVectorTile.prototype.disposeInternalCustom = function () {
        this.features_ = null;
        this.replayGroups_ = {};
        // this.state = ol.TileState.ABORT;
        this.state = ol.TileState.IDLE;
        this.changed();
        if (this["xhr"] != undefined) {
            this["xhr"].abort();
        }
        ol.Tile.prototype.disposeInternal.call(this);
    };
    GeoVectorTile.prototype.onLoad = function (featuresAndInstructs, dataProjection, extent) {
        this.setProjection(dataProjection);
        this.setRenderFeatureInstructs(featuresAndInstructs[1]);
        this.setFeatures(featuresAndInstructs[0]);
        this.setExtent(extent);
    };
    GeoVectorTile.prototype.setRenderFeatureInstructs = function (instructs) {
        this.instructs = instructs;
    };
    GeoVectorTile.prototype.getRenderFeatureInstructs = function (instructs) {
        return this.instructs;
    };
    return GeoVectorTile;
}(ol.VectorTile));



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeoMVTFormat; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GeoMVTFormat = /** @class */ (function (_super) {
    __extends(GeoMVTFormat, _super);
    function GeoMVTFormat(styleJSonCache, options) {
        var _this = this;
        options.layerName = options.layerName ? options.layerName : "layerName";
        _this = _super.call(this, options) || this;
        _this.minimalist = options.minimalist;
        _this.dataMaxZoom = options.dataMaxZoom ? options.dataMaxZoom : 14;
        _this.layerName = options.layerName;
        _this.styleJsonCache = styleJSonCache;
        _this.dataMaxZoomCache = {};
        _this.registeredTileInfo = {};
        _this.lruCache = new ol.structs.LRUCache(15);
        _this.sourceCache = {};
        return _this;
    }
    GeoMVTFormat.prototype.getLayerName = function () {
        return this.layerName;
    };
    GeoMVTFormat.prototype.getCachedSource = function (tileCoord) {
        return this.sourceCache[tileCoord];
    };
    GeoMVTFormat.prototype.tryLoadTileFromCacheOrRegosterLoadEvent = function (tileCoord, originalZoom, cacheTileInfo) {
        var hasRequested = true;
        var tileCoordKey = tileCoord.join(",") + "," + originalZoom;
        if (this.lruCache.containsKey(tileCoordKey)) {
            var oTile = this.lruCache.get(tileCoordKey);
            this.cachedTileCallback(oTile, [cacheTileInfo]);
        }
        else {
            if (this.registeredTileInfo[tileCoordKey] === undefined) {
                this.registeredTileInfo[tileCoordKey] = [];
                hasRequested = false;
            }
            this.registeredTileInfo[tileCoordKey].push(cacheTileInfo);
        }
        return hasRequested;
    };
    GeoMVTFormat.prototype.addSourceToCache = function (source, zoom, options) {
        if (this.sourceCache[options.tileCoord] === undefined) {
            this.sourceCache[options.tileCoord] = source;
        }
        var instructsTree = this.readFeaturesAndCreateInstructTrees(source, zoom, options);
        var instructs = this.getInstructs(instructsTree);
        var subTileInstructCaches = this.createSubTileInstructCaches(instructs, options);
        var sourceProject = this.readProjection(source);
        var tileCoordKey = options.tileCoord.join(",") + "," + zoom;
        var lastExtent = this.getLastExtent();
        var oTile = { subTileInstructCaches: subTileInstructCaches, sourceProject: sourceProject, lastExtent: lastExtent };
        this.lruCache.set(tileCoordKey, oTile);
        var cachedTileInfo = this.registeredTileInfo[tileCoordKey];
        delete this.registeredTileInfo[tileCoordKey];
        this.cachedTileCallback(oTile, cachedTileInfo);
    };
    GeoMVTFormat.prototype.readFeaturesAndCreateInstructTrees = function (source, zoom, options) {
        var pbf = new ol.ext.PBF((source));
        var pbfLayers = pbf.readFields(ol.format.MVT.pbfReaders_.layers, {});
        var features = [];
        var pbfLayer;
        var zoomMatchedGeoStylesGroupByLayerId = this.styleJsonCache.geoStyleGroupByZoom[zoom];
        if (!zoomMatchedGeoStylesGroupByLayerId) {
            return features;
        }
        var layerIdMatchedGeoStylesGroupByPbfLayerName = zoomMatchedGeoStylesGroupByLayerId["osm_texas_layers"];
        if (!layerIdMatchedGeoStylesGroupByPbfLayerName) {
            return features;
        }
        var pbfLayerNamesWithGeoStyle = [];
        for (var pbfLayerName in layerIdMatchedGeoStylesGroupByPbfLayerName) {
            pbfLayerNamesWithGeoStyle.push(pbfLayerName);
        }
        var instructsCache = [];
        var treeStyleFirstCache = [];
        for (var name_1 in pbfLayers) {
            if (this.layers_ && this.layers_.indexOf(name_1) === -1) {
                continue;
            }
            if (pbfLayerNamesWithGeoStyle.indexOf(name_1) === -1) {
                continue;
            }
            pbfLayer = pbfLayers[name_1];
            options["extent"] = pbfLayer.extent;
            var cacheTrees = layerIdMatchedGeoStylesGroupByPbfLayerName[name_1];
            if (cacheTrees && cacheTrees.length > 0) {
                this.replaceFiltersToIndexOfPbfLayer(cacheTrees, pbfLayer);
                var _loop_1 = function (i) {
                    var rawFeature = ol.format.MVT.readRawFeature_(pbf, pbfLayer, i);
                    var feature = void 0;
                    var _loop_2 = function (j) {
                        var cacheTree = cacheTrees[j];
                        var treeIndex = cacheTree.treeIndex;
                        if (instructsCache[treeIndex] === undefined) {
                            instructsCache[treeIndex] = [];
                            treeStyleFirstCache[treeIndex] = cacheTree.root.data.styleFirst;
                        }
                        var matchedNode;
                        var checkNodeMatched = function (node) {
                            var styleJsonCacheItem = node.data;
                            var matched = true;
                            for (var i_1 = 0, ii = styleJsonCacheItem.filters.length; i_1 < ii; i_1++) {
                                var filter = styleJsonCacheItem.filters[i_1];
                                if (!filter.matchOLFeature(rawFeature, zoom)) {
                                    matched = false;
                                }
                            }
                            return matched;
                        };
                        var selectNode = function (node) {
                            matchedNode = node.data;
                        };
                        cacheTree.traverseNode(checkNodeMatched, selectNode);
                        if (matchedNode) {
                            if (feature === undefined) {
                                feature = this_1.createFeature_(pbf, rawFeature);
                                if (this_1.minimalist) {
                                    feature.properties_ = {};
                                }
                                //// We don't need cache the feature currentlu
                                // features.push(feature);
                            }
                            var zindex = void 0;
                            if (cacheTree.root.data.zIndex) {
                                zindex = rawFeature.properties[cacheTree.root.data.zIndex];
                                feature.properties_[cacheTree.root.data.zIndex] = zindex;
                                // Todo:Pubilc a function: getFeatureZIndex
                                zindex = Math.abs(zindex);
                                if (isNaN(zindex)) {
                                    zindex = 0;
                                }
                            }
                            if (isNaN(zindex)) {
                                zindex = 0;
                            }
                            if (instructsCache[treeIndex][zindex] === undefined) {
                                instructsCache[treeIndex][zindex] = [];
                            }
                            instructsCache[treeIndex][zindex].push([feature, matchedNode]);
                            if (this_1.minimalist) {
                                if (matchedNode.geoStyle && (matchedNode.geoStyle.constructor.name === "GeoTextStyle" || matchedNode.geoStyle.constructor.name === "GeoShieldStyle")) {
                                    feature.properties_[matchedNode.geoStyle.name] = rawFeature.properties[matchedNode.geoStyle.name];
                                }
                                if (matchedNode.childrenGeoStyles && matchedNode.childrenGeoStyles.length > 0) {
                                    for (var i_2 = 0; i_2 < matchedNode.childrenGeoStyles.length; i_2++) {
                                        feature.properties_[matchedNode.childrenGeoStyles[i_2].name] = rawFeature.properties[matchedNode.childrenGeoStyles[i_2].name];
                                    }
                                }
                            }
                            feature.extent_ = undefined;
                        }
                    };
                    for (var j = 0; j < cacheTrees.length; j++) {
                        _loop_2(j);
                    }
                };
                var this_1 = this;
                for (var i = 0; i < pbfLayer.length; i++) {
                    _loop_1(i);
                }
            }
            this.extent_ = pbfLayer ? [0, 0, pbfLayer.extent, pbfLayer.extent] : null;
        }
        return instructsCache;
    };
    GeoMVTFormat.prototype.getInstructs = function (instructsTree) {
        var instructs = [];
        // the tress index means the index of SyleId.
        for (var i = 0; i < instructsTree.length; i++) {
            var instructsInOneTree = instructsTree[i];
            if (instructsInOneTree) {
                for (var j = 0; j < instructsInOneTree.length; j++) {
                    var instructsInOneZIndex = instructsInOneTree[j];
                    if (instructsInOneZIndex) {
                        var childrenInstructs = [];
                        for (var h = 0; h < instructsInOneZIndex.length; h++) {
                            var instruct = instructsInOneZIndex[h];
                            instructs.push([instruct[0], instruct[1].geoStyle]);
                            if (instruct[1].childrenGeoStyles) {
                                for (var k = 0; k < instruct[1].childrenGeoStyles.length; k++) {
                                    childrenInstructs.push([instruct[0], instruct[1].childrenGeoStyles[k]]);
                                }
                            }
                        }
                        Array.prototype.push.apply(instructs, childrenInstructs);
                    }
                }
            }
        }
        return instructs;
    };
    GeoMVTFormat.prototype.createSubTileInstructCaches = function (instructs, options) {
        var subTileCachedInstruct = {};
        var offsetZ = options.originalCoord[0] - options.tileCoord[0];
        var tileSize = options.extent / Math.pow(2, offsetZ);
        var tileRange = this.getTileRange(options.tileCoord, options.originalCoord[0]);
        var tiles = {};
        for (var x = tileRange[0]; x <= tileRange[2]; x++) {
            var minX = (x - tileRange[0]) * tileSize;
            var maxX = (x - tileRange[0] + 1) * tileSize;
            for (var y = tileRange[3]; y >= tileRange[1]; y--) {
                var minY = (tileRange[3] - y) * tileSize;
                var maxY = (tileRange[3] - y + 1) * tileSize;
                tiles["" + [x, y]] = [minX, minY, maxX, maxY];
            }
        }
        for (var i = 0; i < instructs.length; i++) {
            var instruct = instructs[i];
            var featureExtent = instruct[0].getGeometry().getExtent();
            var featureTileRange = this.getFeatureTileRange(featureExtent, options.extent, tileSize, options.tileCoord, offsetZ);
            for (var x = tileRange[0] > featureTileRange[0] ? tileRange[0] : featureTileRange[0], xx = featureTileRange[2] > tileRange[2] ? tileRange[2] : featureTileRange[2]; x <= xx; x++) {
                for (var y = tileRange[1] > featureTileRange[1] ? tileRange[1] : featureTileRange[1], yy = featureTileRange[3] > tileRange[3] ? tileRange[3] : featureTileRange[3]; y <= yy; y++) {
                    var tileKey = "" + [x, y];
                    var tileExtent = tiles[tileKey];
                    if (subTileCachedInstruct[tileKey] === undefined) {
                        subTileCachedInstruct[tileKey] = [];
                    }
                    subTileCachedInstruct[tileKey].push(instruct);
                    // if (ol.extent.intersects(tileExtent, instruct[0].getGeometry())) {
                    // }
                }
            }
        }
        return subTileCachedInstruct;
    };
    GeoMVTFormat.prototype.cachedTileCallback = function (oTile, cacheTileInfos) {
        for (var i = 0; i < cacheTileInfos.length; i++) {
            var cacheTileInfo = cacheTileInfos[i];
            var tileKey = "" + cacheTileInfo.tile.tileCoord[1] + "," + cacheTileInfo.tile.tileCoord[2];
            cacheTileInfo.callback(cacheTileInfo.tile, cacheTileInfo.successFunction, [], oTile.subTileInstructCaches[tileKey], oTile.sourceProject, oTile.lastExtent);
        }
    };
    GeoMVTFormat.prototype.getTileRange = function (tileCoord, zoom) {
        var x = tileCoord[1];
        var y = tileCoord[2];
        var minX = x;
        var maxX = x;
        var minY = y;
        var maxY = y;
        for (var i = tileCoord[0]; i < zoom; i++) {
            minX = minX * 2;
            maxX = maxX * 2 + 1;
            minY = minY * 2;
            maxY = maxY * 2 + 1;
        }
        return [minX, minY, maxX, maxY];
    };
    GeoMVTFormat.prototype.getFeatureTileRange = function (featureExtent, extent, tileSize, requestTileCoord, offsetZ) {
        var minX = requestTileCoord[1] * Math.pow(2, offsetZ) + Math.floor(featureExtent[0] / tileSize);
        var maxX = requestTileCoord[1] * Math.pow(2, offsetZ) + Math.floor(featureExtent[2] / tileSize);
        var minY = requestTileCoord[2] * Math.pow(2, offsetZ) + Math.floor((extent - featureExtent[3]) / tileSize);
        var maxY = requestTileCoord[2] * Math.pow(2, offsetZ) + Math.floor((extent - featureExtent[1]) / tileSize);
        return [minX, minY, maxX, maxY];
    };
    GeoMVTFormat.prototype.getExtent = function (originalCoord, tilecoord, extent) {
        var ox = originalCoord[1];
        var x = tilecoord[1];
        var xPath = [];
        while (ox !== x) {
            var remainder = ox % 2;
            xPath.push(remainder);
            ox = Math.floor(ox / 2);
        }
        var newExtent = extent;
        var offsetX = 0;
        for (var i = xPath.length - 1; i >= 0; i--) {
            newExtent = newExtent / 2;
            if (xPath[i] === 1) {
                offsetX += newExtent;
            }
        }
        var oy = originalCoord[2];
        var y = tilecoord[2];
        var yPath = [];
        while (oy !== y) {
            var remainder = oy % 2;
            yPath.push(remainder);
            oy = Math.floor(oy / 2);
        }
        newExtent = extent;
        var offsetY = 0;
        for (var i = yPath.length - 1; i >= 0; i--) {
            newExtent = newExtent / 2;
            if (yPath[i] === 0) {
                offsetY += newExtent;
            }
        }
        // TODO: add the buffer
        return [offsetX, offsetY, offsetX + newExtent, offsetY + newExtent];
    };
    GeoMVTFormat.prototype.replaceFiltersToIndexOfPbfLayer = function (cacheTrees, pbfLayer) {
        for (var i = 0, ii = cacheTrees.length; i < ii; i++) {
            var cacheTree = cacheTrees[i];
            this.replaceCacheItemFiltersToIndexOfPbfLayer(cacheTree.root, pbfLayer);
        }
    };
    GeoMVTFormat.prototype.replaceCacheItemFiltersToIndexOfPbfLayer = function (node, pbfLayer) {
        var data = node.data;
        var geoFilter;
        for (var i = 0, ii = data.filters.length; i < ii; i++) {
            geoFilter = data.filters[i];
            geoFilter.replaceVaulesToPbfIndex(pbfLayer);
        }
        if (node.children) {
            for (var i = 0, ii = node.children.length; i < ii; i++) {
                this.replaceCacheItemFiltersToIndexOfPbfLayer(node.children[i], pbfLayer);
            }
        }
    };
    GeoMVTFormat.prototype.readFeaturesAndCreateInstructs = function (source, zoom, options) {
        var pbf = new ol.ext.PBF((source));
        var pbfLayers = pbf.readFields(ol.format.MVT.pbfReaders_.layers, {});
        var features = [];
        var pbfLayer;
        var zoomMatchedGeoStylesGroupByLayerId = this.styleJsonCache.geoStyleGroupByZoom[zoom];
        if (!zoomMatchedGeoStylesGroupByLayerId) {
            return features;
        }
        var layerIdMatchedGeoStylesGroupByPbfLayerName = zoomMatchedGeoStylesGroupByLayerId["osm_texas_layers"];
        if (!layerIdMatchedGeoStylesGroupByPbfLayerName) {
            return features;
        }
        var pbfLayerNamesWithGeoStyle = [];
        for (var pbfLayerName in layerIdMatchedGeoStylesGroupByPbfLayerName) {
            pbfLayerNamesWithGeoStyle.push(pbfLayerName);
        }
        var instructsCache = [];
        var treeStyleFirstCache = [];
        for (var name_2 in pbfLayers) {
            if (this.layers_ && this.layers_.indexOf(name_2) === -1) {
                continue;
            }
            if (pbfLayerNamesWithGeoStyle.indexOf(name_2) === -1) {
                continue;
            }
            pbfLayer = pbfLayers[name_2];
            var cacheTrees = layerIdMatchedGeoStylesGroupByPbfLayerName[name_2];
            if (cacheTrees && cacheTrees.length > 0) {
                this.replaceFiltersToIndexOfPbfLayer(cacheTrees, pbfLayer);
                var _loop_3 = function (i) {
                    var rawFeature = ol.format.MVT.readRawFeature_(pbf, pbfLayer, i);
                    var feature = void 0;
                    var _loop_4 = function (j) {
                        var cacheTree = cacheTrees[j];
                        var treeIndex = cacheTree.treeIndex;
                        if (instructsCache[treeIndex] === undefined) {
                            instructsCache[treeIndex] = [];
                            treeStyleFirstCache[treeIndex] = cacheTree.root.data.styleFirst;
                        }
                        var matchedNode;
                        var checkNodeMatched = function (node) {
                            var styleJsonCacheItem = node.data;
                            var matched = true;
                            for (var i_3 = 0, ii = styleJsonCacheItem.filters.length; i_3 < ii; i_3++) {
                                var filter = styleJsonCacheItem.filters[i_3];
                                if (!filter.matchOLFeature(rawFeature, zoom)) {
                                    matched = false;
                                }
                            }
                            return matched;
                        };
                        var selectNode = function (node) {
                            matchedNode = node.data;
                        };
                        cacheTree.traverseNode(checkNodeMatched, selectNode);
                        if (matchedNode) {
                            if (feature === undefined) {
                                feature = this_2.createFeature_(pbf, rawFeature);
                                if (this_2.minimalist) {
                                    feature.properties_ = {};
                                }
                                // We don't need cache the feature currentlu
                                // features.push(feature);
                            }
                            var zindex = void 0;
                            if (cacheTree.root.data.zIndex) {
                                zindex = rawFeature.properties[cacheTree.root.data.zIndex];
                                feature.properties_[cacheTree.root.data.zIndex] = zindex;
                                // Todo:Pubilc a function: getFeatureZIndex
                                zindex = Math.abs(zindex);
                                if (isNaN(zindex)) {
                                    zindex = 0;
                                }
                            }
                            if (isNaN(zindex)) {
                                zindex = 0;
                            }
                            if (instructsCache[treeIndex][zindex] === undefined) {
                                instructsCache[treeIndex][zindex] = [];
                            }
                            instructsCache[treeIndex][zindex].push([feature, matchedNode]);
                            if (this_2.minimalist) {
                                if (matchedNode.geoStyle && matchedNode.geoStyle.constructor.name === "GeoTextStyle") {
                                    feature.properties_[matchedNode.geoStyle.name] = rawFeature.properties[matchedNode.geoStyle.name];
                                }
                                if (matchedNode.childrenGeoStyles && matchedNode.childrenGeoStyles.length > 0) {
                                    for (var i_4 = 0; i_4 < matchedNode.childrenGeoStyles.length; i_4++) {
                                        feature.properties_[matchedNode.childrenGeoStyles[i_4].name] = rawFeature.properties[matchedNode.childrenGeoStyles[i_4].name];
                                    }
                                }
                            }
                            feature.extent_ = undefined;
                        }
                    };
                    for (var j = 0; j < cacheTrees.length; j++) {
                        _loop_4(j);
                    }
                };
                var this_2 = this;
                for (var i = 0; i < pbfLayer.length; i++) {
                    _loop_3(i);
                }
            }
            this.extent_ = pbfLayer ? [0, 0, pbfLayer.extent, pbfLayer.extent] : null;
        }
        var instructs = [];
        // the tress index means the index of SyleId.
        for (var i = 0; i < instructsCache.length; i++) {
            var instructsInOneTree = instructsCache[i];
            if (instructsInOneTree) {
                var styleFirst = treeStyleFirstCache[i];
                for (var j = 0; j < instructsInOneTree.length; j++) {
                    var instructsInOneZIndex = instructsInOneTree[j];
                    if (instructsInOneZIndex) {
                        // TODO remove the testing code
                        styleFirst = true;
                        if (styleFirst) {
                            var childrenInstructs = [];
                            for (var h = 0; h < instructsInOneZIndex.length; h++) {
                                var instruct = instructsInOneZIndex[h];
                                instructs.push([instruct[0], instruct[1].geoStyle]);
                                if (instruct[1].childrenGeoStyles) {
                                    for (var k = 0; k < instruct[1].childrenGeoStyles.length; k++) {
                                        childrenInstructs.push([instruct[0], instruct[1].childrenGeoStyles[k]]);
                                    }
                                }
                            }
                            Array.prototype.push.apply(instructs, childrenInstructs);
                        }
                        else {
                            for (var h = 0; h < instructsInOneZIndex.length; h++) {
                                var instruct = instructsInOneZIndex[h];
                                instructs.push([instruct[0], instruct[1].geoStyle]);
                                if (instruct[1].childrenGeoStyles) {
                                    for (var k = 0; k < instruct[1].childrenGeoStyles.length; k++) {
                                        instructs.push([instruct[0], instruct[1].childrenGeoStyles[k]]);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return [features, instructs];
    };
    GeoMVTFormat.readRawFeature_ = function (pbf, layer, i) {
        pbf.pos = layer.features[i];
        var end = pbf.readVarint() + pbf.pos;
        var feature = {
            layer: layer,
            type: 0,
            properties: {},
            propertiesIndex: {}
        };
        pbf.readFields(ol.format.MVT.pbfReaders_.featureColumnValue, feature, end);
        return feature;
    };
    GeoMVTFormat.featureColumnValue = function (tag, feature, pbf) {
        if (tag === 1) {
            feature.id = pbf.readVarint();
        }
        else if (tag === 2) {
            var end = pbf.readVarint() + pbf.pos;
            while (pbf.pos < end) {
                var key = pbf.readVarint();
                var value = pbf.readVarint();
                feature.propertiesIndex[key] = value;
                key = feature.layer.keys[key];
                value = feature.layer.values[value];
                feature.properties[key] = value;
            }
        }
        else if (tag === 3) {
            feature.type = pbf.readVarint();
        }
        else if (tag === 4) {
            feature.geometry = pbf.pos;
        }
    };
    return GeoMVTFormat;
}(ol.format.MVT));

ol.format.MVT.readRawFeature_ = GeoMVTFormat.readRawFeature_;
ol.format.MVT.pbfReaders_["featureColumnValue"] = GeoMVTFormat.featureColumnValue;


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StyleJsonCache; });
var StyleJsonCache = /** @class */ (function () {
    function StyleJsonCache() {
        this.geoStyleGroupByZoom = [];
    }
    StyleJsonCache.prototype.add = function (zoom, layerId, dataLayerName, tree) {
        if (this.geoStyleGroupByZoom[zoom] === undefined) {
            this.geoStyleGroupByZoom[zoom] = {};
        }
        if (this.geoStyleGroupByZoom[zoom][layerId] === undefined) {
            this.geoStyleGroupByZoom[zoom][layerId] = {};
        }
        if (this.geoStyleGroupByZoom[zoom][layerId][dataLayerName] === undefined) {
            this.geoStyleGroupByZoom[zoom][layerId][dataLayerName] = [];
        }
        this.geoStyleGroupByZoom[zoom][layerId][dataLayerName].push(tree);
    };
    StyleJsonCache.prototype.clear = function () {
        this.geoStyleGroupByZoom.length = 0;
    };
    return StyleJsonCache;
}());



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StyleJsonCacheItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__filter_geoFilterItem__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__filter_geoZoomFilter__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filter_geoStringAttributeFilter__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__filter_geoRegexFilter__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__filter_geoNumberAttributeFilter__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__style_geoAreaStyle__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__style_geoLineStyle__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__style_geoPointStyle__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__style_geoTextStyle__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__style_geoShieldStyle__ = __webpack_require__(22);










var StyleJsonCacheItem = /** @class */ (function () {
    function StyleJsonCacheItem(styleJson, minZoom, maxZoom, dataLayerColumnName) {
        this.childrenGeoStyles = [];
        this.subStyleCacheItems = [];
        this.minZoom = minZoom;
        this.maxZoom = maxZoom;
        this.zIndex = styleJson["z-index"];
        this.styleFirst = styleJson["style-first"];
        this.filters = this.createFilters(styleJson.filter, dataLayerColumnName) || [];
        this.createSubItems(styleJson, dataLayerColumnName);
        this.geoStyle = this.createGeoStyle(styleJson);
        this.createChildrenGeoStyle(styleJson);
    }
    StyleJsonCacheItem.prototype.createFilters = function (filterString, dataLayerColumnName) {
        if (filterString) {
            var expression = "(\\w+?=~'.+?')|(\\w+?[<>!=]*'[^;]+?')|(\\w+?[<>!=]*[^;]+)";
            var regex = new RegExp(expression, "g");
            var results = filterString.match(regex);
            var rangeFilters = {};
            var filters = [];
            var geoZoomFilter = void 0;
            var dataLayerNameFilter = void 0;
            for (var i = 0; i < results.length; i++) {
                if (results[i]) {
                    var filterItem = __WEBPACK_IMPORTED_MODULE_0__filter_geoFilterItem__["a" /* GeoFilterItem */].createFilterItem(results[i]);
                    if (filterItem.value.startsWith("~'")) {
                        filters.push(new __WEBPACK_IMPORTED_MODULE_3__filter_geoRegexFilter__["a" /* GeoRegexFilter */]([filterItem]));
                    }
                    else if (filterItem.key === "zoom") {
                        if (geoZoomFilter === undefined) {
                            geoZoomFilter = new __WEBPACK_IMPORTED_MODULE_1__filter_geoZoomFilter__["a" /* GeoZoomFilter */]([]);
                        }
                        geoZoomFilter.addFilterItem(filterItem);
                    }
                    else if (filterItem.value.includes("'")) {
                        if (filterItem.key === dataLayerColumnName) {
                            if (dataLayerNameFilter === undefined) {
                                dataLayerNameFilter = new __WEBPACK_IMPORTED_MODULE_2__filter_geoStringAttributeFilter__["a" /* GeoStringAttributeFilter */]([filterItem]);
                            }
                        }
                        else {
                            filters.push(new __WEBPACK_IMPORTED_MODULE_2__filter_geoStringAttributeFilter__["a" /* GeoStringAttributeFilter */]([filterItem]));
                        }
                    }
                    else {
                        rangeFilters[filterItem.key] = rangeFilters[filterItem.key] || new __WEBPACK_IMPORTED_MODULE_4__filter_geoNumberAttributeFilter__["a" /* GeoNumberAttributeFilter */]([]);
                        rangeFilters[filterItem.key].addFilterItem(filterItem);
                    }
                }
            }
            // update the minZoom and maxZoom by ZoomFilter
            if (geoZoomFilter) {
                geoZoomFilter.initialize();
                if (geoZoomFilter.ranges.length > 0) {
                    this.minZoom = +geoZoomFilter.ranges[0][0];
                    this.maxZoom = +geoZoomFilter.ranges[0][1];
                }
                else {
                    this.minZoom = +geoZoomFilter.allowedValues[0];
                    this.maxZoom = +geoZoomFilter.allowedValues[0];
                }
            }
            // update the dataLayerName
            if (dataLayerNameFilter) {
                dataLayerNameFilter.initialize();
                this.dataLayerName = dataLayerNameFilter.expectedValues[0];
            }
            return filters.concat(window.Object.values(rangeFilters));
        }
    };
    StyleJsonCacheItem.prototype.createSubItems = function (styleJson, dataLayerColumnName) {
        if (styleJson.style) {
            // apply the property to sub style.
            for (var key in styleJson) {
                if (key !== "style" && key !== "filter") {
                    for (var i = 0; i < styleJson.style.length; i++) {
                        // Apply the property to sub style if the sub style does not included.
                        if (styleJson.style[i][key] === undefined) {
                            if (key === "id") {
                                styleJson.style[i][key] = styleJson[key] + "_" + i;
                            }
                            else {
                                styleJson.style[i][key] = styleJson[key];
                            }
                        }
                    }
                }
            }
            var subItemMinZoom = void 0;
            var subItemMaxZoom = void 0;
            for (var _i = 0, _a = styleJson.style; _i < _a.length; _i++) {
                var subStyle = _a[_i];
                var styleJsonCacheSubItem = new StyleJsonCacheItem(subStyle, this.minZoom, this.maxZoom, dataLayerColumnName);
                if (subItemMaxZoom === undefined || styleJsonCacheSubItem.maxZoom > subItemMaxZoom) {
                    subItemMaxZoom = styleJsonCacheSubItem.maxZoom;
                }
                if (subItemMinZoom === undefined || styleJsonCacheSubItem.minZoom < subItemMinZoom) {
                    subItemMinZoom = styleJsonCacheSubItem.minZoom;
                }
                this.subStyleCacheItems.push(styleJsonCacheSubItem);
            }
            if (subItemMinZoom && subItemMinZoom > this.minZoom) {
                this.minZoom = subItemMinZoom;
            }
            if (subItemMaxZoom && subItemMaxZoom < this.maxZoom) {
                this.maxZoom = subItemMaxZoom;
            }
        }
    };
    StyleJsonCacheItem.prototype.createGeoStyle = function (styleJson) {
        var geoStyle;
        for (var key in styleJson) {
            if (key !== "style" && key !== "filter") {
                var keys = key.split("-");
                if (keys.length > 1) {
                    switch (keys[0]) {
                        case "polygon":
                            geoStyle = new __WEBPACK_IMPORTED_MODULE_5__style_geoAreaStyle__["a" /* GeoAreaStyle */](styleJson);
                            break;
                        case "line":
                            geoStyle = new __WEBPACK_IMPORTED_MODULE_6__style_geoLineStyle__["a" /* GeoLineStyle */](styleJson);
                            break;
                        case "text":
                            geoStyle = new __WEBPACK_IMPORTED_MODULE_8__style_geoTextStyle__["a" /* GeoTextStyle */](styleJson);
                            break;
                        case "point":
                            geoStyle = new __WEBPACK_IMPORTED_MODULE_7__style_geoPointStyle__["a" /* GeoPointStyle */](styleJson);
                            break;
                        case "shield":
                            geoStyle = new __WEBPACK_IMPORTED_MODULE_9__style_geoShieldStyle__["a" /* GeoShieldStyle */](styleJson);
                            break;
                        default:
                            break;
                    }
                    break;
                }
            }
        }
        return geoStyle;
    };
    StyleJsonCacheItem.prototype.createChildrenGeoStyle = function (styleJson) {
        if (styleJson["children"]) {
            for (var i = 0; i < styleJson["children"].length; i++) {
                var childrenGeoStyleJson = styleJson["children"][i];
                this.childrenGeoStyles.push(this.createGeoStyle(childrenGeoStyleJson));
            }
        }
    };
    return StyleJsonCacheItem;
}());



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeoFilterItem; });
var GeoFilterItem = /** @class */ (function () {
    function GeoFilterItem(key, operator, value) {
        this.key = key;
        this.operator = operator;
        this.value = value;
    }
    GeoFilterItem.createFilterItem = function (filterItemString) {
        var operator = filterItemString.match(this.operatorRegex)[0];
        var parts = filterItemString.split(operator);
        var item = new GeoFilterItem(parts[0], operator, parts[1]);
        return item;
    };
    GeoFilterItem.operatorRegex = new RegExp("[<>!=]+", "g");
    return GeoFilterItem;
}());



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeoZoomFilter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__geoRangeFilter__ = __webpack_require__(4);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var GeoZoomFilter = /** @class */ (function (_super) {
    __extends(GeoZoomFilter, _super);
    function GeoZoomFilter(filterItems) {
        return _super.call(this, filterItems) || this;
    }
    GeoZoomFilter.prototype.matchFeatureCore = function (feature, zoom) {
        return this.isInRange(zoom);
    };
    GeoZoomFilter.prototype.replaceVaulesToPbfIndexCore = function (pbfLayer) {
        this.replacedValueToIndex = true;
    };
    return GeoZoomFilter;
}(__WEBPACK_IMPORTED_MODULE_0__geoRangeFilter__["a" /* GeoRangeFilter */]));



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeoStringAttributeFilter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__geoFilter__ = __webpack_require__(2);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var GeoStringAttributeFilter = /** @class */ (function (_super) {
    __extends(GeoStringAttributeFilter, _super);
    function GeoStringAttributeFilter(filterItems) {
        return _super.call(this, filterItems) || this;
    }
    GeoStringAttributeFilter.prototype.initializeCore = function () {
        var expectedValue = this.filterItems[0].value;
        expectedValue = expectedValue.slice(1, expectedValue.length - 1);
        this.expectedValues = expectedValue.split(",");
        this.key = this.filterItems[0].key;
    };
    GeoStringAttributeFilter.prototype.matchFeatureCore = function (feature, zoom) {
        var currentValue;
        var currentExpectedValues;
        if (this.replacedValueToIndex) {
            currentValue = feature.propertiesIndex[this.keyIndex];
            currentExpectedValues = this.expectedValueIndexs;
        }
        else {
            currentValue = feature.properties[this.key];
            currentExpectedValues = this.expectedValues;
        }
        switch (this.filterItems[0].operator) {
            case "=":
                return currentExpectedValues.includes(currentValue);
            case "!=":
            default:
                return !currentExpectedValues.includes(currentValue);
        }
    };
    GeoStringAttributeFilter.prototype.replaceVaulesToPbfIndexCore = function (pbfLayer) {
        if (!this.initialized) {
            this.initialize();
        }
        this.keyIndex = pbfLayer.keys.indexOf(this.key);
        var replacedExpectedVaules = [];
        for (var j = 0, jj = this.expectedValues.length; j < jj; j++) {
            var numberValue = +this.expectedValues[j];
            if (isNaN(numberValue)) {
                replacedExpectedVaules.push(pbfLayer.values.indexOf(this.expectedValues[j]));
            }
            else {
                replacedExpectedVaules.push(pbfLayer.values.indexOf(numberValue));
            }
        }
        this.expectedValueIndexs = replacedExpectedVaules;
        this.replacedValueToIndex = true;
    };
    return GeoStringAttributeFilter;
}(__WEBPACK_IMPORTED_MODULE_0__geoFilter__["a" /* GeoFilter */]));



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeoRegexFilter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__geoFilter__ = __webpack_require__(2);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var GeoRegexFilter = /** @class */ (function (_super) {
    __extends(GeoRegexFilter, _super);
    function GeoRegexFilter(filterItems) {
        return _super.call(this, filterItems) || this;
    }
    GeoRegexFilter.prototype.initializeCore = function () {
        var value = this.filterItems[0].value;
        value = value.slice(2, value.length - 1);
        this.regex = new RegExp(value, "g");
        this.key = this.filterItems[0].key;
    };
    GeoRegexFilter.prototype.matchFeatureCore = function (feature, zoom) {
        var currentValue;
        if (this.replacedValueToIndex) {
            currentValue = feature.properties[this.key];
        }
        else {
            currentValue = feature.properties[this.key];
        }
        if (!currentValue) {
            return false;
        }
        return currentValue.toString().match(this.regex) !== null;
    };
    GeoRegexFilter.prototype.replaceVaulesToPbfIndexCore = function (pbfLayer) {
        this.replacedValueToIndex = true;
    };
    return GeoRegexFilter;
}(__WEBPACK_IMPORTED_MODULE_0__geoFilter__["a" /* GeoFilter */]));



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeoNumberAttributeFilter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__geoRangeFilter__ = __webpack_require__(4);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var GeoNumberAttributeFilter = /** @class */ (function (_super) {
    __extends(GeoNumberAttributeFilter, _super);
    function GeoNumberAttributeFilter(filterItems) {
        return _super.call(this, filterItems) || this;
    }
    return GeoNumberAttributeFilter;
}(__WEBPACK_IMPORTED_MODULE_0__geoRangeFilter__["a" /* GeoRangeFilter */]));



/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeoAreaStyle; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__geoStyle__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_geoBrush__ = __webpack_require__(18);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var GeoAreaStyle = /** @class */ (function (_super) {
    __extends(GeoAreaStyle, _super);
    function GeoAreaStyle(styleJson) {
        var _this = _super.call(this, styleJson) || this;
        if (styleJson) {
            _this.brushType = styleJson["polygon-brush-type"];
            _this.rotateAngle = styleJson["polygon-rotate-angle"];
            _this.dx = styleJson["polygon-dx"];
            _this.dy = styleJson["polygon-dy"];
            _this.fill = styleJson["polygon-fill"];
            _this.foregroundFill = styleJson["polygon-foreground-fill"];
            _this.gamma = styleJson["polygon-gamma"] ? styleJson["polygon-gamma"] : true;
            _this.geometryTransform = styleJson["polygon-geometry-transform"];
            _this.hatchStyle = styleJson["polygon-hatch-style"];
            _this.opacity = styleJson["polygon-opacity"];
            _this.outlineColor = styleJson["polygon-outline-color"];
            _this.outlineDashArray = styleJson["polygon-outline-dasharray"];
            _this.outlineOpacity = styleJson["polygon-outline-opacity"];
            _this.outlineWidth = styleJson["polygon-outline-width"];
            _this.linearGradient = styleJson["polygon-linear-gradient"];
            _this.radialGradient = styleJson["polygon-radial-gradient"];
            _this.textureFile = styleJson["polygon-texture-file"];
            _this.shadowColor = styleJson["polygon-shadow-color"];
            _this.shadowDx = styleJson["polygon-shadow-dx"];
            _this.shadowDy = styleJson["polygon-shadow-dy"];
        }
        return _this;
    }
    GeoAreaStyle.prototype.initializeCore = function () {
        this.brushType = this.brushType || "solid";
        this.brushOptions = {
            fillColor: this.fill,
            fillOpacity: this.opacity,
            linearGradient: this.linearGradient,
            radialGradient: this.radialGradient,
            textureFile: this.textureFile,
            foregroundFill: this.foregroundFill,
            hatchStyle: this.hatchStyle
        };
        if (this.geometryTransform) {
            this.geometryTransformValue = this.getTransformValues(this.geometryTransform);
        }
        if (this.brushType === "solid" || this.brushType === "hatch") {
            this.geoBrush = __WEBPACK_IMPORTED_MODULE_1__style_geoBrush__["a" /* GeoBrush */].createBrushByType(this.brushType, null, null, this.brushOptions);
        }
        if (this.outlineColor) {
            this.convertedOutlineColor = __WEBPACK_IMPORTED_MODULE_0__geoStyle__["a" /* GeoStyle */].toRGBAColor(this.outlineColor, this.outlineOpacity);
        }
        if (this.outlineDashArray) {
            this.convertedOutlineDashArray = this.outlineDashArray.split(",");
        }
        if (this.shadowColor) {
            this.convertedShadowColor = __WEBPACK_IMPORTED_MODULE_0__geoStyle__["a" /* GeoStyle */].toRGBAColor(this.shadowColor);
        }
        this.shadowTranslateValueByResolution = {};
    };
    GeoAreaStyle.prototype.getTransformValues = function (transform) {
        // get transform values which look like transform(value1, value2)
        var start = transform.indexOf("(");
        var end = transform.indexOf(")");
        var valueString = transform.substring(start + 1, end);
        var values = [];
        if (valueString.includes(",")) {
            values = valueString.split(",");
        }
        else {
            values.push(valueString);
        }
        return values;
    };
    GeoAreaStyle.prototype.GetTransformedCoordinates = function (feature) {
        var tmpFlatCoordinates = feature.getFlatCoordinates();
        var tmpCoordinates = [[]];
        var index = 0;
        for (var i = 0; i < tmpFlatCoordinates.length; i += 2) {
            tmpCoordinates[index] || (tmpCoordinates[index] = []);
            tmpCoordinates[index].push([tmpFlatCoordinates[i], tmpFlatCoordinates[i + 1]]);
            if (tmpCoordinates[index].length > 3 && tmpCoordinates[index][0][0] === tmpFlatCoordinates[i] && tmpCoordinates[index][0][1] === tmpFlatCoordinates[i + 1]) {
                index++;
            }
        }
        var geometry = new ol.geom.Polygon(tmpCoordinates, "XY");
        if (this.geometryTransform.startsWith("translate")) {
            geometry.translate(+this.geometryTransformValue[0].trim(), +this.geometryTransformValue[1].trim());
        }
        else if (this.geometryTransform.startsWith("scale")) {
            geometry.scale(+this.geometryTransformValue[0].trim(), +this.geometryTransformValue[1].trim());
        }
        else if (this.geometryTransform.startsWith("rotate")) {
            var center = ol.extent.getCenter(geometry.getExtent());
            var angle = +this.geometryTransformValue[0].trim() * Math.PI / 180;
            geometry.rotate(angle, center);
        }
        else if (this.geometryTransform.startsWith("skew")) {
            this.skewGeometry(geometry, +this.geometryTransformValue[0].trim(), +this.geometryTransformValue[1].trim());
        }
        return geometry.flatCoordinates;
    };
    GeoAreaStyle.prototype.getConvertedStyleCore = function (feature, resolution, options) {
        var length = 0;
        this.styles = [];
        if (this.fill || (this.outlineColor && this.outlineWidth) || this.linearGradient || this.radialGradient) {
            if (this.geometryTransform) {
                feature.flatCoordinates_ = this.GetTransformedCoordinates(feature);
            }
            if (this.shadowDx || this.shadowDy) {
                var shadowTranslateValue = this.shadowTranslateValueByResolution[resolution];
                if (shadowTranslateValue === undefined) {
                    var tmpResolution = Math.round(resolution * 100000000) / 100000000;
                    this.shadowTranslate = ("translate(" + (this.shadowDx ? this.shadowDx : 0) * tmpResolution + "," + (this.shadowDy ? this.shadowDy : 0) * tmpResolution + ")");
                    shadowTranslateValue = this.getTransformValues(this.shadowTranslate);
                    this.shadowTranslateValueByResolution[resolution] = shadowTranslateValue;
                }
                var tmpFlatCoordinates = feature.getFlatCoordinates();
                var newFlatCoordinates = ol.geom.flat.transform.translate(tmpFlatCoordinates, 0, tmpFlatCoordinates.length, 2, +shadowTranslateValue[0].trim(), +shadowTranslateValue[1].trim(), undefined);
                var tmpCoordinates = [[]];
                var index = 0;
                for (var i = 0; i < newFlatCoordinates.length; i += 2) {
                    tmpCoordinates[index] || (tmpCoordinates[index] = []);
                    tmpCoordinates[index].push([newFlatCoordinates[i], newFlatCoordinates[i + 1]]);
                    if (tmpCoordinates[index].length > 3 && tmpCoordinates[index][0][0] === newFlatCoordinates[i] && tmpCoordinates[index][0][1] === newFlatCoordinates[i + 1]) {
                        index++;
                    }
                }
                var geometry = new ol.geom.Polygon(tmpCoordinates, "XY");
                GeoAreaStyle.areaShadowStyle.getFill().setColor(this.convertedShadowColor);
                GeoAreaStyle.areaShadowStyle.setGeometry(geometry);
                this.styles[length++] = GeoAreaStyle.areaShadowStyle;
            }
            if (this.fill) {
                this.geoBrush = __WEBPACK_IMPORTED_MODULE_1__style_geoBrush__["a" /* GeoBrush */].createBrushByType(this.brushType, feature, resolution, this.brushOptions);
                GeoAreaStyle.areaStyle.getFill().setColor(this.geoBrush);
            }
            // stroke to handle outlineColor, outlineDashArray, outlineOpacity and outlineWidth
            if (this.outlineColor || this.outlineDashArray || this.outlineWidth) {
                var newStroke = new ol.style.Stroke();
                newStroke.setColor(this.convertedOutlineColor);
                newStroke.setLineDash(this.convertedOutlineDashArray);
                newStroke.setWidth(this.outlineWidth);
                GeoAreaStyle.areaStyle.setStroke(newStroke);
            }
            else {
                GeoAreaStyle.areaStyle.setStroke(undefined);
            }
            GeoAreaStyle.areaStyle.setGeometry(feature);
            this.styles[length++] = GeoAreaStyle.areaStyle;
            if (this.gamma !== undefined && options.layer) {
                var styleGamma_1 = this.gamma;
                options.layer.on("precompose", function (evt) {
                    evt.context.imageSmoothingEnabled = styleGamma_1;
                    evt.context.webkitImageSmoothingEnabled = styleGamma_1;
                    evt.context.mozImageSmoothingEnabled = styleGamma_1;
                    evt.context.msImageSmoothingEnabled = styleGamma_1;
                });
            }
        }
        return this.styles;
    };
    GeoAreaStyle.areaStyle = new ol.style.Style({
        fill: new ol.style.Fill({}),
        stroke: new ol.style.Stroke({})
    });
    GeoAreaStyle.areaShadowStyle = new ol.style.Style({
        fill: new ol.style.Fill({}),
    });
    return GeoAreaStyle;
}(__WEBPACK_IMPORTED_MODULE_0__geoStyle__["a" /* GeoStyle */]));



/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeoBrush; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__geoStyle__ = __webpack_require__(0);

var GeoBrush = /** @class */ (function () {
    function GeoBrush() {
    }
    GeoBrush.createBrushByType = function (brushType, feature, resolution, brushTypeOptions) {
        var geoBrushFunction = this.geoBrushFunctions[brushType];
        if (typeof geoBrushFunction === "function") {
            return geoBrushFunction(feature, resolution, brushTypeOptions);
        }
        else {
            return null;
        }
    };
    GeoBrush.registerGeoBrushFunction = function (key, geoBrushFunction) {
        this.geoBrushFunctions[key] = geoBrushFunction;
    };
    GeoBrush.createGeoSolidBrush = function (feature, resolution, geoBrushOptions) {
        if (geoBrushOptions.fillColor) {
            return __WEBPACK_IMPORTED_MODULE_0__geoStyle__["a" /* GeoStyle */].toRGBAColor(geoBrushOptions.fillColor, geoBrushOptions.fillOpacity);
        }
    };
    GeoBrush.createRadialGradientColor = function (feature, resolution, geoBrushOptions) {
        var extent = feature.getExtent();
        // TODO: try to create it when creating the GeoStyle.
        var canvas = document.createElement("canvas");
        var context = canvas.getContext("2d");
        // TODO: check if there is a difference by srid.
        var width = ol.extent.getWidth(extent) / resolution * ol.has.DEVICE_PIXEL_RATIO;
        var height = ol.extent.getHeight(extent) / resolution * ol.has.DEVICE_PIXEL_RATIO;
        // TODO: the (x0,y0) is the center of feature extent, optimize it
        var x0 = width / 2;
        var y0 = height / 2;
        var r1 = x0;
        var grd = context.createRadialGradient(x0, y0, 0, x0, y0, r1);
        var gradientColors = geoBrushOptions.radialGradient.split(",");
        for (var _i = 0, gradientColors_1 = gradientColors; _i < gradientColors_1.length; _i++) {
            var gradientColor = gradientColors_1[_i];
            gradientColor = gradientColor.trim();
            var colorStop = gradientColor.substr(1, gradientColor.length - 2);
            var cs = colorStop.split(":");
            grd.addColorStop(Number(cs[0].trim()), __WEBPACK_IMPORTED_MODULE_0__geoStyle__["a" /* GeoStyle */].toRGBAColor(cs[1].trim(), geoBrushOptions.fillOpacity));
        }
        return grd;
    };
    GeoBrush.createLinearGradientColor = function (feature, resolution, geoBrushOptions) {
        var extent = feature.getExtent();
        var canvas = document.createElement("canvas");
        var context = canvas.getContext("2d");
        // TODO: the direction Angle by x0,y0,x1,y1. this.directionAngle
        var grd = context.createLinearGradient(0, 0, ol.extent.getWidth(extent) / resolution * ol.has.DEVICE_PIXEL_RATIO, ol.extent.getHeight(extent) / resolution * ol.has.DEVICE_PIXEL_RATIO);
        var gradientColors = geoBrushOptions.linearGradient.split(",");
        for (var _i = 0, gradientColors_2 = gradientColors; _i < gradientColors_2.length; _i++) {
            var gradientColor = gradientColors_2[_i];
            gradientColor = gradientColor.trim();
            var colorStop = gradientColor.substr(1, gradientColor.length - 2);
            var cs = colorStop.split(":");
            grd.addColorStop(Number(cs[0].trim()), __WEBPACK_IMPORTED_MODULE_0__geoStyle__["a" /* GeoStyle */].toRGBAColor(cs[1].trim(), geoBrushOptions.fillOpacity));
        }
        return grd;
    };
    GeoBrush.createImageCanvasPattern = function (feature, resolution, geoBrushOptions) {
        var canvas = document.createElement("canvas");
        var context = canvas.getContext("2d");
        var imageElement = document.createElement("img");
        imageElement.src = geoBrushOptions.textureFile;
        return context.createPattern(imageElement, "repeat");
    };
    GeoBrush.createPatternColor = function (feature, resolution, geoBrushOptions) {
        var createPatternFunction = GeoBrush.geoPatternFunctions[geoBrushOptions.hatchStyle];
        if (typeof createPatternFunction === "function") {
            return createPatternFunction(geoBrushOptions.fillColor, geoBrushOptions.foregroundFill);
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_0__geoStyle__["a" /* GeoStyle */].toRGBAColor(geoBrushOptions.fillColor, geoBrushOptions.fillOpacity);
        }
    };
    GeoBrush.getCrossPattern = function (fill, foregroundFill) {
        var size = 6;
        var ratio = ol.has.DEVICE_PIXEL_RATIO;
        var canvas = document.createElement("canvas");
        canvas.width = size * 2 * ratio;
        canvas.height = size * 2 * ratio;
        var context = canvas.getContext("2d");
        context.fillStyle = fill;
        context.fillRect(0, 0, canvas.width, canvas.height);
        // horizon line
        context.fillStyle = foregroundFill;
        context.fillRect(0, canvas.height / 2, canvas.width, 1);
        // vertical line
        context.fillRect(canvas.width / 2, 0, 1, canvas.height);
        return context.createPattern(canvas, "repeat");
    };
    GeoBrush.getHorizontalPattern = function (fill, foregroundFill) {
        var size = 6;
        var ratio = ol.has.DEVICE_PIXEL_RATIO;
        var canvas = document.createElement("canvas");
        canvas.width = size * 2 * ratio;
        canvas.height = size * 2 * ratio;
        var context = canvas.getContext("2d");
        context.fillStyle = fill;
        context.fillRect(0, 0, canvas.width, canvas.height);
        // horizon line
        context.fillStyle = foregroundFill;
        context.fillRect(0, canvas.height / 2, canvas.width, 1);
        return context.createPattern(canvas, "repeat");
    };
    GeoBrush.getVerticalPattern = function (fill, foregroundFill) {
        var size = 6;
        var ratio = ol.has.DEVICE_PIXEL_RATIO;
        var canvas = document.createElement("canvas");
        canvas.width = size * 2 * ratio;
        canvas.height = size * 2 * ratio;
        var context = canvas.getContext("2d");
        context.fillStyle = fill;
        context.fillRect(0, 0, canvas.width, canvas.height);
        // vertical line
        context.fillStyle = foregroundFill;
        context.fillRect(canvas.width / 2, 0, 1, canvas.height);
        return context.createPattern(canvas, "repeat");
    };
    GeoBrush.getForwardDiagonalPattern = function (fill, foregroundFill) {
        var size = 6;
        var ratio = ol.has.DEVICE_PIXEL_RATIO;
        var canvas = document.createElement("canvas");
        canvas.width = size * 2 * ratio;
        canvas.height = size * 2 * ratio;
        var context = canvas.getContext("2d");
        context.fillStyle = fill;
        context.fillRect(0, 0, canvas.width, canvas.height);
        // vertical line
        context.strokeStyle = foregroundFill;
        context.moveTo(0, 0);
        context.lineTo(canvas.width, canvas.height);
        context.stroke();
        // context.fillStyle = foregroundFill;
        // context.moveTo(-1, -1);
        // context.lineTo(1, -1);
        // context.lineTo(canvas.width + 1, canvas.height);
        // context.lineTo(canvas.width + 1, canvas.height + 1);
        // context.lineTo(canvas.width, canvas.height + 1);
        // context.lineTo(-1, 0);
        // context.lineTo(-1, -1);
        // context.closePath();
        // context.fill();
        return context.createPattern(canvas, "repeat");
    };
    GeoBrush.getBackwardDiagonalPattern = function (fill, foregroundFill) {
        var size = 6;
        var ratio = ol.has.DEVICE_PIXEL_RATIO;
        var canvas = document.createElement("canvas");
        canvas.width = size * 2 * ratio;
        canvas.height = size * 2 * ratio;
        var context = canvas.getContext("2d");
        context.fillStyle = fill;
        context.fillRect(0, 0, canvas.width, canvas.height);
        // vertical line
        context.strokeStyle = foregroundFill;
        context.moveTo(canvas.width, 0);
        context.lineTo(0, canvas.height);
        context.stroke();
        return context.createPattern(canvas, "repeat");
    };
    GeoBrush.getPercent05Pattern = function (fill, foregroundFill) {
        var size = 5;
        var ratio = ol.has.DEVICE_PIXEL_RATIO;
        var canvas = document.createElement("canvas");
        canvas.width = size * (2 * 0.95 + 1) * ratio;
        canvas.height = size * (2 * 0.95 + 1) * ratio;
        var context = canvas.getContext("2d");
        context.fillStyle = fill;
        context.fillRect(0, 0, canvas.width, canvas.height);
        // percentage region
        context.fillStyle = foregroundFill;
        context.beginPath();
        context.moveTo(canvas.width * 0.5, canvas.height * 0.45);
        context.lineTo(canvas.width * 0.55, canvas.height * 0.5);
        context.lineTo(canvas.width * 0.5, canvas.height * 0.55);
        context.lineTo(canvas.width * 0.45, canvas.height * 0.5);
        context.lineTo(canvas.width * 0.5, canvas.height * 0.45);
        context.closePath();
        context.fill();
        return context.createPattern(canvas, "repeat");
    };
    GeoBrush.getPercent10Pattern = function (fill, foregroundFill) {
        var size = 5;
        var ratio = ol.has.DEVICE_PIXEL_RATIO;
        var canvas = document.createElement("canvas");
        canvas.width = size * (2 * 0.9 + 1) * ratio;
        canvas.height = size * (2 * 0.9 + 1) * ratio;
        var context = canvas.getContext("2d");
        context.fillStyle = fill;
        context.fillRect(0, 0, canvas.width, canvas.height);
        // percentage region
        context.fillStyle = foregroundFill;
        context.beginPath();
        context.moveTo(canvas.width * 0.5, canvas.height * 0.4);
        context.lineTo(canvas.width * 0.6, canvas.height * 0.5);
        context.lineTo(canvas.width * 0.5, canvas.height * 0.6);
        context.lineTo(canvas.width * 0.4, canvas.height * 0.5);
        context.lineTo(canvas.width * 0.5, canvas.height * 0.4);
        context.closePath();
        context.fill();
        return context.createPattern(canvas, "repeat");
    };
    GeoBrush.getPercent20Pattern = function (fill, foregroundFill) {
        var size = 5;
        var ratio = ol.has.DEVICE_PIXEL_RATIO;
        var canvas = document.createElement("canvas");
        canvas.width = size * (2 * 0.8 + 1) * ratio;
        canvas.height = size * (2 * 0.8 + 1) * ratio;
        var context = canvas.getContext("2d");
        context.fillStyle = fill;
        context.fillRect(0, 0, canvas.width, canvas.height);
        // percentage region
        context.fillStyle = foregroundFill;
        context.beginPath();
        context.moveTo(canvas.width * 0.5, canvas.height * 0.3);
        context.lineTo(canvas.width * 0.7, canvas.height * 0.5);
        context.lineTo(canvas.width * 0.5, canvas.height * 0.7);
        context.lineTo(canvas.width * 0.3, canvas.height * 0.5);
        context.lineTo(canvas.width * 0.5, canvas.height * 0.3);
        context.closePath();
        context.fill();
        return context.createPattern(canvas, "repeat");
    };
    GeoBrush.getPercent25Pattern = function (fill, foregroundFill) {
        var size = 5;
        var ratio = ol.has.DEVICE_PIXEL_RATIO;
        var canvas = document.createElement("canvas");
        canvas.width = size * 0.4 * ratio;
        canvas.height = size * 0.4 * ratio;
        var context = canvas.getContext("2d");
        context.fillStyle = fill;
        context.fillRect(0, 0, canvas.width, canvas.height);
        // percentage region
        context.fillStyle = foregroundFill;
        context.strokeStyle = foregroundFill;
        context.beginPath();
        context.ellipse(canvas.width * 0.25, canvas.height * 0.25, 0.8, 0.8, 0, 0, 2 * Math.PI);
        // context.stroke();
        context.fill();
        return context.createPattern(canvas, "repeat");
    };
    GeoBrush.getPercent30Pattern = function (fill, foregroundFill) {
        var size = 5;
        var ratio = ol.has.DEVICE_PIXEL_RATIO;
        var canvas = document.createElement("canvas");
        canvas.width = size * (2 * 0.7 + 1) * ratio;
        canvas.height = size * (2 * 0.7 + 1) * ratio;
        var context = canvas.getContext("2d");
        context.fillStyle = fill;
        context.fillRect(0, 0, canvas.width, canvas.height);
        // percentage region
        context.fillStyle = foregroundFill;
        context.beginPath();
        context.moveTo(canvas.width * 0.5, canvas.height * 0.2);
        context.lineTo(canvas.width * 0.8, canvas.height * 0.5);
        context.lineTo(canvas.width * 0.5, canvas.height * 0.8);
        context.lineTo(canvas.width * 0.2, canvas.height * 0.5);
        context.lineTo(canvas.width * 0.5, canvas.height * 0.2);
        context.closePath();
        context.fill();
        return context.createPattern(canvas, "repeat");
    };
    GeoBrush.getPercent40Pattern = function (fill, foregroundFill) {
        var size = 5;
        var ratio = ol.has.DEVICE_PIXEL_RATIO;
        var canvas = document.createElement("canvas");
        canvas.width = size * (2 * 0.4 + 1) * ratio;
        canvas.height = size * (2 * 0.4 + 1) * ratio;
        var context = canvas.getContext("2d");
        context.fillStyle = fill;
        context.fillRect(0, 0, canvas.width, canvas.height);
        // percentage region
        context.fillStyle = foregroundFill;
        context.beginPath();
        context.moveTo(canvas.width * 0.5, canvas.height * 0.1);
        context.lineTo(canvas.width * 0.9, canvas.height * 0.5);
        context.lineTo(canvas.width * 0.5, canvas.height * 0.9);
        context.lineTo(canvas.width * 0.1, canvas.height * 0.5);
        context.lineTo(canvas.width * 0.5, canvas.height * 0.1);
        context.closePath();
        context.fill();
        return context.createPattern(canvas, "repeat");
    };
    GeoBrush.getPercent50Pattern = function (fill, foregroundFill) {
        var size = 5;
        var ratio = ol.has.DEVICE_PIXEL_RATIO;
        var canvas = document.createElement("canvas");
        canvas.width = size * (2 * 0.5 + 1) * ratio;
        canvas.height = size * (2 * 0.5 + 1) * ratio;
        var context = canvas.getContext("2d");
        context.fillStyle = fill;
        context.fillRect(0, 0, canvas.width, canvas.height);
        // percentage region
        context.fillStyle = foregroundFill;
        context.beginPath();
        context.moveTo(canvas.width * 0.5, 0);
        context.lineTo(canvas.width, canvas.height * 0.5);
        context.lineTo(canvas.width * 0.5, canvas.height);
        context.lineTo(0, canvas.height * 0.5);
        context.lineTo(canvas.width * 0.5, 0);
        context.closePath();
        context.fill();
        return context.createPattern(canvas, "repeat");
    };
    GeoBrush.getPercent60Pattern = function (fill, foregroundFill) {
        var size = 5;
        var ratio = ol.has.DEVICE_PIXEL_RATIO;
        var canvas = document.createElement("canvas");
        canvas.width = size * (2 * 0.4 + 1) * ratio;
        canvas.height = size * (2 * 0.4 + 1) * ratio;
        var context = canvas.getContext("2d");
        context.fillStyle = fill;
        context.fillRect(0, 0, canvas.width, canvas.height);
        // percentage region
        context.fillStyle = foregroundFill;
        context.beginPath();
        context.moveTo(canvas.width * 0.4, 0);
        context.lineTo(canvas.width * 0.6, 0);
        context.lineTo(canvas.width, canvas.height * 0.4);
        context.lineTo(canvas.width, canvas.height * 0.6);
        context.lineTo(canvas.width * 0.6, canvas.height);
        context.lineTo(canvas.width * 0.4, canvas.height);
        context.lineTo(0, canvas.height * 0.6);
        context.lineTo(0, canvas.height * 0.4);
        context.lineTo(canvas.width * 0.4, 0);
        context.closePath();
        context.fill();
        return context.createPattern(canvas, "repeat");
    };
    GeoBrush.getPercent70Pattern = function (fill, foregroundFill) {
        var size = 5;
        var ratio = ol.has.DEVICE_PIXEL_RATIO;
        var canvas = document.createElement("canvas");
        canvas.width = size * (2 * 0.3 + 1) * ratio;
        canvas.height = size * (2 * 0.3 + 1) * ratio;
        var context = canvas.getContext("2d");
        context.fillStyle = fill;
        context.fillRect(0, 0, canvas.width, canvas.height);
        // percentage region
        context.fillStyle = foregroundFill;
        context.beginPath();
        context.moveTo(canvas.width * 0.3, 0);
        context.lineTo(canvas.width * 0.7, 0);
        context.lineTo(canvas.width, canvas.height * 0.3);
        context.lineTo(canvas.width, canvas.height * 0.7);
        context.lineTo(canvas.width * 0.7, canvas.height);
        context.lineTo(canvas.width * 0.3, canvas.height);
        context.lineTo(0, canvas.height * 0.7);
        context.lineTo(0, canvas.height * 0.3);
        context.lineTo(canvas.width * 0.3, 0);
        context.closePath();
        context.fill();
        return context.createPattern(canvas, "repeat");
    };
    GeoBrush.getPercent75Pattern = function (fill, foregroundFill) {
        var size = 5;
        var ratio = ol.has.DEVICE_PIXEL_RATIO;
        var canvas = document.createElement("canvas");
        canvas.width = size * (2 * 0.25 + 1) * ratio;
        canvas.height = size * (2 * 0.25 + 1) * ratio;
        var context = canvas.getContext("2d");
        context.fillStyle = fill;
        context.fillRect(0, 0, canvas.width, canvas.height);
        // percentage region
        context.fillStyle = foregroundFill;
        context.beginPath();
        context.moveTo(canvas.width * 0.25, 0);
        context.lineTo(canvas.width * 0.75, 0);
        context.lineTo(canvas.width, canvas.height * 0.25);
        context.lineTo(canvas.width, canvas.height * 0.75);
        context.lineTo(canvas.width * 0.75, canvas.height);
        context.lineTo(canvas.width * 0.25, canvas.height);
        context.lineTo(0, canvas.height * 0.75);
        context.lineTo(0, canvas.height * 0.25);
        context.lineTo(canvas.width * 0.25, 0);
        context.closePath();
        context.fill();
        return context.createPattern(canvas, "repeat");
    };
    GeoBrush.getPercent80Pattern = function (fill, foregroundFill) {
        var size = 5;
        var ratio = ol.has.DEVICE_PIXEL_RATIO;
        var canvas = document.createElement("canvas");
        canvas.width = size * 0.8 * ratio;
        canvas.height = size * 0.8 * ratio;
        var context = canvas.getContext("2d");
        context.fillStyle = fill;
        context.fillRect(0, 0, canvas.width, canvas.height);
        // percentage region
        context.fillStyle = foregroundFill;
        context.strokeStyle = foregroundFill;
        context.beginPath();
        context.ellipse(canvas.width * 0.1, canvas.height * 0.1, 0.8, 0.8, 0, 0, 2 * Math.PI);
        // context.stroke();
        context.fill();
        return context.createPattern(canvas, "repeat");
    };
    GeoBrush.getPercent90Pattern = function (fill, foregroundFill) {
        var size = 5;
        var ratio = ol.has.DEVICE_PIXEL_RATIO;
        var canvas = document.createElement("canvas");
        canvas.width = size * (2 * 0.1 + 1) * ratio;
        canvas.height = size * (2 * 0.1 + 1) * ratio;
        var context = canvas.getContext("2d");
        context.fillStyle = fill;
        context.fillRect(0, 0, canvas.width, canvas.height);
        // percentage region
        context.fillStyle = foregroundFill;
        context.strokeStyle = foregroundFill;
        context.beginPath();
        context.ellipse(canvas.width * 0.1, canvas.height * 0.1, 0.4, 0.4, 0, 0, 2 * Math.PI);
        // context.stroke();
        context.fill();
        return context.createPattern(canvas, "repeat");
    };
    GeoBrush.getLargeGridPattern = function (fill, foregroundFill) {
        var size = 6;
        var ratio = ol.has.DEVICE_PIXEL_RATIO;
        var canvas = document.createElement("canvas");
        canvas.width = size * 2 * ratio;
        canvas.height = size * 2 * ratio;
        var context = canvas.getContext("2d");
        context.fillStyle = fill;
        context.fillRect(0, 0, canvas.width, canvas.height);
        // grid rect
        context.strokeStyle = foregroundFill;
        context.strokeRect(0, 0, canvas.width, canvas.height);
        return context.createPattern(canvas, "repeat");
    };
    GeoBrush.getDiagonalCrossPattern = function (fill, foregroundFill) {
        var size = 6;
        var ratio = ol.has.DEVICE_PIXEL_RATIO;
        var canvas = document.createElement("canvas");
        canvas.width = size * 2 * ratio;
        canvas.height = size * 2 * ratio;
        var context = canvas.getContext("2d");
        context.fillStyle = fill;
        context.fillRect(0, 0, canvas.width, canvas.height);
        // left to right diagonal line
        context.strokeStyle = foregroundFill;
        context.moveTo(0, 0);
        context.lineTo(canvas.width, canvas.height);
        context.stroke();
        // right to left diagonal line
        context.strokeStyle = foregroundFill;
        context.moveTo(canvas.width, 0);
        context.lineTo(0, canvas.height);
        context.stroke();
        return context.createPattern(canvas, "repeat");
    };
    GeoBrush.geoBrushFunctions = {
        solid: GeoBrush.createGeoSolidBrush,
        radialgradient: GeoBrush.createRadialGradientColor,
        lineargradient: GeoBrush.createLinearGradientColor,
        hatch: GeoBrush.createPatternColor,
        texture: GeoBrush.createImageCanvasPattern
    };
    GeoBrush.geoPatternFunctions = {
        Cross: GeoBrush.getCrossPattern,
        Horizontal: GeoBrush.getHorizontalPattern,
        Vertical: GeoBrush.getVerticalPattern,
        ForwardDiagonal: GeoBrush.getForwardDiagonalPattern,
        BackwardDiagonal: GeoBrush.getBackwardDiagonalPattern,
        LargeGrid: GeoBrush.getLargeGridPattern,
        DiagonalCross: GeoBrush.getDiagonalCrossPattern,
        Percent05: GeoBrush.getPercent05Pattern,
        Percent10: GeoBrush.getPercent10Pattern,
        Percent20: GeoBrush.getPercent20Pattern,
        Percent25: GeoBrush.getPercent25Pattern,
        Percent30: GeoBrush.getPercent30Pattern,
        Percent40: GeoBrush.getPercent40Pattern,
        Percent50: GeoBrush.getPercent50Pattern,
        Percent60: GeoBrush.getPercent60Pattern,
        Percent70: GeoBrush.getPercent70Pattern,
        Percent75: GeoBrush.getPercent75Pattern,
        Percent80: GeoBrush.getPercent80Pattern,
        Percent90: GeoBrush.getPercent90Pattern,
    };
    return GeoBrush;
}());



/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeoLineStyle; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__geoStyle__ = __webpack_require__(0);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var GeoLineStyle = /** @class */ (function (_super) {
    __extends(GeoLineStyle, _super);
    function GeoLineStyle(styleJson) {
        var _this = _super.call(this, styleJson) || this;
        _this.geometryLineCaps = [
            "triangle",
            "squareanchor",
            "roundanchor",
            "diamondanchor",
            "arrowanchor"
        ];
        _this.olLineCapsMap = {
            butt: "butt",
            flat: "square",
            square: "square",
            round: "round",
            noanchor: "square",
            anchormask: "square",
            custom: "square"
        };
        _this.convertedDashArray = new Array();
        _this.convertedInnerDashArray = new Array();
        _this.convertedCenterDashArray = new Array();
        _this.lineStroke = new ol.style.Stroke();
        _this.lineStyle = new ol.style.Style({ stroke: _this.lineStroke });
        _this.lineCapFill = new ol.style.Fill();
        _this.lineCapStyle = new ol.style.Style({ fill: _this.lineCapFill });
        _this.lineInnerStroke = new ol.style.Stroke();
        _this.lineInnerStyle = new ol.style.Style({ stroke: _this.lineInnerStroke });
        _this.lineCapInnerFill = new ol.style.Fill();
        _this.lineCapInnerStyle = new ol.style.Style({
            fill: _this.lineCapInnerFill
        });
        _this.lineCenterStroke = new ol.style.Stroke();
        _this.lineCenterStyle = new ol.style.Style({
            stroke: _this.lineCenterStroke
        });
        _this.lineCapCenterFill = new ol.style.Fill();
        _this.lineCapCenterStyle = new ol.style.Style({
            fill: _this.lineCapCenterFill
        });
        if (styleJson) {
            _this.lineCap = styleJson["line-cap"];
            _this.color = styleJson["line-color"];
            _this.dashArray = styleJson["line-dasharray"];
            _this.gamma = styleJson["line-gamma"];
            _this.geometryTransform = styleJson["line-geometry-transform"];
            _this.lineJoin = styleJson["line-join"];
            _this.miterLimit = styleJson["line-miterlimit"];
            _this.offset = styleJson["line-offset"];
            _this.opacity = styleJson["line-opacity"];
            _this.width = styleJson["line-width"];
            _this.lineCapInner = styleJson["line-cap-inner"];
            _this.colorInner = styleJson["line-color-inner"];
            _this.dashArrayInner = styleJson["line-dasharray-inner"];
            _this.lineJoinInner = styleJson["line-join-inner"];
            _this.miterLimitInner = styleJson["line-miterlimit-inner"];
            _this.widthInner = styleJson["line-width-inner"];
            _this.lineCapCenter = styleJson["line-cap-center"];
            _this.colorCenter = styleJson["line-color-center"];
            _this.dashArrayCenter = styleJson["line-dasharray-center"];
            _this.lineJoinCenter = styleJson["line-join-center"];
            _this.miterLimitCenter = styleJson["line-miterlimit-center"];
            _this.widthCenter = styleJson["line-width-center"];
            _this.oneway = styleJson["line-oneway"];
        }
        return _this;
    }
    GeoLineStyle.prototype.initializeCore = function () {
        if (this.color) {
            this.olColor = __WEBPACK_IMPORTED_MODULE_0__geoStyle__["a" /* GeoStyle */].toRGBAColor(this.color, this.opacity);
            this.lineStroke.setColor(this.olColor);
            this.lineCapFill.setColor(this.olColor);
        }
        if (this.dashArray) {
            var tmpArray = this.dashArray.split(",");
            for (var _i = 0, tmpArray_1 = tmpArray; _i < tmpArray_1.length; _i++) {
                var a = tmpArray_1[_i];
                this.convertedDashArray.push(parseFloat(a));
            }
        }
        // Drawing inner
        if (this.colorInner) {
            this.olInnerColor = __WEBPACK_IMPORTED_MODULE_0__geoStyle__["a" /* GeoStyle */].toRGBAColor(this.colorInner, this.opacity);
            this.lineInnerStroke.setColor(this.olInnerColor);
            this.lineCapInnerFill.setColor(this.olInnerColor);
        }
        if (this.dashArrayInner) {
            var tmpArray = this.dashArrayInner.split(",");
            for (var _a = 0, tmpArray_2 = tmpArray; _a < tmpArray_2.length; _a++) {
                var a = tmpArray_2[_a];
                this.convertedInnerDashArray.push(parseFloat(a));
            }
        }
        // Drawing center
        if (this.colorCenter) {
            this.olCenterColor = __WEBPACK_IMPORTED_MODULE_0__geoStyle__["a" /* GeoStyle */].toRGBAColor(this.colorCenter, this.opacity);
            this.lineCenterStroke.setColor(this.olCenterColor);
            this.lineCapCenterFill.setColor(this.olCenterColor);
        }
        if (this.dashArrayCenter) {
            var tmpArray = this.dashArrayCenter.split(",");
            for (var _b = 0, tmpArray_3 = tmpArray; _b < tmpArray_3.length; _b++) {
                var a = tmpArray_3[_b];
                this.convertedCenterDashArray.push(parseFloat(a));
            }
        }
        if (GeoLineStyle.onewayImg === undefined) {
            var imageElement = document.createElement("img");
            imageElement.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAFCAYAAABIHbx0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAN1wAADdcBQiibeAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAABYSURBVBiVY2AgEkxavnr7xOWrrXDJMxJr0OTla/5DNRz795+hIy8qZDNOg2CKiQP/G3MjQxvIdtF/BsYjjP8Z63OjgvYhy7MQ7wCGPf8Y/9fnR4YcwyYNAFEyINoo4RPeAAAAAElFTkSuQmCC";
            GeoLineStyle.onewayImg = imageElement;
        }
        this.onewayIcon = new ol.style.Icon({
            img: GeoLineStyle.onewayImg,
            imgSize: [18, 5],
            anchor: [0.5, 0.5],
            rotateWithView: true
        });
        this.onewayStyle = new ol.style.Style({
            image: this.onewayIcon
        });
    };
    GeoLineStyle.prototype.getTransformValues = function (transform) {
        // get transform values which look like transform(value1, value2)
        var start = transform.indexOf("(");
        var end = transform.indexOf(")");
        var valueString = transform.substring(start + 1, end);
        var values = [];
        if (valueString.includes(",")) {
            values = valueString.split(",");
        }
        else {
            values.push(valueString);
        }
        return values;
    };
    GeoLineStyle.prototype.getConvertedStyleCore = function (feature, resolution, options) {
        var _this = this;
        var length = 0;
        this.styles = [];
        if (this.color && this.width) {
            if (this.olLineCapsMap[this.lineCap]) {
                this.lineStroke.setLineCap(this.olLineCapsMap[this.lineCap]);
            }
            if (this.color) {
                this.lineStroke.setColor(this.olColor);
                this.lineCapFill.setColor(this.olColor);
            }
            if (this.dashArray) {
                this.lineStroke.setLineDash(this.convertedDashArray);
            }
            if (this.lineJoin) {
                this.lineStroke.setLineJoin(this.lineJoin);
            }
            if (this.miterLimit !== 4) {
                this.lineStroke.setMiterLimit(this.miterLimit);
            }
            if (this.width) {
                this.lineStroke.setWidth(this.width);
            }
            // Set inner
            if (this.colorInner) {
                this.lineInnerStroke.setColor(this.olInnerColor);
                this.lineCapInnerFill.setColor(this.olInnerColor);
            }
            if (this.dashArrayInner) {
                this.lineInnerStroke.setLineDash(this.convertedInnerDashArray);
            }
            if (this.lineJoinInner) {
                this.lineInnerStroke.setLineJoin(this.lineJoinInner);
            }
            if (this.miterLimitInner !== 4) {
                this.lineInnerStroke.setMiterLimit(this.miterLimitInner);
            }
            if (this.widthInner) {
                this.lineInnerStroke.setWidth(this.widthInner);
            }
            // Set center
            if (this.colorCenter) {
                this.lineCenterStroke.setColor(this.olCenterColor);
                this.lineCapCenterFill.setColor(this.olCenterColor);
                this.lineCenterStroke.setLineCap("butt");
            }
            if (this.dashArrayCenter) {
                this.lineCenterStroke.setLineDash(this.convertedCenterDashArray);
            }
            if (this.lineJoinCenter) {
                this.lineCenterStroke.setLineJoin(this.lineJoinCenter);
            }
            if (this.miterLimitCenter !== 4) {
                this.lineCenterStroke.setMiterLimit(this.miterLimitCenter);
            }
            if (this.widthCenter) {
                this.lineCenterStroke.setWidth(this.widthCenter);
            }
            var geometryFunction = function (feature) {
                if (_this.geometryTransform) {
                    var geometry = _this.getGeometry(feature);
                    if (_this.geometryTransform) {
                        var values = _this.getTransformValues(_this.geometryTransform);
                        if (_this.geometryTransform.startsWith("translate")) {
                            geometry.translate(+values[0].trim(), +values[1].trim());
                        }
                        else if (_this.geometryTransform.startsWith("scale")) {
                            geometry.scale(+values[0].trim(), +values[1].trim());
                        }
                        else if (_this.geometryTransform.startsWith("rotate")) {
                            var center = ol.extent.getCenter(geometry.getExtent());
                            var angle = +values[0].trim() * Math.PI / 180;
                            geometry.rotate(angle, center);
                        }
                        else if (_this.geometryTransform.startsWith("skew")) {
                            _this.skewGeometry(geometry, +values[0].trim(), +values[1].trim());
                        }
                    }
                }
                return feature.getGeometry();
            };
            this.lineStyle.setGeometry(geometryFunction);
            this.styles[length++] = this.lineStyle;
            if (this.gamma !== undefined && options.layer) {
                var styleGamma_1 = this.gamma;
                options.layer.on("precompose", function (evt) {
                    evt.context.imageSmoothingEnabled = styleGamma_1;
                    evt.context.webkitImageSmoothingEnabled = styleGamma_1;
                    evt.context.mozImageSmoothingEnabled = styleGamma_1;
                    evt.context.msImageSmoothingEnabled = styleGamma_1;
                });
            }
            if (this.geometryLineCaps.includes(this.lineCap)) {
                var geometryFunction_1 = function (feature) {
                    var geometry = _this.getGeometry(feature);
                    return GeoLineStyle.createAnchoredGeometry(geometry, _this.lineCap, _this.width, resolution);
                };
                this.lineCapStyle.setGeometry(geometryFunction_1);
                this.styles[length++] = this.lineCapStyle;
            }
            // Drawing inner
            if (this.colorInner && this.widthInner) {
                var geometryFunction_2 = function (feature) {
                    var geometry = _this.getGeometry(feature);
                    if (_this.geometryTransform) {
                        var values = _this.getTransformValues(_this.geometryTransform);
                        if (_this.geometryTransform.startsWith("translate")) {
                            geometry.translate(+values[0].trim(), +values[1].trim());
                        }
                        else if (_this.geometryTransform.startsWith("scale")) {
                            geometry.scale(+values[0].trim(), +values[1].trim());
                        }
                        else if (_this.geometryTransform.startsWith("rotate")) {
                            var center = ol.extent.getCenter(geometry.getExtent());
                            var angle = +values[0].trim() * Math.PI / 180;
                            geometry.rotate(angle, center);
                        }
                        else if (_this.geometryTransform.startsWith("skew")) {
                            _this.skewGeometry(geometry, +values[0].trim(), +values[1].trim());
                        }
                    }
                    return feature.getGeometry();
                };
                this.lineInnerStyle.setGeometry(geometryFunction_2);
                this.styles[length++] = this.lineInnerStyle;
                if (this.geometryLineCaps.includes(this.lineCapInner)) {
                    var geometryFunction_3 = function (feature) {
                        var geometry = _this.getGeometry(feature);
                        return GeoLineStyle.createAnchoredGeometry(geometry, _this.lineCapInner, _this.widthInner, resolution);
                    };
                    this.lineCapInnerStyle.setGeometry(geometryFunction_3);
                    this.styles[length++] = this.lineCapInnerStyle;
                }
            }
            // Drawing center
            if (this.colorCenter && this.widthCenter) {
                var geometryFunction_4 = function (feature) {
                    var geometry = _this.getGeometry(feature);
                    if (_this.geometryTransform) {
                        var values = _this.getTransformValues(_this.geometryTransform);
                        if (_this.geometryTransform.startsWith("translate")) {
                            geometry.translate(+values[0].trim(), +values[1].trim());
                        }
                        else if (_this.geometryTransform.startsWith("scale")) {
                            geometry.scale(+values[0].trim(), +values[1].trim());
                        }
                        else if (_this.geometryTransform.startsWith("rotate")) {
                            var center = ol.extent.getCenter(geometry.getExtent());
                            var angle = +values[0].trim() * Math.PI / 180;
                            geometry.rotate(angle, center);
                        }
                        else if (_this.geometryTransform.startsWith("skew")) {
                            _this.skewGeometry(geometry, +values[0].trim(), +values[1].trim());
                        }
                    }
                    return feature.getGeometry();
                };
                this.lineCenterStyle.setGeometry(geometryFunction_4);
                this.styles[length++] = this.lineCenterStyle;
                if (this.geometryLineCaps.includes(this.lineCapCenter)) {
                    var geometryFunction_5 = function (feature) {
                        var geometry = _this.getGeometry(feature);
                        return GeoLineStyle.createAnchoredGeometry(geometry, _this.lineCapCenter, _this.widthCenter, resolution);
                    };
                    this.lineCapCenterStyle.setGeometry(geometryFunction_5);
                    this.styles[length++] = this.lineCapCenterStyle;
                }
            }
        }
        if (this.oneway) {
            var displayOneway = false;
            if (typeof this.oneway === "string") {
                displayOneway = feature.get(this.oneway);
            }
            else {
                displayOneway = this.oneway;
            }
            if (displayOneway) {
                var flatCoordinates = feature.getFlatCoordinates();
                var longest = 0;
                var longestIndex = void 0;
                for (var i = 0; i <= flatCoordinates.length - 4; i += 2) {
                    var dX = Math.abs(flatCoordinates[i] - flatCoordinates[i + 2]);
                    var dY = Math.abs(flatCoordinates[i + 1] - flatCoordinates[i + 3]);
                    var distance = dX + dY;
                    if (distance > longest) {
                        longest = distance;
                        longestIndex = i;
                    }
                }
                var start = [flatCoordinates[longestIndex], flatCoordinates[longestIndex + 1]];
                var end = [flatCoordinates[longestIndex + 2], flatCoordinates[longestIndex + 3]];
                var dx = end[0] - start[0];
                var dy = end[1] - start[1];
                var rotation = Math.atan2(dy, dx);
                var centerPoint = [(start[0] + end[0]) * 0.5, (start[1] + end[1]) * 0.5];
                var geometry = new ol.geom.Point(centerPoint, "XY");
                this.onewayIcon.rotation_ = -rotation;
                this.onewayStyle.setGeometry(geometry);
                this.styles[length++] = this.onewayStyle;
            }
        }
        return this.styles;
    };
    GeoLineStyle.prototype.getGeometry = function (feature) {
        var tmpFlatCoordinates = feature.getFlatCoordinates();
        var tmpCoordinates = [];
        for (var i = 0; i < tmpFlatCoordinates.length; i += 2) {
            tmpCoordinates.push([tmpFlatCoordinates[i], tmpFlatCoordinates[i + 1]]);
        }
        return new ol.geom.LineString(tmpCoordinates);
    };
    GeoLineStyle.createAnchoredGeometry = function (geometry, lineCap, lineWidth, resolution) {
        var segments = GeoLineStyle.getTerminalSegments(geometry);
        var linearRing = undefined;
        var multiPolygon = new ol.geom.MultiPolygon([]);
        for (var _i = 0, segments_1 = segments; _i < segments_1.length; _i++) {
            var segment = segments_1[_i];
            var first = segment[0];
            var last = segment[1];
            var delta = lineWidth * resolution / 2;
            var translateDelta = (lineWidth - 1) * resolution / 2;
            switch (lineCap) {
                case "triangle":
                    linearRing = new ol.geom.LinearRing([
                        [last[0], last[1] + delta],
                        [last[0] + delta, last[1]],
                        [last[0], last[1] - delta],
                        [last[0], last[1] + delta]
                    ]);
                    break;
                case "squareanchor":
                    delta *= 1.5;
                    linearRing = new ol.geom.LinearRing([
                        [last[0] - delta, last[1] + delta],
                        [last[0] + delta, last[1] + delta],
                        [last[0] + delta, last[1] - delta],
                        [last[0] - delta, last[1] - delta],
                        [last[0] - delta, last[1] + delta]
                    ]);
                    break;
                case "roundanchor":
                    delta *= 2;
                    var radiusDelta = Math.PI / 18;
                    var coordinates = [];
                    var radius = 0;
                    for (var i = 0; i < 36; i++) {
                        coordinates.push([
                            Math.cos(radius) * delta + last[0],
                            Math.sin(radius) * delta + last[1]
                        ]);
                        radius += radiusDelta;
                    }
                    coordinates.push(coordinates[0]);
                    linearRing = new ol.geom.LinearRing(coordinates);
                    break;
                case "diamondanchor":
                    delta *= 1.5;
                    linearRing = new ol.geom.LinearRing([
                        [last[0] - delta, last[1] + delta],
                        [last[0] + delta, last[1] + delta],
                        [last[0] + delta, last[1] - delta],
                        [last[0] - delta, last[1] - delta],
                        [last[0] - delta, last[1] + delta]
                    ]);
                    linearRing.rotate(Math.PI / 4, last);
                    break;
                case "arrowanchor":
                    delta *= 2;
                    linearRing = new ol.geom.LinearRing([
                        [last[0], last[1] + delta],
                        [last[0] + delta * Math.cos(Math.PI / 6) * 2, last[1]],
                        [last[0], last[1] - delta],
                        [last[0], last[1] + delta]
                    ]);
                    break;
            }
            if (first[0] === last[0]) {
                if (first[1] > last[1]) {
                    linearRing.rotate(-Math.PI / 2, last);
                    linearRing.translate(0, -translateDelta);
                }
                else {
                    linearRing.rotate(Math.PI / 2, last);
                    linearRing.translate(0, translateDelta);
                }
            }
            else if (first[1] === last[1]) {
                if (last[0] < first[0]) {
                    linearRing.rotate(Math.PI, last);
                    linearRing.translate(-translateDelta, 0);
                }
                else {
                    linearRing.translate(translateDelta, 0);
                }
            }
            else {
                var dx = last[0] - first[0];
                var dy = last[1] - first[1];
                var radians = Math.atan(dy / dx);
                if (last[0] > first[0]) {
                    linearRing.rotate(radians, last);
                    linearRing.translate(Math.cos(radians) * translateDelta, Math.sin(radians) * translateDelta);
                }
                else {
                    linearRing.rotate(radians + Math.PI, last);
                    linearRing.translate(-Math.cos(radians) * translateDelta, -Math.sin(radians) * translateDelta);
                }
            }
            var polygon = new ol.geom.Polygon([]);
            polygon.appendLinearRing(linearRing);
            multiPolygon.appendPolygon(polygon);
        }
        return multiPolygon;
    };
    GeoLineStyle.getTerminalSegments = function (geometry) {
        var type = geometry.getType();
        var results = [];
        var geometryType = ol.geom.GeometryType;
        switch (type) {
            case geometryType.LINE_STRING:
                var coords = geometry.getCoordinates();
                var start = [coords[1], coords[0]];
                var end = [coords[coords.length - 2], coords[coords.length - 1]];
                results.push(start);
                results.push(end);
                break;
            case geometryType.MULTI_LINE_STRING:
                var lines = geometry.getLineStrings();
                for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
                    var line = lines_1[_i];
                    Array.prototype.push.apply(results, GeoLineStyle.getTerminalSegments(line));
                }
                break;
            case geometryType.GEOMETRY_COLLECTION:
                var geometries = geometry.getGeometries();
                for (var _a = 0, geometries_1 = geometries; _a < geometries_1.length; _a++) {
                    var geom = geometries_1[_a];
                    Array.prototype.push.apply(results, GeoLineStyle.getTerminalSegments(geom));
                }
                break;
        }
        return results;
    };
    return GeoLineStyle;
}(__WEBPACK_IMPORTED_MODULE_0__geoStyle__["a" /* GeoStyle */]));



/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeoPointStyle; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__geoStyle__ = __webpack_require__(0);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var GeoPointStyle = /** @class */ (function (_super) {
    __extends(GeoPointStyle, _super);
    function GeoPointStyle(styleJson) {
        var _this = _super.call(this, styleJson) || this;
        if (styleJson) {
            _this.glyph = styleJson["point-glyph"];
            _this.linearGradient = styleJson["point-linear-gradient"];
            _this.radialGradient = styleJson["point-radial-gradient"];
            _this.fill = styleJson["point-fill"];
            _this.glyphName = styleJson["point-glyph-name"];
            _this.outlineColor = styleJson["point-outline-color"];
            _this.outlineWidth = styleJson["point-outline-width"];
            _this.size = styleJson["point-size"];
            _this.angle = styleJson["point-rotate-angle"] ? styleJson["point-rotate-angle"] : 0;
            _this.dx = styleJson["point-dx"];
            _this.dy = styleJson["point-dy"];
            _this.pointFile = styleJson["point-file"];
            _this.opacity = styleJson["point-opacity"];
            _this.symbolType = styleJson["point-symbol-type"];
            _this.transform = styleJson["point-transform"];
            _this.pointType = styleJson["point-type"];
        }
        return _this;
    }
    GeoPointStyle.prototype.initializeCore = function () {
        if (this.outlineColor) {
            this.convertedGlyphOutLineColor = __WEBPACK_IMPORTED_MODULE_0__geoStyle__["a" /* GeoStyle */].toRGBAColor(this.outlineColor, this.opacity);
        }
        if (this.fill) {
            this.convertedGlyphFill = __WEBPACK_IMPORTED_MODULE_0__geoStyle__["a" /* GeoStyle */].toRGBAColor(this.fill, this.opacity);
        }
        if (this.linearGradient) {
            if (GeoPointStyle.linearGradientDictionary.hasOwnProperty(this.linearGradient)) {
                this.convertedGlyphFill = GeoPointStyle.linearGradientDictionary[this.linearGradient];
            }
            else {
                this.convertedGlyphFill = __WEBPACK_IMPORTED_MODULE_0__geoStyle__["a" /* GeoStyle */].toOLLinearGradient(this.linearGradient, this.opacity, this.size);
                GeoPointStyle.linearGradientDictionary[this.linearGradient] = this.convertedGlyphFill;
            }
        }
        if (this.radialGradient) {
            if (GeoPointStyle.radialGradientDictionary.hasOwnProperty(this.radialGradient)) {
                this.convertedGlyphFill = GeoPointStyle.radialGradientDictionary[this.radialGradient];
            }
            else {
                this.convertedGlyphFill = __WEBPACK_IMPORTED_MODULE_0__geoStyle__["a" /* GeoStyle */].toOLRadialGradient(this.radialGradient, this.opacity, this.size);
                GeoPointStyle.radialGradientDictionary[this.radialGradient] = this.convertedGlyphFill;
            }
        }
        switch (this.pointType) {
            case "symbol":
                this.initSymbolStyle();
                break;
            case "image":
                this.initBitmapStyle();
                break;
            case "glyph":
                this.initGlyphStyle();
            default:
                break;
        }
    };
    GeoPointStyle.prototype.getConvertedStyleCore = function (feature, resolution, options) {
        if (this.pointType === "glyph") {
            GeoPointStyle.pointStyle.setImage(null);
            GeoPointStyle.pointStyle.setText(this.textStyle);
        }
        else {
            GeoPointStyle.pointStyle.setText(null);
            GeoPointStyle.pointStyle.setImage(this.imageStyle);
        }
        this.styles = [];
        this.styles[0] = GeoPointStyle.pointStyle;
        return this.styles;
    };
    GeoPointStyle.prototype.initSymbolStyle = function () {
        this.brushType = "GeoSolidBrush";
        if (this.brushType) {
            this.brushOptions = {
                fillColor: this.fill,
                fillOpacity: this.opacity,
                lineGradient: this.linearGradient,
                radiusGradient: this.radialGradient
            };
        }
        var radius = this.size / 2;
        switch (this.symbolType) {
            case "circle":
                this.imageStyle = new ol.style.Circle({
                    fill: new ol.style.Fill(({
                        color: this.convertedGlyphFill
                    })),
                    stroke: new ol.style.Stroke(({
                        color: this.convertedGlyphOutLineColor,
                        width: this.outlineWidth
                    })),
                    radius: radius
                });
                break;
            case "square":
                this.imageStyle = new ol.style.RegularShape({
                    fill: new ol.style.Fill(({
                        color: this.convertedGlyphFill
                    })),
                    stroke: new ol.style.Stroke(({
                        color: this.convertedGlyphOutLineColor,
                        width: this.outlineWidth
                    })),
                    points: 4,
                    radius: radius,
                    angle: Math.PI / 4 + this.angle
                });
                break;
            case "triangle":
                this.imageStyle = new ol.style.RegularShape({
                    fill: new ol.style.Fill(({
                        color: this.convertedGlyphFill
                    })),
                    stroke: new ol.style.Stroke(({
                        color: this.convertedGlyphOutLineColor,
                        width: this.outlineWidth
                    })),
                    points: 3,
                    radius: radius,
                    angle: this.angle
                });
                break;
            case "cross":
                this.imageStyle = new ol.style.RegularShape({
                    fill: new ol.style.Fill(({
                        color: this.convertedGlyphFill
                    })),
                    stroke: new ol.style.Stroke(({
                        color: this.convertedGlyphOutLineColor,
                        width: this.outlineWidth
                    })),
                    points: 4,
                    radius: radius,
                    radius2: 0,
                    angle: this.angle
                });
                break;
            case "diamond":
                break;
            case "diamond2":
                break;
            case "star":
                this.imageStyle = new ol.style.RegularShape({
                    fill: new ol.style.Fill(({
                        color: this.convertedGlyphFill
                    })),
                    stroke: new ol.style.Stroke(({
                        color: this.convertedGlyphOutLineColor,
                        width: this.outlineWidth
                    })),
                    points: 5,
                    radius: radius,
                    radius2: radius / 2.5,
                    angle: this.angle
                });
                break;
            case "star2":
                break;
        }
    };
    GeoPointStyle.prototype.initBitmapStyle = function () {
        if (this.pointFile) {
            this.imageStyle = new ol.style.Icon(({
                opacity: this.opacity || 1,
                src: this.pointFile,
                rotation: this.angle * Math.PI / 180,
                offset: [this.dx, -this.dy]
            }));
        }
    };
    GeoPointStyle.prototype.initGlyphStyle = function () {
        if (this.glyph) {
            this.textStyle = new ol.style.Text(({
                font: this.size + "px " + this.glyph,
                offsetX: this.dx,
                offsetY: this.dy,
                text: this.glyphName,
                fill: new ol.style.Fill(({
                    color: this.convertedGlyphFill
                })),
                stroke: new ol.style.Stroke(({
                    color: this.convertedGlyphOutLineColor,
                    width: this.outlineWidth
                })),
                rotation: this.angle * Math.PI / 180
            }));
        }
    };
    GeoPointStyle.prototype.applyTransForm = function (style) {
        var transformRgx = /([a-z]+)\((.*?)\)/i;
        if (this.transform && transformRgx.test(this.transform)) {
            var matchedResults = this.transform.match(transformRgx);
            var transFormType = matchedResults.length > 2 ? matchedResults[1] : "";
            var transFormValue = matchedResults.length > 2 ? matchedResults[2] : "";
            switch (transFormType) {
                case "rotate":
                    style.getImage() && style.getImage().setRotation(parseInt(transFormValue));
                    style.getText() && style.getText().setRotation(parseInt(transFormValue));
                    break;
                case "scale":
                    var scale = parseInt(transFormValue.split(",")[0]);
                    style.getImage() && style.getImage().setScale(scale);
                    style.getText() && style.getText().setScale(scale);
                    break;
                case "translate":
                default:
                    throw "not support " + this.transform;
            }
        }
    };
    GeoPointStyle.pointStyle = new ol.style.Style();
    GeoPointStyle.linearGradientDictionary = {};
    GeoPointStyle.radialGradientDictionary = {};
    return GeoPointStyle;
}(__WEBPACK_IMPORTED_MODULE_0__geoStyle__["a" /* GeoStyle */]));



/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeoTextStyle; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__geoStyle__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__textLabelingStrategy__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detectTextLabelingStrategy__ = __webpack_require__(3);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var GeoTextStyle = /** @class */ (function (_super) {
    __extends(GeoTextStyle, _super);
    function GeoTextStyle(styleJson) {
        var _this = _super.call(this, styleJson) || this;
        _this.textAligns = ["left", "right", "center", "end", "start"];
        _this.BATCH_CONSTRUCTORS_DEFAULT = {
            Point: __WEBPACK_IMPORTED_MODULE_1__textLabelingStrategy__["a" /* TextLabelingStrategy */],
            MultiPoint: __WEBPACK_IMPORTED_MODULE_1__textLabelingStrategy__["a" /* TextLabelingStrategy */],
            LineString: __WEBPACK_IMPORTED_MODULE_1__textLabelingStrategy__["a" /* TextLabelingStrategy */],
            Circle: __WEBPACK_IMPORTED_MODULE_1__textLabelingStrategy__["a" /* TextLabelingStrategy */],
            MultiLineString: __WEBPACK_IMPORTED_MODULE_1__textLabelingStrategy__["a" /* TextLabelingStrategy */],
            Polygon: __WEBPACK_IMPORTED_MODULE_1__textLabelingStrategy__["a" /* TextLabelingStrategy */],
            MultiPolygon: __WEBPACK_IMPORTED_MODULE_1__textLabelingStrategy__["a" /* TextLabelingStrategy */]
        };
        _this.BATCH_CONSTRUCTORS_DETECT = {
            Point: __WEBPACK_IMPORTED_MODULE_2__detectTextLabelingStrategy__["a" /* DetectTextLabelingStrategy */],
            MultiPoint: __WEBPACK_IMPORTED_MODULE_2__detectTextLabelingStrategy__["a" /* DetectTextLabelingStrategy */],
            LineString: __WEBPACK_IMPORTED_MODULE_2__detectTextLabelingStrategy__["a" /* DetectTextLabelingStrategy */],
            Circle: __WEBPACK_IMPORTED_MODULE_2__detectTextLabelingStrategy__["a" /* DetectTextLabelingStrategy */],
            MultiLineString: __WEBPACK_IMPORTED_MODULE_2__detectTextLabelingStrategy__["a" /* DetectTextLabelingStrategy */],
            Polygon: __WEBPACK_IMPORTED_MODULE_2__detectTextLabelingStrategy__["a" /* DetectTextLabelingStrategy */],
            MultiPolygon: __WEBPACK_IMPORTED_MODULE_2__detectTextLabelingStrategy__["a" /* DetectTextLabelingStrategy */]
        };
        _this.labelInfos = [];
        _this.imageCache = [];
        if (styleJson) {
            _this.align = styleJson["text-align"];
            // TODO
            _this.avoidEdge = styleJson["text-avoid-edge"];
            _this.dx = styleJson["text-dx"];
            _this.dy = styleJson["text-dy"];
            _this.font = styleJson["text-font"];
            _this.fill = styleJson["text-fill"];
            _this.forceHorizontalForLine = styleJson["text-force-horizontal-for-line"];
            _this.haloFill = styleJson["text-halo-fill"];
            _this.haloRadius = styleJson["text-halo-radius"];
            _this.margin = styleJson["text-margin"];
            _this.maskColor = styleJson["text-mask-color"];
            _this.maskMargin = styleJson["text-mask-margin"];
            _this.maskOutlineColor = styleJson["text-mask-outline-color"];
            _this.maskOutlineWidth = styleJson["text-mask-outline-width"];
            _this.maskType = styleJson["text-mask-type"];
            _this.maxCharAngle = styleJson["text-max-char-angle"];
            _this.minDistance = styleJson["text-min-distance"];
            _this.minPadding = styleJson["text-min-padding"];
            _this.name = styleJson["text-name"];
            _this.opacity = styleJson["text-opacity"];
            _this.rotateAngle = styleJson["text-rotate-angle"];
            _this.placements = styleJson["text-placements"] ? styleJson["text-placements"] : "U,B,L,R";
            _this.placementType = styleJson["text-placement-type"] ? styleJson["text-placement-type"] : "default";
            // TODO
            _this.polygonLabelingLocation = styleJson["text-polygon-labeling-location"];
            _this.spacing = styleJson["text-spacing"] !== undefined ? styleJson["text-spacing"] : 50;
            // TODO
            _this.splineType = styleJson["text-spline-type"];
            _this.wrapBefore = styleJson["text-wrap-before"] ? true : styleJson["text-wrap-before"];
            _this.wrapWidth = styleJson["text-wrap-width"];
            _this.textFormat = styleJson["text-text-format"];
            _this.dateFormat = styleJson["text-date-format"];
            _this.numericFormat = styleJson["text-numeric-format"];
        }
        return _this;
    }
    GeoTextStyle.prototype.initializeCore = function () { };
    GeoTextStyle.prototype.getConvertedStyleCore = function (feature, resolution, options) {
        var textStyles = [];
        var font;
        var fill = new ol.style.Fill();
        var stroke = new ol.style.Stroke();
        var textStyle = new ol.style.Text({
            fill: fill,
            stroke: stroke
        });
        GeoTextStyle.style.setText(textStyle);
        if (this.textAligns.indexOf(this.align) >= 0) {
            textStyle.setTextAlign(this.align);
        }
        if (this.dx) {
            textStyle.setOffsetX(this.dx);
        }
        if (this.dy) {
            textStyle.setOffsetY(this.dy);
        }
        if (this.font) {
            font = this.font;
            textStyle.setFont(font);
        }
        if (this.fill) {
            fill.setColor(__WEBPACK_IMPORTED_MODULE_0__geoStyle__["a" /* GeoStyle */].toRGBAColor(this.fill, this.opacity));
        }
        if (this.haloFill) {
            stroke.setColor(__WEBPACK_IMPORTED_MODULE_0__geoStyle__["a" /* GeoStyle */].toRGBAColor(this.haloFill, this.opacity));
        }
        if (this.haloRadius) {
            stroke.setWidth(this.haloRadius);
        }
        if (this.haloFill === undefined && this.haloRadius === undefined) {
            textStyle.setStroke(undefined);
        }
        if (this.rotateAngle) {
            textStyle.setRotation(this.rotateAngle);
        }
        if (this.maxCharAngle) {
            textStyle.setMaxAngle(this.maxCharAngle);
        }
        var featureText = "";
        if (this.name) {
            // this is the column name, we get the value for the feature
            featureText = feature.get(this.name);
        }
        if (this.numericFormat) {
            featureText = this.getTextWithNumericFormat(featureText);
        }
        if (this.dateFormat) {
            featureText = this.getTextWithDateFormat(featureText);
        }
        if (this.textFormat) {
            featureText = this.getTextWithFormat(featureText);
        }
        textStyle.setText(featureText);
        this.setLabelPosition(feature, resolution, GeoTextStyle.style, options.grid, options.frameState);
        textStyles.push(GeoTextStyle.style);
        return textStyles;
    };
    GeoTextStyle.prototype.setLabelPosition = function (geometry, resolution, style, grid, frameState) {
        var textState = style.getText();
        var text = textState.getText();
        if (text === undefined || text === "") {
            return;
        }
        var labelInfo = this.labelInfos[text];
        if (!labelInfo) {
            labelInfo = this.getLabelInfo(text, textState);
            this.labelInfos[text] = labelInfo;
        }
        var geometryType = geometry.getType();
        var flatCoordinates = null;
        if ((geometryType === ol.geom.GeometryType.LINE_STRING || geometryType === ol.geom.GeometryType.MULTI_LINE_STRING) && !this.forceHorizontalForLine) {
            var geometryType_1 = geometry.getType();
            flatCoordinates = geometry.getFlatCoordinates();
            if (flatCoordinates === undefined) {
                return;
            }
        }
        else {
            var labelWidth = labelInfo.labelWidth;
            var labelHeight = labelInfo.labelHeight;
            var scale = labelInfo.scale;
            var font = labelInfo.font;
            var strokeWidth = labelInfo.strokeWidth;
            var numLines = labelInfo.numLines;
            var lines = labelInfo.lines;
            var lineHeight = labelInfo.lineHeight;
            var renderWidth = labelInfo.renderWidth;
            var height = labelInfo.height;
            var widths = labelInfo.widths;
            var Constructor = void 0;
            if (this.placementType === "default") {
                Constructor = this.BATCH_CONSTRUCTORS_DEFAULT[geometryType];
            }
            else if (this.placementType === "detect") {
                Constructor = this.BATCH_CONSTRUCTORS_DETECT[geometryType];
            }
            var textLabelingStrategy = new Constructor();
            switch (geometryType) {
                case ol.geom.GeometryType.POINT:
                    flatCoordinates = geometry.getFlatCoordinates();
                    flatCoordinates = textLabelingStrategy.markLocation(flatCoordinates, labelWidth, labelHeight, resolution, geometryType, this, grid, frameState);
                    break;
                case ol.geom.GeometryType.MULTI_POINT:
                    flatCoordinates = geometry.getCenter();
                    flatCoordinates = textLabelingStrategy.markLocation(flatCoordinates, labelWidth, labelHeight, resolution, geometryType, this, grid, frameState);
                    break;
                case ol.geom.GeometryType.LINE_STRING:
                    flatCoordinates = /** @type {ol.geom.LineString} */ (geometry).getFlatMidpoint();
                    flatCoordinates = textLabelingStrategy.markLocation(flatCoordinates, labelWidth, labelHeight, resolution, geometryType, this, grid, frameState);
                    break;
                case ol.geom.GeometryType.CIRCLE:
                    flatCoordinates = /** @type {ol.geom.Circle} */ (geometry).getCenter();
                    flatCoordinates = textLabelingStrategy.markLocation(flatCoordinates, labelWidth, labelHeight, resolution, geometryType, this, grid, frameState);
                    break;
                case ol.geom.GeometryType.MULTI_LINE_STRING:
                    flatCoordinates = /** @type {ol.geom.MultiLineString} */ (geometry).getFlatMidpoints();
                    flatCoordinates = textLabelingStrategy.markLocation(flatCoordinates, labelWidth, labelHeight, resolution, geometryType, this, grid, frameState);
                    break;
                case ol.geom.GeometryType.POLYGON:
                    flatCoordinates = /** @type {ol.geom.Polygon} */ (geometry).getFlatInteriorPoint();
                    flatCoordinates = textLabelingStrategy.markLocation(flatCoordinates, labelWidth, labelHeight, resolution, geometryType, this, grid, frameState);
                    break;
                case ol.geom.GeometryType.MULTI_POLYGON:
                    var interiorPoints = (geometry).getFlatMidpoint();
                    flatCoordinates = textLabelingStrategy.markLocation(flatCoordinates, labelWidth, labelHeight, resolution, geometryType, this, grid, frameState);
                    break;
                default:
            }
            if (flatCoordinates === undefined) {
                return;
            }
            var labelImage = this.imageCache[text];
            if (!labelImage) {
                labelImage = this.getImage(textState, labelWidth, labelHeight, scale, font, strokeWidth, numLines, lines, lineHeight, renderWidth, height, widths);
                this.imageCache[text] = labelImage;
            }
            if (labelImage === undefined) {
                return;
            }
            textState.label = labelImage;
        }
        textState.labelPosition = flatCoordinates;
    };
    GeoTextStyle.prototype.getLabelInfo = function (text, textState) {
        var font = textState.getFont();
        text = this.wrapText(text, font);
        var strokeState = textState.getStroke();
        var strokeWidth = strokeState && strokeState.getWidth() ? strokeState.getWidth() : 0;
        var lines = text.split("\n");
        var numLines = lines.length;
        var textScale = textState.getScale();
        textScale = textScale === undefined ? 1 : textScale;
        var scale = textScale * window.devicePixelRatio;
        var widths = [];
        var width = ol.render.canvas.TextReplay.measureTextWidths(font, lines, widths);
        var lineHeight = ol.render.canvas.measureTextHeight(font);
        var height = lineHeight * numLines + (this.maskMargin ? this.maskMargin : 0) * 2 + (this.maskOutlineWidth ? this.maskOutlineWidth : 0);
        var renderWidth = width + strokeWidth + (this.maskMargin ? this.maskMargin : 0) * 2 + (this.maskOutlineWidth ? this.maskOutlineWidth : 0);
        var labelWidth = Math.ceil(renderWidth * 1.2 * scale);
        var labelHeight = Math.ceil((height * 1.2 + strokeWidth) * scale);
        var labelInfo = {
            labelWidth: labelWidth,
            labelHeight: labelHeight,
            scale: scale,
            font: font,
            strokeWidth: strokeWidth,
            numLines: numLines,
            lines: lines,
            lineHeight: lineHeight,
            renderWidth: renderWidth,
            height: height,
            widths: widths
        };
        return labelInfo;
    };
    GeoTextStyle.prototype.getImage = function (textState, labelWidth, labelHeight, scale, font, strokeWidth, numLines, lines, lineHeight, renderWidth, height, widths) {
        var fillState = textState.getFill();
        var strokeState = textState.getStroke();
        var label;
        var align = ol.render.replay.TEXT_ALIGN[textState.getTextAlign() || ol.render.canvas.defaultTextAlign];
        var context = ol.dom.createCanvasContext2D(labelWidth, labelHeight);
        label = context.canvas;
        if (scale !== 1) {
            context.scale(scale, scale);
        }
        context.font = font;
        if (strokeState) {
            context.strokeStyle = strokeState.getColor();
            context.lineWidth = strokeWidth * (ol.has.SAFARI ? scale : 1);
            context.lineCap = strokeState.getLineCap();
            context.lineJoin = strokeState.getLineJoin();
            context.miterLimit = strokeState.getMiterLimit();
            var lineDash = strokeState.getLineDash();
            lineDash = lineDash ? lineDash.slice() : ol.render.canvas.defaultLineDash;
            if (ol.has.CANVAS_LINE_DASH && lineDash.length) {
                context.setLineDash(strokeState.getLineDash());
                context.lineDashOffset = strokeState.getLineDashOffset();
            }
        }
        this.drawMask(context, 0, 0, renderWidth, height);
        context.textBaseline = "middle";
        context.textAlign = "center";
        var leftRight = 0.5 - align;
        var x = align * label.width / scale + leftRight * strokeWidth;
        var i;
        if (strokeState.getColor() !== null) {
            context.strokeStyle = strokeState.getColor();
            context.lineWidth = this.haloRadius ? this.haloRadius : 0;
            for (i = 0; i < numLines; ++i) {
                context.strokeText(lines[i], x + leftRight * widths[i] * 1.2 - (this.maskMargin ? this.maskMargin : 0), 0.5 * (strokeWidth + lineHeight) + i * lineHeight * 1.2 + (this.maskMargin ? this.maskMargin : 0) + (this.maskOutlineWidth ? this.maskOutlineWidth : 0) * 0.8);
            }
        }
        if (fillState.getColor() !== null) {
            context.fillStyle = fillState.getColor();
            for (i = 0; i < numLines; ++i) {
                context.fillText(lines[i], x + leftRight * widths[i] * 1.2 - (this.maskMargin ? this.maskMargin : 0), 0.5 * (strokeWidth + lineHeight) + i * lineHeight * 1.2 + (this.maskMargin ? this.maskMargin : 0) + (this.maskOutlineWidth ? this.maskOutlineWidth : 0) * 0.8);
            }
        }
        return label;
    };
    GeoTextStyle.prototype.wrapText = function (text, font) {
        var resultText;
        if (text !== "") {
            var lines = [text];
            var widths = [];
            var width = ol.render.canvas.TextReplay.measureTextWidths(font, lines, widths);
            var wrapWidth = this.wrapWidth;
            var wrapCharacter = " ";
            var isWrapBefore = this.wrapBefore;
            if (wrapWidth > 0 && width > wrapWidth && text.includes(wrapCharacter)) {
                var textLines = [];
                lines = text.split(wrapCharacter);
                var wrapLines = [];
                var wrapWidthSum = 0;
                var tmpWrapWidth = void 0;
                if (isWrapBefore) {
                    for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
                        var line = lines_1[_i];
                        var tmpLine = [line];
                        tmpWrapWidth = ol.render.canvas.TextReplay.measureTextWidths(font, tmpLine, widths);
                        wrapWidthSum += tmpWrapWidth;
                        if (tmpWrapWidth > wrapWidth) {
                            wrapLines = [];
                            textLines = [];
                            wrapWidthSum = 0;
                            break;
                        }
                        if (wrapLines.length > 0) {
                            if (wrapWidthSum > wrapWidth) {
                                wrapLines.push("\n");
                                textLines.push(wrapLines.join(""));
                                wrapLines = [];
                                wrapWidthSum = 0;
                            }
                        }
                        wrapLines.push(" " + line);
                    }
                    if (wrapLines.length > 0) {
                        textLines.push(wrapLines.join(""));
                    }
                }
                else {
                    for (var _a = 0, lines_2 = lines; _a < lines_2.length; _a++) {
                        var line = lines_2[_a];
                        wrapLines.push(" " + line);
                        var tmpLine = [line];
                        tmpWrapWidth = ol.render.canvas.TextReplay.measureTextWidths(font, tmpLine, widths);
                        wrapWidthSum += tmpWrapWidth;
                        if (wrapWidthSum > wrapWidth) {
                            wrapLines.push("\n");
                            textLines.push(wrapLines.join(""));
                            wrapLines = [];
                            wrapWidthSum = 0;
                        }
                    }
                    if (wrapLines.length > 0) {
                        textLines.push(wrapLines.join(""));
                    }
                }
                resultText = textLines.join("");
                if (resultText.lastIndexOf("\n") === resultText.length - 1) {
                    resultText = resultText.substr(0, resultText.length - 1);
                }
            }
            else {
                resultText = text;
            }
        }
        return resultText;
    };
    GeoTextStyle.prototype.drawMask = function (context, x, y, width, height) {
        var fill = undefined;
        var stroke = undefined;
        if (this.maskColor) {
            fill = new ol.style.Fill();
            fill.setColor(__WEBPACK_IMPORTED_MODULE_0__geoStyle__["a" /* GeoStyle */].toRGBAColor(this.maskColor, this.opacity ? this.opacity : 1));
        }
        if (this.maskOutlineColor && this.maskOutlineWidth) {
            stroke = new ol.style.Stroke();
            if (this.maskOutlineColor) {
                stroke.setColor(__WEBPACK_IMPORTED_MODULE_0__geoStyle__["a" /* GeoStyle */].toRGBAColor(this.maskOutlineColor, this.opacity ? this.opacity : 1));
            }
            if (this.maskOutlineWidth) {
                stroke.setWidth(this.maskOutlineWidth ? this.maskOutlineWidth : 0);
            }
        }
        switch (this.maskType) {
            case "default":
            case "Default":
            case "rectangle":
            case "Rectangle":
                this.drawRectangle(context, x, y, width, height, fill, stroke);
                break;
            case "roundedCorners":
            case "RoundedCorners":
                this.drawRoundRectangle(context, x, y, width, height, fill, stroke);
                break;
            case "roundedEnds":
            case "RoundedEnds":
                this.drawRoundedEnds(context, x, y, width, height, fill, stroke);
                break;
        }
    };
    GeoTextStyle.prototype.drawRectangle = function (context, x, y, width, height, fill, stroke) {
        if (fill) {
            context.fillStyle = fill.getColor();
            context.fillRect(x, y, width, height);
        }
        if (stroke) {
            context.lineWidth = stroke.getWidth();
            context.strokeStyle = stroke;
            context.strokeRect(x, y, width, height);
        }
    };
    GeoTextStyle.prototype.drawRoundRectangle = function (context, x, y, width, height, fill, stroke) {
        var radius = (width < height ? width : height) * 0.3;
        width *= 0.9;
        height *= 0.8;
        if (stroke) {
            x = x + width * 0.1;
            y = y + (stroke.getWidth() ? stroke.getWidth() : 0);
        }
        context.beginPath();
        context.moveTo(x + radius, y);
        context.lineTo(x + width - radius, y);
        context.quadraticCurveTo(x + width, y, x + width, y + radius);
        context.lineTo(x + width, y + height - radius);
        context.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        context.lineTo(x + radius, y + height);
        context.quadraticCurveTo(x, y + height, x, y + height - radius);
        context.lineTo(x, y + radius);
        context.quadraticCurveTo(x, y, x + radius, y);
        context.closePath();
        if (stroke) {
            context.lineWidth = stroke.getWidth();
            context.strokeStyle = stroke.getColor();
            context.stroke();
        }
        if (fill) {
            context.fillStyle = fill.getColor();
            context.fill();
        }
    };
    GeoTextStyle.prototype.drawRoundedEnds = function (context, x, y, width, height, fill, stroke) {
        var radius1 = (width < height ? width : height) * 0.2;
        var radius2 = (width < height ? width : height) * 0.5;
        width *= 0.9;
        height *= 0.8;
        if (stroke) {
            x = x + width * 0.1;
            y = y + (stroke.getWidth() ? stroke.getWidth() : 0);
        }
        context.beginPath();
        context.moveTo(x + radius1, y);
        context.lineTo(x + width - radius1, y);
        context.quadraticCurveTo(x + width, y, x + width, y + radius2);
        context.lineTo(x + width, y + height - radius2);
        context.quadraticCurveTo(x + width, y + height, x + width - radius1, y + height);
        context.lineTo(x + radius1, y + height);
        context.quadraticCurveTo(x, y + height, x, y + height - radius2);
        context.lineTo(x, y + radius2);
        context.quadraticCurveTo(x, y, x + radius1, y);
        context.closePath();
        if (stroke) {
            context.lineWidth = stroke.getWidth();
            context.strokeStyle = stroke.getColor();
            context.stroke();
        }
        if (fill) {
            context.fillStyle = fill.getColor();
            context.fill();
        }
    };
    GeoTextStyle.prototype.getTextWithNumericFormat = function (featureText) {
        var tmpArguments = this.numericFormat.split(",");
        var numericFormatOptions = {};
        for (var _i = 0, tmpArguments_1 = tmpArguments; _i < tmpArguments_1.length; _i++) {
            var tmpArgument = tmpArguments_1[_i];
            var keyValuePair = tmpArgument.split(":");
            switch (keyValuePair[0].trim()) {
                case "localeMatcher":
                    numericFormatOptions.localeMatcher = keyValuePair[1].trim();
                    break;
                case "style":
                    numericFormatOptions.style = keyValuePair[1].trim();
                    break;
                case "currency":
                    numericFormatOptions.currency = keyValuePair[1].trim();
                    break;
                case "currencyDisplay":
                    numericFormatOptions.currencyDisplay = keyValuePair[1].trim();
                    break;
                case "useGrouping":
                    numericFormatOptions.useGrouping = keyValuePair[1].trim();
                    break;
                case "minimumIntegerDigits":
                    numericFormatOptions.minimumIntegerDigits = keyValuePair[1].trim();
                    break;
                case "minimumFractionDigits":
                    numericFormatOptions.minimumFractionDigits = keyValuePair[1].trim();
                    break;
                case "maximumFractionDigits":
                    numericFormatOptions.maximumFractionDigits = keyValuePair[1].trim();
                    break;
                case "minimumSignificantDigits":
                    numericFormatOptions.minimumSignificantDigits = keyValuePair[1].trim();
                    break;
                case "maximumSignificantDigits":
                    numericFormatOptions.maximumSignificantDigits = keyValuePair[1].trim();
                    break;
            }
        }
        var numeric = new Intl.NumberFormat(tmpArguments[0], numericFormatOptions);
        return numeric.format(Number(featureText));
    };
    GeoTextStyle.prototype.getTextWithDateFormat = function (featureText) {
        return (new Date(featureText)).format(this.dateFormat);
    };
    GeoTextStyle.prototype.getTextWithFormat = function (featureText) {
        return String.format(featureText, this.textFormat);
    };
    GeoTextStyle.style = new ol.style.Style({});
    return GeoTextStyle;
}(__WEBPACK_IMPORTED_MODULE_0__geoStyle__["a" /* GeoStyle */]));

String.format = function () {
    var s = arguments[0];
    for (var i = 0; i < arguments.length - 1; i++) {
        var reg = new RegExp("\\{" + i + "\\}", "gm");
        s = s.replace(reg, arguments[i + 1]);
    }
    return s;
};
Date.prototype.format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        "S": this.getMilliseconds()
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeoShieldStyle; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__geoStyle__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__textLabelingStrategy__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detectTextLabelingStrategy__ = __webpack_require__(3);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var GeoShieldStyle = /** @class */ (function (_super) {
    __extends(GeoShieldStyle, _super);
    function GeoShieldStyle(styleJson) {
        var _this = _super.call(this, styleJson) || this;
        _this.textAligns = ["left", "right", "center", "end", "start"];
        _this.BATCH_CONSTRUCTORS_DEFAULT = {
            Point: __WEBPACK_IMPORTED_MODULE_1__textLabelingStrategy__["a" /* TextLabelingStrategy */],
            MultiPoint: __WEBPACK_IMPORTED_MODULE_1__textLabelingStrategy__["a" /* TextLabelingStrategy */],
            LineString: __WEBPACK_IMPORTED_MODULE_1__textLabelingStrategy__["a" /* TextLabelingStrategy */],
            Circle: __WEBPACK_IMPORTED_MODULE_1__textLabelingStrategy__["a" /* TextLabelingStrategy */],
            MultiLineString: __WEBPACK_IMPORTED_MODULE_1__textLabelingStrategy__["a" /* TextLabelingStrategy */],
            Polygon: __WEBPACK_IMPORTED_MODULE_1__textLabelingStrategy__["a" /* TextLabelingStrategy */],
            MultiPolygon: __WEBPACK_IMPORTED_MODULE_1__textLabelingStrategy__["a" /* TextLabelingStrategy */]
        };
        _this.BATCH_CONSTRUCTORS_DETECT = {
            Point: __WEBPACK_IMPORTED_MODULE_2__detectTextLabelingStrategy__["a" /* DetectTextLabelingStrategy */],
            MultiPoint: __WEBPACK_IMPORTED_MODULE_2__detectTextLabelingStrategy__["a" /* DetectTextLabelingStrategy */],
            LineString: __WEBPACK_IMPORTED_MODULE_2__detectTextLabelingStrategy__["a" /* DetectTextLabelingStrategy */],
            Circle: __WEBPACK_IMPORTED_MODULE_2__detectTextLabelingStrategy__["a" /* DetectTextLabelingStrategy */],
            MultiLineString: __WEBPACK_IMPORTED_MODULE_2__detectTextLabelingStrategy__["a" /* DetectTextLabelingStrategy */],
            Polygon: __WEBPACK_IMPORTED_MODULE_2__detectTextLabelingStrategy__["a" /* DetectTextLabelingStrategy */],
            MultiPolygon: __WEBPACK_IMPORTED_MODULE_2__detectTextLabelingStrategy__["a" /* DetectTextLabelingStrategy */]
        };
        _this.imageCache = [];
        _this.labelInfos = [];
        if (styleJson) {
            _this.iconType = styleJson["shield-icon-type"];
            _this.iconSymbolType = styleJson["shield-icon-symbol-type"];
            _this.iconSize = styleJson["shield-icon-size"] ? styleJson["shield-icon-size"] : 0;
            _this.iconSrc = styleJson["shield-icon-src"];
            _this.iconColor = styleJson["shield-icon-color"];
            _this.iconOutlineColor = styleJson["shield-icon-outline-color"];
            _this.iconOutlineWidth = styleJson["shield-icon-outline-width"] ? styleJson["shield-icon-outline-width"] : 0;
            if (_this.iconSrc) {
                if (!GeoShieldStyle.poiCache[_this.iconSrc]) {
                    var imageElement = document.createElement("img");
                    imageElement.src = _this.iconSrc;
                    GeoShieldStyle.poiCache[_this.iconSrc] = imageElement;
                }
            }
            _this.name = styleJson["shield-name"];
            _this.font = styleJson["shield-font"];
            _this.align = styleJson["shield-align"];
            _this.angle = styleJson["shield-rotate-angle"] ? styleJson["shield-rotate-angle"] : 0;
            // this.avoidEdges = styleJson["shield-avoid-edges"];
            _this.dateFormat = styleJson["shield-date-format"];
            // TODO
            _this.dx = styleJson["shield-dx"] ? styleJson["shield-dx"] : 0;
            _this.dy = styleJson["shield-dy"] ? styleJson["shield-dy"] : 0;
            _this.faceName = styleJson["shield-face-name"];
            _this.fill = styleJson["shield-fill"];
            // this.forceHorizontalForLine = styleJson["shield-force-horizontal-for-line"];
            _this.haloFill = styleJson["shield-halo-fill"] ? styleJson["shield-halo-fill"] : "Transparent";
            _this.haloRadius = styleJson["shield-halo-radius"] ? styleJson["shield-halo-radius"] : 0;
            // using in strategy
            _this.margin = styleJson["shield-margin"];
            // this.maxCharAngleDelta = styleJson["shield-max-char-angle-delta"];
            // using in strategy
            _this.minDistance = styleJson["shield-min-distance"];
            // using in strategy
            _this.minPadding = styleJson["shield-min-padding"];
            _this.name = styleJson["shield-name"];
            _this.numericFormat = styleJson["shield-numeric-format"];
            _this.opacity = styleJson["shield-opacity"];
            _this.orientation = styleJson["shield-orientation"];
            // using in strategy
            _this.placements = styleJson["shield-placements"] ? styleJson["shield-placements"] : "UR,U,UL,B,BR,BL,L,R";
            // using in strategy
            _this.placementType = styleJson["shield-placement-type"] ? styleJson["shield-placement-type"] : "default";
            _this.size = styleJson["shield-size"];
            // using in strategy
            _this.spacing = styleJson["shield-spacing"];
            _this.textFormat = styleJson["shield-text-format"];
            _this.wrap = styleJson["shield-wrap"] ? true : styleJson["shield-wrap"];
            _this.wrapCharacter = styleJson["shield-wrap-character"];
            _this.wrapWidth = styleJson["shield-wrap-width"];
        }
        return _this;
    }
    GeoShieldStyle.prototype.initializeCore = function () {
        var font;
        var size;
        this.textStyle = new ol.style.Text({
            stroke: new ol.style.Stroke()
        });
        if (this.textAligns.indexOf(this.align) >= 0) {
            this.textStyle.setTextAlign(this.align);
        }
        if (this.font) {
            this.textStyle.setFont(this.font ? this.font : "10px sans-serif");
        }
        if (this.fill) {
            this.textStyle.getFill().setColor(__WEBPACK_IMPORTED_MODULE_0__geoStyle__["a" /* GeoStyle */].toRGBAColor(this.fill, this.opacity));
        }
        if (this.haloFill) {
            this.textStyle.getStroke().setColor(__WEBPACK_IMPORTED_MODULE_0__geoStyle__["a" /* GeoStyle */].toRGBAColor(this.haloFill, this.opacity));
        }
        if (this.haloRadius) {
            this.textStyle.getStroke().setWidth(this.haloRadius);
        }
        if (this.orientation) {
            this.textStyle.setRotation(this.orientation);
        }
        if (this.iconColor) {
            this.convertSymbolColor = __WEBPACK_IMPORTED_MODULE_0__geoStyle__["a" /* GeoStyle */].toRGBAColor(this.iconColor);
        }
        if (this.iconOutlineColor) {
            this.convertSymbolOutlineColor = __WEBPACK_IMPORTED_MODULE_0__geoStyle__["a" /* GeoStyle */].toRGBAColor(this.iconOutlineColor);
        }
        this.style = new ol.style.Style({
            text: this.textStyle
        });
    };
    GeoShieldStyle.prototype.getConvertedStyleCore = function (feature, resolution, options) {
        var featureText = "";
        if (this.name) {
            featureText = feature.get(this.name);
        }
        if (featureText === undefined || featureText === "") {
            return;
        }
        featureText = this.formatText(featureText);
        this.textStyle.setText(featureText);
        var labelInfo = this.labelInfos[featureText];
        if (!labelInfo) {
            labelInfo = this.getLabelInfo(featureText);
            this.labelInfos[featureText] = labelInfo;
        }
        var flatCoordinates = this.setLabelPosition(feature, resolution, labelInfo, options.grid, options.frameState);
        if (flatCoordinates === undefined || flatCoordinates.length < 2) {
            return;
        }
        this.style.setGeometry(new ol.geom.Point(flatCoordinates, "XY"));
        var labelimage = this.getImage(labelInfo);
        this.textStyle.label = labelimage;
        this.textStyle.labelPosition = flatCoordinates;
        if (this.imageCache[featureText] === undefined) {
            this.imageCache[featureText] = [];
        }
        switch (this.iconType) {
            case "image":
            case "Image":
                this.setShiledImageIcon();
                break;
            case "symbol":
            case "Symbol":
                this.setShieldSymbolIcon();
                break;
        }
        return [this.style];
    };
    GeoShieldStyle.prototype.setShieldSymbolIcon = function () {
        if (this.iconSymbolType !== undefined) {
            switch (this.iconSymbolType) {
                case "circle":
                    this.setCircleIcon();
                    break;
                case "square":
                    this.setSquareIcon();
                    break;
                case "triangle":
                    this.setTriangleIcon();
                    break;
                case "cross":
                    this.setCrossIcon();
                    break;
                case "star":
                    this.setStarIcon();
                    break;
            }
            this.style.setImage(this.image);
        }
    };
    GeoShieldStyle.prototype.setStarIcon = function () {
        var fill = undefined;
        var stroke = undefined;
        var radius = this.iconSize * 0.5 * window.devicePixelRatio;
        if (this.iconColor) {
            fill = new ol.style.Fill(({ color: this.convertSymbolColor }));
        }
        if (this.iconOutlineColor || this.iconOutlineWidth) {
            stroke = new ol.style.Stroke(({
                color: this.convertSymbolOutlineColor,
                width: this.iconOutlineWidth
            }));
        }
        this.image = new ol.style.RegularShape({
            fill: fill,
            stroke: stroke,
            points: 5,
            radius: radius,
            radius2: radius / 2.5,
            angle: this.angle
        });
    };
    GeoShieldStyle.prototype.setCrossIcon = function () {
        var fill = undefined;
        var stroke = undefined;
        var radius = this.iconSize * 0.5 * window.devicePixelRatio;
        if (this.iconColor) {
            fill = new ol.style.Fill(({ color: this.convertSymbolColor }));
        }
        if (this.iconOutlineColor || this.iconOutlineWidth) {
            stroke = new ol.style.Stroke(({
                color: this.convertSymbolOutlineColor,
                width: this.iconOutlineWidth
            }));
        }
        this.image = new ol.style.RegularShape({
            fill: fill,
            stroke: stroke,
            points: 4,
            radius: radius,
            radius2: 0,
            angle: this.angle
        });
    };
    GeoShieldStyle.prototype.setTriangleIcon = function () {
        var fill = undefined;
        var stroke = undefined;
        var radius = this.iconSize * 0.5 * window.devicePixelRatio;
        if (this.iconColor) {
            fill = new ol.style.Fill(({ color: this.convertSymbolColor }));
        }
        if (this.iconOutlineColor || this.iconOutlineWidth) {
            stroke = new ol.style.Stroke(({
                color: this.convertSymbolOutlineColor,
                width: this.iconOutlineWidth
            }));
        }
        this.image = new ol.style.RegularShape({
            fill: fill,
            stroke: stroke,
            points: 3,
            radius: radius,
            angle: this.angle
        });
    };
    GeoShieldStyle.prototype.setSquareIcon = function () {
        var fill = undefined;
        var stroke = undefined;
        var radius = this.iconSize * 0.5 * window.devicePixelRatio;
        if (this.iconColor) {
            fill = new ol.style.Fill(({ color: this.convertSymbolColor }));
        }
        if (this.iconOutlineColor || this.iconOutlineWidth) {
            stroke = new ol.style.Stroke(({
                color: this.convertSymbolOutlineColor,
                width: this.iconOutlineWidth
            }));
        }
        this.image = new ol.style.RegularShape({
            fill: fill,
            stroke: stroke,
            points: 4,
            radius: radius,
            angle: Math.PI / 4 + this.angle
        });
    };
    GeoShieldStyle.prototype.setCircleIcon = function () {
        var fill = undefined;
        var stroke = undefined;
        var radius = this.iconSize * 0.5 * window.devicePixelRatio;
        if (this.iconColor) {
            fill = new ol.style.Fill(({ color: this.convertSymbolColor }));
        }
        if (this.iconOutlineColor || this.iconOutlineWidth) {
            stroke = new ol.style.Stroke(({
                color: this.convertSymbolOutlineColor,
                width: this.iconOutlineWidth
            }));
        }
        this.image = new ol.style.Circle({
            fill: fill,
            stroke: stroke,
            radius: radius
        });
    };
    GeoShieldStyle.prototype.setShiledImageIcon = function () {
        if (this.iconSrc !== undefined) {
            var poiImg = GeoShieldStyle.poiCache[this.iconSrc];
            this.image = new ol.style.Icon({
                img: poiImg,
                imgSize: [poiImg.width, poiImg.height],
                rotation: this.angle * Math.PI / 180
            });
            this.style.setImage(this.image);
        }
    };
    GeoShieldStyle.prototype.getLabelInfo = function (text) {
        var font = this.formatFont(this.textStyle.getFont());
        text = this.wrapText(text, font);
        var fillState = this.textStyle.getFill();
        var strokeState = this.textStyle.getStroke();
        var pixelRatio = window.devicePixelRatio;
        var scale = this.textStyle.getScale();
        scale = (scale ? scale : 1) * pixelRatio;
        var align = ol.render.replay.TEXT_ALIGN[this.textStyle.getTextAlign() || ol.render.canvas.defaultTextAlign];
        var strokeWidth = strokeState && strokeState.getWidth() ? strokeState.getWidth() : 0;
        var lines = text.split("\n");
        var numLines = lines.length;
        var widths = [];
        var width = ol.render.canvas.TextReplay.measureTextWidths(font, lines, widths);
        var renderWidth = width + strokeWidth;
        var lineHeight = ol.render.canvas.measureTextHeight(font);
        var height = lineHeight * numLines;
        if (this.dx) {
            this.textStyle.setOffsetX(this.dx + height / 2);
        }
        if (this.dy) {
            this.textStyle.setOffsetY(this.dy + height / 2);
        }
        var labelWidth = Math.ceil(renderWidth * scale);
        var labelHeight = Math.ceil((height + strokeWidth) * scale);
        var labelInfo = {
            width: labelWidth,
            height: labelHeight,
            scale: scale,
            numLines: numLines,
            lines: lines,
            widths: widths,
            lineHeight: lineHeight,
            font: font
        };
        return labelInfo;
    };
    GeoShieldStyle.prototype.setLabelPosition = function (geometry, resolution, labelInfo, grid, frameState) {
        var geometryType = geometry.getType();
        var flatCoordinates;
        var i, ii;
        var Constructor;
        if (this.placementType === "default") {
            Constructor = this.BATCH_CONSTRUCTORS_DEFAULT[geometryType];
        }
        else if (this.placementType === "detect") {
            Constructor = this.BATCH_CONSTRUCTORS_DETECT[geometryType];
        }
        var textLabelingStrategy = new Constructor();
        var width = labelInfo.width;
        var height = labelInfo.height;
        switch (geometryType) {
            case ol.geom.GeometryType.POINT:
            case ol.geom.GeometryType.MULTI_POINT:
                flatCoordinates = geometry.getFlatCoordinates();
                flatCoordinates = textLabelingStrategy.markLocation(flatCoordinates, width, height, resolution, geometryType, this, grid, frameState);
                break;
            case ol.geom.GeometryType.LINE_STRING:
                flatCoordinates = /** @type {ol.geom.LineString} */ (geometry).getFlatMidpoint();
                flatCoordinates = textLabelingStrategy.markLocation(flatCoordinates, width, height, resolution, geometryType, this, grid, frameState);
                break;
            case ol.geom.GeometryType.CIRCLE:
                flatCoordinates = /** @type {ol.geom.Circle} */ (geometry).getCenter();
                flatCoordinates = textLabelingStrategy.markLocation(flatCoordinates, width, height, resolution, geometryType, this, grid, frameState);
                break;
            case ol.geom.GeometryType.MULTI_LINE_STRING:
                flatCoordinates = /** @type {ol.geom.MultiLineString} */ (geometry).getFlatMidpoints();
                flatCoordinates = textLabelingStrategy.markLocation(flatCoordinates, width, height, resolution, geometryType, this, grid, frameState);
                break;
            case ol.geom.GeometryType.POLYGON:
                flatCoordinates = /** @type {ol.geom.Polygon} */ (geometry).getFlatInteriorPoint();
                flatCoordinates = textLabelingStrategy.markLocation(flatCoordinates, width, height, resolution, geometryType, this, grid, frameState);
                break;
            case ol.geom.GeometryType.MULTI_POLYGON:
                var interiorPoints = (geometry).getFlatInteriorPoints();
                flatCoordinates = [];
                for (i = 0, ii = interiorPoints.length; i < ii; i += 3) {
                    if (this.textStyle.overflow || interiorPoints[i + 2] / resolution >= width) {
                        flatCoordinates.push(interiorPoints[i], interiorPoints[i + 1]);
                    }
                }
                flatCoordinates = textLabelingStrategy.markLocation(flatCoordinates, width, height, resolution, geometryType, this, grid, frameState);
                break;
            default:
        }
        return flatCoordinates;
    };
    GeoShieldStyle.prototype.getImage = function (labelInfo) {
        if (labelInfo.label === undefined) {
            var context = ol.dom.createCanvasContext2D(labelInfo.width, labelInfo.height);
            var label = context.canvas;
            if (labelInfo.scale !== 1) {
                context.scale(labelInfo.scale, labelInfo.scale);
            }
            context.font = labelInfo.font;
            var strokeState = this.textStyle.getStroke();
            var strokeWidth = strokeState && strokeState.getWidth() ? strokeState.getWidth() : 0;
            var fillState = this.textStyle.getFill();
            if (strokeState) {
                context.strokeStyle = strokeState.getColor() ? strokeState.getColor() : "Transparent";
                context.lineWidth = strokeWidth * (ol.has.SAFARI ? labelInfo.scale : 1);
                context.lineCap = strokeState.getLineCap();
                context.lineJoin = strokeState.getLineJoin();
                context.miterLimit = strokeState.getMiterLimit();
                var lineDash = strokeState.getLineDash();
                lineDash = lineDash ? lineDash.slice() : ol.render.canvas.defaultLineDash;
                if (ol.has.CANVAS_LINE_DASH && lineDash.length) {
                    context.setLineDash(strokeState.getLineDash());
                    context.lineDashOffset = strokeState.getLineDashOffset();
                }
            }
            if (fillState) {
                context.fillStyle = fillState.getColor();
            }
            context.textBaseline = "middle";
            context.textAlign = "center";
            var align = ol.render.replay.TEXT_ALIGN[this.textStyle.getTextAlign() || ol.render.canvas.defaultTextAlign];
            var leftRight = (0.5 - align);
            var x = align * label.width / labelInfo.scale + leftRight * strokeWidth;
            var i = void 0;
            if (strokeState) {
                for (i = 0; i < labelInfo.numLines; ++i) {
                    context.strokeText(labelInfo.lines[i], x + leftRight * labelInfo.widths[i], 0.5 * (strokeWidth + labelInfo.lineHeight) + i * labelInfo.lineHeight);
                }
            }
            if (fillState) {
                for (i = 0; i < labelInfo.numLines; ++i) {
                    context.fillText(labelInfo.lines[i], x + leftRight * labelInfo.widths[i], 0.5 * (strokeWidth + labelInfo.lineHeight) + i * labelInfo.lineHeight);
                }
            }
            labelInfo["label"] = label;
        }
        return labelInfo["label"];
    };
    GeoShieldStyle.prototype.formatText = function (featureText) {
        if (this.numericFormat) {
            featureText = this.getTextWithNumericFormat(featureText);
        }
        if (this.dateFormat) {
            featureText = this.getTextWithDateFormat(featureText);
        }
        if (this.textFormat) {
            featureText = this.getTextWithFormat(featureText);
        }
        return featureText;
    };
    GeoShieldStyle.prototype.getTextWithNumericFormat = function (featureText) {
        var tmpArguments = this.numericFormat.split(",");
        var numericFormatOptions = {};
        for (var _i = 0, tmpArguments_1 = tmpArguments; _i < tmpArguments_1.length; _i++) {
            var tmpArgument = tmpArguments_1[_i];
            var keyValuePair = tmpArgument.split(":");
            switch (keyValuePair[0].trim()) {
                case "localeMatcher":
                    numericFormatOptions.localeMatcher = keyValuePair[1].trim();
                    break;
                case "style":
                    numericFormatOptions.style = keyValuePair[1].trim();
                    break;
                case "currency":
                    numericFormatOptions.currency = keyValuePair[1].trim();
                    break;
                case "currencyDisplay":
                    numericFormatOptions.currencyDisplay = keyValuePair[1].trim();
                    break;
                case "useGrouping":
                    numericFormatOptions.useGrouping = keyValuePair[1].trim();
                    break;
                case "minimumIntegerDigits":
                    numericFormatOptions.minimumIntegerDigits = keyValuePair[1].trim();
                    break;
                case "minimumFractionDigits":
                    numericFormatOptions.minimumFractionDigits = keyValuePair[1].trim();
                    break;
                case "maximumFractionDigits":
                    numericFormatOptions.maximumFractionDigits = keyValuePair[1].trim();
                    break;
                case "minimumSignificantDigits":
                    numericFormatOptions.minimumSignificantDigits = keyValuePair[1].trim();
                    break;
                case "maximumSignificantDigits":
                    numericFormatOptions.maximumSignificantDigits = keyValuePair[1].trim();
                    break;
            }
        }
        var numeric = new Intl.NumberFormat(tmpArguments[0], numericFormatOptions);
        return numeric.format(Number(featureText));
    };
    GeoShieldStyle.prototype.getTextWithDateFormat = function (featureText) {
        return (new Date(featureText)).format(this.dateFormat);
    };
    GeoShieldStyle.prototype.getTextWithFormat = function (featureText) {
        return String.format(featureText, this.textFormat);
    };
    GeoShieldStyle.prototype.getPointGeometry = function (feature) {
        return feature.getGeometry();
    };
    GeoShieldStyle.prototype.wrapText = function (text, font) {
        var resultText;
        if (text !== "") {
            var lines = [text];
            var widths = [];
            var width = ol.render.canvas.TextReplay.measureTextWidths(font, lines, widths);
            var wrapWidth = this.wrapWidth;
            var wrapCharacter = " ";
            var isWrapBefore = this.wrap;
            if (wrapWidth > 0 && width > wrapWidth && text.includes(wrapCharacter)) {
                var textLines = [];
                lines = text.split(wrapCharacter);
                var wrapLines = [];
                var wrapWidthSum = 0;
                var tmpWrapWidth = void 0;
                if (isWrapBefore) {
                    for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
                        var line = lines_1[_i];
                        var tmpLine = [line];
                        tmpWrapWidth = ol.render.canvas.TextReplay.measureTextWidths(font, tmpLine, widths);
                        wrapWidthSum += tmpWrapWidth;
                        if (tmpWrapWidth > wrapWidth) {
                            wrapLines = [];
                            textLines = [];
                            wrapWidthSum = 0;
                            break;
                        }
                        if (wrapLines.length > 0) {
                            if (wrapWidthSum > wrapWidth) {
                                wrapLines.push("\n");
                                textLines.push(wrapLines.join(""));
                                wrapLines = [];
                                wrapWidthSum = 0;
                            }
                        }
                        wrapLines.push(" " + line);
                    }
                    if (wrapLines.length > 0) {
                        textLines.push(wrapLines.join(""));
                    }
                }
                else {
                    for (var _a = 0, lines_2 = lines; _a < lines_2.length; _a++) {
                        var line = lines_2[_a];
                        wrapLines.push(" " + line);
                        var tmpLine = [line];
                        tmpWrapWidth = ol.render.canvas.TextReplay.measureTextWidths(font, tmpLine, widths);
                        wrapWidthSum += tmpWrapWidth;
                        if (wrapWidthSum > wrapWidth) {
                            wrapLines.push("\n");
                            textLines.push(wrapLines.join(""));
                            wrapLines = [];
                            wrapWidthSum = 0;
                        }
                    }
                    if (wrapLines.length > 0) {
                        textLines.push(wrapLines.join(""));
                    }
                }
                resultText = textLines.join("");
                if (resultText.lastIndexOf("\n") === resultText.length - 1) {
                    resultText = resultText.substr(0, resultText.length - 1);
                }
            }
            else {
                resultText = text;
            }
        }
        return resultText;
    };
    GeoShieldStyle.prototype.formatFont = function (font) {
        var tmpFonts = font.split(" ");
        var formatedFont = [];
        if (tmpFonts[tmpFonts.length - 1].includes("bold") || tmpFonts[tmpFonts.length - 1].includes("italic")) {
            formatedFont.push(tmpFonts[tmpFonts.length - 1] + " ");
            for (var i = 0; i < tmpFonts.length - 1; i++) {
                formatedFont.push(tmpFonts[i] + " ");
            }
        }
        else {
            return font;
        }
        return formatedFont.join("").trim();
    };
    GeoShieldStyle.poiCache = [];
    return GeoShieldStyle;
}(__WEBPACK_IMPORTED_MODULE_0__geoStyle__["a" /* GeoStyle */]));



/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tree; });
var Tree = /** @class */ (function () {
    function Tree(node, treeIndex) {
        this.node = node;
        this.root = node;
        this.treeIndex = treeIndex;
    }
    Tree.prototype.traverseNode = function (callback, select) {
        (function recurse(currentNode) {
            if (callback(currentNode)) {
                if (currentNode.children.length > 0) {
                    var hasMatchedChildren = false;
                    for (var i = 0, length_1 = currentNode.children.length; i < length_1; i++) {
                        if (recurse(currentNode.children[i])) {
                            hasMatchedChildren = true;
                            break;
                        }
                    }
                }
                else {
                    // current node is matched, and without children
                    select(currentNode);
                }
                // true: the currentNode is matched.
                return true;
            }
            // false: the currentNode is not matched.
            return false;
        })(this.root);
    };
    return Tree;
}());



/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeNode; });
var TreeNode = /** @class */ (function () {
    function TreeNode(data) {
        this.data = data;
        this.children = [];
    }
    return TreeNode;
}());



/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeoVectorTileLayerRender; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_grid__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__replayGroupCustom__ = __webpack_require__(27);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var GeoVectorTileLayerRender = /** @class */ (function (_super) {
    __extends(GeoVectorTileLayerRender, _super);
    function GeoVectorTileLayerRender(layer) {
        var _this = _super.call(this, layer) || this;
        _this.VECTOR_REPLAYS_CUSTOM = {
            "image": [ol.render.ReplayType.DEFAULT],
            "hybrid": [ol.render.ReplayType.TEXT, ol.render.ReplayType.IMAGE, ol.render.ReplayType.DEFAULT],
            "vector": ol.render.replay.ORDER
        };
        _this.VECTOR_REPLAYS = _this.VECTOR_REPLAYS_CUSTOM;
        _this.prepareFrame = _this.prepareFrameCustom;
        return _this;
    }
    GeoVectorTileLayerRender.prototype.tileLayerPrepareFrameCustom = function (frameState, layerState) {
        var pixelRatio = frameState.pixelRatio;
        var size = frameState.size;
        var viewState = frameState.viewState;
        var projection = viewState.projection;
        var viewResolution = viewState.resolution;
        var viewCenter = viewState.center;
        var tileLayer = this.getLayer();
        var tileSource = (tileLayer.getSource());
        var sourceRevision = tileSource.getRevision();
        var tileGrid = tileSource.getTileGridForProjection(projection);
        var z = tileGrid.getZForResolution(viewResolution, this.zDirection);
        var tileResolution = tileGrid.getResolution(z);
        var oversampling = Math.round(viewResolution / tileResolution) || 1;
        var extent = frameState.extent;
        if (layerState.extent !== undefined) {
            extent = ol.extent.getIntersection(extent, layerState.extent);
        }
        if (ol.extent.isEmpty(extent)) {
            // Return false to prevent the rendering of the layer.
            return false;
        }
        var tileRange = tileGrid.getTileRangeForExtentAndZ(extent, z);
        var xOffset = (tileRange.maxX - tileRange.minX);
        var yOffset = (tileRange.maxY - tileRange.minY);
        xOffset = xOffset <= 0 ? 1 : xOffset * 2 + 3;
        yOffset = yOffset <= 0 ? 1 : yOffset * 2 + 3;
        var cacheSize = xOffset * yOffset;
        tileSource.tileCache.highWaterMark = cacheSize <= 15 ? 15 : cacheSize;
        var imageExtent = tileGrid.getTileRangeExtent(z, tileRange);
        var tilePixelRatio = tileSource.getTilePixelRatio(pixelRatio);
        /**
         * @type {Object.<number, Object.<string, ol.Tile>>}
         */
        var tilesToDrawByZ = {};
        tilesToDrawByZ[z] = {};
        var findLoadedTiles = this.createLoadedTileFinder(tileSource, projection, tilesToDrawByZ);
        var tmpExtent = this.tmpExtent;
        var tmpTileRange = this.tmpTileRange_;
        var newTiles = false;
        var tile, x, y;
        for (x = tileRange.minX; x <= tileRange.maxX; ++x) {
            for (y = tileRange.minY; y <= tileRange.maxY; ++y) {
                tile = tileSource.getTile(z, x, y, pixelRatio, projection);
                if (tile.getState() === ol.TileState.ERROR) {
                    if (!tileLayer.getUseInterimTilesOnError()) {
                        // When useInterimTilesOnError is false, we consider the error tile as loaded.
                        tile.setState(ol.TileState.LOADED);
                    }
                    else if (tileLayer.getPreload() > 0) {
                        // Preloaded tiles for lower resolutions might have finished loading.
                        newTiles = true;
                    }
                }
                if (!this.isDrawableTile_(tile)) {
                    tile = tile.getInterimTile();
                }
                if (this.isDrawableTile_(tile)) {
                    var uid = ol.getUid(this);
                    if (tile.getState() === ol.TileState.LOADED) {
                        tilesToDrawByZ[z][tile.tileCoord.toString()] = tile;
                        var inTransition = tile.inTransition(uid);
                        if (!newTiles && (inTransition || this.renderedTiles.indexOf(tile) === -1)) {
                            newTiles = true;
                        }
                    }
                    if (tile.getAlpha(uid, frameState.time) === 1) {
                        // don't look for alt tiles if alpha is 1
                        continue;
                    }
                }
                var childTileRange = tileGrid.getTileCoordChildTileRange(tile.tileCoord, tmpTileRange, tmpExtent);
                var covered = false;
                if (childTileRange) {
                    covered = findLoadedTiles(z + 1, childTileRange);
                }
                if (!covered) {
                    tileGrid.forEachTileCoordParentTileRange(tile.tileCoord, findLoadedTiles, null, tmpTileRange, tmpExtent);
                }
            }
        }
        var renderedResolution = tileResolution * pixelRatio / tilePixelRatio * oversampling;
        var hints = frameState.viewHints;
        var animatingOrInteracting = hints[ol.ViewHint.ANIMATING] || hints[ol.ViewHint.INTERACTING];
        if (!(this.renderedResolution && Date.now() - frameState.time > 16 && animatingOrInteracting) && (newTiles ||
            !(this.renderedExtent_ && ol.extent.containsExtent(this.renderedExtent_, extent)) ||
            this.renderedRevision !== sourceRevision ||
            oversampling !== this.oversampling_ ||
            !animatingOrInteracting && renderedResolution !== this.renderedResolution)) {
            var context = this.context;
            if (context) {
                var tilePixelSize = tileSource.getTilePixelSize(z, pixelRatio, projection);
                var width = Math.round(tileRange.getWidth() * tilePixelSize[0] / oversampling);
                var height = Math.round(tileRange.getHeight() * tilePixelSize[1] / oversampling);
                var canvas = context.canvas;
                if (canvas.width !== width || canvas.height !== height) {
                    this.oversampling_ = oversampling;
                    canvas.width = width;
                    canvas.height = height;
                }
                else {
                    if (this.renderedExtent_ && !ol.extent.equals(imageExtent, this.renderedExtent_)) {
                        context.clearRect(0, 0, width, height);
                    }
                    oversampling = this.oversampling_;
                }
            }
            this.renderedTiles.length = 0;
            /** @type {Array.<number>} */
            var zs = Object.keys(tilesToDrawByZ).map(Number);
            zs.sort(function (a, b) {
                if (a === z) {
                    return 1;
                }
                else if (b === z) {
                    return -1;
                }
                else {
                    return a > b ? 1 : a < b ? -1 : 0;
                }
            });
            var currentResolution = void 0, currentScale = void 0, currentTilePixelSize = void 0, currentZ = void 0, i = void 0, ii = void 0;
            var tileExtent = void 0, tileGutter = void 0, tilesToDraw = void 0, w = void 0, h = void 0;
            for (i = 0, ii = zs.length; i < ii; ++i) {
                currentZ = zs[i];
                currentTilePixelSize = tileSource.getTilePixelSize(currentZ, pixelRatio, projection);
                currentResolution = tileGrid.getResolution(currentZ);
                currentScale = currentResolution / tileResolution;
                tileGutter = tilePixelRatio * tileSource.getGutter(projection);
                tilesToDraw = tilesToDrawByZ[currentZ];
                for (var tileCoordKey in tilesToDraw) {
                    tile = tilesToDraw[tileCoordKey];
                    tileExtent = tileGrid.getTileCoordExtent(tile.getTileCoord(), tmpExtent);
                    x = (tileExtent[0] - imageExtent[0]) / tileResolution * tilePixelRatio / oversampling;
                    y = (imageExtent[3] - tileExtent[3]) / tileResolution * tilePixelRatio / oversampling;
                    w = currentTilePixelSize[0] * currentScale / oversampling;
                    h = currentTilePixelSize[1] * currentScale / oversampling;
                    this.drawTileImage(tile, frameState, layerState, x, y, w, h, tileGutter, z === currentZ);
                    this.renderedTiles.push(tile);
                }
            }
            this.renderedRevision = sourceRevision;
            this.renderedResolution = tileResolution * pixelRatio / tilePixelRatio * oversampling;
            this.renderedExtent_ = imageExtent;
        }
        var scale = this.renderedResolution / viewResolution;
        var transform = ol.transform.compose(this.imageTransform_, pixelRatio * size[0] / 2, pixelRatio * size[1] / 2, scale, scale, 0, (this.renderedExtent_[0] - viewCenter[0]) / this.renderedResolution * pixelRatio, (viewCenter[1] - this.renderedExtent_[3]) / this.renderedResolution * pixelRatio);
        ol.transform.compose(this.coordinateToCanvasPixelTransform, pixelRatio * size[0] / 2 - transform[4], pixelRatio * size[1] / 2 - transform[5], pixelRatio / viewResolution, -pixelRatio / viewResolution, 0, -viewCenter[0], -viewCenter[1]);
        this.updateUsedTiles(frameState.usedTiles, tileSource, z, tileRange);
        this.manageTilePyramid(frameState, tileSource, tileGrid, pixelRatio, projection, extent, z, tileLayer.getPreload());
        this.scheduleExpireCache(frameState, tileSource);
        this.updateLogos(frameState, tileSource);
        return this.renderedTiles.length > 0;
    };
    GeoVectorTileLayerRender.prototype.prepareFrameCustom = function (frameState, layerState) {
        var layer = this.getLayer();
        var layerRevision = layer.getRevision();
        if (this.renderedLayerRevision_ !== layerRevision) {
            this.renderedTiles.length = 0;
            var renderMode = layer.getRenderMode();
            if (!this.context && renderMode !== ol.layer.VectorTileRenderType.VECTOR) {
                this.context = ol.dom.createCanvasContext2D();
            }
            if (this.context && renderMode === ol.layer.VectorTileRenderType.VECTOR) {
                this.context = null;
            }
        }
        this.renderedLayerRevision_ = layerRevision;
        return this.tileLayerPrepareFrameCustom.apply(this, arguments);
    };
    GeoVectorTileLayerRender.prototype.postCompose = function (context, frameState, layerState) {
        var layer = this.getLayer();
        var declutterReplays = layer.getDeclutter() ? {} : null;
        var source = (layer.getSource());
        var renderMode = layer.getRenderMode();
        var replayTypes = this.VECTOR_REPLAYS_CUSTOM[renderMode];
        var pixelRatio = frameState.pixelRatio;
        var rotation = frameState.viewState.rotation;
        var size = frameState.size;
        var offsetX, offsetY;
        if (rotation) {
            offsetX = Math.round(pixelRatio * size[0] / 2);
            offsetY = Math.round(pixelRatio * size[1] / 2);
            ol.render.canvas.rotateAtOffset(context, -rotation, offsetX, offsetY);
        }
        if (declutterReplays) {
            this.declutterTree_.clear();
        }
        var tiles = this.renderedTiles;
        var tileGrid = source.getTileGridForProjection(frameState.viewState.projection);
        var clips = [];
        var zs = [];
        for (var i = tiles.length - 1; i >= 0; --i) {
            var tile = (tiles[i]);
            if (tile.getState() === ol.TileState.ABORT) {
                continue;
            }
            var tileCoord = tile.tileCoord;
            var worldOffset = tileGrid.getTileCoordExtent(tileCoord)[0] -
                tileGrid.getTileCoordExtent(tile.wrappedTileCoord)[0];
            var transform = undefined;
            for (var t = 0, tt = tile.tileKeys.length; t < tt; ++t) {
                var sourceTile = tile.getTile(tile.tileKeys[t]);
                if (sourceTile.getState() === ol.TileState.ERROR) {
                    continue;
                }
                var replayGroup = sourceTile.getReplayGroup(layer, tileCoord.toString());
                if (renderMode !== ol.layer.VectorTileRenderType.VECTOR && !replayGroup.hasReplays(replayTypes)) {
                    continue;
                }
                if (!transform) {
                    transform = this.getTransform(frameState, worldOffset);
                }
                var currentZ = sourceTile.tileCoord[0];
                var currentClip = replayGroup.getClipCoords(transform);
                context.save();
                context.globalAlpha = layerState.opacity;
                // Create a clip mask for regions in this low resolution tile that are
                // already filled by a higher resolution tile
                for (var j = 0, jj = clips.length; j < jj; ++j) {
                    var clip = clips[j];
                    if (currentZ < zs[j]) {
                        context.beginPath();
                        // counter-clockwise (outer ring) for current tile
                        context.moveTo(currentClip[0], currentClip[1]);
                        context.lineTo(currentClip[2], currentClip[3]);
                        context.lineTo(currentClip[4], currentClip[5]);
                        context.lineTo(currentClip[6], currentClip[7]);
                        // clockwise (inner ring) for higher resolution tile
                        context.moveTo(clip[6], clip[7]);
                        context.lineTo(clip[4], clip[5]);
                        context.lineTo(clip[2], clip[3]);
                        context.lineTo(clip[0], clip[1]);
                        context.clip();
                    }
                }
                replayGroup.replay(context, transform, rotation, {}, replayTypes, declutterReplays);
                context.restore();
                clips.push(currentClip);
                zs.push(currentZ);
            }
        }
        if (declutterReplays) {
            ol.render.canvas.ReplayGroup.replayDeclutter(declutterReplays, context, rotation);
        }
        if (rotation) {
            ol.render.canvas.rotateAtOffset(context, rotation, 
            /** @type {number} */ (offsetX), /** @type {number} */ (offsetY));
        }
        ol.renderer.canvas.TileLayer.prototype.postCompose.apply(this, arguments);
    };
    GeoVectorTileLayerRender.prototype.createReplayGroup_ = function (tile, frameState) {
        var layer = this.getLayer();
        var pixelRatio = frameState.pixelRatio;
        var projection = frameState.viewState.projection;
        var revision = layer.getRevision();
        var renderOrder = (layer.getRenderOrder()) || null;
        var replayState = tile.getReplayState(layer);
        if (!replayState.dirty && replayState.renderedRevision === revision &&
            replayState.renderedRenderOrder === renderOrder) {
            return;
        }
        var source = (layer.getSource());
        var sourceTileGrid = source.getTileGrid();
        var tileGrid = source.getTileGridForProjection(projection);
        var resolution = tileGrid.getResolution(tile.tileCoord[0]);
        var tileExtent = tileGrid.getTileCoordExtent(tile.wrappedTileCoord);
        var zIndexKeys = {};
        var _loop_1 = function (t, tt) {
            var sourceTile = tile.getTile(tile.tileKeys[t]);
            var newGrid = new __WEBPACK_IMPORTED_MODULE_0__style_grid__["a" /* Grid */](8);
            if (sourceTile.getState() === ol.TileState.ERROR) {
                return "continue";
            }
            var sourceTileCoord = sourceTile.tileCoord;
            var sourceTileExtent = sourceTileGrid.getTileCoordExtent(sourceTileCoord);
            var sharedExtent = ol.extent.getIntersection(tileExtent, sourceTileExtent);
            var bufferedExtent = ol.extent.equals(sourceTileExtent, sharedExtent) ? null :
                ol.extent.buffer(sharedExtent, layer.getRenderBuffer() * resolution);
            var tileProjection = sourceTile.getProjection();
            var reproject = false;
            if (!ol.proj.equivalent(projection, tileProjection)) {
                reproject = true;
                sourceTile.setProjection(projection);
            }
            replayState.dirty = false;
            var replayGroup = new __WEBPACK_IMPORTED_MODULE_1__replayGroupCustom__["a" /* ReplayGroupCustom */](0, sharedExtent, resolution, pixelRatio, source.getOverlaps(), this_1.declutterTree_, layer.getRenderBuffer());
            var squaredTolerance = ol.renderer.vector.getSquaredTolerance(resolution, pixelRatio);
            /**
             * @param {ol.Feature|ol.render.Feature} feature Feature.
             * @this {ol.renderer.canvas.VectorTileLayer}
             */
            var renderFeature = function (feature, geoStyles, options) {
                var styles;
                if (geoStyles) {
                    if (geoStyles && geoStyles.length > 0) {
                        for (var i = 0, ii = geoStyles.length; i < ii; i++) {
                            if (geoStyles[i]) {
                                var ol4Styles = geoStyles[i].getStyles(feature, resolution, options);
                                if (styles === undefined) {
                                    styles = [];
                                }
                                Array.prototype.push.apply(styles, ol4Styles);
                            }
                        }
                    }
                }
                else {
                    var styleFunction = feature.getStyleFunction();
                    if (styleFunction) {
                        styles = styleFunction.call(/** @type {ol.Feature} */ (feature), resolution);
                    }
                    else {
                        styleFunction = layer.getStyleFunction();
                        if (styleFunction) {
                            styles = styleFunction(feature, resolution);
                        }
                    }
                }
                if (styles) {
                    var dirty = this.renderFeature(feature, squaredTolerance, styles, replayGroup);
                    this.dirty_ = this.dirty_ || dirty;
                    replayState.dirty = replayState.dirty || dirty;
                }
            };
            var instructs = sourceTile.getRenderFeatureInstructs();
            if (instructs && instructs.length > 0) {
                // let lastGeoStyleId;
                // let flatCoordinates;
                // let ends;
                for (var i = 0; i < instructs.length; i++) {
                    var feature = instructs[i][0];
                    // let geostyle = instructs[i][1];
                    // if (geostyle.id === lastGeoStyleId) {
                    // }
                    // if (geostyle.id !== lastGeoStyleId) {
                    //     let type = feature.getType();
                    //     switch (type) {
                    //         case (<any>ol).geom.Geometry.POINT:
                    //             type = (<any>ol).geom.Geometry.MULTI_POINT;
                    //             break;
                    //         case (<any>ol).geom.Geometry.LINE_STRING:
                    //             type = (<any>ol).geom.Geometry.MULTI_LINE_STRING;
                    //             break;
                    //         default:
                    //             // MultiPolygon not relevant for rendering - winding order determines
                    //             // outer rings of polygons.
                    //             break;
                    //     }
                    // }
                    if (feature["projected"] === undefined) {
                        if (reproject) {
                            if (tileProjection.getUnits() === ol.proj.Units.TILE_PIXELS) {
                                // projected tile extent
                                tileProjection.setWorldExtent(sourceTileExtent);
                                // tile extent in tile pixel space
                                tileProjection.setExtent(sourceTile.getExtent());
                            }
                            feature.getGeometry().transform(tileProjection, projection);
                            feature.extent_ = null;
                            feature.getExtent();
                        }
                        feature["projected"] = "";
                    }
                    // // the drawing extent filter has been implemented in the MVT ReadFeature. But without layer.renderBuffer logic
                    // if (!bufferedExtent || ol.extent.intersects(bufferedExtent, feature.getGeometry().getExtent())) {
                    renderFeature.call(this_1, feature, [instructs[i][1]], { grid: newGrid, frameState: frameState });
                    // }
                }
                // // it will clear the cache, but some tile will be reload then the instructs is empty.
                // if (resolution <= 305.748113140705) {
                //     instructs.length = 0;
                // }
            }
            replayGroup.finish();
            for (var r in replayGroup.getReplays()) {
                zIndexKeys[r] = true;
            }
            sourceTile.setReplayGroup(layer, tile.tileCoord.toString(), replayGroup);
        };
        var this_1 = this;
        for (var t = 0, tt = tile.tileKeys.length; t < tt; ++t) {
            _loop_1(t, tt);
        }
        replayState.renderedRevision = revision;
        replayState.renderedRenderOrder = renderOrder;
    };
    GeoVectorTileLayerRender.handles = function (type, layer) {
        return type === ol.renderer.Type.CANVAS && layer.getType() === ol.LayerType.MAPSUITE_VECTORTILE;
    };
    GeoVectorTileLayerRender.create = function (mapRenderer, layer) {
        return new GeoVectorTileLayerRender(layer);
    };
    return GeoVectorTileLayerRender;
}(ol.renderer.canvas.VectorTileLayer));



/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Grid; });
var Grid = /** @class */ (function () {
    function Grid(gridSize) {
        this.gridSize = gridSize;
        this.metrics = {};
    }
    return Grid;
}());



/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReplayGroupCustom; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__textReplayCustom__ = __webpack_require__(28);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ReplayGroupCustom = /** @class */ (function (_super) {
    __extends(ReplayGroupCustom, _super);
    function ReplayGroupCustom(tolerance, maxExtent, resolution, pixelRatio, overlaps, declutterTree, opt_renderBuffer) {
        var _this = _super.call(this, tolerance, maxExtent, resolution, pixelRatio, overlaps, declutterTree, opt_renderBuffer) || this;
        _this.BATCH_CONSTRUCTORS_CUSTOM = {
            "Circle": ol.render.canvas.PolygonReplay,
            "Default": ol.render.canvas.Replay,
            "Image": ol.render.canvas.ImageReplay,
            "LineString": ol.render.canvas.LineStringReplay,
            "Polygon": ol.render.canvas.PolygonReplay,
            "Text": __WEBPACK_IMPORTED_MODULE_0__textReplayCustom__["a" /* TextReplayCustom */]
        };
        _this.getReplay = _this.getReplayCustom;
        _this.BATCH_CONSTRUCTORS_ = _this.BATCH_CONSTRUCTORS_CUSTOM;
        return _this;
        // this.replay = this.replayCustom;
    }
    ReplayGroupCustom.prototype.replayCustom = function (context, transform, viewRotation, skippedFeaturesHash, opt_replayTypes, opt_declutterReplays) {
        /** @type {Array.<number>} */
        var zs = Object.keys(this.replaysByZIndex_).map(Number);
        zs.sort(ol.array.numberSafeCompareFunction);
        // setup clipping so that the parts of over-simplified geometries are not
        // visible outside the current extent when panning
        context.save();
        this.clip(context, transform);
        var replayTypes = opt_replayTypes ? opt_replayTypes : ol.render.replay.ORDER;
        var i, ii, j, jj, replays, replay;
        for (i = 0, ii = zs.length; i < ii; ++i) {
            var zIndexKey = zs[i].toString();
            replays = this.replaysByZIndex_[zIndexKey];
            for (j = 0, jj = replayTypes.length; j < jj; ++j) {
                var replayType = replayTypes[j];
                replay = replays[replayType];
                if (replay !== undefined) {
                    if (opt_declutterReplays &&
                        (replayType === ol.render.ReplayType.IMAGE || replayType === ol.render.ReplayType.TEXT)) {
                        var declutter = opt_declutterReplays[zIndexKey];
                        if (!declutter) {
                            opt_declutterReplays[zIndexKey] = [replay, transform.slice(0)];
                        }
                        else {
                            declutter.push(replay, transform.slice(0));
                        }
                    }
                    else {
                        replay.replay(context, transform, viewRotation, skippedFeaturesHash);
                    }
                }
            }
        }
        context.restore();
    };
    ReplayGroupCustom.prototype.getReplayCustom = function (zIndex, replayType) {
        var zIndexKey = zIndex !== undefined ? zIndex.toString() : "0";
        var replays = this.replaysByZIndex_[zIndexKey];
        if (replays === undefined) {
            replays = {};
            this.replaysByZIndex_[zIndexKey] = replays;
        }
        var replay = replays[replayType];
        if (replay === undefined) {
            var Constructor = this.BATCH_CONSTRUCTORS_[replayType];
            replay = new Constructor(this.tolerance_, this.maxExtent_, this.resolution_, this.pixelRatio_, this.overlaps_, this.declutterTree_);
            replays[replayType] = replay;
        }
        return replay;
    };
    return ReplayGroupCustom;
}(ol.render.canvas.ReplayGroup));



/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextReplayCustom; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_textLabelingStrategy__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_detectTextLabelingStrategy__ = __webpack_require__(3);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var TextReplayCustom = /** @class */ (function (_super) {
    __extends(TextReplayCustom, _super);
    function TextReplayCustom(tolerance, maxExtent, resolution, pixelRatio, overlaps, declutterTree) {
        var _this = _super.call(this, tolerance, maxExtent, resolution, pixelRatio, overlaps, declutterTree) || this;
        _this.BATCH_CONSTRUCTORS_CUSTOM = {
            "Point": __WEBPACK_IMPORTED_MODULE_1__style_detectTextLabelingStrategy__["a" /* DetectTextLabelingStrategy */],
            "MultiPoint": __WEBPACK_IMPORTED_MODULE_0__style_textLabelingStrategy__["a" /* TextLabelingStrategy */],
            "LineString": __WEBPACK_IMPORTED_MODULE_0__style_textLabelingStrategy__["a" /* TextLabelingStrategy */],
            "Circle": __WEBPACK_IMPORTED_MODULE_0__style_textLabelingStrategy__["a" /* TextLabelingStrategy */],
            "MultiLineString": __WEBPACK_IMPORTED_MODULE_0__style_textLabelingStrategy__["a" /* TextLabelingStrategy */],
            "Polygon": __WEBPACK_IMPORTED_MODULE_0__style_textLabelingStrategy__["a" /* TextLabelingStrategy */],
            "MultiPolygon": __WEBPACK_IMPORTED_MODULE_0__style_textLabelingStrategy__["a" /* TextLabelingStrategy */]
        };
        _this.drawText = _this.drawTextCustom;
        _this.setTextStyle = _this.setTextStyleCustom;
        _this.replay_ = _this.replayCustom;
        return _this;
    }
    TextReplayCustom.prototype.replayCustom = function (context, transform, skippedFeaturesHash, instructions, featureCallback, opt_hitExtent) {
        /** @type {Array.<number>} */
        var pixelCoordinates;
        if (this.pixelCoordinates_ && ol.array.equals(transform, this.renderedTransform_)) {
            pixelCoordinates = this.pixelCoordinates_;
        }
        else {
            if (!this.pixelCoordinates_) {
                this.pixelCoordinates_ = [];
            }
            pixelCoordinates = ol.geom.flat.transform.transform2D(this.coordinates, 0, this.coordinates.length, 2, transform, this.pixelCoordinates_);
            ol.transform.setFromArray(this.renderedTransform_, transform);
        }
        var skipFeatures = !ol.obj.isEmpty(skippedFeaturesHash);
        var i = 0; // instruction index
        var ii = instructions.length; // end of instructions
        var d = 0; // data index
        var dd; // end of per-instruction data
        var anchorX, anchorY, prevX, prevY, roundX, roundY, declutterGroup, image;
        var pendingFill = 0;
        var pendingStroke = 0;
        var lastFillInstruction = null;
        var lastStrokeInstruction = null;
        var coordinateCache = this.coordinateCache_;
        var viewRotation = this.viewRotation_;
        var state = ({
            context: context,
            pixelRatio: this.pixelRatio,
            resolution: this.resolution,
            rotation: viewRotation
        });
        // When the batch size gets too big, performance decreases. 200 is a good
        // balance between batch size and number of fill/stroke instructions.
        var batchSize = this.instructions !== instructions || this.overlaps ? 0 : 200;
        while (i < ii) {
            var instruction = instructions[i];
            var type = (instruction[0]);
            var /** @type {ol.Feature|ol.render.Feature} */ feature = void 0, x = void 0, y = void 0;
            switch (type) {
                case ol.render.canvas.Instruction.BEGIN_GEOMETRY:
                    feature = /** @type {ol.Feature|ol.render.Feature} */ (instruction[1]);
                    if ((skipFeatures && skippedFeaturesHash[ol.getUid(feature).toString()]) || !feature.getGeometry()) {
                        i = /** @type {number} */ (instruction[2]);
                    }
                    else if (opt_hitExtent !== undefined && !ol.extent.intersects(opt_hitExtent, feature.getGeometry().getExtent())) {
                        i = /** @type {number} */ (instruction[2]) + 1;
                    }
                    else {
                        ++i;
                    }
                    break;
                case ol.render.canvas.Instruction.BEGIN_PATH:
                    if (pendingFill > batchSize) {
                        this.fill_(context);
                        pendingFill = 0;
                    }
                    if (pendingStroke > batchSize) {
                        context.stroke();
                        pendingStroke = 0;
                    }
                    if (!pendingFill && !pendingStroke) {
                        context.beginPath();
                        prevX = prevY = NaN;
                    }
                    ++i;
                    break;
                case ol.render.canvas.Instruction.CIRCLE:
                    d = /** @type {number} */ (instruction[1]);
                    var x1 = pixelCoordinates[d];
                    var y1 = pixelCoordinates[d + 1];
                    var x2 = pixelCoordinates[d + 2];
                    var y2 = pixelCoordinates[d + 3];
                    var dx = x2 - x1;
                    var dy = y2 - y1;
                    var r = Math.sqrt(dx * dx + dy * dy);
                    context.moveTo(x1 + r, y1);
                    context.arc(x1, y1, r, 0, 2 * Math.PI, true);
                    ++i;
                    break;
                case ol.render.canvas.Instruction.CLOSE_PATH:
                    context.closePath();
                    ++i;
                    break;
                case ol.render.canvas.Instruction.CUSTOM:
                    d = /** @type {number} */ (instruction[1]);
                    dd = instruction[2];
                    var geometry = (instruction[3]);
                    var renderer = instruction[4];
                    var fn = instruction.length === 6 ? instruction[5] : undefined;
                    state.geometry = geometry;
                    state.feature = feature;
                    if (!(i in coordinateCache)) {
                        coordinateCache[i] = [];
                    }
                    var coords = coordinateCache[i];
                    if (fn) {
                        fn(pixelCoordinates, d, dd, 2, coords);
                    }
                    else {
                        coords[0] = pixelCoordinates[d];
                        coords[1] = pixelCoordinates[d + 1];
                        coords.length = 2;
                    }
                    renderer(coords, state);
                    ++i;
                    break;
                case ol.render.canvas.Instruction.DRAW_IMAGE:
                    d = /** @type {number} */ (instruction[1]);
                    dd = /** @type {number} */ (instruction[2]);
                    image = /** @type {HTMLCanvasElement|HTMLVideoElement|Image} */ (instruction[3]);
                    // Remaining arguments in DRAW_IMAGE are in alphabetical order
                    anchorX = /** @type {number} */ (instruction[4]);
                    anchorY = /** @type {number} */ (instruction[5]);
                    declutterGroup = featureCallback ? null : /** @type {ol.DeclutterGroup} */ (instruction[6]);
                    var height = (instruction[7]);
                    var opacity = (instruction[8]);
                    var originX = (instruction[9]);
                    var originY = (instruction[10]);
                    var rotateWithView = (instruction[11]);
                    var rotation = (instruction[12]);
                    var scale = (instruction[13]);
                    var snapToPixel = (instruction[14]);
                    var width = (instruction[15]);
                    var padding = void 0, backgroundFill = void 0, backgroundStroke = void 0;
                    if (instruction.length > 16) {
                        padding = /** @type {Array.<number>} */ (instruction[16]);
                        backgroundFill = /** @type {boolean} */ (instruction[17]);
                        backgroundStroke = /** @type {boolean} */ (instruction[18]);
                    }
                    else {
                        padding = ol.render.canvas.defaultPadding;
                        backgroundFill = backgroundStroke = false;
                    }
                    if (rotateWithView) {
                        rotation += viewRotation;
                    }
                    for (; d < dd; d += 2) {
                        this.replayImage_(context, pixelCoordinates[d], pixelCoordinates[d + 1], image, anchorX, anchorY, declutterGroup, height, opacity, originX, originY, rotation, scale, snapToPixel, width, padding, backgroundFill ? /** @type {Array.<*>} */ (lastFillInstruction) : null, backgroundStroke ? /** @type {Array.<*>} */ (lastStrokeInstruction) : null);
                    }
                    this.renderDeclutter_(declutterGroup, feature);
                    ++i;
                    break;
                case ol.render.canvas.Instruction.DRAW_CHARS:
                    var begin = (instruction[1]);
                    var end = (instruction[2]);
                    var baseline = (instruction[3]);
                    declutterGroup = featureCallback ? null : /** @type {ol.DeclutterGroup} */ (instruction[4]);
                    var overflow = (instruction[5]);
                    var fillKey = (instruction[6]);
                    var maxAngle = (instruction[7]);
                    var measure = (instruction[8]);
                    var offsetY = (instruction[9]);
                    var strokeKey = (instruction[10]);
                    var strokeWidth = (instruction[11]);
                    var text = (instruction[12]);
                    var textKey = (instruction[13]);
                    var textScale = (instruction[14]);
                    var pathLength = ol.geom.flat.length.lineString(pixelCoordinates, begin, end, 2);
                    var textLength = measure(text);
                    if (overflow || textLength <= pathLength) {
                        if (this.resolution < 0.2) {
                            var tmpLength = pathLength - textLength;
                            var tmpStart = 200 * window.devicePixelRatio;
                            var tmpDist = 600 * window.devicePixelRatio;
                            for (var len = tmpStart; len < tmpLength; len += tmpDist) {
                                var startM = len;
                                var parts = ol.geom.flat.textpath.lineString(pixelCoordinates, begin, end, 2, text, measure, startM, maxAngle);
                                if (parts) {
                                    var c = void 0, cc = void 0, chars = void 0, label = void 0, part = void 0;
                                    if (strokeKey) {
                                        for (c = 0, cc = parts.length; c < cc; ++c) {
                                            part = parts[c]; // x, y, anchorX, rotation, chunk
                                            chars = /** @type {string} */ (part[4]);
                                            label = /** @type {ol.render.canvas.TextReplay} */ (this).getImage(chars, textKey, "", strokeKey);
                                            anchorX = /** @type {number} */ (part[2]) + strokeWidth;
                                            anchorY = baseline * label.height + (0.5 - baseline) * 2 * strokeWidth - offsetY;
                                            this.replayImage_(context, /** @type {number} */ (part[0]), /** @type {number} */ (part[1]), label, anchorX, anchorY, declutterGroup, label.height, 1, 0, 0, /** @type {number} */ (part[3]), textScale, false, label.width, ol.render.canvas.defaultPadding, null, null);
                                        }
                                    }
                                    if (fillKey) {
                                        for (c = 0, cc = parts.length; c < cc; ++c) {
                                            part = parts[c]; // x, y, anchorX, rotation, chunk
                                            chars = /** @type {string} */ (part[4]);
                                            label = /** @type {ol.render.canvas.TextReplay} */ (this).getImage(chars, textKey, fillKey, "");
                                            anchorX = /** @type {number} */ (part[2]);
                                            anchorY = baseline * label.height - offsetY;
                                            this.replayImage_(context, /** @type {number} */ (part[0]), /** @type {number} */ (part[1]), label, anchorX, anchorY, declutterGroup, label.height, 1, 0, 0, /** @type {number} */ (part[3]), textScale, false, label.width, ol.render.canvas.defaultPadding, null, null);
                                        }
                                    }
                                }
                            }
                        }
                        else {
                            var textAlign = (this).textStates[textKey].textAlign;
                            var startM = (pathLength - textLength) * ol.render.replay.TEXT_ALIGN[textAlign];
                            var parts = ol.geom.flat.textpath.lineString(pixelCoordinates, begin, end, 2, text, measure, startM, maxAngle);
                            if (parts) {
                                var c = void 0, cc = void 0, chars = void 0, label = void 0, part = void 0;
                                if (strokeKey) {
                                    for (c = 0, cc = parts.length; c < cc; ++c) {
                                        part = parts[c]; // x, y, anchorX, rotation, chunk
                                        chars = /** @type {string} */ (part[4]);
                                        label = /** @type {ol.render.canvas.TextReplay} */ (this).getImage(chars, textKey, "", strokeKey);
                                        anchorX = /** @type {number} */ (part[2]) + strokeWidth;
                                        anchorY = baseline * label.height + (0.5 - baseline) * 2 * strokeWidth - offsetY;
                                        this.replayImage_(context, /** @type {number} */ (part[0]), /** @type {number} */ (part[1]), label, anchorX, anchorY, declutterGroup, label.height, 1, 0, 0, /** @type {number} */ (part[3]), textScale, false, label.width, ol.render.canvas.defaultPadding, null, null);
                                    }
                                }
                                if (fillKey) {
                                    for (c = 0, cc = parts.length; c < cc; ++c) {
                                        part = parts[c]; // x, y, anchorX, rotation, chunk
                                        chars = /** @type {string} */ (part[4]);
                                        label = /** @type {ol.render.canvas.TextReplay} */ (this).getImage(chars, textKey, fillKey, "");
                                        anchorX = /** @type {number} */ (part[2]);
                                        anchorY = baseline * label.height - offsetY;
                                        this.replayImage_(context, /** @type {number} */ (part[0]), /** @type {number} */ (part[1]), label, anchorX, anchorY, declutterGroup, label.height, 1, 0, 0, /** @type {number} */ (part[3]), textScale, false, label.width, ol.render.canvas.defaultPadding, null, null);
                                    }
                                }
                            }
                        }
                    }
                    this.renderDeclutter_(declutterGroup, feature);
                    ++i;
                    break;
                case ol.render.canvas.Instruction.END_GEOMETRY:
                    if (featureCallback !== undefined) {
                        feature = /** @type {ol.Feature|ol.render.Feature} */ (instruction[1]);
                        var result = featureCallback(feature);
                        if (result) {
                            return result;
                        }
                    }
                    ++i;
                    break;
                case ol.render.canvas.Instruction.FILL:
                    if (batchSize) {
                        pendingFill++;
                    }
                    else {
                        this.fill_(context);
                    }
                    ++i;
                    break;
                case ol.render.canvas.Instruction.MOVE_TO_LINE_TO:
                    d = /** @type {number} */ (instruction[1]);
                    dd = /** @type {number} */ (instruction[2]);
                    x = pixelCoordinates[d];
                    y = pixelCoordinates[d + 1];
                    roundX = (x + 0.5) | 0;
                    roundY = (y + 0.5) | 0;
                    if (roundX !== prevX || roundY !== prevY) {
                        context.moveTo(x, y);
                        prevX = roundX;
                        prevY = roundY;
                    }
                    for (d += 2; d < dd; d += 2) {
                        x = pixelCoordinates[d];
                        y = pixelCoordinates[d + 1];
                        roundX = (x + 0.5) | 0;
                        roundY = (y + 0.5) | 0;
                        if (d === dd - 2 || roundX !== prevX || roundY !== prevY) {
                            context.lineTo(x, y);
                            prevX = roundX;
                            prevY = roundY;
                        }
                    }
                    ++i;
                    break;
                case ol.render.canvas.Instruction.SET_FILL_STYLE:
                    lastFillInstruction = instruction;
                    this.fillOrigin_ = instruction[2];
                    if (pendingFill) {
                        this.fill_(context);
                        pendingFill = 0;
                        if (pendingStroke) {
                            context.stroke();
                            pendingStroke = 0;
                        }
                    }
                    context.fillStyle = /** @type {ol.ColorLike} */ (instruction[1]);
                    ++i;
                    break;
                case ol.render.canvas.Instruction.SET_STROKE_STYLE:
                    lastStrokeInstruction = instruction;
                    if (pendingStroke) {
                        context.stroke();
                        pendingStroke = 0;
                    }
                    this.setStrokeStyle_(context, /** @type {Array.<*>} */ (instruction));
                    ++i;
                    break;
                case ol.render.canvas.Instruction.STROKE:
                    if (batchSize) {
                        pendingStroke++;
                    }
                    else {
                        context.stroke();
                    }
                    ++i;
                    break;
                default:
                    ++i; // consume the instruction anyway, to avoid an infinite loop
                    break;
            }
        }
        if (pendingFill) {
            this.fill_(context);
        }
        if (pendingStroke) {
            context.stroke();
        }
        return undefined;
    };
    TextReplayCustom.prototype.setTextStyleCustom = function (textStyle, declutterGroup) {
        var textState, fillState, strokeState;
        if (!textStyle) {
            this.text_ = "";
        }
        else {
            this.declutterGroup_ = /** @type {ol.DeclutterGroup} */ (declutterGroup);
            var textFillStyle = textStyle.getFill();
            if (!textFillStyle) {
                fillState = this.textFillState_ = null;
            }
            else {
                fillState = this.textFillState_;
                if (!fillState) {
                    fillState = this.textFillState_ = /** @type {ol.CanvasFillState} */ ({});
                }
                fillState.fillStyle = ol.colorlike.asColorLike(textFillStyle.getColor() || ol.render.canvas.defaultFillStyle);
            }
            var textStrokeStyle = textStyle.getStroke();
            if (!textStrokeStyle) {
                strokeState = this.textStrokeState_ = null;
            }
            else {
                strokeState = this.textStrokeState_;
                if (!strokeState) {
                    strokeState = this.textStrokeState_ = /** @type {ol.CanvasStrokeState} */ ({});
                }
                var lineDash = textStrokeStyle.getLineDash();
                var lineDashOffset = textStrokeStyle.getLineDashOffset();
                var lineWidth = textStrokeStyle.getWidth();
                var miterLimit = textStrokeStyle.getMiterLimit();
                strokeState.lineCap = textStrokeStyle.getLineCap() || ol.render.canvas.defaultLineCap;
                strokeState.lineDash = lineDash ? lineDash.slice() : ol.render.canvas.defaultLineDash;
                strokeState.lineDashOffset =
                    lineDashOffset === undefined ? ol.render.canvas.defaultLineDashOffset : lineDashOffset;
                strokeState.lineJoin = textStrokeStyle.getLineJoin() || ol.render.canvas.defaultLineJoin;
                strokeState.lineWidth =
                    lineWidth === undefined ? ol.render.canvas.defaultLineWidth : lineWidth;
                strokeState.miterLimit =
                    miterLimit === undefined ? ol.render.canvas.defaultMiterLimit : miterLimit;
                strokeState.strokeStyle = ol.colorlike.asColorLike(textStrokeStyle.getColor() || ol.render.canvas.defaultStrokeStyle);
            }
            textState = this.textState_;
            var font = textStyle.getFont() || ol.render.canvas.defaultFont;
            ol.render.canvas.checkFont(font);
            var textScale = textStyle.getScale();
            textState.overflow = textStyle.getOverflow();
            textState.font = font;
            textState.maxAngle = textStyle.getMaxAngle();
            textState.placement = textStyle.getPlacement();
            textState.textAlign = textStyle.getTextAlign();
            textState.textBaseline = textStyle.getTextBaseline() || ol.render.canvas.defaultTextBaseline;
            textState.backgroundFill = textStyle.getBackgroundFill();
            textState.backgroundStroke = textStyle.getBackgroundStroke();
            textState.padding = textStyle.getPadding() || ol.render.canvas.defaultPadding;
            textState.scale = textScale === undefined ? 1 : textScale;
            var textOffsetX = textStyle.getOffsetX();
            var textOffsetY = textStyle.getOffsetY();
            var textRotateWithView = textStyle.getRotateWithView();
            var textRotation = textStyle.getRotation();
            this.text_ = textStyle.getText() || "";
            this.textOffsetX_ = textOffsetX === undefined ? 0 : textOffsetX;
            this.textOffsetY_ = textOffsetY === undefined ? 0 : textOffsetY;
            this.textRotateWithView_ = textRotateWithView === undefined ? false : textRotateWithView;
            this.textRotation_ = textRotation === undefined ? 0 : textRotation;
            this.strokeKey_ = strokeState ? (typeof strokeState.strokeStyle === "string" ? strokeState.strokeStyle : ol.index.getUid(strokeState.strokeStyle)) + strokeState.lineCap + strokeState.lineDashOffset + "|" + strokeState.lineWidth + strokeState.lineJoin + strokeState.miterLimit + "[" + strokeState.lineDash.join() + "]" : "";
            this.textKey_ = textState.font + textState.scale + (textState.textAlign || "?");
            this.fillKey_ = fillState ? (typeof fillState.fillStyle === "string" ? fillState.fillStyle : ("|" + ol.index.getUid(fillState.fillStyle))) : "";
            this.label = textStyle.label;
            this.labelPosition = textStyle.labelPosition;
        }
    };
    TextReplayCustom.prototype.drawTextCustom = function (geometry, feature) {
        var fillState = this.textFillState_;
        var strokeState = this.textStrokeState_;
        var textState = this.textState_;
        var geometryType = geometry.getType();
        if (this.text_ === "" || !textState || (!fillState && !strokeState)) {
            return;
        }
        if (this.labelPosition === undefined) {
            return;
        }
        if ((geometryType === ol.geom.GeometryType.LINE_STRING || geometryType === ol.geom.GeometryType.MULTI_LINE_STRING) && !this.label) {
            var begin_1 = this.coordinates.length;
            var geometryType_1 = geometry.getType();
            var flatCoordinates_1 = this.labelPosition;
            var end_1 = 2;
            var stride_1 = 2;
            var i = void 0, ii = void 0;
            // if (!ol.extent.intersects(this.getBufferedMaxExtent(), geometry.getExtent())) {
            //     return;
            // }
            var ends = void 0;
            // flatCoordinates = geometry.getFlatCoordinates();
            stride_1 = geometry.getStride();
            if (geometryType_1 === ol.geom.GeometryType.LINE_STRING) {
                ends = [flatCoordinates_1.length];
            }
            else if (geometryType_1 === ol.geom.GeometryType.MULTI_LINE_STRING) {
                ends = geometry.getEnds();
            }
            else if (geometryType_1 === ol.geom.GeometryType.POLYGON) {
                ends = geometry.getEnds().slice(0, 1);
            }
            else if (geometryType_1 === ol.geom.GeometryType.MULTI_POLYGON) {
                var endss = geometry.getEndss();
                ends = [];
                for (i = 0, ii = endss.length; i < ii; ++i) {
                    ends.push(endss[i][0]);
                }
            }
            this.beginGeometry(geometry, feature);
            var textAlign = textState.textAlign;
            var flatOffset = 0;
            var flatEnd = void 0;
            for (var o = 0, oo = ends.length; o < oo; ++o) {
                if (textAlign === undefined) {
                    var range = ol.geom.flat.straightchunk.lineString(textState.maxAngle, flatCoordinates_1, flatOffset, ends[o], stride_1);
                    flatOffset = range[0];
                    flatEnd = range[1];
                }
                else {
                    flatEnd = ends[o];
                }
                for (i = flatOffset; i < flatEnd; i += stride_1) {
                    this.coordinates.push(flatCoordinates_1[i], flatCoordinates_1[i + 1]);
                }
                end_1 = this.coordinates.length;
                flatOffset = ends[o];
                this.drawChars_(begin_1, end_1, this.declutterGroup_);
                begin_1 = end_1;
            }
            this.endGeometry(geometry, feature);
            return;
        }
        // if (this.label === undefined) { return; }
        var begin = this.coordinates.length;
        var flatCoordinates = this.labelPosition;
        var end = 2;
        var stride = 2;
        var label = this.label;
        if (geometry.getType() === ol.geom.GeometryType.POLYGON) {
            stride = 3;
        }
        // let begin = this.coordinates.length;
        // let geometryType = geometry.getType();
        // let flatCoordinates = null;
        // let end = 2;
        // let stride = 2;
        // let i, ii;
        // if (textState.placement === (<any>ol.style).TextPlacement.LINE) {
        //     if (!ol.extent.intersects(this.getBufferedMaxExtent(), geometry.getExtent())) {
        //         return;
        //     }
        //     let ends;
        //     flatCoordinates = geometry.getFlatCoordinates();
        //     stride = geometry.getStride();
        //     if (geometryType === (<any>ol.geom).GeometryType.LINE_STRING) {
        //         ends = [flatCoordinates.length];
        //     } else if (geometryType === (<any>ol.geom).GeometryType.MULTI_LINE_STRING) {
        //         ends = geometry.getEnds();
        //     } else if (geometryType === (<any>ol.geom).GeometryType.POLYGON) {
        //         ends = geometry.getEnds().slice(0, 1);
        //     } else if (geometryType === (<any>ol.geom).GeometryType.MULTI_POLYGON) {
        //         let endss = geometry.getEndss();
        //         ends = [];
        //         for (i = 0, ii = endss.length; i < ii; ++i) {
        //             ends.push(endss[i][0]);
        //         }
        //     }
        //     this.beginGeometry(geometry, feature);
        //     let textAlign = textState.textAlign;
        //     let flatOffset = 0;
        //     let flatEnd;
        //     for (let o = 0, oo = ends.length; o < oo; ++o) {
        //         if (textAlign === undefined) {
        //             let range = (<any>ol.geom).flat.straightchunk.lineString(
        //                 textState.maxAngle, flatCoordinates, flatOffset, ends[o], stride);
        //             flatOffset = range[0];
        //             flatEnd = range[1];
        //         } else {
        //             flatEnd = ends[o];
        //         }
        //         for (i = flatOffset; i < flatEnd; i += stride) {
        //             this.coordinates.push(flatCoordinates[i], flatCoordinates[i + 1]);
        //         }
        //         end = this.coordinates.length;
        //         flatOffset = ends[o];
        //         this.drawChars_(begin, end, this.declutterGroup_);
        //         begin = end;
        //     }
        //     this.endGeometry(geometry, feature);
        // } else {
        //     let label = this.getImage(this.text_, this.textKey_, this.fillKey_, this.strokeKey_);
        //     let width = label.width / this.pixelRatio;
        //     let Constructor = this.BATCH_CONSTRUCTORS_CUSTOM[geometryType];
        //     let textLabelingStrategy = new Constructor();
        //     switch (geometryType) {
        //         case (<any>ol.geom).GeometryType.POINT:
        //         case (<any>ol.geom).GeometryType.MULTI_POINT:
        //             flatCoordinates = geometry.getFlatCoordinates();
        //             end = flatCoordinates.length;
        //             break;
        //         case (<any>ol.geom).GeometryType.LINE_STRING:
        //             flatCoordinates = /** @type {ol.geom.LineString} */ (geometry).getFlatMidpoint();
        //             if (!textLabelingStrategy.MarkLocation(flatCoordinates, label, this.resolution)) {
        //                 return;
        //             }
        //             break;
        //         case (<any>ol.geom).GeometryType.CIRCLE:
        //             flatCoordinates = /** @type {ol.geom.Circle} */ (geometry).getCenter();
        //             break;
        //         case (<any>ol.geom).GeometryType.MULTI_LINE_STRING:
        //             flatCoordinates = /** @type {ol.geom.MultiLineString} */ (geometry).getFlatMidpoints();
        //             end = flatCoordinates.length;
        //             break;
        //         case (<any>ol.geom).GeometryType.POLYGON:
        //             flatCoordinates = /** @type {ol.geom.Polygon} */ (geometry).getFlatInteriorPoint();
        //             if (!textState.overflow && flatCoordinates[2] / this.resolution < width) {
        //                 return;
        //             }
        //             // if (!textLabelingStrategy.MarkLocation(flatCoordinates, label, this.resolution)) {
        //             //     return;
        //             // }
        //             stride = 3;
        //             break;
        //         case (<any>ol.geom).GeometryType.MULTI_POLYGON:
        //             let interiorPoints = /** @type {ol.geom.MultiPolygon} */ (geometry).getFlatInteriorPoints();
        //             flatCoordinates = [];
        //             for (i = 0, ii = interiorPoints.length; i < ii; i += 3) {
        //                 if (textState.overflow || interiorPoints[i + 2] / this.resolution >= width) {
        //                     flatCoordinates.push(interiorPoints[i], interiorPoints[i + 1]);
        //                 }
        //             }
        //             end = flatCoordinates.length;
        //             if (end === 0) {
        //                 return;
        //             }
        //             break;
        //         default:
        //     }
        end = this.appendFlatCoordinates(flatCoordinates, 0, end, stride, false, false);
        this.beginGeometry(geometry, feature);
        if (textState.backgroundFill || textState.backgroundStroke) {
            this.setFillStrokeStyle(textState.backgroundFill, textState.backgroundStroke);
            this.updateFillStyle(this.state, this.applyFill, geometry);
            this.updateStrokeStyle(this.state, this.applyStroke);
        }
        this.drawTextImage_(label, begin, end);
        this.endGeometry(geometry, feature);
        // }
    };
    return TextReplayCustom;
}(ol.render.canvas.TextReplay));



/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorldStreetVectorTileLayer; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var WorldStreetVectorTileLayer = /** @class */ (function (_super) {
    __extends(WorldStreetVectorTileLayer, _super);
    function WorldStreetVectorTileLayer(opt_options) {
        var _this = _super.call(this, opt_options) || this;
        _this.type = ol.LayerType.MAPSUITE_VECTORTILE;
        return _this;
    }
    return WorldStreetVectorTileLayer;
}(ol.layer.VectorTile));



/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Util; });
var Util = /** @class */ (function () {
    function Util() {
    }
    Util.isStyleJsonUrl = function (styleJson) {
        var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
        return typeof styleJson === "string" && regexp.test(styleJson);
    };
    return Util;
}());



/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeoTileQueue; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GeoTileQueue = /** @class */ (function (_super) {
    __extends(GeoTileQueue, _super);
    function GeoTileQueue(tilePriorityFunction, tileChangeCallback) {
        var _this = _super.call(this, tilePriorityFunction, tileChangeCallback) || this;
        _this.loadMoreTiles = _this.loadMoreTilesCustom;
        return _this;
    }
    GeoTileQueue.prototype.loadMoreTilesCustom = function (maxTotalLoading, maxNewLoads) {
        var newLoads = 0;
        var abortedTiles = false;
        var state, tile, tileKey;
        while (this.tilesLoading_ < maxTotalLoading && newLoads < maxNewLoads &&
            this.getCount() > 0) {
            tile = /** @type {ol.Tile} */ (this.dequeue()[0]);
            tileKey = tile.getKey();
            state = tile.getState();
            if (state === ol.TileState.ABORT) {
                abortedTiles = true;
            }
            else if (state === ol.TileState.IDLE && !(tileKey in this.tilesLoadingKeys_)) {
                this.tilesLoadingKeys_[tileKey] = tile;
                ++this.tilesLoading_;
                ++newLoads;
                tile.load();
            }
        }
        if (newLoads === 0 && abortedTiles) {
            // Do not stop the render loop when all wanted tiles were aborted due to
            // a small, saturated tile cache.
            this.tileChangeCallback_();
        }
    };
    return GeoTileQueue;
}(ol.TileQueue));



/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjk5NjZhMTBkNGI2ZWE3OGVkNTMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlL2dlb1N0eWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS90ZXh0TGFiZWxpbmdTdHJhdGVneS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZmlsdGVyL2dlb0ZpbHRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUvZGV0ZWN0VGV4dExhYmVsaW5nU3RyYXRlZ3kudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpbHRlci9nZW9SYW5nZUZpbHRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvTWFwLnRzIiwid2VicGFjazovLy8uL3NyYy9zb3VyY2UvZ2VvVmVjdG9yVGlsZVNvdXJjZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvVmVjdG9yVGlsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZm9ybWF0L2dlb012dC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVKc29uQ2FjaGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlSnNvbkNhY2hlSXRlbS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZmlsdGVyL2dlb0ZpbHRlckl0ZW0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpbHRlci9nZW9ab29tRmlsdGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9maWx0ZXIvZ2VvU3RyaW5nQXR0cmlidXRlRmlsdGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9maWx0ZXIvZ2VvUmVnZXhGaWx0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpbHRlci9nZW9OdW1iZXJBdHRyaWJ1dGVGaWx0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlL2dlb0FyZWFTdHlsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUvZ2VvQnJ1c2gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlL2dlb0xpbmVTdHlsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUvZ2VvUG9pbnRTdHlsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUvZ2VvVGV4dFN0eWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS9nZW9TaGllbGRTdHlsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHJlZS90cmVlLnRzIiwid2VicGFjazovLy8uL3NyYy90cmVlL1RyZWVOb2RlLnRzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvZ2VvVmVjdG9yVGlsZWxheWVyUmVuZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS9ncmlkLnRzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvcmVwbGF5R3JvdXBDdXN0b20udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci90ZXh0UmVwbGF5Q3VzdG9tLnRzIiwid2VicGFjazovLy8uL3NyYy9sYXllci93b3JsZFN0cmVldFZlY3RvclRpbGVsYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvVGlsZVF1ZXVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM3REE7QUFBQTtJQU9JLGtCQUFZLFNBQWtCO1FBQzFCLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDWixJQUFJLENBQUMsRUFBRSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3BGLENBQUM7SUFDTCxDQUFDO0lBRUQsNkJBQVUsR0FBVjtRQUNJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQzVCLENBQUM7SUFDTCxDQUFDO0lBRUQsaUNBQWMsR0FBZDtJQUNBLENBQUM7SUFFRCw0QkFBUyxHQUFULFVBQVUsT0FBbUIsRUFBRSxVQUFrQixFQUFFLE9BQVk7UUFDM0QsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2YsT0FBTyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ25FLENBQUM7UUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFFRCxvQ0FBaUIsR0FBakIsVUFBa0IsT0FBbUIsRUFBRSxVQUFrQixFQUFFLE9BQVk7UUFDbkUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRUQsd0NBQXFCLEdBQXJCLFVBQXNCLE9BQW1CLEVBQUUsVUFBa0IsRUFBRSxPQUFZO1FBQ3ZFLE1BQU0sQ0FBQyxFQUFFLENBQUM7SUFDZCxDQUFDO0lBRUQsK0JBQVksR0FBWixVQUFhLFFBQWEsRUFBRSxJQUFZLEVBQUUsSUFBWTtRQUNsRCxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUV2RCxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUMxRCxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3hDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3RELElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3RELFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ2pDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUN6QyxDQUFDO0lBQ0wsQ0FBQztJQUVELHdCQUFLLEdBQUwsVUFBTSxDQUFTLEVBQUUsQ0FBUyxFQUFFLEVBQVUsRUFBRSxFQUFVLEVBQUUsSUFBWTtRQUM1RCxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFWCxFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FB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QUMsVUFBVSxDQUFDO3dCQUNoQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO3dCQUMxQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3RELENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7d0JBQzFCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7cUJBQzdCLENBQUMsQ0FBQztvQkFDSCxLQUFLLENBQUM7WUFDZCxDQUFDO1lBQ0QsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNyQixVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQ3RDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUM7Z0JBQzdDLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ0osVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDckMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsY0FBYyxDQUFDLENBQUM7Z0JBQzVDLENBQUM7WUFDTCxDQUFDO1lBQUMsSUFBSSxDQUFDLEVB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QUMsQ0FBQztnQkFDcEYsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQztnQkFDdkMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDO2dCQUNyQixFQUFFLFFBQVEsQ0FBQztnQkFDWCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDaEIsQ0FBQztRQUNMLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxRQUFRLEtBQUssQ0FBQyxJQUFJLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDakMsd0VBQXdFO1lBQ3hFLGlDQUFpQztZQUNqQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUMvQixDQUFDO0lBQ0wsQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0FBQyxDQTlCd0MsRUFBRyxDQUFDLFNBQXlFLEdBOEJySCIsImZpbGUiOiJvbC5tYXBzdWl0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGY5OTY2YTEwZDRiNmVhNzhlZDUzIiwiZXhwb3J0IGNsYXNzIEdlb1N0eWxlIHtcclxuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xyXG4gICAgcHVibGljIHZpc2libGU6IHRydWU7XHJcbiAgICBwdWJsaWMgc3R5bGVzOiBhbnlbXTtcclxuXHJcbiAgICBwdWJsaWMgaW5pdGlhbGl6ZWQ6IGJvb2xlYW47XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc3R5bGVKc29uPzogb2JqZWN0KSB7XHJcbiAgICAgICAgdGhpcy5zdHlsZXMgPSBbXTtcclxuICAgICAgICBpZiAoc3R5bGVKc29uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaWQgPSBzdHlsZUpzb25bXCJpZFwiXTtcclxuICAgICAgICAgICAgdGhpcy52aXNpYmxlID0gc3R5bGVKc29uW1widmlzaWJsZVwiXSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IHN0eWxlSnNvbltcInZpc2libGVcIl07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluaXRpYWxpemUoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmluaXRpYWxpemVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZUNvcmUoKTtcclxuICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluaXRpYWxpemVDb3JlKCkge1xyXG4gICAgfVxyXG5cclxuICAgIGdldFN0eWxlcyhmZWF0dXJlOiBvbC5GZWF0dXJlLCByZXNvbHV0aW9uOiBudW1iZXIsIG9wdGlvbnM6IGFueSk6IG9sLnN0eWxlLlN0eWxlW10ge1xyXG4gICAgICAgIGxldCByZXN1bHRzID0gW107XHJcbiAgICAgICAgaWYgKHRoaXMudmlzaWJsZSkge1xyXG4gICAgICAgICAgICByZXN1bHRzID0gdGhpcy5nZXRDb252ZXJ0ZWRTdHlsZShmZWF0dXJlLCByZXNvbHV0aW9uLCBvcHRpb25zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q29udmVydGVkU3R5bGUoZmVhdHVyZTogb2wuRmVhdHVyZSwgcmVzb2x1dGlvbjogbnVtYmVyLCBvcHRpb25zOiBhbnkpOiBvbC5zdHlsZS5TdHlsZVtdIHtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRDb252ZXJ0ZWRTdHlsZUNvcmUoZmVhdHVyZSwgcmVzb2x1dGlvbiwgb3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q29udmVydGVkU3R5bGVDb3JlKGZlYXR1cmU6IG9sLkZlYXR1cmUsIHJlc29sdXRpb246IG51bWJlciwgb3B0aW9uczogYW55KTogb2wuc3R5bGUuU3R5bGVbXSB7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHNrZXdHZW9tZXRyeShnZW9tZXRyeTogYW55LCB4RGVnOiBudW1iZXIsIHlEZWc6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBjZW50ZXIgPSBvbC5leHRlbnQuZ2V0Q2VudGVyKGdlb21ldHJ5LmdldEV4dGVudCgpKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnZW9tZXRyeS5mbGF0Q29vcmRpbmF0ZXMubGVuZ3RoOyBpICs9IDIpIHtcclxuICAgICAgICAgICAgbGV0IHggPSBnZW9tZXRyeS5mbGF0Q29vcmRpbmF0ZXNbaV07XHJcbiAgICAgICAgICAgIGxldCB5ID0gZ2VvbWV0cnkuZmxhdENvb3JkaW5hdGVzW2kgKyAxXTtcclxuICAgICAgICAgICAgbGV0IHJ4ID0gdGhpcy5za2V3WCh4LCB5LCBjZW50ZXJbMF0sIGNlbnRlclsxXSwgeERlZyk7XHJcbiAgICAgICAgICAgIGxldCByeSA9IHRoaXMuc2tld1koeCwgeSwgY2VudGVyWzBdLCBjZW50ZXJbMV0sIHlEZWcpO1xyXG4gICAgICAgICAgICBnZW9tZXRyeS5mbGF0Q29vcmRpbmF0ZXNbaV0gPSByeDtcclxuICAgICAgICAgICAgZ2VvbWV0cnkuZmxhdENvb3JkaW5hdGVzW2kgKyAxXSA9IHJ5O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBza2V3WCh4OiBudW1iZXIsIHk6IG51bWJlciwgY3g6IG51bWJlciwgY3k6IG51bWJlciwgeERlZzogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgcnggPSB4O1xyXG5cclxuICAgICAgICBpZiAoeERlZyAhPT0gMCkge1xyXG4gICAgICAgICAgICBsZXQgeFJlc29sdXRpb24gPSBNYXRoLnRhbigxLjAgKiB4RGVnICogTWF0aC5QSSAvIDE4MCk7XHJcbiAgICAgICAgICAgIGxldCBkaXN0YW5jZTtcclxuXHJcbiAgICAgICAgICAgIGlmICh4ID4gY3gpIHtcclxuICAgICAgICAgICAgICAgIGlmICh5ID4gY3kpIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IHhSZXNvbHV0aW9uICogTWF0aC5hYnMoeSAtIGN5KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2UgPSAwIC0geFJlc29sdXRpb24gKiBNYXRoLmFicyh5IC0gY3kpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHkgPiBjeSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlID0geFJlc29sdXRpb24gKiBNYXRoLmFicyh5IC0gY3kpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IDAgLSB4UmVzb2x1dGlvbiAqIE1hdGguYWJzKHkgLSBjeSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJ4ICs9IE1hdGgucm91bmQoZGlzdGFuY2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJ4O1xyXG4gICAgfVxyXG5cclxuICAgIHNrZXdZKHg6IG51bWJlciwgeTogbnVtYmVyLCBjeDogbnVtYmVyLCBjeTogbnVtYmVyLCB5RGVnOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCByeSA9IHk7XHJcblxyXG4gICAgICAgIGlmICh5RGVnICE9PSAwKSB7XHJcbiAgICAgICAgICAgIGxldCB5UmVzb2x1dGlvbiA9IE1hdGgudGFuKDEuMCAqIHlEZWcgKiBNYXRoLlBJIC8gMTgwKTtcclxuICAgICAgICAgICAgbGV0IGRpc3RhbmNlO1xyXG5cclxuICAgICAgICAgICAgaWYgKHkgPiBjeSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHggPiBjeCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlID0geVJlc29sdXRpb24gKiBNYXRoLmFicyh4IC0gY3gpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IDAgLSB5UmVzb2x1dGlvbiAqIE1hdGguYWJzKHggLSBjeCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoeCA+IGN4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2UgPSB5UmVzb2x1dGlvbiAqIE1hdGguYWJzKHggLSBjeCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gMCAtIHlSZXNvbHV0aW9uICogTWF0aC5hYnMoeCAtIGN4KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcnkgKz0gTWF0aC5yb3VuZChkaXN0YW5jZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcnk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHRvUkdCQUNvbG9yKGNvbG9yLCBvcGFjaXR5ID0gMSk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKGNvbG9yLnN0YXJ0c1dpdGgoXCIjXCIpKSB7XHJcbiAgICAgICAgICAgIGxldCBhcnJheTogbnVtYmVyW107XHJcbiAgICAgICAgICAgIGxldCByOiBudW1iZXI7XHJcbiAgICAgICAgICAgIGxldCBnOiBudW1iZXI7XHJcbiAgICAgICAgICAgIGxldCBiOiBudW1iZXI7XHJcbiAgICAgICAgICAgIGxldCBhOiBudW1iZXI7XHJcbiAgICAgICAgICAgIGlmIChjb2xvci5sZW5ndGggPT09IDQpIHtcclxuICAgICAgICAgICAgICAgIHIgPSArKFwiMHhcIiArIGNvbG9yLnN1YnN0cigxLCAxKSArIGNvbG9yLnN1YnN0cigxLCAxKSk7XHJcbiAgICAgICAgICAgICAgICBnID0gKyhcIjB4XCIgKyBjb2xvci5zdWJzdHIoMiwgMSkgKyBjb2xvci5zdWJzdHIoMiwgMSkpO1xyXG4gICAgICAgICAgICAgICAgYiA9ICsoXCIweFwiICsgY29sb3Iuc3Vic3RyKDMsIDEpICsgY29sb3Iuc3Vic3RyKDMsIDEpKTtcclxuICAgICAgICAgICAgICAgIGEgPSBvcGFjaXR5O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgciA9ICsoXCIweFwiICsgY29sb3Iuc3Vic3RyKDEsIDIpKTtcclxuICAgICAgICAgICAgICAgIGcgPSArKFwiMHhcIiArIGNvbG9yLnN1YnN0cigzLCAyKSk7XHJcbiAgICAgICAgICAgICAgICBiID0gKyhcIjB4XCIgKyBjb2xvci5zdWJzdHIoNSwgMikpO1xyXG4gICAgICAgICAgICAgICAgYSA9IG9wYWNpdHk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYXJyYXkgPSBbciwgZywgYiwgYV07XHJcbiAgICAgICAgICAgIGlmICghTnVtYmVyLmlzTmFOKHIpICYmICFOdW1iZXIuaXNOYU4oZykgJiYgIU51bWJlci5pc05hTihiKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwicmdiYShcIiArIGFycmF5LmpvaW4oXCIsXCIpICsgXCIpXCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJyZ2JhKDAsMCwwLDApXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbG9yLnN0YXJ0c1dpdGgoXCJyZ2IoXCIpKSB7XHJcbiAgICAgICAgICAgIGNvbG9yID0gY29sb3IucmVwbGFjZShcInJnYihcIiwgXCJyZ2JhKFwiKTtcclxuICAgICAgICAgICAgY29sb3IgPSBjb2xvci5zdWJzdHJpbmcoMCwgY29sb3IubGVuZ3RoIC0gMSkgKyBcIixcIiArIG9wYWNpdHkgKyBcIilcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbG9yLnN0YXJ0c1dpdGgoXCJhcmdiKFwiKSkge1xyXG4gICAgICAgICAgICBjb2xvciA9IGNvbG9yLnJlcGxhY2UoXCJhcmdiKFwiLCBcIlwiKS5yZXBsYWNlKFwiKVwiLCBcIlwiKTtcclxuICAgICAgICAgICAgbGV0IGFycmF5ID0gY29sb3Iuc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgICAgICBsZXQgYSA9IGFycmF5LnNoaWZ0KCk7XHJcbiAgICAgICAgICAgIGFycmF5LnB1c2goYSk7XHJcbiAgICAgICAgICAgIGNvbG9yID0gXCJyZ2JhKFwiICsgYXJyYXkuam9pbihcIixcIikgKyBcIilcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdG9PTExpbmVhckdyYWRpZW50KGNvbG9yLCBvcGFjaXR5ID0gMSwgc2l6ZSkge1xyXG4gICAgICAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG4gICAgICAgIGxldCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgICAgICBjb250ZXh0LnJlY3QoMCwgMCwgc2l6ZSwgc2l6ZSk7XHJcblxyXG4gICAgICAgIGxldCBncmQgPSBjb250ZXh0LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIHNpemUsIHNpemUpO1xyXG4gICAgICAgIGxldCBjb2xvclN0b3BzID0gY29sb3Iuc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgIGZvciAobGV0IGNvbG9yU3RvcCBvZiBjb2xvclN0b3BzKSB7XHJcbiAgICAgICAgICAgIGNvbG9yU3RvcCA9IGNvbG9yU3RvcC50cmltKCk7XHJcbiAgICAgICAgICAgIGxldCB0bXBDb2xvclN0b3AgPSBjb2xvclN0b3Auc3Vic3RyKDEsIGNvbG9yU3RvcC5sZW5ndGggLSAyKTtcclxuICAgICAgICAgICAgbGV0IGNzID0gdG1wQ29sb3JTdG9wLnNwbGl0KFwiLFwiKTtcclxuICAgICAgICAgICAgZ3JkLmFkZENvbG9yU3RvcChOdW1iZXIoY3NbMF0udHJpbSgpKSwgdGhpcy50b1JHQkFDb2xvcihjc1sxXS50cmltKCksIG9wYWNpdHkpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBncmQ7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHRvT0xSYWRpYWxHcmFkaWVudChjb2xvciwgb3BhY2l0eSA9IDEsIHNpemUpIHtcclxuICAgICAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcclxuICAgICAgICBsZXQgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgICAgY29udGV4dC5yZWN0KDAsIDAsIHNpemUsIHNpemUpO1xyXG5cclxuICAgICAgICBsZXQgZ3JkID0gY29udGV4dC5jcmVhdGVSYWRpYWxHcmFkaWVudChzaXplIC8gMiwgc2l6ZSAvIDIsIDAsIHNpemUgLyAyLCBzaXplIC8gMiwgc2l6ZSAvIDIpO1xyXG4gICAgICAgIGxldCBjb2xvclN0b3BzID0gY29sb3Iuc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgIGZvciAobGV0IGNvbG9yU3RvcCBvZiBjb2xvclN0b3BzKSB7XHJcbiAgICAgICAgICAgIGNvbG9yU3RvcCA9IGNvbG9yU3RvcC50cmltKCk7XHJcbiAgICAgICAgICAgIGxldCB0bXBDb2xvclN0b3AgPSBjb2xvclN0b3Auc3Vic3RyKDEsIGNvbG9yU3RvcC5sZW5ndGggLSAyKTtcclxuICAgICAgICAgICAgbGV0IGNzID0gdG1wQ29sb3JTdG9wLnNwbGl0KFwiLFwiKTtcclxuICAgICAgICAgICAgZ3JkLmFkZENvbG9yU3RvcChOdW1iZXIoY3NbMF0udHJpbSgpKSwgdGhpcy50b1JHQkFDb2xvcihjc1sxXS50cmltKCksIG9wYWNpdHkpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBncmQ7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0eWxlL2dlb1N0eWxlLnRzIiwiaW1wb3J0IHsgR2VvVGV4dFN0eWxlIH0gZnJvbSBcIi4vZ2VvVGV4dFN0eWxlXCI7XHJcbmltcG9ydCB7IGNvb3JkaW5hdGUgfSBmcm9tIFwib3BlbmxheWVyc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRleHRMYWJlbGluZ1N0cmF0ZWd5IHtcclxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gICAgcHVibGljIG1hcmtMb2NhdGlvbihmbGF0Q29vcmRpbmF0ZXM6IGFueSwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIHJlc29sdXRpb246IGFueSwgZ2VvbWV0cnlUeXBlOiBhbnksIHRleHRTdHlsZTogR2VvVGV4dFN0eWxlLCBncmlkOiBhbnksIGZyYW1lU3RhdGU6IG9seC5GcmFtZVN0YXRlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFya0xvY2F0aW9uQ29yZShmbGF0Q29vcmRpbmF0ZXMsIHdpZHRoLCBoZWlnaHQsIHJlc29sdXRpb24sIGdlb21ldHJ5VHlwZSwgdGV4dFN0eWxlLCBncmlkLCBmcmFtZVN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgbWFya0xvY2F0aW9uQ29yZShmbGF0Q29vcmRpbmF0ZXM6IGFueSwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIHJlc29sdXRpb246IGFueSwgZ2VvbWV0cnlUeXBlOiBhbnksIHRleHRTdHlsZTogR2VvVGV4dFN0eWxlLCBncmlkOiBhbnksIGZyYW1lU3RhdGU6IG9seC5GcmFtZVN0YXRlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNPdmVybGFwcGluZyhmbGF0Q29vcmRpbmF0ZXMsIHdpZHRoLCBoZWlnaHQsIHRleHRTdHlsZS5tYXJnaW4sIHRleHRTdHlsZS5taW5EaXN0YW5jZSwgdGV4dFN0eWxlLm1pblBhZGRpbmcsIHRleHRTdHlsZS5zcGFjaW5nLCBncmlkLCBmcmFtZVN0YXRlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmbGF0Q29vcmRpbmF0ZXM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc092ZXJsYXBwaW5nKGZsYXRDb29yZGluYXRlczogYW55LCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgbWFyZ2luOiBudW1iZXIsIG1pbkRpc3RhbmNlOiBudW1iZXIsIG1pblBhZGRpbmc6IG51bWJlciwgc3BhY2luZzogbnVtYmVyLCBncmlkOiBhbnksIGZyYW1lU3RhdGU6IG9seC5GcmFtZVN0YXRlKSB7XHJcbiAgICAgICAgaWYgKGZsYXRDb29yZGluYXRlcyA9PT0gdW5kZWZpbmVkKSB7IHJldHVybiB0cnVlOyB9XHJcblxyXG4gICAgICAgIGxldCBncmlkTWV0cmljcyA9IGdyaWQubWV0cmljcztcclxuICAgICAgICBsZXQgZ3JpZFNpemUgPSBncmlkLmdyaWRTaXplO1xyXG4gICAgICAgIGxldCBkaXN0YW5jZSA9IChtYXJnaW4gPyBtYXJnaW4gOiAwKSArIChtaW5EaXN0YW5jZSA/IG1pbkRpc3RhbmNlIDogMCkgKyAobWluUGFkZGluZyA/IG1pblBhZGRpbmcgOiAwKSArIChzcGFjaW5nID8gc3BhY2luZyA6IDApO1xyXG5cclxuICAgICAgICAvLyBpZiAod2lkdGggIT09IHVuZGVmaW5lZCAmJiBoZWlnaHQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBsZXQgY29vcmRpbmF0ZSA9IFtmbGF0Q29vcmRpbmF0ZXNbMF0sIGZsYXRDb29yZGluYXRlc1sxXV07XHJcbiAgICAgICAgICAgIGxldCBzY3JlZW5Db29yZGluYXRlcyA9IHRoaXMuY29udmVydFBpeGVsRnJvbUNvb3JkaW5hdGUoY29vcmRpbmF0ZSwgZnJhbWVTdGF0ZSk7XHJcbiAgICAgICAgICAgIGxldCBtaW5XaWR0aCA9IHNjcmVlbkNvb3JkaW5hdGVzWzBdIC0gZGlzdGFuY2UgKiAwLjI1O1xyXG4gICAgICAgICAgICBsZXQgbWluSGVpZ2h0ID0gc2NyZWVuQ29vcmRpbmF0ZXNbMV0gLSBkaXN0YW5jZSAqIDAuMjU7XHJcbiAgICAgICAgICAgIGxldCBtYXhXaWR0aCA9IG1pbldpZHRoICsgd2lkdGggKyBkaXN0YW5jZSAqIDAuNTtcclxuICAgICAgICAgICAgbGV0IG1heEhlaWdodCA9IG1pbkhlaWdodCArIGhlaWdodCArIGRpc3RhbmNlICogMC41O1xyXG4gICAgICAgICAgICBsZXQgbWluV2lkdGhJbmRleCA9IE1hdGguZmxvb3IobWluV2lkdGggLyBncmlkU2l6ZSk7XHJcbiAgICAgICAgICAgIGxldCBtaW5IZWlnaHRJbmRleCA9IE1hdGguZmxvb3IobWluSGVpZ2h0IC8gZ3JpZFNpemUpO1xyXG4gICAgICAgICAgICBsZXQgbWF4V2lkdGhJbmRleCA9IE1hdGguZmxvb3IobWF4V2lkdGggLyBncmlkU2l6ZSk7XHJcbiAgICAgICAgICAgIGxldCBtYXhIZWlnaHRJbmRleCA9IE1hdGguZmxvb3IobWF4SGVpZ2h0IC8gZ3JpZFNpemUpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHRtcE1ldGVyaWNzID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBtaW5XaWR0aEluZGV4OyBpIDw9IG1heFdpZHRoSW5kZXg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IG1pbkhlaWdodEluZGV4OyBqIDw9IG1heEhlaWdodEluZGV4OyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQga2V5ID0gYCR7aX0sJHtqfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdyaWRNZXRyaWNzW2tleV0gIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG1wTWV0ZXJpY3MucHVzaChrZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRtcE1ldGVyaWNzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdG1wTWV0ZXJpY3MuZm9yRWFjaCgobykgPT4geyBncmlkTWV0cmljc1tvXSA9IDA7IH0pO1xyXG4gICAgICAgICAgICB0bXBNZXRlcmljcyA9IFtdO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgbGV0IGNvb3JkaW5hdGUxID0gW2ZsYXRDb29yZGluYXRlc1swXSwgZmxhdENvb3JkaW5hdGVzWzFdXTtcclxuICAgICAgICAvLyAgICAgbGV0IGNvb3JkaW5hdGUyID0gW2ZsYXRDb29yZGluYXRlc1syXSwgZmxhdENvb3JkaW5hdGVzWzNdXTtcclxuICAgICAgICAvLyAgICAgbGV0IHNjcmVlbkNvb3JkaW5hdGVzMSA9IHRoaXMuY29udmVydFBpeGVsRnJvbUNvb3JkaW5hdGUoY29vcmRpbmF0ZTEsIGZyYW1lU3RhdGUpO1xyXG4gICAgICAgIC8vICAgICBsZXQgc2NyZWVuQ29vcmRpbmF0ZXMyID0gdGhpcy5jb252ZXJ0UGl4ZWxGcm9tQ29vcmRpbmF0ZShjb29yZGluYXRlMiwgZnJhbWVTdGF0ZSk7XHJcbiAgICAgICAgLy8gICAgIGxldCBtaW5YID0gKHNjcmVlbkNvb3JkaW5hdGVzMVswXSA8IHNjcmVlbkNvb3JkaW5hdGVzMlswXSA/IHNjcmVlbkNvb3JkaW5hdGVzMVswXSA6IHNjcmVlbkNvb3JkaW5hdGVzMlswXSkgLSBkaXN0YW5jZSAqIDAuMjU7XHJcbiAgICAgICAgLy8gICAgIGxldCBtaW5ZID0gKHNjcmVlbkNvb3JkaW5hdGVzMVsxXSA8IHNjcmVlbkNvb3JkaW5hdGVzMlsxXSA/IHNjcmVlbkNvb3JkaW5hdGVzMVsxXSA6IHNjcmVlbkNvb3JkaW5hdGVzMlsxXSkgLSBkaXN0YW5jZSAqIDAuMjU7XHJcbiAgICAgICAgLy8gICAgIGxldCBtYXhYID0gKHNjcmVlbkNvb3JkaW5hdGVzMVswXSA+IHNjcmVlbkNvb3JkaW5hdGVzMlswXSA/IHNjcmVlbkNvb3JkaW5hdGVzMVswXSA6IHNjcmVlbkNvb3JkaW5hdGVzMlswXSkgKyBkaXN0YW5jZSAqIDAuNTtcclxuICAgICAgICAvLyAgICAgbGV0IG1heFkgPSAoc2NyZWVuQ29vcmRpbmF0ZXMxWzFdID4gc2NyZWVuQ29vcmRpbmF0ZXMyWzFdID8gc2NyZWVuQ29vcmRpbmF0ZXMxWzFdIDogc2NyZWVuQ29vcmRpbmF0ZXMyWzFdKSArIGRpc3RhbmNlICogMC41O1xyXG5cclxuICAgICAgICAvLyAgICAgbWluWCA9IE1hdGguZmxvb3IobWluWCAvIGdyaWRTaXplKTtcclxuICAgICAgICAvLyAgICAgbWluWSA9IE1hdGguZmxvb3IobWluWSAvIGdyaWRTaXplKTtcclxuICAgICAgICAvLyAgICAgbWF4WCA9IE1hdGguZmxvb3IobWF4WCAvIGdyaWRTaXplKTtcclxuICAgICAgICAvLyAgICAgbWF4WSA9IE1hdGguZmxvb3IobWF4WSAvIGdyaWRTaXplKTtcclxuXHJcbiAgICAgICAgLy8gICAgIGxldCB0bXBNZXRlcmljcyA9IFtdO1xyXG4gICAgICAgIC8vICAgICBmb3IgKGxldCBpID0gbWluWDsgaSA8PSBtYXhYOyBpKyspIHtcclxuICAgICAgICAvLyAgICAgICAgIGZvciAobGV0IGogPSBtaW5ZOyBqIDw9IG1heFk7IGorKykge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGxldCBrZXkgPSBgJHtpfSwke2p9YDtcclxuICAgICAgICAvLyAgICAgICAgICAgICBpZiAoZ3JpZE1ldHJpY3Nba2V5XSAhPT0gMCkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB0bXBNZXRlcmljcy5wdXNoKGtleSk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdG1wTWV0ZXJpY3MgPSBbXTtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICB9XHJcblxyXG4gICAgICAgIC8vICAgICB0bXBNZXRlcmljcy5mb3JFYWNoKChvKSA9PiB7IGdyaWRNZXRyaWNzW29dID0gMDsgfSk7XHJcbiAgICAgICAgLy8gICAgIHRtcE1ldGVyaWNzID0gW107XHJcbiAgICAgICAgLy8gICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgY29udmVydFBpeGVsRnJvbUNvb3JkaW5hdGUoY29vcmRpbmF0ZTogYW55LCBmcmFtZVN0YXRlOiBvbHguRnJhbWVTdGF0ZSkge1xyXG4gICAgICAgIGlmICghZnJhbWVTdGF0ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoPGFueT5vbCkudHJhbnNmb3JtLmFwcGx5KCg8YW55PmZyYW1lU3RhdGUpLmNvb3JkaW5hdGVUb1BpeGVsVHJhbnNmb3JtLCBjb29yZGluYXRlLnNsaWNlKDAsIDIpKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdHlsZS90ZXh0TGFiZWxpbmdTdHJhdGVneS50cyIsImltcG9ydCB7IEdlb0ZpbHRlckl0ZW0gfSBmcm9tIFwiLi9nZW9GaWx0ZXJJdGVtXCI7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgR2VvRmlsdGVyIHtcclxuICAgIHB1YmxpYyBpbml0aWFsaXplZDogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBmaWx0ZXJJdGVtczogR2VvRmlsdGVySXRlbVtdO1xyXG4gICAgcHVibGljIHJlcGxhY2VkVmFsdWVUb0luZGV4OiBib29sZWFuO1xyXG5cclxuICAgIHB1YmxpYyBrZXk6IGFueTtcclxuICAgIHB1YmxpYyBrZXlJbmRleDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGZpbHRlckl0ZW1zOiBHZW9GaWx0ZXJJdGVtW10pIHtcclxuICAgICAgICB0aGlzLmZpbHRlckl0ZW1zID0gZmlsdGVySXRlbXMgfHwgW107XHJcbiAgICAgICAgdGhpcy5yZXBsYWNlZFZhbHVlVG9JbmRleCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEZpbHRlckl0ZW0oZmlsdGVySXRlbTogR2VvRmlsdGVySXRlbSkge1xyXG4gICAgICAgIHRoaXMuZmlsdGVySXRlbXMucHVzaChmaWx0ZXJJdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsaXplKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZUNvcmUoKTtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsaXplQ29yZSgpIHsgfVxyXG5cclxuICAgIG1hdGNoT0xGZWF0dXJlKGZlYXR1cmU6IG9sLkZlYXR1cmUsIHpvb206IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICghdGhpcy5pbml0aWFsaXplZCkge1xyXG4gICAgICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWF0Y2hGZWF0dXJlQ29yZShmZWF0dXJlLCB6b29tKTtcclxuICAgIH1cclxuXHJcbiAgICByZXBsYWNlVmF1bGVzVG9QYmZJbmRleChwYmZMYXllcjogYW55KSB7XHJcbiAgICAgICAgdGhpcy5yZXBsYWNlVmF1bGVzVG9QYmZJbmRleENvcmUocGJmTGF5ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGFic3RyYWN0IG1hdGNoRmVhdHVyZUNvcmUoZmVhdHVyZTogb2wuRmVhdHVyZSwgem9vbTogbnVtYmVyKTogYm9vbGVhbjtcclxuICAgIGFic3RyYWN0IHJlcGxhY2VWYXVsZXNUb1BiZkluZGV4Q29yZShwYmZMYXllcjogYW55KTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9maWx0ZXIvZ2VvRmlsdGVyLnRzIiwiaW1wb3J0IHsgVGV4dExhYmVsaW5nU3RyYXRlZ3kgfSBmcm9tIFwiLi90ZXh0TGFiZWxpbmdTdHJhdGVneVwiO1xyXG5pbXBvcnQgeyBHZW9UZXh0U3R5bGUgfSBmcm9tIFwiLi9nZW9UZXh0U3R5bGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEZXRlY3RUZXh0TGFiZWxpbmdTdHJhdGVneSBleHRlbmRzIFRleHRMYWJlbGluZ1N0cmF0ZWd5IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5tYXJrTG9jYXRpb25Db3JlID0gdGhpcy5tYXJrTG9jYXRpb25Db3JlQ3VzdG9tO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBtYXJrTG9jYXRpb25Db3JlQ3VzdG9tKGZsYXRDb29yZGluYXRlczogYW55LCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgcmVzb2x1dGlvbjogYW55LCBnZW9tZXRyeVR5cGU6IGFueSwgdGV4dFN0eWxlOiBHZW9UZXh0U3R5bGUsIGdyaWQ6IGFueSwgZnJhbWVTdGF0ZTogb2x4LkZyYW1lU3RhdGUpIHtcclxuICAgICAgICBzd2l0Y2ggKGdlb21ldHJ5VHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlICg8YW55Pm9sLmdlb20pLkdlb21ldHJ5VHlwZS5QT0lOVDpcclxuICAgICAgICAgICAgY2FzZSAoPGFueT5vbC5nZW9tKS5HZW9tZXRyeVR5cGUuTVVMVElfUE9JTlQ6XHJcbiAgICAgICAgICAgIGNhc2UgKDxhbnk+b2wuZ2VvbSkuR2VvbWV0cnlUeXBlLkNJUkNMRTpcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzT3ZlcmxhcHBpbmcoZmxhdENvb3JkaW5hdGVzLCB3aWR0aCwgaGVpZ2h0LCB0ZXh0U3R5bGUubWFyZ2luLCB0ZXh0U3R5bGUubWluRGlzdGFuY2UsIHRleHRTdHlsZS5taW5QYWRkaW5nLCB0ZXh0U3R5bGUuc3BhY2luZywgZ3JpZCwgZnJhbWVTdGF0ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBmbGF0Q29vcmRpbmF0ZXMgPSB0aGlzLm1vdmVQb2ludExhYmVsKGZsYXRDb29yZGluYXRlcywgd2lkdGgsIGhlaWdodCwgcmVzb2x1dGlvbiwgdGV4dFN0eWxlLCBncmlkLCBmcmFtZVN0YXRlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICg8YW55Pm9sLmdlb20pLkdlb21ldHJ5VHlwZS5MSU5FX1NUUklORzpcclxuICAgICAgICAgICAgY2FzZSAoPGFueT5vbC5nZW9tKS5HZW9tZXRyeVR5cGUuTVVMVElfTElORV9TVFJJTkc6XHJcbiAgICAgICAgICAgIGNhc2UgKDxhbnk+b2wuZ2VvbSkuR2VvbWV0cnlUeXBlLlBPTFlHT046XHJcbiAgICAgICAgICAgIGNhc2UgKDxhbnk+b2wuZ2VvbSkuR2VvbWV0cnlUeXBlLk1VTFRJX1BPTFlHT046XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc092ZXJsYXBwaW5nKGZsYXRDb29yZGluYXRlcywgd2lkdGgsIGhlaWdodCwgdGV4dFN0eWxlLm1hcmdpbiwgdGV4dFN0eWxlLm1pbkRpc3RhbmNlLCB0ZXh0U3R5bGUubWluUGFkZGluZywgdGV4dFN0eWxlLnNwYWNpbmcsIGdyaWQsIGZyYW1lU3RhdGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxhdENvb3JkaW5hdGVzID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZsYXRDb29yZGluYXRlcztcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlUG9pbnRMYWJlbChmbGF0Q29vcmRpbmF0ZXM6IGFueSwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIHJlc29sdXRpb246IGFueSwgdGV4dFN0eWxlOiBHZW9UZXh0U3R5bGUsIGdyaWQ6IGFueSwgZnJhbWVTdGF0ZTogb2x4LkZyYW1lU3RhdGUpIHtcclxuICAgICAgICBsZXQgZ3JpZFNpemUgPSBncmlkLmdyaWRTaXplO1xyXG4gICAgICAgIGxldCBkaXN0YW5jZSA9IGdyaWRTaXplICogcmVzb2x1dGlvbjtcclxuXHJcbiAgICAgICAgaWYgKHRleHRTdHlsZS5wbGFjZW1lbnRzKSB7XHJcbiAgICAgICAgICAgIGxldCBwbGFjZW1lbnRzID0gdGV4dFN0eWxlLnBsYWNlbWVudHMuc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBwbGFjZW1lbnQgb2YgcGxhY2VtZW50cykge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5ld0ZsYXRDb29yZGluYXRlcyA9IHRoaXMuZ2V0TW92ZWRQb3NpdGlvbihmbGF0Q29vcmRpbmF0ZXMsIHBsYWNlbWVudCwgZGlzdGFuY2UpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzT3ZlcmxhcHBpbmcobmV3RmxhdENvb3JkaW5hdGVzLCB3aWR0aCwgaGVpZ2h0LCB0ZXh0U3R5bGUubWFyZ2luLCB0ZXh0U3R5bGUubWluRGlzdGFuY2UsIHRleHRTdHlsZS5taW5QYWRkaW5nLCB0ZXh0U3R5bGUuc3BhY2luZywgZ3JpZCwgZnJhbWVTdGF0ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3RmxhdENvb3JkaW5hdGVzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE1vdmVkUG9zaXRpb24oZmxhdENvb3JkaW5hdGVzOiBhbnksIHBsYWNlbWVudDogc3RyaW5nLCBkaXN0YW5jZTogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IG5ld0ZsYXRDb29yZGluYXRlczogYW55O1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHBsYWNlbWVudCkge1xyXG4gICAgICAgICAgICBjYXNlIFwiVVJcIjpcclxuICAgICAgICAgICAgICAgIG5ld0ZsYXRDb29yZGluYXRlcyA9IHRoaXMubW92ZVRvVVIoZmxhdENvb3JkaW5hdGVzLCBkaXN0YW5jZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIlVcIjpcclxuICAgICAgICAgICAgICAgIG5ld0ZsYXRDb29yZGluYXRlcyA9IHRoaXMubW92ZVRvVShmbGF0Q29vcmRpbmF0ZXMsIGRpc3RhbmNlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiVUxcIjpcclxuICAgICAgICAgICAgICAgIG5ld0ZsYXRDb29yZGluYXRlcyA9IHRoaXMubW92ZVRvVUwoZmxhdENvb3JkaW5hdGVzLCBkaXN0YW5jZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIkJcIjpcclxuICAgICAgICAgICAgICAgIG5ld0ZsYXRDb29yZGluYXRlcyA9IHRoaXMubW92ZVRvQihmbGF0Q29vcmRpbmF0ZXMsIGRpc3RhbmNlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiQlJcIjpcclxuICAgICAgICAgICAgICAgIG5ld0ZsYXRDb29yZGluYXRlcyA9IHRoaXMubW92ZVRvQlIoZmxhdENvb3JkaW5hdGVzLCBkaXN0YW5jZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIkJMXCI6XHJcbiAgICAgICAgICAgICAgICBuZXdGbGF0Q29vcmRpbmF0ZXMgPSB0aGlzLm1vdmVUb0JMKGZsYXRDb29yZGluYXRlcywgZGlzdGFuY2UpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJMXCI6XHJcbiAgICAgICAgICAgICAgICBuZXdGbGF0Q29vcmRpbmF0ZXMgPSB0aGlzLm1vdmVUb0woZmxhdENvb3JkaW5hdGVzLCBkaXN0YW5jZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIlJcIjpcclxuICAgICAgICAgICAgICAgIG5ld0ZsYXRDb29yZGluYXRlcyA9IHRoaXMubW92ZVRvUihmbGF0Q29vcmRpbmF0ZXMsIGRpc3RhbmNlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5ld0ZsYXRDb29yZGluYXRlcztcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlVG9VUihmbGF0Q29vcmRpbmF0ZXM6IGFueSwgZGlzdGFuY2U6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBuZXdGbGF0Q29vcmRpbmF0ZXMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBuZXdGbGF0Q29vcmRpbmF0ZXMucHVzaChmbGF0Q29vcmRpbmF0ZXNbMF0gKyBkaXN0YW5jZSk7XHJcbiAgICAgICAgbmV3RmxhdENvb3JkaW5hdGVzLnB1c2goZmxhdENvb3JkaW5hdGVzWzFdICsgZGlzdGFuY2UpO1xyXG4gICAgICAgIG5ld0ZsYXRDb29yZGluYXRlcy5wdXNoKGZsYXRDb29yZGluYXRlc1syXSk7XHJcbiAgICAgICAgcmV0dXJuIG5ld0ZsYXRDb29yZGluYXRlcztcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlVG9VKGZsYXRDb29yZGluYXRlczogYW55LCBkaXN0YW5jZTogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IG5ld0ZsYXRDb29yZGluYXRlcyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIG5ld0ZsYXRDb29yZGluYXRlcy5wdXNoKGZsYXRDb29yZGluYXRlc1swXSk7XHJcbiAgICAgICAgbmV3RmxhdENvb3JkaW5hdGVzLnB1c2goZmxhdENvb3JkaW5hdGVzWzFdICsgZGlzdGFuY2UpO1xyXG4gICAgICAgIG5ld0ZsYXRDb29yZGluYXRlcy5wdXNoKGZsYXRDb29yZGluYXRlc1syXSk7XHJcbiAgICAgICAgcmV0dXJuIG5ld0ZsYXRDb29yZGluYXRlcztcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlVG9VTChmbGF0Q29vcmRpbmF0ZXM6IGFueSwgZGlzdGFuY2U6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBuZXdGbGF0Q29vcmRpbmF0ZXMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBuZXdGbGF0Q29vcmRpbmF0ZXMucHVzaChmbGF0Q29vcmRpbmF0ZXNbMF0gLSBkaXN0YW5jZSk7XHJcbiAgICAgICAgbmV3RmxhdENvb3JkaW5hdGVzLnB1c2goZmxhdENvb3JkaW5hdGVzWzFdICsgZGlzdGFuY2UpO1xyXG4gICAgICAgIG5ld0ZsYXRDb29yZGluYXRlcy5wdXNoKGZsYXRDb29yZGluYXRlc1syXSk7XHJcbiAgICAgICAgcmV0dXJuIG5ld0ZsYXRDb29yZGluYXRlcztcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlVG9CKGZsYXRDb29yZGluYXRlczogYW55LCBkaXN0YW5jZTogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IG5ld0ZsYXRDb29yZGluYXRlcyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIG5ld0ZsYXRDb29yZGluYXRlcy5wdXNoKGZsYXRDb29yZGluYXRlc1swXSk7XHJcbiAgICAgICAgbmV3RmxhdENvb3JkaW5hdGVzLnB1c2goZmxhdENvb3JkaW5hdGVzWzFdIC0gZGlzdGFuY2UpO1xyXG4gICAgICAgIG5ld0ZsYXRDb29yZGluYXRlcy5wdXNoKGZsYXRDb29yZGluYXRlc1syXSk7XHJcbiAgICAgICAgcmV0dXJuIG5ld0ZsYXRDb29yZGluYXRlcztcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlVG9CUihmbGF0Q29vcmRpbmF0ZXM6IGFueSwgZGlzdGFuY2U6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBuZXdGbGF0Q29vcmRpbmF0ZXMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBuZXdGbGF0Q29vcmRpbmF0ZXMucHVzaChmbGF0Q29vcmRpbmF0ZXNbMF0gKyBkaXN0YW5jZSk7XHJcbiAgICAgICAgbmV3RmxhdENvb3JkaW5hdGVzLnB1c2goZmxhdENvb3JkaW5hdGVzWzFdIC0gZGlzdGFuY2UpO1xyXG4gICAgICAgIG5ld0ZsYXRDb29yZGluYXRlcy5wdXNoKGZsYXRDb29yZGluYXRlc1syXSk7XHJcbiAgICAgICAgcmV0dXJuIG5ld0ZsYXRDb29yZGluYXRlcztcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlVG9CTChmbGF0Q29vcmRpbmF0ZXM6IGFueSwgZGlzdGFuY2U6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBuZXdGbGF0Q29vcmRpbmF0ZXMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBuZXdGbGF0Q29vcmRpbmF0ZXMucHVzaChmbGF0Q29vcmRpbmF0ZXNbMF0gLSBkaXN0YW5jZSk7XHJcbiAgICAgICAgbmV3RmxhdENvb3JkaW5hdGVzLnB1c2goZmxhdENvb3JkaW5hdGVzWzFdIC0gZGlzdGFuY2UpO1xyXG4gICAgICAgIG5ld0ZsYXRDb29yZGluYXRlcy5wdXNoKGZsYXRDb29yZGluYXRlc1syXSk7XHJcbiAgICAgICAgcmV0dXJuIG5ld0ZsYXRDb29yZGluYXRlcztcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlVG9MKGZsYXRDb29yZGluYXRlczogYW55LCBkaXN0YW5jZTogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IG5ld0ZsYXRDb29yZGluYXRlcyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIG5ld0ZsYXRDb29yZGluYXRlcy5wdXNoKGZsYXRDb29yZGluYXRlc1swXSAtIGRpc3RhbmNlKTtcclxuICAgICAgICBuZXdGbGF0Q29vcmRpbmF0ZXMucHVzaChmbGF0Q29vcmRpbmF0ZXNbMV0pO1xyXG4gICAgICAgIG5ld0ZsYXRDb29yZGluYXRlcy5wdXNoKGZsYXRDb29yZGluYXRlc1syXSk7XHJcbiAgICAgICAgcmV0dXJuIG5ld0ZsYXRDb29yZGluYXRlcztcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlVG9SKGZsYXRDb29yZGluYXRlczogYW55LCBkaXN0YW5jZTogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IG5ld0ZsYXRDb29yZGluYXRlcyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIG5ld0ZsYXRDb29yZGluYXRlcy5wdXNoKGZsYXRDb29yZGluYXRlc1swXSArIGRpc3RhbmNlKTtcclxuICAgICAgICBuZXdGbGF0Q29vcmRpbmF0ZXMucHVzaChmbGF0Q29vcmRpbmF0ZXNbMV0pO1xyXG4gICAgICAgIG5ld0ZsYXRDb29yZGluYXRlcy5wdXNoKGZsYXRDb29yZGluYXRlc1syXSk7XHJcbiAgICAgICAgcmV0dXJuIG5ld0ZsYXRDb29yZGluYXRlcztcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdHlsZS9kZXRlY3RUZXh0TGFiZWxpbmdTdHJhdGVneS50cyIsImltcG9ydCB7IEdlb0ZpbHRlciB9IGZyb20gXCIuL2dlb0ZpbHRlclwiO1xyXG5pbXBvcnQgeyBHZW9GaWx0ZXJJdGVtIH0gZnJvbSBcIi4vZ2VvRmlsdGVySXRlbVwiO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEdlb1JhbmdlRmlsdGVyIGV4dGVuZHMgR2VvRmlsdGVyIHtcclxuICAgIHB1YmxpYyByYW5nZXM6IE51bWJlcltdW10gPSBbXTtcclxuICAgIHB1YmxpYyBhbGxvd2VkVmFsdWVzOiBOdW1iZXJbXSA9IFtdO1xyXG4gICAgcHVibGljIGRpc2FsbG93ZWRWYWx1ZXM6IE51bWJlcltdID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoZmlsdGVySXRlbXM6IEdlb0ZpbHRlckl0ZW1bXSkge1xyXG4gICAgICAgIHN1cGVyKGZpbHRlckl0ZW1zKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsaXplQ29yZSgpIHtcclxuICAgICAgICB0aGlzLmZpbHRlckl0ZW1zLnNvcnQoKGEsIGIpID0+ICthLnZhbHVlIC0gK2IudmFsdWUpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5maWx0ZXJJdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgZmlsdGVySXRlbSA9IHRoaXMuZmlsdGVySXRlbXNbaV07XHJcbiAgICAgICAgICAgIHRoaXMua2V5ID0gZmlsdGVySXRlbS5rZXk7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9ICtmaWx0ZXJJdGVtLnZhbHVlO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGZpbHRlckl0ZW0ub3BlcmF0b3IpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCI+XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yYW5nZXMucHVzaChbdmFsdWUgKyAwLjAwMDAxLCBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFldKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCI+PVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmFuZ2VzLnB1c2goW3ZhbHVlLCBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFldKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCIhPVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzYWxsb3dlZFZhbHVlcy5wdXNoKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCI9XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxvd2VkVmFsdWVzLnB1c2godmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZmlsdGVySXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGZpbHRlckl0ZW0gPSB0aGlzLmZpbHRlckl0ZW1zW2ldO1xyXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSArZmlsdGVySXRlbS52YWx1ZTtcclxuICAgICAgICAgICAgbGV0IHJhbmdlID0gR2VvUmFuZ2VGaWx0ZXIuZ2V0UmFuZ2UodGhpcy5yYW5nZXMsIHZhbHVlKTtcclxuICAgICAgICAgICAgc3dpdGNoIChmaWx0ZXJJdGVtLm9wZXJhdG9yKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiPFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyYW5nZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByYW5nZVsxXSA9IHZhbHVlICsgMC4wMDAwMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlID0gW051bWJlci5ORUdBVElWRV9JTkZJTklUWSwgdmFsdWUgKyAwLjAwMDAxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yYW5nZXMucHVzaChyYW5nZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIjw9XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlWzFdID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByYW5nZSA9IFtOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFksIHZhbHVlXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yYW5nZXMucHVzaChyYW5nZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1hdGNoRmVhdHVyZUNvcmUoZmVhdHVyZTogYW55LCB6b29tOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgICBsZXQgY3VycmVudFZhbHVlO1xyXG4gICAgICAgIGlmICh0aGlzLnJlcGxhY2VkVmFsdWVUb0luZGV4KSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRWYWx1ZSA9IGZlYXR1cmUucHJvcGVydGllc1t0aGlzLmtleV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjdXJyZW50VmFsdWUgPSBmZWF0dXJlLnByb3BlcnRpZXNbdGhpcy5rZXldO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNJblJhbmdlKCtjdXJyZW50VmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlcGxhY2VWYXVsZXNUb1BiZkluZGV4Q29yZShwYmZMYXllcikge1xyXG4gICAgICAgIHRoaXMucmVwbGFjZWRWYWx1ZVRvSW5kZXggPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlzSW5SYW5nZShjdXJyZW50VmFsdWU6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLmRpc2FsbG93ZWRWYWx1ZXMuaW5jbHVkZXMoY3VycmVudFZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmFsbG93ZWRWYWx1ZXMuaW5jbHVkZXMoY3VycmVudFZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yYW5nZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHJhbmdlID0gdGhpcy5yYW5nZXNbaV07XHJcbiAgICAgICAgICAgIGlmIChyYW5nZS5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50VmFsdWUgPj0gcmFuZ2VbMF0pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50VmFsdWUgPj0gcmFuZ2VbMF0gJiYgY3VycmVudFZhbHVlIDw9IHJhbmdlWzFdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0UmFuZ2UocmFuZ2VzOiBOdW1iZXJbXVtdLCB2YWx1ZTogbnVtYmVyKTogTnVtYmVyW10ge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmFuZ2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCByYW5nZSA9IHJhbmdlc1tpXTtcclxuICAgICAgICAgICAgaWYgKHZhbHVlID49IHJhbmdlWzBdICYmIHZhbHVlIDw9IHJhbmdlWzFdKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmFuZ2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9maWx0ZXIvZ2VvUmFuZ2VGaWx0ZXIudHMiLCJpbXBvcnQgeyBHZW9tYXAgfSBmcm9tIFwiLi9nZW9NYXBcIjtcclxuXHJcbig8YW55Pm9sKS5tYXBzdWl0ZSA9IHt9O1xyXG5cclxuKDxhbnk+b2wpLm1hcHN1aXRlW1wiR2VvTWFwXCJdID0gR2VvbWFwO1xyXG5cclxuKDxhbnk+d2luZG93KVtcIm9sXCJdID0gb2w7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21haW4udHMiLCJpbXBvcnQgeyBHZW9TdHlsZSB9IGZyb20gXCIuL3N0eWxlL2dlb1N0eWxlXCI7XHJcbmltcG9ydCB7IEdlb1ZlY3RvclRpbGVTb3VyY2UgfSBmcm9tIFwiLi9zb3VyY2UvZ2VvVmVjdG9yVGlsZVNvdXJjZVwiO1xyXG5pbXBvcnQgeyBHZW9WZWN0b3JUaWxlIH0gZnJvbSBcIi4vZ2VvVmVjdG9yVGlsZVwiO1xyXG5pbXBvcnQgeyBHZW9NVlRGb3JtYXQgfSBmcm9tIFwiLi9mb3JtYXQvZ2VvTXZ0XCI7XHJcbmltcG9ydCB7IFN0eWxlSnNvbkNhY2hlIH0gZnJvbSBcIi4vc3R5bGVKc29uQ2FjaGVcIjtcclxuaW1wb3J0IHsgU3R5bGVKc29uQ2FjaGVJdGVtIH0gZnJvbSBcIi4vc3R5bGVKc29uQ2FjaGVJdGVtXCI7XHJcbmltcG9ydCB7IFRyZWUgfSBmcm9tIFwiLi90cmVlL3RyZWVcIjtcclxuaW1wb3J0IHsgVHJlZU5vZGUgfSBmcm9tIFwiLi90cmVlL1RyZWVOb2RlXCI7XHJcbmltcG9ydCB7IEdlb1ZlY3RvclRpbGVMYXllclJlbmRlciB9IGZyb20gXCIuL3JlbmRlci9nZW9WZWN0b3JUaWxlbGF5ZXJSZW5kZXJcIjtcclxuaW1wb3J0IHsgV29ybGRTdHJlZXRWZWN0b3JUaWxlTGF5ZXIgfSBmcm9tIFwiLi9sYXllci93b3JsZFN0cmVldFZlY3RvclRpbGVsYXllclwiO1xyXG5pbXBvcnQgeyBVdGlsIH0gZnJvbSBcIi4vdXRpbFwiO1xyXG5pbXBvcnQgeyBHZW9UaWxlUXVldWUgfSBmcm9tIFwiLi9nZW9UaWxlUXVldWVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHZW9tYXAgZXh0ZW5kcyAob2wuTWFwIGFzIHsgbmV3KHA6IG9seC5NYXBPcHRpb25zKTogYW55OyB9KSB7XHJcbiAgICBwdWJsaWMgb3duZXI6IHN0cmluZztcclxuICAgIHB1YmxpYyB2ZXJzaW9uOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgZGF0ZVRpbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyB2YXJpYWJsZXM6IGFueTtcclxuXHJcbiAgICBzdHlsZUpzb25DYWNoZTogU3R5bGVKc29uQ2FjaGU7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc3R5bGVKc29uOiBhbnksIG9wdGlvbnM6IG9seC5NYXBPcHRpb25zKSB7XHJcbiAgICAgICAgc3VwZXIob3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVQb3N0UmVuZGVyID0gdGhpcy5oYW5kbGVQb3N0UmVuZGVyQ3VzdG9tO1xyXG4gICAgICAgIGxldCB2aWV3ID0gdGhpcy5nZXRWaWV3KCk7XHJcbiAgICAgICAgdGhpcy5zdHlsZUpzb25DYWNoZSA9IG5ldyBTdHlsZUpzb25DYWNoZSgpO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJHZW9WZWN0b3IoKTtcclxuICAgICAgICBpZiAoVXRpbC5pc1N0eWxlSnNvblVybChzdHlsZUpzb24pKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZFN0eWxlSnNvbkFzeW4oc3R5bGVKc29uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZFN0eWxlSnNvbihzdHlsZUpzb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRpbGVRdWV1ZV8gPSBuZXcgR2VvVGlsZVF1ZXVlKHRoaXMuZ2V0VGlsZVByaW9yaXR5LmJpbmQodGhpcyksIHRoaXMuaGFuZGxlVGlsZUNoYW5nZV8uYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFN0eWxlSnNvbkFzeW4oc3R5bGVKc29uVXJsKSB7XHJcbiAgICAgICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIHhoci5vcGVuKFwiR0VUXCIsIHN0eWxlSnNvblVybCwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgICAgICBpZiAoIXhoci5zdGF0dXMgfHwgeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDMwMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHNvdXJjZTtcclxuICAgICAgICAgICAgICAgIHNvdXJjZSA9IHhoci5yZXNwb25zZVRleHQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRTdHlsZUpzb24oSlNPTi5wYXJzZShzb3VyY2UpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0uYmluZCh0aGlzKTtcclxuICAgICAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB9LmJpbmQodGhpcyk7XHJcbiAgICAgICAgeGhyLnNlbmQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGFuZGxlUG9zdFJlbmRlckN1c3RvbSgpIHtcclxuXHJcbiAgICAgICAgbGV0IGZyYW1lU3RhdGUgPSB0aGlzLmZyYW1lU3RhdGVfO1xyXG5cclxuICAgICAgICAvLyBNYW5hZ2UgdGhlIHRpbGUgcXVldWVcclxuICAgICAgICAvLyBJbWFnZSBsb2FkcyBhcmUgZXhwZW5zaXZlIGFuZCBhIGxpbWl0ZWQgcmVzb3VyY2UsIHNvIHRyeSB0byB1c2UgdGhlbVxyXG4gICAgICAgIC8vIGVmZmljaWVudGx5OlxyXG4gICAgICAgIC8vICogV2hlbiB0aGUgdmlldyBpcyBzdGF0aWMgd2UgYWxsb3cgYSBsYXJnZSBudW1iZXIgb2YgcGFyYWxsZWwgdGlsZSBsb2Fkc1xyXG4gICAgICAgIC8vICAgdG8gY29tcGxldGUgdGhlIGZyYW1lIGFzIHF1aWNrbHkgYXMgcG9zc2libGUuXHJcbiAgICAgICAgLy8gKiBXaGVuIGFuaW1hdGluZyBvciBpbnRlcmFjdGluZywgaW1hZ2UgbG9hZHMgY2FuIGNhdXNlIGphbmtzLCBzbyB3ZSByZWR1Y2VcclxuICAgICAgICAvLyAgIHRoZSBtYXhpbXVtIG51bWJlciBvZiBsb2FkcyBwZXIgZnJhbWUgYW5kIGxpbWl0IHRoZSBudW1iZXIgb2YgcGFyYWxsZWxcclxuICAgICAgICAvLyAgIHRpbGUgbG9hZHMgdG8gcmVtYWluIHJlYWN0aXZlIHRvIHZpZXcgY2hhbmdlcyBhbmQgdG8gcmVkdWNlIHRoZSBjaGFuY2Ugb2ZcclxuICAgICAgICAvLyAgIGxvYWRpbmcgdGlsZXMgdGhhdCB3aWxsIHF1aWNrbHkgZGlzYXBwZWFyIGZyb20gdmlldy5cclxuICAgICAgICBsZXQgdGlsZVF1ZXVlID0gdGhpcy50aWxlUXVldWVfO1xyXG4gICAgICAgIGlmICghdGlsZVF1ZXVlLmlzRW1wdHkoKSkge1xyXG4gICAgICAgICAgICBsZXQgbWF4VG90YWxMb2FkaW5nID0gMTY7XHJcbiAgICAgICAgICAgIGxldCBtYXhOZXdMb2FkcyA9IG1heFRvdGFsTG9hZGluZztcclxuICAgICAgICAgICAgaWYgKGZyYW1lU3RhdGUpIHtcclxuICAgICAgICAgICAgICAgIGxldCBoaW50cyA9IGZyYW1lU3RhdGUudmlld0hpbnRzO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNoZWNrQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2FkVGlsZXNXaGlsZUludGVyYWN0aW5nXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrQm94KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgKDxhbnk+Y2hlY2tCb3gpLmNoZWNrZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhpbnRzWyg8YW55Pm9sKS5WaWV3SGludC5BTklNQVRJTkddKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heFRvdGFsTG9hZGluZyA9ICg8YW55PmNoZWNrQm94KS5jaGVja2VkID8gOCA6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heE5ld0xvYWRzID0gMjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhpbnRzWyg8YW55Pm9sKS5WaWV3SGludC5JTlRFUkFDVElOR10pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4VG90YWxMb2FkaW5nID0gKDxhbnk+Y2hlY2tCb3gpLmNoZWNrZWQgPyA4IDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4TmV3TG9hZHMgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChoaW50c1soPGFueT5vbCkuVmlld0hpbnQuQU5JTUFUSU5HXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhUb3RhbExvYWRpbmcgPSB0aGlzLmxvYWRUaWxlc1doaWxlQW5pbWF0aW5nXyA/IDggOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhOZXdMb2FkcyA9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChoaW50c1soPGFueT5vbCkuVmlld0hpbnQuSU5URVJBQ1RJTkddKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heFRvdGFsTG9hZGluZyA9IHRoaXMubG9hZFRpbGVzV2hpbGVJbnRlcmFjdGluZ18gPyA4IDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4TmV3TG9hZHMgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRaID0gdGlsZVF1ZXVlLmVsZW1lbnRzX1swXVswXS50aWxlQ29vcmRbMF07XHJcbiAgICAgICAgICAgIGlmICh0aWxlUXVldWUuZ2V0VGlsZXNMb2FkaW5nKCkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGlsZVF1ZXVlLnRpbGVzTG9hZGluZ0tleXNfKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRaICE9PSB0aWxlUXVldWUudGlsZXNMb2FkaW5nS2V5c19ba2V5XS50aWxlQ29vcmRbMF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNvdXJjZUtleSA9IHRpbGVRdWV1ZS50aWxlc0xvYWRpbmdLZXlzX1trZXldLnRpbGVDb29yZC5qb2luKFwiL1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGlsZVF1ZXVlLnRpbGVzTG9hZGluZ0tleXNfW2tleV0uZGlzcG9zZUludGVybmFsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4IGluIHRoaXMucmVuZGVyZXJfLmxheWVyUmVuZGVyZXJzXykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucmVuZGVyZXJfLmxheWVyUmVuZGVyZXJzX1tpbmRleF0ubGF5ZXJfICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5yZW5kZXJlcl8ubGF5ZXJSZW5kZXJlcnNfW2luZGV4XS5sYXllcl8udmFsdWVzXy5zb3VyY2UudGlsZUNhY2hlLmVudHJpZXNfW3NvdXJjZUtleV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRpbGVRdWV1ZS50aWxlc0xvYWRpbmdLZXlzX1trZXldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAtLXRpbGVRdWV1ZS50aWxlc0xvYWRpbmdfO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRpbGVRdWV1ZS5nZXRUaWxlc0xvYWRpbmcoKSA8IG1heFRvdGFsTG9hZGluZykge1xyXG4gICAgICAgICAgICAgICAgdGlsZVF1ZXVlLnJlcHJpb3JpdGl6ZSgpOyAvLyBGSVhNRSBvbmx5IGNhbGwgaWYgdmlldyBoYXMgY2hhbmdlZFxyXG4gICAgICAgICAgICAgICAgdGlsZVF1ZXVlLmxvYWRNb3JlVGlsZXMobWF4VG90YWxMb2FkaW5nLCBtYXhOZXdMb2Fkcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBwb3N0UmVuZGVyRnVuY3Rpb25zID0gdGhpcy5wb3N0UmVuZGVyRnVuY3Rpb25zXztcclxuICAgICAgICBsZXQgaSwgaWk7XHJcbiAgICAgICAgZm9yIChpID0gMCwgaWkgPSBwb3N0UmVuZGVyRnVuY3Rpb25zLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcclxuICAgICAgICAgICAgcG9zdFJlbmRlckZ1bmN0aW9uc1tpXSh0aGlzLCBmcmFtZVN0YXRlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcG9zdFJlbmRlckZ1bmN0aW9ucy5sZW5ndGggPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2FkU3R5bGVKc29uKHN0eWxlSnNvbjogYW55KSB7XHJcbiAgICAgICAgdGhpcy5zdHlsZUpzb25DYWNoZS5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMudmVyc2lvbiA9IHN0eWxlSnNvbltcInZlcnNpb25cIl07XHJcbiAgICAgICAgdGhpcy5vd25lciA9IHN0eWxlSnNvbltcIm93bmVyXCJdO1xyXG4gICAgICAgIHRoaXMuZGF0ZVRpbWUgPSBzdHlsZUpzb25bXCJkYXRlVGltZVwiXTtcclxuICAgICAgICB0aGlzLnZhcmlhYmxlcyA9IHRoaXMuZ2V0VmFyaWFibGVzKHN0eWxlSnNvbltcInZhcmlhYmxlc1wiXSk7XHJcblxyXG4gICAgICAgIHRoaXMucmVwbGFjZVZhcmlhYmxlcyhzdHlsZUpzb24sIHRoaXMudmFyaWFibGVzKTtcclxuXHJcbiAgICAgICAgbGV0IGdlb1NvdXJjZXMgPSB7fTtcclxuICAgICAgICBmb3IgKGxldCBzb3VyY2VKc29uIG9mIHN0eWxlSnNvbltcInNvdXJjZXNcIl0pIHtcclxuICAgICAgICAgICAgZ2VvU291cmNlc1tzb3VyY2VKc29uW1wiaWRcIl1dID0gdGhpcy5jcmVhdGVWZWN0b3JUaWxlU291cmNlKHNvdXJjZUpzb24pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgbGF5ZXJKc29uIG9mIHN0eWxlSnNvbltcImxheWVyc1wiXSkge1xyXG4gICAgICAgICAgICB0aGlzLmFkZExheWVyKHRoaXMuY3JlYXRlVmVjdG9yVGlsZUxheWVyKGxheWVySnNvbiwgZ2VvU291cmNlcywgc3R5bGVKc29uW1wic3R5bGVzXCJdKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB0aWxlR3JpZCA9IG5ldyBvbC5sYXllci5UaWxlKHtcclxuICAgICAgICAgICAgc291cmNlOiBuZXcgb2wuc291cmNlLlRpbGVEZWJ1Zyh7XHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0aW9uOiBcIkVQU0c6Mzg1N1wiLFxyXG4gICAgICAgICAgICAgICAgdGlsZUdyaWQ6IHRoaXMuY3JlYXRlVmVjdG9yVGlsZUdyaWQoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIHRoaXMuYWRkTGF5ZXIodGlsZUdyaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBjcmVhdGVWZWN0b3JUaWxlU291cmNlKHNvdXJjZUpzb24pIHtcclxuICAgICAgICBpZiAoc291cmNlSnNvbltcInR5cGVcIl0gPT09IFwiTVZUXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBHZW9WZWN0b3JUaWxlU291cmNlKHtcclxuICAgICAgICAgICAgICAgIHRpbGVDbGFzczogPGFueT5HZW9WZWN0b3JUaWxlLFxyXG4gICAgICAgICAgICAgICAgdXJsOiBzb3VyY2VKc29uW1widXJsXCJdLFxyXG4gICAgICAgICAgICAgICAgZm9ybWF0OiB0aGlzLmdldFZlY3RvclNvdXJjZUZvcm1hdCgpLFxyXG4gICAgICAgICAgICAgICAgcHJvamVjdGlvbjogXCJFUFNHOjM4NTdcIixcclxuICAgICAgICAgICAgICAgIHRpbGVHcmlkOiB0aGlzLmNyZWF0ZVZlY3RvclRpbGVHcmlkKCksXHJcbiAgICAgICAgICAgICAgICBjYWNoZVNpemU6IDEyOFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGdldFZlY3RvclNvdXJjZUZvcm1hdCgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEdlb01WVEZvcm1hdCh0aGlzLnN0eWxlSnNvbkNhY2hlLCB7IG1pbmltYWxpc3Q6IGZhbHNlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBjcmVhdGVWZWN0b3JUaWxlR3JpZCgpOiBvbC50aWxlZ3JpZC5UaWxlR3JpZCB7XHJcbiAgICAgICAgcmV0dXJuIG9sLnRpbGVncmlkLmNyZWF0ZVhZWih7IHRpbGVTaXplOiA1MTIsIG1heFpvb206IDIyIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBjcmVhdGVWZWN0b3JUaWxlTGF5ZXIobGF5ZXJKc29uLCBnZW9Tb3VyY2VzLCBzdHlsZUpzb25zKSB7XHJcbiAgICAgICAgbGV0IHNvdXJjZSA9IGdlb1NvdXJjZXNbbGF5ZXJKc29uW1wic291cmNlXCJdXTtcclxuXHJcbiAgICAgICAgbGV0IHZlY3RvclRpbGVMYXllciA9IG5ldyBXb3JsZFN0cmVldFZlY3RvclRpbGVMYXllcig8YW55PntcclxuICAgICAgICAgICAgcmVuZGVyT3JkZXI6IG51bGwsXHJcbiAgICAgICAgICAgIHNvdXJjZTogc291cmNlLFxyXG4gICAgICAgICAgICBkZWNsdXR0ZXI6IHRydWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgKDxhbnk+dmVjdG9yVGlsZUxheWVyKVtcImlkXCJdID0gbGF5ZXJKc29uW1wiaWRcIl07XHJcblxyXG4gICAgICAgIGxldCBzdHlsZUlkcyA9IGxheWVySnNvbltcInN0eWxlc1wiXTtcclxuICAgICAgICBsZXQgdmlldyA9IHRoaXMuZ2V0VmlldygpO1xyXG4gICAgICAgIGxldCBtaW5ab29tID0gdmlldy5nZXRNaW5ab29tKCk7XHJcbiAgICAgICAgbGV0IG1heFpvb20gPSB2aWV3LmdldE1heFpvb20oKTtcclxuICAgICAgICBsZXQgbGF5ZXJOYW1lID0gc291cmNlLmdldEdlb0Zvcm1hdCgpLmdldExheWVyTmFtZSgpO1xyXG5cclxuICAgICAgICBsZXQgc3R5bGVJZEluZGV4ID0gMDtcclxuICAgICAgICBmb3IgKGxldCBzdHlsZUlkIG9mIHN0eWxlSWRzKSB7XHJcbiAgICAgICAgICAgIGxldCBzdHlsZUpzb24gPSBzdHlsZUpzb25zLmZpbmQoKHMpID0+IHMuaWQgPT09IHN0eWxlSWQpO1xyXG4gICAgICAgICAgICBpZiAoc3R5bGVKc29uKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IG5ldyBTdHlsZUpzb25DYWNoZUl0ZW0oc3R5bGVKc29uLCBtaW5ab29tLCBtYXhab29tLCBsYXllck5hbWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHpvb20gPSBpdGVtLm1pblpvb207IHpvb20gPD0gaXRlbS5tYXhab29tOyB6b29tKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdHJlZU5vZGUgPSBuZXcgVHJlZU5vZGU8U3R5bGVKc29uQ2FjaGVJdGVtPihpdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUNoaWxkcmVuTm9kZSh0cmVlTm9kZSwgaXRlbSwgem9vbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdHlsZUpzb25DYWNoZS5hZGQoem9vbSwgbGF5ZXJKc29uW1wiaWRcIl0sIGl0ZW0uZGF0YUxheWVyTmFtZSwgbmV3IFRyZWUodHJlZU5vZGUsIHN0eWxlSWRJbmRleCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHN0eWxlSWRJbmRleCArPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdmVjdG9yVGlsZUxheWVyO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUNoaWxkcmVuTm9kZShjdXJyZW50Tm9kZTogVHJlZU5vZGU8U3R5bGVKc29uQ2FjaGVJdGVtPiwgaXRlbTogU3R5bGVKc29uQ2FjaGVJdGVtLCB6b29tOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoaXRlbS5zdWJTdHlsZUNhY2hlSXRlbXMgJiYgaXRlbS5zdWJTdHlsZUNhY2hlSXRlbXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgaWkgPSBpdGVtLnN1YlN0eWxlQ2FjaGVJdGVtcy5sZW5ndGg7IGkgPCBpaTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3ViU3R5bGVJdGVtID0gaXRlbS5zdWJTdHlsZUNhY2hlSXRlbXNbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAoem9vbSA+PSBzdWJTdHlsZUl0ZW0ubWluWm9vbSAmJiB6b29tIDw9IHN1YlN0eWxlSXRlbS5tYXhab29tKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBuZXcgVHJlZU5vZGU8U3R5bGVKc29uQ2FjaGVJdGVtPihzdWJTdHlsZUl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnROb2RlLmNoaWxkcmVuLnB1c2gobm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVDaGlsZHJlbk5vZGUobm9kZSwgc3ViU3R5bGVJdGVtLCB6b29tKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRWYXJpYWJsZXModmFyaWFibGVzSnNvbjogYW55KSB7XHJcbiAgICAgICAgbGV0IHZhcmlhYmxlcyA9IHt9O1xyXG4gICAgICAgIGZvciAobGV0IHZhcmlhYmxlc05hbWUgaW4gdmFyaWFibGVzSnNvbikge1xyXG4gICAgICAgICAgICBpZiAodmFyaWFibGVzTmFtZS5pbmRleE9mKFwiLFwiKSA+IDApIHtcclxuICAgICAgICAgICAgICAgIGxldCB2YXJpYWJsZU5hbWVzID0gdmFyaWFibGVzTmFtZS5zcGxpdChcIixcIik7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhcmlhYmxlTmFtZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXNbdmFyaWFibGVOYW1lc1tpXV0gPSB2YXJpYWJsZXNKc29uW3ZhcmlhYmxlc05hbWVdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzW3ZhcmlhYmxlc05hbWVdID0gdmFyaWFibGVzSnNvblt2YXJpYWJsZXNOYW1lXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHZhcmlhYmxlcztcclxuICAgIH1cclxuXHJcbiAgICByZXBsYWNlVmFyaWFibGVzKHN0eWxlSnNvbjogYW55LCB2YXJpYWJsZXM6IGFueSkge1xyXG4gICAgICAgIGZvciAobGV0IHByb3BlcnR5TmFtZSBpbiBzdHlsZUpzb24pIHtcclxuICAgICAgICAgICAgbGV0IHByb3BlcnR5ID0gc3R5bGVKc29uW3Byb3BlcnR5TmFtZV07XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcHJvcGVydHkgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVwbGFjZVZhcmlhYmxlcyhwcm9wZXJ0eSwgdmFyaWFibGVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgcHJvcGVydHkgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgIGxldCBrZXlXb3JkSW5kZXggPSBwcm9wZXJ0eS5pbmRleE9mKFwiQFwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChrZXlXb3JkSW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBsaW5lcyA9IHByb3BlcnR5LnNwbGl0KFwiIFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobGluZXMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGVtcFdvcmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHRzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBXb3JkID0gbGluZXNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGVtcFdvcmQuc3RhcnRzV2l0aChcIkBcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wV29yZCA9IHZhcmlhYmxlc1t0ZW1wV29yZF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2godGVtcFdvcmQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlSnNvbltwcm9wZXJ0eU5hbWVdID0gcmVzdWx0cy5qb2luKFwiIFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlSnNvbltwcm9wZXJ0eU5hbWVdID0gdmFyaWFibGVzW2xpbmVzWzBdXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVnaXN0ZXJHZW9WZWN0b3IoKSB7XHJcbiAgICAgICAgKDxhbnk+b2wpLkxheWVyVHlwZVtcIkdFT1ZFQ1RPUlRJTEVcIl0gPSBcIkdFT1ZFQ1RPUlRJTEVcIjtcclxuICAgICAgICAoPGFueT5vbCkucGx1Z2lucy5yZWdpc3RlcigoPGFueT5vbCkuUGx1Z2luVHlwZS5MQVlFUl9SRU5ERVJFUiwgR2VvVmVjdG9yVGlsZUxheWVyUmVuZGVyKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ2VvTWFwLnRzIiwiaW1wb3J0IHsgVXRpbCB9IGZyb20gXCIuLi91dGlsXCI7XHJcbmV4cG9ydCBjbGFzcyBHZW9WZWN0b3JUaWxlU291cmNlIGV4dGVuZHMgKG9sLnNvdXJjZS5WZWN0b3JUaWxlIGFzIHsgbmV3KHA6IG9seC5zb3VyY2UuVmVjdG9yVGlsZU9wdGlvbnMpOiBhbnk7IH0pIHtcclxuICAgIGdlb0Zvcm1hdDogYW55O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgICAgICBzdXBlcihvcHRpb25zKTtcclxuICAgICAgICB0aGlzLmdlb0Zvcm1hdCA9IG9wdGlvbnMuZm9ybWF0O1xyXG4gICAgICAgIHRoaXMudGlsZUxvYWRGdW5jdGlvbiA9IEdlb1ZlY3RvclRpbGVTb3VyY2UudmVjdG9yVGlsZUxvYWRGdW5jdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRHZW9Gb3JtYXQoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZW9Gb3JtYXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyB2ZWN0b3JUaWxlTG9hZEZ1bmN0aW9uKHRpbGU6IG9sLlZlY3RvclRpbGUsIHVybDogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IGxvYWRlciA9IEdlb1ZlY3RvclRpbGVTb3VyY2UubG9hZEZlYXR1cmVzWGhyKFxyXG4gICAgICAgICAgICB1cmwsXHJcbiAgICAgICAgICAgIHRpbGUuZ2V0Rm9ybWF0KCksXHJcbiAgICAgICAgICAgICg8YW55PnRpbGUpLm9uTG9hZC5iaW5kKHRpbGUpLFxyXG4gICAgICAgICAgICAoPGFueT50aWxlKS5vbkVycm9yLmJpbmQodGlsZSlcclxuICAgICAgICApO1xyXG4gICAgICAgIHRpbGUuc2V0TG9hZGVyKGxvYWRlcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBsb2FkRmVhdHVyZXNYaHIodXJsOiBzdHJpbmcsIGZvcm1hdDogYW55LCBzdWNjZXNzOiBhbnksIGZhaWx1cmU6IGFueSkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChleHRlbnQ6IGFueSwgcmVzb2x1dGlvbjogYW55LCBwcm9qZWN0aW9uOiBhbnkpIHtcclxuICAgICAgICAgICAgICAgIGxldCBpbnRlcm5hbEZhaWx1cmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGV4dGVuc2lvbiA9IHVybC5zdWJzdHJpbmcodXJsLmxhc3RJbmRleE9mKFwiLlwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBhcnRzID0gdXJsLnN1YnN0cmluZygwLCB1cmwubGFzdEluZGV4T2YoXCIuXCIpKS5zcGxpdChcIi9cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHkgPSArcGFydHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHggPSArcGFydHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHogPSArcGFydHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHogPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybCA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0cy5qb2luKFwiL1wiKSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi9cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoeiAtIDEpICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiL1wiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hdGguZmxvb3IoeCAvIDIpICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiL1wiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hdGguZmxvb3IoeSAvIDIpICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dGVuc2lvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzcy5jYWxsKHRoaXMsIHogLSAxLCBNYXRoLmZsb29yKHggLyAyKSwgTWF0aC5mbG9vcih5IC8gMiksIG9yaWdpbmFsWik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmFpbHVyZS5jYWxsKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHByb2Nlc3MgPSBmdW5jdGlvbiAoeiwgeCwgeSwgb3JpZ2luYWxab29tKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHogPiBmb3JtYXQuZGF0YU1heFpvb20pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0IGluc3RhbmNlb2Ygb2wuZm9ybWF0Lk1WVCA/IGludGVybmFsRmFpbHVyZS5jYWxsKHRoaXMpIDogZmFpbHVyZS5jYWxsKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGhhc1JlcXVlc3RlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoeiA9PT0gZm9ybWF0LmRhdGFNYXhab29tKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2FsbGJhY2sgPSBmdW5jdGlvbiAodGlsZSwgc3VjY2Vzc0Z1bmN0aW9uLCBmZWF0dXJlcywgaW5zdHJ1Y3RzLCBzb3VyY2VQcm9qZWN0aW9uLCBsYXN0RXh0ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9yaWdpbmFsQ29vcmQgPSB0aWxlLnRpbGVDb29yZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoeikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWxlLnRpbGVDb29yZCA9IFt6LCB4LCAteSAtIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzRnVuY3Rpb24uY2FsbCh0aWxlLCBbZmVhdHVyZXMsIGluc3RydWN0c10sIHNvdXJjZVByb2plY3Rpb24sIGxhc3RFeHRlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc1JlcXVlc3RlZCA9IGZvcm1hdC50cnlMb2FkVGlsZUZyb21DYWNoZU9yUmVnb3N0ZXJMb2FkRXZlbnQoW3osIHgsIC15IC0gMV0sIG9yaWdpbmFsWm9vbSwgeyB0aWxlOiB0aGlzLCBzdWNjZXNzRnVuY3Rpb246IHN1Y2Nlc3MsIGNhbGxiYWNrOiBjYWxsYmFjayB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaGFzUmVxdWVzdGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9yaWdpbmFsQ29vcmQgPSB0aGlzLnRpbGVDb29yZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc291cmNlID0gZm9ybWF0LmdldENhY2hlZFNvdXJjZShbeiwgeCwgLXkgLSAxXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNvdXJjZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQuYWRkU291cmNlVG9DYWNoZShzb3VyY2UsIG9yaWdpbmFsWm9vbSwgeyBmZWF0dXJlUHJvamVjdGlvbjogcHJvamVjdGlvbiwgb3JpZ2luYWxDb29yZDogb3JpZ2luYWxDb29yZCwgdGlsZUNvb3JkOiBbeiwgeCwgLXkgLSAxXSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzUmVxdWVzdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFoYXNSZXF1ZXN0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpc0RhdGFNYXhab29tID0geiA9PT0gZm9ybWF0LmRhdGFNYXhab29tO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLm9wZW4oXCJHRVRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlb2YgdXJsID09PSBcImZ1bmN0aW9uXCIgPyB1cmwoZXh0ZW50LCByZXNvbHV0aW9uLCBwcm9qZWN0aW9uKSA6IHVybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3JtYXQuZ2V0VHlwZSgpID09PSAoPGFueT5vbCkuZm9ybWF0LkZvcm1hdFR5cGUuQVJSQVlfQlVGRkVSKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9IFwiYXJyYXlidWZmZXJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24gKGV2ZW50OiBhbnkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXhoci5zdGF0dXMgfHwgeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDMwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdHlwZSA9IGZvcm1hdC5nZXRUeXBlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qKiBAdHlwZSB7RG9jdW1lbnR8Tm9kZXxPYmplY3R8c3RyaW5nfHVuZGVmaW5lZH0gKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNvdXJjZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICg8YW55Pm9sKS5mb3JtYXQuRm9ybWF0VHlwZS5KU09OIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlID09PSAoPGFueT5vbCkuZm9ybWF0LkZvcm1hdFR5cGUuVEVYVCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlID0geGhyLnJlc3BvbnNlVGV4dDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAoPGFueT5vbCkuZm9ybWF0LkZvcm1hdFR5cGUuWE1MKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2UgPSB4aHIucmVzcG9uc2VYTUw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNvdXJjZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZSA9ICg8YW55Pm9sKS54bWwucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gKDxhbnk+b2wpLmZvcm1hdC5Gb3JtYXRUeXBlLkFSUkFZX0JVRkZFUikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlID0gLyoqIEB0eXBlIHtBcnJheUJ1ZmZlcn0gKi8gKHhoci5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNvdXJjZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9yaWdpbmFsQ29vcmQgPSB0aGlzLnRpbGVDb29yZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0RhdGFNYXhab29tKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3VjY2Vzcy5jYWxsKHRoaXMsIGZvcm1hdC5yZWFkRmVhdHVyZXNBbmRDcmVhdGVJbnN0cnVjdHMoc291cmNlLCBvcmlnaW5hbFpvb20sIHsgZmVhdHVyZVByb2plY3Rpb246IHByb2plY3Rpb24sIG9yaWdpbmFsQ29vcmQ6IG9yaWdpbmFsQ29vcmQsIHRpbGVjb29yZDogdGhpcy50aWxlQ29vcmQgfSksIGZvcm1hdC5yZWFkUHJvamVjdGlvbihzb3VyY2UpLCBmb3JtYXQuZ2V0TGFzdEV4dGVudCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQuYWRkU291cmNlVG9DYWNoZShzb3VyY2UsIG9yaWdpbmFsWm9vbSwgeyBmZWF0dXJlUHJvamVjdGlvbjogcHJvamVjdGlvbiwgb3JpZ2luYWxDb29yZDogb3JpZ2luYWxDb29yZCwgdGlsZUNvb3JkOiBbeiwgeCwgLXkgLSAxXSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MuY2FsbCh0aGlzLCBmb3JtYXQucmVhZEZlYXR1cmVzQW5kQ3JlYXRlSW5zdHJ1Y3RzKHNvdXJjZSwgb3JpZ2luYWxab29tLCB7IGZlYXR1cmVQcm9qZWN0aW9uOiBwcm9qZWN0aW9uLCBvcmlnaW5hbENvb3JkOiBvcmlnaW5hbENvb3JkLCB0aWxlY29vcmQ6IHRoaXMudGlsZUNvb3JkIH0pLCBmb3JtYXQucmVhZFByb2plY3Rpb24oc291cmNlKSwgZm9ybWF0LmdldExhc3RFeHRlbnQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQgaW5zdGFuY2VvZiBvbC5mb3JtYXQuTVZUID8gaW50ZXJuYWxGYWlsdXJlLmNhbGwodGhpcykgOiBmYWlsdXJlLmNhbGwodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWlsdXJlLmNhbGwodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFpbHVyZS5jYWxsKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tcInhoclwiXSA9IHhocjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhoci5zZW5kKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgbGV0IHBhcnRzID0gdXJsLnN1YnN0cmluZygwLCB1cmwubGFzdEluZGV4T2YoXCIuXCIpKS5zcGxpdChcIi9cIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgeSA9ICtwYXJ0cy5wb3AoKTtcclxuICAgICAgICAgICAgICAgIGxldCB4ID0gK3BhcnRzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHogPSArcGFydHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgb3JpZ2luYWxaID0gejtcclxuICAgICAgICAgICAgICAgIHByb2Nlc3MuY2FsbCh0aGlzLCB6LCB4LCB5LCBvcmlnaW5hbFopO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zb3VyY2UvZ2VvVmVjdG9yVGlsZVNvdXJjZS50cyIsImV4cG9ydCBjbGFzcyBHZW9WZWN0b3JUaWxlIGV4dGVuZHMgKG9sLlZlY3RvclRpbGUgYXMgeyBuZXcodGlsZUNvb3JkOiBvbC5UaWxlQ29vcmQsIHN0YXRlOiBvbC5UaWxlLlN0YXRlLCBzcmM6IHN0cmluZywgZm9ybWF0OiBvbC5mb3JtYXQuRmVhdHVyZSwgdGlsZUxvYWRGdW5jdGlvbjogb2wuVGlsZUxvYWRGdW5jdGlvblR5cGUpOiBhbnk7IH0pIHtcclxuXHJcbiAgICBpbnN0cnVjdHM6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0aWxlQ29vcmQ6IG9sLlRpbGVDb29yZCwgc3RhdGU6IG9sLlRpbGUuU3RhdGUsIHNyYzogc3RyaW5nLCBmb3JtYXQ6IG9sLmZvcm1hdC5GZWF0dXJlLCB0aWxlTG9hZEZ1bmN0aW9uOiBvbC5UaWxlTG9hZEZ1bmN0aW9uVHlwZSkge1xyXG4gICAgICAgIHN1cGVyKHRpbGVDb29yZCwgc3RhdGUsIHNyYywgZm9ybWF0LCB0aWxlTG9hZEZ1bmN0aW9uKTtcclxuICAgICAgICB0aGlzLmRpc3Bvc2VJbnRlcm5hbCA9IHRoaXMuZGlzcG9zZUludGVybmFsQ3VzdG9tO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkaXNwb3NlSW50ZXJuYWxDdXN0b20oKSB7XHJcbiAgICAgICAgdGhpcy5mZWF0dXJlc18gPSBudWxsO1xyXG4gICAgICAgIHRoaXMucmVwbGF5R3JvdXBzXyA9IHt9O1xyXG4gICAgICAgIC8vIHRoaXMuc3RhdGUgPSBvbC5UaWxlU3RhdGUuQUJPUlQ7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9ICg8YW55Pm9sKS5UaWxlU3RhdGUuSURMRTtcclxuICAgICAgICB0aGlzLmNoYW5nZWQoKTtcclxuICAgICAgICBpZiAodGhpc1tcInhoclwiXSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpc1tcInhoclwiXS5hYm9ydCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAoPGFueT5vbC5UaWxlLnByb3RvdHlwZSkuZGlzcG9zZUludGVybmFsLmNhbGwodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uTG9hZChmZWF0dXJlc0FuZEluc3RydWN0cywgZGF0YVByb2plY3Rpb24sIGV4dGVudCkge1xyXG4gICAgICAgIHRoaXMuc2V0UHJvamVjdGlvbihkYXRhUHJvamVjdGlvbik7XHJcbiAgICAgICAgdGhpcy5zZXRSZW5kZXJGZWF0dXJlSW5zdHJ1Y3RzKGZlYXR1cmVzQW5kSW5zdHJ1Y3RzWzFdKTtcclxuICAgICAgICB0aGlzLnNldEZlYXR1cmVzKGZlYXR1cmVzQW5kSW5zdHJ1Y3RzWzBdKTtcclxuICAgICAgICB0aGlzLnNldEV4dGVudChleHRlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFJlbmRlckZlYXR1cmVJbnN0cnVjdHMoaW5zdHJ1Y3RzKSB7XHJcbiAgICAgICAgdGhpcy5pbnN0cnVjdHMgPSBpbnN0cnVjdHM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UmVuZGVyRmVhdHVyZUluc3RydWN0cyhpbnN0cnVjdHMpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0cnVjdHM7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ2VvVmVjdG9yVGlsZS50cyIsImV4cG9ydCBjbGFzcyBHZW9NVlRGb3JtYXQgZXh0ZW5kcyAob2wuZm9ybWF0Lk1WVCBhcyB7IG5ldyhwOiBvbHguZm9ybWF0Lk1WVE9wdGlvbnMpOiBhbnk7IH0pIHtcclxuICAgIHN0eWxlSnNvbkNhY2hlOiBhbnk7XHJcbiAgICBsYXllck5hbWU6IHN0cmluZztcclxuICAgIGRhdGFNYXhab29tOiBudW1iZXI7XHJcbiAgICBkYXRhTWF4Wm9vbUNhY2hlOiBhbnk7XHJcbiAgICByZWdpc3RlcmVkVGlsZUluZm86IGFueTtcclxuXHJcbiAgICBscnVDYWNoZTogYW55O1xyXG4gICAgc291cmNlQ2FjaGU6IGFueTtcclxuXHJcbiAgICBtaW5pbWFsaXN0OiBib29sZWFuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHN0eWxlSlNvbkNhY2hlOiBhbnksIG9wdGlvbnM6IGFueSkge1xyXG4gICAgICAgIG9wdGlvbnMubGF5ZXJOYW1lID0gb3B0aW9ucy5sYXllck5hbWUgPyBvcHRpb25zLmxheWVyTmFtZSA6IFwibGF5ZXJOYW1lXCI7XHJcbiAgICAgICAgc3VwZXIob3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5taW5pbWFsaXN0ID0gb3B0aW9ucy5taW5pbWFsaXN0O1xyXG4gICAgICAgIHRoaXMuZGF0YU1heFpvb20gPSBvcHRpb25zLmRhdGFNYXhab29tID8gb3B0aW9ucy5kYXRhTWF4Wm9vbSA6IDE0O1xyXG4gICAgICAgIHRoaXMubGF5ZXJOYW1lID0gb3B0aW9ucy5sYXllck5hbWU7XHJcbiAgICAgICAgdGhpcy5zdHlsZUpzb25DYWNoZSA9IHN0eWxlSlNvbkNhY2hlO1xyXG4gICAgICAgIHRoaXMuZGF0YU1heFpvb21DYWNoZSA9IHt9O1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJlZFRpbGVJbmZvID0ge307XHJcbiAgICAgICAgdGhpcy5scnVDYWNoZSA9IG5ldyAoPGFueT5vbCkuc3RydWN0cy5MUlVDYWNoZSgxNSk7XHJcbiAgICAgICAgdGhpcy5zb3VyY2VDYWNoZSA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGdldExheWVyTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxheWVyTmFtZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZ2V0Q2FjaGVkU291cmNlKHRpbGVDb29yZDogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlQ2FjaGVbdGlsZUNvb3JkXTtcclxuICAgIH1cclxuXHJcbiAgICB0cnlMb2FkVGlsZUZyb21DYWNoZU9yUmVnb3N0ZXJMb2FkRXZlbnQodGlsZUNvb3JkOiBhbnksIG9yaWdpbmFsWm9vbSwgY2FjaGVUaWxlSW5mbzogYW55KSB7XHJcbiAgICAgICAgbGV0IGhhc1JlcXVlc3RlZCA9IHRydWU7XHJcbiAgICAgICAgbGV0IHRpbGVDb29yZEtleSA9IHRpbGVDb29yZC5qb2luKFwiLFwiKSArIFwiLFwiICsgb3JpZ2luYWxab29tO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5scnVDYWNoZS5jb250YWluc0tleSh0aWxlQ29vcmRLZXkpKSB7XHJcbiAgICAgICAgICAgIGxldCBvVGlsZSA9IHRoaXMubHJ1Q2FjaGUuZ2V0KHRpbGVDb29yZEtleSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FjaGVkVGlsZUNhbGxiYWNrKG9UaWxlLCBbY2FjaGVUaWxlSW5mb10pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucmVnaXN0ZXJlZFRpbGVJbmZvW3RpbGVDb29yZEtleV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWdpc3RlcmVkVGlsZUluZm9bdGlsZUNvb3JkS2V5XSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgaGFzUmVxdWVzdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJlZFRpbGVJbmZvW3RpbGVDb29yZEtleV0ucHVzaChjYWNoZVRpbGVJbmZvKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGhhc1JlcXVlc3RlZDtcclxuICAgIH1cclxuXHJcbiAgICBhZGRTb3VyY2VUb0NhY2hlKHNvdXJjZTogQXJyYXlCdWZmZXIsIHpvb206IG51bWJlciwgb3B0aW9uczogYW55KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc291cmNlQ2FjaGVbb3B0aW9ucy50aWxlQ29vcmRdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zb3VyY2VDYWNoZVtvcHRpb25zLnRpbGVDb29yZF0gPSBzb3VyY2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgaW5zdHJ1Y3RzVHJlZSA9IHRoaXMucmVhZEZlYXR1cmVzQW5kQ3JlYXRlSW5zdHJ1Y3RUcmVlcyhzb3VyY2UsIHpvb20sIG9wdGlvbnMpO1xyXG5cclxuICAgICAgICBsZXQgaW5zdHJ1Y3RzID0gdGhpcy5nZXRJbnN0cnVjdHMoaW5zdHJ1Y3RzVHJlZSk7XHJcblxyXG4gICAgICAgIGxldCBzdWJUaWxlSW5zdHJ1Y3RDYWNoZXMgPSB0aGlzLmNyZWF0ZVN1YlRpbGVJbnN0cnVjdENhY2hlcyhpbnN0cnVjdHMsIG9wdGlvbnMpO1xyXG5cclxuICAgICAgICBsZXQgc291cmNlUHJvamVjdCA9IHRoaXMucmVhZFByb2plY3Rpb24oc291cmNlKTtcclxuICAgICAgICBsZXQgdGlsZUNvb3JkS2V5ID0gb3B0aW9ucy50aWxlQ29vcmQuam9pbihcIixcIikgKyBcIixcIiArIHpvb207XHJcblxyXG4gICAgICAgIGxldCBsYXN0RXh0ZW50ID0gdGhpcy5nZXRMYXN0RXh0ZW50KCk7XHJcblxyXG4gICAgICAgIGxldCBvVGlsZSA9IHsgc3ViVGlsZUluc3RydWN0Q2FjaGVzOiBzdWJUaWxlSW5zdHJ1Y3RDYWNoZXMsIHNvdXJjZVByb2plY3Q6IHNvdXJjZVByb2plY3QsIGxhc3RFeHRlbnQ6IGxhc3RFeHRlbnQgfTtcclxuICAgICAgICB0aGlzLmxydUNhY2hlLnNldCh0aWxlQ29vcmRLZXksIG9UaWxlKTtcclxuXHJcbiAgICAgICAgbGV0IGNhY2hlZFRpbGVJbmZvID0gdGhpcy5yZWdpc3RlcmVkVGlsZUluZm9bdGlsZUNvb3JkS2V5XTtcclxuICAgICAgICBkZWxldGUgdGhpcy5yZWdpc3RlcmVkVGlsZUluZm9bdGlsZUNvb3JkS2V5XTtcclxuXHJcbiAgICAgICAgdGhpcy5jYWNoZWRUaWxlQ2FsbGJhY2sob1RpbGUsIGNhY2hlZFRpbGVJbmZvKTtcclxuICAgIH1cclxuXHJcbiAgICByZWFkRmVhdHVyZXNBbmRDcmVhdGVJbnN0cnVjdFRyZWVzKHNvdXJjZTogQXJyYXlCdWZmZXIsIHpvb206IG51bWJlciwgb3B0aW9uczogYW55KSB7XHJcbiAgICAgICAgbGV0IHBiZiA9IG5ldyAoPGFueT5vbCkuZXh0LlBCRigoc291cmNlKSk7XHJcbiAgICAgICAgbGV0IHBiZkxheWVycyA9IHBiZi5yZWFkRmllbGRzKCg8YW55Pm9sKS5mb3JtYXQuTVZULnBiZlJlYWRlcnNfLmxheWVycywge30pO1xyXG4gICAgICAgIGxldCBmZWF0dXJlcyA9IFtdO1xyXG4gICAgICAgIGxldCBwYmZMYXllcjtcclxuXHJcbiAgICAgICAgbGV0IHpvb21NYXRjaGVkR2VvU3R5bGVzR3JvdXBCeUxheWVySWQgPSB0aGlzLnN0eWxlSnNvbkNhY2hlLmdlb1N0eWxlR3JvdXBCeVpvb21bem9vbV07XHJcbiAgICAgICAgaWYgKCF6b29tTWF0Y2hlZEdlb1N0eWxlc0dyb3VwQnlMYXllcklkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmZWF0dXJlcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBsYXllcklkTWF0Y2hlZEdlb1N0eWxlc0dyb3VwQnlQYmZMYXllck5hbWUgPSB6b29tTWF0Y2hlZEdlb1N0eWxlc0dyb3VwQnlMYXllcklkW1wib3NtX3RleGFzX2xheWVyc1wiXTtcclxuXHJcbiAgICAgICAgaWYgKCFsYXllcklkTWF0Y2hlZEdlb1N0eWxlc0dyb3VwQnlQYmZMYXllck5hbWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZlYXR1cmVzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHBiZkxheWVyTmFtZXNXaXRoR2VvU3R5bGUgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBwYmZMYXllck5hbWUgaW4gbGF5ZXJJZE1hdGNoZWRHZW9TdHlsZXNHcm91cEJ5UGJmTGF5ZXJOYW1lKSB7XHJcbiAgICAgICAgICAgIHBiZkxheWVyTmFtZXNXaXRoR2VvU3R5bGUucHVzaChwYmZMYXllck5hbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGluc3RydWN0c0NhY2hlID0gW107XHJcbiAgICAgICAgbGV0IHRyZWVTdHlsZUZpcnN0Q2FjaGUgPSBbXTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgbmFtZSBpbiBwYmZMYXllcnMpIHtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxheWVyc18gJiYgdGhpcy5sYXllcnNfLmluZGV4T2YobmFtZSkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocGJmTGF5ZXJOYW1lc1dpdGhHZW9TdHlsZS5pbmRleE9mKG5hbWUpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHBiZkxheWVyID0gcGJmTGF5ZXJzW25hbWVdO1xyXG4gICAgICAgICAgICBvcHRpb25zW1wiZXh0ZW50XCJdID0gcGJmTGF5ZXIuZXh0ZW50O1xyXG5cclxuICAgICAgICAgICAgbGV0IGNhY2hlVHJlZXMgPSBsYXllcklkTWF0Y2hlZEdlb1N0eWxlc0dyb3VwQnlQYmZMYXllck5hbWVbbmFtZV07XHJcblxyXG4gICAgICAgICAgICBpZiAoY2FjaGVUcmVlcyAmJiBjYWNoZVRyZWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVwbGFjZUZpbHRlcnNUb0luZGV4T2ZQYmZMYXllcihjYWNoZVRyZWVzLCBwYmZMYXllcik7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYmZMYXllci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByYXdGZWF0dXJlID0gKDxhbnk+b2wuZm9ybWF0Lk1WVCkucmVhZFJhd0ZlYXR1cmVfKHBiZiwgcGJmTGF5ZXIsIGkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBmZWF0dXJlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNhY2hlVHJlZXMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNhY2hlVHJlZSA9IGNhY2hlVHJlZXNbal07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0cmVlSW5kZXggPSBjYWNoZVRyZWUudHJlZUluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5zdHJ1Y3RzQ2FjaGVbdHJlZUluZGV4XSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0cnVjdHNDYWNoZVt0cmVlSW5kZXhdID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmVlU3R5bGVGaXJzdENhY2hlW3RyZWVJbmRleF0gPSBjYWNoZVRyZWUucm9vdC5kYXRhLnN0eWxlRmlyc3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtYXRjaGVkTm9kZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNoZWNrTm9kZU1hdGNoZWQgPSBmdW5jdGlvbiAobm9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN0eWxlSnNvbkNhY2hlSXRlbSA9IG5vZGUuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtYXRjaGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBpaSA9IHN0eWxlSnNvbkNhY2hlSXRlbS5maWx0ZXJzLmxlbmd0aDsgaSA8IGlpOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmlsdGVyID0gc3R5bGVKc29uQ2FjaGVJdGVtLmZpbHRlcnNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFmaWx0ZXIubWF0Y2hPTEZlYXR1cmUocmF3RmVhdHVyZSwgem9vbSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXRjaGVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNlbGVjdE5vZGUgPSBmdW5jdGlvbiAobm9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hlZE5vZGUgPSBub2RlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlVHJlZS50cmF2ZXJzZU5vZGUoY2hlY2tOb2RlTWF0Y2hlZCwgc2VsZWN0Tm9kZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2hlZE5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmZWF0dXJlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZWF0dXJlID0gdGhpcy5jcmVhdGVGZWF0dXJlXyhwYmYsIHJhd0ZlYXR1cmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm1pbmltYWxpc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVhdHVyZS5wcm9wZXJ0aWVzXyA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8vLyBXZSBkb24ndCBuZWVkIGNhY2hlIHRoZSBmZWF0dXJlIGN1cnJlbnRsdVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZlYXR1cmVzLnB1c2goZmVhdHVyZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHppbmRleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYWNoZVRyZWUucm9vdC5kYXRhLnpJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHppbmRleCA9IHJhd0ZlYXR1cmUucHJvcGVydGllc1tjYWNoZVRyZWUucm9vdC5kYXRhLnpJbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVhdHVyZS5wcm9wZXJ0aWVzX1tjYWNoZVRyZWUucm9vdC5kYXRhLnpJbmRleF0gPSB6aW5kZXg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRvZG86UHViaWxjIGEgZnVuY3Rpb246IGdldEZlYXR1cmVaSW5kZXhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6aW5kZXggPSBNYXRoLmFicyh6aW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc05hTih6aW5kZXgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHppbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc05hTih6aW5kZXgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgemluZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnN0cnVjdHNDYWNoZVt0cmVlSW5kZXhdW3ppbmRleF0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RydWN0c0NhY2hlW3RyZWVJbmRleF1bemluZGV4XSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdHJ1Y3RzQ2FjaGVbdHJlZUluZGV4XVt6aW5kZXhdLnB1c2goW2ZlYXR1cmUsIG1hdGNoZWROb2RlXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubWluaW1hbGlzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaGVkTm9kZS5nZW9TdHlsZSAmJiAobWF0Y2hlZE5vZGUuZ2VvU3R5bGUuY29uc3RydWN0b3IubmFtZSA9PT0gXCJHZW9UZXh0U3R5bGVcIiB8fCBtYXRjaGVkTm9kZS5nZW9TdHlsZS5jb25zdHJ1Y3Rvci5uYW1lID09PSBcIkdlb1NoaWVsZFN0eWxlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlYXR1cmUucHJvcGVydGllc19bbWF0Y2hlZE5vZGUuZ2VvU3R5bGUubmFtZV0gPSByYXdGZWF0dXJlLnByb3BlcnRpZXNbbWF0Y2hlZE5vZGUuZ2VvU3R5bGUubmFtZV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaGVkTm9kZS5jaGlsZHJlbkdlb1N0eWxlcyAmJiBtYXRjaGVkTm9kZS5jaGlsZHJlbkdlb1N0eWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF0Y2hlZE5vZGUuY2hpbGRyZW5HZW9TdHlsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlYXR1cmUucHJvcGVydGllc19bbWF0Y2hlZE5vZGUuY2hpbGRyZW5HZW9TdHlsZXNbaV0ubmFtZV0gPSByYXdGZWF0dXJlLnByb3BlcnRpZXNbbWF0Y2hlZE5vZGUuY2hpbGRyZW5HZW9TdHlsZXNbaV0ubmFtZV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVhdHVyZS5leHRlbnRfID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZXh0ZW50XyA9IHBiZkxheWVyID8gWzAsIDAsIHBiZkxheWVyLmV4dGVudCwgcGJmTGF5ZXIuZXh0ZW50XSA6IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpbnN0cnVjdHNDYWNoZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJbnN0cnVjdHMoaW5zdHJ1Y3RzVHJlZSkge1xyXG4gICAgICAgIGxldCBpbnN0cnVjdHMgPSBbXTtcclxuICAgICAgICAvLyB0aGUgdHJlc3MgaW5kZXggbWVhbnMgdGhlIGluZGV4IG9mIFN5bGVJZC5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluc3RydWN0c1RyZWUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGluc3RydWN0c0luT25lVHJlZSA9IGluc3RydWN0c1RyZWVbaV07XHJcblxyXG4gICAgICAgICAgICBpZiAoaW5zdHJ1Y3RzSW5PbmVUcmVlKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGluc3RydWN0c0luT25lVHJlZS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbnN0cnVjdHNJbk9uZVpJbmRleCA9IGluc3RydWN0c0luT25lVHJlZVtqXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluc3RydWN0c0luT25lWkluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjaGlsZHJlbkluc3RydWN0cyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBoID0gMDsgaCA8IGluc3RydWN0c0luT25lWkluZGV4Lmxlbmd0aDsgaCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5zdHJ1Y3QgPSBpbnN0cnVjdHNJbk9uZVpJbmRleFtoXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RydWN0cy5wdXNoKFtpbnN0cnVjdFswXSwgaW5zdHJ1Y3RbMV0uZ2VvU3R5bGVdKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5zdHJ1Y3RbMV0uY2hpbGRyZW5HZW9TdHlsZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IGluc3RydWN0WzFdLmNoaWxkcmVuR2VvU3R5bGVzLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuSW5zdHJ1Y3RzLnB1c2goW2luc3RydWN0WzBdLCBpbnN0cnVjdFsxXS5jaGlsZHJlbkdlb1N0eWxlc1trXV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShpbnN0cnVjdHMsIGNoaWxkcmVuSW5zdHJ1Y3RzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGluc3RydWN0cztcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVTdWJUaWxlSW5zdHJ1Y3RDYWNoZXMoaW5zdHJ1Y3RzLCBvcHRpb25zKSB7XHJcbiAgICAgICAgbGV0IHN1YlRpbGVDYWNoZWRJbnN0cnVjdCA9IHt9O1xyXG5cclxuICAgICAgICBsZXQgb2Zmc2V0WiA9IG9wdGlvbnMub3JpZ2luYWxDb29yZFswXSAtIG9wdGlvbnMudGlsZUNvb3JkWzBdO1xyXG4gICAgICAgIGxldCB0aWxlU2l6ZSA9IG9wdGlvbnMuZXh0ZW50IC8gTWF0aC5wb3coMiwgb2Zmc2V0Wik7XHJcblxyXG4gICAgICAgIGxldCB0aWxlUmFuZ2UgPSB0aGlzLmdldFRpbGVSYW5nZShvcHRpb25zLnRpbGVDb29yZCwgb3B0aW9ucy5vcmlnaW5hbENvb3JkWzBdKTtcclxuICAgICAgICBsZXQgdGlsZXMgPSB7fTtcclxuICAgICAgICBmb3IgKGxldCB4ID0gdGlsZVJhbmdlWzBdOyB4IDw9IHRpbGVSYW5nZVsyXTsgeCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBtaW5YID0gKHggLSB0aWxlUmFuZ2VbMF0pICogdGlsZVNpemU7XHJcbiAgICAgICAgICAgIGxldCBtYXhYID0gKHggLSB0aWxlUmFuZ2VbMF0gKyAxKSAqIHRpbGVTaXplO1xyXG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gdGlsZVJhbmdlWzNdOyB5ID49IHRpbGVSYW5nZVsxXTsgeS0tKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbWluWSA9ICh0aWxlUmFuZ2VbM10gLSB5KSAqIHRpbGVTaXplO1xyXG4gICAgICAgICAgICAgICAgbGV0IG1heFkgPSAodGlsZVJhbmdlWzNdIC0geSArIDEpICogdGlsZVNpemU7XHJcbiAgICAgICAgICAgICAgICB0aWxlc1tcIlwiICsgW3gsIHldXSA9IFttaW5YLCBtaW5ZLCBtYXhYLCBtYXhZXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnN0cnVjdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGluc3RydWN0ID0gaW5zdHJ1Y3RzW2ldO1xyXG4gICAgICAgICAgICBsZXQgZmVhdHVyZUV4dGVudCA9IGluc3RydWN0WzBdLmdldEdlb21ldHJ5KCkuZ2V0RXh0ZW50KCk7XHJcbiAgICAgICAgICAgIGxldCBmZWF0dXJlVGlsZVJhbmdlID0gdGhpcy5nZXRGZWF0dXJlVGlsZVJhbmdlKGZlYXR1cmVFeHRlbnQsIG9wdGlvbnMuZXh0ZW50LCB0aWxlU2l6ZSwgb3B0aW9ucy50aWxlQ29vcmQsIG9mZnNldFopO1xyXG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gdGlsZVJhbmdlWzBdID4gZmVhdHVyZVRpbGVSYW5nZVswXSA/IHRpbGVSYW5nZVswXSA6IGZlYXR1cmVUaWxlUmFuZ2VbMF0sIHh4ID0gZmVhdHVyZVRpbGVSYW5nZVsyXSA+IHRpbGVSYW5nZVsyXSA/IHRpbGVSYW5nZVsyXSA6IGZlYXR1cmVUaWxlUmFuZ2VbMl07IHggPD0geHg7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgeSA9IHRpbGVSYW5nZVsxXSA+IGZlYXR1cmVUaWxlUmFuZ2VbMV0gPyB0aWxlUmFuZ2VbMV0gOiBmZWF0dXJlVGlsZVJhbmdlWzFdLCB5eSA9IGZlYXR1cmVUaWxlUmFuZ2VbM10gPiB0aWxlUmFuZ2VbM10gPyB0aWxlUmFuZ2VbM10gOiBmZWF0dXJlVGlsZVJhbmdlWzNdOyB5IDw9IHl5OyB5KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdGlsZUtleSA9IFwiXCIgKyBbeCwgeV07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRpbGVFeHRlbnQgPSB0aWxlc1t0aWxlS2V5XTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3ViVGlsZUNhY2hlZEluc3RydWN0W3RpbGVLZXldID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ViVGlsZUNhY2hlZEluc3RydWN0W3RpbGVLZXldID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHN1YlRpbGVDYWNoZWRJbnN0cnVjdFt0aWxlS2V5XS5wdXNoKGluc3RydWN0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKG9sLmV4dGVudC5pbnRlcnNlY3RzKHRpbGVFeHRlbnQsIGluc3RydWN0WzBdLmdldEdlb21ldHJ5KCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdWJUaWxlQ2FjaGVkSW5zdHJ1Y3Q7XHJcbiAgICB9XHJcblxyXG4gICAgY2FjaGVkVGlsZUNhbGxiYWNrKG9UaWxlLCBjYWNoZVRpbGVJbmZvcykge1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhY2hlVGlsZUluZm9zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjYWNoZVRpbGVJbmZvID0gY2FjaGVUaWxlSW5mb3NbaV07XHJcbiAgICAgICAgICAgIGxldCB0aWxlS2V5ID0gXCJcIiArIGNhY2hlVGlsZUluZm8udGlsZS50aWxlQ29vcmRbMV0gKyBcIixcIiArIGNhY2hlVGlsZUluZm8udGlsZS50aWxlQ29vcmRbMl07XHJcblxyXG4gICAgICAgICAgICBjYWNoZVRpbGVJbmZvLmNhbGxiYWNrKGNhY2hlVGlsZUluZm8udGlsZSwgY2FjaGVUaWxlSW5mby5zdWNjZXNzRnVuY3Rpb24sIFtdLCBvVGlsZS5zdWJUaWxlSW5zdHJ1Y3RDYWNoZXNbdGlsZUtleV0sIG9UaWxlLnNvdXJjZVByb2plY3QsIG9UaWxlLmxhc3RFeHRlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRUaWxlUmFuZ2UodGlsZUNvb3JkLCB6b29tKSB7XHJcbiAgICAgICAgbGV0IHggPSB0aWxlQ29vcmRbMV07XHJcbiAgICAgICAgbGV0IHkgPSB0aWxlQ29vcmRbMl07XHJcbiAgICAgICAgbGV0IG1pblggPSB4O1xyXG4gICAgICAgIGxldCBtYXhYID0geDtcclxuICAgICAgICBsZXQgbWluWSA9IHk7XHJcbiAgICAgICAgbGV0IG1heFkgPSB5O1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gdGlsZUNvb3JkWzBdOyBpIDwgem9vbTsgaSsrKSB7XHJcbiAgICAgICAgICAgIG1pblggPSBtaW5YICogMjtcclxuICAgICAgICAgICAgbWF4WCA9IG1heFggKiAyICsgMTtcclxuICAgICAgICAgICAgbWluWSA9IG1pblkgKiAyO1xyXG4gICAgICAgICAgICBtYXhZID0gbWF4WSAqIDIgKyAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gW21pblgsIG1pblksIG1heFgsIG1heFldO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEZlYXR1cmVUaWxlUmFuZ2UoZmVhdHVyZUV4dGVudCwgZXh0ZW50LCB0aWxlU2l6ZSwgcmVxdWVzdFRpbGVDb29yZCwgb2Zmc2V0Wikge1xyXG5cclxuICAgICAgICBsZXQgbWluWCA9IHJlcXVlc3RUaWxlQ29vcmRbMV0gKiBNYXRoLnBvdygyLCBvZmZzZXRaKSArIE1hdGguZmxvb3IoZmVhdHVyZUV4dGVudFswXSAvIHRpbGVTaXplKTtcclxuICAgICAgICBsZXQgbWF4WCA9IHJlcXVlc3RUaWxlQ29vcmRbMV0gKiBNYXRoLnBvdygyLCBvZmZzZXRaKSArIE1hdGguZmxvb3IoZmVhdHVyZUV4dGVudFsyXSAvIHRpbGVTaXplKTtcclxuICAgICAgICBsZXQgbWluWSA9IHJlcXVlc3RUaWxlQ29vcmRbMl0gKiBNYXRoLnBvdygyLCBvZmZzZXRaKSArIE1hdGguZmxvb3IoKGV4dGVudCAtIGZlYXR1cmVFeHRlbnRbM10pIC8gdGlsZVNpemUpO1xyXG4gICAgICAgIGxldCBtYXhZID0gcmVxdWVzdFRpbGVDb29yZFsyXSAqIE1hdGgucG93KDIsIG9mZnNldFopICsgTWF0aC5mbG9vcigoZXh0ZW50IC0gZmVhdHVyZUV4dGVudFsxXSkgLyB0aWxlU2l6ZSk7XHJcblxyXG4gICAgICAgIHJldHVybiBbbWluWCwgbWluWSwgbWF4WCwgbWF4WV07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RXh0ZW50KG9yaWdpbmFsQ29vcmQsIHRpbGVjb29yZCwgZXh0ZW50KSB7XHJcbiAgICAgICAgbGV0IG94ID0gb3JpZ2luYWxDb29yZFsxXTtcclxuICAgICAgICBsZXQgeCA9IHRpbGVjb29yZFsxXTtcclxuICAgICAgICBsZXQgeFBhdGggPSBbXTtcclxuICAgICAgICB3aGlsZSAob3ggIT09IHgpIHtcclxuICAgICAgICAgICAgbGV0IHJlbWFpbmRlciA9IG94ICUgMjtcclxuICAgICAgICAgICAgeFBhdGgucHVzaChyZW1haW5kZXIpO1xyXG4gICAgICAgICAgICBveCA9IE1hdGguZmxvb3Iob3ggLyAyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG5ld0V4dGVudCA9IGV4dGVudDtcclxuICAgICAgICBsZXQgb2Zmc2V0WCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHhQYXRoLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIG5ld0V4dGVudCA9IG5ld0V4dGVudCAvIDI7XHJcbiAgICAgICAgICAgIGlmICh4UGF0aFtpXSA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgb2Zmc2V0WCArPSBuZXdFeHRlbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBveSA9IG9yaWdpbmFsQ29vcmRbMl07XHJcbiAgICAgICAgbGV0IHkgPSB0aWxlY29vcmRbMl07XHJcbiAgICAgICAgbGV0IHlQYXRoID0gW107XHJcbiAgICAgICAgd2hpbGUgKG95ICE9PSB5KSB7XHJcbiAgICAgICAgICAgIGxldCByZW1haW5kZXIgPSBveSAlIDI7XHJcbiAgICAgICAgICAgIHlQYXRoLnB1c2gocmVtYWluZGVyKTtcclxuICAgICAgICAgICAgb3kgPSBNYXRoLmZsb29yKG95IC8gMik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5ld0V4dGVudCA9IGV4dGVudDtcclxuICAgICAgICBsZXQgb2Zmc2V0WSA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHlQYXRoLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIG5ld0V4dGVudCA9IG5ld0V4dGVudCAvIDI7XHJcbiAgICAgICAgICAgIGlmICh5UGF0aFtpXSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgb2Zmc2V0WSArPSBuZXdFeHRlbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gVE9ETzogYWRkIHRoZSBidWZmZXJcclxuICAgICAgICByZXR1cm4gW29mZnNldFgsIG9mZnNldFksIG9mZnNldFggKyBuZXdFeHRlbnQsIG9mZnNldFkgKyBuZXdFeHRlbnRdO1xyXG4gICAgfVxyXG5cclxuICAgIHJlcGxhY2VGaWx0ZXJzVG9JbmRleE9mUGJmTGF5ZXIoY2FjaGVUcmVlcywgcGJmTGF5ZXIpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMCwgaWkgPSBjYWNoZVRyZWVzLmxlbmd0aDsgaSA8IGlpOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGNhY2hlVHJlZSA9IGNhY2hlVHJlZXNbaV07XHJcbiAgICAgICAgICAgIHRoaXMucmVwbGFjZUNhY2hlSXRlbUZpbHRlcnNUb0luZGV4T2ZQYmZMYXllcihjYWNoZVRyZWUucm9vdCwgcGJmTGF5ZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXBsYWNlQ2FjaGVJdGVtRmlsdGVyc1RvSW5kZXhPZlBiZkxheWVyKG5vZGUsIHBiZkxheWVyKSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBub2RlLmRhdGE7XHJcblxyXG4gICAgICAgIGxldCBnZW9GaWx0ZXI7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGlpID0gZGF0YS5maWx0ZXJzLmxlbmd0aDsgaSA8IGlpOyBpKyspIHtcclxuICAgICAgICAgICAgZ2VvRmlsdGVyID0gZGF0YS5maWx0ZXJzW2ldO1xyXG4gICAgICAgICAgICBnZW9GaWx0ZXIucmVwbGFjZVZhdWxlc1RvUGJmSW5kZXgocGJmTGF5ZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG5vZGUuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGlpID0gbm9kZS5jaGlsZHJlbi5sZW5ndGg7IGkgPCBpaTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlcGxhY2VDYWNoZUl0ZW1GaWx0ZXJzVG9JbmRleE9mUGJmTGF5ZXIobm9kZS5jaGlsZHJlbltpXSwgcGJmTGF5ZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZWFkRmVhdHVyZXNBbmRDcmVhdGVJbnN0cnVjdHMoc291cmNlOiBBcnJheUJ1ZmZlciwgem9vbTogbnVtYmVyLCBvcHRpb25zOiBhbnkpIHtcclxuICAgICAgICBsZXQgcGJmID0gbmV3ICg8YW55Pm9sKS5leHQuUEJGKChzb3VyY2UpKTtcclxuICAgICAgICBsZXQgcGJmTGF5ZXJzID0gcGJmLnJlYWRGaWVsZHMoKDxhbnk+b2wpLmZvcm1hdC5NVlQucGJmUmVhZGVyc18ubGF5ZXJzLCB7fSk7XHJcbiAgICAgICAgbGV0IGZlYXR1cmVzID0gW107XHJcbiAgICAgICAgbGV0IHBiZkxheWVyO1xyXG5cclxuICAgICAgICBsZXQgem9vbU1hdGNoZWRHZW9TdHlsZXNHcm91cEJ5TGF5ZXJJZCA9IHRoaXMuc3R5bGVKc29uQ2FjaGUuZ2VvU3R5bGVHcm91cEJ5Wm9vbVt6b29tXTtcclxuICAgICAgICBpZiAoIXpvb21NYXRjaGVkR2VvU3R5bGVzR3JvdXBCeUxheWVySWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZlYXR1cmVzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGxheWVySWRNYXRjaGVkR2VvU3R5bGVzR3JvdXBCeVBiZkxheWVyTmFtZSA9IHpvb21NYXRjaGVkR2VvU3R5bGVzR3JvdXBCeUxheWVySWRbXCJvc21fdGV4YXNfbGF5ZXJzXCJdO1xyXG5cclxuICAgICAgICBpZiAoIWxheWVySWRNYXRjaGVkR2VvU3R5bGVzR3JvdXBCeVBiZkxheWVyTmFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmVhdHVyZXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcGJmTGF5ZXJOYW1lc1dpdGhHZW9TdHlsZSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IHBiZkxheWVyTmFtZSBpbiBsYXllcklkTWF0Y2hlZEdlb1N0eWxlc0dyb3VwQnlQYmZMYXllck5hbWUpIHtcclxuICAgICAgICAgICAgcGJmTGF5ZXJOYW1lc1dpdGhHZW9TdHlsZS5wdXNoKHBiZkxheWVyTmFtZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgaW5zdHJ1Y3RzQ2FjaGUgPSBbXTtcclxuICAgICAgICBsZXQgdHJlZVN0eWxlRmlyc3RDYWNoZSA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBuYW1lIGluIHBiZkxheWVycykge1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMubGF5ZXJzXyAmJiB0aGlzLmxheWVyc18uaW5kZXhPZihuYW1lKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChwYmZMYXllck5hbWVzV2l0aEdlb1N0eWxlLmluZGV4T2YobmFtZSkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcGJmTGF5ZXIgPSBwYmZMYXllcnNbbmFtZV07XHJcblxyXG4gICAgICAgICAgICBsZXQgY2FjaGVUcmVlcyA9IGxheWVySWRNYXRjaGVkR2VvU3R5bGVzR3JvdXBCeVBiZkxheWVyTmFtZVtuYW1lXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjYWNoZVRyZWVzICYmIGNhY2hlVHJlZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXBsYWNlRmlsdGVyc1RvSW5kZXhPZlBiZkxheWVyKGNhY2hlVHJlZXMsIHBiZkxheWVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBiZkxheWVyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJhd0ZlYXR1cmUgPSAoPGFueT5vbC5mb3JtYXQuTVZUKS5yZWFkUmF3RmVhdHVyZV8ocGJmLCBwYmZMYXllciwgaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZlYXR1cmU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY2FjaGVUcmVlcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2FjaGVUcmVlID0gY2FjaGVUcmVlc1tqXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRyZWVJbmRleCA9IGNhY2hlVHJlZS50cmVlSW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnN0cnVjdHNDYWNoZVt0cmVlSW5kZXhdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RydWN0c0NhY2hlW3RyZWVJbmRleF0gPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyZWVTdHlsZUZpcnN0Q2FjaGVbdHJlZUluZGV4XSA9IGNhY2hlVHJlZS5yb290LmRhdGEuc3R5bGVGaXJzdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1hdGNoZWROb2RlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNoZWNrTm9kZU1hdGNoZWQgPSBmdW5jdGlvbiAobm9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN0eWxlSnNvbkNhY2hlSXRlbSA9IG5vZGUuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtYXRjaGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBpaSA9IHN0eWxlSnNvbkNhY2hlSXRlbS5maWx0ZXJzLmxlbmd0aDsgaSA8IGlpOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmlsdGVyID0gc3R5bGVKc29uQ2FjaGVJdGVtLmZpbHRlcnNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFmaWx0ZXIubWF0Y2hPTEZlYXR1cmUocmF3RmVhdHVyZSwgem9vbSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXRjaGVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNlbGVjdE5vZGUgPSBmdW5jdGlvbiAobm9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hlZE5vZGUgPSBub2RlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlVHJlZS50cmF2ZXJzZU5vZGUoY2hlY2tOb2RlTWF0Y2hlZCwgc2VsZWN0Tm9kZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2hlZE5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmZWF0dXJlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZWF0dXJlID0gdGhpcy5jcmVhdGVGZWF0dXJlXyhwYmYsIHJhd0ZlYXR1cmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm1pbmltYWxpc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVhdHVyZS5wcm9wZXJ0aWVzXyA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBXZSBkb24ndCBuZWVkIGNhY2hlIHRoZSBmZWF0dXJlIGN1cnJlbnRsdVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZlYXR1cmVzLnB1c2goZmVhdHVyZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgemluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhY2hlVHJlZS5yb290LmRhdGEuekluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgemluZGV4ID0gcmF3RmVhdHVyZS5wcm9wZXJ0aWVzW2NhY2hlVHJlZS5yb290LmRhdGEuekluZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZWF0dXJlLnByb3BlcnRpZXNfW2NhY2hlVHJlZS5yb290LmRhdGEuekluZGV4XSA9IHppbmRleDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVG9kbzpQdWJpbGMgYSBmdW5jdGlvbjogZ2V0RmVhdHVyZVpJbmRleFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHppbmRleCA9IE1hdGguYWJzKHppbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzTmFOKHppbmRleCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgemluZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzTmFOKHppbmRleCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6aW5kZXggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluc3RydWN0c0NhY2hlW3RyZWVJbmRleF1bemluZGV4XSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdHJ1Y3RzQ2FjaGVbdHJlZUluZGV4XVt6aW5kZXhdID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0cnVjdHNDYWNoZVt0cmVlSW5kZXhdW3ppbmRleF0ucHVzaChbZmVhdHVyZSwgbWF0Y2hlZE5vZGVdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm1pbmltYWxpc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2hlZE5vZGUuZ2VvU3R5bGUgJiYgbWF0Y2hlZE5vZGUuZ2VvU3R5bGUuY29uc3RydWN0b3IubmFtZSA9PT0gXCJHZW9UZXh0U3R5bGVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZWF0dXJlLnByb3BlcnRpZXNfW21hdGNoZWROb2RlLmdlb1N0eWxlLm5hbWVdID0gcmF3RmVhdHVyZS5wcm9wZXJ0aWVzW21hdGNoZWROb2RlLmdlb1N0eWxlLm5hbWVdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2hlZE5vZGUuY2hpbGRyZW5HZW9TdHlsZXMgJiYgbWF0Y2hlZE5vZGUuY2hpbGRyZW5HZW9TdHlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hdGNoZWROb2RlLmNoaWxkcmVuR2VvU3R5bGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZWF0dXJlLnByb3BlcnRpZXNfW21hdGNoZWROb2RlLmNoaWxkcmVuR2VvU3R5bGVzW2ldLm5hbWVdID0gcmF3RmVhdHVyZS5wcm9wZXJ0aWVzW21hdGNoZWROb2RlLmNoaWxkcmVuR2VvU3R5bGVzW2ldLm5hbWVdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlYXR1cmUuZXh0ZW50XyA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmV4dGVudF8gPSBwYmZMYXllciA/IFswLCAwLCBwYmZMYXllci5leHRlbnQsIHBiZkxheWVyLmV4dGVudF0gOiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGluc3RydWN0cyA9IFtdO1xyXG4gICAgICAgIC8vIHRoZSB0cmVzcyBpbmRleCBtZWFucyB0aGUgaW5kZXggb2YgU3lsZUlkLlxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5zdHJ1Y3RzQ2FjaGUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGluc3RydWN0c0luT25lVHJlZSA9IGluc3RydWN0c0NhY2hlW2ldO1xyXG5cclxuICAgICAgICAgICAgaWYgKGluc3RydWN0c0luT25lVHJlZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHN0eWxlRmlyc3QgPSB0cmVlU3R5bGVGaXJzdENhY2hlW2ldO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBpbnN0cnVjdHNJbk9uZVRyZWUubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaW5zdHJ1Y3RzSW5PbmVaSW5kZXggPSBpbnN0cnVjdHNJbk9uZVRyZWVbal07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbnN0cnVjdHNJbk9uZVpJbmRleCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETyByZW1vdmUgdGhlIHRlc3RpbmcgY29kZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZUZpcnN0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0eWxlRmlyc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjaGlsZHJlbkluc3RydWN0cyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGggPSAwOyBoIDwgaW5zdHJ1Y3RzSW5PbmVaSW5kZXgubGVuZ3RoOyBoKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5zdHJ1Y3QgPSBpbnN0cnVjdHNJbk9uZVpJbmRleFtoXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0cnVjdHMucHVzaChbaW5zdHJ1Y3RbMF0sIGluc3RydWN0WzFdLmdlb1N0eWxlXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnN0cnVjdFsxXS5jaGlsZHJlbkdlb1N0eWxlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IGluc3RydWN0WzFdLmNoaWxkcmVuR2VvU3R5bGVzLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbkluc3RydWN0cy5wdXNoKFtpbnN0cnVjdFswXSwgaW5zdHJ1Y3RbMV0uY2hpbGRyZW5HZW9TdHlsZXNba11dKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGluc3RydWN0cywgY2hpbGRyZW5JbnN0cnVjdHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaCA9IDA7IGggPCBpbnN0cnVjdHNJbk9uZVpJbmRleC5sZW5ndGg7IGgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbnN0cnVjdCA9IGluc3RydWN0c0luT25lWkluZGV4W2hdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RydWN0cy5wdXNoKFtpbnN0cnVjdFswXSwgaW5zdHJ1Y3RbMV0uZ2VvU3R5bGVdKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluc3RydWN0WzFdLmNoaWxkcmVuR2VvU3R5bGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgaW5zdHJ1Y3RbMV0uY2hpbGRyZW5HZW9TdHlsZXMubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RydWN0cy5wdXNoKFtpbnN0cnVjdFswXSwgaW5zdHJ1Y3RbMV0uY2hpbGRyZW5HZW9TdHlsZXNba11dKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gW2ZlYXR1cmVzLCBpbnN0cnVjdHNdO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyByZWFkUmF3RmVhdHVyZV8ocGJmLCBsYXllciwgaSkge1xyXG4gICAgICAgIHBiZi5wb3MgPSBsYXllci5mZWF0dXJlc1tpXTtcclxuICAgICAgICBsZXQgZW5kID0gcGJmLnJlYWRWYXJpbnQoKSArIHBiZi5wb3M7XHJcblxyXG4gICAgICAgIGxldCBmZWF0dXJlID0ge1xyXG4gICAgICAgICAgICBsYXllcjogbGF5ZXIsXHJcbiAgICAgICAgICAgIHR5cGU6IDAsXHJcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IHt9LFxyXG4gICAgICAgICAgICBwcm9wZXJ0aWVzSW5kZXg6IHt9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBwYmYucmVhZEZpZWxkcygoPGFueT5vbCkuZm9ybWF0Lk1WVC5wYmZSZWFkZXJzXy5mZWF0dXJlQ29sdW1uVmFsdWUsIGZlYXR1cmUsIGVuZCk7XHJcblxyXG4gICAgICAgIHJldHVybiBmZWF0dXJlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBmZWF0dXJlQ29sdW1uVmFsdWUodGFnOiBhbnksIGZlYXR1cmU6IGFueSwgcGJmOiBhbnkpIHtcclxuICAgICAgICBpZiAodGFnID09PSAxKSB7XHJcbiAgICAgICAgICAgIGZlYXR1cmUuaWQgPSBwYmYucmVhZFZhcmludCgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGFnID09PSAyKSB7XHJcbiAgICAgICAgICAgIGxldCBlbmQgPSBwYmYucmVhZFZhcmludCgpICsgcGJmLnBvcztcclxuICAgICAgICAgICAgd2hpbGUgKHBiZi5wb3MgPCBlbmQpIHtcclxuICAgICAgICAgICAgICAgIGxldCBrZXkgPSBwYmYucmVhZFZhcmludCgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gcGJmLnJlYWRWYXJpbnQoKTtcclxuICAgICAgICAgICAgICAgIGZlYXR1cmUucHJvcGVydGllc0luZGV4W2tleV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIGtleSA9IGZlYXR1cmUubGF5ZXIua2V5c1trZXldO1xyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBmZWF0dXJlLmxheWVyLnZhbHVlc1t2YWx1ZV07XHJcbiAgICAgICAgICAgICAgICBmZWF0dXJlLnByb3BlcnRpZXNba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmICh0YWcgPT09IDMpIHtcclxuICAgICAgICAgICAgZmVhdHVyZS50eXBlID0gcGJmLnJlYWRWYXJpbnQoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRhZyA9PT0gNCkge1xyXG4gICAgICAgICAgICBmZWF0dXJlLmdlb21ldHJ5ID0gcGJmLnBvcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuKDxhbnk+b2wpLmZvcm1hdC5NVlQucmVhZFJhd0ZlYXR1cmVfID0gR2VvTVZURm9ybWF0LnJlYWRSYXdGZWF0dXJlXztcclxuKDxhbnk+b2wpLmZvcm1hdC5NVlQucGJmUmVhZGVyc19bXCJmZWF0dXJlQ29sdW1uVmFsdWVcIl0gPSBHZW9NVlRGb3JtYXQuZmVhdHVyZUNvbHVtblZhbHVlO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZm9ybWF0L2dlb012dC50cyIsImltcG9ydCB7IFN0eWxlSnNvbkNhY2hlSXRlbSB9IGZyb20gXCIuL3N0eWxlSnNvbkNhY2hlSXRlbVwiO1xyXG5pbXBvcnQgeyBUcmVlIH0gZnJvbSBcIi4vdHJlZS90cmVlXCI7XHJcbmltcG9ydCB7IFRyZWVOb2RlIH0gZnJvbSBcIi4vdHJlZS90cmVlTm9kZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN0eWxlSnNvbkNhY2hlIHtcclxuICAgIHByaXZhdGUgZ2VvU3R5bGVHcm91cEJ5Wm9vbTogYW55W107XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5nZW9TdHlsZUdyb3VwQnlab29tID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgYWRkKHpvb206IG51bWJlciwgbGF5ZXJJZDogc3RyaW5nLCBkYXRhTGF5ZXJOYW1lOiBzdHJpbmcsIHRyZWU6IFRyZWU8U3R5bGVKc29uQ2FjaGVJdGVtPikge1xyXG4gICAgICAgIGlmICh0aGlzLmdlb1N0eWxlR3JvdXBCeVpvb21bem9vbV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmdlb1N0eWxlR3JvdXBCeVpvb21bem9vbV0gPSB7fTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZ2VvU3R5bGVHcm91cEJ5Wm9vbVt6b29tXVtsYXllcklkXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VvU3R5bGVHcm91cEJ5Wm9vbVt6b29tXVtsYXllcklkXSA9IHt9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5nZW9TdHlsZUdyb3VwQnlab29tW3pvb21dW2xheWVySWRdW2RhdGFMYXllck5hbWVdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5nZW9TdHlsZUdyb3VwQnlab29tW3pvb21dW2xheWVySWRdW2RhdGFMYXllck5hbWVdID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ2VvU3R5bGVHcm91cEJ5Wm9vbVt6b29tXVtsYXllcklkXVtkYXRhTGF5ZXJOYW1lXS5wdXNoKHRyZWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyKCkge1xyXG4gICAgICAgIHRoaXMuZ2VvU3R5bGVHcm91cEJ5Wm9vbS5sZW5ndGggPSAwO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdHlsZUpzb25DYWNoZS50cyIsImltcG9ydCB7IEdlb0ZpbHRlciB9IGZyb20gXCIuL2ZpbHRlci9nZW9GaWx0ZXJcIjtcclxuaW1wb3J0IHsgR2VvRmlsdGVySXRlbSB9IGZyb20gXCIuL2ZpbHRlci9nZW9GaWx0ZXJJdGVtXCI7XHJcbmltcG9ydCB7IEdlb1pvb21GaWx0ZXIgfSBmcm9tIFwiLi9maWx0ZXIvZ2VvWm9vbUZpbHRlclwiO1xyXG5pbXBvcnQgeyBHZW9TdHJpbmdBdHRyaWJ1dGVGaWx0ZXIgfSBmcm9tIFwiLi9maWx0ZXIvZ2VvU3RyaW5nQXR0cmlidXRlRmlsdGVyXCI7XHJcbmltcG9ydCB7IEdlb1JlZ2V4RmlsdGVyIH0gZnJvbSBcIi4vZmlsdGVyL2dlb1JlZ2V4RmlsdGVyXCI7XHJcbmltcG9ydCB7IEdlb051bWJlckF0dHJpYnV0ZUZpbHRlciB9IGZyb20gXCIuL2ZpbHRlci9nZW9OdW1iZXJBdHRyaWJ1dGVGaWx0ZXJcIjtcclxuaW1wb3J0IHsgR2VvU3R5bGUgfSBmcm9tIFwiLi9zdHlsZS9nZW9TdHlsZVwiO1xyXG5pbXBvcnQgeyBHZW9BcmVhU3R5bGUgfSBmcm9tIFwiLi9zdHlsZS9nZW9BcmVhU3R5bGVcIjtcclxuaW1wb3J0IHsgR2VvTGluZVN0eWxlIH0gZnJvbSBcIi4vc3R5bGUvZ2VvTGluZVN0eWxlXCI7XHJcbmltcG9ydCB7IEdlb1BvaW50U3R5bGUgfSBmcm9tIFwiLi9zdHlsZS9nZW9Qb2ludFN0eWxlXCI7XHJcbmltcG9ydCB7IEdlb1RleHRTdHlsZSB9IGZyb20gXCIuL3N0eWxlL2dlb1RleHRTdHlsZVwiO1xyXG5pbXBvcnQgeyBHZW9TaGllbGRTdHlsZSB9IGZyb20gXCIuL3N0eWxlL2dlb1NoaWVsZFN0eWxlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3R5bGVKc29uQ2FjaGVJdGVtIHtcclxuICAgIHB1YmxpYyBkYXRhTGF5ZXJOYW1lOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgbWluWm9vbTogbnVtYmVyO1xyXG4gICAgcHVibGljIG1heFpvb206IG51bWJlcjtcclxuICAgIHB1YmxpYyB6SW5kZXg6IGFueTsgLy8gc3RyaW5nfHxudW1iZXJcclxuICAgIHB1YmxpYyBzdHlsZUZpcnN0OiBib29sZWFuO1xyXG4gICAgcHVibGljIGZpbHRlcnM6IEdlb0ZpbHRlcltdO1xyXG5cclxuICAgIHB1YmxpYyBnZW9TdHlsZTogR2VvU3R5bGU7XHJcbiAgICBwdWJsaWMgY2hpbGRyZW5HZW9TdHlsZXM6IEdlb1N0eWxlW107XHJcbiAgICBwdWJsaWMgc3ViU3R5bGVDYWNoZUl0ZW1zOiBTdHlsZUpzb25DYWNoZUl0ZW1bXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzdHlsZUpzb246IGFueSwgbWluWm9vbSwgbWF4Wm9vbSwgZGF0YUxheWVyQ29sdW1uTmFtZSkge1xyXG4gICAgICAgIHRoaXMuY2hpbGRyZW5HZW9TdHlsZXMgPSBbXTtcclxuICAgICAgICB0aGlzLnN1YlN0eWxlQ2FjaGVJdGVtcyA9IFtdO1xyXG4gICAgICAgIHRoaXMubWluWm9vbSA9IG1pblpvb207XHJcbiAgICAgICAgdGhpcy5tYXhab29tID0gbWF4Wm9vbTtcclxuICAgICAgICB0aGlzLnpJbmRleCA9IHN0eWxlSnNvbltcInotaW5kZXhcIl07XHJcbiAgICAgICAgdGhpcy5zdHlsZUZpcnN0ID0gc3R5bGVKc29uW1wic3R5bGUtZmlyc3RcIl07XHJcbiAgICAgICAgdGhpcy5maWx0ZXJzID0gdGhpcy5jcmVhdGVGaWx0ZXJzKHN0eWxlSnNvbi5maWx0ZXIsIGRhdGFMYXllckNvbHVtbk5hbWUpIHx8IFtdO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlU3ViSXRlbXMoc3R5bGVKc29uLCBkYXRhTGF5ZXJDb2x1bW5OYW1lKTtcclxuICAgICAgICB0aGlzLmdlb1N0eWxlID0gdGhpcy5jcmVhdGVHZW9TdHlsZShzdHlsZUpzb24pO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlQ2hpbGRyZW5HZW9TdHlsZShzdHlsZUpzb24pO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUZpbHRlcnMoZmlsdGVyU3RyaW5nLCBkYXRhTGF5ZXJDb2x1bW5OYW1lKSB7XHJcbiAgICAgICAgaWYgKGZpbHRlclN0cmluZykge1xyXG4gICAgICAgICAgICBsZXQgZXhwcmVzc2lvbiA9IFwiKFxcXFx3Kz89ficuKz8nKXwoXFxcXHcrP1s8PiE9XSonW147XSs/Jyl8KFxcXFx3Kz9bPD4hPV0qW147XSspXCI7XHJcbiAgICAgICAgICAgIGxldCByZWdleCA9IG5ldyBSZWdFeHAoZXhwcmVzc2lvbiwgXCJnXCIpO1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0cyA9IGZpbHRlclN0cmluZy5tYXRjaChyZWdleCk7XHJcbiAgICAgICAgICAgIGxldCByYW5nZUZpbHRlcnMgPSB7fTtcclxuICAgICAgICAgICAgbGV0IGZpbHRlcnMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGxldCBnZW9ab29tRmlsdGVyOiBHZW9ab29tRmlsdGVyO1xyXG4gICAgICAgICAgICBsZXQgZGF0YUxheWVyTmFtZUZpbHRlcjogR2VvU3RyaW5nQXR0cmlidXRlRmlsdGVyO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0c1tpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBmaWx0ZXJJdGVtID0gR2VvRmlsdGVySXRlbS5jcmVhdGVGaWx0ZXJJdGVtKHJlc3VsdHNbaV0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZmlsdGVySXRlbS52YWx1ZS5zdGFydHNXaXRoKFwifidcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVycy5wdXNoKG5ldyBHZW9SZWdleEZpbHRlcihbZmlsdGVySXRlbV0pKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZpbHRlckl0ZW0ua2V5ID09PSBcInpvb21cIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2VvWm9vbUZpbHRlciA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9ab29tRmlsdGVyID0gbmV3IEdlb1pvb21GaWx0ZXIoW10pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdlb1pvb21GaWx0ZXIuYWRkRmlsdGVySXRlbShmaWx0ZXJJdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZpbHRlckl0ZW0udmFsdWUuaW5jbHVkZXMoXCInXCIpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmlsdGVySXRlbS5rZXkgPT09IGRhdGFMYXllckNvbHVtbk5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhTGF5ZXJOYW1lRmlsdGVyID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhTGF5ZXJOYW1lRmlsdGVyID0gbmV3IEdlb1N0cmluZ0F0dHJpYnV0ZUZpbHRlcihbZmlsdGVySXRlbV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVycy5wdXNoKG5ldyBHZW9TdHJpbmdBdHRyaWJ1dGVGaWx0ZXIoW2ZpbHRlckl0ZW1dKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByYW5nZUZpbHRlcnNbZmlsdGVySXRlbS5rZXldID0gcmFuZ2VGaWx0ZXJzW2ZpbHRlckl0ZW0ua2V5XSB8fCBuZXcgR2VvTnVtYmVyQXR0cmlidXRlRmlsdGVyKFtdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2VGaWx0ZXJzW2ZpbHRlckl0ZW0ua2V5XS5hZGRGaWx0ZXJJdGVtKGZpbHRlckl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gdXBkYXRlIHRoZSBtaW5ab29tIGFuZCBtYXhab29tIGJ5IFpvb21GaWx0ZXJcclxuICAgICAgICAgICAgaWYgKGdlb1pvb21GaWx0ZXIpIHtcclxuICAgICAgICAgICAgICAgIGdlb1pvb21GaWx0ZXIuaW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGdlb1pvb21GaWx0ZXIucmFuZ2VzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1pblpvb20gPSArZ2VvWm9vbUZpbHRlci5yYW5nZXNbMF1bMF07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXhab29tID0gK2dlb1pvb21GaWx0ZXIucmFuZ2VzWzBdWzFdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5taW5ab29tID0gK2dlb1pvb21GaWx0ZXIuYWxsb3dlZFZhbHVlc1swXTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1heFpvb20gPSArZ2VvWm9vbUZpbHRlci5hbGxvd2VkVmFsdWVzWzBdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIHVwZGF0ZSB0aGUgZGF0YUxheWVyTmFtZVxyXG4gICAgICAgICAgICBpZiAoZGF0YUxheWVyTmFtZUZpbHRlcikge1xyXG4gICAgICAgICAgICAgICAgZGF0YUxheWVyTmFtZUZpbHRlci5pbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFMYXllck5hbWUgPSBkYXRhTGF5ZXJOYW1lRmlsdGVyLmV4cGVjdGVkVmFsdWVzWzBdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZmlsdGVycy5jb25jYXQoKDxhbnk+d2luZG93KS5PYmplY3QudmFsdWVzKHJhbmdlRmlsdGVycykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVTdWJJdGVtcyhzdHlsZUpzb24sIGRhdGFMYXllckNvbHVtbk5hbWUpIHtcclxuICAgICAgICBpZiAoc3R5bGVKc29uLnN0eWxlKSB7XHJcbiAgICAgICAgICAgIC8vIGFwcGx5IHRoZSBwcm9wZXJ0eSB0byBzdWIgc3R5bGUuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBzdHlsZUpzb24pIHtcclxuICAgICAgICAgICAgICAgIGlmIChrZXkgIT09IFwic3R5bGVcIiAmJiBrZXkgIT09IFwiZmlsdGVyXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0eWxlSnNvbi5zdHlsZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBcHBseSB0aGUgcHJvcGVydHkgdG8gc3ViIHN0eWxlIGlmIHRoZSBzdWIgc3R5bGUgZG9lcyBub3QgaW5jbHVkZWQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdHlsZUpzb24uc3R5bGVbaV1ba2V5XSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSBcImlkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZUpzb24uc3R5bGVbaV1ba2V5XSA9IHN0eWxlSnNvbltrZXldICsgXCJfXCIgKyBpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZUpzb24uc3R5bGVbaV1ba2V5XSA9IHN0eWxlSnNvbltrZXldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBzdWJJdGVtTWluWm9vbTtcclxuICAgICAgICAgICAgbGV0IHN1Ykl0ZW1NYXhab29tO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBzdWJTdHlsZSBvZiBzdHlsZUpzb24uc3R5bGUpIHtcclxuICAgICAgICAgICAgICAgIGxldCBzdHlsZUpzb25DYWNoZVN1Ykl0ZW0gPSBuZXcgU3R5bGVKc29uQ2FjaGVJdGVtKHN1YlN0eWxlLCB0aGlzLm1pblpvb20sIHRoaXMubWF4Wm9vbSwgZGF0YUxheWVyQ29sdW1uTmFtZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHN1Ykl0ZW1NYXhab29tID09PSB1bmRlZmluZWQgfHwgc3R5bGVKc29uQ2FjaGVTdWJJdGVtLm1heFpvb20gPiBzdWJJdGVtTWF4Wm9vbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Ykl0ZW1NYXhab29tID0gc3R5bGVKc29uQ2FjaGVTdWJJdGVtLm1heFpvb207XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoc3ViSXRlbU1pblpvb20gPT09IHVuZGVmaW5lZCB8fCBzdHlsZUpzb25DYWNoZVN1Ykl0ZW0ubWluWm9vbSA8IHN1Ykl0ZW1NaW5ab29tKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ViSXRlbU1pblpvb20gPSBzdHlsZUpzb25DYWNoZVN1Ykl0ZW0ubWluWm9vbTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN1YlN0eWxlQ2FjaGVJdGVtcy5wdXNoKHN0eWxlSnNvbkNhY2hlU3ViSXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHN1Ykl0ZW1NaW5ab29tICYmIHN1Ykl0ZW1NaW5ab29tID4gdGhpcy5taW5ab29tKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1pblpvb20gPSBzdWJJdGVtTWluWm9vbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc3ViSXRlbU1heFpvb20gJiYgc3ViSXRlbU1heFpvb20gPCB0aGlzLm1heFpvb20pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWF4Wm9vbSA9IHN1Ykl0ZW1NYXhab29tO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUdlb1N0eWxlKHN0eWxlSnNvbikge1xyXG4gICAgICAgIGxldCBnZW9TdHlsZTtcclxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gc3R5bGVKc29uKSB7XHJcbiAgICAgICAgICAgIGlmIChrZXkgIT09IFwic3R5bGVcIiAmJiBrZXkgIT09IFwiZmlsdGVyXCIpIHtcclxuICAgICAgICAgICAgICAgIGxldCBrZXlzID0ga2V5LnNwbGl0KFwiLVwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChrZXlzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGtleXNbMF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInBvbHlnb25cIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb1N0eWxlID0gbmV3IEdlb0FyZWFTdHlsZShzdHlsZUpzb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJsaW5lXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9TdHlsZSA9IG5ldyBHZW9MaW5lU3R5bGUoc3R5bGVKc29uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwidGV4dFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvU3R5bGUgPSBuZXcgR2VvVGV4dFN0eWxlKHN0eWxlSnNvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInBvaW50XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9TdHlsZSA9IG5ldyBHZW9Qb2ludFN0eWxlKHN0eWxlSnNvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInNoaWVsZFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvU3R5bGUgPSBuZXcgR2VvU2hpZWxkU3R5bGUoc3R5bGVKc29uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBnZW9TdHlsZTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVDaGlsZHJlbkdlb1N0eWxlKHN0eWxlSnNvbikge1xyXG4gICAgICAgIGlmIChzdHlsZUpzb25bXCJjaGlsZHJlblwiXSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0eWxlSnNvbltcImNoaWxkcmVuXCJdLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2hpbGRyZW5HZW9TdHlsZUpzb24gPSBzdHlsZUpzb25bXCJjaGlsZHJlblwiXVtpXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hpbGRyZW5HZW9TdHlsZXMucHVzaCh0aGlzLmNyZWF0ZUdlb1N0eWxlKGNoaWxkcmVuR2VvU3R5bGVKc29uKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0eWxlSnNvbkNhY2hlSXRlbS50cyIsImV4cG9ydCBjbGFzcyBHZW9GaWx0ZXJJdGVtIHtcclxuICAgIGtleTogc3RyaW5nO1xyXG4gICAgb3BlcmF0b3I6IHN0cmluZztcclxuICAgIHZhbHVlOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioa2V5OiBzdHJpbmcsIG9wZXJhdG9yOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmtleSA9IGtleTtcclxuICAgICAgICB0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBvcGVyYXRvclJlZ2V4ID0gbmV3IFJlZ0V4cChcIls8PiE9XStcIiwgXCJnXCIpO1xyXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGVGaWx0ZXJJdGVtKGZpbHRlckl0ZW1TdHJpbmc6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBvcGVyYXRvciA9IGZpbHRlckl0ZW1TdHJpbmcubWF0Y2godGhpcy5vcGVyYXRvclJlZ2V4KVswXTtcclxuICAgICAgICBsZXQgcGFydHMgPSBmaWx0ZXJJdGVtU3RyaW5nLnNwbGl0KG9wZXJhdG9yKTtcclxuICAgICAgICBsZXQgaXRlbSA9IG5ldyBHZW9GaWx0ZXJJdGVtKHBhcnRzWzBdLCBvcGVyYXRvciwgcGFydHNbMV0pO1xyXG4gICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2ZpbHRlci9nZW9GaWx0ZXJJdGVtLnRzIiwiaW1wb3J0IHsgR2VvRmlsdGVyIH0gZnJvbSBcIi4vZ2VvRmlsdGVyXCI7XHJcbmltcG9ydCB7IEdlb0ZpbHRlckl0ZW0gfSBmcm9tIFwiLi9nZW9GaWx0ZXJJdGVtXCI7XHJcbmltcG9ydCB7IEdlb1JhbmdlRmlsdGVyIH0gZnJvbSBcIi4vZ2VvUmFuZ2VGaWx0ZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHZW9ab29tRmlsdGVyIGV4dGVuZHMgR2VvUmFuZ2VGaWx0ZXIge1xyXG4gICAgY29uc3RydWN0b3IoZmlsdGVySXRlbXM6IEdlb0ZpbHRlckl0ZW1bXSkge1xyXG4gICAgICAgIHN1cGVyKGZpbHRlckl0ZW1zKTtcclxuICAgIH1cclxuXHJcbiAgICBtYXRjaEZlYXR1cmVDb3JlKGZlYXR1cmU6IG9sLkZlYXR1cmUsIHpvb206IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzSW5SYW5nZSh6b29tKTtcclxuICAgIH1cclxuXHJcbiAgICByZXBsYWNlVmF1bGVzVG9QYmZJbmRleENvcmUocGJmTGF5ZXIpIHtcclxuICAgICAgICB0aGlzLnJlcGxhY2VkVmFsdWVUb0luZGV4ID0gdHJ1ZTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZmlsdGVyL2dlb1pvb21GaWx0ZXIudHMiLCJpbXBvcnQgeyBHZW9GaWx0ZXIgfSBmcm9tIFwiLi9nZW9GaWx0ZXJcIjtcclxuaW1wb3J0IHsgR2VvRmlsdGVySXRlbSB9IGZyb20gXCIuL2dlb0ZpbHRlckl0ZW1cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHZW9TdHJpbmdBdHRyaWJ1dGVGaWx0ZXIgZXh0ZW5kcyBHZW9GaWx0ZXIge1xyXG4gICAgZXhwZWN0ZWRWYWx1ZXM6IHN0cmluZ1tdO1xyXG4gICAgZXhwZWN0ZWRWYWx1ZUluZGV4czogbnVtYmVyW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoZmlsdGVySXRlbXM6IEdlb0ZpbHRlckl0ZW1bXSkge1xyXG4gICAgICAgIHN1cGVyKGZpbHRlckl0ZW1zKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsaXplQ29yZSgpIHtcclxuICAgICAgICBsZXQgZXhwZWN0ZWRWYWx1ZSA9IHRoaXMuZmlsdGVySXRlbXNbMF0udmFsdWU7XHJcbiAgICAgICAgZXhwZWN0ZWRWYWx1ZSA9IGV4cGVjdGVkVmFsdWUuc2xpY2UoMSwgZXhwZWN0ZWRWYWx1ZS5sZW5ndGggLSAxKTtcclxuICAgICAgICB0aGlzLmV4cGVjdGVkVmFsdWVzID0gZXhwZWN0ZWRWYWx1ZS5zcGxpdChcIixcIik7XHJcbiAgICAgICAgdGhpcy5rZXkgPSB0aGlzLmZpbHRlckl0ZW1zWzBdLmtleTtcclxuICAgIH1cclxuXHJcbiAgICBtYXRjaEZlYXR1cmVDb3JlKGZlYXR1cmU6IGFueSwgem9vbTogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRWYWx1ZTtcclxuICAgICAgICBsZXQgY3VycmVudEV4cGVjdGVkVmFsdWVzO1xyXG4gICAgICAgIGlmICh0aGlzLnJlcGxhY2VkVmFsdWVUb0luZGV4KSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRWYWx1ZSA9IGZlYXR1cmUucHJvcGVydGllc0luZGV4W3RoaXMua2V5SW5kZXhdO1xyXG4gICAgICAgICAgICBjdXJyZW50RXhwZWN0ZWRWYWx1ZXMgPSB0aGlzLmV4cGVjdGVkVmFsdWVJbmRleHM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjdXJyZW50VmFsdWUgPSBmZWF0dXJlLnByb3BlcnRpZXNbdGhpcy5rZXldO1xyXG4gICAgICAgICAgICBjdXJyZW50RXhwZWN0ZWRWYWx1ZXMgPSB0aGlzLmV4cGVjdGVkVmFsdWVzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmZpbHRlckl0ZW1zWzBdLm9wZXJhdG9yKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCI9XCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVudEV4cGVjdGVkVmFsdWVzLmluY2x1ZGVzKGN1cnJlbnRWYWx1ZSk7XHJcbiAgICAgICAgICAgIGNhc2UgXCIhPVwiOlxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICFjdXJyZW50RXhwZWN0ZWRWYWx1ZXMuaW5jbHVkZXMoY3VycmVudFZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVwbGFjZVZhdWxlc1RvUGJmSW5kZXhDb3JlKHBiZkxheWVyKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmluaXRpYWxpemVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5rZXlJbmRleCA9IHBiZkxheWVyLmtleXMuaW5kZXhPZih0aGlzLmtleSk7XHJcblxyXG4gICAgICAgIGxldCByZXBsYWNlZEV4cGVjdGVkVmF1bGVzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDAsIGpqID0gdGhpcy5leHBlY3RlZFZhbHVlcy5sZW5ndGg7IGogPCBqajsgaisrKSB7XHJcbiAgICAgICAgICAgIGxldCBudW1iZXJWYWx1ZSA9ICt0aGlzLmV4cGVjdGVkVmFsdWVzW2pdO1xyXG4gICAgICAgICAgICBpZiAoaXNOYU4obnVtYmVyVmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICByZXBsYWNlZEV4cGVjdGVkVmF1bGVzLnB1c2gocGJmTGF5ZXIudmFsdWVzLmluZGV4T2YodGhpcy5leHBlY3RlZFZhbHVlc1tqXSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVwbGFjZWRFeHBlY3RlZFZhdWxlcy5wdXNoKHBiZkxheWVyLnZhbHVlcy5pbmRleE9mKG51bWJlclZhbHVlKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZXhwZWN0ZWRWYWx1ZUluZGV4cyA9IHJlcGxhY2VkRXhwZWN0ZWRWYXVsZXM7XHJcbiAgICAgICAgdGhpcy5yZXBsYWNlZFZhbHVlVG9JbmRleCA9IHRydWU7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZmlsdGVyL2dlb1N0cmluZ0F0dHJpYnV0ZUZpbHRlci50cyIsImltcG9ydCB7IEdlb0ZpbHRlciB9IGZyb20gXCIuL2dlb0ZpbHRlclwiO1xyXG5pbXBvcnQgeyBHZW9GaWx0ZXJJdGVtIH0gZnJvbSBcIi4vZ2VvRmlsdGVySXRlbVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdlb1JlZ2V4RmlsdGVyIGV4dGVuZHMgR2VvRmlsdGVyIHtcclxuICAgIHJlZ2V4OiBSZWdFeHA7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZmlsdGVySXRlbXM6IEdlb0ZpbHRlckl0ZW1bXSkge1xyXG4gICAgICAgIHN1cGVyKGZpbHRlckl0ZW1zKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsaXplQ29yZSgpIHtcclxuICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLmZpbHRlckl0ZW1zWzBdLnZhbHVlO1xyXG4gICAgICAgIHZhbHVlID0gdmFsdWUuc2xpY2UoMiwgdmFsdWUubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgdGhpcy5yZWdleCA9IG5ldyBSZWdFeHAodmFsdWUsIFwiZ1wiKTtcclxuXHJcbiAgICAgICAgdGhpcy5rZXkgPSB0aGlzLmZpbHRlckl0ZW1zWzBdLmtleTtcclxuICAgIH1cclxuXHJcbiAgICBtYXRjaEZlYXR1cmVDb3JlKGZlYXR1cmU6IGFueSwgem9vbTogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRWYWx1ZTtcclxuICAgICAgICBpZiAodGhpcy5yZXBsYWNlZFZhbHVlVG9JbmRleCkge1xyXG4gICAgICAgICAgICBjdXJyZW50VmFsdWUgPSBmZWF0dXJlLnByb3BlcnRpZXNbdGhpcy5rZXldO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY3VycmVudFZhbHVlID0gZmVhdHVyZS5wcm9wZXJ0aWVzW3RoaXMua2V5XTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghY3VycmVudFZhbHVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjdXJyZW50VmFsdWUudG9TdHJpbmcoKS5tYXRjaCh0aGlzLnJlZ2V4KSAhPT0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICByZXBsYWNlVmF1bGVzVG9QYmZJbmRleENvcmUocGJmTGF5ZXIpIHtcclxuICAgICAgICB0aGlzLnJlcGxhY2VkVmFsdWVUb0luZGV4ID0gdHJ1ZTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZmlsdGVyL2dlb1JlZ2V4RmlsdGVyLnRzIiwiaW1wb3J0IHsgR2VvRmlsdGVySXRlbSB9IGZyb20gXCIuL2dlb0ZpbHRlckl0ZW1cIjtcclxuaW1wb3J0IHsgR2VvUmFuZ2VGaWx0ZXIgfSBmcm9tIFwiLi9nZW9SYW5nZUZpbHRlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdlb051bWJlckF0dHJpYnV0ZUZpbHRlciBleHRlbmRzIEdlb1JhbmdlRmlsdGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGZpbHRlckl0ZW1zOiBHZW9GaWx0ZXJJdGVtW10pIHtcclxuICAgICAgICBzdXBlcihmaWx0ZXJJdGVtcyk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2ZpbHRlci9nZW9OdW1iZXJBdHRyaWJ1dGVGaWx0ZXIudHMiLCJpbXBvcnQgeyBHZW9TdHlsZSB9IGZyb20gXCIuL2dlb1N0eWxlXCI7XHJcbmltcG9ydCB7IFV0aWwgfSBmcm9tIFwiLi4vdXRpbFwiO1xyXG5pbXBvcnQgeyBHZW9CcnVzaCB9IGZyb20gXCIuLi9zdHlsZS9nZW9CcnVzaFwiO1xyXG5pbXBvcnQgeyBHZW9CcnVzaFR5cGUgfSBmcm9tIFwiLi9nZW9CcnVzaFR5cGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHZW9BcmVhU3R5bGUgZXh0ZW5kcyBHZW9TdHlsZSB7XHJcblxyXG4gICAgc3RhdGljIGFyZWFTdHlsZSA9IG5ldyBvbC5zdHlsZS5TdHlsZSh7XHJcbiAgICAgICAgZmlsbDogbmV3IG9sLnN0eWxlLkZpbGwoe30pLFxyXG4gICAgICAgIHN0cm9rZTogbmV3IG9sLnN0eWxlLlN0cm9rZSh7fSlcclxuICAgIH0pO1xyXG5cclxuICAgIHN0YXRpYyBhcmVhU2hhZG93U3R5bGUgPSBuZXcgb2wuc3R5bGUuU3R5bGUoe1xyXG4gICAgICAgIGZpbGw6IG5ldyBvbC5zdHlsZS5GaWxsKHt9KSxcclxuICAgIH0pO1xyXG5cclxuICAgIGJydXNoVHlwZTogc3RyaW5nO1xyXG4gICAgcm90YXRlQW5nbGU6IG51bWJlcjtcclxuICAgIGR4OiBudW1iZXI7XHJcbiAgICBkeTogbnVtYmVyO1xyXG4gICAgZmlsbDogc3RyaW5nO1xyXG4gICAgZm9yZWdyb3VuZEZpbGw6IHN0cmluZztcclxuICAgIGdhbW1hOiBzdHJpbmc7XHJcbiAgICBnZW9tZXRyeVRyYW5zZm9ybTogc3RyaW5nO1xyXG4gICAgaGF0Y2hTdHlsZTogc3RyaW5nO1xyXG4gICAgb3BhY2l0eTogbnVtYmVyO1xyXG4gICAgb3V0bGluZUNvbG9yOiBzdHJpbmc7XHJcbiAgICBvdXRsaW5lRGFzaEFycmF5OiBhbnk7XHJcbiAgICBvdXRsaW5lT3BhY2l0eTogbnVtYmVyO1xyXG4gICAgb3V0bGluZVdpZHRoOiBudW1iZXI7XHJcbiAgICBsaW5lYXJHcmFkaWVudDogc3RyaW5nO1xyXG4gICAgcmFkaWFsR3JhZGllbnQ6IHN0cmluZztcclxuICAgIHRleHR1cmVGaWxlOiBzdHJpbmc7XHJcbiAgICBzaGFkb3dDb2xvcjogc3RyaW5nO1xyXG4gICAgc2hhZG93RHg6IG51bWJlcjtcclxuICAgIHNoYWRvd0R5OiBudW1iZXI7XHJcblxyXG4gICAgYnJ1c2hPcHRpb25zOiBhbnk7XHJcbiAgICBnZW9CcnVzaDogc3RyaW5nO1xyXG4gICAgY29udmVydGVkT3V0bGluZUNvbG9yOiBzdHJpbmc7XHJcbiAgICBjb252ZXJ0ZWRPdXRsaW5lRGFzaEFycmF5OiBudW1iZXJbXTtcclxuICAgIGNvbnZlcnRlZFNoYWRvd0NvbG9yOiBzdHJpbmc7XHJcbiAgICBnZW9tZXRyeVRyYW5zZm9ybVZhbHVlOiBhbnk7XHJcbiAgICBzaGFkb3dUcmFuc2xhdGU6IHN0cmluZztcclxuICAgIHNoYWRvd1RyYW5zbGF0ZVZhbHVlQnlSZXNvbHV0aW9uOiBhbnk7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc3R5bGVKc29uPzogYW55KSB7XHJcbiAgICAgICAgc3VwZXIoc3R5bGVKc29uKTtcclxuICAgICAgICBpZiAoc3R5bGVKc29uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnJ1c2hUeXBlID0gc3R5bGVKc29uW1wicG9seWdvbi1icnVzaC10eXBlXCJdO1xyXG4gICAgICAgICAgICB0aGlzLnJvdGF0ZUFuZ2xlID0gc3R5bGVKc29uW1wicG9seWdvbi1yb3RhdGUtYW5nbGVcIl07XHJcbiAgICAgICAgICAgIHRoaXMuZHggPSBzdHlsZUpzb25bXCJwb2x5Z29uLWR4XCJdO1xyXG4gICAgICAgICAgICB0aGlzLmR5ID0gc3R5bGVKc29uW1wicG9seWdvbi1keVwiXTtcclxuICAgICAgICAgICAgdGhpcy5maWxsID0gc3R5bGVKc29uW1wicG9seWdvbi1maWxsXCJdO1xyXG4gICAgICAgICAgICB0aGlzLmZvcmVncm91bmRGaWxsID0gc3R5bGVKc29uW1wicG9seWdvbi1mb3JlZ3JvdW5kLWZpbGxcIl07XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtbWEgPSBzdHlsZUpzb25bXCJwb2x5Z29uLWdhbW1hXCJdID8gc3R5bGVKc29uW1wicG9seWdvbi1nYW1tYVwiXSA6IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnlUcmFuc2Zvcm0gPSBzdHlsZUpzb25bXCJwb2x5Z29uLWdlb21ldHJ5LXRyYW5zZm9ybVwiXTtcclxuICAgICAgICAgICAgdGhpcy5oYXRjaFN0eWxlID0gc3R5bGVKc29uW1wicG9seWdvbi1oYXRjaC1zdHlsZVwiXTtcclxuICAgICAgICAgICAgdGhpcy5vcGFjaXR5ID0gc3R5bGVKc29uW1wicG9seWdvbi1vcGFjaXR5XCJdO1xyXG4gICAgICAgICAgICB0aGlzLm91dGxpbmVDb2xvciA9IHN0eWxlSnNvbltcInBvbHlnb24tb3V0bGluZS1jb2xvclwiXTtcclxuICAgICAgICAgICAgdGhpcy5vdXRsaW5lRGFzaEFycmF5ID0gc3R5bGVKc29uW1wicG9seWdvbi1vdXRsaW5lLWRhc2hhcnJheVwiXTtcclxuICAgICAgICAgICAgdGhpcy5vdXRsaW5lT3BhY2l0eSA9IHN0eWxlSnNvbltcInBvbHlnb24tb3V0bGluZS1vcGFjaXR5XCJdO1xyXG4gICAgICAgICAgICB0aGlzLm91dGxpbmVXaWR0aCA9IHN0eWxlSnNvbltcInBvbHlnb24tb3V0bGluZS13aWR0aFwiXTtcclxuICAgICAgICAgICAgdGhpcy5saW5lYXJHcmFkaWVudCA9IHN0eWxlSnNvbltcInBvbHlnb24tbGluZWFyLWdyYWRpZW50XCJdO1xyXG4gICAgICAgICAgICB0aGlzLnJhZGlhbEdyYWRpZW50ID0gc3R5bGVKc29uW1wicG9seWdvbi1yYWRpYWwtZ3JhZGllbnRcIl07XHJcbiAgICAgICAgICAgIHRoaXMudGV4dHVyZUZpbGUgPSBzdHlsZUpzb25bXCJwb2x5Z29uLXRleHR1cmUtZmlsZVwiXTtcclxuICAgICAgICAgICAgdGhpcy5zaGFkb3dDb2xvciA9IHN0eWxlSnNvbltcInBvbHlnb24tc2hhZG93LWNvbG9yXCJdO1xyXG4gICAgICAgICAgICB0aGlzLnNoYWRvd0R4ID0gc3R5bGVKc29uW1wicG9seWdvbi1zaGFkb3ctZHhcIl07XHJcbiAgICAgICAgICAgIHRoaXMuc2hhZG93RHkgPSBzdHlsZUpzb25bXCJwb2x5Z29uLXNoYWRvdy1keVwiXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdGlhbGl6ZUNvcmUoKSB7XHJcbiAgICAgICAgdGhpcy5icnVzaFR5cGUgPSB0aGlzLmJydXNoVHlwZSB8fCBcInNvbGlkXCI7XHJcbiAgICAgICAgdGhpcy5icnVzaE9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGZpbGxDb2xvcjogdGhpcy5maWxsLFxyXG4gICAgICAgICAgICBmaWxsT3BhY2l0eTogdGhpcy5vcGFjaXR5LFxyXG4gICAgICAgICAgICBsaW5lYXJHcmFkaWVudDogdGhpcy5saW5lYXJHcmFkaWVudCxcclxuICAgICAgICAgICAgcmFkaWFsR3JhZGllbnQ6IHRoaXMucmFkaWFsR3JhZGllbnQsXHJcbiAgICAgICAgICAgIHRleHR1cmVGaWxlOiB0aGlzLnRleHR1cmVGaWxlLFxyXG4gICAgICAgICAgICBmb3JlZ3JvdW5kRmlsbDogdGhpcy5mb3JlZ3JvdW5kRmlsbCxcclxuICAgICAgICAgICAgaGF0Y2hTdHlsZTogdGhpcy5oYXRjaFN0eWxlXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZ2VvbWV0cnlUcmFuc2Zvcm0pIHtcclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeVRyYW5zZm9ybVZhbHVlID0gdGhpcy5nZXRUcmFuc2Zvcm1WYWx1ZXModGhpcy5nZW9tZXRyeVRyYW5zZm9ybSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5icnVzaFR5cGUgPT09IFwic29saWRcIiB8fCB0aGlzLmJydXNoVHlwZSA9PT0gXCJoYXRjaFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VvQnJ1c2ggPSBHZW9CcnVzaC5jcmVhdGVCcnVzaEJ5VHlwZSh0aGlzLmJydXNoVHlwZSwgbnVsbCwgbnVsbCwgdGhpcy5icnVzaE9wdGlvbnMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMub3V0bGluZUNvbG9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udmVydGVkT3V0bGluZUNvbG9yID0gR2VvU3R5bGUudG9SR0JBQ29sb3IodGhpcy5vdXRsaW5lQ29sb3IsIHRoaXMub3V0bGluZU9wYWNpdHkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5vdXRsaW5lRGFzaEFycmF5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udmVydGVkT3V0bGluZURhc2hBcnJheSA9IHRoaXMub3V0bGluZURhc2hBcnJheS5zcGxpdChcIixcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnNoYWRvd0NvbG9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udmVydGVkU2hhZG93Q29sb3IgPSBHZW9TdHlsZS50b1JHQkFDb2xvcih0aGlzLnNoYWRvd0NvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zaGFkb3dUcmFuc2xhdGVWYWx1ZUJ5UmVzb2x1dGlvbiA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRyYW5zZm9ybVZhbHVlcyh0cmFuc2Zvcm06IHN0cmluZyk6IGFueSB7XHJcbiAgICAgICAgLy8gZ2V0IHRyYW5zZm9ybSB2YWx1ZXMgd2hpY2ggbG9vayBsaWtlIHRyYW5zZm9ybSh2YWx1ZTEsIHZhbHVlMilcclxuICAgICAgICBsZXQgc3RhcnQgPSB0cmFuc2Zvcm0uaW5kZXhPZihcIihcIik7XHJcbiAgICAgICAgbGV0IGVuZCA9IHRyYW5zZm9ybS5pbmRleE9mKFwiKVwiKTtcclxuICAgICAgICBsZXQgdmFsdWVTdHJpbmcgPSB0cmFuc2Zvcm0uc3Vic3RyaW5nKHN0YXJ0ICsgMSwgZW5kKTtcclxuXHJcbiAgICAgICAgbGV0IHZhbHVlcyA9IFtdO1xyXG4gICAgICAgIGlmICh2YWx1ZVN0cmluZy5pbmNsdWRlcyhcIixcIikpIHtcclxuICAgICAgICAgICAgdmFsdWVzID0gdmFsdWVTdHJpbmcuc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhbHVlcy5wdXNoKHZhbHVlU3RyaW5nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB2YWx1ZXM7XHJcbiAgICB9XHJcblxyXG4gICAgR2V0VHJhbnNmb3JtZWRDb29yZGluYXRlcyhmZWF0dXJlKSB7XHJcbiAgICAgICAgbGV0IHRtcEZsYXRDb29yZGluYXRlcyA9IGZlYXR1cmUuZ2V0RmxhdENvb3JkaW5hdGVzKCk7XHJcbiAgICAgICAgbGV0IHRtcENvb3JkaW5hdGVzOiBvbC5Db29yZGluYXRlW11bXSA9IFtbXV07XHJcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRtcEZsYXRDb29yZGluYXRlcy5sZW5ndGg7IGkgKz0gMikge1xyXG4gICAgICAgICAgICB0bXBDb29yZGluYXRlc1tpbmRleF0gfHwgKHRtcENvb3JkaW5hdGVzW2luZGV4XSA9IFtdKTtcclxuICAgICAgICAgICAgdG1wQ29vcmRpbmF0ZXNbaW5kZXhdLnB1c2goW3RtcEZsYXRDb29yZGluYXRlc1tpXSwgdG1wRmxhdENvb3JkaW5hdGVzW2kgKyAxXV0pO1xyXG4gICAgICAgICAgICBpZiAodG1wQ29vcmRpbmF0ZXNbaW5kZXhdLmxlbmd0aCA+IDMgJiYgdG1wQ29vcmRpbmF0ZXNbaW5kZXhdWzBdWzBdID09PSB0bXBGbGF0Q29vcmRpbmF0ZXNbaV0gJiYgdG1wQ29vcmRpbmF0ZXNbaW5kZXhdWzBdWzFdID09PSB0bXBGbGF0Q29vcmRpbmF0ZXNbaSArIDFdKSB7XHJcbiAgICAgICAgICAgICAgICBpbmRleCsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBnZW9tZXRyeSA9IG5ldyBvbC5nZW9tLlBvbHlnb24odG1wQ29vcmRpbmF0ZXMsIFwiWFlcIik7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmdlb21ldHJ5VHJhbnNmb3JtLnN0YXJ0c1dpdGgoXCJ0cmFuc2xhdGVcIikpIHtcclxuICAgICAgICAgICAgZ2VvbWV0cnkudHJhbnNsYXRlKCt0aGlzLmdlb21ldHJ5VHJhbnNmb3JtVmFsdWVbMF0udHJpbSgpLCArdGhpcy5nZW9tZXRyeVRyYW5zZm9ybVZhbHVlWzFdLnRyaW0oKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZ2VvbWV0cnlUcmFuc2Zvcm0uc3RhcnRzV2l0aChcInNjYWxlXCIpKSB7XHJcbiAgICAgICAgICAgIGdlb21ldHJ5LnNjYWxlKCt0aGlzLmdlb21ldHJ5VHJhbnNmb3JtVmFsdWVbMF0udHJpbSgpLCArdGhpcy5nZW9tZXRyeVRyYW5zZm9ybVZhbHVlWzFdLnRyaW0oKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZ2VvbWV0cnlUcmFuc2Zvcm0uc3RhcnRzV2l0aChcInJvdGF0ZVwiKSkge1xyXG4gICAgICAgICAgICBsZXQgY2VudGVyID0gb2wuZXh0ZW50LmdldENlbnRlcihnZW9tZXRyeS5nZXRFeHRlbnQoKSk7XHJcbiAgICAgICAgICAgIGxldCBhbmdsZSA9ICt0aGlzLmdlb21ldHJ5VHJhbnNmb3JtVmFsdWVbMF0udHJpbSgpICogTWF0aC5QSSAvIDE4MDtcclxuICAgICAgICAgICAgZ2VvbWV0cnkucm90YXRlKGFuZ2xlLCBjZW50ZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmdlb21ldHJ5VHJhbnNmb3JtLnN0YXJ0c1dpdGgoXCJza2V3XCIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2tld0dlb21ldHJ5KGdlb21ldHJ5LCArdGhpcy5nZW9tZXRyeVRyYW5zZm9ybVZhbHVlWzBdLnRyaW0oKSwgK3RoaXMuZ2VvbWV0cnlUcmFuc2Zvcm1WYWx1ZVsxXS50cmltKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICg8YW55Pmdlb21ldHJ5KS5mbGF0Q29vcmRpbmF0ZXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q29udmVydGVkU3R5bGVDb3JlKGZlYXR1cmU6IGFueSwgcmVzb2x1dGlvbjogbnVtYmVyLCBvcHRpb25zKTogb2wuc3R5bGUuU3R5bGVbXSB7XHJcbiAgICAgICAgbGV0IGxlbmd0aCA9IDA7XHJcbiAgICAgICAgdGhpcy5zdHlsZXMgPSBbXTtcclxuICAgICAgICBpZiAodGhpcy5maWxsIHx8ICh0aGlzLm91dGxpbmVDb2xvciAmJiB0aGlzLm91dGxpbmVXaWR0aCkgfHwgdGhpcy5saW5lYXJHcmFkaWVudCB8fCB0aGlzLnJhZGlhbEdyYWRpZW50KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmdlb21ldHJ5VHJhbnNmb3JtKSB7XHJcbiAgICAgICAgICAgICAgICBmZWF0dXJlLmZsYXRDb29yZGluYXRlc18gPSB0aGlzLkdldFRyYW5zZm9ybWVkQ29vcmRpbmF0ZXMoZmVhdHVyZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNoYWRvd0R4IHx8IHRoaXMuc2hhZG93RHkpIHtcclxuICAgICAgICAgICAgICAgIGxldCBzaGFkb3dUcmFuc2xhdGVWYWx1ZSA9IHRoaXMuc2hhZG93VHJhbnNsYXRlVmFsdWVCeVJlc29sdXRpb25bcmVzb2x1dGlvbl07XHJcbiAgICAgICAgICAgICAgICBpZiAoc2hhZG93VHJhbnNsYXRlVmFsdWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0bXBSZXNvbHV0aW9uID0gTWF0aC5yb3VuZChyZXNvbHV0aW9uICogMTAwMDAwMDAwKSAvIDEwMDAwMDAwMDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNoYWRvd1RyYW5zbGF0ZSA9IChgdHJhbnNsYXRlKCR7KHRoaXMuc2hhZG93RHggPyB0aGlzLnNoYWRvd0R4IDogMCkgKiB0bXBSZXNvbHV0aW9ufSwkeyh0aGlzLnNoYWRvd0R5ID8gdGhpcy5zaGFkb3dEeSA6IDApICogdG1wUmVzb2x1dGlvbn0pYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hhZG93VHJhbnNsYXRlVmFsdWUgPSB0aGlzLmdldFRyYW5zZm9ybVZhbHVlcyh0aGlzLnNoYWRvd1RyYW5zbGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGFkb3dUcmFuc2xhdGVWYWx1ZUJ5UmVzb2x1dGlvbltyZXNvbHV0aW9uXSA9IHNoYWRvd1RyYW5zbGF0ZVZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGxldCB0bXBGbGF0Q29vcmRpbmF0ZXMgPSBmZWF0dXJlLmdldEZsYXRDb29yZGluYXRlcygpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG5ld0ZsYXRDb29yZGluYXRlcyA9ICg8YW55Pm9sLmdlb20pLmZsYXQudHJhbnNmb3JtLnRyYW5zbGF0ZSh0bXBGbGF0Q29vcmRpbmF0ZXMsIDAsIHRtcEZsYXRDb29yZGluYXRlcy5sZW5ndGgsIDIsICtzaGFkb3dUcmFuc2xhdGVWYWx1ZVswXS50cmltKCksICtzaGFkb3dUcmFuc2xhdGVWYWx1ZVsxXS50cmltKCksIHVuZGVmaW5lZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHRtcENvb3JkaW5hdGVzOiBvbC5Db29yZGluYXRlW11bXSA9IFtbXV07XHJcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdGbGF0Q29vcmRpbmF0ZXMubGVuZ3RoOyBpICs9IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0bXBDb29yZGluYXRlc1tpbmRleF0gfHwgKHRtcENvb3JkaW5hdGVzW2luZGV4XSA9IFtdKTtcclxuICAgICAgICAgICAgICAgICAgICB0bXBDb29yZGluYXRlc1tpbmRleF0ucHVzaChbbmV3RmxhdENvb3JkaW5hdGVzW2ldLCBuZXdGbGF0Q29vcmRpbmF0ZXNbaSArIDFdXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRtcENvb3JkaW5hdGVzW2luZGV4XS5sZW5ndGggPiAzICYmIHRtcENvb3JkaW5hdGVzW2luZGV4XVswXVswXSA9PT0gbmV3RmxhdENvb3JkaW5hdGVzW2ldICYmIHRtcENvb3JkaW5hdGVzW2luZGV4XVswXVsxXSA9PT0gbmV3RmxhdENvb3JkaW5hdGVzW2kgKyAxXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxldCBnZW9tZXRyeSA9IG5ldyBvbC5nZW9tLlBvbHlnb24odG1wQ29vcmRpbmF0ZXMsIFwiWFlcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgR2VvQXJlYVN0eWxlLmFyZWFTaGFkb3dTdHlsZS5nZXRGaWxsKCkuc2V0Q29sb3IodGhpcy5jb252ZXJ0ZWRTaGFkb3dDb2xvcik7XHJcblxyXG4gICAgICAgICAgICAgICAgR2VvQXJlYVN0eWxlLmFyZWFTaGFkb3dTdHlsZS5zZXRHZW9tZXRyeShnZW9tZXRyeSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0eWxlc1tsZW5ndGgrK10gPSBHZW9BcmVhU3R5bGUuYXJlYVNoYWRvd1N0eWxlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5maWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdlb0JydXNoID0gR2VvQnJ1c2guY3JlYXRlQnJ1c2hCeVR5cGUodGhpcy5icnVzaFR5cGUsIGZlYXR1cmUsIHJlc29sdXRpb24sIHRoaXMuYnJ1c2hPcHRpb25zKTtcclxuICAgICAgICAgICAgICAgIEdlb0FyZWFTdHlsZS5hcmVhU3R5bGUuZ2V0RmlsbCgpLnNldENvbG9yKHRoaXMuZ2VvQnJ1c2gpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBzdHJva2UgdG8gaGFuZGxlIG91dGxpbmVDb2xvciwgb3V0bGluZURhc2hBcnJheSwgb3V0bGluZU9wYWNpdHkgYW5kIG91dGxpbmVXaWR0aFxyXG4gICAgICAgICAgICBpZiAodGhpcy5vdXRsaW5lQ29sb3IgfHwgdGhpcy5vdXRsaW5lRGFzaEFycmF5IHx8IHRoaXMub3V0bGluZVdpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3U3Ryb2tlID0gbmV3IG9sLnN0eWxlLlN0cm9rZSgpO1xyXG4gICAgICAgICAgICAgICAgbmV3U3Ryb2tlLnNldENvbG9yKHRoaXMuY29udmVydGVkT3V0bGluZUNvbG9yKTtcclxuICAgICAgICAgICAgICAgIG5ld1N0cm9rZS5zZXRMaW5lRGFzaCh0aGlzLmNvbnZlcnRlZE91dGxpbmVEYXNoQXJyYXkpO1xyXG4gICAgICAgICAgICAgICAgbmV3U3Ryb2tlLnNldFdpZHRoKHRoaXMub3V0bGluZVdpZHRoKTtcclxuICAgICAgICAgICAgICAgIEdlb0FyZWFTdHlsZS5hcmVhU3R5bGUuc2V0U3Ryb2tlKG5ld1N0cm9rZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBHZW9BcmVhU3R5bGUuYXJlYVN0eWxlLnNldFN0cm9rZSh1bmRlZmluZWQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBHZW9BcmVhU3R5bGUuYXJlYVN0eWxlLnNldEdlb21ldHJ5KGZlYXR1cmUpO1xyXG4gICAgICAgICAgICB0aGlzLnN0eWxlc1tsZW5ndGgrK10gPSBHZW9BcmVhU3R5bGUuYXJlYVN0eWxlO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZ2FtbWEgIT09IHVuZGVmaW5lZCAmJiBvcHRpb25zLmxheWVyKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3R5bGVHYW1tYSA9IHRoaXMuZ2FtbWE7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLmxheWVyLm9uKFwicHJlY29tcG9zZVwiLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZ0LmNvbnRleHQuaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gc3R5bGVHYW1tYTtcclxuICAgICAgICAgICAgICAgICAgICBldnQuY29udGV4dC53ZWJraXRJbWFnZVNtb290aGluZ0VuYWJsZWQgPSBzdHlsZUdhbW1hO1xyXG4gICAgICAgICAgICAgICAgICAgIGV2dC5jb250ZXh0Lm1vekltYWdlU21vb3RoaW5nRW5hYmxlZCA9IHN0eWxlR2FtbWE7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZ0LmNvbnRleHQubXNJbWFnZVNtb290aGluZ0VuYWJsZWQgPSBzdHlsZUdhbW1hO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnN0eWxlcztcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdHlsZS9nZW9BcmVhU3R5bGUudHMiLCJpbXBvcnQgeyBCcnVzaFR5cGVPcHRpb25zIH0gZnJvbSBcIi4vYnJ1c2hUeXBlT3B0aW9uc1wiO1xyXG5pbXBvcnQgeyBHZW9TdHlsZSB9IGZyb20gXCIuL2dlb1N0eWxlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgR2VvQnJ1c2gge1xyXG4gICAgc3RhdGljIGdlb0JydXNoRnVuY3Rpb25zID0ge1xyXG4gICAgICAgIHNvbGlkOiBHZW9CcnVzaC5jcmVhdGVHZW9Tb2xpZEJydXNoLFxyXG4gICAgICAgIHJhZGlhbGdyYWRpZW50OiBHZW9CcnVzaC5jcmVhdGVSYWRpYWxHcmFkaWVudENvbG9yLFxyXG4gICAgICAgIGxpbmVhcmdyYWRpZW50OiBHZW9CcnVzaC5jcmVhdGVMaW5lYXJHcmFkaWVudENvbG9yLFxyXG4gICAgICAgIGhhdGNoOiBHZW9CcnVzaC5jcmVhdGVQYXR0ZXJuQ29sb3IsXHJcbiAgICAgICAgdGV4dHVyZTogR2VvQnJ1c2guY3JlYXRlSW1hZ2VDYW52YXNQYXR0ZXJuXHJcbiAgICB9O1xyXG5cclxuICAgIHN0YXRpYyBnZW9QYXR0ZXJuRnVuY3Rpb25zID0ge1xyXG4gICAgICAgIENyb3NzOiBHZW9CcnVzaC5nZXRDcm9zc1BhdHRlcm4sXHJcbiAgICAgICAgSG9yaXpvbnRhbDogR2VvQnJ1c2guZ2V0SG9yaXpvbnRhbFBhdHRlcm4sXHJcbiAgICAgICAgVmVydGljYWw6IEdlb0JydXNoLmdldFZlcnRpY2FsUGF0dGVybixcclxuICAgICAgICBGb3J3YXJkRGlhZ29uYWw6IEdlb0JydXNoLmdldEZvcndhcmREaWFnb25hbFBhdHRlcm4sXHJcbiAgICAgICAgQmFja3dhcmREaWFnb25hbDogR2VvQnJ1c2guZ2V0QmFja3dhcmREaWFnb25hbFBhdHRlcm4sXHJcbiAgICAgICAgTGFyZ2VHcmlkOiBHZW9CcnVzaC5nZXRMYXJnZUdyaWRQYXR0ZXJuLFxyXG4gICAgICAgIERpYWdvbmFsQ3Jvc3M6IEdlb0JydXNoLmdldERpYWdvbmFsQ3Jvc3NQYXR0ZXJuLFxyXG4gICAgICAgIFBlcmNlbnQwNTogR2VvQnJ1c2guZ2V0UGVyY2VudDA1UGF0dGVybixcclxuICAgICAgICBQZXJjZW50MTA6IEdlb0JydXNoLmdldFBlcmNlbnQxMFBhdHRlcm4sXHJcbiAgICAgICAgUGVyY2VudDIwOiBHZW9CcnVzaC5nZXRQZXJjZW50MjBQYXR0ZXJuLFxyXG4gICAgICAgIFBlcmNlbnQyNTogR2VvQnJ1c2guZ2V0UGVyY2VudDI1UGF0dGVybixcclxuICAgICAgICBQZXJjZW50MzA6IEdlb0JydXNoLmdldFBlcmNlbnQzMFBhdHRlcm4sXHJcbiAgICAgICAgUGVyY2VudDQwOiBHZW9CcnVzaC5nZXRQZXJjZW50NDBQYXR0ZXJuLFxyXG4gICAgICAgIFBlcmNlbnQ1MDogR2VvQnJ1c2guZ2V0UGVyY2VudDUwUGF0dGVybixcclxuICAgICAgICBQZXJjZW50NjA6IEdlb0JydXNoLmdldFBlcmNlbnQ2MFBhdHRlcm4sXHJcbiAgICAgICAgUGVyY2VudDcwOiBHZW9CcnVzaC5nZXRQZXJjZW50NzBQYXR0ZXJuLFxyXG4gICAgICAgIFBlcmNlbnQ3NTogR2VvQnJ1c2guZ2V0UGVyY2VudDc1UGF0dGVybixcclxuICAgICAgICBQZXJjZW50ODA6IEdlb0JydXNoLmdldFBlcmNlbnQ4MFBhdHRlcm4sXHJcbiAgICAgICAgUGVyY2VudDkwOiBHZW9CcnVzaC5nZXRQZXJjZW50OTBQYXR0ZXJuLFxyXG4gICAgfTtcclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlQnJ1c2hCeVR5cGUoYnJ1c2hUeXBlOiBhbnksIGZlYXR1cmU6IGFueSwgcmVzb2x1dGlvbjogbnVtYmVyLCBicnVzaFR5cGVPcHRpb25zPzogQnJ1c2hUeXBlT3B0aW9ucykge1xyXG4gICAgICAgIGxldCBnZW9CcnVzaEZ1bmN0aW9uID0gdGhpcy5nZW9CcnVzaEZ1bmN0aW9uc1ticnVzaFR5cGVdO1xyXG4gICAgICAgIGlmICh0eXBlb2YgZ2VvQnJ1c2hGdW5jdGlvbiA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBnZW9CcnVzaEZ1bmN0aW9uKGZlYXR1cmUsIHJlc29sdXRpb24sIGJydXNoVHlwZU9wdGlvbnMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcmVnaXN0ZXJHZW9CcnVzaEZ1bmN0aW9uKGtleTogc3RyaW5nLCBnZW9CcnVzaEZ1bmN0aW9uOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmdlb0JydXNoRnVuY3Rpb25zW2tleV0gPSBnZW9CcnVzaEZ1bmN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGVHZW9Tb2xpZEJydXNoKGZlYXR1cmU6IGFueSwgcmVzb2x1dGlvbjogbnVtYmVyLCBnZW9CcnVzaE9wdGlvbnM6IEJydXNoVHlwZU9wdGlvbnMpIHtcclxuICAgICAgICBpZiAoZ2VvQnJ1c2hPcHRpb25zLmZpbGxDb2xvcikge1xyXG4gICAgICAgICAgICByZXR1cm4gR2VvU3R5bGUudG9SR0JBQ29sb3IoZ2VvQnJ1c2hPcHRpb25zLmZpbGxDb2xvciwgZ2VvQnJ1c2hPcHRpb25zLmZpbGxPcGFjaXR5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZVJhZGlhbEdyYWRpZW50Q29sb3IoZmVhdHVyZTogYW55LCByZXNvbHV0aW9uOiBudW1iZXIsIGdlb0JydXNoT3B0aW9uczogQnJ1c2hUeXBlT3B0aW9ucykge1xyXG4gICAgICAgIGxldCBleHRlbnQgPSBmZWF0dXJlLmdldEV4dGVudCgpO1xyXG5cclxuICAgICAgICAvLyBUT0RPOiB0cnkgdG8gY3JlYXRlIGl0IHdoZW4gY3JlYXRpbmcgdGhlIEdlb1N0eWxlLlxyXG4gICAgICAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG4gICAgICAgIGxldCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuXHJcbiAgICAgICAgLy8gVE9ETzogY2hlY2sgaWYgdGhlcmUgaXMgYSBkaWZmZXJlbmNlIGJ5IHNyaWQuXHJcbiAgICAgICAgbGV0IHdpZHRoID0gb2wuZXh0ZW50LmdldFdpZHRoKGV4dGVudCkgLyByZXNvbHV0aW9uICogb2wuaGFzLkRFVklDRV9QSVhFTF9SQVRJTztcclxuICAgICAgICBsZXQgaGVpZ2h0ID0gb2wuZXh0ZW50LmdldEhlaWdodChleHRlbnQpIC8gcmVzb2x1dGlvbiAqIG9sLmhhcy5ERVZJQ0VfUElYRUxfUkFUSU87XHJcbiAgICAgICAgLy8gVE9ETzogdGhlICh4MCx5MCkgaXMgdGhlIGNlbnRlciBvZiBmZWF0dXJlIGV4dGVudCwgb3B0aW1pemUgaXRcclxuICAgICAgICBsZXQgeDAgPSB3aWR0aCAvIDI7XHJcbiAgICAgICAgbGV0IHkwID0gaGVpZ2h0IC8gMjtcclxuICAgICAgICBsZXQgcjEgPSB4MDtcclxuICAgICAgICBsZXQgZ3JkID0gY29udGV4dC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4MCwgeTAsIDAsIHgwLCB5MCwgcjEpO1xyXG5cclxuICAgICAgICBsZXQgZ3JhZGllbnRDb2xvcnMgPSBnZW9CcnVzaE9wdGlvbnMucmFkaWFsR3JhZGllbnQuc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgIGZvciAobGV0IGdyYWRpZW50Q29sb3Igb2YgZ3JhZGllbnRDb2xvcnMpIHtcclxuICAgICAgICAgICAgZ3JhZGllbnRDb2xvciA9IGdyYWRpZW50Q29sb3IudHJpbSgpO1xyXG4gICAgICAgICAgICBsZXQgY29sb3JTdG9wID0gZ3JhZGllbnRDb2xvci5zdWJzdHIoMSwgZ3JhZGllbnRDb2xvci5sZW5ndGggLSAyKTtcclxuICAgICAgICAgICAgbGV0IGNzID0gY29sb3JTdG9wLnNwbGl0KFwiOlwiKTtcclxuICAgICAgICAgICAgZ3JkLmFkZENvbG9yU3RvcChOdW1iZXIoY3NbMF0udHJpbSgpKSwgR2VvU3R5bGUudG9SR0JBQ29sb3IoY3NbMV0udHJpbSgpLCBnZW9CcnVzaE9wdGlvbnMuZmlsbE9wYWNpdHkpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBncmQ7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZUxpbmVhckdyYWRpZW50Q29sb3IoZmVhdHVyZTogYW55LCByZXNvbHV0aW9uOiBudW1iZXIsIGdlb0JydXNoT3B0aW9uczogQnJ1c2hUeXBlT3B0aW9ucykge1xyXG4gICAgICAgIGxldCBleHRlbnQgPSBmZWF0dXJlLmdldEV4dGVudCgpO1xyXG4gICAgICAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG4gICAgICAgIGxldCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgICAgICAvLyBUT0RPOiB0aGUgZGlyZWN0aW9uIEFuZ2xlIGJ5IHgwLHkwLHgxLHkxLiB0aGlzLmRpcmVjdGlvbkFuZ2xlXHJcbiAgICAgICAgbGV0IGdyZCA9IGNvbnRleHQuY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgMCwgb2wuZXh0ZW50LmdldFdpZHRoKGV4dGVudCkgLyByZXNvbHV0aW9uICogb2wuaGFzLkRFVklDRV9QSVhFTF9SQVRJTywgb2wuZXh0ZW50LmdldEhlaWdodChleHRlbnQpIC8gcmVzb2x1dGlvbiAqIG9sLmhhcy5ERVZJQ0VfUElYRUxfUkFUSU8pO1xyXG5cclxuICAgICAgICBsZXQgZ3JhZGllbnRDb2xvcnMgPSBnZW9CcnVzaE9wdGlvbnMubGluZWFyR3JhZGllbnQuc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgIGZvciAobGV0IGdyYWRpZW50Q29sb3Igb2YgZ3JhZGllbnRDb2xvcnMpIHtcclxuICAgICAgICAgICAgZ3JhZGllbnRDb2xvciA9IGdyYWRpZW50Q29sb3IudHJpbSgpO1xyXG4gICAgICAgICAgICBsZXQgY29sb3JTdG9wID0gZ3JhZGllbnRDb2xvci5zdWJzdHIoMSwgZ3JhZGllbnRDb2xvci5sZW5ndGggLSAyKTtcclxuICAgICAgICAgICAgbGV0IGNzID0gY29sb3JTdG9wLnNwbGl0KFwiOlwiKTtcclxuICAgICAgICAgICAgZ3JkLmFkZENvbG9yU3RvcChOdW1iZXIoY3NbMF0udHJpbSgpKSwgR2VvU3R5bGUudG9SR0JBQ29sb3IoY3NbMV0udHJpbSgpLCBnZW9CcnVzaE9wdGlvbnMuZmlsbE9wYWNpdHkpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBncmQ7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZUltYWdlQ2FudmFzUGF0dGVybihmZWF0dXJlOiBhbnksIHJlc29sdXRpb246IG51bWJlciwgZ2VvQnJ1c2hPcHRpb25zOiBCcnVzaFR5cGVPcHRpb25zKSB7XHJcbiAgICAgICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcbiAgICAgICAgbGV0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgICAgIGxldCBpbWFnZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgIGltYWdlRWxlbWVudC5zcmMgPSBnZW9CcnVzaE9wdGlvbnMudGV4dHVyZUZpbGU7XHJcbiAgICAgICAgcmV0dXJuIGNvbnRleHQuY3JlYXRlUGF0dGVybihpbWFnZUVsZW1lbnQsIFwicmVwZWF0XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGVQYXR0ZXJuQ29sb3IoZmVhdHVyZTogYW55LCByZXNvbHV0aW9uOiBudW1iZXIsIGdlb0JydXNoT3B0aW9uczogQnJ1c2hUeXBlT3B0aW9ucykge1xyXG4gICAgICAgIGxldCBjcmVhdGVQYXR0ZXJuRnVuY3Rpb24gPSBHZW9CcnVzaC5nZW9QYXR0ZXJuRnVuY3Rpb25zW2dlb0JydXNoT3B0aW9ucy5oYXRjaFN0eWxlXTtcclxuICAgICAgICBpZiAodHlwZW9mIGNyZWF0ZVBhdHRlcm5GdW5jdGlvbiA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVQYXR0ZXJuRnVuY3Rpb24oZ2VvQnJ1c2hPcHRpb25zLmZpbGxDb2xvciwgZ2VvQnJ1c2hPcHRpb25zLmZvcmVncm91bmRGaWxsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBHZW9TdHlsZS50b1JHQkFDb2xvcihcclxuICAgICAgICAgICAgICAgIGdlb0JydXNoT3B0aW9ucy5maWxsQ29sb3IsXHJcbiAgICAgICAgICAgICAgICBnZW9CcnVzaE9wdGlvbnMuZmlsbE9wYWNpdHlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldENyb3NzUGF0dGVybihmaWxsOiBzdHJpbmcsIGZvcmVncm91bmRGaWxsOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgc2l6ZSA9IDY7XHJcbiAgICAgICAgbGV0IHJhdGlvID0gb2wuaGFzLkRFVklDRV9QSVhFTF9SQVRJTztcclxuXHJcblxyXG4gICAgICAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHNpemUgKiAyICogcmF0aW87XHJcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IHNpemUgKiAyICogcmF0aW87XHJcblxyXG4gICAgICAgIGxldCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGZpbGw7XHJcbiAgICAgICAgY29udGV4dC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG5cclxuICAgICAgICAvLyBob3Jpem9uIGxpbmVcclxuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGZvcmVncm91bmRGaWxsO1xyXG4gICAgICAgIGNvbnRleHQuZmlsbFJlY3QoMCwgY2FudmFzLmhlaWdodCAvIDIsIGNhbnZhcy53aWR0aCwgMSk7XHJcblxyXG4gICAgICAgIC8vIHZlcnRpY2FsIGxpbmVcclxuICAgICAgICBjb250ZXh0LmZpbGxSZWN0KGNhbnZhcy53aWR0aCAvIDIsIDAsIDEsIGNhbnZhcy5oZWlnaHQpO1xyXG5cclxuICAgICAgICByZXR1cm4gY29udGV4dC5jcmVhdGVQYXR0ZXJuKGNhbnZhcywgXCJyZXBlYXRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldEhvcml6b250YWxQYXR0ZXJuKGZpbGw6IHN0cmluZywgZm9yZWdyb3VuZEZpbGw6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBzaXplID0gNjtcclxuICAgICAgICBsZXQgcmF0aW8gPSBvbC5oYXMuREVWSUNFX1BJWEVMX1JBVElPO1xyXG5cclxuICAgICAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcclxuICAgICAgICBjYW52YXMud2lkdGggPSBzaXplICogMiAqIHJhdGlvO1xyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBzaXplICogMiAqIHJhdGlvO1xyXG5cclxuICAgICAgICBsZXQgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBmaWxsO1xyXG4gICAgICAgIGNvbnRleHQuZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgLy8gaG9yaXpvbiBsaW5lXHJcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBmb3JlZ3JvdW5kRmlsbDtcclxuICAgICAgICBjb250ZXh0LmZpbGxSZWN0KDAsIGNhbnZhcy5oZWlnaHQgLyAyLCBjYW52YXMud2lkdGgsIDEpO1xyXG5cclxuICAgICAgICByZXR1cm4gY29udGV4dC5jcmVhdGVQYXR0ZXJuKGNhbnZhcywgXCJyZXBlYXRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldFZlcnRpY2FsUGF0dGVybihmaWxsOiBzdHJpbmcsIGZvcmVncm91bmRGaWxsOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgc2l6ZSA9IDY7XHJcbiAgICAgICAgbGV0IHJhdGlvID0gb2wuaGFzLkRFVklDRV9QSVhFTF9SQVRJTztcclxuXHJcbiAgICAgICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcbiAgICAgICAgY2FudmFzLndpZHRoID0gc2l6ZSAqIDIgKiByYXRpbztcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gc2l6ZSAqIDIgKiByYXRpbztcclxuXHJcbiAgICAgICAgbGV0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gZmlsbDtcclxuICAgICAgICBjb250ZXh0LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcblxyXG4gICAgICAgIC8vIHZlcnRpY2FsIGxpbmVcclxuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGZvcmVncm91bmRGaWxsO1xyXG4gICAgICAgIGNvbnRleHQuZmlsbFJlY3QoY2FudmFzLndpZHRoIC8gMiwgMCwgMSwgY2FudmFzLmhlaWdodCk7XHJcblxyXG4gICAgICAgIHJldHVybiBjb250ZXh0LmNyZWF0ZVBhdHRlcm4oY2FudmFzLCBcInJlcGVhdFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0Rm9yd2FyZERpYWdvbmFsUGF0dGVybihmaWxsOiBzdHJpbmcsIGZvcmVncm91bmRGaWxsOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgc2l6ZSA9IDY7XHJcbiAgICAgICAgbGV0IHJhdGlvID0gb2wuaGFzLkRFVklDRV9QSVhFTF9SQVRJTztcclxuXHJcbiAgICAgICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcbiAgICAgICAgY2FudmFzLndpZHRoID0gc2l6ZSAqIDIgKiByYXRpbztcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gc2l6ZSAqIDIgKiByYXRpbztcclxuXHJcbiAgICAgICAgbGV0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gZmlsbDtcclxuICAgICAgICBjb250ZXh0LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcblxyXG4gICAgICAgIC8vIHZlcnRpY2FsIGxpbmVcclxuICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gZm9yZWdyb3VuZEZpbGw7XHJcbiAgICAgICAgY29udGV4dC5tb3ZlVG8oMCwgMCk7XHJcbiAgICAgICAgY29udGV4dC5saW5lVG8oY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xyXG5cclxuICAgICAgICAvLyBjb250ZXh0LmZpbGxTdHlsZSA9IGZvcmVncm91bmRGaWxsO1xyXG4gICAgICAgIC8vIGNvbnRleHQubW92ZVRvKC0xLCAtMSk7XHJcbiAgICAgICAgLy8gY29udGV4dC5saW5lVG8oMSwgLTEpO1xyXG4gICAgICAgIC8vIGNvbnRleHQubGluZVRvKGNhbnZhcy53aWR0aCArIDEsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgIC8vIGNvbnRleHQubGluZVRvKGNhbnZhcy53aWR0aCArIDEsIGNhbnZhcy5oZWlnaHQgKyAxKTtcclxuICAgICAgICAvLyBjb250ZXh0LmxpbmVUbyhjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQgKyAxKTtcclxuICAgICAgICAvLyBjb250ZXh0LmxpbmVUbygtMSwgMCk7XHJcbiAgICAgICAgLy8gY29udGV4dC5saW5lVG8oLTEsIC0xKTtcclxuICAgICAgICAvLyBjb250ZXh0LmNsb3NlUGF0aCgpO1xyXG4gICAgICAgIC8vIGNvbnRleHQuZmlsbCgpO1xyXG5cclxuICAgICAgICByZXR1cm4gY29udGV4dC5jcmVhdGVQYXR0ZXJuKGNhbnZhcywgXCJyZXBlYXRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldEJhY2t3YXJkRGlhZ29uYWxQYXR0ZXJuKGZpbGw6IHN0cmluZywgZm9yZWdyb3VuZEZpbGw6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBzaXplID0gNjtcclxuICAgICAgICBsZXQgcmF0aW8gPSBvbC5oYXMuREVWSUNFX1BJWEVMX1JBVElPO1xyXG5cclxuICAgICAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcclxuICAgICAgICBjYW52YXMud2lkdGggPSBzaXplICogMiAqIHJhdGlvO1xyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBzaXplICogMiAqIHJhdGlvO1xyXG5cclxuICAgICAgICBsZXQgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBmaWxsO1xyXG4gICAgICAgIGNvbnRleHQuZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgLy8gdmVydGljYWwgbGluZVxyXG4gICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBmb3JlZ3JvdW5kRmlsbDtcclxuICAgICAgICBjb250ZXh0Lm1vdmVUbyhjYW52YXMud2lkdGgsIDApO1xyXG4gICAgICAgIGNvbnRleHQubGluZVRvKDAsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBjb250ZXh0LmNyZWF0ZVBhdHRlcm4oY2FudmFzLCBcInJlcGVhdFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0UGVyY2VudDA1UGF0dGVybihmaWxsOiBzdHJpbmcsIGZvcmVncm91bmRGaWxsOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgc2l6ZSA9IDU7XHJcbiAgICAgICAgbGV0IHJhdGlvID0gb2wuaGFzLkRFVklDRV9QSVhFTF9SQVRJTztcclxuXHJcbiAgICAgICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcbiAgICAgICAgY2FudmFzLndpZHRoID0gc2l6ZSAqICgyICogMC45NSArIDEpICogcmF0aW87XHJcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IHNpemUgKiAoMiAqIDAuOTUgKyAxKSAqIHJhdGlvO1xyXG5cclxuICAgICAgICBsZXQgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBmaWxsO1xyXG4gICAgICAgIGNvbnRleHQuZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgLy8gcGVyY2VudGFnZSByZWdpb25cclxuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGZvcmVncm91bmRGaWxsO1xyXG4gICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgY29udGV4dC5tb3ZlVG8oY2FudmFzLndpZHRoICogMC41LCBjYW52YXMuaGVpZ2h0ICogMC40NSk7XHJcbiAgICAgICAgY29udGV4dC5saW5lVG8oY2FudmFzLndpZHRoICogMC41NSwgY2FudmFzLmhlaWdodCAqIDAuNSk7XHJcbiAgICAgICAgY29udGV4dC5saW5lVG8oY2FudmFzLndpZHRoICogMC41LCBjYW52YXMuaGVpZ2h0ICogMC41NSk7XHJcbiAgICAgICAgY29udGV4dC5saW5lVG8oY2FudmFzLndpZHRoICogMC40NSwgY2FudmFzLmhlaWdodCAqIDAuNSk7XHJcbiAgICAgICAgY29udGV4dC5saW5lVG8oY2FudmFzLndpZHRoICogMC41LCBjYW52YXMuaGVpZ2h0ICogMC40NSk7XHJcbiAgICAgICAgY29udGV4dC5jbG9zZVBhdGgoKTtcclxuICAgICAgICBjb250ZXh0LmZpbGwoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbnRleHQuY3JlYXRlUGF0dGVybihjYW52YXMsIFwicmVwZWF0XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRQZXJjZW50MTBQYXR0ZXJuKGZpbGw6IHN0cmluZywgZm9yZWdyb3VuZEZpbGw6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBzaXplID0gNTtcclxuICAgICAgICBsZXQgcmF0aW8gPSBvbC5oYXMuREVWSUNFX1BJWEVMX1JBVElPO1xyXG5cclxuICAgICAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcclxuICAgICAgICBjYW52YXMud2lkdGggPSBzaXplICogKDIgKiAwLjkgKyAxKSAqIHJhdGlvO1xyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBzaXplICogKDIgKiAwLjkgKyAxKSAqIHJhdGlvO1xyXG5cclxuICAgICAgICBsZXQgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBmaWxsO1xyXG4gICAgICAgIGNvbnRleHQuZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgLy8gcGVyY2VudGFnZSByZWdpb25cclxuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGZvcmVncm91bmRGaWxsO1xyXG4gICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgY29udGV4dC5tb3ZlVG8oY2FudmFzLndpZHRoICogMC41LCBjYW52YXMuaGVpZ2h0ICogMC40KTtcclxuICAgICAgICBjb250ZXh0LmxpbmVUbyhjYW52YXMud2lkdGggKiAwLjYsIGNhbnZhcy5oZWlnaHQgKiAwLjUpO1xyXG4gICAgICAgIGNvbnRleHQubGluZVRvKGNhbnZhcy53aWR0aCAqIDAuNSwgY2FudmFzLmhlaWdodCAqIDAuNik7XHJcbiAgICAgICAgY29udGV4dC5saW5lVG8oY2FudmFzLndpZHRoICogMC40LCBjYW52YXMuaGVpZ2h0ICogMC41KTtcclxuICAgICAgICBjb250ZXh0LmxpbmVUbyhjYW52YXMud2lkdGggKiAwLjUsIGNhbnZhcy5oZWlnaHQgKiAwLjQpO1xyXG4gICAgICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XHJcbiAgICAgICAgY29udGV4dC5maWxsKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBjb250ZXh0LmNyZWF0ZVBhdHRlcm4oY2FudmFzLCBcInJlcGVhdFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0UGVyY2VudDIwUGF0dGVybihmaWxsOiBzdHJpbmcsIGZvcmVncm91bmRGaWxsOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgc2l6ZSA9IDU7XHJcbiAgICAgICAgbGV0IHJhdGlvID0gb2wuaGFzLkRFVklDRV9QSVhFTF9SQVRJTztcclxuXHJcbiAgICAgICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcbiAgICAgICAgY2FudmFzLndpZHRoID0gc2l6ZSAqICgyICogMC44ICsgMSkgKiByYXRpbztcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gc2l6ZSAqICgyICogMC44ICsgMSkgKiByYXRpbztcclxuXHJcbiAgICAgICAgbGV0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gZmlsbDtcclxuICAgICAgICBjb250ZXh0LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcblxyXG4gICAgICAgIC8vIHBlcmNlbnRhZ2UgcmVnaW9uXHJcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBmb3JlZ3JvdW5kRmlsbDtcclxuICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGNvbnRleHQubW92ZVRvKGNhbnZhcy53aWR0aCAqIDAuNSwgY2FudmFzLmhlaWdodCAqIDAuMyk7XHJcbiAgICAgICAgY29udGV4dC5saW5lVG8oY2FudmFzLndpZHRoICogMC43LCBjYW52YXMuaGVpZ2h0ICogMC41KTtcclxuICAgICAgICBjb250ZXh0LmxpbmVUbyhjYW52YXMud2lkdGggKiAwLjUsIGNhbnZhcy5oZWlnaHQgKiAwLjcpO1xyXG4gICAgICAgIGNvbnRleHQubGluZVRvKGNhbnZhcy53aWR0aCAqIDAuMywgY2FudmFzLmhlaWdodCAqIDAuNSk7XHJcbiAgICAgICAgY29udGV4dC5saW5lVG8oY2FudmFzLndpZHRoICogMC41LCBjYW52YXMuaGVpZ2h0ICogMC4zKTtcclxuICAgICAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xyXG4gICAgICAgIGNvbnRleHQuZmlsbCgpO1xyXG5cclxuICAgICAgICByZXR1cm4gY29udGV4dC5jcmVhdGVQYXR0ZXJuKGNhbnZhcywgXCJyZXBlYXRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldFBlcmNlbnQyNVBhdHRlcm4oZmlsbDogc3RyaW5nLCBmb3JlZ3JvdW5kRmlsbDogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IHNpemUgPSA1O1xyXG4gICAgICAgIGxldCByYXRpbyA9IG9sLmhhcy5ERVZJQ0VfUElYRUxfUkFUSU87XHJcblxyXG4gICAgICAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHNpemUgKiAwLjQgKiByYXRpbztcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gc2l6ZSAqIDAuNCAqIHJhdGlvO1xyXG5cclxuICAgICAgICBsZXQgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBmaWxsO1xyXG4gICAgICAgIGNvbnRleHQuZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgLy8gcGVyY2VudGFnZSByZWdpb25cclxuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGZvcmVncm91bmRGaWxsO1xyXG4gICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBmb3JlZ3JvdW5kRmlsbDtcclxuICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGNvbnRleHQuZWxsaXBzZShcclxuICAgICAgICAgICAgY2FudmFzLndpZHRoICogMC4yNSxcclxuICAgICAgICAgICAgY2FudmFzLmhlaWdodCAqIDAuMjUsXHJcbiAgICAgICAgICAgIDAuOCxcclxuICAgICAgICAgICAgMC44LFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAyICogTWF0aC5QSVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgLy8gY29udGV4dC5zdHJva2UoKTtcclxuICAgICAgICBjb250ZXh0LmZpbGwoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbnRleHQuY3JlYXRlUGF0dGVybihjYW52YXMsIFwicmVwZWF0XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRQZXJjZW50MzBQYXR0ZXJuKGZpbGw6IHN0cmluZywgZm9yZWdyb3VuZEZpbGw6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBzaXplID0gNTtcclxuICAgICAgICBsZXQgcmF0aW8gPSBvbC5oYXMuREVWSUNFX1BJWEVMX1JBVElPO1xyXG5cclxuICAgICAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcclxuICAgICAgICBjYW52YXMud2lkdGggPSBzaXplICogKDIgKiAwLjcgKyAxKSAqIHJhdGlvO1xyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBzaXplICogKDIgKiAwLjcgKyAxKSAqIHJhdGlvO1xyXG5cclxuICAgICAgICBsZXQgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBmaWxsO1xyXG4gICAgICAgIGNvbnRleHQuZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgLy8gcGVyY2VudGFnZSByZWdpb25cclxuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGZvcmVncm91bmRGaWxsO1xyXG4gICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgY29udGV4dC5tb3ZlVG8oY2FudmFzLndpZHRoICogMC41LCBjYW52YXMuaGVpZ2h0ICogMC4yKTtcclxuICAgICAgICBjb250ZXh0LmxpbmVUbyhjYW52YXMud2lkdGggKiAwLjgsIGNhbnZhcy5oZWlnaHQgKiAwLjUpO1xyXG4gICAgICAgIGNvbnRleHQubGluZVRvKGNhbnZhcy53aWR0aCAqIDAuNSwgY2FudmFzLmhlaWdodCAqIDAuOCk7XHJcbiAgICAgICAgY29udGV4dC5saW5lVG8oY2FudmFzLndpZHRoICogMC4yLCBjYW52YXMuaGVpZ2h0ICogMC41KTtcclxuICAgICAgICBjb250ZXh0LmxpbmVUbyhjYW52YXMud2lkdGggKiAwLjUsIGNhbnZhcy5oZWlnaHQgKiAwLjIpO1xyXG4gICAgICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XHJcbiAgICAgICAgY29udGV4dC5maWxsKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBjb250ZXh0LmNyZWF0ZVBhdHRlcm4oY2FudmFzLCBcInJlcGVhdFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0UGVyY2VudDQwUGF0dGVybihmaWxsOiBzdHJpbmcsIGZvcmVncm91bmRGaWxsOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgc2l6ZSA9IDU7XHJcbiAgICAgICAgbGV0IHJhdGlvID0gb2wuaGFzLkRFVklDRV9QSVhFTF9SQVRJTztcclxuXHJcbiAgICAgICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcbiAgICAgICAgY2FudmFzLndpZHRoID0gc2l6ZSAqICgyICogMC40ICsgMSkgKiByYXRpbztcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gc2l6ZSAqICgyICogMC40ICsgMSkgKiByYXRpbztcclxuXHJcbiAgICAgICAgbGV0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gZmlsbDtcclxuICAgICAgICBjb250ZXh0LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcblxyXG4gICAgICAgIC8vIHBlcmNlbnRhZ2UgcmVnaW9uXHJcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBmb3JlZ3JvdW5kRmlsbDtcclxuICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGNvbnRleHQubW92ZVRvKGNhbnZhcy53aWR0aCAqIDAuNSwgY2FudmFzLmhlaWdodCAqIDAuMSk7XHJcbiAgICAgICAgY29udGV4dC5saW5lVG8oY2FudmFzLndpZHRoICogMC45LCBjYW52YXMuaGVpZ2h0ICogMC41KTtcclxuICAgICAgICBjb250ZXh0LmxpbmVUbyhjYW52YXMud2lkdGggKiAwLjUsIGNhbnZhcy5oZWlnaHQgKiAwLjkpO1xyXG4gICAgICAgIGNvbnRleHQubGluZVRvKGNhbnZhcy53aWR0aCAqIDAuMSwgY2FudmFzLmhlaWdodCAqIDAuNSk7XHJcbiAgICAgICAgY29udGV4dC5saW5lVG8oY2FudmFzLndpZHRoICogMC41LCBjYW52YXMuaGVpZ2h0ICogMC4xKTtcclxuICAgICAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xyXG4gICAgICAgIGNvbnRleHQuZmlsbCgpO1xyXG5cclxuICAgICAgICByZXR1cm4gY29udGV4dC5jcmVhdGVQYXR0ZXJuKGNhbnZhcywgXCJyZXBlYXRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldFBlcmNlbnQ1MFBhdHRlcm4oZmlsbDogc3RyaW5nLCBmb3JlZ3JvdW5kRmlsbDogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IHNpemUgPSA1O1xyXG4gICAgICAgIGxldCByYXRpbyA9IG9sLmhhcy5ERVZJQ0VfUElYRUxfUkFUSU87XHJcblxyXG4gICAgICAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHNpemUgKiAoMiAqIDAuNSArIDEpICogcmF0aW87XHJcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IHNpemUgKiAoMiAqIDAuNSArIDEpICogcmF0aW87XHJcblxyXG4gICAgICAgIGxldCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGZpbGw7XHJcbiAgICAgICAgY29udGV4dC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG5cclxuICAgICAgICAvLyBwZXJjZW50YWdlIHJlZ2lvblxyXG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gZm9yZWdyb3VuZEZpbGw7XHJcbiAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgICAgICBjb250ZXh0Lm1vdmVUbyhjYW52YXMud2lkdGggKiAwLjUsIDApO1xyXG4gICAgICAgIGNvbnRleHQubGluZVRvKGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCAqIDAuNSk7XHJcbiAgICAgICAgY29udGV4dC5saW5lVG8oY2FudmFzLndpZHRoICogMC41LCBjYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICBjb250ZXh0LmxpbmVUbygwLCBjYW52YXMuaGVpZ2h0ICogMC41KTtcclxuICAgICAgICBjb250ZXh0LmxpbmVUbyhjYW52YXMud2lkdGggKiAwLjUsIDApO1xyXG4gICAgICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XHJcbiAgICAgICAgY29udGV4dC5maWxsKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBjb250ZXh0LmNyZWF0ZVBhdHRlcm4oY2FudmFzLCBcInJlcGVhdFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0UGVyY2VudDYwUGF0dGVybihmaWxsOiBzdHJpbmcsIGZvcmVncm91bmRGaWxsOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgc2l6ZSA9IDU7XHJcbiAgICAgICAgbGV0IHJhdGlvID0gb2wuaGFzLkRFVklDRV9QSVhFTF9SQVRJTztcclxuXHJcbiAgICAgICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcbiAgICAgICAgY2FudmFzLndpZHRoID0gc2l6ZSAqICgyICogMC40ICsgMSkgKiByYXRpbztcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gc2l6ZSAqICgyICogMC40ICsgMSkgKiByYXRpbztcclxuXHJcbiAgICAgICAgbGV0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gZmlsbDtcclxuICAgICAgICBjb250ZXh0LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcblxyXG4gICAgICAgIC8vIHBlcmNlbnRhZ2UgcmVnaW9uXHJcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBmb3JlZ3JvdW5kRmlsbDtcclxuICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGNvbnRleHQubW92ZVRvKGNhbnZhcy53aWR0aCAqIDAuNCwgMCk7XHJcbiAgICAgICAgY29udGV4dC5saW5lVG8oY2FudmFzLndpZHRoICogMC42LCAwKTtcclxuICAgICAgICBjb250ZXh0LmxpbmVUbyhjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQgKiAwLjQpO1xyXG4gICAgICAgIGNvbnRleHQubGluZVRvKGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCAqIDAuNik7XHJcbiAgICAgICAgY29udGV4dC5saW5lVG8oY2FudmFzLndpZHRoICogMC42LCBjYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICBjb250ZXh0LmxpbmVUbyhjYW52YXMud2lkdGggKiAwLjQsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgIGNvbnRleHQubGluZVRvKDAsIGNhbnZhcy5oZWlnaHQgKiAwLjYpO1xyXG4gICAgICAgIGNvbnRleHQubGluZVRvKDAsIGNhbnZhcy5oZWlnaHQgKiAwLjQpO1xyXG4gICAgICAgIGNvbnRleHQubGluZVRvKGNhbnZhcy53aWR0aCAqIDAuNCwgMCk7XHJcbiAgICAgICAgY29udGV4dC5jbG9zZVBhdGgoKTtcclxuICAgICAgICBjb250ZXh0LmZpbGwoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbnRleHQuY3JlYXRlUGF0dGVybihjYW52YXMsIFwicmVwZWF0XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRQZXJjZW50NzBQYXR0ZXJuKGZpbGw6IHN0cmluZywgZm9yZWdyb3VuZEZpbGw6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBzaXplID0gNTtcclxuICAgICAgICBsZXQgcmF0aW8gPSBvbC5oYXMuREVWSUNFX1BJWEVMX1JBVElPO1xyXG5cclxuICAgICAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcclxuICAgICAgICBjYW52YXMud2lkdGggPSBzaXplICogKDIgKiAwLjMgKyAxKSAqIHJhdGlvO1xyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBzaXplICogKDIgKiAwLjMgKyAxKSAqIHJhdGlvO1xyXG5cclxuICAgICAgICBsZXQgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBmaWxsO1xyXG4gICAgICAgIGNvbnRleHQuZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgLy8gcGVyY2VudGFnZSByZWdpb25cclxuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGZvcmVncm91bmRGaWxsO1xyXG4gICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgY29udGV4dC5tb3ZlVG8oY2FudmFzLndpZHRoICogMC4zLCAwKTtcclxuICAgICAgICBjb250ZXh0LmxpbmVUbyhjYW52YXMud2lkdGggKiAwLjcsIDApO1xyXG4gICAgICAgIGNvbnRleHQubGluZVRvKGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCAqIDAuMyk7XHJcbiAgICAgICAgY29udGV4dC5saW5lVG8oY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0ICogMC43KTtcclxuICAgICAgICBjb250ZXh0LmxpbmVUbyhjYW52YXMud2lkdGggKiAwLjcsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgIGNvbnRleHQubGluZVRvKGNhbnZhcy53aWR0aCAqIDAuMywgY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgY29udGV4dC5saW5lVG8oMCwgY2FudmFzLmhlaWdodCAqIDAuNyk7XHJcbiAgICAgICAgY29udGV4dC5saW5lVG8oMCwgY2FudmFzLmhlaWdodCAqIDAuMyk7XHJcbiAgICAgICAgY29udGV4dC5saW5lVG8oY2FudmFzLndpZHRoICogMC4zLCAwKTtcclxuICAgICAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xyXG4gICAgICAgIGNvbnRleHQuZmlsbCgpO1xyXG5cclxuICAgICAgICByZXR1cm4gY29udGV4dC5jcmVhdGVQYXR0ZXJuKGNhbnZhcywgXCJyZXBlYXRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldFBlcmNlbnQ3NVBhdHRlcm4oZmlsbDogc3RyaW5nLCBmb3JlZ3JvdW5kRmlsbDogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IHNpemUgPSA1O1xyXG4gICAgICAgIGxldCByYXRpbyA9IG9sLmhhcy5ERVZJQ0VfUElYRUxfUkFUSU87XHJcblxyXG4gICAgICAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHNpemUgKiAoMiAqIDAuMjUgKyAxKSAqIHJhdGlvO1xyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBzaXplICogKDIgKiAwLjI1ICsgMSkgKiByYXRpbztcclxuXHJcbiAgICAgICAgbGV0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gZmlsbDtcclxuICAgICAgICBjb250ZXh0LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcblxyXG4gICAgICAgIC8vIHBlcmNlbnRhZ2UgcmVnaW9uXHJcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBmb3JlZ3JvdW5kRmlsbDtcclxuICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGNvbnRleHQubW92ZVRvKGNhbnZhcy53aWR0aCAqIDAuMjUsIDApO1xyXG4gICAgICAgIGNvbnRleHQubGluZVRvKGNhbnZhcy53aWR0aCAqIDAuNzUsIDApO1xyXG4gICAgICAgIGNvbnRleHQubGluZVRvKGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCAqIDAuMjUpO1xyXG4gICAgICAgIGNvbnRleHQubGluZVRvKGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCAqIDAuNzUpO1xyXG4gICAgICAgIGNvbnRleHQubGluZVRvKGNhbnZhcy53aWR0aCAqIDAuNzUsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgIGNvbnRleHQubGluZVRvKGNhbnZhcy53aWR0aCAqIDAuMjUsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgIGNvbnRleHQubGluZVRvKDAsIGNhbnZhcy5oZWlnaHQgKiAwLjc1KTtcclxuICAgICAgICBjb250ZXh0LmxpbmVUbygwLCBjYW52YXMuaGVpZ2h0ICogMC4yNSk7XHJcbiAgICAgICAgY29udGV4dC5saW5lVG8oY2FudmFzLndpZHRoICogMC4yNSwgMCk7XHJcbiAgICAgICAgY29udGV4dC5jbG9zZVBhdGgoKTtcclxuICAgICAgICBjb250ZXh0LmZpbGwoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbnRleHQuY3JlYXRlUGF0dGVybihjYW52YXMsIFwicmVwZWF0XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRQZXJjZW50ODBQYXR0ZXJuKGZpbGw6IHN0cmluZywgZm9yZWdyb3VuZEZpbGw6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBzaXplID0gNTtcclxuICAgICAgICBsZXQgcmF0aW8gPSBvbC5oYXMuREVWSUNFX1BJWEVMX1JBVElPO1xyXG5cclxuICAgICAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcclxuICAgICAgICBjYW52YXMud2lkdGggPSBzaXplICogMC44ICogcmF0aW87XHJcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IHNpemUgKiAwLjggKiByYXRpbztcclxuXHJcbiAgICAgICAgbGV0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gZmlsbDtcclxuICAgICAgICBjb250ZXh0LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcblxyXG4gICAgICAgIC8vIHBlcmNlbnRhZ2UgcmVnaW9uXHJcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBmb3JlZ3JvdW5kRmlsbDtcclxuICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gZm9yZWdyb3VuZEZpbGw7XHJcbiAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgICAgICBjb250ZXh0LmVsbGlwc2UoY2FudmFzLndpZHRoICogMC4xLCBjYW52YXMuaGVpZ2h0ICogMC4xLCAwLjgsIDAuOCwgMCwgMCwgMiAqIE1hdGguUEkpO1xyXG4gICAgICAgIC8vIGNvbnRleHQuc3Ryb2tlKCk7XHJcbiAgICAgICAgY29udGV4dC5maWxsKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBjb250ZXh0LmNyZWF0ZVBhdHRlcm4oY2FudmFzLCBcInJlcGVhdFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0UGVyY2VudDkwUGF0dGVybihmaWxsOiBzdHJpbmcsIGZvcmVncm91bmRGaWxsOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgc2l6ZSA9IDU7XHJcbiAgICAgICAgbGV0IHJhdGlvID0gb2wuaGFzLkRFVklDRV9QSVhFTF9SQVRJTztcclxuXHJcbiAgICAgICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcbiAgICAgICAgY2FudmFzLndpZHRoID0gc2l6ZSAqICgyICogMC4xICsgMSkgKiByYXRpbztcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gc2l6ZSAqICgyICogMC4xICsgMSkgKiByYXRpbztcclxuXHJcbiAgICAgICAgbGV0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gZmlsbDtcclxuICAgICAgICBjb250ZXh0LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcblxyXG4gICAgICAgIC8vIHBlcmNlbnRhZ2UgcmVnaW9uXHJcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBmb3JlZ3JvdW5kRmlsbDtcclxuICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gZm9yZWdyb3VuZEZpbGw7XHJcbiAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgICAgICBjb250ZXh0LmVsbGlwc2UoY2FudmFzLndpZHRoICogMC4xLCBjYW52YXMuaGVpZ2h0ICogMC4xLCAwLjQsIDAuNCwgMCwgMCwgMiAqIE1hdGguUEkpO1xyXG4gICAgICAgIC8vIGNvbnRleHQuc3Ryb2tlKCk7XHJcbiAgICAgICAgY29udGV4dC5maWxsKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBjb250ZXh0LmNyZWF0ZVBhdHRlcm4oY2FudmFzLCBcInJlcGVhdFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0TGFyZ2VHcmlkUGF0dGVybihmaWxsOiBzdHJpbmcsIGZvcmVncm91bmRGaWxsOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgc2l6ZSA9IDY7XHJcbiAgICAgICAgbGV0IHJhdGlvID0gb2wuaGFzLkRFVklDRV9QSVhFTF9SQVRJTztcclxuXHJcbiAgICAgICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcbiAgICAgICAgY2FudmFzLndpZHRoID0gc2l6ZSAqIDIgKiByYXRpbztcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gc2l6ZSAqIDIgKiByYXRpbztcclxuXHJcbiAgICAgICAgbGV0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gZmlsbDtcclxuICAgICAgICBjb250ZXh0LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcblxyXG4gICAgICAgIC8vIGdyaWQgcmVjdFxyXG4gICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBmb3JlZ3JvdW5kRmlsbDtcclxuICAgICAgICBjb250ZXh0LnN0cm9rZVJlY3QoXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIGNhbnZhcy53aWR0aCxcclxuICAgICAgICAgICAgY2FudmFzLmhlaWdodFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiBjb250ZXh0LmNyZWF0ZVBhdHRlcm4oY2FudmFzLCBcInJlcGVhdFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0RGlhZ29uYWxDcm9zc1BhdHRlcm4oZmlsbDogc3RyaW5nLCBmb3JlZ3JvdW5kRmlsbDogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IHNpemUgPSA2O1xyXG4gICAgICAgIGxldCByYXRpbyA9IG9sLmhhcy5ERVZJQ0VfUElYRUxfUkFUSU87XHJcblxyXG4gICAgICAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHNpemUgKiAyICogcmF0aW87XHJcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IHNpemUgKiAyICogcmF0aW87XHJcblxyXG4gICAgICAgIGxldCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGZpbGw7XHJcbiAgICAgICAgY29udGV4dC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG5cclxuICAgICAgICAvLyBsZWZ0IHRvIHJpZ2h0IGRpYWdvbmFsIGxpbmVcclxuICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gZm9yZWdyb3VuZEZpbGw7XHJcbiAgICAgICAgY29udGV4dC5tb3ZlVG8oMCwgMCk7XHJcbiAgICAgICAgY29udGV4dC5saW5lVG8oY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xyXG5cclxuICAgICAgICAvLyByaWdodCB0byBsZWZ0IGRpYWdvbmFsIGxpbmVcclxuICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gZm9yZWdyb3VuZEZpbGw7XHJcbiAgICAgICAgY29udGV4dC5tb3ZlVG8oY2FudmFzLndpZHRoLCAwKTtcclxuICAgICAgICBjb250ZXh0LmxpbmVUbygwLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xyXG5cclxuICAgICAgICByZXR1cm4gY29udGV4dC5jcmVhdGVQYXR0ZXJuKGNhbnZhcywgXCJyZXBlYXRcIik7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3R5bGUvZ2VvQnJ1c2gudHMiLCJpbXBvcnQgeyBHZW9TdHlsZSB9IGZyb20gXCIuL2dlb1N0eWxlXCI7XHJcbmltcG9ydCB7IFV0aWwgfSBmcm9tIFwiLi4vdXRpbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdlb0xpbmVTdHlsZSBleHRlbmRzIEdlb1N0eWxlIHtcclxuICAgIGdlb21ldHJ5TGluZUNhcHMgPSBbXHJcbiAgICAgICAgXCJ0cmlhbmdsZVwiLFxyXG4gICAgICAgIFwic3F1YXJlYW5jaG9yXCIsXHJcbiAgICAgICAgXCJyb3VuZGFuY2hvclwiLFxyXG4gICAgICAgIFwiZGlhbW9uZGFuY2hvclwiLFxyXG4gICAgICAgIFwiYXJyb3dhbmNob3JcIlxyXG4gICAgXTtcclxuICAgIG9sTGluZUNhcHNNYXAgPSB7XHJcbiAgICAgICAgYnV0dDogXCJidXR0XCIsXHJcbiAgICAgICAgZmxhdDogXCJzcXVhcmVcIixcclxuICAgICAgICBzcXVhcmU6IFwic3F1YXJlXCIsXHJcbiAgICAgICAgcm91bmQ6IFwicm91bmRcIixcclxuICAgICAgICBub2FuY2hvcjogXCJzcXVhcmVcIixcclxuICAgICAgICBhbmNob3JtYXNrOiBcInNxdWFyZVwiLFxyXG4gICAgICAgIGN1c3RvbTogXCJzcXVhcmVcIlxyXG4gICAgfTtcclxuXHJcbiAgICBsaW5lQ2FwOiBzdHJpbmc7XHJcbiAgICBjb2xvcjogc3RyaW5nO1xyXG4gICAgZGFzaEFycmF5OiBhbnk7XHJcbiAgICBnYW1tYTogc3RyaW5nO1xyXG4gICAgZ2VvbWV0cnlUcmFuc2Zvcm06IHN0cmluZztcclxuICAgIGxpbmVKb2luOiBzdHJpbmc7XHJcbiAgICBtaXRlckxpbWl0OiBudW1iZXI7XHJcbiAgICBvZmZzZXQ6IHN0cmluZztcclxuICAgIG9wYWNpdHk6IG51bWJlcjtcclxuICAgIHdpZHRoOiBudW1iZXI7XHJcbiAgICBvbmV3YXk6IGFueTtcclxuXHJcbiAgICBsaW5lQ2FwSW5uZXI6IHN0cmluZztcclxuICAgIGNvbG9ySW5uZXI6IHN0cmluZztcclxuICAgIGRhc2hBcnJheUlubmVyOiBhbnk7XHJcbiAgICBsaW5lSm9pbklubmVyOiBzdHJpbmc7XHJcbiAgICBtaXRlckxpbWl0SW5uZXI6IG51bWJlcjtcclxuICAgIHdpZHRoSW5uZXI6IG51bWJlcjtcclxuXHJcbiAgICBsaW5lQ2FwQ2VudGVyOiBzdHJpbmc7XHJcbiAgICBjb2xvckNlbnRlcjogc3RyaW5nO1xyXG4gICAgZGFzaEFycmF5Q2VudGVyOiBhbnk7XHJcbiAgICBsaW5lSm9pbkNlbnRlcjogc3RyaW5nO1xyXG4gICAgbWl0ZXJMaW1pdENlbnRlcjogbnVtYmVyO1xyXG4gICAgd2lkdGhDZW50ZXI6IG51bWJlcjtcclxuXHJcbiAgICBvbENvbG9yOiBzdHJpbmc7XHJcbiAgICBjb252ZXJ0ZWREYXNoQXJyYXk6IG51bWJlcltdID0gbmV3IEFycmF5PG51bWJlcj4oKTtcclxuXHJcbiAgICBvbElubmVyQ29sb3I6IHN0cmluZztcclxuICAgIGNvbnZlcnRlZElubmVyRGFzaEFycmF5OiBudW1iZXJbXSA9IG5ldyBBcnJheTxudW1iZXI+KCk7XHJcblxyXG4gICAgb2xDZW50ZXJDb2xvcjogc3RyaW5nO1xyXG4gICAgY29udmVydGVkQ2VudGVyRGFzaEFycmF5OiBudW1iZXJbXSA9IG5ldyBBcnJheTxudW1iZXI+KCk7XHJcblxyXG4gICAgbGluZVN0cm9rZTogYW55O1xyXG4gICAgbGluZVN0eWxlOiBhbnk7XHJcblxyXG4gICAgbGluZUNhcEZpbGw6IGFueTtcclxuICAgIGxpbmVDYXBTdHlsZTogYW55O1xyXG5cclxuICAgIGxpbmVJbm5lclN0cm9rZTogYW55O1xyXG4gICAgbGluZUlubmVyU3R5bGU6IGFueTtcclxuXHJcbiAgICBsaW5lQ2FwSW5uZXJGaWxsOiBhbnk7XHJcbiAgICBsaW5lQ2FwSW5uZXJTdHlsZTogYW55O1xyXG5cclxuICAgIGxpbmVDZW50ZXJTdHJva2U6IGFueTtcclxuICAgIGxpbmVDZW50ZXJTdHlsZTogYW55O1xyXG5cclxuICAgIGxpbmVDYXBDZW50ZXJGaWxsOiBhbnk7XHJcbiAgICBsaW5lQ2FwQ2VudGVyU3R5bGU6IGFueTtcclxuXHJcbiAgICBvbmV3YXlJY29uOiBhbnk7XHJcbiAgICBvbmV3YXlTdHlsZTogYW55O1xyXG5cclxuICAgIHN0YXRpYyBvbmV3YXlJbWc6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzdHlsZUpzb24/OiBhbnkpIHtcclxuICAgICAgICBzdXBlcihzdHlsZUpzb24pO1xyXG5cclxuICAgICAgICB0aGlzLmxpbmVTdHJva2UgPSBuZXcgb2wuc3R5bGUuU3Ryb2tlKCk7XHJcbiAgICAgICAgdGhpcy5saW5lU3R5bGUgPSBuZXcgb2wuc3R5bGUuU3R5bGUoeyBzdHJva2U6IHRoaXMubGluZVN0cm9rZSB9KTtcclxuICAgICAgICB0aGlzLmxpbmVDYXBGaWxsID0gbmV3IG9sLnN0eWxlLkZpbGwoKTtcclxuICAgICAgICB0aGlzLmxpbmVDYXBTdHlsZSA9IG5ldyBvbC5zdHlsZS5TdHlsZSh7IGZpbGw6IHRoaXMubGluZUNhcEZpbGwgfSk7XHJcblxyXG4gICAgICAgIHRoaXMubGluZUlubmVyU3Ryb2tlID0gbmV3IG9sLnN0eWxlLlN0cm9rZSgpO1xyXG4gICAgICAgIHRoaXMubGluZUlubmVyU3R5bGUgPSBuZXcgb2wuc3R5bGUuU3R5bGUoeyBzdHJva2U6IHRoaXMubGluZUlubmVyU3Ryb2tlIH0pO1xyXG4gICAgICAgIHRoaXMubGluZUNhcElubmVyRmlsbCA9IG5ldyBvbC5zdHlsZS5GaWxsKCk7XHJcbiAgICAgICAgdGhpcy5saW5lQ2FwSW5uZXJTdHlsZSA9IG5ldyBvbC5zdHlsZS5TdHlsZSh7XHJcbiAgICAgICAgICAgIGZpbGw6IHRoaXMubGluZUNhcElubmVyRmlsbFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmxpbmVDZW50ZXJTdHJva2UgPSBuZXcgb2wuc3R5bGUuU3Ryb2tlKCk7XHJcbiAgICAgICAgdGhpcy5saW5lQ2VudGVyU3R5bGUgPSBuZXcgb2wuc3R5bGUuU3R5bGUoe1xyXG4gICAgICAgICAgICBzdHJva2U6IHRoaXMubGluZUNlbnRlclN0cm9rZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubGluZUNhcENlbnRlckZpbGwgPSBuZXcgb2wuc3R5bGUuRmlsbCgpO1xyXG4gICAgICAgIHRoaXMubGluZUNhcENlbnRlclN0eWxlID0gbmV3IG9sLnN0eWxlLlN0eWxlKHtcclxuICAgICAgICAgICAgZmlsbDogdGhpcy5saW5lQ2FwQ2VudGVyRmlsbFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoc3R5bGVKc29uKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGluZUNhcCA9IHN0eWxlSnNvbltcImxpbmUtY2FwXCJdO1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yID0gc3R5bGVKc29uW1wibGluZS1jb2xvclwiXTtcclxuICAgICAgICAgICAgdGhpcy5kYXNoQXJyYXkgPSBzdHlsZUpzb25bXCJsaW5lLWRhc2hhcnJheVwiXTtcclxuICAgICAgICAgICAgdGhpcy5nYW1tYSA9IHN0eWxlSnNvbltcImxpbmUtZ2FtbWFcIl07XHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnlUcmFuc2Zvcm0gPSBzdHlsZUpzb25bXCJsaW5lLWdlb21ldHJ5LXRyYW5zZm9ybVwiXTtcclxuICAgICAgICAgICAgdGhpcy5saW5lSm9pbiA9IHN0eWxlSnNvbltcImxpbmUtam9pblwiXTtcclxuICAgICAgICAgICAgdGhpcy5taXRlckxpbWl0ID0gc3R5bGVKc29uW1wibGluZS1taXRlcmxpbWl0XCJdO1xyXG4gICAgICAgICAgICB0aGlzLm9mZnNldCA9IHN0eWxlSnNvbltcImxpbmUtb2Zmc2V0XCJdO1xyXG4gICAgICAgICAgICB0aGlzLm9wYWNpdHkgPSBzdHlsZUpzb25bXCJsaW5lLW9wYWNpdHlcIl07XHJcbiAgICAgICAgICAgIHRoaXMud2lkdGggPSBzdHlsZUpzb25bXCJsaW5lLXdpZHRoXCJdO1xyXG4gICAgICAgICAgICB0aGlzLmxpbmVDYXBJbm5lciA9IHN0eWxlSnNvbltcImxpbmUtY2FwLWlubmVyXCJdO1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9ySW5uZXIgPSBzdHlsZUpzb25bXCJsaW5lLWNvbG9yLWlubmVyXCJdO1xyXG4gICAgICAgICAgICB0aGlzLmRhc2hBcnJheUlubmVyID0gc3R5bGVKc29uW1wibGluZS1kYXNoYXJyYXktaW5uZXJcIl07XHJcbiAgICAgICAgICAgIHRoaXMubGluZUpvaW5Jbm5lciA9IHN0eWxlSnNvbltcImxpbmUtam9pbi1pbm5lclwiXTtcclxuICAgICAgICAgICAgdGhpcy5taXRlckxpbWl0SW5uZXIgPSBzdHlsZUpzb25bXCJsaW5lLW1pdGVybGltaXQtaW5uZXJcIl07XHJcbiAgICAgICAgICAgIHRoaXMud2lkdGhJbm5lciA9IHN0eWxlSnNvbltcImxpbmUtd2lkdGgtaW5uZXJcIl07XHJcbiAgICAgICAgICAgIHRoaXMubGluZUNhcENlbnRlciA9IHN0eWxlSnNvbltcImxpbmUtY2FwLWNlbnRlclwiXTtcclxuICAgICAgICAgICAgdGhpcy5jb2xvckNlbnRlciA9IHN0eWxlSnNvbltcImxpbmUtY29sb3ItY2VudGVyXCJdO1xyXG4gICAgICAgICAgICB0aGlzLmRhc2hBcnJheUNlbnRlciA9IHN0eWxlSnNvbltcImxpbmUtZGFzaGFycmF5LWNlbnRlclwiXTtcclxuICAgICAgICAgICAgdGhpcy5saW5lSm9pbkNlbnRlciA9IHN0eWxlSnNvbltcImxpbmUtam9pbi1jZW50ZXJcIl07XHJcbiAgICAgICAgICAgIHRoaXMubWl0ZXJMaW1pdENlbnRlciA9IHN0eWxlSnNvbltcImxpbmUtbWl0ZXJsaW1pdC1jZW50ZXJcIl07XHJcbiAgICAgICAgICAgIHRoaXMud2lkdGhDZW50ZXIgPSBzdHlsZUpzb25bXCJsaW5lLXdpZHRoLWNlbnRlclwiXTtcclxuICAgICAgICAgICAgdGhpcy5vbmV3YXkgPSBzdHlsZUpzb25bXCJsaW5lLW9uZXdheVwiXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGluaXRpYWxpemVDb3JlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbG9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMub2xDb2xvciA9IEdlb1N0eWxlLnRvUkdCQUNvbG9yKHRoaXMuY29sb3IsIHRoaXMub3BhY2l0eSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmxpbmVTdHJva2Uuc2V0Q29sb3IodGhpcy5vbENvbG9yKTtcclxuICAgICAgICAgICAgdGhpcy5saW5lQ2FwRmlsbC5zZXRDb2xvcih0aGlzLm9sQ29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5kYXNoQXJyYXkpIHtcclxuICAgICAgICAgICAgbGV0IHRtcEFycmF5ID0gdGhpcy5kYXNoQXJyYXkuc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBhIG9mIHRtcEFycmF5KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnZlcnRlZERhc2hBcnJheS5wdXNoKHBhcnNlRmxvYXQoYSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBEcmF3aW5nIGlubmVyXHJcbiAgICAgICAgaWYgKHRoaXMuY29sb3JJbm5lcikge1xyXG4gICAgICAgICAgICB0aGlzLm9sSW5uZXJDb2xvciA9IEdlb1N0eWxlLnRvUkdCQUNvbG9yKHRoaXMuY29sb3JJbm5lciwgdGhpcy5vcGFjaXR5KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubGluZUlubmVyU3Ryb2tlLnNldENvbG9yKHRoaXMub2xJbm5lckNvbG9yKTtcclxuICAgICAgICAgICAgdGhpcy5saW5lQ2FwSW5uZXJGaWxsLnNldENvbG9yKHRoaXMub2xJbm5lckNvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZGFzaEFycmF5SW5uZXIpIHtcclxuICAgICAgICAgICAgbGV0IHRtcEFycmF5ID0gdGhpcy5kYXNoQXJyYXlJbm5lci5zcGxpdChcIixcIik7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGEgb2YgdG1wQXJyYXkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udmVydGVkSW5uZXJEYXNoQXJyYXkucHVzaChwYXJzZUZsb2F0KGEpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gRHJhd2luZyBjZW50ZXJcclxuICAgICAgICBpZiAodGhpcy5jb2xvckNlbnRlcikge1xyXG4gICAgICAgICAgICB0aGlzLm9sQ2VudGVyQ29sb3IgPSBHZW9TdHlsZS50b1JHQkFDb2xvcih0aGlzLmNvbG9yQ2VudGVyLCB0aGlzLm9wYWNpdHkpO1xyXG4gICAgICAgICAgICB0aGlzLmxpbmVDZW50ZXJTdHJva2Uuc2V0Q29sb3IodGhpcy5vbENlbnRlckNvbG9yKTtcclxuICAgICAgICAgICAgdGhpcy5saW5lQ2FwQ2VudGVyRmlsbC5zZXRDb2xvcih0aGlzLm9sQ2VudGVyQ29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5kYXNoQXJyYXlDZW50ZXIpIHtcclxuICAgICAgICAgICAgbGV0IHRtcEFycmF5ID0gdGhpcy5kYXNoQXJyYXlDZW50ZXIuc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBhIG9mIHRtcEFycmF5KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnZlcnRlZENlbnRlckRhc2hBcnJheS5wdXNoKHBhcnNlRmxvYXQoYSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoR2VvTGluZVN0eWxlLm9uZXdheUltZyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGxldCBpbWFnZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgICAgICBpbWFnZUVsZW1lbnQuc3JjID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJJQUFBQUZDQVlBQUFCSUhieDBBQUFBQkhOQ1NWUUlDQWdJZkFoa2lBQUFBQWx3U0ZsekFBQU4xd0FBRGRjQlFpaWJlQUFBQUJsMFJWaDBVMjltZEhkaGNtVUFkM2QzTG1sdWEzTmpZWEJsTG05eVo1dnVQQm9BQUFCWVNVUkJWQmlWWTJBZ0VreGF2bnI3eE9XcnJYREpNeEpyME9UbGEvNUROUno3OTUraEl5OHFaRE5PZzJDS2lRUC9HM01qUXh2SWR0Ri9Cc1lqalA4WjYzT2pndlloeTdNUTd3Q0dQZjhZLzlmblI0WWN3eVlOQUZFeUlOb280UlBlQUFBQUFFbEZUa1N1UW1DQ1wiO1xyXG4gICAgICAgICAgICBHZW9MaW5lU3R5bGUub25ld2F5SW1nID0gaW1hZ2VFbGVtZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm9uZXdheUljb24gPSBuZXcgb2wuc3R5bGUuSWNvbih7XHJcbiAgICAgICAgICAgIGltZzogR2VvTGluZVN0eWxlLm9uZXdheUltZyxcclxuICAgICAgICAgICAgaW1nU2l6ZTogWzE4LCA1XSxcclxuICAgICAgICAgICAgYW5jaG9yOiBbMC41LCAwLjVdLFxyXG4gICAgICAgICAgICByb3RhdGVXaXRoVmlldzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMub25ld2F5U3R5bGUgPSBuZXcgb2wuc3R5bGUuU3R5bGUoe1xyXG4gICAgICAgICAgICBpbWFnZTogdGhpcy5vbmV3YXlJY29uXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VHJhbnNmb3JtVmFsdWVzKHRyYW5zZm9ybTogc3RyaW5nKTogYW55IHtcclxuICAgICAgICAvLyBnZXQgdHJhbnNmb3JtIHZhbHVlcyB3aGljaCBsb29rIGxpa2UgdHJhbnNmb3JtKHZhbHVlMSwgdmFsdWUyKVxyXG4gICAgICAgIGxldCBzdGFydCA9IHRyYW5zZm9ybS5pbmRleE9mKFwiKFwiKTtcclxuICAgICAgICBsZXQgZW5kID0gdHJhbnNmb3JtLmluZGV4T2YoXCIpXCIpO1xyXG4gICAgICAgIGxldCB2YWx1ZVN0cmluZyA9IHRyYW5zZm9ybS5zdWJzdHJpbmcoc3RhcnQgKyAxLCBlbmQpO1xyXG5cclxuICAgICAgICBsZXQgdmFsdWVzID0gW107XHJcbiAgICAgICAgaWYgKHZhbHVlU3RyaW5nLmluY2x1ZGVzKFwiLFwiKSkge1xyXG4gICAgICAgICAgICB2YWx1ZXMgPSB2YWx1ZVN0cmluZy5zcGxpdChcIixcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFsdWVzLnB1c2godmFsdWVTdHJpbmcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHZhbHVlcztcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb252ZXJ0ZWRTdHlsZUNvcmUoZmVhdHVyZTogYW55LCByZXNvbHV0aW9uOiBudW1iZXIsIG9wdGlvbnM6IGFueSk6IG9sLnN0eWxlLlN0eWxlW10ge1xyXG4gICAgICAgIGxldCBsZW5ndGggPSAwO1xyXG4gICAgICAgIHRoaXMuc3R5bGVzID0gW107XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNvbG9yICYmIHRoaXMud2lkdGgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMub2xMaW5lQ2Fwc01hcFt0aGlzLmxpbmVDYXBdKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpbmVTdHJva2Uuc2V0TGluZUNhcCh0aGlzLm9sTGluZUNhcHNNYXBbdGhpcy5saW5lQ2FwXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuY29sb3IpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGluZVN0cm9rZS5zZXRDb2xvcih0aGlzLm9sQ29sb3IpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saW5lQ2FwRmlsbC5zZXRDb2xvcih0aGlzLm9sQ29sb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhc2hBcnJheSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saW5lU3Ryb2tlLnNldExpbmVEYXNoKHRoaXMuY29udmVydGVkRGFzaEFycmF5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5saW5lSm9pbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saW5lU3Ryb2tlLnNldExpbmVKb2luKHRoaXMubGluZUpvaW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1pdGVyTGltaXQgIT09IDQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGluZVN0cm9rZS5zZXRNaXRlckxpbWl0KHRoaXMubWl0ZXJMaW1pdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMud2lkdGgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGluZVN0cm9rZS5zZXRXaWR0aCh0aGlzLndpZHRoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gU2V0IGlubmVyXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbG9ySW5uZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGluZUlubmVyU3Ryb2tlLnNldENvbG9yKHRoaXMub2xJbm5lckNvbG9yKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubGluZUNhcElubmVyRmlsbC5zZXRDb2xvcih0aGlzLm9sSW5uZXJDb2xvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuZGFzaEFycmF5SW5uZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGluZUlubmVyU3Ryb2tlLnNldExpbmVEYXNoKHRoaXMuY29udmVydGVkSW5uZXJEYXNoQXJyYXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxpbmVKb2luSW5uZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGluZUlubmVyU3Ryb2tlLnNldExpbmVKb2luKHRoaXMubGluZUpvaW5Jbm5lcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMubWl0ZXJMaW1pdElubmVyICE9PSA0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpbmVJbm5lclN0cm9rZS5zZXRNaXRlckxpbWl0KHRoaXMubWl0ZXJMaW1pdElubmVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy53aWR0aElubmVyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpbmVJbm5lclN0cm9rZS5zZXRXaWR0aCh0aGlzLndpZHRoSW5uZXIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBTZXQgY2VudGVyXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbG9yQ2VudGVyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpbmVDZW50ZXJTdHJva2Uuc2V0Q29sb3IodGhpcy5vbENlbnRlckNvbG9yKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubGluZUNhcENlbnRlckZpbGwuc2V0Q29sb3IodGhpcy5vbENlbnRlckNvbG9yKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubGluZUNlbnRlclN0cm9rZS5zZXRMaW5lQ2FwKFwiYnV0dFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5kYXNoQXJyYXlDZW50ZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGluZUNlbnRlclN0cm9rZS5zZXRMaW5lRGFzaCh0aGlzLmNvbnZlcnRlZENlbnRlckRhc2hBcnJheSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMubGluZUpvaW5DZW50ZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGluZUNlbnRlclN0cm9rZS5zZXRMaW5lSm9pbih0aGlzLmxpbmVKb2luQ2VudGVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5taXRlckxpbWl0Q2VudGVyICE9PSA0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpbmVDZW50ZXJTdHJva2Uuc2V0TWl0ZXJMaW1pdCh0aGlzLm1pdGVyTGltaXRDZW50ZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLndpZHRoQ2VudGVyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpbmVDZW50ZXJTdHJva2Uuc2V0V2lkdGgodGhpcy53aWR0aENlbnRlcik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBnZW9tZXRyeUZ1bmN0aW9uID0gKGZlYXR1cmUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdlb21ldHJ5VHJhbnNmb3JtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGdlb21ldHJ5ID0gdGhpcy5nZXRHZW9tZXRyeShmZWF0dXJlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5nZW9tZXRyeVRyYW5zZm9ybSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWVzID0gdGhpcy5nZXRUcmFuc2Zvcm1WYWx1ZXModGhpcy5nZW9tZXRyeVRyYW5zZm9ybSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5nZW9tZXRyeVRyYW5zZm9ybS5zdGFydHNXaXRoKFwidHJhbnNsYXRlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeS50cmFuc2xhdGUoK3ZhbHVlc1swXS50cmltKCksICt2YWx1ZXNbMV0udHJpbSgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmdlb21ldHJ5VHJhbnNmb3JtLnN0YXJ0c1dpdGgoXCJzY2FsZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnkuc2NhbGUoK3ZhbHVlc1swXS50cmltKCksICt2YWx1ZXNbMV0udHJpbSgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmdlb21ldHJ5VHJhbnNmb3JtLnN0YXJ0c1dpdGgoXCJyb3RhdGVcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjZW50ZXIgPSBvbC5leHRlbnQuZ2V0Q2VudGVyKGdlb21ldHJ5LmdldEV4dGVudCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhbmdsZSA9ICt2YWx1ZXNbMF0udHJpbSgpICogTWF0aC5QSSAvIDE4MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5LnJvdGF0ZShhbmdsZSwgY2VudGVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmdlb21ldHJ5VHJhbnNmb3JtLnN0YXJ0c1dpdGgoXCJza2V3XCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNrZXdHZW9tZXRyeShnZW9tZXRyeSwgK3ZhbHVlc1swXS50cmltKCksICt2YWx1ZXNbMV0udHJpbSgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBmZWF0dXJlLmdldEdlb21ldHJ5KCk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB0aGlzLmxpbmVTdHlsZS5zZXRHZW9tZXRyeShnZW9tZXRyeUZ1bmN0aW9uKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3R5bGVzW2xlbmd0aCsrXSA9IHRoaXMubGluZVN0eWxlO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZ2FtbWEgIT09IHVuZGVmaW5lZCAmJiBvcHRpb25zLmxheWVyKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3R5bGVHYW1tYSA9IHRoaXMuZ2FtbWE7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLmxheWVyLm9uKFwicHJlY29tcG9zZVwiLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZ0LmNvbnRleHQuaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gc3R5bGVHYW1tYTtcclxuICAgICAgICAgICAgICAgICAgICBldnQuY29udGV4dC53ZWJraXRJbWFnZVNtb290aGluZ0VuYWJsZWQgPSBzdHlsZUdhbW1hO1xyXG4gICAgICAgICAgICAgICAgICAgIGV2dC5jb250ZXh0Lm1vekltYWdlU21vb3RoaW5nRW5hYmxlZCA9IHN0eWxlR2FtbWE7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZ0LmNvbnRleHQubXNJbWFnZVNtb290aGluZ0VuYWJsZWQgPSBzdHlsZUdhbW1hO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmdlb21ldHJ5TGluZUNhcHMuaW5jbHVkZXModGhpcy5saW5lQ2FwKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGdlb21ldHJ5RnVuY3Rpb24gPSAoZmVhdHVyZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBnZW9tZXRyeSA9IHRoaXMuZ2V0R2VvbWV0cnkoZmVhdHVyZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEdlb0xpbmVTdHlsZS5jcmVhdGVBbmNob3JlZEdlb21ldHJ5KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saW5lQ2FwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHV0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5saW5lQ2FwU3R5bGUuc2V0R2VvbWV0cnkoZ2VvbWV0cnlGdW5jdGlvbik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0eWxlc1tsZW5ndGgrK10gPSB0aGlzLmxpbmVDYXBTdHlsZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gRHJhd2luZyBpbm5lclxyXG4gICAgICAgICAgICBpZiAodGhpcy5jb2xvcklubmVyICYmIHRoaXMud2lkdGhJbm5lcikge1xyXG4gICAgICAgICAgICAgICAgbGV0IGdlb21ldHJ5RnVuY3Rpb24gPSAoZmVhdHVyZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBnZW9tZXRyeSA9IHRoaXMuZ2V0R2VvbWV0cnkoZmVhdHVyZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2VvbWV0cnlUcmFuc2Zvcm0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlcyA9IHRoaXMuZ2V0VHJhbnNmb3JtVmFsdWVzKHRoaXMuZ2VvbWV0cnlUcmFuc2Zvcm0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2VvbWV0cnlUcmFuc2Zvcm0uc3RhcnRzV2l0aChcInRyYW5zbGF0ZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnkudHJhbnNsYXRlKCt2YWx1ZXNbMF0udHJpbSgpLCArdmFsdWVzWzFdLnRyaW0oKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5nZW9tZXRyeVRyYW5zZm9ybS5zdGFydHNXaXRoKFwic2NhbGVcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5LnNjYWxlKCt2YWx1ZXNbMF0udHJpbSgpLCArdmFsdWVzWzFdLnRyaW0oKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5nZW9tZXRyeVRyYW5zZm9ybS5zdGFydHNXaXRoKFwicm90YXRlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2VudGVyID0gb2wuZXh0ZW50LmdldENlbnRlcihnZW9tZXRyeS5nZXRFeHRlbnQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYW5nbGUgPSArdmFsdWVzWzBdLnRyaW0oKSAqIE1hdGguUEkgLyAxODA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeS5yb3RhdGUoYW5nbGUsIGNlbnRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5nZW9tZXRyeVRyYW5zZm9ybS5zdGFydHNXaXRoKFwic2tld1wiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5za2V3R2VvbWV0cnkoZ2VvbWV0cnksICt2YWx1ZXNbMF0udHJpbSgpLCArdmFsdWVzWzFdLnRyaW0oKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZlYXR1cmUuZ2V0R2VvbWV0cnkoKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpbmVJbm5lclN0eWxlLnNldEdlb21ldHJ5KGdlb21ldHJ5RnVuY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdHlsZXNbbGVuZ3RoKytdID0gdGhpcy5saW5lSW5uZXJTdHlsZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nZW9tZXRyeUxpbmVDYXBzLmluY2x1ZGVzKHRoaXMubGluZUNhcElubmVyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBnZW9tZXRyeUZ1bmN0aW9uID0gKGZlYXR1cmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGdlb21ldHJ5ID0gdGhpcy5nZXRHZW9tZXRyeShmZWF0dXJlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEdlb0xpbmVTdHlsZS5jcmVhdGVBbmNob3JlZEdlb21ldHJ5KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpbmVDYXBJbm5lcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud2lkdGhJbm5lcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGluZUNhcElubmVyU3R5bGUuc2V0R2VvbWV0cnkoZ2VvbWV0cnlGdW5jdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdHlsZXNbbGVuZ3RoKytdID0gdGhpcy5saW5lQ2FwSW5uZXJTdHlsZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gRHJhd2luZyBjZW50ZXJcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29sb3JDZW50ZXIgJiYgdGhpcy53aWR0aENlbnRlcikge1xyXG4gICAgICAgICAgICAgICAgbGV0IGdlb21ldHJ5RnVuY3Rpb24gPSAoZmVhdHVyZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBnZW9tZXRyeSA9IHRoaXMuZ2V0R2VvbWV0cnkoZmVhdHVyZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2VvbWV0cnlUcmFuc2Zvcm0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlcyA9IHRoaXMuZ2V0VHJhbnNmb3JtVmFsdWVzKHRoaXMuZ2VvbWV0cnlUcmFuc2Zvcm0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2VvbWV0cnlUcmFuc2Zvcm0uc3RhcnRzV2l0aChcInRyYW5zbGF0ZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnkudHJhbnNsYXRlKCt2YWx1ZXNbMF0udHJpbSgpLCArdmFsdWVzWzFdLnRyaW0oKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5nZW9tZXRyeVRyYW5zZm9ybS5zdGFydHNXaXRoKFwic2NhbGVcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5LnNjYWxlKCt2YWx1ZXNbMF0udHJpbSgpLCArdmFsdWVzWzFdLnRyaW0oKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5nZW9tZXRyeVRyYW5zZm9ybS5zdGFydHNXaXRoKFwicm90YXRlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2VudGVyID0gb2wuZXh0ZW50LmdldENlbnRlcihnZW9tZXRyeS5nZXRFeHRlbnQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYW5nbGUgPSArdmFsdWVzWzBdLnRyaW0oKSAqIE1hdGguUEkgLyAxODA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeS5yb3RhdGUoYW5nbGUsIGNlbnRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5nZW9tZXRyeVRyYW5zZm9ybS5zdGFydHNXaXRoKFwic2tld1wiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5za2V3R2VvbWV0cnkoZ2VvbWV0cnksICt2YWx1ZXNbMF0udHJpbSgpLCArdmFsdWVzWzFdLnRyaW0oKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZlYXR1cmUuZ2V0R2VvbWV0cnkoKTtcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5saW5lQ2VudGVyU3R5bGUuc2V0R2VvbWV0cnkoZ2VvbWV0cnlGdW5jdGlvbik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0eWxlc1tsZW5ndGgrK10gPSB0aGlzLmxpbmVDZW50ZXJTdHlsZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nZW9tZXRyeUxpbmVDYXBzLmluY2x1ZGVzKHRoaXMubGluZUNhcENlbnRlcikpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZ2VvbWV0cnlGdW5jdGlvbiA9IChmZWF0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBnZW9tZXRyeSA9IHRoaXMuZ2V0R2VvbWV0cnkoZmVhdHVyZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBHZW9MaW5lU3R5bGUuY3JlYXRlQW5jaG9yZWRHZW9tZXRyeShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saW5lQ2FwQ2VudGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53aWR0aENlbnRlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGluZUNhcENlbnRlclN0eWxlLnNldEdlb21ldHJ5KGdlb21ldHJ5RnVuY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3R5bGVzW2xlbmd0aCsrXSA9IHRoaXMubGluZUNhcENlbnRlclN0eWxlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5vbmV3YXkpIHtcclxuICAgICAgICAgICAgbGV0IGRpc3BsYXlPbmV3YXkgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9uZXdheSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheU9uZXdheSA9IGZlYXR1cmUuZ2V0KHRoaXMub25ld2F5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlPbmV3YXkgPSB0aGlzLm9uZXdheTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZGlzcGxheU9uZXdheSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBmbGF0Q29vcmRpbmF0ZXMgPSBmZWF0dXJlLmdldEZsYXRDb29yZGluYXRlcygpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBsb25nZXN0ID0gMDtcclxuICAgICAgICAgICAgICAgIGxldCBsb25nZXN0SW5kZXg7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBmbGF0Q29vcmRpbmF0ZXMubGVuZ3RoIC0gNDsgaSArPSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRYID0gTWF0aC5hYnMoZmxhdENvb3JkaW5hdGVzW2ldIC0gZmxhdENvb3JkaW5hdGVzW2kgKyAyXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRZID0gTWF0aC5hYnMoZmxhdENvb3JkaW5hdGVzW2kgKyAxXSAtIGZsYXRDb29yZGluYXRlc1tpICsgM10pO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkaXN0YW5jZSA9IGRYICsgZFk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRpc3RhbmNlID4gbG9uZ2VzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb25nZXN0ID0gZGlzdGFuY2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvbmdlc3RJbmRleCA9IGk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBzdGFydCA9IFtmbGF0Q29vcmRpbmF0ZXNbbG9uZ2VzdEluZGV4XSwgZmxhdENvb3JkaW5hdGVzW2xvbmdlc3RJbmRleCArIDFdXTtcclxuICAgICAgICAgICAgICAgIGxldCBlbmQgPSBbZmxhdENvb3JkaW5hdGVzW2xvbmdlc3RJbmRleCArIDJdLCBmbGF0Q29vcmRpbmF0ZXNbbG9uZ2VzdEluZGV4ICsgM11dO1xyXG4gICAgICAgICAgICAgICAgbGV0IGR4ID0gZW5kWzBdIC0gc3RhcnRbMF07XHJcbiAgICAgICAgICAgICAgICBsZXQgZHkgPSBlbmRbMV0gLSBzdGFydFsxXTtcclxuICAgICAgICAgICAgICAgIGxldCByb3RhdGlvbiA9IE1hdGguYXRhbjIoZHksIGR4KTtcclxuICAgICAgICAgICAgICAgIGxldCBjZW50ZXJQb2ludDogW251bWJlciwgbnVtYmVyXSA9IFsoc3RhcnRbMF0gKyBlbmRbMF0pICogMC41LCAoc3RhcnRbMV0gKyBlbmRbMV0pICogMC41XTtcclxuICAgICAgICAgICAgICAgIGxldCBnZW9tZXRyeSA9IG5ldyBvbC5nZW9tLlBvaW50KGNlbnRlclBvaW50LCBcIlhZXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMub25ld2F5SWNvbi5yb3RhdGlvbl8gPSAtcm90YXRpb247XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5vbmV3YXlTdHlsZS5zZXRHZW9tZXRyeShnZW9tZXRyeSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0eWxlc1tsZW5ndGgrK10gPSB0aGlzLm9uZXdheVN0eWxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5zdHlsZXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0R2VvbWV0cnkoZmVhdHVyZTogYW55KSB7XHJcbiAgICAgICAgbGV0IHRtcEZsYXRDb29yZGluYXRlcyA9IGZlYXR1cmUuZ2V0RmxhdENvb3JkaW5hdGVzKCk7XHJcbiAgICAgICAgbGV0IHRtcENvb3JkaW5hdGVzOiBvbC5Db29yZGluYXRlW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRtcEZsYXRDb29yZGluYXRlcy5sZW5ndGg7IGkgKz0gMikge1xyXG4gICAgICAgICAgICB0bXBDb29yZGluYXRlcy5wdXNoKFt0bXBGbGF0Q29vcmRpbmF0ZXNbaV0sIHRtcEZsYXRDb29yZGluYXRlc1tpICsgMV1dKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBvbC5nZW9tLkxpbmVTdHJpbmcodG1wQ29vcmRpbmF0ZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGVBbmNob3JlZEdlb21ldHJ5KGdlb21ldHJ5OiBvbC5nZW9tLkdlb21ldHJ5LCBsaW5lQ2FwOiBzdHJpbmcsIGxpbmVXaWR0aDogbnVtYmVyLCByZXNvbHV0aW9uOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgc2VnbWVudHMgPSBHZW9MaW5lU3R5bGUuZ2V0VGVybWluYWxTZWdtZW50cyhnZW9tZXRyeSk7XHJcbiAgICAgICAgbGV0IGxpbmVhclJpbmc6IG9sLmdlb20uTGluZWFyUmluZyA9IHVuZGVmaW5lZDtcclxuICAgICAgICBsZXQgbXVsdGlQb2x5Z29uID0gbmV3IG9sLmdlb20uTXVsdGlQb2x5Z29uKFtdKTtcclxuICAgICAgICBmb3IgKGxldCBzZWdtZW50IG9mIHNlZ21lbnRzKSB7XHJcbiAgICAgICAgICAgIGxldCBmaXJzdCA9IHNlZ21lbnRbMF07XHJcbiAgICAgICAgICAgIGxldCBsYXN0ID0gc2VnbWVudFsxXTtcclxuICAgICAgICAgICAgbGV0IGRlbHRhID0gbGluZVdpZHRoICogcmVzb2x1dGlvbiAvIDI7XHJcbiAgICAgICAgICAgIGxldCB0cmFuc2xhdGVEZWx0YSA9IChsaW5lV2lkdGggLSAxKSAqIHJlc29sdXRpb24gLyAyO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGxpbmVDYXApIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJ0cmlhbmdsZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVhclJpbmcgPSBuZXcgb2wuZ2VvbS5MaW5lYXJSaW5nKFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgW2xhc3RbMF0sIGxhc3RbMV0gKyBkZWx0YV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtsYXN0WzBdICsgZGVsdGEsIGxhc3RbMV1dLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbbGFzdFswXSwgbGFzdFsxXSAtIGRlbHRhXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW2xhc3RbMF0sIGxhc3RbMV0gKyBkZWx0YV1cclxuICAgICAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJzcXVhcmVhbmNob3JcIjpcclxuICAgICAgICAgICAgICAgICAgICBkZWx0YSAqPSAxLjU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZWFyUmluZyA9IG5ldyBvbC5nZW9tLkxpbmVhclJpbmcoW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBbbGFzdFswXSAtIGRlbHRhLCBsYXN0WzFdICsgZGVsdGFdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbbGFzdFswXSArIGRlbHRhLCBsYXN0WzFdICsgZGVsdGFdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbbGFzdFswXSArIGRlbHRhLCBsYXN0WzFdIC0gZGVsdGFdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbbGFzdFswXSAtIGRlbHRhLCBsYXN0WzFdIC0gZGVsdGFdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbbGFzdFswXSAtIGRlbHRhLCBsYXN0WzFdICsgZGVsdGFdXHJcbiAgICAgICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwicm91bmRhbmNob3JcIjpcclxuICAgICAgICAgICAgICAgICAgICBkZWx0YSAqPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByYWRpdXNEZWx0YSA9IE1hdGguUEkgLyAxODtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY29vcmRpbmF0ZXM6IG9sLkNvb3JkaW5hdGVbXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByYWRpdXMgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzY7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlcy5wdXNoKFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hdGguY29zKHJhZGl1cykgKiBkZWx0YSArIGxhc3RbMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLnNpbihyYWRpdXMpICogZGVsdGEgKyBsYXN0WzFdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByYWRpdXMgKz0gcmFkaXVzRGVsdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzLnB1c2goY29vcmRpbmF0ZXNbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVhclJpbmcgPSBuZXcgb2wuZ2VvbS5MaW5lYXJSaW5nKGNvb3JkaW5hdGVzKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJkaWFtb25kYW5jaG9yXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsdGEgKj0gMS41O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVhclJpbmcgPSBuZXcgb2wuZ2VvbS5MaW5lYXJSaW5nKFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgW2xhc3RbMF0gLSBkZWx0YSwgbGFzdFsxXSArIGRlbHRhXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW2xhc3RbMF0gKyBkZWx0YSwgbGFzdFsxXSArIGRlbHRhXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW2xhc3RbMF0gKyBkZWx0YSwgbGFzdFsxXSAtIGRlbHRhXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW2xhc3RbMF0gLSBkZWx0YSwgbGFzdFsxXSAtIGRlbHRhXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW2xhc3RbMF0gLSBkZWx0YSwgbGFzdFsxXSArIGRlbHRhXVxyXG4gICAgICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVhclJpbmcucm90YXRlKE1hdGguUEkgLyA0LCBsYXN0KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJhcnJvd2FuY2hvclwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGRlbHRhICo9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZWFyUmluZyA9IG5ldyBvbC5nZW9tLkxpbmVhclJpbmcoW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBbbGFzdFswXSwgbGFzdFsxXSArIGRlbHRhXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW2xhc3RbMF0gKyBkZWx0YSAqIE1hdGguY29zKE1hdGguUEkgLyA2KSAqIDIsIGxhc3RbMV1dLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbbGFzdFswXSwgbGFzdFsxXSAtIGRlbHRhXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW2xhc3RbMF0sIGxhc3RbMV0gKyBkZWx0YV1cclxuICAgICAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZmlyc3RbMF0gPT09IGxhc3RbMF0pIHtcclxuICAgICAgICAgICAgICAgIGlmIChmaXJzdFsxXSA+IGxhc3RbMV0pIHtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lYXJSaW5nLnJvdGF0ZSgtTWF0aC5QSSAvIDIsIGxhc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVhclJpbmcudHJhbnNsYXRlKDAsIC10cmFuc2xhdGVEZWx0YSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVhclJpbmcucm90YXRlKE1hdGguUEkgLyAyLCBsYXN0KTtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lYXJSaW5nLnRyYW5zbGF0ZSgwLCB0cmFuc2xhdGVEZWx0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZmlyc3RbMV0gPT09IGxhc3RbMV0pIHtcclxuICAgICAgICAgICAgICAgIGlmIChsYXN0WzBdIDwgZmlyc3RbMF0pIHtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lYXJSaW5nLnJvdGF0ZShNYXRoLlBJLCBsYXN0KTtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lYXJSaW5nLnRyYW5zbGF0ZSgtdHJhbnNsYXRlRGVsdGEsIDApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lYXJSaW5nLnRyYW5zbGF0ZSh0cmFuc2xhdGVEZWx0YSwgMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZHggPSBsYXN0WzBdIC0gZmlyc3RbMF07XHJcbiAgICAgICAgICAgICAgICBsZXQgZHkgPSBsYXN0WzFdIC0gZmlyc3RbMV07XHJcbiAgICAgICAgICAgICAgICBsZXQgcmFkaWFucyA9IE1hdGguYXRhbihkeSAvIGR4KTtcclxuICAgICAgICAgICAgICAgIGlmIChsYXN0WzBdID4gZmlyc3RbMF0pIHtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lYXJSaW5nLnJvdGF0ZShyYWRpYW5zLCBsYXN0KTtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lYXJSaW5nLnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5jb3MocmFkaWFucykgKiB0cmFuc2xhdGVEZWx0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5zaW4ocmFkaWFucykgKiB0cmFuc2xhdGVEZWx0YVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVhclJpbmcucm90YXRlKHJhZGlhbnMgKyBNYXRoLlBJLCBsYXN0KTtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lYXJSaW5nLnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgLU1hdGguY29zKHJhZGlhbnMpICogdHJhbnNsYXRlRGVsdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC1NYXRoLnNpbihyYWRpYW5zKSAqIHRyYW5zbGF0ZURlbHRhXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IHBvbHlnb24gPSBuZXcgb2wuZ2VvbS5Qb2x5Z29uKFtdKTtcclxuICAgICAgICAgICAgcG9seWdvbi5hcHBlbmRMaW5lYXJSaW5nKGxpbmVhclJpbmcpO1xyXG4gICAgICAgICAgICBtdWx0aVBvbHlnb24uYXBwZW5kUG9seWdvbihwb2x5Z29uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG11bHRpUG9seWdvbjtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0VGVybWluYWxTZWdtZW50cyhnZW9tZXRyeTogb2wuZ2VvbS5HZW9tZXRyeSkge1xyXG4gICAgICAgIGxldCB0eXBlID0gZ2VvbWV0cnkuZ2V0VHlwZSgpO1xyXG4gICAgICAgIGxldCByZXN1bHRzID0gW107XHJcbiAgICAgICAgbGV0IGdlb21ldHJ5VHlwZSA9ICg8YW55Pm9sLmdlb20pLkdlb21ldHJ5VHlwZTtcclxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBnZW9tZXRyeVR5cGUuTElORV9TVFJJTkc6XHJcbiAgICAgICAgICAgICAgICBsZXQgY29vcmRzID0gKDxhbnk+Z2VvbWV0cnkpLmdldENvb3JkaW5hdGVzKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3RhcnQgPSBbY29vcmRzWzFdLCBjb29yZHNbMF1dO1xyXG4gICAgICAgICAgICAgICAgbGV0IGVuZCA9IFtjb29yZHNbY29vcmRzLmxlbmd0aCAtIDJdLCBjb29yZHNbY29vcmRzLmxlbmd0aCAtIDFdXTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaChzdGFydCk7XHJcbiAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goZW5kKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGdlb21ldHJ5VHlwZS5NVUxUSV9MSU5FX1NUUklORzpcclxuICAgICAgICAgICAgICAgIGxldCBsaW5lcyA9ICg8YW55Pmdlb21ldHJ5KS5nZXRMaW5lU3RyaW5ncygpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgbGluZSBvZiBsaW5lcykge1xyXG4gICAgICAgICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KHJlc3VsdHMsIEdlb0xpbmVTdHlsZS5nZXRUZXJtaW5hbFNlZ21lbnRzKGxpbmUpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGdlb21ldHJ5VHlwZS5HRU9NRVRSWV9DT0xMRUNUSU9OOlxyXG4gICAgICAgICAgICAgICAgbGV0IGdlb21ldHJpZXMgPSAoPGFueT5nZW9tZXRyeSkuZ2V0R2VvbWV0cmllcygpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgZ2VvbSBvZiBnZW9tZXRyaWVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkocmVzdWx0cywgR2VvTGluZVN0eWxlLmdldFRlcm1pbmFsU2VnbWVudHMoZ2VvbSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHRzO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0eWxlL2dlb0xpbmVTdHlsZS50cyIsImltcG9ydCB7IEdlb1N0eWxlIH0gZnJvbSBcIi4vZ2VvU3R5bGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHZW9Qb2ludFN0eWxlIGV4dGVuZHMgR2VvU3R5bGUge1xyXG4gICAgc3RhdGljIHBvaW50U3R5bGUgPSBuZXcgb2wuc3R5bGUuU3R5bGUoKTtcclxuICAgIHN0YXRpYyBsaW5lYXJHcmFkaWVudERpY3Rpb25hcnk6IHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xyXG4gICAgc3RhdGljIHJhZGlhbEdyYWRpZW50RGljdGlvbmFyeTogeyBbaW5kZXg6IHN0cmluZ106IGFueSB9ID0ge307XHJcblxyXG4gICAgYnJ1c2hPcHRpb25zOiBhbnk7XHJcblxyXG4gICAgYnJ1c2hUeXBlOiBzdHJpbmc7XHJcbiAgICBnbHlwaDogc3RyaW5nO1xyXG4gICAgZmlsbDogc3RyaW5nO1xyXG4gICAgbGluZWFyR3JhZGllbnQ6IHN0cmluZztcclxuICAgIHJhZGlhbEdyYWRpZW50OiBzdHJpbmc7XHJcbiAgICBnbHlwaE5hbWU6IHN0cmluZztcclxuICAgIG91dGxpbmVDb2xvcjogc3RyaW5nO1xyXG4gICAgb3V0bGluZVdpZHRoOiBudW1iZXI7XHJcbiAgICBzaXplOiBudW1iZXI7XHJcbiAgICBhbmdsZTogbnVtYmVyO1xyXG4gICAgZHg6IG51bWJlcjtcclxuICAgIGR5OiBudW1iZXI7XHJcbiAgICBwb2ludEZpbGU6IHN0cmluZztcclxuICAgIG9wYWNpdHk6IG51bWJlcjtcclxuICAgIHN5bWJvbFR5cGU6IHN0cmluZztcclxuICAgIHRyYW5zZm9ybTogc3RyaW5nO1xyXG4gICAgcG9pbnRUeXBlOiBzdHJpbmc7XHJcbiAgICBpbWFnZVN0eWxlOiBvbC5zdHlsZS5JbWFnZTtcclxuICAgIHRleHRTdHlsZTogb2wuc3R5bGUuVGV4dDtcclxuXHJcbiAgICBjb252ZXJ0ZWRHbHlwaE91dExpbmVDb2xvcjogc3RyaW5nO1xyXG4gICAgY29udmVydGVkR2x5cGhGaWxsOiBhbnk7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc3R5bGVKc29uPzogYW55KSB7XHJcbiAgICAgICAgc3VwZXIoc3R5bGVKc29uKTtcclxuICAgICAgICBpZiAoc3R5bGVKc29uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2x5cGggPSBzdHlsZUpzb25bXCJwb2ludC1nbHlwaFwiXTtcclxuICAgICAgICAgICAgdGhpcy5saW5lYXJHcmFkaWVudCA9IHN0eWxlSnNvbltcInBvaW50LWxpbmVhci1ncmFkaWVudFwiXTtcclxuICAgICAgICAgICAgdGhpcy5yYWRpYWxHcmFkaWVudCA9IHN0eWxlSnNvbltcInBvaW50LXJhZGlhbC1ncmFkaWVudFwiXTtcclxuICAgICAgICAgICAgdGhpcy5maWxsID0gc3R5bGVKc29uW1wicG9pbnQtZmlsbFwiXTtcclxuICAgICAgICAgICAgdGhpcy5nbHlwaE5hbWUgPSBzdHlsZUpzb25bXCJwb2ludC1nbHlwaC1uYW1lXCJdO1xyXG4gICAgICAgICAgICB0aGlzLm91dGxpbmVDb2xvciA9IHN0eWxlSnNvbltcInBvaW50LW91dGxpbmUtY29sb3JcIl07XHJcbiAgICAgICAgICAgIHRoaXMub3V0bGluZVdpZHRoID0gc3R5bGVKc29uW1wicG9pbnQtb3V0bGluZS13aWR0aFwiXTtcclxuICAgICAgICAgICAgdGhpcy5zaXplID0gc3R5bGVKc29uW1wicG9pbnQtc2l6ZVwiXTtcclxuICAgICAgICAgICAgdGhpcy5hbmdsZSA9IHN0eWxlSnNvbltcInBvaW50LXJvdGF0ZS1hbmdsZVwiXSA/IHN0eWxlSnNvbltcInBvaW50LXJvdGF0ZS1hbmdsZVwiXSA6IDA7XHJcbiAgICAgICAgICAgIHRoaXMuZHggPSBzdHlsZUpzb25bXCJwb2ludC1keFwiXTtcclxuICAgICAgICAgICAgdGhpcy5keSA9IHN0eWxlSnNvbltcInBvaW50LWR5XCJdO1xyXG4gICAgICAgICAgICB0aGlzLnBvaW50RmlsZSA9IHN0eWxlSnNvbltcInBvaW50LWZpbGVcIl07XHJcbiAgICAgICAgICAgIHRoaXMub3BhY2l0eSA9IHN0eWxlSnNvbltcInBvaW50LW9wYWNpdHlcIl07XHJcbiAgICAgICAgICAgIHRoaXMuc3ltYm9sVHlwZSA9IHN0eWxlSnNvbltcInBvaW50LXN5bWJvbC10eXBlXCJdO1xyXG4gICAgICAgICAgICB0aGlzLnRyYW5zZm9ybSA9IHN0eWxlSnNvbltcInBvaW50LXRyYW5zZm9ybVwiXTtcclxuICAgICAgICAgICAgdGhpcy5wb2ludFR5cGUgPSBzdHlsZUpzb25bXCJwb2ludC10eXBlXCJdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsaXplQ29yZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5vdXRsaW5lQ29sb3IpIHtcclxuICAgICAgICAgICAgdGhpcy5jb252ZXJ0ZWRHbHlwaE91dExpbmVDb2xvciA9IEdlb1N0eWxlLnRvUkdCQUNvbG9yKHRoaXMub3V0bGluZUNvbG9yLCB0aGlzLm9wYWNpdHkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZmlsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnZlcnRlZEdseXBoRmlsbCA9IEdlb1N0eWxlLnRvUkdCQUNvbG9yKHRoaXMuZmlsbCwgdGhpcy5vcGFjaXR5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxpbmVhckdyYWRpZW50KSB7XHJcbiAgICAgICAgICAgIGlmIChHZW9Qb2ludFN0eWxlLmxpbmVhckdyYWRpZW50RGljdGlvbmFyeS5oYXNPd25Qcm9wZXJ0eSh0aGlzLmxpbmVhckdyYWRpZW50KSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb252ZXJ0ZWRHbHlwaEZpbGwgPSBHZW9Qb2ludFN0eWxlLmxpbmVhckdyYWRpZW50RGljdGlvbmFyeVt0aGlzLmxpbmVhckdyYWRpZW50XTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udmVydGVkR2x5cGhGaWxsID0gR2VvU3R5bGUudG9PTExpbmVhckdyYWRpZW50KHRoaXMubGluZWFyR3JhZGllbnQsIHRoaXMub3BhY2l0eSwgdGhpcy5zaXplKTtcclxuICAgICAgICAgICAgICAgIEdlb1BvaW50U3R5bGUubGluZWFyR3JhZGllbnREaWN0aW9uYXJ5W3RoaXMubGluZWFyR3JhZGllbnRdID0gdGhpcy5jb252ZXJ0ZWRHbHlwaEZpbGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnJhZGlhbEdyYWRpZW50KSB7XHJcbiAgICAgICAgICAgIGlmIChHZW9Qb2ludFN0eWxlLnJhZGlhbEdyYWRpZW50RGljdGlvbmFyeS5oYXNPd25Qcm9wZXJ0eSh0aGlzLnJhZGlhbEdyYWRpZW50KSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb252ZXJ0ZWRHbHlwaEZpbGwgPSBHZW9Qb2ludFN0eWxlLnJhZGlhbEdyYWRpZW50RGljdGlvbmFyeVt0aGlzLnJhZGlhbEdyYWRpZW50XTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udmVydGVkR2x5cGhGaWxsID0gR2VvU3R5bGUudG9PTFJhZGlhbEdyYWRpZW50KHRoaXMucmFkaWFsR3JhZGllbnQsIHRoaXMub3BhY2l0eSwgdGhpcy5zaXplKTtcclxuICAgICAgICAgICAgICAgIEdlb1BvaW50U3R5bGUucmFkaWFsR3JhZGllbnREaWN0aW9uYXJ5W3RoaXMucmFkaWFsR3JhZGllbnRdID0gdGhpcy5jb252ZXJ0ZWRHbHlwaEZpbGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN3aXRjaCAodGhpcy5wb2ludFR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcInN5bWJvbFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0U3ltYm9sU3R5bGUoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiaW1hZ2VcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdEJpdG1hcFN0eWxlKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImdseXBoXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRHbHlwaFN0eWxlKCk7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q29udmVydGVkU3R5bGVDb3JlKGZlYXR1cmU6IG9sLkZlYXR1cmUsIHJlc29sdXRpb246IG51bWJlciwgb3B0aW9uczogYW55KTogb2wuc3R5bGUuU3R5bGVbXSB7XHJcbiAgICAgICAgaWYgKHRoaXMucG9pbnRUeXBlID09PSBcImdseXBoXCIpIHtcclxuICAgICAgICAgICAgR2VvUG9pbnRTdHlsZS5wb2ludFN0eWxlLnNldEltYWdlKG51bGwpO1xyXG4gICAgICAgICAgICBHZW9Qb2ludFN0eWxlLnBvaW50U3R5bGUuc2V0VGV4dCh0aGlzLnRleHRTdHlsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBHZW9Qb2ludFN0eWxlLnBvaW50U3R5bGUuc2V0VGV4dChudWxsKTtcclxuICAgICAgICAgICAgR2VvUG9pbnRTdHlsZS5wb2ludFN0eWxlLnNldEltYWdlKHRoaXMuaW1hZ2VTdHlsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc3R5bGVzID0gW107XHJcbiAgICAgICAgdGhpcy5zdHlsZXNbMF0gPSBHZW9Qb2ludFN0eWxlLnBvaW50U3R5bGU7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnN0eWxlcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRTeW1ib2xTdHlsZSgpIHtcclxuICAgICAgICB0aGlzLmJydXNoVHlwZSA9IFwiR2VvU29saWRCcnVzaFwiO1xyXG4gICAgICAgIGlmICh0aGlzLmJydXNoVHlwZSkge1xyXG4gICAgICAgICAgICB0aGlzLmJydXNoT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgIGZpbGxDb2xvcjogdGhpcy5maWxsLFxyXG4gICAgICAgICAgICAgICAgZmlsbE9wYWNpdHk6IHRoaXMub3BhY2l0eSxcclxuICAgICAgICAgICAgICAgIGxpbmVHcmFkaWVudDogdGhpcy5saW5lYXJHcmFkaWVudCxcclxuICAgICAgICAgICAgICAgIHJhZGl1c0dyYWRpZW50OiB0aGlzLnJhZGlhbEdyYWRpZW50XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcmFkaXVzID0gdGhpcy5zaXplIC8gMjtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuc3ltYm9sVHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2lyY2xlXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlU3R5bGUgPSBuZXcgb2wuc3R5bGUuQ2lyY2xlKHtcclxuICAgICAgICAgICAgICAgICAgICBmaWxsOiBuZXcgb2wuc3R5bGUuRmlsbCgoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdGhpcy5jb252ZXJ0ZWRHbHlwaEZpbGxcclxuICAgICAgICAgICAgICAgICAgICB9KSksXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiBuZXcgb2wuc3R5bGUuU3Ryb2tlKCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB0aGlzLmNvbnZlcnRlZEdseXBoT3V0TGluZUNvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogdGhpcy5vdXRsaW5lV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICB9KSksXHJcbiAgICAgICAgICAgICAgICAgICAgcmFkaXVzOiByYWRpdXNcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzcXVhcmVcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VTdHlsZSA9IG5ldyBvbC5zdHlsZS5SZWd1bGFyU2hhcGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6IG5ldyBvbC5zdHlsZS5GaWxsKCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB0aGlzLmNvbnZlcnRlZEdseXBoRmlsbFxyXG4gICAgICAgICAgICAgICAgICAgIH0pKSxcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2U6IG5ldyBvbC5zdHlsZS5TdHJva2UoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHRoaXMuY29udmVydGVkR2x5cGhPdXRMaW5lQ29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiB0aGlzLm91dGxpbmVXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIH0pKSxcclxuICAgICAgICAgICAgICAgICAgICBwb2ludHM6IDQsXHJcbiAgICAgICAgICAgICAgICAgICAgcmFkaXVzOiByYWRpdXMsXHJcbiAgICAgICAgICAgICAgICAgICAgYW5nbGU6IE1hdGguUEkgLyA0ICsgdGhpcy5hbmdsZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInRyaWFuZ2xlXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlU3R5bGUgPSBuZXcgb2wuc3R5bGUuUmVndWxhclNoYXBlKHtcclxuICAgICAgICAgICAgICAgICAgICBmaWxsOiBuZXcgb2wuc3R5bGUuRmlsbCgoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdGhpcy5jb252ZXJ0ZWRHbHlwaEZpbGxcclxuICAgICAgICAgICAgICAgICAgICB9KSksXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiBuZXcgb2wuc3R5bGUuU3Ryb2tlKCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB0aGlzLmNvbnZlcnRlZEdseXBoT3V0TGluZUNvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogdGhpcy5vdXRsaW5lV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICB9KSksXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRzOiAzLFxyXG4gICAgICAgICAgICAgICAgICAgIHJhZGl1czogcmFkaXVzLFxyXG4gICAgICAgICAgICAgICAgICAgIGFuZ2xlOiB0aGlzLmFuZ2xlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiY3Jvc3NcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VTdHlsZSA9IG5ldyBvbC5zdHlsZS5SZWd1bGFyU2hhcGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6IG5ldyBvbC5zdHlsZS5GaWxsKCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB0aGlzLmNvbnZlcnRlZEdseXBoRmlsbFxyXG4gICAgICAgICAgICAgICAgICAgIH0pKSxcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2U6IG5ldyBvbC5zdHlsZS5TdHJva2UoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHRoaXMuY29udmVydGVkR2x5cGhPdXRMaW5lQ29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiB0aGlzLm91dGxpbmVXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIH0pKSxcclxuICAgICAgICAgICAgICAgICAgICBwb2ludHM6IDQsXHJcbiAgICAgICAgICAgICAgICAgICAgcmFkaXVzOiByYWRpdXMsXHJcbiAgICAgICAgICAgICAgICAgICAgcmFkaXVzMjogMCxcclxuICAgICAgICAgICAgICAgICAgICBhbmdsZTogdGhpcy5hbmdsZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImRpYW1vbmRcIjpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZGlhbW9uZDJcIjpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwic3RhclwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZVN0eWxlID0gbmV3IG9sLnN0eWxlLlJlZ3VsYXJTaGFwZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbDogbmV3IG9sLnN0eWxlLkZpbGwoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHRoaXMuY29udmVydGVkR2x5cGhGaWxsXHJcbiAgICAgICAgICAgICAgICAgICAgfSkpLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZTogbmV3IG9sLnN0eWxlLlN0cm9rZSgoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdGhpcy5jb252ZXJ0ZWRHbHlwaE91dExpbmVDb2xvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHRoaXMub3V0bGluZVdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgfSkpLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50czogNSxcclxuICAgICAgICAgICAgICAgICAgICByYWRpdXM6IHJhZGl1cyxcclxuICAgICAgICAgICAgICAgICAgICByYWRpdXMyOiByYWRpdXMgLyAyLjUsXHJcbiAgICAgICAgICAgICAgICAgICAgYW5nbGU6IHRoaXMuYW5nbGVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzdGFyMlwiOlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdEJpdG1hcFN0eWxlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnBvaW50RmlsZSkge1xyXG4gICAgICAgICAgICB0aGlzLmltYWdlU3R5bGUgPSBuZXcgb2wuc3R5bGUuSWNvbigoe1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogdGhpcy5vcGFjaXR5IHx8IDEsXHJcbiAgICAgICAgICAgICAgICBzcmM6IHRoaXMucG9pbnRGaWxlLFxyXG4gICAgICAgICAgICAgICAgcm90YXRpb246IHRoaXMuYW5nbGUgKiBNYXRoLlBJIC8gMTgwLFxyXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiBbdGhpcy5keCwgLXRoaXMuZHldXHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0R2x5cGhTdHlsZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5nbHlwaCkge1xyXG4gICAgICAgICAgICB0aGlzLnRleHRTdHlsZSA9IG5ldyBvbC5zdHlsZS5UZXh0KCh7XHJcbiAgICAgICAgICAgICAgICBmb250OiBgJHt0aGlzLnNpemV9cHggJHt0aGlzLmdseXBofWAsXHJcbiAgICAgICAgICAgICAgICBvZmZzZXRYOiB0aGlzLmR4LFxyXG4gICAgICAgICAgICAgICAgb2Zmc2V0WTogdGhpcy5keSxcclxuICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMuZ2x5cGhOYW1lLFxyXG4gICAgICAgICAgICAgICAgZmlsbDogbmV3IG9sLnN0eWxlLkZpbGwoKHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdGhpcy5jb252ZXJ0ZWRHbHlwaEZpbGxcclxuICAgICAgICAgICAgICAgIH0pKSxcclxuICAgICAgICAgICAgICAgIHN0cm9rZTogbmV3IG9sLnN0eWxlLlN0cm9rZSgoe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB0aGlzLmNvbnZlcnRlZEdseXBoT3V0TGluZUNvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiB0aGlzLm91dGxpbmVXaWR0aFxyXG4gICAgICAgICAgICAgICAgfSkpLFxyXG4gICAgICAgICAgICAgICAgcm90YXRpb246IHRoaXMuYW5nbGUgKiBNYXRoLlBJIC8gMTgwXHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhcHBseVRyYW5zRm9ybShzdHlsZTogb2wuc3R5bGUuU3R5bGUpIHtcclxuICAgICAgICBsZXQgdHJhbnNmb3JtUmd4ID0gLyhbYS16XSspXFwoKC4qPylcXCkvaTtcclxuICAgICAgICBpZiAodGhpcy50cmFuc2Zvcm0gJiYgdHJhbnNmb3JtUmd4LnRlc3QodGhpcy50cmFuc2Zvcm0pKSB7XHJcbiAgICAgICAgICAgIGxldCBtYXRjaGVkUmVzdWx0cyA9IHRoaXMudHJhbnNmb3JtLm1hdGNoKHRyYW5zZm9ybVJneCk7XHJcbiAgICAgICAgICAgIGxldCB0cmFuc0Zvcm1UeXBlID0gbWF0Y2hlZFJlc3VsdHMubGVuZ3RoID4gMiA/IG1hdGNoZWRSZXN1bHRzWzFdIDogXCJcIjtcclxuICAgICAgICAgICAgbGV0IHRyYW5zRm9ybVZhbHVlID0gbWF0Y2hlZFJlc3VsdHMubGVuZ3RoID4gMiA/IG1hdGNoZWRSZXN1bHRzWzJdIDogXCJcIjtcclxuICAgICAgICAgICAgc3dpdGNoICh0cmFuc0Zvcm1UeXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwicm90YXRlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUuZ2V0SW1hZ2UoKSAmJiBzdHlsZS5nZXRJbWFnZSgpLnNldFJvdGF0aW9uKHBhcnNlSW50KHRyYW5zRm9ybVZhbHVlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUuZ2V0VGV4dCgpICYmIHN0eWxlLmdldFRleHQoKS5zZXRSb3RhdGlvbihwYXJzZUludCh0cmFuc0Zvcm1WYWx1ZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInNjYWxlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNjYWxlID0gcGFyc2VJbnQodHJhbnNGb3JtVmFsdWUuc3BsaXQoXCIsXCIpWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZS5nZXRJbWFnZSgpICYmIHN0eWxlLmdldEltYWdlKCkuc2V0U2NhbGUoc2NhbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlLmdldFRleHQoKSAmJiBzdHlsZS5nZXRUZXh0KCkuc2V0U2NhbGUoc2NhbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInRyYW5zbGF0ZVwiOlxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBcIm5vdCBzdXBwb3J0IFwiICsgdGhpcy50cmFuc2Zvcm07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3R5bGUvZ2VvUG9pbnRTdHlsZS50cyIsIlxyXG5pbXBvcnQgeyBHZW9TdHlsZSB9IGZyb20gXCIuL2dlb1N0eWxlXCI7XHJcbmltcG9ydCB7IEdlb0JydXNoIH0gZnJvbSBcIi4uL3N0eWxlL2dlb0JydXNoXCI7XHJcblxyXG5pbXBvcnQgeyBUZXh0TGFiZWxpbmdTdHJhdGVneSB9IGZyb20gXCIuL3RleHRMYWJlbGluZ1N0cmF0ZWd5XCI7XHJcbmltcG9ydCB7IERldGVjdFRleHRMYWJlbGluZ1N0cmF0ZWd5IH0gZnJvbSBcIi4vZGV0ZWN0VGV4dExhYmVsaW5nU3RyYXRlZ3lcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHZW9UZXh0U3R5bGUgZXh0ZW5kcyBHZW9TdHlsZSB7XHJcbiAgICB0ZXh0QWxpZ25zID0gW1wibGVmdFwiLCBcInJpZ2h0XCIsIFwiY2VudGVyXCIsIFwiZW5kXCIsIFwic3RhcnRcIl07XHJcblxyXG4gICAgYWxpZ246IHN0cmluZztcclxuICAgIGF2b2lkRWRnZTogYm9vbGVhbjtcclxuICAgIGRhdGVGb3JtYXQ6IHN0cmluZztcclxuICAgIGR4OiBudW1iZXI7XHJcbiAgICBkeTogbnVtYmVyO1xyXG4gICAgZm9udDogc3RyaW5nO1xyXG4gICAgZmlsbDogc3RyaW5nO1xyXG4gICAgZm9yY2VIb3Jpem9udGFsRm9yTGluZTogYm9vbGVhbjtcclxuICAgIGhhbG9GaWxsOiBzdHJpbmc7XHJcbiAgICBoYWxvUmFkaXVzOiBudW1iZXI7XHJcbiAgICBtYXJnaW46IG51bWJlcjtcclxuICAgIG1hc2tDb2xvcjogc3RyaW5nO1xyXG4gICAgbWFza01hcmdpbjogbnVtYmVyO1xyXG4gICAgbWFza091dGxpbmVDb2xvcjogc3RyaW5nO1xyXG4gICAgbWFza091dGxpbmVXaWR0aDogbnVtYmVyO1xyXG4gICAgbWFza1R5cGU6IHN0cmluZztcclxuICAgIG1heENoYXJBbmdsZTogc3RyaW5nO1xyXG4gICAgbWluRGlzdGFuY2U6IG51bWJlcjtcclxuICAgIG1pblBhZGRpbmc6IG51bWJlcjtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIG51bWVyaWNGb3JtYXQ6IHN0cmluZztcclxuICAgIG9wYWNpdHk6IG51bWJlcjtcclxuICAgIHJvdGF0ZUFuZ2xlOiBudW1iZXI7XHJcbiAgICBwbGFjZW1lbnRzOiBzdHJpbmc7XHJcbiAgICBwbGFjZW1lbnRUeXBlOiBzdHJpbmc7XHJcbiAgICBwb2x5Z29uTGFiZWxpbmdMb2NhdGlvbjogc3RyaW5nO1xyXG4gICAgc3BhY2luZzogbnVtYmVyO1xyXG4gICAgc3BsaW5lVHlwZTogc3RyaW5nO1xyXG4gICAgdGV4dEZvcm1hdDogc3RyaW5nO1xyXG4gICAgd3JhcEJlZm9yZTogc3RyaW5nO1xyXG4gICAgd3JhcFdpZHRoOiBudW1iZXI7XHJcblxyXG4gICAgbGFiZWxJbmZvczogYW55O1xyXG4gICAgaW1hZ2VDYWNoZTogYW55O1xyXG5cclxuICAgIHN0YXRpYyBzdHlsZSA9IG5ldyBvbC5zdHlsZS5TdHlsZSh7fSk7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc3R5bGVKc29uPzogYW55KSB7XHJcbiAgICAgICAgc3VwZXIoc3R5bGVKc29uKTtcclxuICAgICAgICB0aGlzLmxhYmVsSW5mb3MgPSBbXTtcclxuICAgICAgICB0aGlzLmltYWdlQ2FjaGUgPSBbXTtcclxuXHJcbiAgICAgICAgaWYgKHN0eWxlSnNvbikge1xyXG4gICAgICAgICAgICB0aGlzLmFsaWduID0gc3R5bGVKc29uW1widGV4dC1hbGlnblwiXTtcclxuXHJcbiAgICAgICAgICAgIC8vIFRPRE9cclxuICAgICAgICAgICAgdGhpcy5hdm9pZEVkZ2UgPSBzdHlsZUpzb25bXCJ0ZXh0LWF2b2lkLWVkZ2VcIl07XHJcblxyXG4gICAgICAgICAgICB0aGlzLmR4ID0gc3R5bGVKc29uW1widGV4dC1keFwiXTtcclxuICAgICAgICAgICAgdGhpcy5keSA9IHN0eWxlSnNvbltcInRleHQtZHlcIl07XHJcbiAgICAgICAgICAgIHRoaXMuZm9udCA9IHN0eWxlSnNvbltcInRleHQtZm9udFwiXTtcclxuICAgICAgICAgICAgdGhpcy5maWxsID0gc3R5bGVKc29uW1widGV4dC1maWxsXCJdO1xyXG4gICAgICAgICAgICB0aGlzLmZvcmNlSG9yaXpvbnRhbEZvckxpbmUgPSBzdHlsZUpzb25bXCJ0ZXh0LWZvcmNlLWhvcml6b250YWwtZm9yLWxpbmVcIl07XHJcbiAgICAgICAgICAgIHRoaXMuaGFsb0ZpbGwgPSBzdHlsZUpzb25bXCJ0ZXh0LWhhbG8tZmlsbFwiXTtcclxuICAgICAgICAgICAgdGhpcy5oYWxvUmFkaXVzID0gc3R5bGVKc29uW1widGV4dC1oYWxvLXJhZGl1c1wiXTtcclxuICAgICAgICAgICAgdGhpcy5tYXJnaW4gPSBzdHlsZUpzb25bXCJ0ZXh0LW1hcmdpblwiXTtcclxuICAgICAgICAgICAgdGhpcy5tYXNrQ29sb3IgPSBzdHlsZUpzb25bXCJ0ZXh0LW1hc2stY29sb3JcIl07XHJcbiAgICAgICAgICAgIHRoaXMubWFza01hcmdpbiA9IHN0eWxlSnNvbltcInRleHQtbWFzay1tYXJnaW5cIl07XHJcbiAgICAgICAgICAgIHRoaXMubWFza091dGxpbmVDb2xvciA9IHN0eWxlSnNvbltcInRleHQtbWFzay1vdXRsaW5lLWNvbG9yXCJdO1xyXG4gICAgICAgICAgICB0aGlzLm1hc2tPdXRsaW5lV2lkdGggPSBzdHlsZUpzb25bXCJ0ZXh0LW1hc2stb3V0bGluZS13aWR0aFwiXTtcclxuICAgICAgICAgICAgdGhpcy5tYXNrVHlwZSA9IHN0eWxlSnNvbltcInRleHQtbWFzay10eXBlXCJdO1xyXG4gICAgICAgICAgICB0aGlzLm1heENoYXJBbmdsZSA9IHN0eWxlSnNvbltcInRleHQtbWF4LWNoYXItYW5nbGVcIl07XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1pbkRpc3RhbmNlID0gc3R5bGVKc29uW1widGV4dC1taW4tZGlzdGFuY2VcIl07XHJcbiAgICAgICAgICAgIHRoaXMubWluUGFkZGluZyA9IHN0eWxlSnNvbltcInRleHQtbWluLXBhZGRpbmdcIl07XHJcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IHN0eWxlSnNvbltcInRleHQtbmFtZVwiXTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMub3BhY2l0eSA9IHN0eWxlSnNvbltcInRleHQtb3BhY2l0eVwiXTtcclxuICAgICAgICAgICAgdGhpcy5yb3RhdGVBbmdsZSA9IHN0eWxlSnNvbltcInRleHQtcm90YXRlLWFuZ2xlXCJdO1xyXG4gICAgICAgICAgICB0aGlzLnBsYWNlbWVudHMgPSBzdHlsZUpzb25bXCJ0ZXh0LXBsYWNlbWVudHNcIl0gPyBzdHlsZUpzb25bXCJ0ZXh0LXBsYWNlbWVudHNcIl0gOiBcIlUsQixMLFJcIjtcclxuICAgICAgICAgICAgdGhpcy5wbGFjZW1lbnRUeXBlID0gc3R5bGVKc29uW1widGV4dC1wbGFjZW1lbnQtdHlwZVwiXSA/IHN0eWxlSnNvbltcInRleHQtcGxhY2VtZW50LXR5cGVcIl0gOiBcImRlZmF1bHRcIjtcclxuXHJcbiAgICAgICAgICAgIC8vIFRPRE9cclxuICAgICAgICAgICAgdGhpcy5wb2x5Z29uTGFiZWxpbmdMb2NhdGlvbiA9IHN0eWxlSnNvbltcInRleHQtcG9seWdvbi1sYWJlbGluZy1sb2NhdGlvblwiXTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3BhY2luZyA9IHN0eWxlSnNvbltcInRleHQtc3BhY2luZ1wiXSAhPT0gdW5kZWZpbmVkID8gc3R5bGVKc29uW1widGV4dC1zcGFjaW5nXCJdIDogNTA7XHJcblxyXG4gICAgICAgICAgICAvLyBUT0RPXHJcbiAgICAgICAgICAgIHRoaXMuc3BsaW5lVHlwZSA9IHN0eWxlSnNvbltcInRleHQtc3BsaW5lLXR5cGVcIl07XHJcblxyXG5cclxuICAgICAgICAgICAgdGhpcy53cmFwQmVmb3JlID0gc3R5bGVKc29uW1widGV4dC13cmFwLWJlZm9yZVwiXSA/IHRydWUgOiBzdHlsZUpzb25bXCJ0ZXh0LXdyYXAtYmVmb3JlXCJdO1xyXG4gICAgICAgICAgICB0aGlzLndyYXBXaWR0aCA9IHN0eWxlSnNvbltcInRleHQtd3JhcC13aWR0aFwiXTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudGV4dEZvcm1hdCA9IHN0eWxlSnNvbltcInRleHQtdGV4dC1mb3JtYXRcIl07XHJcbiAgICAgICAgICAgIHRoaXMuZGF0ZUZvcm1hdCA9IHN0eWxlSnNvbltcInRleHQtZGF0ZS1mb3JtYXRcIl07XHJcbiAgICAgICAgICAgIHRoaXMubnVtZXJpY0Zvcm1hdCA9IHN0eWxlSnNvbltcInRleHQtbnVtZXJpYy1mb3JtYXRcIl07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluaXRpYWxpemVDb3JlKCkgeyB9XHJcblxyXG4gICAgZ2V0Q29udmVydGVkU3R5bGVDb3JlKGZlYXR1cmU6IGFueSwgcmVzb2x1dGlvbjogbnVtYmVyLCBvcHRpb25zOiBhbnkpOiBvbC5zdHlsZS5TdHlsZVtdIHtcclxuICAgICAgICBsZXQgdGV4dFN0eWxlcyA9IFtdO1xyXG5cclxuICAgICAgICBsZXQgZm9udDtcclxuICAgICAgICBsZXQgZmlsbCA9IG5ldyBvbC5zdHlsZS5GaWxsKCk7XHJcbiAgICAgICAgbGV0IHN0cm9rZSA9IG5ldyBvbC5zdHlsZS5TdHJva2UoKTtcclxuICAgICAgICBsZXQgdGV4dFN0eWxlID0gbmV3IG9sLnN0eWxlLlRleHQoe1xyXG4gICAgICAgICAgICBmaWxsOiBmaWxsLFxyXG4gICAgICAgICAgICBzdHJva2U6IHN0cm9rZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBHZW9UZXh0U3R5bGUuc3R5bGUuc2V0VGV4dCh0ZXh0U3R5bGUpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy50ZXh0QWxpZ25zLmluZGV4T2YodGhpcy5hbGlnbikgPj0gMCkge1xyXG4gICAgICAgICAgICB0ZXh0U3R5bGUuc2V0VGV4dEFsaWduKHRoaXMuYWxpZ24pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZHgpIHtcclxuICAgICAgICAgICAgdGV4dFN0eWxlLnNldE9mZnNldFgodGhpcy5keCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5keSkge1xyXG4gICAgICAgICAgICB0ZXh0U3R5bGUuc2V0T2Zmc2V0WSh0aGlzLmR5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmZvbnQpIHtcclxuICAgICAgICAgICAgZm9udCA9IHRoaXMuZm9udDtcclxuICAgICAgICAgICAgdGV4dFN0eWxlLnNldEZvbnQoZm9udCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5maWxsKSB7XHJcbiAgICAgICAgICAgIGZpbGwuc2V0Q29sb3IoR2VvU3R5bGUudG9SR0JBQ29sb3IodGhpcy5maWxsLCB0aGlzLm9wYWNpdHkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaGFsb0ZpbGwpIHtcclxuICAgICAgICAgICAgc3Ryb2tlLnNldENvbG9yKEdlb1N0eWxlLnRvUkdCQUNvbG9yKHRoaXMuaGFsb0ZpbGwsIHRoaXMub3BhY2l0eSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5oYWxvUmFkaXVzKSB7XHJcbiAgICAgICAgICAgIHN0cm9rZS5zZXRXaWR0aCh0aGlzLmhhbG9SYWRpdXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5oYWxvRmlsbCA9PT0gdW5kZWZpbmVkICYmIHRoaXMuaGFsb1JhZGl1cyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRleHRTdHlsZS5zZXRTdHJva2UodW5kZWZpbmVkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnJvdGF0ZUFuZ2xlKSB7XHJcbiAgICAgICAgICAgIHRleHRTdHlsZS5zZXRSb3RhdGlvbih0aGlzLnJvdGF0ZUFuZ2xlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF4Q2hhckFuZ2xlKSB7XHJcbiAgICAgICAgICAgICg8YW55PnRleHRTdHlsZSkuc2V0TWF4QW5nbGUodGhpcy5tYXhDaGFyQW5nbGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGZlYXR1cmVUZXh0ID0gXCJcIjtcclxuICAgICAgICBpZiAodGhpcy5uYW1lKSB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMgaXMgdGhlIGNvbHVtbiBuYW1lLCB3ZSBnZXQgdGhlIHZhbHVlIGZvciB0aGUgZmVhdHVyZVxyXG4gICAgICAgICAgICBmZWF0dXJlVGV4dCA9IGZlYXR1cmUuZ2V0KHRoaXMubmFtZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5udW1lcmljRm9ybWF0KSB7XHJcbiAgICAgICAgICAgIGZlYXR1cmVUZXh0ID0gdGhpcy5nZXRUZXh0V2l0aE51bWVyaWNGb3JtYXQoZmVhdHVyZVRleHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5kYXRlRm9ybWF0KSB7XHJcbiAgICAgICAgICAgIGZlYXR1cmVUZXh0ID0gdGhpcy5nZXRUZXh0V2l0aERhdGVGb3JtYXQoZmVhdHVyZVRleHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy50ZXh0Rm9ybWF0KSB7XHJcbiAgICAgICAgICAgIGZlYXR1cmVUZXh0ID0gdGhpcy5nZXRUZXh0V2l0aEZvcm1hdChmZWF0dXJlVGV4dCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0ZXh0U3R5bGUuc2V0VGV4dChmZWF0dXJlVGV4dCk7XHJcbiAgICAgICAgdGhpcy5zZXRMYWJlbFBvc2l0aW9uKGZlYXR1cmUsIHJlc29sdXRpb24sIEdlb1RleHRTdHlsZS5zdHlsZSwgb3B0aW9ucy5ncmlkLCBvcHRpb25zLmZyYW1lU3RhdGUpO1xyXG4gICAgICAgIHRleHRTdHlsZXMucHVzaChHZW9UZXh0U3R5bGUuc3R5bGUpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGV4dFN0eWxlcztcclxuICAgIH1cclxuXHJcbiAgICBzZXRMYWJlbFBvc2l0aW9uKGdlb21ldHJ5OiBhbnksIHJlc29sdXRpb246IGFueSwgc3R5bGU6IG9sLnN0eWxlLlN0eWxlLCBncmlkOiBhbnksIGZyYW1lU3RhdGU6IG9seC5GcmFtZVN0YXRlKSB7XHJcblxyXG4gICAgICAgIGxldCB0ZXh0U3RhdGUgPSBzdHlsZS5nZXRUZXh0KCk7XHJcbiAgICAgICAgbGV0IHRleHQgPSB0ZXh0U3RhdGUuZ2V0VGV4dCgpO1xyXG4gICAgICAgIGlmICh0ZXh0ID09PSB1bmRlZmluZWQgfHwgdGV4dCA9PT0gXCJcIikgeyByZXR1cm47IH1cclxuXHJcbiAgICAgICAgbGV0IGxhYmVsSW5mbyA9IHRoaXMubGFiZWxJbmZvc1t0ZXh0XTtcclxuICAgICAgICBpZiAoIWxhYmVsSW5mbykge1xyXG4gICAgICAgICAgICBsYWJlbEluZm8gPSB0aGlzLmdldExhYmVsSW5mbyh0ZXh0LCB0ZXh0U3RhdGUpO1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsSW5mb3NbdGV4dF0gPSBsYWJlbEluZm87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgZ2VvbWV0cnlUeXBlID0gZ2VvbWV0cnkuZ2V0VHlwZSgpO1xyXG4gICAgICAgIGxldCBmbGF0Q29vcmRpbmF0ZXMgPSBudWxsO1xyXG5cclxuICAgICAgICBpZiAoKGdlb21ldHJ5VHlwZSA9PT0gKDxhbnk+b2wuZ2VvbSkuR2VvbWV0cnlUeXBlLkxJTkVfU1RSSU5HIHx8IGdlb21ldHJ5VHlwZSA9PT0gKDxhbnk+b2wuZ2VvbSkuR2VvbWV0cnlUeXBlLk1VTFRJX0xJTkVfU1RSSU5HKSAmJiAhdGhpcy5mb3JjZUhvcml6b250YWxGb3JMaW5lKSB7XHJcbiAgICAgICAgICAgIGxldCBnZW9tZXRyeVR5cGUgPSBnZW9tZXRyeS5nZXRUeXBlKCk7XHJcbiAgICAgICAgICAgIGZsYXRDb29yZGluYXRlcyA9IGdlb21ldHJ5LmdldEZsYXRDb29yZGluYXRlcygpO1xyXG4gICAgICAgICAgICBpZiAoZmxhdENvb3JkaW5hdGVzID09PSB1bmRlZmluZWQpIHsgcmV0dXJuOyB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGxhYmVsV2lkdGggPSBsYWJlbEluZm8ubGFiZWxXaWR0aDtcclxuICAgICAgICAgICAgbGV0IGxhYmVsSGVpZ2h0ID0gbGFiZWxJbmZvLmxhYmVsSGVpZ2h0O1xyXG4gICAgICAgICAgICBsZXQgc2NhbGUgPSBsYWJlbEluZm8uc2NhbGU7XHJcbiAgICAgICAgICAgIGxldCBmb250ID0gbGFiZWxJbmZvLmZvbnQ7XHJcbiAgICAgICAgICAgIGxldCBzdHJva2VXaWR0aCA9IGxhYmVsSW5mby5zdHJva2VXaWR0aDtcclxuICAgICAgICAgICAgbGV0IG51bUxpbmVzID0gbGFiZWxJbmZvLm51bUxpbmVzO1xyXG4gICAgICAgICAgICBsZXQgbGluZXMgPSBsYWJlbEluZm8ubGluZXM7XHJcbiAgICAgICAgICAgIGxldCBsaW5lSGVpZ2h0ID0gbGFiZWxJbmZvLmxpbmVIZWlnaHQ7XHJcbiAgICAgICAgICAgIGxldCByZW5kZXJXaWR0aCA9IGxhYmVsSW5mby5yZW5kZXJXaWR0aDtcclxuICAgICAgICAgICAgbGV0IGhlaWdodCA9IGxhYmVsSW5mby5oZWlnaHQ7XHJcbiAgICAgICAgICAgIGxldCB3aWR0aHMgPSBsYWJlbEluZm8ud2lkdGhzO1xyXG5cclxuICAgICAgICAgICAgbGV0IENvbnN0cnVjdG9yOiBhbnk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBsYWNlbWVudFR5cGUgPT09IFwiZGVmYXVsdFwiKSB7XHJcbiAgICAgICAgICAgICAgICBDb25zdHJ1Y3RvciA9IHRoaXMuQkFUQ0hfQ09OU1RSVUNUT1JTX0RFRkFVTFRbZ2VvbWV0cnlUeXBlXTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBsYWNlbWVudFR5cGUgPT09IFwiZGV0ZWN0XCIpIHtcclxuICAgICAgICAgICAgICAgIENvbnN0cnVjdG9yID0gdGhpcy5CQVRDSF9DT05TVFJVQ1RPUlNfREVURUNUW2dlb21ldHJ5VHlwZV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHRleHRMYWJlbGluZ1N0cmF0ZWd5ID0gbmV3IENvbnN0cnVjdG9yKCk7XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKGdlb21ldHJ5VHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAoPGFueT5vbC5nZW9tKS5HZW9tZXRyeVR5cGUuUE9JTlQ6XHJcbiAgICAgICAgICAgICAgICAgICAgZmxhdENvb3JkaW5hdGVzID0gZ2VvbWV0cnkuZ2V0RmxhdENvb3JkaW5hdGVzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxhdENvb3JkaW5hdGVzID0gdGV4dExhYmVsaW5nU3RyYXRlZ3kubWFya0xvY2F0aW9uKGZsYXRDb29yZGluYXRlcywgbGFiZWxXaWR0aCwgbGFiZWxIZWlnaHQsIHJlc29sdXRpb24sIGdlb21ldHJ5VHlwZSwgdGhpcywgZ3JpZCwgZnJhbWVTdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICg8YW55Pm9sLmdlb20pLkdlb21ldHJ5VHlwZS5NVUxUSV9QT0lOVDpcclxuICAgICAgICAgICAgICAgICAgICBmbGF0Q29vcmRpbmF0ZXMgPSBnZW9tZXRyeS5nZXRDZW50ZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICBmbGF0Q29vcmRpbmF0ZXMgPSB0ZXh0TGFiZWxpbmdTdHJhdGVneS5tYXJrTG9jYXRpb24oZmxhdENvb3JkaW5hdGVzLCBsYWJlbFdpZHRoLCBsYWJlbEhlaWdodCwgcmVzb2x1dGlvbiwgZ2VvbWV0cnlUeXBlLCB0aGlzLCBncmlkLCBmcmFtZVN0YXRlKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgKDxhbnk+b2wuZ2VvbSkuR2VvbWV0cnlUeXBlLkxJTkVfU1RSSU5HOlxyXG4gICAgICAgICAgICAgICAgICAgIGZsYXRDb29yZGluYXRlcyA9IC8qKiBAdHlwZSB7b2wuZ2VvbS5MaW5lU3RyaW5nfSAqLyAoZ2VvbWV0cnkpLmdldEZsYXRNaWRwb2ludCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZsYXRDb29yZGluYXRlcyA9IHRleHRMYWJlbGluZ1N0cmF0ZWd5Lm1hcmtMb2NhdGlvbihmbGF0Q29vcmRpbmF0ZXMsIGxhYmVsV2lkdGgsIGxhYmVsSGVpZ2h0LCByZXNvbHV0aW9uLCBnZW9tZXRyeVR5cGUsIHRoaXMsIGdyaWQsIGZyYW1lU3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAoPGFueT5vbC5nZW9tKS5HZW9tZXRyeVR5cGUuQ0lSQ0xFOlxyXG4gICAgICAgICAgICAgICAgICAgIGZsYXRDb29yZGluYXRlcyA9IC8qKiBAdHlwZSB7b2wuZ2VvbS5DaXJjbGV9ICovIChnZW9tZXRyeSkuZ2V0Q2VudGVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxhdENvb3JkaW5hdGVzID0gdGV4dExhYmVsaW5nU3RyYXRlZ3kubWFya0xvY2F0aW9uKGZsYXRDb29yZGluYXRlcywgbGFiZWxXaWR0aCwgbGFiZWxIZWlnaHQsIHJlc29sdXRpb24sIGdlb21ldHJ5VHlwZSwgdGhpcywgZ3JpZCwgZnJhbWVTdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICg8YW55Pm9sLmdlb20pLkdlb21ldHJ5VHlwZS5NVUxUSV9MSU5FX1NUUklORzpcclxuICAgICAgICAgICAgICAgICAgICBmbGF0Q29vcmRpbmF0ZXMgPSAvKiogQHR5cGUge29sLmdlb20uTXVsdGlMaW5lU3RyaW5nfSAqLyAoZ2VvbWV0cnkpLmdldEZsYXRNaWRwb2ludHMoKTtcclxuICAgICAgICAgICAgICAgICAgICBmbGF0Q29vcmRpbmF0ZXMgPSB0ZXh0TGFiZWxpbmdTdHJhdGVneS5tYXJrTG9jYXRpb24oZmxhdENvb3JkaW5hdGVzLCBsYWJlbFdpZHRoLCBsYWJlbEhlaWdodCwgcmVzb2x1dGlvbiwgZ2VvbWV0cnlUeXBlLCB0aGlzLCBncmlkLCBmcmFtZVN0YXRlKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgKDxhbnk+b2wuZ2VvbSkuR2VvbWV0cnlUeXBlLlBPTFlHT046XHJcbiAgICAgICAgICAgICAgICAgICAgZmxhdENvb3JkaW5hdGVzID0gLyoqIEB0eXBlIHtvbC5nZW9tLlBvbHlnb259ICovIChnZW9tZXRyeSkuZ2V0RmxhdEludGVyaW9yUG9pbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBmbGF0Q29vcmRpbmF0ZXMgPSB0ZXh0TGFiZWxpbmdTdHJhdGVneS5tYXJrTG9jYXRpb24oZmxhdENvb3JkaW5hdGVzLCBsYWJlbFdpZHRoLCBsYWJlbEhlaWdodCwgcmVzb2x1dGlvbiwgZ2VvbWV0cnlUeXBlLCB0aGlzLCBncmlkLCBmcmFtZVN0YXRlKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgKDxhbnk+b2wuZ2VvbSkuR2VvbWV0cnlUeXBlLk1VTFRJX1BPTFlHT046XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGludGVyaW9yUG9pbnRzID0gLyoqIEB0eXBlIHtvbC5nZW9tLk11bHRpUG9seWdvbn0gKi8gKGdlb21ldHJ5KS5nZXRGbGF0TWlkcG9pbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBmbGF0Q29vcmRpbmF0ZXMgPSB0ZXh0TGFiZWxpbmdTdHJhdGVneS5tYXJrTG9jYXRpb24oZmxhdENvb3JkaW5hdGVzLCBsYWJlbFdpZHRoLCBsYWJlbEhlaWdodCwgcmVzb2x1dGlvbiwgZ2VvbWV0cnlUeXBlLCB0aGlzLCBncmlkLCBmcmFtZVN0YXRlKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChmbGF0Q29vcmRpbmF0ZXMgPT09IHVuZGVmaW5lZCkgeyByZXR1cm47IH1cclxuXHJcbiAgICAgICAgICAgIGxldCBsYWJlbEltYWdlID0gdGhpcy5pbWFnZUNhY2hlW3RleHRdO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFsYWJlbEltYWdlKSB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbEltYWdlID0gdGhpcy5nZXRJbWFnZSh0ZXh0U3RhdGUsIGxhYmVsV2lkdGgsIGxhYmVsSGVpZ2h0LCBzY2FsZSwgZm9udCwgc3Ryb2tlV2lkdGgsIG51bUxpbmVzLCBsaW5lcywgbGluZUhlaWdodCwgcmVuZGVyV2lkdGgsIGhlaWdodCwgd2lkdGhzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VDYWNoZVt0ZXh0XSA9IGxhYmVsSW1hZ2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChsYWJlbEltYWdlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgKDxhbnk+dGV4dFN0YXRlKS5sYWJlbCA9IGxhYmVsSW1hZ2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAoPGFueT50ZXh0U3RhdGUpLmxhYmVsUG9zaXRpb24gPSBmbGF0Q29vcmRpbmF0ZXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TGFiZWxJbmZvKHRleHQ6IHN0cmluZywgdGV4dFN0YXRlOiBvbC5zdHlsZS5UZXh0KSB7XHJcbiAgICAgICAgbGV0IGZvbnQgPSB0ZXh0U3RhdGUuZ2V0Rm9udCgpO1xyXG4gICAgICAgIHRleHQgPSB0aGlzLndyYXBUZXh0KHRleHQsIGZvbnQpO1xyXG5cclxuICAgICAgICBsZXQgc3Ryb2tlU3RhdGUgPSB0ZXh0U3RhdGUuZ2V0U3Ryb2tlKCk7XHJcbiAgICAgICAgbGV0IHN0cm9rZVdpZHRoID0gc3Ryb2tlU3RhdGUgJiYgc3Ryb2tlU3RhdGUuZ2V0V2lkdGgoKSA/IHN0cm9rZVN0YXRlLmdldFdpZHRoKCkgOiAwO1xyXG4gICAgICAgIGxldCBsaW5lcyA9IHRleHQuc3BsaXQoXCJcXG5cIik7XHJcbiAgICAgICAgbGV0IG51bUxpbmVzID0gbGluZXMubGVuZ3RoO1xyXG4gICAgICAgIGxldCB0ZXh0U2NhbGUgPSB0ZXh0U3RhdGUuZ2V0U2NhbGUoKTtcclxuICAgICAgICB0ZXh0U2NhbGUgPSB0ZXh0U2NhbGUgPT09IHVuZGVmaW5lZCA/IDEgOiB0ZXh0U2NhbGU7XHJcbiAgICAgICAgbGV0IHNjYWxlID0gdGV4dFNjYWxlICogd2luZG93LmRldmljZVBpeGVsUmF0aW87XHJcbiAgICAgICAgbGV0IHdpZHRocyA9IFtdO1xyXG4gICAgICAgIGxldCB3aWR0aCA9ICg8YW55Pm9sLnJlbmRlci5jYW52YXMpLlRleHRSZXBsYXkubWVhc3VyZVRleHRXaWR0aHMoZm9udCwgbGluZXMsIHdpZHRocyk7XHJcbiAgICAgICAgbGV0IGxpbmVIZWlnaHQgPSAoPGFueT5vbC5yZW5kZXIuY2FudmFzKS5tZWFzdXJlVGV4dEhlaWdodChmb250KTtcclxuICAgICAgICBsZXQgaGVpZ2h0ID0gbGluZUhlaWdodCAqIG51bUxpbmVzICsgKHRoaXMubWFza01hcmdpbiA/IHRoaXMubWFza01hcmdpbiA6IDApICogMiArICh0aGlzLm1hc2tPdXRsaW5lV2lkdGggPyB0aGlzLm1hc2tPdXRsaW5lV2lkdGggOiAwKTtcclxuICAgICAgICBsZXQgcmVuZGVyV2lkdGggPSB3aWR0aCArIHN0cm9rZVdpZHRoICsgKHRoaXMubWFza01hcmdpbiA/IHRoaXMubWFza01hcmdpbiA6IDApICogMiArICh0aGlzLm1hc2tPdXRsaW5lV2lkdGggPyB0aGlzLm1hc2tPdXRsaW5lV2lkdGggOiAwKTtcclxuICAgICAgICBsZXQgbGFiZWxXaWR0aCA9IE1hdGguY2VpbChyZW5kZXJXaWR0aCAqIDEuMiAqIHNjYWxlKTtcclxuICAgICAgICBsZXQgbGFiZWxIZWlnaHQgPSBNYXRoLmNlaWwoKGhlaWdodCAqIDEuMiArIHN0cm9rZVdpZHRoKSAqIHNjYWxlKTtcclxuXHJcbiAgICAgICAgbGV0IGxhYmVsSW5mbyA9IHtcclxuICAgICAgICAgICAgbGFiZWxXaWR0aDogbGFiZWxXaWR0aCxcclxuICAgICAgICAgICAgbGFiZWxIZWlnaHQ6IGxhYmVsSGVpZ2h0LFxyXG4gICAgICAgICAgICBzY2FsZTogc2NhbGUsXHJcbiAgICAgICAgICAgIGZvbnQ6IGZvbnQsXHJcbiAgICAgICAgICAgIHN0cm9rZVdpZHRoOiBzdHJva2VXaWR0aCxcclxuICAgICAgICAgICAgbnVtTGluZXM6IG51bUxpbmVzLFxyXG4gICAgICAgICAgICBsaW5lczogbGluZXMsXHJcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6IGxpbmVIZWlnaHQsXHJcbiAgICAgICAgICAgIHJlbmRlcldpZHRoOiByZW5kZXJXaWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXHJcbiAgICAgICAgICAgIHdpZHRoczogd2lkdGhzXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGxhYmVsSW5mbztcclxuICAgIH1cclxuXHJcbiAgICBnZXRJbWFnZSh0ZXh0U3RhdGU6IG9sLnN0eWxlLlRleHQsIGxhYmVsV2lkdGg6IG51bWJlciwgbGFiZWxIZWlnaHQ6IG51bWJlciwgc2NhbGU6IG51bWJlciwgZm9udDogc3RyaW5nLCBzdHJva2VXaWR0aDogbnVtYmVyLCBudW1MaW5lczogYW55LCBsaW5lczogYW55LCBsaW5lSGVpZ2h0OiBudW1iZXIsIHJlbmRlcldpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCB3aWR0aHM6IGFueSkge1xyXG4gICAgICAgIGxldCBmaWxsU3RhdGUgPSB0ZXh0U3RhdGUuZ2V0RmlsbCgpO1xyXG4gICAgICAgIGxldCBzdHJva2VTdGF0ZSA9IHRleHRTdGF0ZS5nZXRTdHJva2UoKTtcclxuICAgICAgICBsZXQgbGFiZWw7XHJcblxyXG4gICAgICAgIGxldCBhbGlnbiA9ICg8YW55Pm9sLnJlbmRlcikucmVwbGF5LlRFWFRfQUxJR05bdGV4dFN0YXRlLmdldFRleHRBbGlnbigpIHx8ICg8YW55Pm9sLnJlbmRlci5jYW52YXMpLmRlZmF1bHRUZXh0QWxpZ25dO1xyXG5cclxuICAgICAgICBsZXQgY29udGV4dCA9ICg8YW55Pm9sKS5kb20uY3JlYXRlQ2FudmFzQ29udGV4dDJEKGxhYmVsV2lkdGgsIGxhYmVsSGVpZ2h0KTtcclxuICAgICAgICBsYWJlbCA9IGNvbnRleHQuY2FudmFzO1xyXG4gICAgICAgIGlmIChzY2FsZSAhPT0gMSkgeyBjb250ZXh0LnNjYWxlKHNjYWxlLCBzY2FsZSk7IH1cclxuICAgICAgICBjb250ZXh0LmZvbnQgPSBmb250O1xyXG4gICAgICAgIGlmIChzdHJva2VTdGF0ZSkge1xyXG4gICAgICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gc3Ryb2tlU3RhdGUuZ2V0Q29sb3IoKTtcclxuICAgICAgICAgICAgY29udGV4dC5saW5lV2lkdGggPSBzdHJva2VXaWR0aCAqICgoPGFueT5vbC5oYXMpLlNBRkFSSSA/IHNjYWxlIDogMSk7XHJcbiAgICAgICAgICAgIGNvbnRleHQubGluZUNhcCA9IHN0cm9rZVN0YXRlLmdldExpbmVDYXAoKTtcclxuICAgICAgICAgICAgY29udGV4dC5saW5lSm9pbiA9IHN0cm9rZVN0YXRlLmdldExpbmVKb2luKCk7XHJcbiAgICAgICAgICAgIGNvbnRleHQubWl0ZXJMaW1pdCA9IHN0cm9rZVN0YXRlLmdldE1pdGVyTGltaXQoKTtcclxuICAgICAgICAgICAgbGV0IGxpbmVEYXNoID0gc3Ryb2tlU3RhdGUuZ2V0TGluZURhc2goKTtcclxuICAgICAgICAgICAgbGluZURhc2ggPSBsaW5lRGFzaCA/IGxpbmVEYXNoLnNsaWNlKCkgOiAoPGFueT5vbC5yZW5kZXIuY2FudmFzKS5kZWZhdWx0TGluZURhc2g7XHJcbiAgICAgICAgICAgIGlmICgoPGFueT5vbC5oYXMpLkNBTlZBU19MSU5FX0RBU0ggJiYgbGluZURhc2gubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZXh0LnNldExpbmVEYXNoKHN0cm9rZVN0YXRlLmdldExpbmVEYXNoKCkpO1xyXG4gICAgICAgICAgICAgICAgY29udGV4dC5saW5lRGFzaE9mZnNldCA9ICg8YW55PnN0cm9rZVN0YXRlKS5nZXRMaW5lRGFzaE9mZnNldCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRyYXdNYXNrKGNvbnRleHQsIDAsIDAsIHJlbmRlcldpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgICAgICBjb250ZXh0LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XHJcbiAgICAgICAgY29udGV4dC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xyXG4gICAgICAgIGxldCBsZWZ0UmlnaHQgPSAwLjUgLSBhbGlnbjtcclxuICAgICAgICBsZXQgeCA9IGFsaWduICogbGFiZWwud2lkdGggLyBzY2FsZSArIGxlZnRSaWdodCAqIHN0cm9rZVdpZHRoO1xyXG4gICAgICAgIGxldCBpO1xyXG4gICAgICAgIGlmIChzdHJva2VTdGF0ZS5nZXRDb2xvcigpICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBzdHJva2VTdGF0ZS5nZXRDb2xvcigpO1xyXG4gICAgICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IHRoaXMuaGFsb1JhZGl1cyA/IHRoaXMuaGFsb1JhZGl1cyA6IDA7XHJcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBudW1MaW5lczsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZXh0LnN0cm9rZVRleHQobGluZXNbaV0sIHggKyBsZWZ0UmlnaHQgKiB3aWR0aHNbaV0gKiAxLjIgLSAodGhpcy5tYXNrTWFyZ2luID8gdGhpcy5tYXNrTWFyZ2luIDogMCksIDAuNSAqIChzdHJva2VXaWR0aCArIGxpbmVIZWlnaHQpICsgaSAqIGxpbmVIZWlnaHQgKiAxLjIgKyAodGhpcy5tYXNrTWFyZ2luID8gdGhpcy5tYXNrTWFyZ2luIDogMCkgKyAodGhpcy5tYXNrT3V0bGluZVdpZHRoID8gdGhpcy5tYXNrT3V0bGluZVdpZHRoIDogMCkgKiAwLjgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChmaWxsU3RhdGUuZ2V0Q29sb3IoKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGZpbGxTdGF0ZS5nZXRDb2xvcigpO1xyXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbnVtTGluZXM7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgY29udGV4dC5maWxsVGV4dChsaW5lc1tpXSwgeCArIGxlZnRSaWdodCAqIHdpZHRoc1tpXSAqIDEuMiAtICh0aGlzLm1hc2tNYXJnaW4gPyB0aGlzLm1hc2tNYXJnaW4gOiAwKSwgMC41ICogKHN0cm9rZVdpZHRoICsgbGluZUhlaWdodCkgKyBpICogbGluZUhlaWdodCAqIDEuMiArICh0aGlzLm1hc2tNYXJnaW4gPyB0aGlzLm1hc2tNYXJnaW4gOiAwKSArICh0aGlzLm1hc2tPdXRsaW5lV2lkdGggPyB0aGlzLm1hc2tPdXRsaW5lV2lkdGggOiAwKSAqIDAuOCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGxhYmVsO1xyXG4gICAgfVxyXG5cclxuICAgIHdyYXBUZXh0KHRleHQ6IHN0cmluZywgZm9udDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgcmVzdWx0VGV4dDogc3RyaW5nO1xyXG5cclxuICAgICAgICBpZiAodGV4dCAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICBsZXQgbGluZXMgPSBbdGV4dF07XHJcbiAgICAgICAgICAgIGxldCB3aWR0aHMgPSBbXTtcclxuICAgICAgICAgICAgbGV0IHdpZHRoID0gKDxhbnk+b2wucmVuZGVyLmNhbnZhcykuVGV4dFJlcGxheS5tZWFzdXJlVGV4dFdpZHRocyhmb250LCBsaW5lcywgd2lkdGhzKTtcclxuXHJcbiAgICAgICAgICAgIGxldCB3cmFwV2lkdGggPSB0aGlzLndyYXBXaWR0aDtcclxuICAgICAgICAgICAgbGV0IHdyYXBDaGFyYWN0ZXIgPSBcIiBcIjtcclxuICAgICAgICAgICAgbGV0IGlzV3JhcEJlZm9yZSA9IHRoaXMud3JhcEJlZm9yZTtcclxuXHJcbiAgICAgICAgICAgIGlmICh3cmFwV2lkdGggPiAwICYmIHdpZHRoID4gd3JhcFdpZHRoICYmIHRleHQuaW5jbHVkZXMod3JhcENoYXJhY3RlcikpIHtcclxuICAgICAgICAgICAgICAgIGxldCB0ZXh0TGluZXMgPSBbXTtcclxuICAgICAgICAgICAgICAgIGxpbmVzID0gdGV4dC5zcGxpdCh3cmFwQ2hhcmFjdGVyKTtcclxuICAgICAgICAgICAgICAgIGxldCB3cmFwTGluZXMgPSBbXTtcclxuICAgICAgICAgICAgICAgIGxldCB3cmFwV2lkdGhTdW0gPSAwO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRtcFdyYXBXaWR0aDogbnVtYmVyO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpc1dyYXBCZWZvcmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBsaW5lIG9mIGxpbmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0bXBMaW5lID0gW2xpbmVdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0bXBXcmFwV2lkdGggPSAoPGFueT5vbC5yZW5kZXIuY2FudmFzKS5UZXh0UmVwbGF5Lm1lYXN1cmVUZXh0V2lkdGhzKGZvbnQsIHRtcExpbmUsIHdpZHRocyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBXaWR0aFN1bSArPSB0bXBXcmFwV2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0bXBXcmFwV2lkdGggPiB3cmFwV2lkdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBMaW5lcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dExpbmVzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cmFwV2lkdGhTdW0gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3cmFwTGluZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdyYXBXaWR0aFN1bSA+IHdyYXBXaWR0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBMaW5lcy5wdXNoKFwiXFxuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRMaW5lcy5wdXNoKHdyYXBMaW5lcy5qb2luKFwiXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cmFwTGluZXMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cmFwV2lkdGhTdW0gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3cmFwTGluZXMucHVzaChcIiBcIiArIGxpbmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdyYXBMaW5lcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRMaW5lcy5wdXNoKHdyYXBMaW5lcy5qb2luKFwiXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGxpbmUgb2YgbGluZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3JhcExpbmVzLnB1c2goXCIgXCIgKyBsaW5lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRtcExpbmUgPSBbbGluZV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRtcFdyYXBXaWR0aCA9ICg8YW55Pm9sLnJlbmRlci5jYW52YXMpLlRleHRSZXBsYXkubWVhc3VyZVRleHRXaWR0aHMoZm9udCwgdG1wTGluZSwgd2lkdGhzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3JhcFdpZHRoU3VtICs9IHRtcFdyYXBXaWR0aDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3cmFwV2lkdGhTdW0gPiB3cmFwV2lkdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBMaW5lcy5wdXNoKFwiXFxuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dExpbmVzLnB1c2god3JhcExpbmVzLmpvaW4oXCJcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3JhcExpbmVzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cmFwV2lkdGhTdW0gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAod3JhcExpbmVzLmxlbmd0aCA+IDApIHsgdGV4dExpbmVzLnB1c2god3JhcExpbmVzLmpvaW4oXCJcIikpOyB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzdWx0VGV4dCA9IHRleHRMaW5lcy5qb2luKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdFRleHQubGFzdEluZGV4T2YoXCJcXG5cIikgPT09IHJlc3VsdFRleHQubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFRleHQgPSByZXN1bHRUZXh0LnN1YnN0cigwLCByZXN1bHRUZXh0Lmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0VGV4dCA9IHRleHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHRUZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXdNYXNrKGNvbnRleHQ6IGFueSwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IGZpbGwgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgbGV0IHN0cm9rZSA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubWFza0NvbG9yKSB7XHJcbiAgICAgICAgICAgIGZpbGwgPSBuZXcgb2wuc3R5bGUuRmlsbCgpO1xyXG4gICAgICAgICAgICBmaWxsLnNldENvbG9yKEdlb1N0eWxlLnRvUkdCQUNvbG9yKHRoaXMubWFza0NvbG9yLCB0aGlzLm9wYWNpdHkgPyB0aGlzLm9wYWNpdHkgOiAxKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5tYXNrT3V0bGluZUNvbG9yICYmIHRoaXMubWFza091dGxpbmVXaWR0aCkge1xyXG4gICAgICAgICAgICBzdHJva2UgPSBuZXcgb2wuc3R5bGUuU3Ryb2tlKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1hc2tPdXRsaW5lQ29sb3IpIHtcclxuICAgICAgICAgICAgICAgIHN0cm9rZS5zZXRDb2xvcihHZW9TdHlsZS50b1JHQkFDb2xvcih0aGlzLm1hc2tPdXRsaW5lQ29sb3IsIHRoaXMub3BhY2l0eSA/IHRoaXMub3BhY2l0eSA6IDEpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5tYXNrT3V0bGluZVdpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICBzdHJva2Uuc2V0V2lkdGgodGhpcy5tYXNrT3V0bGluZVdpZHRoID8gdGhpcy5tYXNrT3V0bGluZVdpZHRoIDogMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN3aXRjaCAodGhpcy5tYXNrVHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiZGVmYXVsdFwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiRGVmYXVsdFwiOlxyXG4gICAgICAgICAgICBjYXNlIFwicmVjdGFuZ2xlXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJSZWN0YW5nbGVcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuZHJhd1JlY3RhbmdsZShjb250ZXh0LCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCBmaWxsLCBzdHJva2UpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJyb3VuZGVkQ29ybmVyc1wiOlxyXG4gICAgICAgICAgICBjYXNlIFwiUm91bmRlZENvcm5lcnNcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuZHJhd1JvdW5kUmVjdGFuZ2xlKGNvbnRleHQsIHgsIHksIHdpZHRoLCBoZWlnaHQsIGZpbGwsIHN0cm9rZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInJvdW5kZWRFbmRzXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJSb3VuZGVkRW5kc1wiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3Um91bmRlZEVuZHMoY29udGV4dCwgeCwgeSwgd2lkdGgsIGhlaWdodCwgZmlsbCwgc3Ryb2tlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkcmF3UmVjdGFuZ2xlKGNvbnRleHQ6IGFueSwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBmaWxsOiBvbC5zdHlsZS5GaWxsLCBzdHJva2U6IG9sLnN0eWxlLlN0cm9rZSkge1xyXG4gICAgICAgIGlmIChmaWxsKSB7XHJcbiAgICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gZmlsbC5nZXRDb2xvcigpO1xyXG4gICAgICAgICAgICBjb250ZXh0LmZpbGxSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHN0cm9rZSkge1xyXG4gICAgICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IHN0cm9rZS5nZXRXaWR0aCgpO1xyXG4gICAgICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gc3Ryb2tlO1xyXG4gICAgICAgICAgICBjb250ZXh0LnN0cm9rZVJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRyYXdSb3VuZFJlY3RhbmdsZShjb250ZXh0OiBhbnksIHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgZmlsbDogb2wuc3R5bGUuRmlsbCwgc3Ryb2tlOiBvbC5zdHlsZS5TdHJva2UpIHtcclxuICAgICAgICBsZXQgcmFkaXVzID0gKHdpZHRoIDwgaGVpZ2h0ID8gd2lkdGggOiBoZWlnaHQpICogMC4zO1xyXG4gICAgICAgIHdpZHRoICo9IDAuOTtcclxuICAgICAgICBoZWlnaHQgKj0gMC44O1xyXG4gICAgICAgIGlmIChzdHJva2UpIHtcclxuICAgICAgICAgICAgeCA9IHggKyB3aWR0aCAqIDAuMTtcclxuICAgICAgICAgICAgeSA9IHkgKyAoc3Ryb2tlLmdldFdpZHRoKCkgPyBzdHJva2UuZ2V0V2lkdGgoKSA6IDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgICAgICBjb250ZXh0Lm1vdmVUbyh4ICsgcmFkaXVzLCB5KTtcclxuICAgICAgICBjb250ZXh0LmxpbmVUbyh4ICsgd2lkdGggLSByYWRpdXMsIHkpO1xyXG4gICAgICAgIGNvbnRleHQucXVhZHJhdGljQ3VydmVUbyh4ICsgd2lkdGgsIHksIHggKyB3aWR0aCwgeSArIHJhZGl1cyk7XHJcbiAgICAgICAgY29udGV4dC5saW5lVG8oeCArIHdpZHRoLCB5ICsgaGVpZ2h0IC0gcmFkaXVzKTtcclxuICAgICAgICBjb250ZXh0LnF1YWRyYXRpY0N1cnZlVG8oeCArIHdpZHRoLCB5ICsgaGVpZ2h0LCB4ICsgd2lkdGggLSByYWRpdXMsIHkgKyBoZWlnaHQpO1xyXG4gICAgICAgIGNvbnRleHQubGluZVRvKHggKyByYWRpdXMsIHkgKyBoZWlnaHQpO1xyXG4gICAgICAgIGNvbnRleHQucXVhZHJhdGljQ3VydmVUbyh4LCB5ICsgaGVpZ2h0LCB4LCB5ICsgaGVpZ2h0IC0gcmFkaXVzKTtcclxuICAgICAgICBjb250ZXh0LmxpbmVUbyh4LCB5ICsgcmFkaXVzKTtcclxuICAgICAgICBjb250ZXh0LnF1YWRyYXRpY0N1cnZlVG8oeCwgeSwgeCArIHJhZGl1cywgeSk7XHJcbiAgICAgICAgY29udGV4dC5jbG9zZVBhdGgoKTtcclxuXHJcbiAgICAgICAgaWYgKHN0cm9rZSkge1xyXG4gICAgICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IHN0cm9rZS5nZXRXaWR0aCgpO1xyXG4gICAgICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gc3Ryb2tlLmdldENvbG9yKCk7XHJcbiAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZmlsbCkge1xyXG4gICAgICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGZpbGwuZ2V0Q29sb3IoKTtcclxuICAgICAgICAgICAgY29udGV4dC5maWxsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRyYXdSb3VuZGVkRW5kcyhjb250ZXh0OiBhbnksIHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgZmlsbDogb2wuc3R5bGUuRmlsbCwgc3Ryb2tlOiBvbC5zdHlsZS5TdHJva2UpIHtcclxuICAgICAgICBsZXQgcmFkaXVzMSA9ICh3aWR0aCA8IGhlaWdodCA/IHdpZHRoIDogaGVpZ2h0KSAqIDAuMjtcclxuICAgICAgICBsZXQgcmFkaXVzMiA9ICh3aWR0aCA8IGhlaWdodCA/IHdpZHRoIDogaGVpZ2h0KSAqIDAuNTtcclxuICAgICAgICB3aWR0aCAqPSAwLjk7XHJcbiAgICAgICAgaGVpZ2h0ICo9IDAuODtcclxuICAgICAgICBpZiAoc3Ryb2tlKSB7XHJcbiAgICAgICAgICAgIHggPSB4ICsgd2lkdGggKiAwLjE7XHJcbiAgICAgICAgICAgIHkgPSB5ICsgKHN0cm9rZS5nZXRXaWR0aCgpID8gc3Ryb2tlLmdldFdpZHRoKCkgOiAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgY29udGV4dC5tb3ZlVG8oeCArIHJhZGl1czEsIHkpO1xyXG4gICAgICAgIGNvbnRleHQubGluZVRvKHggKyB3aWR0aCAtIHJhZGl1czEsIHkpO1xyXG4gICAgICAgIGNvbnRleHQucXVhZHJhdGljQ3VydmVUbyh4ICsgd2lkdGgsIHksIHggKyB3aWR0aCwgeSArIHJhZGl1czIpO1xyXG4gICAgICAgIGNvbnRleHQubGluZVRvKHggKyB3aWR0aCwgeSArIGhlaWdodCAtIHJhZGl1czIpO1xyXG4gICAgICAgIGNvbnRleHQucXVhZHJhdGljQ3VydmVUbyh4ICsgd2lkdGgsIHkgKyBoZWlnaHQsIHggKyB3aWR0aCAtIHJhZGl1czEsIHkgKyBoZWlnaHQpO1xyXG4gICAgICAgIGNvbnRleHQubGluZVRvKHggKyByYWRpdXMxLCB5ICsgaGVpZ2h0KTtcclxuICAgICAgICBjb250ZXh0LnF1YWRyYXRpY0N1cnZlVG8oeCwgeSArIGhlaWdodCwgeCwgeSArIGhlaWdodCAtIHJhZGl1czIpO1xyXG4gICAgICAgIGNvbnRleHQubGluZVRvKHgsIHkgKyByYWRpdXMyKTtcclxuICAgICAgICBjb250ZXh0LnF1YWRyYXRpY0N1cnZlVG8oeCwgeSwgeCArIHJhZGl1czEsIHkpO1xyXG4gICAgICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XHJcblxyXG4gICAgICAgIGlmIChzdHJva2UpIHtcclxuICAgICAgICAgICAgY29udGV4dC5saW5lV2lkdGggPSBzdHJva2UuZ2V0V2lkdGgoKTtcclxuICAgICAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IHN0cm9rZS5nZXRDb2xvcigpO1xyXG4gICAgICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGZpbGwpIHtcclxuICAgICAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBmaWxsLmdldENvbG9yKCk7XHJcbiAgICAgICAgICAgIGNvbnRleHQuZmlsbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0VGV4dFdpdGhOdW1lcmljRm9ybWF0KGZlYXR1cmVUZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCB0bXBBcmd1bWVudHMgPSB0aGlzLm51bWVyaWNGb3JtYXQuc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgIGxldCBudW1lcmljRm9ybWF0T3B0aW9ucyA9IHt9O1xyXG4gICAgICAgIGZvciAobGV0IHRtcEFyZ3VtZW50IG9mIHRtcEFyZ3VtZW50cykge1xyXG4gICAgICAgICAgICBsZXQga2V5VmFsdWVQYWlyID0gdG1wQXJndW1lbnQuc3BsaXQoXCI6XCIpO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGtleVZhbHVlUGFpclswXS50cmltKCkpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJsb2NhbGVNYXRjaGVyXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgKDxhbnk+bnVtZXJpY0Zvcm1hdE9wdGlvbnMpLmxvY2FsZU1hdGNoZXIgPSBrZXlWYWx1ZVBhaXJbMV0udHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInN0eWxlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgKDxhbnk+bnVtZXJpY0Zvcm1hdE9wdGlvbnMpLnN0eWxlID0ga2V5VmFsdWVQYWlyWzFdLnRyaW0oKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJjdXJyZW5jeVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICg8YW55Pm51bWVyaWNGb3JtYXRPcHRpb25zKS5jdXJyZW5jeSA9IGtleVZhbHVlUGFpclsxXS50cmltKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiY3VycmVuY3lEaXNwbGF5XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgKDxhbnk+bnVtZXJpY0Zvcm1hdE9wdGlvbnMpLmN1cnJlbmN5RGlzcGxheSA9IGtleVZhbHVlUGFpclsxXS50cmltKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwidXNlR3JvdXBpbmdcIjpcclxuICAgICAgICAgICAgICAgICAgICAoPGFueT5udW1lcmljRm9ybWF0T3B0aW9ucykudXNlR3JvdXBpbmcgPSBrZXlWYWx1ZVBhaXJbMV0udHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIm1pbmltdW1JbnRlZ2VyRGlnaXRzXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgKDxhbnk+bnVtZXJpY0Zvcm1hdE9wdGlvbnMpLm1pbmltdW1JbnRlZ2VyRGlnaXRzID0ga2V5VmFsdWVQYWlyWzFdLnRyaW0oKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJtaW5pbXVtRnJhY3Rpb25EaWdpdHNcIjpcclxuICAgICAgICAgICAgICAgICAgICAoPGFueT5udW1lcmljRm9ybWF0T3B0aW9ucykubWluaW11bUZyYWN0aW9uRGlnaXRzID0ga2V5VmFsdWVQYWlyWzFdLnRyaW0oKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJtYXhpbXVtRnJhY3Rpb25EaWdpdHNcIjpcclxuICAgICAgICAgICAgICAgICAgICAoPGFueT5udW1lcmljRm9ybWF0T3B0aW9ucykubWF4aW11bUZyYWN0aW9uRGlnaXRzID0ga2V5VmFsdWVQYWlyWzFdLnRyaW0oKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJtaW5pbXVtU2lnbmlmaWNhbnREaWdpdHNcIjpcclxuICAgICAgICAgICAgICAgICAgICAoPGFueT5udW1lcmljRm9ybWF0T3B0aW9ucykubWluaW11bVNpZ25pZmljYW50RGlnaXRzID0ga2V5VmFsdWVQYWlyWzFdLnRyaW0oKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJtYXhpbXVtU2lnbmlmaWNhbnREaWdpdHNcIjpcclxuICAgICAgICAgICAgICAgICAgICAoPGFueT5udW1lcmljRm9ybWF0T3B0aW9ucykubWF4aW11bVNpZ25pZmljYW50RGlnaXRzID0ga2V5VmFsdWVQYWlyWzFdLnRyaW0oKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbnVtZXJpYyA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCh0bXBBcmd1bWVudHNbMF0sIG51bWVyaWNGb3JtYXRPcHRpb25zKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG51bWVyaWMuZm9ybWF0KE51bWJlcihmZWF0dXJlVGV4dCkpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldFRleHRXaXRoRGF0ZUZvcm1hdChmZWF0dXJlVGV4dDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gKDxhbnk+KG5ldyBEYXRlKGZlYXR1cmVUZXh0KSkpLmZvcm1hdCh0aGlzLmRhdGVGb3JtYXQpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldFRleHRXaXRoRm9ybWF0KGZlYXR1cmVUZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiAoPGFueT5TdHJpbmcpLmZvcm1hdChmZWF0dXJlVGV4dCwgdGhpcy50ZXh0Rm9ybWF0KTtcclxuICAgIH1cclxuXHJcbiAgICBCQVRDSF9DT05TVFJVQ1RPUlNfREVGQVVMVCA9IHtcclxuICAgICAgICBQb2ludDogVGV4dExhYmVsaW5nU3RyYXRlZ3ksXHJcbiAgICAgICAgTXVsdGlQb2ludDogVGV4dExhYmVsaW5nU3RyYXRlZ3ksXHJcbiAgICAgICAgTGluZVN0cmluZzogVGV4dExhYmVsaW5nU3RyYXRlZ3ksXHJcbiAgICAgICAgQ2lyY2xlOiBUZXh0TGFiZWxpbmdTdHJhdGVneSxcclxuICAgICAgICBNdWx0aUxpbmVTdHJpbmc6IFRleHRMYWJlbGluZ1N0cmF0ZWd5LFxyXG4gICAgICAgIFBvbHlnb246IFRleHRMYWJlbGluZ1N0cmF0ZWd5LFxyXG4gICAgICAgIE11bHRpUG9seWdvbjogVGV4dExhYmVsaW5nU3RyYXRlZ3lcclxuICAgIH07XHJcblxyXG4gICAgQkFUQ0hfQ09OU1RSVUNUT1JTX0RFVEVDVCA9IHtcclxuICAgICAgICBQb2ludDogRGV0ZWN0VGV4dExhYmVsaW5nU3RyYXRlZ3ksXHJcbiAgICAgICAgTXVsdGlQb2ludDogRGV0ZWN0VGV4dExhYmVsaW5nU3RyYXRlZ3ksXHJcbiAgICAgICAgTGluZVN0cmluZzogRGV0ZWN0VGV4dExhYmVsaW5nU3RyYXRlZ3ksXHJcbiAgICAgICAgQ2lyY2xlOiBEZXRlY3RUZXh0TGFiZWxpbmdTdHJhdGVneSxcclxuICAgICAgICBNdWx0aUxpbmVTdHJpbmc6IERldGVjdFRleHRMYWJlbGluZ1N0cmF0ZWd5LFxyXG4gICAgICAgIFBvbHlnb246IERldGVjdFRleHRMYWJlbGluZ1N0cmF0ZWd5LFxyXG4gICAgICAgIE11bHRpUG9seWdvbjogRGV0ZWN0VGV4dExhYmVsaW5nU3RyYXRlZ3lcclxuICAgIH07XHJcbn1cclxuXHJcbig8YW55PlN0cmluZykuZm9ybWF0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IHMgPSBhcmd1bWVudHNbMF07XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICBsZXQgcmVnID0gbmV3IFJlZ0V4cChcIlxcXFx7XCIgKyBpICsgXCJcXFxcfVwiLCBcImdtXCIpO1xyXG4gICAgICAgIHMgPSBzLnJlcGxhY2UocmVnLCBhcmd1bWVudHNbaSArIDFdKTtcclxuICAgIH1cclxuICAgIHJldHVybiBzO1xyXG59O1xyXG5cclxuKDxhbnk+RGF0ZS5wcm90b3R5cGUpLmZvcm1hdCA9IGZ1bmN0aW9uIChmbXQpIHtcclxuICAgIGxldCBvID0ge1xyXG4gICAgICAgIFwiTStcIjogdGhpcy5nZXRNb250aCgpICsgMSxcclxuICAgICAgICBcImQrXCI6IHRoaXMuZ2V0RGF0ZSgpLFxyXG4gICAgICAgIFwiaCtcIjogdGhpcy5nZXRIb3VycygpLFxyXG4gICAgICAgIFwibStcIjogdGhpcy5nZXRNaW51dGVzKCksXHJcbiAgICAgICAgXCJzK1wiOiB0aGlzLmdldFNlY29uZHMoKSxcclxuICAgICAgICBcInErXCI6IE1hdGguZmxvb3IoKHRoaXMuZ2V0TW9udGgoKSArIDMpIC8gMyksXHJcbiAgICAgICAgXCJTXCI6IHRoaXMuZ2V0TWlsbGlzZWNvbmRzKClcclxuICAgIH07XHJcbiAgICBpZiAoLyh5KykvLnRlc3QoZm10KSlcclxuICAgICAgICBmbXQgPSBmbXQucmVwbGFjZShSZWdFeHAuJDEsICh0aGlzLmdldEZ1bGxZZWFyKCkgKyBcIlwiKS5zdWJzdHIoNCAtIFJlZ0V4cC4kMS5sZW5ndGgpKTtcclxuICAgIGZvciAobGV0IGsgaW4gbylcclxuICAgICAgICBpZiAobmV3IFJlZ0V4cChcIihcIiArIGsgKyBcIilcIikudGVzdChmbXQpKVxyXG4gICAgICAgICAgICBmbXQgPSBmbXQucmVwbGFjZShSZWdFeHAuJDEsIChSZWdFeHAuJDEubGVuZ3RoID09PSAxKSA/IChvW2tdKSA6ICgoXCIwMFwiICsgb1trXSkuc3Vic3RyKChcIlwiICsgb1trXSkubGVuZ3RoKSkpO1xyXG4gICAgcmV0dXJuIGZtdDtcclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3R5bGUvZ2VvVGV4dFN0eWxlLnRzIiwiXHJcbmltcG9ydCB7IEdlb1N0eWxlIH0gZnJvbSBcIi4vZ2VvU3R5bGVcIjtcclxuaW1wb3J0IHsgR2VvQnJ1c2ggfSBmcm9tIFwiLi4vc3R5bGUvZ2VvQnJ1c2hcIjtcclxuXHJcbmltcG9ydCB7IFRleHRMYWJlbGluZ1N0cmF0ZWd5IH0gZnJvbSBcIi4vdGV4dExhYmVsaW5nU3RyYXRlZ3lcIjtcclxuaW1wb3J0IHsgRGV0ZWN0VGV4dExhYmVsaW5nU3RyYXRlZ3kgfSBmcm9tIFwiLi9kZXRlY3RUZXh0TGFiZWxpbmdTdHJhdGVneVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdlb1NoaWVsZFN0eWxlIGV4dGVuZHMgR2VvU3R5bGUge1xyXG4gICAgdGV4dEFsaWducyA9IFtcImxlZnRcIiwgXCJyaWdodFwiLCBcImNlbnRlclwiLCBcImVuZFwiLCBcInN0YXJ0XCJdO1xyXG4gICAgYWxpZ246IHN0cmluZztcclxuICAgIC8vIGF2b2lkRWRnZXM6IGJvb2xlYW47XHJcbiAgICBkYXRlRm9ybWF0OiBzdHJpbmc7XHJcbiAgICBkeDogbnVtYmVyO1xyXG4gICAgZHk6IG51bWJlcjtcclxuICAgIGZhY2VOYW1lOiBzdHJpbmc7XHJcbiAgICBmaWxsOiBzdHJpbmc7XHJcbiAgICBmb3JjZUhvcml6b250YWxGb3JMaW5lOiBib29sZWFuO1xyXG4gICAgaGFsb0ZpbGw6IHN0cmluZztcclxuICAgIGhhbG9SYWRpdXM6IG51bWJlcjtcclxuICAgIG1hcmdpbjogbnVtYmVyO1xyXG4gICAgbWF4Q2hhckFuZ2xlRGVsdGE6IHN0cmluZztcclxuICAgIG1pbkRpc3RhbmNlOiBudW1iZXI7XHJcbiAgICBtaW5QYWRkaW5nOiBudW1iZXI7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBmb250OiBzdHJpbmc7XHJcbiAgICBudW1lcmljRm9ybWF0OiBzdHJpbmc7XHJcbiAgICBhbmdsZTogbnVtYmVyO1xyXG4gICAgb3BhY2l0eTogbnVtYmVyO1xyXG4gICAgb3JpZW50YXRpb246IG51bWJlcjtcclxuICAgIHBsYWNlbWVudHM6IHN0cmluZztcclxuICAgIHBsYWNlbWVudFR5cGU6IHN0cmluZztcclxuICAgIHBvbHlnb25MYWJlbGluZ0xvY2F0aW9uTW9kZTogc3RyaW5nO1xyXG4gICAgcmF0aW86IHN0cmluZztcclxuICAgIHNpemU6IG51bWJlcjtcclxuICAgIHNwYWNpbmc6IG51bWJlcjtcclxuICAgIHNwbGluZVR5cGU6IHN0cmluZztcclxuICAgIHRleHRGb3JtYXQ6IHN0cmluZztcclxuICAgIHdyYXA6IHN0cmluZztcclxuICAgIHdyYXBDaGFyYWN0ZXI6IHN0cmluZztcclxuICAgIHdyYXBXaWR0aDogbnVtYmVyO1xyXG4gICAgaWNvblR5cGU6IHN0cmluZztcclxuICAgIGljb25TaXplOiBudW1iZXI7XHJcbiAgICBpY29uU3JjOiBzdHJpbmc7XHJcbiAgICBpY29uQ29sb3I6IHN0cmluZztcclxuICAgIGljb25PdXRsaW5lQ29sb3I6IHN0cmluZztcclxuICAgIGljb25PdXRsaW5lV2lkdGg6IG51bWJlcjtcclxuICAgIGljb25TeW1ib2xUeXBlOiBzdHJpbmc7XHJcblxyXG4gICAgY29udmVydFN5bWJvbENvbG9yOiBzdHJpbmc7XHJcbiAgICBjb252ZXJ0U3ltYm9sT3V0bGluZUNvbG9yOiBzdHJpbmc7XHJcblxyXG4gICAgdGV4dFN0eWxlOiBhbnk7XHJcbiAgICBzdHlsZTogYW55O1xyXG4gICAgaW1hZ2U6IGFueTtcclxuICAgIGltYWdlQ2FjaGU6IGFueTtcclxuICAgIGxhYmVsSW5mb3M6IGFueTtcclxuXHJcbiAgICBzdGF0aWMgcG9pQ2FjaGUgPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzdHlsZUpzb24/OiBhbnkpIHtcclxuICAgICAgICBzdXBlcihzdHlsZUpzb24pO1xyXG4gICAgICAgIHRoaXMuaW1hZ2VDYWNoZSA9IFtdO1xyXG4gICAgICAgIHRoaXMubGFiZWxJbmZvcyA9IFtdO1xyXG5cclxuICAgICAgICBpZiAoc3R5bGVKc29uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaWNvblR5cGUgPSBzdHlsZUpzb25bXCJzaGllbGQtaWNvbi10eXBlXCJdO1xyXG4gICAgICAgICAgICB0aGlzLmljb25TeW1ib2xUeXBlID0gc3R5bGVKc29uW1wic2hpZWxkLWljb24tc3ltYm9sLXR5cGVcIl07XHJcbiAgICAgICAgICAgIHRoaXMuaWNvblNpemUgPSBzdHlsZUpzb25bXCJzaGllbGQtaWNvbi1zaXplXCJdID8gc3R5bGVKc29uW1wic2hpZWxkLWljb24tc2l6ZVwiXSA6IDA7XHJcbiAgICAgICAgICAgIHRoaXMuaWNvblNyYyA9IHN0eWxlSnNvbltcInNoaWVsZC1pY29uLXNyY1wiXTtcclxuICAgICAgICAgICAgdGhpcy5pY29uQ29sb3IgPSBzdHlsZUpzb25bXCJzaGllbGQtaWNvbi1jb2xvclwiXTtcclxuICAgICAgICAgICAgdGhpcy5pY29uT3V0bGluZUNvbG9yID0gc3R5bGVKc29uW1wic2hpZWxkLWljb24tb3V0bGluZS1jb2xvclwiXTtcclxuICAgICAgICAgICAgdGhpcy5pY29uT3V0bGluZVdpZHRoID0gc3R5bGVKc29uW1wic2hpZWxkLWljb24tb3V0bGluZS13aWR0aFwiXSA/IHN0eWxlSnNvbltcInNoaWVsZC1pY29uLW91dGxpbmUtd2lkdGhcIl0gOiAwO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuaWNvblNyYykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFHZW9TaGllbGRTdHlsZS5wb2lDYWNoZVt0aGlzLmljb25TcmNdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGltYWdlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VFbGVtZW50LnNyYyA9IHRoaXMuaWNvblNyYztcclxuICAgICAgICAgICAgICAgICAgICBHZW9TaGllbGRTdHlsZS5wb2lDYWNoZVt0aGlzLmljb25TcmNdID0gaW1hZ2VFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBzdHlsZUpzb25bXCJzaGllbGQtbmFtZVwiXTtcclxuICAgICAgICAgICAgdGhpcy5mb250ID0gc3R5bGVKc29uW1wic2hpZWxkLWZvbnRcIl07XHJcbiAgICAgICAgICAgIHRoaXMuYWxpZ24gPSBzdHlsZUpzb25bXCJzaGllbGQtYWxpZ25cIl07XHJcbiAgICAgICAgICAgIHRoaXMuYW5nbGUgPSBzdHlsZUpzb25bXCJzaGllbGQtcm90YXRlLWFuZ2xlXCJdID8gc3R5bGVKc29uW1wic2hpZWxkLXJvdGF0ZS1hbmdsZVwiXSA6IDA7XHJcblxyXG4gICAgICAgICAgICAvLyB0aGlzLmF2b2lkRWRnZXMgPSBzdHlsZUpzb25bXCJzaGllbGQtYXZvaWQtZWRnZXNcIl07XHJcbiAgICAgICAgICAgIHRoaXMuZGF0ZUZvcm1hdCA9IHN0eWxlSnNvbltcInNoaWVsZC1kYXRlLWZvcm1hdFwiXTtcclxuXHJcbiAgICAgICAgICAgIC8vIFRPRE9cclxuICAgICAgICAgICAgdGhpcy5keCA9IHN0eWxlSnNvbltcInNoaWVsZC1keFwiXSA/IHN0eWxlSnNvbltcInNoaWVsZC1keFwiXSA6IDA7XHJcbiAgICAgICAgICAgIHRoaXMuZHkgPSBzdHlsZUpzb25bXCJzaGllbGQtZHlcIl0gPyBzdHlsZUpzb25bXCJzaGllbGQtZHlcIl0gOiAwO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mYWNlTmFtZSA9IHN0eWxlSnNvbltcInNoaWVsZC1mYWNlLW5hbWVcIl07XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZpbGwgPSBzdHlsZUpzb25bXCJzaGllbGQtZmlsbFwiXTtcclxuXHJcbiAgICAgICAgICAgIC8vIHRoaXMuZm9yY2VIb3Jpem9udGFsRm9yTGluZSA9IHN0eWxlSnNvbltcInNoaWVsZC1mb3JjZS1ob3Jpem9udGFsLWZvci1saW5lXCJdO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5oYWxvRmlsbCA9IHN0eWxlSnNvbltcInNoaWVsZC1oYWxvLWZpbGxcIl0gPyBzdHlsZUpzb25bXCJzaGllbGQtaGFsby1maWxsXCJdIDogXCJUcmFuc3BhcmVudFwiO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5oYWxvUmFkaXVzID0gc3R5bGVKc29uW1wic2hpZWxkLWhhbG8tcmFkaXVzXCJdID8gc3R5bGVKc29uW1wic2hpZWxkLWhhbG8tcmFkaXVzXCJdIDogMDtcclxuXHJcbiAgICAgICAgICAgIC8vIHVzaW5nIGluIHN0cmF0ZWd5XHJcbiAgICAgICAgICAgIHRoaXMubWFyZ2luID0gc3R5bGVKc29uW1wic2hpZWxkLW1hcmdpblwiXTtcclxuXHJcbiAgICAgICAgICAgIC8vIHRoaXMubWF4Q2hhckFuZ2xlRGVsdGEgPSBzdHlsZUpzb25bXCJzaGllbGQtbWF4LWNoYXItYW5nbGUtZGVsdGFcIl07XHJcblxyXG4gICAgICAgICAgICAvLyB1c2luZyBpbiBzdHJhdGVneVxyXG4gICAgICAgICAgICB0aGlzLm1pbkRpc3RhbmNlID0gc3R5bGVKc29uW1wic2hpZWxkLW1pbi1kaXN0YW5jZVwiXTtcclxuXHJcbiAgICAgICAgICAgIC8vIHVzaW5nIGluIHN0cmF0ZWd5XHJcbiAgICAgICAgICAgIHRoaXMubWluUGFkZGluZyA9IHN0eWxlSnNvbltcInNoaWVsZC1taW4tcGFkZGluZ1wiXTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IHN0eWxlSnNvbltcInNoaWVsZC1uYW1lXCJdO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5udW1lcmljRm9ybWF0ID0gc3R5bGVKc29uW1wic2hpZWxkLW51bWVyaWMtZm9ybWF0XCJdO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5vcGFjaXR5ID0gc3R5bGVKc29uW1wic2hpZWxkLW9wYWNpdHlcIl07XHJcblxyXG4gICAgICAgICAgICB0aGlzLm9yaWVudGF0aW9uID0gc3R5bGVKc29uW1wic2hpZWxkLW9yaWVudGF0aW9uXCJdO1xyXG5cclxuICAgICAgICAgICAgLy8gdXNpbmcgaW4gc3RyYXRlZ3lcclxuICAgICAgICAgICAgdGhpcy5wbGFjZW1lbnRzID0gc3R5bGVKc29uW1wic2hpZWxkLXBsYWNlbWVudHNcIl0gPyBzdHlsZUpzb25bXCJzaGllbGQtcGxhY2VtZW50c1wiXSA6IFwiVVIsVSxVTCxCLEJSLEJMLEwsUlwiO1xyXG5cclxuICAgICAgICAgICAgLy8gdXNpbmcgaW4gc3RyYXRlZ3lcclxuICAgICAgICAgICAgdGhpcy5wbGFjZW1lbnRUeXBlID0gc3R5bGVKc29uW1wic2hpZWxkLXBsYWNlbWVudC10eXBlXCJdID8gc3R5bGVKc29uW1wic2hpZWxkLXBsYWNlbWVudC10eXBlXCJdIDogXCJkZWZhdWx0XCI7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNpemUgPSBzdHlsZUpzb25bXCJzaGllbGQtc2l6ZVwiXTtcclxuXHJcbiAgICAgICAgICAgIC8vIHVzaW5nIGluIHN0cmF0ZWd5XHJcbiAgICAgICAgICAgIHRoaXMuc3BhY2luZyA9IHN0eWxlSnNvbltcInNoaWVsZC1zcGFjaW5nXCJdO1xyXG5cclxuICAgICAgICAgICAgdGhpcy50ZXh0Rm9ybWF0ID0gc3R5bGVKc29uW1wic2hpZWxkLXRleHQtZm9ybWF0XCJdO1xyXG5cclxuICAgICAgICAgICAgdGhpcy53cmFwID0gc3R5bGVKc29uW1wic2hpZWxkLXdyYXBcIl0gPyB0cnVlIDogc3R5bGVKc29uW1wic2hpZWxkLXdyYXBcIl07XHJcblxyXG4gICAgICAgICAgICB0aGlzLndyYXBDaGFyYWN0ZXIgPSBzdHlsZUpzb25bXCJzaGllbGQtd3JhcC1jaGFyYWN0ZXJcIl07XHJcblxyXG4gICAgICAgICAgICB0aGlzLndyYXBXaWR0aCA9IHN0eWxlSnNvbltcInNoaWVsZC13cmFwLXdpZHRoXCJdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsaXplQ29yZSgpIHtcclxuICAgICAgICBsZXQgZm9udDtcclxuICAgICAgICBsZXQgc2l6ZTtcclxuXHJcbiAgICAgICAgdGhpcy50ZXh0U3R5bGUgPSBuZXcgb2wuc3R5bGUuVGV4dCh7XHJcbiAgICAgICAgICAgIHN0cm9rZTogbmV3IG9sLnN0eWxlLlN0cm9rZSgpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnRleHRBbGlnbnMuaW5kZXhPZih0aGlzLmFsaWduKSA+PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dFN0eWxlLnNldFRleHRBbGlnbih0aGlzLmFsaWduKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmZvbnQpIHtcclxuICAgICAgICAgICAgdGhpcy50ZXh0U3R5bGUuc2V0Rm9udCh0aGlzLmZvbnQgPyB0aGlzLmZvbnQgOiBcIjEwcHggc2Fucy1zZXJpZlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmZpbGwpIHtcclxuICAgICAgICAgICAgdGhpcy50ZXh0U3R5bGUuZ2V0RmlsbCgpLnNldENvbG9yKEdlb1N0eWxlLnRvUkdCQUNvbG9yKHRoaXMuZmlsbCwgdGhpcy5vcGFjaXR5KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmhhbG9GaWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dFN0eWxlLmdldFN0cm9rZSgpLnNldENvbG9yKEdlb1N0eWxlLnRvUkdCQUNvbG9yKHRoaXMuaGFsb0ZpbGwsIHRoaXMub3BhY2l0eSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5oYWxvUmFkaXVzKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dFN0eWxlLmdldFN0cm9rZSgpLnNldFdpZHRoKHRoaXMuaGFsb1JhZGl1cyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm9yaWVudGF0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dFN0eWxlLnNldFJvdGF0aW9uKHRoaXMub3JpZW50YXRpb24pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaWNvbkNvbG9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udmVydFN5bWJvbENvbG9yID0gR2VvU3R5bGUudG9SR0JBQ29sb3IodGhpcy5pY29uQ29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pY29uT3V0bGluZUNvbG9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udmVydFN5bWJvbE91dGxpbmVDb2xvciA9IEdlb1N0eWxlLnRvUkdCQUNvbG9yKHRoaXMuaWNvbk91dGxpbmVDb2xvcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnN0eWxlID0gbmV3IG9sLnN0eWxlLlN0eWxlKHtcclxuICAgICAgICAgICAgdGV4dDogdGhpcy50ZXh0U3R5bGVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb252ZXJ0ZWRTdHlsZUNvcmUoZmVhdHVyZTogYW55LCByZXNvbHV0aW9uOiBudW1iZXIsIG9wdGlvbnM6IGFueSk6IG9sLnN0eWxlLlN0eWxlW10ge1xyXG4gICAgICAgIGxldCBmZWF0dXJlVGV4dCA9IFwiXCI7XHJcbiAgICAgICAgaWYgKHRoaXMubmFtZSkge1xyXG4gICAgICAgICAgICBmZWF0dXJlVGV4dCA9IGZlYXR1cmUuZ2V0KHRoaXMubmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChmZWF0dXJlVGV4dCA9PT0gdW5kZWZpbmVkIHx8IGZlYXR1cmVUZXh0ID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZlYXR1cmVUZXh0ID0gdGhpcy5mb3JtYXRUZXh0KGZlYXR1cmVUZXh0KTtcclxuXHJcbiAgICAgICAgdGhpcy50ZXh0U3R5bGUuc2V0VGV4dChmZWF0dXJlVGV4dCk7XHJcblxyXG4gICAgICAgIGxldCBsYWJlbEluZm8gPSB0aGlzLmxhYmVsSW5mb3NbZmVhdHVyZVRleHRdO1xyXG4gICAgICAgIGlmICghbGFiZWxJbmZvKSB7XHJcbiAgICAgICAgICAgIGxhYmVsSW5mbyA9IHRoaXMuZ2V0TGFiZWxJbmZvKGZlYXR1cmVUZXh0KTtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbEluZm9zW2ZlYXR1cmVUZXh0XSA9IGxhYmVsSW5mbztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBmbGF0Q29vcmRpbmF0ZXMgPSB0aGlzLnNldExhYmVsUG9zaXRpb24oZmVhdHVyZSwgcmVzb2x1dGlvbiwgbGFiZWxJbmZvLCBvcHRpb25zLmdyaWQsIG9wdGlvbnMuZnJhbWVTdGF0ZSk7XHJcbiAgICAgICAgaWYgKGZsYXRDb29yZGluYXRlcyA9PT0gdW5kZWZpbmVkIHx8IGZsYXRDb29yZGluYXRlcy5sZW5ndGggPCAyKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zdHlsZS5zZXRHZW9tZXRyeShuZXcgb2wuZ2VvbS5Qb2ludChmbGF0Q29vcmRpbmF0ZXMsIFwiWFlcIikpO1xyXG5cclxuICAgICAgICBsZXQgbGFiZWxpbWFnZSA9IHRoaXMuZ2V0SW1hZ2UobGFiZWxJbmZvKTtcclxuXHJcbiAgICAgICAgdGhpcy50ZXh0U3R5bGUubGFiZWwgPSBsYWJlbGltYWdlO1xyXG4gICAgICAgIHRoaXMudGV4dFN0eWxlLmxhYmVsUG9zaXRpb24gPSBmbGF0Q29vcmRpbmF0ZXM7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmltYWdlQ2FjaGVbZmVhdHVyZVRleHRdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5pbWFnZUNhY2hlW2ZlYXR1cmVUZXh0XSA9IFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmljb25UeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJpbWFnZVwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiSW1hZ2VcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U2hpbGVkSW1hZ2VJY29uKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInN5bWJvbFwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiU3ltYm9sXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFNoaWVsZFN5bWJvbEljb24oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFt0aGlzLnN0eWxlXTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTaGllbGRTeW1ib2xJY29uKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmljb25TeW1ib2xUeXBlICE9PSB1bmRlZmluZWQpIHtcclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5pY29uU3ltYm9sVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImNpcmNsZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0Q2lyY2xlSWNvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInNxdWFyZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3F1YXJlSWNvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInRyaWFuZ2xlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRUcmlhbmdsZUljb24oKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJjcm9zc1wiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0Q3Jvc3NJY29uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwic3RhclwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3Rhckljb24oKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnN0eWxlLnNldEltYWdlKHRoaXMuaW1hZ2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRTdGFySWNvbigpIHtcclxuICAgICAgICBsZXQgZmlsbCA9IHVuZGVmaW5lZDtcclxuICAgICAgICBsZXQgc3Ryb2tlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIGxldCByYWRpdXMgPSB0aGlzLmljb25TaXplICogMC41ICogd2luZG93LmRldmljZVBpeGVsUmF0aW87XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmljb25Db2xvcikge1xyXG4gICAgICAgICAgICBmaWxsID0gbmV3IG9sLnN0eWxlLkZpbGwoKHsgY29sb3I6IHRoaXMuY29udmVydFN5bWJvbENvbG9yIH0pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaWNvbk91dGxpbmVDb2xvciB8fCB0aGlzLmljb25PdXRsaW5lV2lkdGgpIHtcclxuICAgICAgICAgICAgc3Ryb2tlID0gbmV3IG9sLnN0eWxlLlN0cm9rZSgoe1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHRoaXMuY29udmVydFN5bWJvbE91dGxpbmVDb2xvcixcclxuICAgICAgICAgICAgICAgIHdpZHRoOiB0aGlzLmljb25PdXRsaW5lV2lkdGhcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IG5ldyBvbC5zdHlsZS5SZWd1bGFyU2hhcGUoe1xyXG4gICAgICAgICAgICBmaWxsOiBmaWxsLFxyXG4gICAgICAgICAgICBzdHJva2U6IHN0cm9rZSxcclxuICAgICAgICAgICAgcG9pbnRzOiA1LFxyXG4gICAgICAgICAgICByYWRpdXM6IHJhZGl1cyxcclxuICAgICAgICAgICAgcmFkaXVzMjogcmFkaXVzIC8gMi41LFxyXG4gICAgICAgICAgICBhbmdsZTogdGhpcy5hbmdsZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldENyb3NzSWNvbigpIHtcclxuICAgICAgICBsZXQgZmlsbCA9IHVuZGVmaW5lZDtcclxuICAgICAgICBsZXQgc3Ryb2tlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIGxldCByYWRpdXMgPSB0aGlzLmljb25TaXplICogMC41ICogd2luZG93LmRldmljZVBpeGVsUmF0aW87XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmljb25Db2xvcikge1xyXG4gICAgICAgICAgICBmaWxsID0gbmV3IG9sLnN0eWxlLkZpbGwoKHsgY29sb3I6IHRoaXMuY29udmVydFN5bWJvbENvbG9yIH0pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaWNvbk91dGxpbmVDb2xvciB8fCB0aGlzLmljb25PdXRsaW5lV2lkdGgpIHtcclxuICAgICAgICAgICAgc3Ryb2tlID0gbmV3IG9sLnN0eWxlLlN0cm9rZSgoe1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHRoaXMuY29udmVydFN5bWJvbE91dGxpbmVDb2xvcixcclxuICAgICAgICAgICAgICAgIHdpZHRoOiB0aGlzLmljb25PdXRsaW5lV2lkdGhcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IG5ldyBvbC5zdHlsZS5SZWd1bGFyU2hhcGUoe1xyXG4gICAgICAgICAgICBmaWxsOiBmaWxsLFxyXG4gICAgICAgICAgICBzdHJva2U6IHN0cm9rZSxcclxuICAgICAgICAgICAgcG9pbnRzOiA0LFxyXG4gICAgICAgICAgICByYWRpdXM6IHJhZGl1cyxcclxuICAgICAgICAgICAgcmFkaXVzMjogMCxcclxuICAgICAgICAgICAgYW5nbGU6IHRoaXMuYW5nbGVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRUcmlhbmdsZUljb24oKSB7XHJcbiAgICAgICAgbGV0IGZpbGwgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgbGV0IHN0cm9rZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICBsZXQgcmFkaXVzID0gdGhpcy5pY29uU2l6ZSAqIDAuNSAqIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pY29uQ29sb3IpIHtcclxuICAgICAgICAgICAgZmlsbCA9IG5ldyBvbC5zdHlsZS5GaWxsKCh7IGNvbG9yOiB0aGlzLmNvbnZlcnRTeW1ib2xDb2xvciB9KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmljb25PdXRsaW5lQ29sb3IgfHwgdGhpcy5pY29uT3V0bGluZVdpZHRoKSB7XHJcbiAgICAgICAgICAgIHN0cm9rZSA9IG5ldyBvbC5zdHlsZS5TdHJva2UoKHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB0aGlzLmNvbnZlcnRTeW1ib2xPdXRsaW5lQ29sb3IsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogdGhpcy5pY29uT3V0bGluZVdpZHRoXHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuaW1hZ2UgPSBuZXcgb2wuc3R5bGUuUmVndWxhclNoYXBlKHtcclxuICAgICAgICAgICAgZmlsbDogZmlsbCxcclxuICAgICAgICAgICAgc3Ryb2tlOiBzdHJva2UsXHJcbiAgICAgICAgICAgIHBvaW50czogMyxcclxuICAgICAgICAgICAgcmFkaXVzOiByYWRpdXMsXHJcbiAgICAgICAgICAgIGFuZ2xlOiB0aGlzLmFuZ2xlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U3F1YXJlSWNvbigpIHtcclxuICAgICAgICBsZXQgZmlsbCA9IHVuZGVmaW5lZDtcclxuICAgICAgICBsZXQgc3Ryb2tlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIGxldCByYWRpdXMgPSB0aGlzLmljb25TaXplICogMC41ICogd2luZG93LmRldmljZVBpeGVsUmF0aW87XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmljb25Db2xvcikge1xyXG4gICAgICAgICAgICBmaWxsID0gbmV3IG9sLnN0eWxlLkZpbGwoKHsgY29sb3I6IHRoaXMuY29udmVydFN5bWJvbENvbG9yIH0pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaWNvbk91dGxpbmVDb2xvciB8fCB0aGlzLmljb25PdXRsaW5lV2lkdGgpIHtcclxuICAgICAgICAgICAgc3Ryb2tlID0gbmV3IG9sLnN0eWxlLlN0cm9rZSgoe1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHRoaXMuY29udmVydFN5bWJvbE91dGxpbmVDb2xvcixcclxuICAgICAgICAgICAgICAgIHdpZHRoOiB0aGlzLmljb25PdXRsaW5lV2lkdGhcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IG5ldyBvbC5zdHlsZS5SZWd1bGFyU2hhcGUoe1xyXG4gICAgICAgICAgICBmaWxsOiBmaWxsLFxyXG4gICAgICAgICAgICBzdHJva2U6IHN0cm9rZSxcclxuICAgICAgICAgICAgcG9pbnRzOiA0LFxyXG4gICAgICAgICAgICByYWRpdXM6IHJhZGl1cyxcclxuICAgICAgICAgICAgYW5nbGU6IE1hdGguUEkgLyA0ICsgdGhpcy5hbmdsZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldENpcmNsZUljb24oKSB7XHJcbiAgICAgICAgbGV0IGZpbGwgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgbGV0IHN0cm9rZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICBsZXQgcmFkaXVzID0gdGhpcy5pY29uU2l6ZSAqIDAuNSAqIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pY29uQ29sb3IpIHtcclxuICAgICAgICAgICAgZmlsbCA9IG5ldyBvbC5zdHlsZS5GaWxsKCh7IGNvbG9yOiB0aGlzLmNvbnZlcnRTeW1ib2xDb2xvciB9KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmljb25PdXRsaW5lQ29sb3IgfHwgdGhpcy5pY29uT3V0bGluZVdpZHRoKSB7XHJcbiAgICAgICAgICAgIHN0cm9rZSA9IG5ldyBvbC5zdHlsZS5TdHJva2UoKHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB0aGlzLmNvbnZlcnRTeW1ib2xPdXRsaW5lQ29sb3IsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogdGhpcy5pY29uT3V0bGluZVdpZHRoXHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuaW1hZ2UgPSBuZXcgb2wuc3R5bGUuQ2lyY2xlKHtcclxuICAgICAgICAgICAgZmlsbDogZmlsbCxcclxuICAgICAgICAgICAgc3Ryb2tlOiBzdHJva2UsXHJcbiAgICAgICAgICAgIHJhZGl1czogcmFkaXVzXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U2hpbGVkSW1hZ2VJY29uKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmljb25TcmMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBsZXQgcG9pSW1nID0gR2VvU2hpZWxkU3R5bGUucG9pQ2FjaGVbdGhpcy5pY29uU3JjXTtcclxuICAgICAgICAgICAgdGhpcy5pbWFnZSA9IG5ldyBvbC5zdHlsZS5JY29uKHtcclxuICAgICAgICAgICAgICAgIGltZzogcG9pSW1nLFxyXG4gICAgICAgICAgICAgICAgaW1nU2l6ZTogW3BvaUltZy53aWR0aCwgcG9pSW1nLmhlaWdodF0sXHJcbiAgICAgICAgICAgICAgICByb3RhdGlvbjogdGhpcy5hbmdsZSAqIE1hdGguUEkgLyAxODBcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnN0eWxlLnNldEltYWdlKHRoaXMuaW1hZ2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRMYWJlbEluZm8odGV4dDogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IGZvbnQgPSB0aGlzLmZvcm1hdEZvbnQodGhpcy50ZXh0U3R5bGUuZ2V0Rm9udCgpKTtcclxuICAgICAgICB0ZXh0ID0gdGhpcy53cmFwVGV4dCh0ZXh0LCBmb250KTtcclxuXHJcbiAgICAgICAgbGV0IGZpbGxTdGF0ZSA9IHRoaXMudGV4dFN0eWxlLmdldEZpbGwoKTtcclxuICAgICAgICBsZXQgc3Ryb2tlU3RhdGUgPSB0aGlzLnRleHRTdHlsZS5nZXRTdHJva2UoKTtcclxuXHJcbiAgICAgICAgbGV0IHBpeGVsUmF0aW8gPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcclxuICAgICAgICBsZXQgc2NhbGUgPSB0aGlzLnRleHRTdHlsZS5nZXRTY2FsZSgpO1xyXG4gICAgICAgIHNjYWxlID0gKHNjYWxlID8gc2NhbGUgOiAxKSAqIHBpeGVsUmF0aW87XHJcblxyXG4gICAgICAgIGxldCBhbGlnbiA9ICg8YW55Pm9sLnJlbmRlcikucmVwbGF5LlRFWFRfQUxJR05bdGhpcy50ZXh0U3R5bGUuZ2V0VGV4dEFsaWduKCkgfHwgKDxhbnk+b2wucmVuZGVyLmNhbnZhcykuZGVmYXVsdFRleHRBbGlnbl07XHJcbiAgICAgICAgbGV0IHN0cm9rZVdpZHRoID0gc3Ryb2tlU3RhdGUgJiYgc3Ryb2tlU3RhdGUuZ2V0V2lkdGgoKSA/IHN0cm9rZVN0YXRlLmdldFdpZHRoKCkgOiAwO1xyXG5cclxuICAgICAgICBsZXQgbGluZXMgPSB0ZXh0LnNwbGl0KFwiXFxuXCIpO1xyXG4gICAgICAgIGxldCBudW1MaW5lcyA9IGxpbmVzLmxlbmd0aDtcclxuICAgICAgICBsZXQgd2lkdGhzID0gW107XHJcblxyXG4gICAgICAgIGxldCB3aWR0aCA9ICg8YW55Pm9sLnJlbmRlci5jYW52YXMpLlRleHRSZXBsYXkubWVhc3VyZVRleHRXaWR0aHMoZm9udCwgbGluZXMsIHdpZHRocyk7XHJcbiAgICAgICAgbGV0IHJlbmRlcldpZHRoID0gd2lkdGggKyBzdHJva2VXaWR0aDtcclxuXHJcbiAgICAgICAgbGV0IGxpbmVIZWlnaHQgPSAoPGFueT5vbC5yZW5kZXIuY2FudmFzKS5tZWFzdXJlVGV4dEhlaWdodChmb250KTtcclxuICAgICAgICBsZXQgaGVpZ2h0ID0gbGluZUhlaWdodCAqIG51bUxpbmVzO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5keCkgeyB0aGlzLnRleHRTdHlsZS5zZXRPZmZzZXRYKHRoaXMuZHggKyBoZWlnaHQgLyAyKTsgfVxyXG4gICAgICAgIGlmICh0aGlzLmR5KSB7IHRoaXMudGV4dFN0eWxlLnNldE9mZnNldFkodGhpcy5keSArIGhlaWdodCAvIDIpOyB9XHJcblxyXG4gICAgICAgIGxldCBsYWJlbFdpZHRoID0gTWF0aC5jZWlsKHJlbmRlcldpZHRoICogc2NhbGUpO1xyXG4gICAgICAgIGxldCBsYWJlbEhlaWdodCA9IE1hdGguY2VpbCgoaGVpZ2h0ICsgc3Ryb2tlV2lkdGgpICogc2NhbGUpO1xyXG5cclxuICAgICAgICBsZXQgbGFiZWxJbmZvID0ge1xyXG4gICAgICAgICAgICB3aWR0aDogbGFiZWxXaWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiBsYWJlbEhlaWdodCxcclxuICAgICAgICAgICAgc2NhbGU6IHNjYWxlLFxyXG4gICAgICAgICAgICBudW1MaW5lczogbnVtTGluZXMsXHJcbiAgICAgICAgICAgIGxpbmVzOiBsaW5lcyxcclxuICAgICAgICAgICAgd2lkdGhzOiB3aWR0aHMsXHJcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6IGxpbmVIZWlnaHQsXHJcbiAgICAgICAgICAgIGZvbnQ6IGZvbnRcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBsYWJlbEluZm87XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TGFiZWxQb3NpdGlvbihnZW9tZXRyeTogYW55LCByZXNvbHV0aW9uOiBhbnksIGxhYmVsSW5mbzogYW55LCBncmlkOiBhbnksIGZyYW1lU3RhdGU6IG9seC5GcmFtZVN0YXRlKSB7XHJcbiAgICAgICAgbGV0IGdlb21ldHJ5VHlwZSA9IGdlb21ldHJ5LmdldFR5cGUoKTtcclxuICAgICAgICBsZXQgZmxhdENvb3JkaW5hdGVzO1xyXG4gICAgICAgIGxldCBpLCBpaTtcclxuXHJcbiAgICAgICAgbGV0IENvbnN0cnVjdG9yOiBhbnk7XHJcbiAgICAgICAgaWYgKHRoaXMucGxhY2VtZW50VHlwZSA9PT0gXCJkZWZhdWx0XCIpIHtcclxuICAgICAgICAgICAgQ29uc3RydWN0b3IgPSB0aGlzLkJBVENIX0NPTlNUUlVDVE9SU19ERUZBVUxUW2dlb21ldHJ5VHlwZV07XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBsYWNlbWVudFR5cGUgPT09IFwiZGV0ZWN0XCIpIHtcclxuICAgICAgICAgICAgQ29uc3RydWN0b3IgPSB0aGlzLkJBVENIX0NPTlNUUlVDVE9SU19ERVRFQ1RbZ2VvbWV0cnlUeXBlXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB0ZXh0TGFiZWxpbmdTdHJhdGVneSA9IG5ldyBDb25zdHJ1Y3RvcigpO1xyXG5cclxuICAgICAgICBsZXQgd2lkdGggPSBsYWJlbEluZm8ud2lkdGg7XHJcbiAgICAgICAgbGV0IGhlaWdodCA9IGxhYmVsSW5mby5oZWlnaHQ7XHJcbiAgICAgICAgc3dpdGNoIChnZW9tZXRyeVR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAoPGFueT5vbC5nZW9tKS5HZW9tZXRyeVR5cGUuUE9JTlQ6XHJcbiAgICAgICAgICAgIGNhc2UgKDxhbnk+b2wuZ2VvbSkuR2VvbWV0cnlUeXBlLk1VTFRJX1BPSU5UOlxyXG4gICAgICAgICAgICAgICAgZmxhdENvb3JkaW5hdGVzID0gZ2VvbWV0cnkuZ2V0RmxhdENvb3JkaW5hdGVzKCk7XHJcbiAgICAgICAgICAgICAgICBmbGF0Q29vcmRpbmF0ZXMgPSB0ZXh0TGFiZWxpbmdTdHJhdGVneS5tYXJrTG9jYXRpb24oZmxhdENvb3JkaW5hdGVzLCB3aWR0aCwgaGVpZ2h0LCByZXNvbHV0aW9uLCBnZW9tZXRyeVR5cGUsIHRoaXMsIGdyaWQsIGZyYW1lU3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgKDxhbnk+b2wuZ2VvbSkuR2VvbWV0cnlUeXBlLkxJTkVfU1RSSU5HOlxyXG4gICAgICAgICAgICAgICAgZmxhdENvb3JkaW5hdGVzID0gLyoqIEB0eXBlIHtvbC5nZW9tLkxpbmVTdHJpbmd9ICovIChnZW9tZXRyeSkuZ2V0RmxhdE1pZHBvaW50KCk7XHJcbiAgICAgICAgICAgICAgICBmbGF0Q29vcmRpbmF0ZXMgPSB0ZXh0TGFiZWxpbmdTdHJhdGVneS5tYXJrTG9jYXRpb24oZmxhdENvb3JkaW5hdGVzLCB3aWR0aCwgaGVpZ2h0LCByZXNvbHV0aW9uLCBnZW9tZXRyeVR5cGUsIHRoaXMsIGdyaWQsIGZyYW1lU3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgKDxhbnk+b2wuZ2VvbSkuR2VvbWV0cnlUeXBlLkNJUkNMRTpcclxuICAgICAgICAgICAgICAgIGZsYXRDb29yZGluYXRlcyA9IC8qKiBAdHlwZSB7b2wuZ2VvbS5DaXJjbGV9ICovIChnZW9tZXRyeSkuZ2V0Q2VudGVyKCk7XHJcbiAgICAgICAgICAgICAgICBmbGF0Q29vcmRpbmF0ZXMgPSB0ZXh0TGFiZWxpbmdTdHJhdGVneS5tYXJrTG9jYXRpb24oZmxhdENvb3JkaW5hdGVzLCB3aWR0aCwgaGVpZ2h0LCByZXNvbHV0aW9uLCBnZW9tZXRyeVR5cGUsIHRoaXMsIGdyaWQsIGZyYW1lU3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgKDxhbnk+b2wuZ2VvbSkuR2VvbWV0cnlUeXBlLk1VTFRJX0xJTkVfU1RSSU5HOlxyXG4gICAgICAgICAgICAgICAgZmxhdENvb3JkaW5hdGVzID0gLyoqIEB0eXBlIHtvbC5nZW9tLk11bHRpTGluZVN0cmluZ30gKi8gKGdlb21ldHJ5KS5nZXRGbGF0TWlkcG9pbnRzKCk7XHJcbiAgICAgICAgICAgICAgICBmbGF0Q29vcmRpbmF0ZXMgPSB0ZXh0TGFiZWxpbmdTdHJhdGVneS5tYXJrTG9jYXRpb24oZmxhdENvb3JkaW5hdGVzLCB3aWR0aCwgaGVpZ2h0LCByZXNvbHV0aW9uLCBnZW9tZXRyeVR5cGUsIHRoaXMsIGdyaWQsIGZyYW1lU3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgKDxhbnk+b2wuZ2VvbSkuR2VvbWV0cnlUeXBlLlBPTFlHT046XHJcbiAgICAgICAgICAgICAgICBmbGF0Q29vcmRpbmF0ZXMgPSAvKiogQHR5cGUge29sLmdlb20uUG9seWdvbn0gKi8gKGdlb21ldHJ5KS5nZXRGbGF0SW50ZXJpb3JQb2ludCgpO1xyXG4gICAgICAgICAgICAgICAgZmxhdENvb3JkaW5hdGVzID0gdGV4dExhYmVsaW5nU3RyYXRlZ3kubWFya0xvY2F0aW9uKGZsYXRDb29yZGluYXRlcywgd2lkdGgsIGhlaWdodCwgcmVzb2x1dGlvbiwgZ2VvbWV0cnlUeXBlLCB0aGlzLCBncmlkLCBmcmFtZVN0YXRlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICg8YW55Pm9sLmdlb20pLkdlb21ldHJ5VHlwZS5NVUxUSV9QT0xZR09OOlxyXG4gICAgICAgICAgICAgICAgbGV0IGludGVyaW9yUG9pbnRzID0gLyoqIEB0eXBlIHtvbC5nZW9tLk11bHRpUG9seWdvbn0gKi8gKGdlb21ldHJ5KS5nZXRGbGF0SW50ZXJpb3JQb2ludHMoKTtcclxuICAgICAgICAgICAgICAgIGZsYXRDb29yZGluYXRlcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChpID0gMCwgaWkgPSBpbnRlcmlvclBvaW50cy5sZW5ndGg7IGkgPCBpaTsgaSArPSAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudGV4dFN0eWxlLm92ZXJmbG93IHx8IGludGVyaW9yUG9pbnRzW2kgKyAyXSAvIHJlc29sdXRpb24gPj0gd2lkdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxhdENvb3JkaW5hdGVzLnB1c2goaW50ZXJpb3JQb2ludHNbaV0sIGludGVyaW9yUG9pbnRzW2kgKyAxXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZmxhdENvb3JkaW5hdGVzID0gdGV4dExhYmVsaW5nU3RyYXRlZ3kubWFya0xvY2F0aW9uKGZsYXRDb29yZGluYXRlcywgd2lkdGgsIGhlaWdodCwgcmVzb2x1dGlvbiwgZ2VvbWV0cnlUeXBlLCB0aGlzLCBncmlkLCBmcmFtZVN0YXRlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZsYXRDb29yZGluYXRlcztcclxuICAgIH1cclxuXHJcbiAgICBnZXRJbWFnZShsYWJlbEluZm86IGFueSkge1xyXG4gICAgICAgIGlmIChsYWJlbEluZm8ubGFiZWwgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBsZXQgY29udGV4dCA9ICg8YW55Pm9sKS5kb20uY3JlYXRlQ2FudmFzQ29udGV4dDJEKGxhYmVsSW5mby53aWR0aCwgbGFiZWxJbmZvLmhlaWdodCk7XHJcbiAgICAgICAgICAgIGxldCBsYWJlbCA9IGNvbnRleHQuY2FudmFzO1xyXG4gICAgICAgICAgICBpZiAobGFiZWxJbmZvLnNjYWxlICE9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZXh0LnNjYWxlKGxhYmVsSW5mby5zY2FsZSwgbGFiZWxJbmZvLnNjYWxlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29udGV4dC5mb250ID0gbGFiZWxJbmZvLmZvbnQ7XHJcblxyXG4gICAgICAgICAgICBsZXQgc3Ryb2tlU3RhdGUgPSB0aGlzLnRleHRTdHlsZS5nZXRTdHJva2UoKTtcclxuICAgICAgICAgICAgbGV0IHN0cm9rZVdpZHRoID0gc3Ryb2tlU3RhdGUgJiYgc3Ryb2tlU3RhdGUuZ2V0V2lkdGgoKSA/IHN0cm9rZVN0YXRlLmdldFdpZHRoKCkgOiAwO1xyXG5cclxuICAgICAgICAgICAgbGV0IGZpbGxTdGF0ZSA9IHRoaXMudGV4dFN0eWxlLmdldEZpbGwoKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzdHJva2VTdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IHN0cm9rZVN0YXRlLmdldENvbG9yKCkgPyBzdHJva2VTdGF0ZS5nZXRDb2xvcigpIDogXCJUcmFuc3BhcmVudFwiO1xyXG4gICAgICAgICAgICAgICAgY29udGV4dC5saW5lV2lkdGggPSBzdHJva2VXaWR0aCAqICgoPGFueT5vbC5oYXMpLlNBRkFSSSA/IGxhYmVsSW5mby5zY2FsZSA6IDEpO1xyXG4gICAgICAgICAgICAgICAgY29udGV4dC5saW5lQ2FwID0gc3Ryb2tlU3RhdGUuZ2V0TGluZUNhcCgpO1xyXG4gICAgICAgICAgICAgICAgY29udGV4dC5saW5lSm9pbiA9IHN0cm9rZVN0YXRlLmdldExpbmVKb2luKCk7XHJcbiAgICAgICAgICAgICAgICBjb250ZXh0Lm1pdGVyTGltaXQgPSBzdHJva2VTdGF0ZS5nZXRNaXRlckxpbWl0KCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGluZURhc2ggPSBzdHJva2VTdGF0ZS5nZXRMaW5lRGFzaCgpO1xyXG4gICAgICAgICAgICAgICAgbGluZURhc2ggPSBsaW5lRGFzaCA/IGxpbmVEYXNoLnNsaWNlKCkgOiAoPGFueT5vbC5yZW5kZXIuY2FudmFzKS5kZWZhdWx0TGluZURhc2g7XHJcbiAgICAgICAgICAgICAgICBpZiAoKDxhbnk+b2wuaGFzKS5DQU5WQVNfTElORV9EQVNIICYmIGxpbmVEYXNoLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuc2V0TGluZURhc2goc3Ryb2tlU3RhdGUuZ2V0TGluZURhc2goKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5saW5lRGFzaE9mZnNldCA9ICg8YW55PnN0cm9rZVN0YXRlKS5nZXRMaW5lRGFzaE9mZnNldCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChmaWxsU3RhdGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gZmlsbFN0YXRlLmdldENvbG9yKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29udGV4dC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xyXG4gICAgICAgICAgICBjb250ZXh0LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgICAgICAgICAgIGxldCBhbGlnbiA9ICg8YW55Pm9sLnJlbmRlcikucmVwbGF5LlRFWFRfQUxJR05bdGhpcy50ZXh0U3R5bGUuZ2V0VGV4dEFsaWduKCkgfHwgKDxhbnk+b2wucmVuZGVyLmNhbnZhcykuZGVmYXVsdFRleHRBbGlnbl07XHJcbiAgICAgICAgICAgIGxldCBsZWZ0UmlnaHQgPSAoMC41IC0gYWxpZ24pO1xyXG4gICAgICAgICAgICBsZXQgeCA9IGFsaWduICogbGFiZWwud2lkdGggLyBsYWJlbEluZm8uc2NhbGUgKyBsZWZ0UmlnaHQgKiBzdHJva2VXaWR0aDtcclxuICAgICAgICAgICAgbGV0IGk7XHJcbiAgICAgICAgICAgIGlmIChzdHJva2VTdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxhYmVsSW5mby5udW1MaW5lczsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5zdHJva2VUZXh0KGxhYmVsSW5mby5saW5lc1tpXSwgeCArIGxlZnRSaWdodCAqIGxhYmVsSW5mby53aWR0aHNbaV0sIDAuNSAqIChzdHJva2VXaWR0aCArIGxhYmVsSW5mby5saW5lSGVpZ2h0KSArIGkgKiBsYWJlbEluZm8ubGluZUhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGZpbGxTdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxhYmVsSW5mby5udW1MaW5lczsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5maWxsVGV4dChsYWJlbEluZm8ubGluZXNbaV0sIHggKyBsZWZ0UmlnaHQgKiBsYWJlbEluZm8ud2lkdGhzW2ldLCAwLjUgKiAoc3Ryb2tlV2lkdGggKyBsYWJlbEluZm8ubGluZUhlaWdodCkgKyBpICogbGFiZWxJbmZvLmxpbmVIZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxhYmVsSW5mb1tcImxhYmVsXCJdID0gbGFiZWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBsYWJlbEluZm9bXCJsYWJlbFwiXTtcclxuICAgIH1cclxuXHJcbiAgICBmb3JtYXRUZXh0KGZlYXR1cmVUZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICh0aGlzLm51bWVyaWNGb3JtYXQpIHtcclxuICAgICAgICAgICAgZmVhdHVyZVRleHQgPSB0aGlzLmdldFRleHRXaXRoTnVtZXJpY0Zvcm1hdChmZWF0dXJlVGV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmRhdGVGb3JtYXQpIHtcclxuICAgICAgICAgICAgZmVhdHVyZVRleHQgPSB0aGlzLmdldFRleHRXaXRoRGF0ZUZvcm1hdChmZWF0dXJlVGV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnRleHRGb3JtYXQpIHtcclxuICAgICAgICAgICAgZmVhdHVyZVRleHQgPSB0aGlzLmdldFRleHRXaXRoRm9ybWF0KGZlYXR1cmVUZXh0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZlYXR1cmVUZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRUZXh0V2l0aE51bWVyaWNGb3JtYXQoZmVhdHVyZVRleHQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IHRtcEFyZ3VtZW50cyA9IHRoaXMubnVtZXJpY0Zvcm1hdC5zcGxpdChcIixcIik7XHJcbiAgICAgICAgbGV0IG51bWVyaWNGb3JtYXRPcHRpb25zID0ge307XHJcbiAgICAgICAgZm9yIChsZXQgdG1wQXJndW1lbnQgb2YgdG1wQXJndW1lbnRzKSB7XHJcbiAgICAgICAgICAgIGxldCBrZXlWYWx1ZVBhaXIgPSB0bXBBcmd1bWVudC5zcGxpdChcIjpcIik7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoa2V5VmFsdWVQYWlyWzBdLnRyaW0oKSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImxvY2FsZU1hdGNoZXJcIjpcclxuICAgICAgICAgICAgICAgICAgICAoPGFueT5udW1lcmljRm9ybWF0T3B0aW9ucykubG9jYWxlTWF0Y2hlciA9IGtleVZhbHVlUGFpclsxXS50cmltKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwic3R5bGVcIjpcclxuICAgICAgICAgICAgICAgICAgICAoPGFueT5udW1lcmljRm9ybWF0T3B0aW9ucykuc3R5bGUgPSBrZXlWYWx1ZVBhaXJbMV0udHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImN1cnJlbmN5XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgKDxhbnk+bnVtZXJpY0Zvcm1hdE9wdGlvbnMpLmN1cnJlbmN5ID0ga2V5VmFsdWVQYWlyWzFdLnRyaW0oKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJjdXJyZW5jeURpc3BsYXlcIjpcclxuICAgICAgICAgICAgICAgICAgICAoPGFueT5udW1lcmljRm9ybWF0T3B0aW9ucykuY3VycmVuY3lEaXNwbGF5ID0ga2V5VmFsdWVQYWlyWzFdLnRyaW0oKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJ1c2VHcm91cGluZ1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICg8YW55Pm51bWVyaWNGb3JtYXRPcHRpb25zKS51c2VHcm91cGluZyA9IGtleVZhbHVlUGFpclsxXS50cmltKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwibWluaW11bUludGVnZXJEaWdpdHNcIjpcclxuICAgICAgICAgICAgICAgICAgICAoPGFueT5udW1lcmljRm9ybWF0T3B0aW9ucykubWluaW11bUludGVnZXJEaWdpdHMgPSBrZXlWYWx1ZVBhaXJbMV0udHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIm1pbmltdW1GcmFjdGlvbkRpZ2l0c1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICg8YW55Pm51bWVyaWNGb3JtYXRPcHRpb25zKS5taW5pbXVtRnJhY3Rpb25EaWdpdHMgPSBrZXlWYWx1ZVBhaXJbMV0udHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIm1heGltdW1GcmFjdGlvbkRpZ2l0c1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICg8YW55Pm51bWVyaWNGb3JtYXRPcHRpb25zKS5tYXhpbXVtRnJhY3Rpb25EaWdpdHMgPSBrZXlWYWx1ZVBhaXJbMV0udHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIm1pbmltdW1TaWduaWZpY2FudERpZ2l0c1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICg8YW55Pm51bWVyaWNGb3JtYXRPcHRpb25zKS5taW5pbXVtU2lnbmlmaWNhbnREaWdpdHMgPSBrZXlWYWx1ZVBhaXJbMV0udHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIm1heGltdW1TaWduaWZpY2FudERpZ2l0c1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICg8YW55Pm51bWVyaWNGb3JtYXRPcHRpb25zKS5tYXhpbXVtU2lnbmlmaWNhbnREaWdpdHMgPSBrZXlWYWx1ZVBhaXJbMV0udHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBudW1lcmljID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KHRtcEFyZ3VtZW50c1swXSwgbnVtZXJpY0Zvcm1hdE9wdGlvbnMpO1xyXG5cclxuICAgICAgICByZXR1cm4gbnVtZXJpYy5mb3JtYXQoTnVtYmVyKGZlYXR1cmVUZXh0KSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0VGV4dFdpdGhEYXRlRm9ybWF0KGZlYXR1cmVUZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiAoPGFueT4obmV3IERhdGUoZmVhdHVyZVRleHQpKSkuZm9ybWF0KHRoaXMuZGF0ZUZvcm1hdCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0VGV4dFdpdGhGb3JtYXQoZmVhdHVyZVRleHQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuICg8YW55PlN0cmluZykuZm9ybWF0KGZlYXR1cmVUZXh0LCB0aGlzLnRleHRGb3JtYXQpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFBvaW50R2VvbWV0cnkoZmVhdHVyZTogb2wuRmVhdHVyZSkge1xyXG4gICAgICAgIHJldHVybiBmZWF0dXJlLmdldEdlb21ldHJ5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgd3JhcFRleHQodGV4dDogc3RyaW5nLCBmb250OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCByZXN1bHRUZXh0OiBzdHJpbmc7XHJcblxyXG4gICAgICAgIGlmICh0ZXh0ICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGxldCBsaW5lcyA9IFt0ZXh0XTtcclxuICAgICAgICAgICAgbGV0IHdpZHRocyA9IFtdO1xyXG4gICAgICAgICAgICBsZXQgd2lkdGggPSAoPGFueT5vbC5yZW5kZXIuY2FudmFzKS5UZXh0UmVwbGF5Lm1lYXN1cmVUZXh0V2lkdGhzKGZvbnQsIGxpbmVzLCB3aWR0aHMpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHdyYXBXaWR0aCA9IHRoaXMud3JhcFdpZHRoO1xyXG4gICAgICAgICAgICBsZXQgd3JhcENoYXJhY3RlciA9IFwiIFwiO1xyXG4gICAgICAgICAgICBsZXQgaXNXcmFwQmVmb3JlID0gdGhpcy53cmFwO1xyXG5cclxuICAgICAgICAgICAgaWYgKHdyYXBXaWR0aCA+IDAgJiYgd2lkdGggPiB3cmFwV2lkdGggJiYgdGV4dC5pbmNsdWRlcyh3cmFwQ2hhcmFjdGVyKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRleHRMaW5lcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgbGluZXMgPSB0ZXh0LnNwbGl0KHdyYXBDaGFyYWN0ZXIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHdyYXBMaW5lcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgbGV0IHdyYXBXaWR0aFN1bSA9IDA7XHJcbiAgICAgICAgICAgICAgICBsZXQgdG1wV3JhcFdpZHRoOiBudW1iZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGlzV3JhcEJlZm9yZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGxpbmUgb2YgbGluZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRtcExpbmUgPSBbbGluZV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRtcFdyYXBXaWR0aCA9ICg8YW55Pm9sLnJlbmRlci5jYW52YXMpLlRleHRSZXBsYXkubWVhc3VyZVRleHRXaWR0aHMoZm9udCwgdG1wTGluZSwgd2lkdGhzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3JhcFdpZHRoU3VtICs9IHRtcFdyYXBXaWR0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRtcFdyYXBXaWR0aCA+IHdyYXBXaWR0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3JhcExpbmVzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0TGluZXMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBXaWR0aFN1bSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdyYXBMaW5lcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAod3JhcFdpZHRoU3VtID4gd3JhcFdpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3JhcExpbmVzLnB1c2goXCJcXG5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dExpbmVzLnB1c2god3JhcExpbmVzLmpvaW4oXCJcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBMaW5lcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBXaWR0aFN1bSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBMaW5lcy5wdXNoKFwiIFwiICsgbGluZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAod3JhcExpbmVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dExpbmVzLnB1c2god3JhcExpbmVzLmpvaW4oXCJcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgbGluZSBvZiBsaW5lcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3cmFwTGluZXMucHVzaChcIiBcIiArIGxpbmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdG1wTGluZSA9IFtsaW5lXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG1wV3JhcFdpZHRoID0gKDxhbnk+b2wucmVuZGVyLmNhbnZhcykuVGV4dFJlcGxheS5tZWFzdXJlVGV4dFdpZHRocyhmb250LCB0bXBMaW5lLCB3aWR0aHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3cmFwV2lkdGhTdW0gKz0gdG1wV3JhcFdpZHRoO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdyYXBXaWR0aFN1bSA+IHdyYXBXaWR0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3JhcExpbmVzLnB1c2goXCJcXG5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0TGluZXMucHVzaCh3cmFwTGluZXMuam9pbihcIlwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cmFwTGluZXMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBXaWR0aFN1bSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh3cmFwTGluZXMubGVuZ3RoID4gMCkgeyB0ZXh0TGluZXMucHVzaCh3cmFwTGluZXMuam9pbihcIlwiKSk7IH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXN1bHRUZXh0ID0gdGV4dExpbmVzLmpvaW4oXCJcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0VGV4dC5sYXN0SW5kZXhPZihcIlxcblwiKSA9PT0gcmVzdWx0VGV4dC5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0VGV4dCA9IHJlc3VsdFRleHQuc3Vic3RyKDAsIHJlc3VsdFRleHQubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHRUZXh0ID0gdGV4dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdFRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZm9ybWF0Rm9udChmb250OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCB0bXBGb250cyA9IGZvbnQuc3BsaXQoXCIgXCIpO1xyXG4gICAgICAgIGxldCBmb3JtYXRlZEZvbnQ6IHN0cmluZ1tdID0gW107XHJcblxyXG4gICAgICAgIGlmICh0bXBGb250c1t0bXBGb250cy5sZW5ndGggLSAxXS5pbmNsdWRlcyhcImJvbGRcIikgfHwgdG1wRm9udHNbdG1wRm9udHMubGVuZ3RoIC0gMV0uaW5jbHVkZXMoXCJpdGFsaWNcIikpIHtcclxuICAgICAgICAgICAgZm9ybWF0ZWRGb250LnB1c2goYCR7dG1wRm9udHNbdG1wRm9udHMubGVuZ3RoIC0gMV19IGApO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRtcEZvbnRzLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgZm9ybWF0ZWRGb250LnB1c2goYCR7dG1wRm9udHNbaV19IGApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZvbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmb3JtYXRlZEZvbnQuam9pbihcIlwiKS50cmltKCk7XHJcbiAgICB9XHJcblxyXG4gICAgQkFUQ0hfQ09OU1RSVUNUT1JTX0RFRkFVTFQgPSB7XHJcbiAgICAgICAgUG9pbnQ6IFRleHRMYWJlbGluZ1N0cmF0ZWd5LFxyXG4gICAgICAgIE11bHRpUG9pbnQ6IFRleHRMYWJlbGluZ1N0cmF0ZWd5LFxyXG4gICAgICAgIExpbmVTdHJpbmc6IFRleHRMYWJlbGluZ1N0cmF0ZWd5LFxyXG4gICAgICAgIENpcmNsZTogVGV4dExhYmVsaW5nU3RyYXRlZ3ksXHJcbiAgICAgICAgTXVsdGlMaW5lU3RyaW5nOiBUZXh0TGFiZWxpbmdTdHJhdGVneSxcclxuICAgICAgICBQb2x5Z29uOiBUZXh0TGFiZWxpbmdTdHJhdGVneSxcclxuICAgICAgICBNdWx0aVBvbHlnb246IFRleHRMYWJlbGluZ1N0cmF0ZWd5XHJcbiAgICB9O1xyXG5cclxuICAgIEJBVENIX0NPTlNUUlVDVE9SU19ERVRFQ1QgPSB7XHJcbiAgICAgICAgUG9pbnQ6IERldGVjdFRleHRMYWJlbGluZ1N0cmF0ZWd5LFxyXG4gICAgICAgIE11bHRpUG9pbnQ6IERldGVjdFRleHRMYWJlbGluZ1N0cmF0ZWd5LFxyXG4gICAgICAgIExpbmVTdHJpbmc6IERldGVjdFRleHRMYWJlbGluZ1N0cmF0ZWd5LFxyXG4gICAgICAgIENpcmNsZTogRGV0ZWN0VGV4dExhYmVsaW5nU3RyYXRlZ3ksXHJcbiAgICAgICAgTXVsdGlMaW5lU3RyaW5nOiBEZXRlY3RUZXh0TGFiZWxpbmdTdHJhdGVneSxcclxuICAgICAgICBQb2x5Z29uOiBEZXRlY3RUZXh0TGFiZWxpbmdTdHJhdGVneSxcclxuICAgICAgICBNdWx0aVBvbHlnb246IERldGVjdFRleHRMYWJlbGluZ1N0cmF0ZWd5XHJcbiAgICB9O1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0eWxlL2dlb1NoaWVsZFN0eWxlLnRzIiwiaW1wb3J0IHsgVHJlZU5vZGUgfSBmcm9tIFwiLi90cmVlTm9kZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRyZWU8VD4ge1xyXG4gICAgbm9kZTogVHJlZU5vZGU8VD47XHJcbiAgICByb290OiBUcmVlTm9kZTxUPjtcclxuICAgIHRyZWVJbmRleDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5vZGU6IFRyZWVOb2RlPFQ+LCB0cmVlSW5kZXgpIHtcclxuICAgICAgICB0aGlzLm5vZGUgPSBub2RlO1xyXG4gICAgICAgIHRoaXMucm9vdCA9IG5vZGU7XHJcbiAgICAgICAgdGhpcy50cmVlSW5kZXggPSB0cmVlSW5kZXg7XHJcbiAgICB9XHJcblxyXG4gICAgdHJhdmVyc2VOb2RlKGNhbGxiYWNrLCBzZWxlY3QpIHtcclxuICAgICAgICAoZnVuY3Rpb24gcmVjdXJzZShjdXJyZW50Tm9kZSkge1xyXG5cclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKGN1cnJlbnROb2RlKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnROb2RlLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaGFzTWF0Y2hlZENoaWxkcmVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbmd0aCA9IGN1cnJlbnROb2RlLmNoaWxkcmVuLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWN1cnNlKGN1cnJlbnROb2RlLmNoaWxkcmVuW2ldKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzTWF0Y2hlZENoaWxkcmVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY3VycmVudCBub2RlIGlzIG1hdGNoZWQsIGFuZCB3aXRob3V0IGNoaWxkcmVuXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0KGN1cnJlbnROb2RlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIHRydWU6IHRoZSBjdXJyZW50Tm9kZSBpcyBtYXRjaGVkLlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gZmFsc2U6IHRoZSBjdXJyZW50Tm9kZSBpcyBub3QgbWF0Y2hlZC5cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0pKHRoaXMucm9vdCk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdHJlZS90cmVlLnRzIiwiZXhwb3J0IGNsYXNzIFRyZWVOb2RlPFQ+IHtcclxuICAgIGRhdGE6IFQ7XHJcbiAgICBjaGlsZHJlbjogQXJyYXk8VHJlZU5vZGU8VD4+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGRhdGE6IFQpIHtcclxuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy90cmVlL1RyZWVOb2RlLnRzIiwiaW1wb3J0IHsgR3JpZCB9IGZyb20gXCIuLi9zdHlsZS9ncmlkXCI7XHJcbmltcG9ydCB7IFJlcGxheUdyb3VwQ3VzdG9tIH0gZnJvbSBcIi4vcmVwbGF5R3JvdXBDdXN0b21cIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgR2VvVmVjdG9yVGlsZUxheWVyUmVuZGVyIGV4dGVuZHMgKCg8YW55Pm9sKS5yZW5kZXJlci5jYW52YXMuVmVjdG9yVGlsZUxheWVyIGFzIHsgbmV3KHA6IG9sLmxheWVyLlZlY3RvclRpbGUpOiBhbnk7IH0pIHtcclxuICAgIGNvbnN0cnVjdG9yKGxheWVyOiBvbC5sYXllci5WZWN0b3JUaWxlKSB7XHJcbiAgICAgICAgc3VwZXIobGF5ZXIpO1xyXG4gICAgICAgIHRoaXMuVkVDVE9SX1JFUExBWVMgPSB0aGlzLlZFQ1RPUl9SRVBMQVlTX0NVU1RPTTtcclxuICAgICAgICB0aGlzLnByZXBhcmVGcmFtZSA9IHRoaXMucHJlcGFyZUZyYW1lQ3VzdG9tO1xyXG4gICAgfVxyXG5cclxuICAgIFZFQ1RPUl9SRVBMQVlTX0NVU1RPTSA9IHtcclxuICAgICAgICBcImltYWdlXCI6IFsoPGFueT5vbC5yZW5kZXIpLlJlcGxheVR5cGUuREVGQVVMVF0sXHJcbiAgICAgICAgXCJoeWJyaWRcIjogWyg8YW55Pm9sLnJlbmRlcikuUmVwbGF5VHlwZS5URVhULCAoPGFueT5vbC5yZW5kZXIpLlJlcGxheVR5cGUuSU1BR0UsICg8YW55Pm9sLnJlbmRlcikuUmVwbGF5VHlwZS5ERUZBVUxUXSxcclxuICAgICAgICBcInZlY3RvclwiOiAoPGFueT5vbCkucmVuZGVyLnJlcGxheS5PUkRFUlxyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgdGlsZUxheWVyUHJlcGFyZUZyYW1lQ3VzdG9tKGZyYW1lU3RhdGU6IGFueSwgbGF5ZXJTdGF0ZTogYW55KSB7XHJcbiAgICAgICAgbGV0IHBpeGVsUmF0aW8gPSBmcmFtZVN0YXRlLnBpeGVsUmF0aW87XHJcbiAgICAgICAgbGV0IHNpemUgPSBmcmFtZVN0YXRlLnNpemU7XHJcbiAgICAgICAgbGV0IHZpZXdTdGF0ZSA9IGZyYW1lU3RhdGUudmlld1N0YXRlO1xyXG4gICAgICAgIGxldCBwcm9qZWN0aW9uID0gdmlld1N0YXRlLnByb2plY3Rpb247XHJcbiAgICAgICAgbGV0IHZpZXdSZXNvbHV0aW9uID0gdmlld1N0YXRlLnJlc29sdXRpb247XHJcbiAgICAgICAgbGV0IHZpZXdDZW50ZXIgPSB2aWV3U3RhdGUuY2VudGVyO1xyXG5cclxuICAgICAgICBsZXQgdGlsZUxheWVyID0gdGhpcy5nZXRMYXllcigpO1xyXG4gICAgICAgIGxldCB0aWxlU291cmNlID0gLyoqIEB0eXBlIHtvbC5zb3VyY2UuVGlsZX0gKi8gKHRpbGVMYXllci5nZXRTb3VyY2UoKSk7XHJcbiAgICAgICAgbGV0IHNvdXJjZVJldmlzaW9uID0gdGlsZVNvdXJjZS5nZXRSZXZpc2lvbigpO1xyXG4gICAgICAgIGxldCB0aWxlR3JpZCA9IHRpbGVTb3VyY2UuZ2V0VGlsZUdyaWRGb3JQcm9qZWN0aW9uKHByb2plY3Rpb24pO1xyXG4gICAgICAgIGxldCB6ID0gdGlsZUdyaWQuZ2V0WkZvclJlc29sdXRpb24odmlld1Jlc29sdXRpb24sIHRoaXMuekRpcmVjdGlvbik7XHJcbiAgICAgICAgbGV0IHRpbGVSZXNvbHV0aW9uID0gdGlsZUdyaWQuZ2V0UmVzb2x1dGlvbih6KTtcclxuICAgICAgICBsZXQgb3ZlcnNhbXBsaW5nID0gTWF0aC5yb3VuZCh2aWV3UmVzb2x1dGlvbiAvIHRpbGVSZXNvbHV0aW9uKSB8fCAxO1xyXG4gICAgICAgIGxldCBleHRlbnQgPSBmcmFtZVN0YXRlLmV4dGVudDtcclxuXHJcbiAgICAgICAgaWYgKGxheWVyU3RhdGUuZXh0ZW50ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgZXh0ZW50ID0gb2wuZXh0ZW50LmdldEludGVyc2VjdGlvbihleHRlbnQsIGxheWVyU3RhdGUuZXh0ZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9sLmV4dGVudC5pc0VtcHR5KGV4dGVudCkpIHtcclxuICAgICAgICAgICAgLy8gUmV0dXJuIGZhbHNlIHRvIHByZXZlbnQgdGhlIHJlbmRlcmluZyBvZiB0aGUgbGF5ZXIuXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB0aWxlUmFuZ2UgPSB0aWxlR3JpZC5nZXRUaWxlUmFuZ2VGb3JFeHRlbnRBbmRaKGV4dGVudCwgeik7XHJcblxyXG4gICAgICAgIGxldCB4T2Zmc2V0ID0gKHRpbGVSYW5nZS5tYXhYIC0gdGlsZVJhbmdlLm1pblgpO1xyXG4gICAgICAgIGxldCB5T2Zmc2V0ID0gKHRpbGVSYW5nZS5tYXhZIC0gdGlsZVJhbmdlLm1pblkpO1xyXG4gICAgICAgIHhPZmZzZXQgPSB4T2Zmc2V0IDw9IDAgPyAxIDogeE9mZnNldCAqIDIgKyAzO1xyXG4gICAgICAgIHlPZmZzZXQgPSB5T2Zmc2V0IDw9IDAgPyAxIDogeU9mZnNldCAqIDIgKyAzO1xyXG4gICAgICAgIGxldCBjYWNoZVNpemUgPSB4T2Zmc2V0ICogeU9mZnNldDtcclxuICAgICAgICB0aWxlU291cmNlLnRpbGVDYWNoZS5oaWdoV2F0ZXJNYXJrID0gY2FjaGVTaXplIDw9IDE1ID8gMTUgOiBjYWNoZVNpemU7XHJcblxyXG4gICAgICAgIGxldCBpbWFnZUV4dGVudCA9IHRpbGVHcmlkLmdldFRpbGVSYW5nZUV4dGVudCh6LCB0aWxlUmFuZ2UpO1xyXG5cclxuICAgICAgICBsZXQgdGlsZVBpeGVsUmF0aW8gPSB0aWxlU291cmNlLmdldFRpbGVQaXhlbFJhdGlvKHBpeGVsUmF0aW8pO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAdHlwZSB7T2JqZWN0LjxudW1iZXIsIE9iamVjdC48c3RyaW5nLCBvbC5UaWxlPj59XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbGV0IHRpbGVzVG9EcmF3QnlaID0ge307XHJcbiAgICAgICAgdGlsZXNUb0RyYXdCeVpbel0gPSB7fTtcclxuXHJcbiAgICAgICAgbGV0IGZpbmRMb2FkZWRUaWxlcyA9IHRoaXMuY3JlYXRlTG9hZGVkVGlsZUZpbmRlcihcclxuICAgICAgICAgICAgdGlsZVNvdXJjZSwgcHJvamVjdGlvbiwgdGlsZXNUb0RyYXdCeVopO1xyXG5cclxuICAgICAgICBsZXQgdG1wRXh0ZW50ID0gdGhpcy50bXBFeHRlbnQ7XHJcbiAgICAgICAgbGV0IHRtcFRpbGVSYW5nZSA9IHRoaXMudG1wVGlsZVJhbmdlXztcclxuICAgICAgICBsZXQgbmV3VGlsZXMgPSBmYWxzZTtcclxuICAgICAgICBsZXQgdGlsZSwgeCwgeTtcclxuICAgICAgICBmb3IgKHggPSB0aWxlUmFuZ2UubWluWDsgeCA8PSB0aWxlUmFuZ2UubWF4WDsgKyt4KSB7XHJcbiAgICAgICAgICAgIGZvciAoeSA9IHRpbGVSYW5nZS5taW5ZOyB5IDw9IHRpbGVSYW5nZS5tYXhZOyArK3kpIHtcclxuICAgICAgICAgICAgICAgIHRpbGUgPSB0aWxlU291cmNlLmdldFRpbGUoeiwgeCwgeSwgcGl4ZWxSYXRpbywgcHJvamVjdGlvbik7XHJcbiAgICAgICAgICAgICAgICBpZiAodGlsZS5nZXRTdGF0ZSgpID09PSAoPGFueT5vbCkuVGlsZVN0YXRlLkVSUk9SKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aWxlTGF5ZXIuZ2V0VXNlSW50ZXJpbVRpbGVzT25FcnJvcigpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdoZW4gdXNlSW50ZXJpbVRpbGVzT25FcnJvciBpcyBmYWxzZSwgd2UgY29uc2lkZXIgdGhlIGVycm9yIHRpbGUgYXMgbG9hZGVkLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aWxlLnNldFN0YXRlKCg8YW55Pm9sKS5UaWxlU3RhdGUuTE9BREVEKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRpbGVMYXllci5nZXRQcmVsb2FkKCkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFByZWxvYWRlZCB0aWxlcyBmb3IgbG93ZXIgcmVzb2x1dGlvbnMgbWlnaHQgaGF2ZSBmaW5pc2hlZCBsb2FkaW5nLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdUaWxlcyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzRHJhd2FibGVUaWxlXyh0aWxlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbGUgPSB0aWxlLmdldEludGVyaW1UaWxlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0RyYXdhYmxlVGlsZV8odGlsZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdWlkID0gKDxhbnk+b2wpLmdldFVpZCh0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGlsZS5nZXRTdGF0ZSgpID09PSAoPGFueT5vbCkuVGlsZVN0YXRlLkxPQURFRCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aWxlc1RvRHJhd0J5Wlt6XVt0aWxlLnRpbGVDb29yZC50b1N0cmluZygpXSA9IHRpbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpblRyYW5zaXRpb24gPSB0aWxlLmluVHJhbnNpdGlvbih1aWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW5ld1RpbGVzICYmIChpblRyYW5zaXRpb24gfHwgdGhpcy5yZW5kZXJlZFRpbGVzLmluZGV4T2YodGlsZSkgPT09IC0xKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VGlsZXMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aWxlLmdldEFscGhhKHVpZCwgZnJhbWVTdGF0ZS50aW1lKSA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBkb24ndCBsb29rIGZvciBhbHQgdGlsZXMgaWYgYWxwaGEgaXMgMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGNoaWxkVGlsZVJhbmdlID0gdGlsZUdyaWQuZ2V0VGlsZUNvb3JkQ2hpbGRUaWxlUmFuZ2UoXHJcbiAgICAgICAgICAgICAgICAgICAgdGlsZS50aWxlQ29vcmQsIHRtcFRpbGVSYW5nZSwgdG1wRXh0ZW50KTtcclxuICAgICAgICAgICAgICAgIGxldCBjb3ZlcmVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGRUaWxlUmFuZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb3ZlcmVkID0gZmluZExvYWRlZFRpbGVzKHogKyAxLCBjaGlsZFRpbGVSYW5nZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIWNvdmVyZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aWxlR3JpZC5mb3JFYWNoVGlsZUNvb3JkUGFyZW50VGlsZVJhbmdlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aWxlLnRpbGVDb29yZCwgZmluZExvYWRlZFRpbGVzLCBudWxsLCB0bXBUaWxlUmFuZ2UsIHRtcEV4dGVudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcmVuZGVyZWRSZXNvbHV0aW9uID0gdGlsZVJlc29sdXRpb24gKiBwaXhlbFJhdGlvIC8gdGlsZVBpeGVsUmF0aW8gKiBvdmVyc2FtcGxpbmc7XHJcbiAgICAgICAgbGV0IGhpbnRzID0gZnJhbWVTdGF0ZS52aWV3SGludHM7XHJcbiAgICAgICAgbGV0IGFuaW1hdGluZ09ySW50ZXJhY3RpbmcgPSBoaW50c1soPGFueT5vbCkuVmlld0hpbnQuQU5JTUFUSU5HXSB8fCBoaW50c1soPGFueT5vbCkuVmlld0hpbnQuSU5URVJBQ1RJTkddO1xyXG4gICAgICAgIGlmICghKHRoaXMucmVuZGVyZWRSZXNvbHV0aW9uICYmIERhdGUubm93KCkgLSBmcmFtZVN0YXRlLnRpbWUgPiAxNiAmJiBhbmltYXRpbmdPckludGVyYWN0aW5nKSAmJiAoXHJcbiAgICAgICAgICAgIG5ld1RpbGVzIHx8XHJcbiAgICAgICAgICAgICEodGhpcy5yZW5kZXJlZEV4dGVudF8gJiYgb2wuZXh0ZW50LmNvbnRhaW5zRXh0ZW50KHRoaXMucmVuZGVyZWRFeHRlbnRfLCBleHRlbnQpKSB8fFxyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVkUmV2aXNpb24gIT09IHNvdXJjZVJldmlzaW9uIHx8XHJcbiAgICAgICAgICAgIG92ZXJzYW1wbGluZyAhPT0gdGhpcy5vdmVyc2FtcGxpbmdfIHx8XHJcbiAgICAgICAgICAgICFhbmltYXRpbmdPckludGVyYWN0aW5nICYmIHJlbmRlcmVkUmVzb2x1dGlvbiAhPT0gdGhpcy5yZW5kZXJlZFJlc29sdXRpb25cclxuICAgICAgICApKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgY29udGV4dCA9IHRoaXMuY29udGV4dDtcclxuICAgICAgICAgICAgaWYgKGNvbnRleHQpIHtcclxuICAgICAgICAgICAgICAgIGxldCB0aWxlUGl4ZWxTaXplID0gdGlsZVNvdXJjZS5nZXRUaWxlUGl4ZWxTaXplKHosIHBpeGVsUmF0aW8sIHByb2plY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgbGV0IHdpZHRoID0gTWF0aC5yb3VuZCh0aWxlUmFuZ2UuZ2V0V2lkdGgoKSAqIHRpbGVQaXhlbFNpemVbMF0gLyBvdmVyc2FtcGxpbmcpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGhlaWdodCA9IE1hdGgucm91bmQodGlsZVJhbmdlLmdldEhlaWdodCgpICogdGlsZVBpeGVsU2l6ZVsxXSAvIG92ZXJzYW1wbGluZyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2FudmFzID0gY29udGV4dC5jYW52YXM7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FudmFzLndpZHRoICE9PSB3aWR0aCB8fCBjYW52YXMuaGVpZ2h0ICE9PSBoZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm92ZXJzYW1wbGluZ18gPSBvdmVyc2FtcGxpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FudmFzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucmVuZGVyZWRFeHRlbnRfICYmICFvbC5leHRlbnQuZXF1YWxzKGltYWdlRXh0ZW50LCB0aGlzLnJlbmRlcmVkRXh0ZW50XykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJzYW1wbGluZyA9IHRoaXMub3ZlcnNhbXBsaW5nXztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlZFRpbGVzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgICAgIC8qKiBAdHlwZSB7QXJyYXkuPG51bWJlcj59ICovXHJcbiAgICAgICAgICAgIGxldCB6cyA9IE9iamVjdC5rZXlzKHRpbGVzVG9EcmF3QnlaKS5tYXAoTnVtYmVyKTtcclxuICAgICAgICAgICAgenMuc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGEgPT09IHopIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYiA9PT0geikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEgPiBiID8gMSA6IGEgPCBiID8gLTEgOiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRSZXNvbHV0aW9uLCBjdXJyZW50U2NhbGUsIGN1cnJlbnRUaWxlUGl4ZWxTaXplLCBjdXJyZW50WiwgaSwgaWk7XHJcbiAgICAgICAgICAgIGxldCB0aWxlRXh0ZW50LCB0aWxlR3V0dGVyLCB0aWxlc1RvRHJhdywgdywgaDtcclxuICAgICAgICAgICAgZm9yIChpID0gMCwgaWkgPSB6cy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50WiA9IHpzW2ldO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFRpbGVQaXhlbFNpemUgPSB0aWxlU291cmNlLmdldFRpbGVQaXhlbFNpemUoY3VycmVudFosIHBpeGVsUmF0aW8sIHByb2plY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFJlc29sdXRpb24gPSB0aWxlR3JpZC5nZXRSZXNvbHV0aW9uKGN1cnJlbnRaKTtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRTY2FsZSA9IGN1cnJlbnRSZXNvbHV0aW9uIC8gdGlsZVJlc29sdXRpb247XHJcbiAgICAgICAgICAgICAgICB0aWxlR3V0dGVyID0gdGlsZVBpeGVsUmF0aW8gKiB0aWxlU291cmNlLmdldEd1dHRlcihwcm9qZWN0aW9uKTtcclxuICAgICAgICAgICAgICAgIHRpbGVzVG9EcmF3ID0gdGlsZXNUb0RyYXdCeVpbY3VycmVudFpdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgdGlsZUNvb3JkS2V5IGluIHRpbGVzVG9EcmF3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGlsZSA9IHRpbGVzVG9EcmF3W3RpbGVDb29yZEtleV07XHJcbiAgICAgICAgICAgICAgICAgICAgdGlsZUV4dGVudCA9IHRpbGVHcmlkLmdldFRpbGVDb29yZEV4dGVudCh0aWxlLmdldFRpbGVDb29yZCgpLCB0bXBFeHRlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHggPSAodGlsZUV4dGVudFswXSAtIGltYWdlRXh0ZW50WzBdKSAvIHRpbGVSZXNvbHV0aW9uICogdGlsZVBpeGVsUmF0aW8gLyBvdmVyc2FtcGxpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgeSA9IChpbWFnZUV4dGVudFszXSAtIHRpbGVFeHRlbnRbM10pIC8gdGlsZVJlc29sdXRpb24gKiB0aWxlUGl4ZWxSYXRpbyAvIG92ZXJzYW1wbGluZztcclxuICAgICAgICAgICAgICAgICAgICB3ID0gY3VycmVudFRpbGVQaXhlbFNpemVbMF0gKiBjdXJyZW50U2NhbGUgLyBvdmVyc2FtcGxpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgaCA9IGN1cnJlbnRUaWxlUGl4ZWxTaXplWzFdICogY3VycmVudFNjYWxlIC8gb3ZlcnNhbXBsaW5nO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd1RpbGVJbWFnZSh0aWxlLCBmcmFtZVN0YXRlLCBsYXllclN0YXRlLCB4LCB5LCB3LCBoLCB0aWxlR3V0dGVyLCB6ID09PSBjdXJyZW50Wik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlZFRpbGVzLnB1c2godGlsZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZWRSZXZpc2lvbiA9IHNvdXJjZVJldmlzaW9uO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVkUmVzb2x1dGlvbiA9IHRpbGVSZXNvbHV0aW9uICogcGl4ZWxSYXRpbyAvIHRpbGVQaXhlbFJhdGlvICogb3ZlcnNhbXBsaW5nO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVkRXh0ZW50XyA9IGltYWdlRXh0ZW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHNjYWxlID0gdGhpcy5yZW5kZXJlZFJlc29sdXRpb24gLyB2aWV3UmVzb2x1dGlvbjtcclxuICAgICAgICBsZXQgdHJhbnNmb3JtID0gKDxhbnk+b2wpLnRyYW5zZm9ybS5jb21wb3NlKHRoaXMuaW1hZ2VUcmFuc2Zvcm1fLCBwaXhlbFJhdGlvICogc2l6ZVswXSAvIDIsIHBpeGVsUmF0aW8gKiBzaXplWzFdIC8gMiwgc2NhbGUsIHNjYWxlLCAwLCAodGhpcy5yZW5kZXJlZEV4dGVudF9bMF0gLSB2aWV3Q2VudGVyWzBdKSAvIHRoaXMucmVuZGVyZWRSZXNvbHV0aW9uICogcGl4ZWxSYXRpbywgKHZpZXdDZW50ZXJbMV0gLSB0aGlzLnJlbmRlcmVkRXh0ZW50X1szXSkgLyB0aGlzLnJlbmRlcmVkUmVzb2x1dGlvbiAqIHBpeGVsUmF0aW8pO1xyXG4gICAgICAgICg8YW55Pm9sKS50cmFuc2Zvcm0uY29tcG9zZSh0aGlzLmNvb3JkaW5hdGVUb0NhbnZhc1BpeGVsVHJhbnNmb3JtLCBwaXhlbFJhdGlvICogc2l6ZVswXSAvIDIgLSB0cmFuc2Zvcm1bNF0sIHBpeGVsUmF0aW8gKiBzaXplWzFdIC8gMiAtIHRyYW5zZm9ybVs1XSwgcGl4ZWxSYXRpbyAvIHZpZXdSZXNvbHV0aW9uLCAtcGl4ZWxSYXRpbyAvIHZpZXdSZXNvbHV0aW9uLCAwLCAtdmlld0NlbnRlclswXSwgLXZpZXdDZW50ZXJbMV0pO1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZVVzZWRUaWxlcyhmcmFtZVN0YXRlLnVzZWRUaWxlcywgdGlsZVNvdXJjZSwgeiwgdGlsZVJhbmdlKTtcclxuICAgICAgICB0aGlzLm1hbmFnZVRpbGVQeXJhbWlkKGZyYW1lU3RhdGUsIHRpbGVTb3VyY2UsIHRpbGVHcmlkLCBwaXhlbFJhdGlvLCBwcm9qZWN0aW9uLCBleHRlbnQsIHosIHRpbGVMYXllci5nZXRQcmVsb2FkKCkpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVFeHBpcmVDYWNoZShmcmFtZVN0YXRlLCB0aWxlU291cmNlKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUxvZ29zKGZyYW1lU3RhdGUsIHRpbGVTb3VyY2UpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJlZFRpbGVzLmxlbmd0aCA+IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHByZXBhcmVGcmFtZUN1c3RvbShmcmFtZVN0YXRlOiBhbnksIGxheWVyU3RhdGU6IGFueSkge1xyXG4gICAgICAgIGxldCBsYXllciA9IHRoaXMuZ2V0TGF5ZXIoKTtcclxuICAgICAgICBsZXQgbGF5ZXJSZXZpc2lvbiA9IGxheWVyLmdldFJldmlzaW9uKCk7XHJcbiAgICAgICAgaWYgKHRoaXMucmVuZGVyZWRMYXllclJldmlzaW9uXyAhPT0gbGF5ZXJSZXZpc2lvbikge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVkVGlsZXMubGVuZ3RoID0gMDtcclxuICAgICAgICAgICAgbGV0IHJlbmRlck1vZGUgPSBsYXllci5nZXRSZW5kZXJNb2RlKCk7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5jb250ZXh0ICYmIHJlbmRlck1vZGUgIT09ICg8YW55Pm9sLmxheWVyKS5WZWN0b3JUaWxlUmVuZGVyVHlwZS5WRUNUT1IpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dCA9ICg8YW55Pm9sKS5kb20uY3JlYXRlQ2FudmFzQ29udGV4dDJEKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuY29udGV4dCAmJiByZW5kZXJNb2RlID09PSAoPGFueT5vbC5sYXllcikuVmVjdG9yVGlsZVJlbmRlclR5cGUuVkVDVE9SKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmVuZGVyZWRMYXllclJldmlzaW9uXyA9IGxheWVyUmV2aXNpb247XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGlsZUxheWVyUHJlcGFyZUZyYW1lQ3VzdG9tLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBvc3RDb21wb3NlKGNvbnRleHQ6IGFueSwgZnJhbWVTdGF0ZTogYW55LCBsYXllclN0YXRlOiBhbnkpIHtcclxuICAgICAgICBsZXQgbGF5ZXIgPSB0aGlzLmdldExheWVyKCk7XHJcbiAgICAgICAgbGV0IGRlY2x1dHRlclJlcGxheXMgPSBsYXllci5nZXREZWNsdXR0ZXIoKSA/IHt9IDogbnVsbDtcclxuICAgICAgICBsZXQgc291cmNlID0gLyoqIEB0eXBlIHtvbC5zb3VyY2UuVmVjdG9yVGlsZX0gKi8gKGxheWVyLmdldFNvdXJjZSgpKTtcclxuICAgICAgICBsZXQgcmVuZGVyTW9kZSA9IGxheWVyLmdldFJlbmRlck1vZGUoKTtcclxuICAgICAgICBsZXQgcmVwbGF5VHlwZXMgPSB0aGlzLlZFQ1RPUl9SRVBMQVlTX0NVU1RPTVtyZW5kZXJNb2RlXTtcclxuICAgICAgICBsZXQgcGl4ZWxSYXRpbyA9IGZyYW1lU3RhdGUucGl4ZWxSYXRpbztcclxuICAgICAgICBsZXQgcm90YXRpb24gPSBmcmFtZVN0YXRlLnZpZXdTdGF0ZS5yb3RhdGlvbjtcclxuICAgICAgICBsZXQgc2l6ZSA9IGZyYW1lU3RhdGUuc2l6ZTtcclxuICAgICAgICBsZXQgb2Zmc2V0WCwgb2Zmc2V0WTtcclxuICAgICAgICBpZiAocm90YXRpb24pIHtcclxuICAgICAgICAgICAgb2Zmc2V0WCA9IE1hdGgucm91bmQocGl4ZWxSYXRpbyAqIHNpemVbMF0gLyAyKTtcclxuICAgICAgICAgICAgb2Zmc2V0WSA9IE1hdGgucm91bmQocGl4ZWxSYXRpbyAqIHNpemVbMV0gLyAyKTtcclxuICAgICAgICAgICAgKDxhbnk+b2wucmVuZGVyLmNhbnZhcykucm90YXRlQXRPZmZzZXQoY29udGV4dCwgLXJvdGF0aW9uLCBvZmZzZXRYLCBvZmZzZXRZKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRlY2x1dHRlclJlcGxheXMpIHtcclxuICAgICAgICAgICAgdGhpcy5kZWNsdXR0ZXJUcmVlXy5jbGVhcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdGlsZXMgPSB0aGlzLnJlbmRlcmVkVGlsZXM7XHJcbiAgICAgICAgbGV0IHRpbGVHcmlkID0gc291cmNlLmdldFRpbGVHcmlkRm9yUHJvamVjdGlvbihmcmFtZVN0YXRlLnZpZXdTdGF0ZS5wcm9qZWN0aW9uKTtcclxuICAgICAgICBsZXQgY2xpcHMgPSBbXTtcclxuICAgICAgICBsZXQgenMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gdGlsZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcclxuICAgICAgICAgICAgbGV0IHRpbGUgPSAvKiogQHR5cGUge29sLlZlY3RvckltYWdlVGlsZX0gKi8gKHRpbGVzW2ldKTtcclxuICAgICAgICAgICAgaWYgKHRpbGUuZ2V0U3RhdGUoKSA9PT0gKDxhbnk+b2wpLlRpbGVTdGF0ZS5BQk9SVCkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHRpbGVDb29yZCA9IHRpbGUudGlsZUNvb3JkO1xyXG4gICAgICAgICAgICBsZXQgd29ybGRPZmZzZXQgPSB0aWxlR3JpZC5nZXRUaWxlQ29vcmRFeHRlbnQodGlsZUNvb3JkKVswXSAtXHJcbiAgICAgICAgICAgICAgICB0aWxlR3JpZC5nZXRUaWxlQ29vcmRFeHRlbnQodGlsZS53cmFwcGVkVGlsZUNvb3JkKVswXTtcclxuICAgICAgICAgICAgbGV0IHRyYW5zZm9ybSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgZm9yIChsZXQgdCA9IDAsIHR0ID0gdGlsZS50aWxlS2V5cy5sZW5ndGg7IHQgPCB0dDsgKyt0KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc291cmNlVGlsZSA9IHRpbGUuZ2V0VGlsZSh0aWxlLnRpbGVLZXlzW3RdKTtcclxuICAgICAgICAgICAgICAgIGlmIChzb3VyY2VUaWxlLmdldFN0YXRlKCkgPT09ICg8YW55Pm9sKS5UaWxlU3RhdGUuRVJST1IpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxldCByZXBsYXlHcm91cCA9IHNvdXJjZVRpbGUuZ2V0UmVwbGF5R3JvdXAobGF5ZXIsIHRpbGVDb29yZC50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZW5kZXJNb2RlICE9PSAoPGFueT5vbC5sYXllcikuVmVjdG9yVGlsZVJlbmRlclR5cGUuVkVDVE9SICYmICFyZXBsYXlHcm91cC5oYXNSZXBsYXlzKHJlcGxheVR5cGVzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCF0cmFuc2Zvcm0pIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0gPSB0aGlzLmdldFRyYW5zZm9ybShmcmFtZVN0YXRlLCB3b3JsZE9mZnNldCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudFogPSBzb3VyY2VUaWxlLnRpbGVDb29yZFswXTtcclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50Q2xpcCA9IHJlcGxheUdyb3VwLmdldENsaXBDb29yZHModHJhbnNmb3JtKTtcclxuICAgICAgICAgICAgICAgIGNvbnRleHQuc2F2ZSgpO1xyXG4gICAgICAgICAgICAgICAgY29udGV4dC5nbG9iYWxBbHBoYSA9IGxheWVyU3RhdGUub3BhY2l0eTtcclxuICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBhIGNsaXAgbWFzayBmb3IgcmVnaW9ucyBpbiB0aGlzIGxvdyByZXNvbHV0aW9uIHRpbGUgdGhhdCBhcmVcclxuICAgICAgICAgICAgICAgIC8vIGFscmVhZHkgZmlsbGVkIGJ5IGEgaGlnaGVyIHJlc29sdXRpb24gdGlsZVxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDAsIGpqID0gY2xpcHMubGVuZ3RoOyBqIDwgamo7ICsraikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjbGlwID0gY2xpcHNbal07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRaIDwgenNbal0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY291bnRlci1jbG9ja3dpc2UgKG91dGVyIHJpbmcpIGZvciBjdXJyZW50IHRpbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5tb3ZlVG8oY3VycmVudENsaXBbMF0sIGN1cnJlbnRDbGlwWzFdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5saW5lVG8oY3VycmVudENsaXBbMl0sIGN1cnJlbnRDbGlwWzNdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5saW5lVG8oY3VycmVudENsaXBbNF0sIGN1cnJlbnRDbGlwWzVdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5saW5lVG8oY3VycmVudENsaXBbNl0sIGN1cnJlbnRDbGlwWzddKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2xvY2t3aXNlIChpbm5lciByaW5nKSBmb3IgaGlnaGVyIHJlc29sdXRpb24gdGlsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0Lm1vdmVUbyhjbGlwWzZdLCBjbGlwWzddKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5saW5lVG8oY2xpcFs0XSwgY2xpcFs1XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQubGluZVRvKGNsaXBbMl0sIGNsaXBbM10pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmxpbmVUbyhjbGlwWzBdLCBjbGlwWzFdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5jbGlwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmVwbGF5R3JvdXAucmVwbGF5KGNvbnRleHQsIHRyYW5zZm9ybSwgcm90YXRpb24sIHt9LCByZXBsYXlUeXBlcywgZGVjbHV0dGVyUmVwbGF5cyk7XHJcbiAgICAgICAgICAgICAgICBjb250ZXh0LnJlc3RvcmUoKTtcclxuICAgICAgICAgICAgICAgIGNsaXBzLnB1c2goY3VycmVudENsaXApO1xyXG4gICAgICAgICAgICAgICAgenMucHVzaChjdXJyZW50Wik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRlY2x1dHRlclJlcGxheXMpIHtcclxuICAgICAgICAgICAgKDxhbnk+b2wucmVuZGVyLmNhbnZhcykuUmVwbGF5R3JvdXAucmVwbGF5RGVjbHV0dGVyKGRlY2x1dHRlclJlcGxheXMsIGNvbnRleHQsIHJvdGF0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJvdGF0aW9uKSB7XHJcbiAgICAgICAgICAgICg8YW55Pm9sLnJlbmRlci5jYW52YXMpLnJvdGF0ZUF0T2Zmc2V0KGNvbnRleHQsIHJvdGF0aW9uLFxyXG4gICAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqLyhvZmZzZXRYKSwgLyoqIEB0eXBlIHtudW1iZXJ9ICovKG9mZnNldFkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgKDxhbnk+b2wpLnJlbmRlcmVyLmNhbnZhcy5UaWxlTGF5ZXIucHJvdG90eXBlLnBvc3RDb21wb3NlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNyZWF0ZVJlcGxheUdyb3VwXyh0aWxlOiBvbC5WZWN0b3JUaWxlLCBmcmFtZVN0YXRlOiBvbHguRnJhbWVTdGF0ZSkge1xyXG4gICAgICAgIGxldCBsYXllciA9IHRoaXMuZ2V0TGF5ZXIoKTtcclxuICAgICAgICBsZXQgcGl4ZWxSYXRpbyA9IGZyYW1lU3RhdGUucGl4ZWxSYXRpbztcclxuICAgICAgICBsZXQgcHJvamVjdGlvbiA9IGZyYW1lU3RhdGUudmlld1N0YXRlLnByb2plY3Rpb247XHJcbiAgICAgICAgbGV0IHJldmlzaW9uID0gbGF5ZXIuZ2V0UmV2aXNpb24oKTtcclxuICAgICAgICBsZXQgcmVuZGVyT3JkZXIgPSAvKiogQHR5cGUge29sLlJlbmRlck9yZGVyRnVuY3Rpb259ICovXHJcbiAgICAgICAgICAgIChsYXllci5nZXRSZW5kZXJPcmRlcigpKSB8fCBudWxsO1xyXG5cclxuICAgICAgICBsZXQgcmVwbGF5U3RhdGUgPSAoPGFueT50aWxlKS5nZXRSZXBsYXlTdGF0ZShsYXllcik7XHJcbiAgICAgICAgaWYgKCFyZXBsYXlTdGF0ZS5kaXJ0eSAmJiByZXBsYXlTdGF0ZS5yZW5kZXJlZFJldmlzaW9uID09PSByZXZpc2lvbiAmJlxyXG4gICAgICAgICAgICByZXBsYXlTdGF0ZS5yZW5kZXJlZFJlbmRlck9yZGVyID09PSByZW5kZXJPcmRlcikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgc291cmNlID0gLyoqIEB0eXBlIHtvbC5zb3VyY2UuVmVjdG9yVGlsZX0gKi8gKGxheWVyLmdldFNvdXJjZSgpKTtcclxuICAgICAgICBsZXQgc291cmNlVGlsZUdyaWQgPSBzb3VyY2UuZ2V0VGlsZUdyaWQoKTtcclxuICAgICAgICBsZXQgdGlsZUdyaWQgPSBzb3VyY2UuZ2V0VGlsZUdyaWRGb3JQcm9qZWN0aW9uKHByb2plY3Rpb24pO1xyXG4gICAgICAgIGxldCByZXNvbHV0aW9uID0gdGlsZUdyaWQuZ2V0UmVzb2x1dGlvbigoPGFueT50aWxlKS50aWxlQ29vcmRbMF0pO1xyXG4gICAgICAgIGxldCB0aWxlRXh0ZW50ID0gdGlsZUdyaWQuZ2V0VGlsZUNvb3JkRXh0ZW50KCg8YW55PnRpbGUpLndyYXBwZWRUaWxlQ29vcmQpO1xyXG5cclxuICAgICAgICBsZXQgekluZGV4S2V5cyA9IHt9O1xyXG4gICAgICAgIGZvciAobGV0IHQgPSAwLCB0dCA9ICg8YW55PnRpbGUpLnRpbGVLZXlzLmxlbmd0aDsgdCA8IHR0OyArK3QpIHtcclxuICAgICAgICAgICAgbGV0IHNvdXJjZVRpbGUgPSAoPGFueT50aWxlKS5nZXRUaWxlKCg8YW55PnRpbGUpLnRpbGVLZXlzW3RdKTtcclxuICAgICAgICAgICAgbGV0IG5ld0dyaWQgPSBuZXcgR3JpZCg4KTtcclxuICAgICAgICAgICAgaWYgKHNvdXJjZVRpbGUuZ2V0U3RhdGUoKSA9PT0gKDxhbnk+b2wpLlRpbGVTdGF0ZS5FUlJPUikge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBzb3VyY2VUaWxlQ29vcmQgPSBzb3VyY2VUaWxlLnRpbGVDb29yZDtcclxuICAgICAgICAgICAgbGV0IHNvdXJjZVRpbGVFeHRlbnQgPSBzb3VyY2VUaWxlR3JpZC5nZXRUaWxlQ29vcmRFeHRlbnQoc291cmNlVGlsZUNvb3JkKTtcclxuICAgICAgICAgICAgbGV0IHNoYXJlZEV4dGVudCA9IG9sLmV4dGVudC5nZXRJbnRlcnNlY3Rpb24odGlsZUV4dGVudCwgc291cmNlVGlsZUV4dGVudCk7XHJcbiAgICAgICAgICAgIGxldCBidWZmZXJlZEV4dGVudCA9IG9sLmV4dGVudC5lcXVhbHMoc291cmNlVGlsZUV4dGVudCwgc2hhcmVkRXh0ZW50KSA/IG51bGwgOlxyXG4gICAgICAgICAgICAgICAgb2wuZXh0ZW50LmJ1ZmZlcihzaGFyZWRFeHRlbnQsIGxheWVyLmdldFJlbmRlckJ1ZmZlcigpICogcmVzb2x1dGlvbik7XHJcbiAgICAgICAgICAgIGxldCB0aWxlUHJvamVjdGlvbiA9IHNvdXJjZVRpbGUuZ2V0UHJvamVjdGlvbigpO1xyXG4gICAgICAgICAgICBsZXQgcmVwcm9qZWN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmICghb2wucHJvai5lcXVpdmFsZW50KHByb2plY3Rpb24sIHRpbGVQcm9qZWN0aW9uKSkge1xyXG4gICAgICAgICAgICAgICAgcmVwcm9qZWN0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHNvdXJjZVRpbGUuc2V0UHJvamVjdGlvbihwcm9qZWN0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXBsYXlTdGF0ZS5kaXJ0eSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBsZXQgcmVwbGF5R3JvdXAgPSBuZXcgUmVwbGF5R3JvdXBDdXN0b20oMCwgc2hhcmVkRXh0ZW50LCByZXNvbHV0aW9uLCBwaXhlbFJhdGlvLCBzb3VyY2UuZ2V0T3ZlcmxhcHMoKSwgdGhpcy5kZWNsdXR0ZXJUcmVlXywgbGF5ZXIuZ2V0UmVuZGVyQnVmZmVyKCkpO1xyXG4gICAgICAgICAgICBsZXQgc3F1YXJlZFRvbGVyYW5jZSA9ICg8YW55Pm9sKS5yZW5kZXJlci52ZWN0b3IuZ2V0U3F1YXJlZFRvbGVyYW5jZShyZXNvbHV0aW9uLCBwaXhlbFJhdGlvKTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge29sLkZlYXR1cmV8b2wucmVuZGVyLkZlYXR1cmV9IGZlYXR1cmUgRmVhdHVyZS5cclxuICAgICAgICAgICAgICogQHRoaXMge29sLnJlbmRlcmVyLmNhbnZhcy5WZWN0b3JUaWxlTGF5ZXJ9XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBsZXQgcmVuZGVyRmVhdHVyZSA9IGZ1bmN0aW9uIChmZWF0dXJlLCBnZW9TdHlsZXMsIG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIGxldCBzdHlsZXM7XHJcbiAgICAgICAgICAgICAgICBpZiAoZ2VvU3R5bGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdlb1N0eWxlcyAmJiBnZW9TdHlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgaWkgPSBnZW9TdHlsZXMubGVuZ3RoOyBpIDwgaWk7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdlb1N0eWxlc1tpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvbDRTdHlsZXMgPSBnZW9TdHlsZXNbaV0uZ2V0U3R5bGVzKGZlYXR1cmUsIHJlc29sdXRpb24sIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdHlsZXMgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoc3R5bGVzLCBvbDRTdHlsZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0eWxlRnVuY3Rpb24gPSBmZWF0dXJlLmdldFN0eWxlRnVuY3Rpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3R5bGVGdW5jdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXMgPSBzdHlsZUZ1bmN0aW9uLmNhbGwoLyoqIEB0eXBlIHtvbC5GZWF0dXJlfSAqLyhmZWF0dXJlKSwgcmVzb2x1dGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVGdW5jdGlvbiA9IGxheWVyLmdldFN0eWxlRnVuY3Rpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0eWxlRnVuY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcyA9IHN0eWxlRnVuY3Rpb24oZmVhdHVyZSwgcmVzb2x1dGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHN0eWxlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkaXJ0eSA9IHRoaXMucmVuZGVyRmVhdHVyZShmZWF0dXJlLCBzcXVhcmVkVG9sZXJhbmNlLCBzdHlsZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxheUdyb3VwKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpcnR5XyA9IHRoaXMuZGlydHlfIHx8IGRpcnR5O1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcGxheVN0YXRlLmRpcnR5ID0gcmVwbGF5U3RhdGUuZGlydHkgfHwgZGlydHk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBsZXQgaW5zdHJ1Y3RzID0gc291cmNlVGlsZS5nZXRSZW5kZXJGZWF0dXJlSW5zdHJ1Y3RzKCk7XHJcbiAgICAgICAgICAgIGlmIChpbnN0cnVjdHMgJiYgaW5zdHJ1Y3RzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIC8vIGxldCBsYXN0R2VvU3R5bGVJZDtcclxuICAgICAgICAgICAgICAgIC8vIGxldCBmbGF0Q29vcmRpbmF0ZXM7XHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgZW5kcztcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5zdHJ1Y3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZlYXR1cmUgPSBpbnN0cnVjdHNbaV1bMF07XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbGV0IGdlb3N0eWxlID0gaW5zdHJ1Y3RzW2ldWzFdO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIChnZW9zdHlsZS5pZCA9PT0gbGFzdEdlb1N0eWxlSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKGdlb3N0eWxlLmlkICE9PSBsYXN0R2VvU3R5bGVJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBsZXQgdHlwZSA9IGZlYXR1cmUuZ2V0VHlwZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNhc2UgKDxhbnk+b2wpLmdlb20uR2VvbWV0cnkuUE9JTlQ6XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdHlwZSA9ICg8YW55Pm9sKS5nZW9tLkdlb21ldHJ5Lk1VTFRJX1BPSU5UO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgY2FzZSAoPGFueT5vbCkuZ2VvbS5HZW9tZXRyeS5MSU5FX1NUUklORzpcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB0eXBlID0gKDxhbnk+b2wpLmdlb20uR2VvbWV0cnkuTVVMVElfTElORV9TVFJJTkc7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIC8vIE11bHRpUG9seWdvbiBub3QgcmVsZXZhbnQgZm9yIHJlbmRlcmluZyAtIHdpbmRpbmcgb3JkZXIgZGV0ZXJtaW5lc1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIC8vIG91dGVyIHJpbmdzIG9mIHBvbHlnb25zLlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZlYXR1cmVbXCJwcm9qZWN0ZWRcIl0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVwcm9qZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGlsZVByb2plY3Rpb24uZ2V0VW5pdHMoKSA9PT0gKDxhbnk+b2wucHJvaikuVW5pdHMuVElMRV9QSVhFTFMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBwcm9qZWN0ZWQgdGlsZSBleHRlbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWxlUHJvamVjdGlvbi5zZXRXb3JsZEV4dGVudChzb3VyY2VUaWxlRXh0ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aWxlIGV4dGVudCBpbiB0aWxlIHBpeGVsIHNwYWNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlsZVByb2plY3Rpb24uc2V0RXh0ZW50KHNvdXJjZVRpbGUuZ2V0RXh0ZW50KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVhdHVyZS5nZXRHZW9tZXRyeSgpLnRyYW5zZm9ybSh0aWxlUHJvamVjdGlvbiwgcHJvamVjdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZWF0dXJlLmV4dGVudF8gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVhdHVyZS5nZXRFeHRlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmZWF0dXJlW1wicHJvamVjdGVkXCJdID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gLy8gdGhlIGRyYXdpbmcgZXh0ZW50IGZpbHRlciBoYXMgYmVlbiBpbXBsZW1lbnRlZCBpbiB0aGUgTVZUIFJlYWRGZWF0dXJlLiBCdXQgd2l0aG91dCBsYXllci5yZW5kZXJCdWZmZXIgbG9naWNcclxuICAgICAgICAgICAgICAgICAgICAvLyBpZiAoIWJ1ZmZlcmVkRXh0ZW50IHx8IG9sLmV4dGVudC5pbnRlcnNlY3RzKGJ1ZmZlcmVkRXh0ZW50LCBmZWF0dXJlLmdldEdlb21ldHJ5KCkuZ2V0RXh0ZW50KCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyRmVhdHVyZS5jYWxsKHRoaXMsIGZlYXR1cmUsIFtpbnN0cnVjdHNbaV1bMV1dLCB7IGdyaWQ6IG5ld0dyaWQsIGZyYW1lU3RhdGU6IGZyYW1lU3RhdGUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIC8vIGl0IHdpbGwgY2xlYXIgdGhlIGNhY2hlLCBidXQgc29tZSB0aWxlIHdpbGwgYmUgcmVsb2FkIHRoZW4gdGhlIGluc3RydWN0cyBpcyBlbXB0eS5cclxuICAgICAgICAgICAgICAgIC8vIGlmIChyZXNvbHV0aW9uIDw9IDMwNS43NDgxMTMxNDA3MDUpIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBpbnN0cnVjdHMubGVuZ3RoID0gMDtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmVwbGF5R3JvdXAuZmluaXNoKCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHIgaW4gcmVwbGF5R3JvdXAuZ2V0UmVwbGF5cygpKSB7XHJcbiAgICAgICAgICAgICAgICB6SW5kZXhLZXlzW3JdID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzb3VyY2VUaWxlLnNldFJlcGxheUdyb3VwKGxheWVyLCAoPGFueT50aWxlKS50aWxlQ29vcmQudG9TdHJpbmcoKSwgcmVwbGF5R3JvdXApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXBsYXlTdGF0ZS5yZW5kZXJlZFJldmlzaW9uID0gcmV2aXNpb247XHJcbiAgICAgICAgcmVwbGF5U3RhdGUucmVuZGVyZWRSZW5kZXJPcmRlciA9IHJlbmRlck9yZGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaGFuZGxlcyh0eXBlOiBzdHJpbmcsIGxheWVyOiBvbC5sYXllci5MYXllcikge1xyXG4gICAgICAgIHJldHVybiB0eXBlID09PSAoPGFueT5vbCkucmVuZGVyZXIuVHlwZS5DQU5WQVMgJiYgKDxhbnk+bGF5ZXIpLmdldFR5cGUoKSA9PT0gKDxhbnk+b2wpLkxheWVyVHlwZS5NQVBTVUlURV9WRUNUT1JUSUxFO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlKG1hcFJlbmRlcmVyOiBhbnksIGxheWVyOiBvbC5sYXllci5UaWxlKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBHZW9WZWN0b3JUaWxlTGF5ZXJSZW5kZXIoPGFueT5sYXllcik7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2dlb1ZlY3RvclRpbGVsYXllclJlbmRlci50cyIsImV4cG9ydCBjbGFzcyBHcmlkIHtcclxuXHJcbiAgICBtZXRyaWNzOiBhbnk7XHJcbiAgICBncmlkU2l6ZTogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGdyaWRTaXplOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmdyaWRTaXplID0gZ3JpZFNpemU7XHJcbiAgICAgICAgdGhpcy5tZXRyaWNzID0ge307XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3R5bGUvZ3JpZC50cyIsImltcG9ydCB7IFRleHRSZXBsYXlDdXN0b20gfSBmcm9tIFwiLi90ZXh0UmVwbGF5Q3VzdG9tXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUmVwbGF5R3JvdXBDdXN0b20gZXh0ZW5kcyAoKDxhbnk+b2wpLnJlbmRlci5jYW52YXMuUmVwbGF5R3JvdXAgYXMgeyBuZXcodG9sZXJhbmNlOiBudW1iZXIsIG1heEV4dGVudDogYW55LCByZXNvbHV0aW9uOiBudW1iZXIsIHBpeGVsUmF0aW86IG51bWJlciwgb3ZlcmxhcHM6IGJvb2xlYW4sIGRlY2x1dHRlclRyZWU6IGFueSwgb3B0X3JlbmRlckJ1ZmZlcjogbnVtYmVyKSB9KSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IodG9sZXJhbmNlOiBudW1iZXIsIG1heEV4dGVudDogYW55LCByZXNvbHV0aW9uOiBudW1iZXIsIHBpeGVsUmF0aW86IG51bWJlciwgb3ZlcmxhcHM6IGJvb2xlYW4sIGRlY2x1dHRlclRyZWU6IGFueSwgb3B0X3JlbmRlckJ1ZmZlcjogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIodG9sZXJhbmNlLCBtYXhFeHRlbnQsIHJlc29sdXRpb24sIHBpeGVsUmF0aW8sIG92ZXJsYXBzLCBkZWNsdXR0ZXJUcmVlLCBvcHRfcmVuZGVyQnVmZmVyKTtcclxuICAgICAgICB0aGlzLmdldFJlcGxheSA9IHRoaXMuZ2V0UmVwbGF5Q3VzdG9tO1xyXG4gICAgICAgIHRoaXMuQkFUQ0hfQ09OU1RSVUNUT1JTXyA9IHRoaXMuQkFUQ0hfQ09OU1RSVUNUT1JTX0NVU1RPTTtcclxuICAgICAgICAvLyB0aGlzLnJlcGxheSA9IHRoaXMucmVwbGF5Q3VzdG9tO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZXBsYXlDdXN0b20oY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCB0cmFuc2Zvcm06IGFueSwgdmlld1JvdGF0aW9uOiBudW1iZXIsIHNraXBwZWRGZWF0dXJlc0hhc2g6IGFueSwgb3B0X3JlcGxheVR5cGVzOiBhbnksIG9wdF9kZWNsdXR0ZXJSZXBsYXlzOiBhbnkpIHtcclxuXHJcbiAgICAgICAgLyoqIEB0eXBlIHtBcnJheS48bnVtYmVyPn0gKi9cclxuICAgICAgICBsZXQgenMgPSBPYmplY3Qua2V5cyh0aGlzLnJlcGxheXNCeVpJbmRleF8pLm1hcChOdW1iZXIpO1xyXG4gICAgICAgIHpzLnNvcnQoKDxhbnk+b2wpLmFycmF5Lm51bWJlclNhZmVDb21wYXJlRnVuY3Rpb24pO1xyXG5cclxuICAgICAgICAvLyBzZXR1cCBjbGlwcGluZyBzbyB0aGF0IHRoZSBwYXJ0cyBvZiBvdmVyLXNpbXBsaWZpZWQgZ2VvbWV0cmllcyBhcmUgbm90XHJcbiAgICAgICAgLy8gdmlzaWJsZSBvdXRzaWRlIHRoZSBjdXJyZW50IGV4dGVudCB3aGVuIHBhbm5pbmdcclxuICAgICAgICBjb250ZXh0LnNhdmUoKTtcclxuICAgICAgICB0aGlzLmNsaXAoY29udGV4dCwgdHJhbnNmb3JtKTtcclxuXHJcbiAgICAgICAgbGV0IHJlcGxheVR5cGVzID0gb3B0X3JlcGxheVR5cGVzID8gb3B0X3JlcGxheVR5cGVzIDogKDxhbnk+b2wucmVuZGVyKS5yZXBsYXkuT1JERVI7XHJcbiAgICAgICAgbGV0IGksIGlpLCBqLCBqaiwgcmVwbGF5cywgcmVwbGF5O1xyXG4gICAgICAgIGZvciAoaSA9IDAsIGlpID0genMubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xyXG4gICAgICAgICAgICBsZXQgekluZGV4S2V5ID0genNbaV0udG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgcmVwbGF5cyA9IHRoaXMucmVwbGF5c0J5WkluZGV4X1t6SW5kZXhLZXldO1xyXG4gICAgICAgICAgICBmb3IgKGogPSAwLCBqaiA9IHJlcGxheVR5cGVzLmxlbmd0aDsgaiA8IGpqOyArK2opIHtcclxuICAgICAgICAgICAgICAgIGxldCByZXBsYXlUeXBlID0gcmVwbGF5VHlwZXNbal07XHJcbiAgICAgICAgICAgICAgICByZXBsYXkgPSByZXBsYXlzW3JlcGxheVR5cGVdO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcGxheSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdF9kZWNsdXR0ZXJSZXBsYXlzICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChyZXBsYXlUeXBlID09PSAoPGFueT5vbC5yZW5kZXIpLlJlcGxheVR5cGUuSU1BR0UgfHwgcmVwbGF5VHlwZSA9PT0gKDxhbnk+b2wucmVuZGVyKS5SZXBsYXlUeXBlLlRFWFQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkZWNsdXR0ZXIgPSBvcHRfZGVjbHV0dGVyUmVwbGF5c1t6SW5kZXhLZXldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWRlY2x1dHRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0X2RlY2x1dHRlclJlcGxheXNbekluZGV4S2V5XSA9IFtyZXBsYXksIHRyYW5zZm9ybS5zbGljZSgwKV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNsdXR0ZXIucHVzaChyZXBsYXksIHRyYW5zZm9ybS5zbGljZSgwKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXBsYXkucmVwbGF5KGNvbnRleHQsIHRyYW5zZm9ybSwgdmlld1JvdGF0aW9uLCBza2lwcGVkRmVhdHVyZXNIYXNoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnRleHQucmVzdG9yZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRSZXBsYXlDdXN0b20oekluZGV4OiBhbnksIHJlcGxheVR5cGU6IGFueSkge1xyXG4gICAgICAgIGxldCB6SW5kZXhLZXkgPSB6SW5kZXggIT09IHVuZGVmaW5lZCA/IHpJbmRleC50b1N0cmluZygpIDogXCIwXCI7XHJcbiAgICAgICAgbGV0IHJlcGxheXMgPSB0aGlzLnJlcGxheXNCeVpJbmRleF9bekluZGV4S2V5XTtcclxuICAgICAgICBpZiAocmVwbGF5cyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJlcGxheXMgPSB7fTtcclxuICAgICAgICAgICAgdGhpcy5yZXBsYXlzQnlaSW5kZXhfW3pJbmRleEtleV0gPSByZXBsYXlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcmVwbGF5ID0gcmVwbGF5c1tyZXBsYXlUeXBlXTtcclxuICAgICAgICBpZiAocmVwbGF5ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgbGV0IENvbnN0cnVjdG9yID0gdGhpcy5CQVRDSF9DT05TVFJVQ1RPUlNfW3JlcGxheVR5cGVdO1xyXG4gICAgICAgICAgICByZXBsYXkgPSBuZXcgQ29uc3RydWN0b3IodGhpcy50b2xlcmFuY2VfLCB0aGlzLm1heEV4dGVudF8sXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc29sdXRpb25fLCB0aGlzLnBpeGVsUmF0aW9fLCB0aGlzLm92ZXJsYXBzXywgdGhpcy5kZWNsdXR0ZXJUcmVlXyk7XHJcbiAgICAgICAgICAgIHJlcGxheXNbcmVwbGF5VHlwZV0gPSByZXBsYXk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXBsYXk7XHJcbiAgICB9XHJcblxyXG4gICAgQkFUQ0hfQ09OU1RSVUNUT1JTX0NVU1RPTSA9IHtcclxuICAgICAgICBcIkNpcmNsZVwiOiAoPGFueT5vbC5yZW5kZXIuY2FudmFzKS5Qb2x5Z29uUmVwbGF5LFxyXG4gICAgICAgIFwiRGVmYXVsdFwiOiAoPGFueT5vbC5yZW5kZXIuY2FudmFzKS5SZXBsYXksXHJcbiAgICAgICAgXCJJbWFnZVwiOiAoPGFueT5vbC5yZW5kZXIuY2FudmFzKS5JbWFnZVJlcGxheSxcclxuICAgICAgICBcIkxpbmVTdHJpbmdcIjogKDxhbnk+b2wucmVuZGVyLmNhbnZhcykuTGluZVN0cmluZ1JlcGxheSxcclxuICAgICAgICBcIlBvbHlnb25cIjogKDxhbnk+b2wucmVuZGVyLmNhbnZhcykuUG9seWdvblJlcGxheSxcclxuICAgICAgICBcIlRleHRcIjogVGV4dFJlcGxheUN1c3RvbVxyXG4gICAgfTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvcmVwbGF5R3JvdXBDdXN0b20udHMiLCJpbXBvcnQgeyBUZXh0TGFiZWxpbmdTdHJhdGVneSB9IGZyb20gXCIuLi9zdHlsZS90ZXh0TGFiZWxpbmdTdHJhdGVneVwiO1xyXG5pbXBvcnQgeyBEZXRlY3RUZXh0TGFiZWxpbmdTdHJhdGVneSB9IGZyb20gXCIuLi9zdHlsZS9kZXRlY3RUZXh0TGFiZWxpbmdTdHJhdGVneVwiO1xyXG5pbXBvcnQgeyBHZW9UZXh0U3R5bGUgfSBmcm9tIFwiLi4vc3R5bGUvZ2VvVGV4dFN0eWxlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVGV4dFJlcGxheUN1c3RvbSBleHRlbmRzICgoPGFueT5vbC5yZW5kZXIuY2FudmFzKS5UZXh0UmVwbGF5IGFzIHsgbmV3KHRvbGVyYW5jZTogbnVtYmVyLCBtYXhFeHRlbnQ6IGFueSwgcmVzb2x1dGlvbjogbnVtYmVyLCBwaXhlbFJhdGlvOiBudW1iZXIsIG92ZXJsYXBzOiBib29sZWFuLCBkZWNsdXR0ZXJUcmVlOiBhbnkpOyB9KSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IodG9sZXJhbmNlOiBudW1iZXIsIG1heEV4dGVudDogYW55LCByZXNvbHV0aW9uOiBudW1iZXIsIHBpeGVsUmF0aW86IG51bWJlciwgb3ZlcmxhcHM6IGJvb2xlYW4sIGRlY2x1dHRlclRyZWU6IGFueSkge1xyXG4gICAgICAgIHN1cGVyKHRvbGVyYW5jZSwgbWF4RXh0ZW50LCByZXNvbHV0aW9uLCBwaXhlbFJhdGlvLCBvdmVybGFwcywgZGVjbHV0dGVyVHJlZSk7XHJcbiAgICAgICAgdGhpcy5kcmF3VGV4dCA9IHRoaXMuZHJhd1RleHRDdXN0b207XHJcbiAgICAgICAgdGhpcy5zZXRUZXh0U3R5bGUgPSB0aGlzLnNldFRleHRTdHlsZUN1c3RvbTtcclxuICAgICAgICB0aGlzLnJlcGxheV8gPSB0aGlzLnJlcGxheUN1c3RvbTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVwbGF5Q3VzdG9tKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgdHJhbnNmb3JtOiBhbnksIHNraXBwZWRGZWF0dXJlc0hhc2g6IGFueSwgaW5zdHJ1Y3Rpb25zOiBhbnlbXSwgZmVhdHVyZUNhbGxiYWNrOiBhbnksIG9wdF9oaXRFeHRlbnQ6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdKSB7XHJcbiAgICAgICAgLyoqIEB0eXBlIHtBcnJheS48bnVtYmVyPn0gKi9cclxuICAgICAgICBsZXQgcGl4ZWxDb29yZGluYXRlcztcclxuICAgICAgICBpZiAodGhpcy5waXhlbENvb3JkaW5hdGVzXyAmJiAoPGFueT5vbCkuYXJyYXkuZXF1YWxzKHRyYW5zZm9ybSwgdGhpcy5yZW5kZXJlZFRyYW5zZm9ybV8pKSB7XHJcbiAgICAgICAgICAgIHBpeGVsQ29vcmRpbmF0ZXMgPSB0aGlzLnBpeGVsQ29vcmRpbmF0ZXNfO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5waXhlbENvb3JkaW5hdGVzXykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5waXhlbENvb3JkaW5hdGVzXyA9IFtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBpeGVsQ29vcmRpbmF0ZXMgPSAoPGFueT5vbC5nZW9tKS5mbGF0LnRyYW5zZm9ybS50cmFuc2Zvcm0yRCh0aGlzLmNvb3JkaW5hdGVzLCAwLCB0aGlzLmNvb3JkaW5hdGVzLmxlbmd0aCwgMiwgdHJhbnNmb3JtLCB0aGlzLnBpeGVsQ29vcmRpbmF0ZXNfKTsgKDxhbnk+b2wpLnRyYW5zZm9ybS5zZXRGcm9tQXJyYXkodGhpcy5yZW5kZXJlZFRyYW5zZm9ybV8sIHRyYW5zZm9ybSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBza2lwRmVhdHVyZXMgPSAhKDxhbnk+b2wpLm9iai5pc0VtcHR5KHNraXBwZWRGZWF0dXJlc0hhc2gpO1xyXG4gICAgICAgIGxldCBpID0gMDsgLy8gaW5zdHJ1Y3Rpb24gaW5kZXhcclxuICAgICAgICBsZXQgaWkgPSBpbnN0cnVjdGlvbnMubGVuZ3RoOyAvLyBlbmQgb2YgaW5zdHJ1Y3Rpb25zXHJcbiAgICAgICAgbGV0IGQgPSAwOyAvLyBkYXRhIGluZGV4XHJcbiAgICAgICAgbGV0IGRkOyAvLyBlbmQgb2YgcGVyLWluc3RydWN0aW9uIGRhdGFcclxuICAgICAgICBsZXQgYW5jaG9yWCwgYW5jaG9yWSwgcHJldlgsIHByZXZZLCByb3VuZFgsIHJvdW5kWSwgZGVjbHV0dGVyR3JvdXAsIGltYWdlO1xyXG4gICAgICAgIGxldCBwZW5kaW5nRmlsbCA9IDA7XHJcbiAgICAgICAgbGV0IHBlbmRpbmdTdHJva2UgPSAwO1xyXG4gICAgICAgIGxldCBsYXN0RmlsbEluc3RydWN0aW9uID0gbnVsbDtcclxuICAgICAgICBsZXQgbGFzdFN0cm9rZUluc3RydWN0aW9uID0gbnVsbDtcclxuICAgICAgICBsZXQgY29vcmRpbmF0ZUNhY2hlID0gdGhpcy5jb29yZGluYXRlQ2FjaGVfO1xyXG4gICAgICAgIGxldCB2aWV3Um90YXRpb24gPSB0aGlzLnZpZXdSb3RhdGlvbl87XHJcblxyXG4gICAgICAgIGxldCBzdGF0ZSA9IC8qKiBAdHlwZSB7b2x4LnJlbmRlci5TdGF0ZX0gKi8gKHtcclxuICAgICAgICAgICAgY29udGV4dDogY29udGV4dCxcclxuICAgICAgICAgICAgcGl4ZWxSYXRpbzogdGhpcy5waXhlbFJhdGlvLFxyXG4gICAgICAgICAgICByZXNvbHV0aW9uOiB0aGlzLnJlc29sdXRpb24sXHJcbiAgICAgICAgICAgIHJvdGF0aW9uOiB2aWV3Um90YXRpb25cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gV2hlbiB0aGUgYmF0Y2ggc2l6ZSBnZXRzIHRvbyBiaWcsIHBlcmZvcm1hbmNlIGRlY3JlYXNlcy4gMjAwIGlzIGEgZ29vZFxyXG4gICAgICAgIC8vIGJhbGFuY2UgYmV0d2VlbiBiYXRjaCBzaXplIGFuZCBudW1iZXIgb2YgZmlsbC9zdHJva2UgaW5zdHJ1Y3Rpb25zLlxyXG4gICAgICAgIGxldCBiYXRjaFNpemUgPSB0aGlzLmluc3RydWN0aW9ucyAhPT0gaW5zdHJ1Y3Rpb25zIHx8IHRoaXMub3ZlcmxhcHMgPyAwIDogMjAwO1xyXG4gICAgICAgIHdoaWxlIChpIDwgaWkpIHtcclxuICAgICAgICAgICAgbGV0IGluc3RydWN0aW9uID0gaW5zdHJ1Y3Rpb25zW2ldO1xyXG4gICAgICAgICAgICBsZXQgdHlwZSA9IC8qKiBAdHlwZSB7b2wucmVuZGVyLmNhbnZhcy5JbnN0cnVjdGlvbn0gKi8gKGluc3RydWN0aW9uWzBdKTtcclxuICAgICAgICAgICAgbGV0IC8qKiBAdHlwZSB7b2wuRmVhdHVyZXxvbC5yZW5kZXIuRmVhdHVyZX0gKi8gZmVhdHVyZSwgeCwgeTtcclxuICAgICAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICg8YW55Pm9sLnJlbmRlci5jYW52YXMpLkluc3RydWN0aW9uLkJFR0lOX0dFT01FVFJZOlxyXG4gICAgICAgICAgICAgICAgICAgIGZlYXR1cmUgPSAvKiogQHR5cGUge29sLkZlYXR1cmV8b2wucmVuZGVyLkZlYXR1cmV9ICovIChpbnN0cnVjdGlvblsxXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKChza2lwRmVhdHVyZXMgJiYgc2tpcHBlZEZlYXR1cmVzSGFzaFsoPGFueT5vbCkuZ2V0VWlkKGZlYXR1cmUpLnRvU3RyaW5nKCldKSB8fCAhZmVhdHVyZS5nZXRHZW9tZXRyeSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgPSAvKiogQHR5cGUge251bWJlcn0gKi8gKGluc3RydWN0aW9uWzJdKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9wdF9oaXRFeHRlbnQgIT09IHVuZGVmaW5lZCAmJiAhb2wuZXh0ZW50LmludGVyc2VjdHMob3B0X2hpdEV4dGVudCwgZmVhdHVyZS5nZXRHZW9tZXRyeSgpLmdldEV4dGVudCgpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpID0gLyoqIEB0eXBlIHtudW1iZXJ9ICovIChpbnN0cnVjdGlvblsyXSkgKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICsraTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICg8YW55Pm9sLnJlbmRlci5jYW52YXMpLkluc3RydWN0aW9uLkJFR0lOX1BBVEg6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBlbmRpbmdGaWxsID4gYmF0Y2hTaXplKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsbF8oY29udGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBlbmRpbmdGaWxsID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBlbmRpbmdTdHJva2UgPiBiYXRjaFNpemUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5zdHJva2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGVuZGluZ1N0cm9rZSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghcGVuZGluZ0ZpbGwgJiYgIXBlbmRpbmdTdHJva2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJldlggPSBwcmV2WSA9IE5hTjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKytpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAoPGFueT5vbC5yZW5kZXIuY2FudmFzKS5JbnN0cnVjdGlvbi5DSVJDTEU6XHJcbiAgICAgICAgICAgICAgICAgICAgZCA9IC8qKiBAdHlwZSB7bnVtYmVyfSAqLyAoaW5zdHJ1Y3Rpb25bMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB4MSA9IHBpeGVsQ29vcmRpbmF0ZXNbZF07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHkxID0gcGl4ZWxDb29yZGluYXRlc1tkICsgMV07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHgyID0gcGl4ZWxDb29yZGluYXRlc1tkICsgMl07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHkyID0gcGl4ZWxDb29yZGluYXRlc1tkICsgM107XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGR4ID0geDIgLSB4MTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZHkgPSB5MiAtIHkxO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByID0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0Lm1vdmVUbyh4MSArIHIsIHkxKTtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmFyYyh4MSwgeTEsIHIsIDAsIDIgKiBNYXRoLlBJLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICArK2k7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICg8YW55Pm9sLnJlbmRlci5jYW52YXMpLkluc3RydWN0aW9uLkNMT1NFX1BBVEg6XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5jbG9zZVBhdGgoKTtcclxuICAgICAgICAgICAgICAgICAgICArK2k7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICg8YW55Pm9sLnJlbmRlci5jYW52YXMpLkluc3RydWN0aW9uLkNVU1RPTTpcclxuICAgICAgICAgICAgICAgICAgICBkID0gLyoqIEB0eXBlIHtudW1iZXJ9ICovIChpbnN0cnVjdGlvblsxXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGQgPSBpbnN0cnVjdGlvblsyXTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZ2VvbWV0cnkgPSAvKiogQHR5cGUge29sLmdlb20uU2ltcGxlR2VvbWV0cnl9ICovIChpbnN0cnVjdGlvblszXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlbmRlcmVyID0gaW5zdHJ1Y3Rpb25bNF07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZuID0gaW5zdHJ1Y3Rpb24ubGVuZ3RoID09PSA2ID8gaW5zdHJ1Y3Rpb25bNV0gOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgKDxhbnk+c3RhdGUpLmdlb21ldHJ5ID0gZ2VvbWV0cnk7XHJcbiAgICAgICAgICAgICAgICAgICAgKDxhbnk+c3RhdGUpLmZlYXR1cmUgPSBmZWF0dXJlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKGkgaW4gY29vcmRpbmF0ZUNhY2hlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlQ2FjaGVbaV0gPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvb3JkcyA9IGNvb3JkaW5hdGVDYWNoZVtpXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZm4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm4ocGl4ZWxDb29yZGluYXRlcywgZCwgZGQsIDIsIGNvb3Jkcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29vcmRzWzBdID0gcGl4ZWxDb29yZGluYXRlc1tkXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29vcmRzWzFdID0gcGl4ZWxDb29yZGluYXRlc1tkICsgMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvb3Jkcy5sZW5ndGggPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZW5kZXJlcihjb29yZHMsIHN0YXRlKTtcclxuICAgICAgICAgICAgICAgICAgICArK2k7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICg8YW55Pm9sLnJlbmRlci5jYW52YXMpLkluc3RydWN0aW9uLkRSQVdfSU1BR0U6XHJcbiAgICAgICAgICAgICAgICAgICAgZCA9IC8qKiBAdHlwZSB7bnVtYmVyfSAqLyAoaW5zdHJ1Y3Rpb25bMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGRkID0gLyoqIEB0eXBlIHtudW1iZXJ9ICovIChpbnN0cnVjdGlvblsyXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2UgPSAgLyoqIEB0eXBlIHtIVE1MQ2FudmFzRWxlbWVudHxIVE1MVmlkZW9FbGVtZW50fEltYWdlfSAqLyAoaW5zdHJ1Y3Rpb25bM10pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFJlbWFpbmluZyBhcmd1bWVudHMgaW4gRFJBV19JTUFHRSBhcmUgaW4gYWxwaGFiZXRpY2FsIG9yZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgYW5jaG9yWCA9IC8qKiBAdHlwZSB7bnVtYmVyfSAqLyAoaW5zdHJ1Y3Rpb25bNF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGFuY2hvclkgPSAvKiogQHR5cGUge251bWJlcn0gKi8gKGluc3RydWN0aW9uWzVdKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWNsdXR0ZXJHcm91cCA9IGZlYXR1cmVDYWxsYmFjayA/IG51bGwgOiAvKiogQHR5cGUge29sLkRlY2x1dHRlckdyb3VwfSAqLyAoaW5zdHJ1Y3Rpb25bNl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBoZWlnaHQgPSAvKiogQHR5cGUge251bWJlcn0gKi8gKGluc3RydWN0aW9uWzddKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgb3BhY2l0eSA9IC8qKiBAdHlwZSB7bnVtYmVyfSAqLyAoaW5zdHJ1Y3Rpb25bOF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBvcmlnaW5YID0gLyoqIEB0eXBlIHtudW1iZXJ9ICovIChpbnN0cnVjdGlvbls5XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG9yaWdpblkgPSAvKiogQHR5cGUge251bWJlcn0gKi8gKGluc3RydWN0aW9uWzEwXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJvdGF0ZVdpdGhWaWV3ID0gLyoqIEB0eXBlIHtib29sZWFufSAqLyAoaW5zdHJ1Y3Rpb25bMTFdKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcm90YXRpb24gPSAvKiogQHR5cGUge251bWJlcn0gKi8gKGluc3RydWN0aW9uWzEyXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNjYWxlID0gLyoqIEB0eXBlIHtudW1iZXJ9ICovIChpbnN0cnVjdGlvblsxM10pO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzbmFwVG9QaXhlbCA9IC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi8gKGluc3RydWN0aW9uWzE0XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHdpZHRoID0gLyoqIEB0eXBlIHtudW1iZXJ9ICovIChpbnN0cnVjdGlvblsxNV0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgcGFkZGluZywgYmFja2dyb3VuZEZpbGwsIGJhY2tncm91bmRTdHJva2U7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluc3RydWN0aW9uLmxlbmd0aCA+IDE2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmcgPSAvKiogQHR5cGUge0FycmF5LjxudW1iZXI+fSAqLyAoaW5zdHJ1Y3Rpb25bMTZdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEZpbGwgPSAvKiogQHR5cGUge2Jvb2xlYW59ICovIChpbnN0cnVjdGlvblsxN10pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU3Ryb2tlID0gLyoqIEB0eXBlIHtib29sZWFufSAqLyAoaW5zdHJ1Y3Rpb25bMThdKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nID0gKDxhbnk+b2wucmVuZGVyLmNhbnZhcykuZGVmYXVsdFBhZGRpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRGaWxsID0gYmFja2dyb3VuZFN0cm9rZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJvdGF0ZVdpdGhWaWV3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdGF0aW9uICs9IHZpZXdSb3RhdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICg7IGQgPCBkZDsgZCArPSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVwbGF5SW1hZ2VfKGNvbnRleHQsIHBpeGVsQ29vcmRpbmF0ZXNbZF0sIHBpeGVsQ29vcmRpbmF0ZXNbZCArIDFdLCBpbWFnZSwgYW5jaG9yWCwgYW5jaG9yWSwgZGVjbHV0dGVyR3JvdXAsIGhlaWdodCwgb3BhY2l0eSwgb3JpZ2luWCwgb3JpZ2luWSwgcm90YXRpb24sIHNjYWxlLCBzbmFwVG9QaXhlbCwgd2lkdGgsIHBhZGRpbmcsIGJhY2tncm91bmRGaWxsID8gLyoqIEB0eXBlIHtBcnJheS48Kj59ICovIChsYXN0RmlsbEluc3RydWN0aW9uKSA6IG51bGwsIGJhY2tncm91bmRTdHJva2UgPyAvKiogQHR5cGUge0FycmF5LjwqPn0gKi8gKGxhc3RTdHJva2VJbnN0cnVjdGlvbikgOiBudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJEZWNsdXR0ZXJfKGRlY2x1dHRlckdyb3VwLCBmZWF0dXJlKTtcclxuICAgICAgICAgICAgICAgICAgICArK2k7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICg8YW55Pm9sLnJlbmRlci5jYW52YXMpLkluc3RydWN0aW9uLkRSQVdfQ0hBUlM6XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJlZ2luID0gLyoqIEB0eXBlIHtudW1iZXJ9ICovIChpbnN0cnVjdGlvblsxXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVuZCA9IC8qKiBAdHlwZSB7bnVtYmVyfSAqLyAoaW5zdHJ1Y3Rpb25bMl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBiYXNlbGluZSA9IC8qKiBAdHlwZSB7bnVtYmVyfSAqLyAoaW5zdHJ1Y3Rpb25bM10pO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlY2x1dHRlckdyb3VwID0gZmVhdHVyZUNhbGxiYWNrID8gbnVsbCA6IC8qKiBAdHlwZSB7b2wuRGVjbHV0dGVyR3JvdXB9ICovIChpbnN0cnVjdGlvbls0XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG92ZXJmbG93ID0gLyoqIEB0eXBlIHtudW1iZXJ9ICovIChpbnN0cnVjdGlvbls1XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZpbGxLZXkgPSAvKiogQHR5cGUge3N0cmluZ30gKi8gKGluc3RydWN0aW9uWzZdKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbWF4QW5nbGUgPSAvKiogQHR5cGUge251bWJlcn0gKi8gKGluc3RydWN0aW9uWzddKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbWVhc3VyZSA9IC8qKiBAdHlwZSB7ZnVuY3Rpb24oc3RyaW5nKTpudW1iZXJ9ICovIChpbnN0cnVjdGlvbls4XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG9mZnNldFkgPSAvKiogQHR5cGUge251bWJlcn0gKi8gKGluc3RydWN0aW9uWzldKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3Ryb2tlS2V5ID0gLyoqIEB0eXBlIHtzdHJpbmd9ICovIChpbnN0cnVjdGlvblsxMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdHJva2VXaWR0aCA9ICAvKiogQHR5cGUge251bWJlcn0gKi8gKGluc3RydWN0aW9uWzExXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRleHQgPSAvKiogQHR5cGUge3N0cmluZ30gKi8gKGluc3RydWN0aW9uWzEyXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRleHRLZXkgPSAvKiogQHR5cGUge3N0cmluZ30gKi8gKGluc3RydWN0aW9uWzEzXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRleHRTY2FsZSA9IC8qKiBAdHlwZSB7bnVtYmVyfSAqLyAoaW5zdHJ1Y3Rpb25bMTRdKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBhdGhMZW5ndGggPSAoPGFueT5vbC5nZW9tKS5mbGF0Lmxlbmd0aC5saW5lU3RyaW5nKHBpeGVsQ29vcmRpbmF0ZXMsIGJlZ2luLCBlbmQsIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0TGVuZ3RoID0gbWVhc3VyZSh0ZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob3ZlcmZsb3cgfHwgdGV4dExlbmd0aCA8PSBwYXRoTGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlc29sdXRpb24gPCAwLjIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0bXBMZW5ndGggPSBwYXRoTGVuZ3RoIC0gdGV4dExlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0bXBTdGFydCA9IDIwMCAqIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRtcERpc3QgPSA2MDAgKiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGxlbiA9IHRtcFN0YXJ0OyBsZW4gPCB0bXBMZW5ndGg7IGxlbiArPSB0bXBEaXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN0YXJ0TSA9IGxlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGFydHMgPSAoPGFueT5vbC5nZW9tKS5mbGF0LnRleHRwYXRoLmxpbmVTdHJpbmcocGl4ZWxDb29yZGluYXRlcywgYmVnaW4sIGVuZCwgMiwgdGV4dCwgbWVhc3VyZSwgc3RhcnRNLCBtYXhBbmdsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjLCBjYywgY2hhcnMsIGxhYmVsLCBwYXJ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3Ryb2tlS2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGMgPSAwLCBjYyA9IHBhcnRzLmxlbmd0aDsgYyA8IGNjOyArK2MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0ID0gcGFydHNbY107IC8vIHgsIHksIGFuY2hvclgsIHJvdGF0aW9uLCBjaHVua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJzID0gLyoqIEB0eXBlIHtzdHJpbmd9ICovIChwYXJ0WzRdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbCA9IC8qKiBAdHlwZSB7b2wucmVuZGVyLmNhbnZhcy5UZXh0UmVwbGF5fSAqLyAodGhpcykuZ2V0SW1hZ2UoY2hhcnMsIHRleHRLZXksIFwiXCIsIHN0cm9rZUtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5jaG9yWCA9IC8qKiBAdHlwZSB7bnVtYmVyfSAqLyAocGFydFsyXSkgKyBzdHJva2VXaWR0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmNob3JZID0gYmFzZWxpbmUgKiBsYWJlbC5oZWlnaHQgKyAoMC41IC0gYmFzZWxpbmUpICogMiAqIHN0cm9rZVdpZHRoIC0gb2Zmc2V0WTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlcGxheUltYWdlXyhjb250ZXh0LCAvKiogQHR5cGUge251bWJlcn0gKi8ocGFydFswXSksIC8qKiBAdHlwZSB7bnVtYmVyfSAqLyhwYXJ0WzFdKSwgbGFiZWwsIGFuY2hvclgsIGFuY2hvclksIGRlY2x1dHRlckdyb3VwLCBsYWJlbC5oZWlnaHQsIDEsIDAsIDAsIC8qKiBAdHlwZSB7bnVtYmVyfSAqLyhwYXJ0WzNdKSwgdGV4dFNjYWxlLCBmYWxzZSwgbGFiZWwud2lkdGgsICg8YW55Pm9sLnJlbmRlci5jYW52YXMpLmRlZmF1bHRQYWRkaW5nLCBudWxsLCBudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmlsbEtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjID0gMCwgY2MgPSBwYXJ0cy5sZW5ndGg7IGMgPCBjYzsgKytjKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydCA9IHBhcnRzW2NdOyAvLyB4LCB5LCBhbmNob3JYLCByb3RhdGlvbiwgY2h1bmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFycyA9IC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAocGFydFs0XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwgPSAvKiogQHR5cGUge29sLnJlbmRlci5jYW52YXMuVGV4dFJlcGxheX0gKi8gKHRoaXMpLmdldEltYWdlKGNoYXJzLCB0ZXh0S2V5LCBmaWxsS2V5LCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmNob3JYID0gLyoqIEB0eXBlIHtudW1iZXJ9ICovIChwYXJ0WzJdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmNob3JZID0gYmFzZWxpbmUgKiBsYWJlbC5oZWlnaHQgLSBvZmZzZXRZO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVwbGF5SW1hZ2VfKGNvbnRleHQsIC8qKiBAdHlwZSB7bnVtYmVyfSAqLyhwYXJ0WzBdKSwgLyoqIEB0eXBlIHtudW1iZXJ9ICovKHBhcnRbMV0pLCBsYWJlbCwgYW5jaG9yWCwgYW5jaG9yWSwgZGVjbHV0dGVyR3JvdXAsIGxhYmVsLmhlaWdodCwgMSwgMCwgMCwgLyoqIEB0eXBlIHtudW1iZXJ9ICovKHBhcnRbM10pLCB0ZXh0U2NhbGUsIGZhbHNlLCBsYWJlbC53aWR0aCwgKDxhbnk+b2wucmVuZGVyLmNhbnZhcykuZGVmYXVsdFBhZGRpbmcsIG51bGwsIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRleHRBbGlnbiA9IC8qKiBAdHlwZSB7b2wucmVuZGVyLmNhbnZhcy5UZXh0UmVwbGF5fSAqLyAodGhpcykudGV4dFN0YXRlc1t0ZXh0S2V5XS50ZXh0QWxpZ247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3RhcnRNID0gKHBhdGhMZW5ndGggLSB0ZXh0TGVuZ3RoKSAqICg8YW55Pm9sLnJlbmRlcikucmVwbGF5LlRFWFRfQUxJR05bdGV4dEFsaWduXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYXJ0cyA9ICg8YW55Pm9sLmdlb20pLmZsYXQudGV4dHBhdGgubGluZVN0cmluZyhwaXhlbENvb3JkaW5hdGVzLCBiZWdpbiwgZW5kLCAyLCB0ZXh0LCBtZWFzdXJlLCBzdGFydE0sIG1heEFuZ2xlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJ0cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjLCBjYywgY2hhcnMsIGxhYmVsLCBwYXJ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdHJva2VLZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjID0gMCwgY2MgPSBwYXJ0cy5sZW5ndGg7IGMgPCBjYzsgKytjKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0ID0gcGFydHNbY107IC8vIHgsIHksIGFuY2hvclgsIHJvdGF0aW9uLCBjaHVua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhcnMgPSAvKiogQHR5cGUge3N0cmluZ30gKi8gKHBhcnRbNF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwgPSAvKiogQHR5cGUge29sLnJlbmRlci5jYW52YXMuVGV4dFJlcGxheX0gKi8gKHRoaXMpLmdldEltYWdlKGNoYXJzLCB0ZXh0S2V5LCBcIlwiLCBzdHJva2VLZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5jaG9yWCA9IC8qKiBAdHlwZSB7bnVtYmVyfSAqLyAocGFydFsyXSkgKyBzdHJva2VXaWR0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuY2hvclkgPSBiYXNlbGluZSAqIGxhYmVsLmhlaWdodCArICgwLjUgLSBiYXNlbGluZSkgKiAyICogc3Ryb2tlV2lkdGggLSBvZmZzZXRZO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXBsYXlJbWFnZV8oY29udGV4dCwgLyoqIEB0eXBlIHtudW1iZXJ9ICovKHBhcnRbMF0pLCAvKiogQHR5cGUge251bWJlcn0gKi8ocGFydFsxXSksIGxhYmVsLCBhbmNob3JYLCBhbmNob3JZLCBkZWNsdXR0ZXJHcm91cCwgbGFiZWwuaGVpZ2h0LCAxLCAwLCAwLCAvKiogQHR5cGUge251bWJlcn0gKi8ocGFydFszXSksIHRleHRTY2FsZSwgZmFsc2UsIGxhYmVsLndpZHRoLCAoPGFueT5vbC5yZW5kZXIuY2FudmFzKS5kZWZhdWx0UGFkZGluZywgbnVsbCwgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpbGxLZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjID0gMCwgY2MgPSBwYXJ0cy5sZW5ndGg7IGMgPCBjYzsgKytjKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0ID0gcGFydHNbY107IC8vIHgsIHksIGFuY2hvclgsIHJvdGF0aW9uLCBjaHVua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhcnMgPSAvKiogQHR5cGUge3N0cmluZ30gKi8gKHBhcnRbNF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwgPSAvKiogQHR5cGUge29sLnJlbmRlci5jYW52YXMuVGV4dFJlcGxheX0gKi8gKHRoaXMpLmdldEltYWdlKGNoYXJzLCB0ZXh0S2V5LCBmaWxsS2V5LCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuY2hvclggPSAvKiogQHR5cGUge251bWJlcn0gKi8gKHBhcnRbMl0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5jaG9yWSA9IGJhc2VsaW5lICogbGFiZWwuaGVpZ2h0IC0gb2Zmc2V0WTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVwbGF5SW1hZ2VfKGNvbnRleHQsIC8qKiBAdHlwZSB7bnVtYmVyfSAqLyhwYXJ0WzBdKSwgLyoqIEB0eXBlIHtudW1iZXJ9ICovKHBhcnRbMV0pLCBsYWJlbCwgYW5jaG9yWCwgYW5jaG9yWSwgZGVjbHV0dGVyR3JvdXAsIGxhYmVsLmhlaWdodCwgMSwgMCwgMCwgLyoqIEB0eXBlIHtudW1iZXJ9ICovKHBhcnRbM10pLCB0ZXh0U2NhbGUsIGZhbHNlLCBsYWJlbC53aWR0aCwgKDxhbnk+b2wucmVuZGVyLmNhbnZhcykuZGVmYXVsdFBhZGRpbmcsIG51bGwsIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyRGVjbHV0dGVyXyhkZWNsdXR0ZXJHcm91cCwgZmVhdHVyZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgKytpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAoPGFueT5vbC5yZW5kZXIuY2FudmFzKS5JbnN0cnVjdGlvbi5FTkRfR0VPTUVUUlk6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZlYXR1cmVDYWxsYmFjayAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZlYXR1cmUgPSAvKiogQHR5cGUge29sLkZlYXR1cmV8b2wucmVuZGVyLkZlYXR1cmV9ICovIChpbnN0cnVjdGlvblsxXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSBmZWF0dXJlQ2FsbGJhY2soZmVhdHVyZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKytpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAoPGFueT5vbC5yZW5kZXIuY2FudmFzKS5JbnN0cnVjdGlvbi5GSUxMOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChiYXRjaFNpemUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGVuZGluZ0ZpbGwrKztcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGxfKGNvbnRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICArK2k7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICg8YW55Pm9sLnJlbmRlci5jYW52YXMpLkluc3RydWN0aW9uLk1PVkVfVE9fTElORV9UTzpcclxuICAgICAgICAgICAgICAgICAgICBkID0gLyoqIEB0eXBlIHtudW1iZXJ9ICovIChpbnN0cnVjdGlvblsxXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGQgPSAvKiogQHR5cGUge251bWJlcn0gKi8gKGluc3RydWN0aW9uWzJdKTtcclxuICAgICAgICAgICAgICAgICAgICB4ID0gcGl4ZWxDb29yZGluYXRlc1tkXTtcclxuICAgICAgICAgICAgICAgICAgICB5ID0gcGl4ZWxDb29yZGluYXRlc1tkICsgMV07XHJcbiAgICAgICAgICAgICAgICAgICAgcm91bmRYID0gKHggKyAwLjUpIHwgMDtcclxuICAgICAgICAgICAgICAgICAgICByb3VuZFkgPSAoeSArIDAuNSkgfCAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyb3VuZFggIT09IHByZXZYIHx8IHJvdW5kWSAhPT0gcHJldlkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5tb3ZlVG8oeCwgeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZYID0gcm91bmRYO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2WSA9IHJvdW5kWTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChkICs9IDI7IGQgPCBkZDsgZCArPSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHggPSBwaXhlbENvb3JkaW5hdGVzW2RdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB5ID0gcGl4ZWxDb29yZGluYXRlc1tkICsgMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdW5kWCA9ICh4ICsgMC41KSB8IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdW5kWSA9ICh5ICsgMC41KSB8IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkID09PSBkZCAtIDIgfHwgcm91bmRYICE9PSBwcmV2WCB8fCByb3VuZFkgIT09IHByZXZZKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmxpbmVUbyh4LCB5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZYID0gcm91bmRYO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldlkgPSByb3VuZFk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKytpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAoPGFueT5vbC5yZW5kZXIuY2FudmFzKS5JbnN0cnVjdGlvbi5TRVRfRklMTF9TVFlMRTpcclxuICAgICAgICAgICAgICAgICAgICBsYXN0RmlsbEluc3RydWN0aW9uID0gaW5zdHJ1Y3Rpb247XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxsT3JpZ2luXyA9IGluc3RydWN0aW9uWzJdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAocGVuZGluZ0ZpbGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxsXyhjb250ZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGVuZGluZ0ZpbGwgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGVuZGluZ1N0cm9rZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5zdHJva2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlbmRpbmdTdHJva2UgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IC8qKiBAdHlwZSB7b2wuQ29sb3JMaWtlfSAqLyAoaW5zdHJ1Y3Rpb25bMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICsraTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgKDxhbnk+b2wucmVuZGVyLmNhbnZhcykuSW5zdHJ1Y3Rpb24uU0VUX1NUUk9LRV9TVFlMRTpcclxuICAgICAgICAgICAgICAgICAgICBsYXN0U3Ryb2tlSW5zdHJ1Y3Rpb24gPSBpbnN0cnVjdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocGVuZGluZ1N0cm9rZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZW5kaW5nU3Ryb2tlID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdHJva2VTdHlsZV8oY29udGV4dCwgLyoqIEB0eXBlIHtBcnJheS48Kj59ICovKGluc3RydWN0aW9uKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgKytpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAoPGFueT5vbC5yZW5kZXIuY2FudmFzKS5JbnN0cnVjdGlvbi5TVFJPS0U6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJhdGNoU2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZW5kaW5nU3Ryb2tlKys7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5zdHJva2UoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKytpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICArK2k7IC8vIGNvbnN1bWUgdGhlIGluc3RydWN0aW9uIGFueXdheSwgdG8gYXZvaWQgYW4gaW5maW5pdGUgbG9vcFxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwZW5kaW5nRmlsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmZpbGxfKGNvbnRleHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocGVuZGluZ1N0cm9rZSkge1xyXG4gICAgICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRUZXh0U3R5bGVDdXN0b20odGV4dFN0eWxlOiBhbnksIGRlY2x1dHRlckdyb3VwOiBhbnkpIHtcclxuICAgICAgICBsZXQgdGV4dFN0YXRlLCBmaWxsU3RhdGUsIHN0cm9rZVN0YXRlO1xyXG4gICAgICAgIGlmICghdGV4dFN0eWxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dF8gPSBcIlwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVjbHV0dGVyR3JvdXBfID0gLyoqIEB0eXBlIHtvbC5EZWNsdXR0ZXJHcm91cH0gKi8gKGRlY2x1dHRlckdyb3VwKTtcclxuXHJcbiAgICAgICAgICAgIGxldCB0ZXh0RmlsbFN0eWxlID0gdGV4dFN0eWxlLmdldEZpbGwoKTtcclxuICAgICAgICAgICAgaWYgKCF0ZXh0RmlsbFN0eWxlKSB7XHJcbiAgICAgICAgICAgICAgICBmaWxsU3RhdGUgPSB0aGlzLnRleHRGaWxsU3RhdGVfID0gbnVsbDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZpbGxTdGF0ZSA9IHRoaXMudGV4dEZpbGxTdGF0ZV87XHJcbiAgICAgICAgICAgICAgICBpZiAoIWZpbGxTdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGxTdGF0ZSA9IHRoaXMudGV4dEZpbGxTdGF0ZV8gPSAvKiogQHR5cGUge29sLkNhbnZhc0ZpbGxTdGF0ZX0gKi8gKHt9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZpbGxTdGF0ZS5maWxsU3R5bGUgPSBvbC5jb2xvcmxpa2UuYXNDb2xvckxpa2UoXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dEZpbGxTdHlsZS5nZXRDb2xvcigpIHx8ICg8YW55Pm9sLnJlbmRlci5jYW52YXMpLmRlZmF1bHRGaWxsU3R5bGUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgdGV4dFN0cm9rZVN0eWxlID0gdGV4dFN0eWxlLmdldFN0cm9rZSgpO1xyXG4gICAgICAgICAgICBpZiAoIXRleHRTdHJva2VTdHlsZSkge1xyXG4gICAgICAgICAgICAgICAgc3Ryb2tlU3RhdGUgPSB0aGlzLnRleHRTdHJva2VTdGF0ZV8gPSBudWxsO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc3Ryb2tlU3RhdGUgPSB0aGlzLnRleHRTdHJva2VTdGF0ZV87XHJcbiAgICAgICAgICAgICAgICBpZiAoIXN0cm9rZVN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlU3RhdGUgPSB0aGlzLnRleHRTdHJva2VTdGF0ZV8gPSAvKiogQHR5cGUge29sLkNhbnZhc1N0cm9rZVN0YXRlfSAqLyAoe30pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IGxpbmVEYXNoID0gdGV4dFN0cm9rZVN0eWxlLmdldExpbmVEYXNoKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGluZURhc2hPZmZzZXQgPSB0ZXh0U3Ryb2tlU3R5bGUuZ2V0TGluZURhc2hPZmZzZXQoKTtcclxuICAgICAgICAgICAgICAgIGxldCBsaW5lV2lkdGggPSB0ZXh0U3Ryb2tlU3R5bGUuZ2V0V2lkdGgoKTtcclxuICAgICAgICAgICAgICAgIGxldCBtaXRlckxpbWl0ID0gdGV4dFN0cm9rZVN0eWxlLmdldE1pdGVyTGltaXQoKTtcclxuICAgICAgICAgICAgICAgIHN0cm9rZVN0YXRlLmxpbmVDYXAgPSB0ZXh0U3Ryb2tlU3R5bGUuZ2V0TGluZUNhcCgpIHx8ICg8YW55Pm9sLnJlbmRlci5jYW52YXMpLmRlZmF1bHRMaW5lQ2FwO1xyXG4gICAgICAgICAgICAgICAgc3Ryb2tlU3RhdGUubGluZURhc2ggPSBsaW5lRGFzaCA/IGxpbmVEYXNoLnNsaWNlKCkgOiAoPGFueT5vbC5yZW5kZXIuY2FudmFzKS5kZWZhdWx0TGluZURhc2g7XHJcbiAgICAgICAgICAgICAgICBzdHJva2VTdGF0ZS5saW5lRGFzaE9mZnNldCA9XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZURhc2hPZmZzZXQgPT09IHVuZGVmaW5lZCA/ICg8YW55Pm9sLnJlbmRlci5jYW52YXMpLmRlZmF1bHRMaW5lRGFzaE9mZnNldCA6IGxpbmVEYXNoT2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgc3Ryb2tlU3RhdGUubGluZUpvaW4gPSB0ZXh0U3Ryb2tlU3R5bGUuZ2V0TGluZUpvaW4oKSB8fCAoPGFueT5vbC5yZW5kZXIuY2FudmFzKS5kZWZhdWx0TGluZUpvaW47XHJcbiAgICAgICAgICAgICAgICBzdHJva2VTdGF0ZS5saW5lV2lkdGggPVxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVXaWR0aCA9PT0gdW5kZWZpbmVkID8gKDxhbnk+b2wucmVuZGVyLmNhbnZhcykuZGVmYXVsdExpbmVXaWR0aCA6IGxpbmVXaWR0aDtcclxuICAgICAgICAgICAgICAgIHN0cm9rZVN0YXRlLm1pdGVyTGltaXQgPVxyXG4gICAgICAgICAgICAgICAgICAgIG1pdGVyTGltaXQgPT09IHVuZGVmaW5lZCA/ICg8YW55Pm9sLnJlbmRlci5jYW52YXMpLmRlZmF1bHRNaXRlckxpbWl0IDogbWl0ZXJMaW1pdDtcclxuICAgICAgICAgICAgICAgIHN0cm9rZVN0YXRlLnN0cm9rZVN0eWxlID0gb2wuY29sb3JsaWtlLmFzQ29sb3JMaWtlKFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHRTdHJva2VTdHlsZS5nZXRDb2xvcigpIHx8ICg8YW55Pm9sLnJlbmRlci5jYW52YXMpLmRlZmF1bHRTdHJva2VTdHlsZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRleHRTdGF0ZSA9IHRoaXMudGV4dFN0YXRlXztcclxuICAgICAgICAgICAgbGV0IGZvbnQgPSB0ZXh0U3R5bGUuZ2V0Rm9udCgpIHx8ICg8YW55Pm9sLnJlbmRlci5jYW52YXMpLmRlZmF1bHRGb250O1xyXG4gICAgICAgICAgICAoPGFueT5vbC5yZW5kZXIuY2FudmFzKS5jaGVja0ZvbnQoZm9udCk7XHJcbiAgICAgICAgICAgIGxldCB0ZXh0U2NhbGUgPSB0ZXh0U3R5bGUuZ2V0U2NhbGUoKTtcclxuICAgICAgICAgICAgdGV4dFN0YXRlLm92ZXJmbG93ID0gdGV4dFN0eWxlLmdldE92ZXJmbG93KCk7XHJcbiAgICAgICAgICAgIHRleHRTdGF0ZS5mb250ID0gZm9udDtcclxuICAgICAgICAgICAgdGV4dFN0YXRlLm1heEFuZ2xlID0gdGV4dFN0eWxlLmdldE1heEFuZ2xlKCk7XHJcbiAgICAgICAgICAgIHRleHRTdGF0ZS5wbGFjZW1lbnQgPSB0ZXh0U3R5bGUuZ2V0UGxhY2VtZW50KCk7XHJcbiAgICAgICAgICAgIHRleHRTdGF0ZS50ZXh0QWxpZ24gPSB0ZXh0U3R5bGUuZ2V0VGV4dEFsaWduKCk7XHJcbiAgICAgICAgICAgIHRleHRTdGF0ZS50ZXh0QmFzZWxpbmUgPSB0ZXh0U3R5bGUuZ2V0VGV4dEJhc2VsaW5lKCkgfHwgKDxhbnk+b2wucmVuZGVyLmNhbnZhcykuZGVmYXVsdFRleHRCYXNlbGluZTtcclxuICAgICAgICAgICAgdGV4dFN0YXRlLmJhY2tncm91bmRGaWxsID0gdGV4dFN0eWxlLmdldEJhY2tncm91bmRGaWxsKCk7XHJcbiAgICAgICAgICAgIHRleHRTdGF0ZS5iYWNrZ3JvdW5kU3Ryb2tlID0gdGV4dFN0eWxlLmdldEJhY2tncm91bmRTdHJva2UoKTtcclxuICAgICAgICAgICAgdGV4dFN0YXRlLnBhZGRpbmcgPSB0ZXh0U3R5bGUuZ2V0UGFkZGluZygpIHx8ICg8YW55Pm9sLnJlbmRlci5jYW52YXMpLmRlZmF1bHRQYWRkaW5nO1xyXG4gICAgICAgICAgICB0ZXh0U3RhdGUuc2NhbGUgPSB0ZXh0U2NhbGUgPT09IHVuZGVmaW5lZCA/IDEgOiB0ZXh0U2NhbGU7XHJcblxyXG4gICAgICAgICAgICBsZXQgdGV4dE9mZnNldFggPSB0ZXh0U3R5bGUuZ2V0T2Zmc2V0WCgpO1xyXG4gICAgICAgICAgICBsZXQgdGV4dE9mZnNldFkgPSB0ZXh0U3R5bGUuZ2V0T2Zmc2V0WSgpO1xyXG4gICAgICAgICAgICBsZXQgdGV4dFJvdGF0ZVdpdGhWaWV3ID0gdGV4dFN0eWxlLmdldFJvdGF0ZVdpdGhWaWV3KCk7XHJcbiAgICAgICAgICAgIGxldCB0ZXh0Um90YXRpb24gPSB0ZXh0U3R5bGUuZ2V0Um90YXRpb24oKTtcclxuICAgICAgICAgICAgdGhpcy50ZXh0XyA9IHRleHRTdHlsZS5nZXRUZXh0KCkgfHwgXCJcIjtcclxuICAgICAgICAgICAgdGhpcy50ZXh0T2Zmc2V0WF8gPSB0ZXh0T2Zmc2V0WCA9PT0gdW5kZWZpbmVkID8gMCA6IHRleHRPZmZzZXRYO1xyXG4gICAgICAgICAgICB0aGlzLnRleHRPZmZzZXRZXyA9IHRleHRPZmZzZXRZID09PSB1bmRlZmluZWQgPyAwIDogdGV4dE9mZnNldFk7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dFJvdGF0ZVdpdGhWaWV3XyA9IHRleHRSb3RhdGVXaXRoVmlldyA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiB0ZXh0Um90YXRlV2l0aFZpZXc7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dFJvdGF0aW9uXyA9IHRleHRSb3RhdGlvbiA9PT0gdW5kZWZpbmVkID8gMCA6IHRleHRSb3RhdGlvbjtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3Ryb2tlS2V5XyA9IHN0cm9rZVN0YXRlID8gKHR5cGVvZiBzdHJva2VTdGF0ZS5zdHJva2VTdHlsZSA9PT0gXCJzdHJpbmdcIiA/IHN0cm9rZVN0YXRlLnN0cm9rZVN0eWxlIDogKDxhbnk+b2wpLmluZGV4LmdldFVpZChzdHJva2VTdGF0ZS5zdHJva2VTdHlsZSkpICsgc3Ryb2tlU3RhdGUubGluZUNhcCArIHN0cm9rZVN0YXRlLmxpbmVEYXNoT2Zmc2V0ICsgXCJ8XCIgKyBzdHJva2VTdGF0ZS5saW5lV2lkdGggKyBzdHJva2VTdGF0ZS5saW5lSm9pbiArIHN0cm9rZVN0YXRlLm1pdGVyTGltaXQgKyBcIltcIiArIHN0cm9rZVN0YXRlLmxpbmVEYXNoLmpvaW4oKSArIFwiXVwiIDogXCJcIjtcclxuICAgICAgICAgICAgdGhpcy50ZXh0S2V5XyA9IHRleHRTdGF0ZS5mb250ICsgdGV4dFN0YXRlLnNjYWxlICsgKHRleHRTdGF0ZS50ZXh0QWxpZ24gfHwgXCI/XCIpO1xyXG4gICAgICAgICAgICB0aGlzLmZpbGxLZXlfID0gZmlsbFN0YXRlID8gKHR5cGVvZiBmaWxsU3RhdGUuZmlsbFN0eWxlID09PSBcInN0cmluZ1wiID8gZmlsbFN0YXRlLmZpbGxTdHlsZSA6IChcInxcIiArICg8YW55Pm9sKS5pbmRleC5nZXRVaWQoZmlsbFN0YXRlLmZpbGxTdHlsZSkpKSA6IFwiXCI7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWwgPSB0ZXh0U3R5bGUubGFiZWw7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWxQb3NpdGlvbiA9IHRleHRTdHlsZS5sYWJlbFBvc2l0aW9uO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZHJhd1RleHRDdXN0b20oZ2VvbWV0cnk6IGFueSwgZmVhdHVyZTogYW55KSB7XHJcbiAgICAgICAgbGV0IGZpbGxTdGF0ZSA9IHRoaXMudGV4dEZpbGxTdGF0ZV87XHJcbiAgICAgICAgbGV0IHN0cm9rZVN0YXRlID0gdGhpcy50ZXh0U3Ryb2tlU3RhdGVfO1xyXG4gICAgICAgIGxldCB0ZXh0U3RhdGUgPSB0aGlzLnRleHRTdGF0ZV87XHJcbiAgICAgICAgbGV0IGdlb21ldHJ5VHlwZSA9IGdlb21ldHJ5LmdldFR5cGUoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMudGV4dF8gPT09IFwiXCIgfHwgIXRleHRTdGF0ZSB8fCAoIWZpbGxTdGF0ZSAmJiAhc3Ryb2tlU3RhdGUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxhYmVsUG9zaXRpb24gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoKGdlb21ldHJ5VHlwZSA9PT0gKDxhbnk+b2wuZ2VvbSkuR2VvbWV0cnlUeXBlLkxJTkVfU1RSSU5HIHx8IGdlb21ldHJ5VHlwZSA9PT0gKDxhbnk+b2wuZ2VvbSkuR2VvbWV0cnlUeXBlLk1VTFRJX0xJTkVfU1RSSU5HKSAmJiAhdGhpcy5sYWJlbCkge1xyXG4gICAgICAgICAgICBsZXQgYmVnaW4gPSB0aGlzLmNvb3JkaW5hdGVzLmxlbmd0aDtcclxuICAgICAgICAgICAgbGV0IGdlb21ldHJ5VHlwZSA9IGdlb21ldHJ5LmdldFR5cGUoKTtcclxuICAgICAgICAgICAgbGV0IGZsYXRDb29yZGluYXRlcyA9IHRoaXMubGFiZWxQb3NpdGlvbjtcclxuICAgICAgICAgICAgbGV0IGVuZCA9IDI7XHJcbiAgICAgICAgICAgIGxldCBzdHJpZGUgPSAyO1xyXG4gICAgICAgICAgICBsZXQgaSwgaWk7XHJcbiAgICAgICAgICAgIC8vIGlmICghb2wuZXh0ZW50LmludGVyc2VjdHModGhpcy5nZXRCdWZmZXJlZE1heEV4dGVudCgpLCBnZW9tZXRyeS5nZXRFeHRlbnQoKSkpIHtcclxuICAgICAgICAgICAgLy8gICAgIHJldHVybjtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICBsZXQgZW5kcztcclxuICAgICAgICAgICAgLy8gZmxhdENvb3JkaW5hdGVzID0gZ2VvbWV0cnkuZ2V0RmxhdENvb3JkaW5hdGVzKCk7XHJcbiAgICAgICAgICAgIHN0cmlkZSA9IGdlb21ldHJ5LmdldFN0cmlkZSgpO1xyXG4gICAgICAgICAgICBpZiAoZ2VvbWV0cnlUeXBlID09PSAoPGFueT5vbC5nZW9tKS5HZW9tZXRyeVR5cGUuTElORV9TVFJJTkcpIHtcclxuICAgICAgICAgICAgICAgIGVuZHMgPSBbZmxhdENvb3JkaW5hdGVzLmxlbmd0aF07XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZ2VvbWV0cnlUeXBlID09PSAoPGFueT5vbC5nZW9tKS5HZW9tZXRyeVR5cGUuTVVMVElfTElORV9TVFJJTkcpIHtcclxuICAgICAgICAgICAgICAgIGVuZHMgPSBnZW9tZXRyeS5nZXRFbmRzKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZ2VvbWV0cnlUeXBlID09PSAoPGFueT5vbC5nZW9tKS5HZW9tZXRyeVR5cGUuUE9MWUdPTikge1xyXG4gICAgICAgICAgICAgICAgZW5kcyA9IGdlb21ldHJ5LmdldEVuZHMoKS5zbGljZSgwLCAxKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChnZW9tZXRyeVR5cGUgPT09ICg8YW55Pm9sLmdlb20pLkdlb21ldHJ5VHlwZS5NVUxUSV9QT0xZR09OKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZW5kc3MgPSBnZW9tZXRyeS5nZXRFbmRzcygpO1xyXG4gICAgICAgICAgICAgICAgZW5kcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChpID0gMCwgaWkgPSBlbmRzcy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5kcy5wdXNoKGVuZHNzW2ldWzBdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmJlZ2luR2VvbWV0cnkoZ2VvbWV0cnksIGZlYXR1cmUpO1xyXG4gICAgICAgICAgICBsZXQgdGV4dEFsaWduID0gdGV4dFN0YXRlLnRleHRBbGlnbjtcclxuICAgICAgICAgICAgbGV0IGZsYXRPZmZzZXQgPSAwO1xyXG4gICAgICAgICAgICBsZXQgZmxhdEVuZDtcclxuICAgICAgICAgICAgZm9yIChsZXQgbyA9IDAsIG9vID0gZW5kcy5sZW5ndGg7IG8gPCBvbzsgKytvKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGV4dEFsaWduID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmFuZ2UgPSAoPGFueT5vbC5nZW9tKS5mbGF0LnN0cmFpZ2h0Y2h1bmsubGluZVN0cmluZyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFN0YXRlLm1heEFuZ2xlLCBmbGF0Q29vcmRpbmF0ZXMsIGZsYXRPZmZzZXQsIGVuZHNbb10sIHN0cmlkZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxhdE9mZnNldCA9IHJhbmdlWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGZsYXRFbmQgPSByYW5nZVsxXTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxhdEVuZCA9IGVuZHNbb107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBmbGF0T2Zmc2V0OyBpIDwgZmxhdEVuZDsgaSArPSBzdHJpZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvb3JkaW5hdGVzLnB1c2goZmxhdENvb3JkaW5hdGVzW2ldLCBmbGF0Q29vcmRpbmF0ZXNbaSArIDFdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVuZCA9IHRoaXMuY29vcmRpbmF0ZXMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgZmxhdE9mZnNldCA9IGVuZHNbb107XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdDaGFyc18oYmVnaW4sIGVuZCwgdGhpcy5kZWNsdXR0ZXJHcm91cF8pO1xyXG4gICAgICAgICAgICAgICAgYmVnaW4gPSBlbmQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuZW5kR2VvbWV0cnkoZ2VvbWV0cnksIGZlYXR1cmUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpZiAodGhpcy5sYWJlbCA9PT0gdW5kZWZpbmVkKSB7IHJldHVybjsgfVxyXG5cclxuICAgICAgICBsZXQgYmVnaW4gPSB0aGlzLmNvb3JkaW5hdGVzLmxlbmd0aDtcclxuICAgICAgICBsZXQgZmxhdENvb3JkaW5hdGVzID0gdGhpcy5sYWJlbFBvc2l0aW9uO1xyXG4gICAgICAgIGxldCBlbmQgPSAyO1xyXG4gICAgICAgIGxldCBzdHJpZGUgPSAyO1xyXG4gICAgICAgIGxldCBsYWJlbCA9IHRoaXMubGFiZWw7XHJcblxyXG4gICAgICAgIGlmIChnZW9tZXRyeS5nZXRUeXBlKCkgPT09ICg8YW55Pm9sLmdlb20pLkdlb21ldHJ5VHlwZS5QT0xZR09OKSB7XHJcbiAgICAgICAgICAgIHN0cmlkZSA9IDM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBsZXQgYmVnaW4gPSB0aGlzLmNvb3JkaW5hdGVzLmxlbmd0aDtcclxuXHJcbiAgICAgICAgLy8gbGV0IGdlb21ldHJ5VHlwZSA9IGdlb21ldHJ5LmdldFR5cGUoKTtcclxuICAgICAgICAvLyBsZXQgZmxhdENvb3JkaW5hdGVzID0gbnVsbDtcclxuICAgICAgICAvLyBsZXQgZW5kID0gMjtcclxuICAgICAgICAvLyBsZXQgc3RyaWRlID0gMjtcclxuICAgICAgICAvLyBsZXQgaSwgaWk7XHJcblxyXG4gICAgICAgIC8vIGlmICh0ZXh0U3RhdGUucGxhY2VtZW50ID09PSAoPGFueT5vbC5zdHlsZSkuVGV4dFBsYWNlbWVudC5MSU5FKSB7XHJcbiAgICAgICAgLy8gICAgIGlmICghb2wuZXh0ZW50LmludGVyc2VjdHModGhpcy5nZXRCdWZmZXJlZE1heEV4dGVudCgpLCBnZW9tZXRyeS5nZXRFeHRlbnQoKSkpIHtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybjtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICBsZXQgZW5kcztcclxuICAgICAgICAvLyAgICAgZmxhdENvb3JkaW5hdGVzID0gZ2VvbWV0cnkuZ2V0RmxhdENvb3JkaW5hdGVzKCk7XHJcbiAgICAgICAgLy8gICAgIHN0cmlkZSA9IGdlb21ldHJ5LmdldFN0cmlkZSgpO1xyXG4gICAgICAgIC8vICAgICBpZiAoZ2VvbWV0cnlUeXBlID09PSAoPGFueT5vbC5nZW9tKS5HZW9tZXRyeVR5cGUuTElORV9TVFJJTkcpIHtcclxuICAgICAgICAvLyAgICAgICAgIGVuZHMgPSBbZmxhdENvb3JkaW5hdGVzLmxlbmd0aF07XHJcbiAgICAgICAgLy8gICAgIH0gZWxzZSBpZiAoZ2VvbWV0cnlUeXBlID09PSAoPGFueT5vbC5nZW9tKS5HZW9tZXRyeVR5cGUuTVVMVElfTElORV9TVFJJTkcpIHtcclxuICAgICAgICAvLyAgICAgICAgIGVuZHMgPSBnZW9tZXRyeS5nZXRFbmRzKCk7XHJcbiAgICAgICAgLy8gICAgIH0gZWxzZSBpZiAoZ2VvbWV0cnlUeXBlID09PSAoPGFueT5vbC5nZW9tKS5HZW9tZXRyeVR5cGUuUE9MWUdPTikge1xyXG4gICAgICAgIC8vICAgICAgICAgZW5kcyA9IGdlb21ldHJ5LmdldEVuZHMoKS5zbGljZSgwLCAxKTtcclxuICAgICAgICAvLyAgICAgfSBlbHNlIGlmIChnZW9tZXRyeVR5cGUgPT09ICg8YW55Pm9sLmdlb20pLkdlb21ldHJ5VHlwZS5NVUxUSV9QT0xZR09OKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBsZXQgZW5kc3MgPSBnZW9tZXRyeS5nZXRFbmRzcygpO1xyXG4gICAgICAgIC8vICAgICAgICAgZW5kcyA9IFtdO1xyXG4gICAgICAgIC8vICAgICAgICAgZm9yIChpID0gMCwgaWkgPSBlbmRzcy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgZW5kcy5wdXNoKGVuZHNzW2ldWzBdKTtcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICB0aGlzLmJlZ2luR2VvbWV0cnkoZ2VvbWV0cnksIGZlYXR1cmUpO1xyXG4gICAgICAgIC8vICAgICBsZXQgdGV4dEFsaWduID0gdGV4dFN0YXRlLnRleHRBbGlnbjtcclxuICAgICAgICAvLyAgICAgbGV0IGZsYXRPZmZzZXQgPSAwO1xyXG4gICAgICAgIC8vICAgICBsZXQgZmxhdEVuZDtcclxuICAgICAgICAvLyAgICAgZm9yIChsZXQgbyA9IDAsIG9vID0gZW5kcy5sZW5ndGg7IG8gPCBvbzsgKytvKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBpZiAodGV4dEFsaWduID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBsZXQgcmFuZ2UgPSAoPGFueT5vbC5nZW9tKS5mbGF0LnN0cmFpZ2h0Y2h1bmsubGluZVN0cmluZyhcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGV4dFN0YXRlLm1heEFuZ2xlLCBmbGF0Q29vcmRpbmF0ZXMsIGZsYXRPZmZzZXQsIGVuZHNbb10sIHN0cmlkZSk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgZmxhdE9mZnNldCA9IHJhbmdlWzBdO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGZsYXRFbmQgPSByYW5nZVsxXTtcclxuICAgICAgICAvLyAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgZmxhdEVuZCA9IGVuZHNbb107XHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgICAgICBmb3IgKGkgPSBmbGF0T2Zmc2V0OyBpIDwgZmxhdEVuZDsgaSArPSBzdHJpZGUpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLmNvb3JkaW5hdGVzLnB1c2goZmxhdENvb3JkaW5hdGVzW2ldLCBmbGF0Q29vcmRpbmF0ZXNbaSArIDFdKTtcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgIGVuZCA9IHRoaXMuY29vcmRpbmF0ZXMubGVuZ3RoO1xyXG4gICAgICAgIC8vICAgICAgICAgZmxhdE9mZnNldCA9IGVuZHNbb107XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmRyYXdDaGFyc18oYmVnaW4sIGVuZCwgdGhpcy5kZWNsdXR0ZXJHcm91cF8pO1xyXG4gICAgICAgIC8vICAgICAgICAgYmVnaW4gPSBlbmQ7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgdGhpcy5lbmRHZW9tZXRyeShnZW9tZXRyeSwgZmVhdHVyZSk7XHJcblxyXG4gICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgIGxldCBsYWJlbCA9IHRoaXMuZ2V0SW1hZ2UodGhpcy50ZXh0XywgdGhpcy50ZXh0S2V5XywgdGhpcy5maWxsS2V5XywgdGhpcy5zdHJva2VLZXlfKTtcclxuICAgICAgICAvLyAgICAgbGV0IHdpZHRoID0gbGFiZWwud2lkdGggLyB0aGlzLnBpeGVsUmF0aW87XHJcbiAgICAgICAgLy8gICAgIGxldCBDb25zdHJ1Y3RvciA9IHRoaXMuQkFUQ0hfQ09OU1RSVUNUT1JTX0NVU1RPTVtnZW9tZXRyeVR5cGVdO1xyXG4gICAgICAgIC8vICAgICBsZXQgdGV4dExhYmVsaW5nU3RyYXRlZ3kgPSBuZXcgQ29uc3RydWN0b3IoKTtcclxuXHJcbiAgICAgICAgLy8gICAgIHN3aXRjaCAoZ2VvbWV0cnlUeXBlKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBjYXNlICg8YW55Pm9sLmdlb20pLkdlb21ldHJ5VHlwZS5QT0lOVDpcclxuICAgICAgICAvLyAgICAgICAgIGNhc2UgKDxhbnk+b2wuZ2VvbSkuR2VvbWV0cnlUeXBlLk1VTFRJX1BPSU5UOlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGZsYXRDb29yZGluYXRlcyA9IGdlb21ldHJ5LmdldEZsYXRDb29yZGluYXRlcygpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGVuZCA9IGZsYXRDb29yZGluYXRlcy5sZW5ndGg7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgLy8gICAgICAgICBjYXNlICg8YW55Pm9sLmdlb20pLkdlb21ldHJ5VHlwZS5MSU5FX1NUUklORzpcclxuICAgICAgICAvLyAgICAgICAgICAgICBmbGF0Q29vcmRpbmF0ZXMgPSAvKiogQHR5cGUge29sLmdlb20uTGluZVN0cmluZ30gKi8gKGdlb21ldHJ5KS5nZXRGbGF0TWlkcG9pbnQoKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBpZiAoIXRleHRMYWJlbGluZ1N0cmF0ZWd5Lk1hcmtMb2NhdGlvbihmbGF0Q29vcmRpbmF0ZXMsIGxhYmVsLCB0aGlzLnJlc29sdXRpb24pKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgLy8gICAgICAgICBjYXNlICg8YW55Pm9sLmdlb20pLkdlb21ldHJ5VHlwZS5DSVJDTEU6XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgZmxhdENvb3JkaW5hdGVzID0gLyoqIEB0eXBlIHtvbC5nZW9tLkNpcmNsZX0gKi8gKGdlb21ldHJ5KS5nZXRDZW50ZXIoKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAvLyAgICAgICAgIGNhc2UgKDxhbnk+b2wuZ2VvbSkuR2VvbWV0cnlUeXBlLk1VTFRJX0xJTkVfU1RSSU5HOlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGZsYXRDb29yZGluYXRlcyA9IC8qKiBAdHlwZSB7b2wuZ2VvbS5NdWx0aUxpbmVTdHJpbmd9ICovIChnZW9tZXRyeSkuZ2V0RmxhdE1pZHBvaW50cygpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGVuZCA9IGZsYXRDb29yZGluYXRlcy5sZW5ndGg7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgLy8gICAgICAgICBjYXNlICg8YW55Pm9sLmdlb20pLkdlb21ldHJ5VHlwZS5QT0xZR09OOlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGZsYXRDb29yZGluYXRlcyA9IC8qKiBAdHlwZSB7b2wuZ2VvbS5Qb2x5Z29ufSAqLyAoZ2VvbWV0cnkpLmdldEZsYXRJbnRlcmlvclBvaW50KCk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgaWYgKCF0ZXh0U3RhdGUub3ZlcmZsb3cgJiYgZmxhdENvb3JkaW5hdGVzWzJdIC8gdGhpcy5yZXNvbHV0aW9uIDwgd2lkdGgpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgICAgICAvLyBpZiAoIXRleHRMYWJlbGluZ1N0cmF0ZWd5Lk1hcmtMb2NhdGlvbihmbGF0Q29vcmRpbmF0ZXMsIGxhYmVsLCB0aGlzLnJlc29sdXRpb24pKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gICAgIHJldHVybjtcclxuICAgICAgICAvLyAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgc3RyaWRlID0gMztcclxuICAgICAgICAvLyAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAvLyAgICAgICAgIGNhc2UgKDxhbnk+b2wuZ2VvbSkuR2VvbWV0cnlUeXBlLk1VTFRJX1BPTFlHT046XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgbGV0IGludGVyaW9yUG9pbnRzID0gLyoqIEB0eXBlIHtvbC5nZW9tLk11bHRpUG9seWdvbn0gKi8gKGdlb21ldHJ5KS5nZXRGbGF0SW50ZXJpb3JQb2ludHMoKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBmbGF0Q29vcmRpbmF0ZXMgPSBbXTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBmb3IgKGkgPSAwLCBpaSA9IGludGVyaW9yUG9pbnRzLmxlbmd0aDsgaSA8IGlpOyBpICs9IDMpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgaWYgKHRleHRTdGF0ZS5vdmVyZmxvdyB8fCBpbnRlcmlvclBvaW50c1tpICsgMl0gLyB0aGlzLnJlc29sdXRpb24gPj0gd2lkdGgpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGZsYXRDb29yZGluYXRlcy5wdXNoKGludGVyaW9yUG9pbnRzW2ldLCBpbnRlcmlvclBvaW50c1tpICsgMV0pO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGVuZCA9IGZsYXRDb29yZGluYXRlcy5sZW5ndGg7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgaWYgKGVuZCA9PT0gMCkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAvLyAgICAgfVxyXG5cclxuICAgICAgICBlbmQgPSB0aGlzLmFwcGVuZEZsYXRDb29yZGluYXRlcyhmbGF0Q29vcmRpbmF0ZXMsIDAsIGVuZCwgc3RyaWRlLCBmYWxzZSwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuYmVnaW5HZW9tZXRyeShnZW9tZXRyeSwgZmVhdHVyZSk7XHJcbiAgICAgICAgaWYgKHRleHRTdGF0ZS5iYWNrZ3JvdW5kRmlsbCB8fCB0ZXh0U3RhdGUuYmFja2dyb3VuZFN0cm9rZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldEZpbGxTdHJva2VTdHlsZSh0ZXh0U3RhdGUuYmFja2dyb3VuZEZpbGwsIHRleHRTdGF0ZS5iYWNrZ3JvdW5kU3Ryb2tlKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVGaWxsU3R5bGUodGhpcy5zdGF0ZSwgdGhpcy5hcHBseUZpbGwsIGdlb21ldHJ5KTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTdHJva2VTdHlsZSh0aGlzLnN0YXRlLCB0aGlzLmFwcGx5U3Ryb2tlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kcmF3VGV4dEltYWdlXyhsYWJlbCwgYmVnaW4sIGVuZCk7XHJcbiAgICAgICAgdGhpcy5lbmRHZW9tZXRyeShnZW9tZXRyeSwgZmVhdHVyZSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG5cclxuICAgIEJBVENIX0NPTlNUUlVDVE9SU19DVVNUT00gPSB7XHJcbiAgICAgICAgXCJQb2ludFwiOiBEZXRlY3RUZXh0TGFiZWxpbmdTdHJhdGVneSxcclxuICAgICAgICBcIk11bHRpUG9pbnRcIjogVGV4dExhYmVsaW5nU3RyYXRlZ3ksXHJcbiAgICAgICAgXCJMaW5lU3RyaW5nXCI6IFRleHRMYWJlbGluZ1N0cmF0ZWd5LFxyXG4gICAgICAgIFwiQ2lyY2xlXCI6IFRleHRMYWJlbGluZ1N0cmF0ZWd5LFxyXG4gICAgICAgIFwiTXVsdGlMaW5lU3RyaW5nXCI6IFRleHRMYWJlbGluZ1N0cmF0ZWd5LFxyXG4gICAgICAgIFwiUG9seWdvblwiOiBUZXh0TGFiZWxpbmdTdHJhdGVneSxcclxuICAgICAgICBcIk11bHRpUG9seWdvblwiOiBUZXh0TGFiZWxpbmdTdHJhdGVneVxyXG4gICAgfTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvdGV4dFJlcGxheUN1c3RvbS50cyIsImV4cG9ydCBjbGFzcyBXb3JsZFN0cmVldFZlY3RvclRpbGVMYXllciBleHRlbmRzIChvbC5sYXllci5WZWN0b3JUaWxlIGFzIHsgbmV3KHA6IG9seC5sYXllci5WZWN0b3JUaWxlT3B0aW9ucyk6IGFueTsgfSkge1xyXG4gICAgY29uc3RydWN0b3Iob3B0X29wdGlvbnM/OiBvbHgubGF5ZXIuVmVjdG9yVGlsZU9wdGlvbnMpIHtcclxuICAgICAgICBzdXBlcihvcHRfb3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy50eXBlID0gKDxhbnk+b2wpLkxheWVyVHlwZS5NQVBTVUlURV9WRUNUT1JUSUxFO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xheWVyL3dvcmxkU3RyZWV0VmVjdG9yVGlsZWxheWVyLnRzIiwiZXhwb3J0IGNsYXNzIFV0aWwge1xyXG4gICAgc3RhdGljIGlzU3R5bGVKc29uVXJsKHN0eWxlSnNvbik6IGJvb2xlYW4ge1xyXG4gICAgICAgIGxldCByZWdleHAgPSAvKGZ0cHxodHRwfGh0dHBzKTpcXC9cXC8oXFx3Kzp7MCwxfVxcdypAKT8oXFxTKykoOlswLTldKyk/KFxcL3xcXC8oW1xcdyMhOi4/Kz0mJUAhXFwtXFwvXSkpPy87XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBzdHlsZUpzb24gPT09IFwic3RyaW5nXCIgJiYgcmVnZXhwLnRlc3Qoc3R5bGVKc29uKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsLnRzIiwiZXhwb3J0IGNsYXNzIEdlb1RpbGVRdWV1ZSBleHRlbmRzICgoPGFueT5vbCkuVGlsZVF1ZXVlIGFzIHsgbmV3KHRpbGVQcmlvcml0eUZ1bmN0aW9uOiBhbnksIHRpbGVDaGFuZ2VDYWxsYmFjazogYW55KSB9KSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aWxlUHJpb3JpdHlGdW5jdGlvbjogYW55LCB0aWxlQ2hhbmdlQ2FsbGJhY2s6IGFueSkge1xyXG4gICAgICAgIHN1cGVyKHRpbGVQcmlvcml0eUZ1bmN0aW9uLCB0aWxlQ2hhbmdlQ2FsbGJhY2spO1xyXG4gICAgICAgIHRoaXMubG9hZE1vcmVUaWxlcyA9IHRoaXMubG9hZE1vcmVUaWxlc0N1c3RvbTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9hZE1vcmVUaWxlc0N1c3RvbShtYXhUb3RhbExvYWRpbmc6IG51bWJlciwgbWF4TmV3TG9hZHM6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBuZXdMb2FkcyA9IDA7XHJcbiAgICAgICAgbGV0IGFib3J0ZWRUaWxlcyA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBzdGF0ZSwgdGlsZSwgdGlsZUtleTtcclxuICAgICAgICB3aGlsZSAodGhpcy50aWxlc0xvYWRpbmdfIDwgbWF4VG90YWxMb2FkaW5nICYmIG5ld0xvYWRzIDwgbWF4TmV3TG9hZHMgJiZcclxuICAgICAgICAgICAgdGhpcy5nZXRDb3VudCgpID4gMCkge1xyXG4gICAgICAgICAgICB0aWxlID0gLyoqIEB0eXBlIHtvbC5UaWxlfSAqLyAodGhpcy5kZXF1ZXVlKClbMF0pO1xyXG4gICAgICAgICAgICB0aWxlS2V5ID0gdGlsZS5nZXRLZXkoKTtcclxuICAgICAgICAgICAgc3RhdGUgPSB0aWxlLmdldFN0YXRlKCk7XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gKDxhbnk+b2wpLlRpbGVTdGF0ZS5BQk9SVCkge1xyXG4gICAgICAgICAgICAgICAgYWJvcnRlZFRpbGVzID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChzdGF0ZSA9PT0gKDxhbnk+b2wpLlRpbGVTdGF0ZS5JRExFICYmICEodGlsZUtleSBpbiB0aGlzLnRpbGVzTG9hZGluZ0tleXNfKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aWxlc0xvYWRpbmdLZXlzX1t0aWxlS2V5XSA9IHRpbGU7XHJcbiAgICAgICAgICAgICAgICArK3RoaXMudGlsZXNMb2FkaW5nXztcclxuICAgICAgICAgICAgICAgICsrbmV3TG9hZHM7XHJcbiAgICAgICAgICAgICAgICB0aWxlLmxvYWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobmV3TG9hZHMgPT09IDAgJiYgYWJvcnRlZFRpbGVzKSB7XHJcbiAgICAgICAgICAgIC8vIERvIG5vdCBzdG9wIHRoZSByZW5kZXIgbG9vcCB3aGVuIGFsbCB3YW50ZWQgdGlsZXMgd2VyZSBhYm9ydGVkIGR1ZSB0b1xyXG4gICAgICAgICAgICAvLyBhIHNtYWxsLCBzYXR1cmF0ZWQgdGlsZSBjYWNoZS5cclxuICAgICAgICAgICAgdGhpcy50aWxlQ2hhbmdlQ2FsbGJhY2tfKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2dlb1RpbGVRdWV1ZS50cyJdLCJzb3VyY2VSb290IjoiIn0=