export default class StyleJsonManager {
    constructor() {
        // styleJSON.sources[0].options = { 'featureClass': 'ol.Feature' };
    }

    getStylesByLayerId(layerId) {
        let arr = styleJSON['layers'][0]['styles'].filter(val => val.startsWith(layerId));
        return styleJSON['styles'].filter(value => {
            let temp = arr.filter(val => {
                return value['id'] === val;
            });
            if (temp.length > 0) {
                return value;
            }
            return false;
        });
    }

    getStyleIdsByLayerId(layerId) {
        return styleJSON['layers'][0]['styles'].filter(val => {
            return val.startsWith(layerId);
        });
    }

    getVariableObjByStyle(style) {
        let str = JSON.stringify(style);
        let arr = Array.from(new Set(str.match(/@[^\"]+/gm)));
        let variableObj = {};
        arr.forEach(key => {
            if (styleJSON['variables'][key]) {
                variableObj[key] = styleJSON['variables'][key];
            } else {
                for (let key2 in styleJSON['variables']) {
                    if (key2.match(key)) {
                        variableObj[key] = styleJSON['variables'][key2];
                    }
                }
            }
        });
        return variableObj;
    }

    getStyleByStyleId(styleId) {
        return styleJSON['styles'].filter(value => {
            return value['id'] === styleId;
        })[0];
    }

    getStyleIdsByZoom(zoom) {
        let rightStyles = [];
        for (let obj of styleJSON.styles) {
            if (obj.filter && obj.filter.match(/zoom/)) {
                let t = obj.filter.match(
                    /(zoom\>\=[0-9]+\;zoom\<\=[0-9]+)|((zoom\<\=[0-9]+\;zoom\>\=[0-9]+))|(zoom\=[0-9]+)/g
                );
                if (t) {
                    t = t[0].replace(/\;/g, '&&');
                    t = t.replace(/(zoom)\=/g, '$1==');
                    if (eval(t)) {
                        rightStyles.push(obj);
                    }
                }
            } else {
                for (let s of obj.style) {
                    if (s.filter) {
                        let t = s.filter.match(
                            /(zoom\>\=[0-9]+\;zoom\<\=[0-9]+)|((zoom\<\=[0-9]+\;zoom\>\=[0-9]+))|(zoom\=[0-9]+)/g
                        );
                        if (t) {
                            t = t[0].replace(/\;/g, '&&');
                            t = t.replace(/(zoom)\=/g, '$1==');
                            if (eval(t)) {
                                rightStyles.push(obj);
                            }
                        }
                    }
                }
            }
        }
        let temp = new Set(rightStyles);
        temp.delete(undefined);
        return Array.from(temp);
    }

    getStyleItemsByStyle(styles) {
        if (!styles) return;
        let stylesId = styles.map(function (value) {
            return value.id;
        });

        let stylesObj = {
            point: [],
            line: [],
            polygon: [],
            label: []
        };

        stylesId.forEach(function (value) {
            if (value.match(/_label_/gm)) {
                stylesObj['label'].push(value);
            } else {
                let key = value.match(/((point)|(linestring)|(polygon))/gm);
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

    setStyleJsonByEditor(JsonObj) {
        if (JsonObj['variables']) {
            for (let key in JsonObj['variables']) {
                if (JsonObj['variables'].hasOwnProperty(key)) {
                    styleJSON['variables'][key] = JsonObj['variables'][key];
                }
            }
        }
        if (JsonObj['styleJson']) {
            for (let key in styleJSON['styles']) {
                if (styleJSON['styles'][key]['id'] === JsonObj['styleJson']['id']) {
                    styleJSON['styles'][key] = JsonObj['styleJson'];
                }
            }
        }
    }

    setColor(params) {
        let obj = getStyleById(objId)[0];
        let colorArr = [];
        if (obj[params['colorAttr']]) {
            colorArr.push(obj[params['colorAttr']]);
            colorMap.set(objId, colorArr);
        } else {
            colorArr.push(params['defaultColor']);
            colorMap.set(objId, colorArr);
        }
        let count = 0;
        for (let attrObj of obj['style']) {
            if (attrObj['filter']) {
                if (attrObj[params['colorAttr']]) {
                    colorArr[0] = attrObj[params['colorAttr']];
                    break;
                } else if (attrObj['style']) {

                    for (let attrObj2 of attrObj['style']) {
                        if (attrObj2[params['colorAttr']]) {
                            count++;
                            colorArr.push(attrObj2[params['colorAttr']]);
                        } else if (attrObj2['style']) {
                            for (let attrObj3 of attrObj2['style']) {
                                if (attrObj3[params['colorAttr']]) {
                                    count++;
                                    colorArr.push(attrObj3[params['colorAttr']]);
                                }
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
        if (count > 0 && colorArr.length > 1) {
            colorArr.shift();
        }
        colorMap.set(objId, colorArr);
    }

    getColorMapByStyleId(styleId) {
        let colorMap = new Map();
        const defaultColor = 'rgb(0,0,0)';
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

    transferVariablesToColor(colorMap) {
        let variables = styleJSON.variables;
        for (let [key, value] of colorMap) {
            for (let [index, val] of value.entries()) {
                if (val.startsWith('@')) {
                    for (let k in variables) {
                        if (k.includes(val)) {
                            value[index] = variables[k];
                        }
                    }
                }
            }
        }
        return colorMap;
    }

    drawShapeAndColor(colorMap) {
        colorMap = this.transferVariablesToColor(colorMap);
        for (let [key, value] of colorMap) {
            let lineCxt = document.getElementById(key).getContext('2d');
            lineCxt.beginPath();
            lineCxt.moveTo(0, 0);
            lineCxt.lineTo(13, 13);
            lineCxt.lineWidth = 2;
            lineCxt.strokeStyle = colorMap.get(key);
            lineCxt.stroke();
        }
    }
    // setStyleJsonByImportJsonFile(styleJSON, file) {
    //     styleJSON = file;
    //     return styleJSON;
    // }
}