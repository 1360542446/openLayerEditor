import {
    mapControl
} from './../main';
export default class EditJson {
    constructor(id, styleJsonManager) {
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

    render(json, filter) {
        // delete useless  colorpicker node
        this.filter = filter || null;
        this.tempJson = json || null;
        $('.colorpicker').remove();
        let editorHtml = `<div class="auto-complete-ele"><select size =5>
                            </select></div>`;
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
        const getAllChildrenNodes = (node, flag = false) => {
            if (node.hasChildNodes()) {
                let nodeList = node.childNodes;
                nodeList.forEach(node => {
                    let tempFlag = flag;
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
            this.node.querySelectorAll('.rightZoom').forEach(node => {
                node.classList && node.classList.remove('rightZoom');
                node.classList && node.classList.add('anchor');
            });
        }
        if (this.node.querySelector('.anchor')) {
            let node = this.node.querySelector('.anchor');
            let top = 0;
            while (node.parentNode !== this.node) {
                if (node.className.includes('jsonView')) {
                    top += node.offsetTop;
                }
                node = node.parentNode;
            }
            $($('#editor-content .jsonView')[0]).getNiceScroll(0).doScrollTop(top, 0);
        }

    }

    getStyleJson() {
        let text = this._getPlainText(this.node);
        try {
            return JSON.parse(text);
        } catch (e) {
            console.error(e);
        }
    }

    _getAllJsonKeys(json) {
        const getObjectKeys = obj => {
            let keysArr = Object.keys(obj);
            for (let key in obj) {
                if (obj.hasOwnProperty(key)) {
                    let t = judgeType(obj[key]);
                    if (t) keysArr = keysArr.concat(t);
                }
            }
            return keysArr;
        };

        const getObjectArrayKeys = arr => {
            let keysArr = [];
            for (let value of arr) {
                let t = judgeType(value);
                if (t) keysArr = keysArr.concat(t);
            }
            return keysArr;
        };

        const judgeType = (value) => {
            let temp = Object.prototype.toString.call(value);
            let type = temp.match(/[a-zA-Z]+/g)[1];
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
        let set = new Set(getObjectKeys(json));
        return Array.from(set).sort();
    }

    // return weight  if -1 error
    _autoCompleteMatchString(strFather, strChild, length) {
        if (!strFather || !strChild) {
            return -1;
        }
        if (strFather.startsWith(strChild)) {
            return 3;
        } else if (new RegExp(`${strChild.slice(0, length)}.*${strChild.slice(length)}`, 'mg').test(strFather)) {
            return 2;
        } else {
            let flag = true;
            let arr = strChild.split('');
            for (let i of arr) {
                if (!strFather.includes(i)) {
                    flag = false;
                    break;
                }
            }
            if (flag) {
                return 1;
            }
            return -1;
        }
    }

    _autoComplete(e) {
        let node = e.target.parentNode;
        if (!node.className.match(/(name)|(value)|(insert)/) || node.className.match(/color-val/)) {
            this.node.querySelector('.auto-complete-ele select').style.display = 'none';
            return;
        }
        node.classList.remove('editor-error');
        let text = e.target.textContent.replace(/^\,|\,$/mg, '');
        text = text.replace(/^\"|\"$/mg, '');
        let strLength = window.getSelection().getRangeAt(0).startOffset - window.getSelection().getRangeAt(0).startContainer.nodeValue.match(/^\,|^\"/mg).length;
        let [tempArr1, tempArr2, tempArr3] = [
            [],
            [],
            []
        ];
        this.autocompleteSource.forEach(value => {
            let result = this._autoCompleteMatchString(value, text, strLength);
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
        let arr = tempArr3.sort().concat(tempArr2.sort(), tempArr1.sort());
        // console.log(tempArr4.sort(), tempArr3.sort(), tempArr2.sort(), tempArr1.sort());
        if (!arr || arr.length === 0) {
            this.node.querySelector('.auto-complete-ele select').style.display = 'none';
        }
        let str = '';
        for (let i of arr) {
            str = str + `<option value="${i}">${i}</option>`;
        }
        this.node.querySelector('.auto-complete-ele select').innerHTML = str;
        if (!str) {
            this.node.querySelector('.auto-complete-ele select').style.display = 'none';
            return;
        }
        this.node.querySelector('.auto-complete-ele select').style.display = 'block';
        this.tempArr[0] = node;
        this.tempArr[1] = (arr.length) * 10000;
        this.tempArr[2] = arr.length;
        let [left, top, width] = [node.offsetLeft, node.offsetTop, node.offsetWidth];
        while (node.parentNode !== this.node) {
            if (node.className.includes('jsonView')) {
                left += node.offsetLeft;
                top += node.offsetTop;
            }
            node = node.parentNode;
        }
        this.node.querySelector('.auto-complete-ele select').style.left = left + 'px';
        this.node.querySelector('.auto-complete-ele select').style.top = (top - $('#editor-content .jsonView')[0].scrollTop) + 'px';
        this.node.querySelector('.auto-complete-ele select').style.width = (width > 150 ? width : 150) + 'px';
        this.node.querySelector('.auto-complete-ele select').options[0].selected = true;
    }

    _getPlainText(node) {
        $('option').remove();
        const getAllData = (node) => {
            if (node.hasChildNodes()) {
                let tempStr = '';
                let childNodes = node.childNodes.entries();
                for (let arr of childNodes) {
                    if (arr[1].classList && arr[1].classList.contains('delete-checkbox')) {
                        if (arr[1].querySelector('input') && !arr[1].querySelector('input').checked) {
                            return '';
                        }
                    }
                    tempStr += getAllData(arr[1]);
                }
                return tempStr;
            } else {
                return node.textContent;
            }
        };
        let str = getAllData(node);
        str = str.replace(/\s{2}/mg, '');
        str = str.replace(/\,\s*(\})|\,\s*(\})]/mg, '$1');
        str = str.replace(/\,+/mg, ',');
        return str;
    }

    _getTemplateHtml(json, key, comma, deleteFlag = false) {
        let templateHtml = '';
        let typeStr = Object.prototype.toString.call(json);
        switch (typeStr) {
            case '[object Object]':
            {
                let anchor = false;
                let anchorRemove = false;
                let rightZoom = false;
                if (this.filter && json['filter']) {
                    this.filter.forEach((value, key) => {
                        if (value && json['filter'].includes(value) && json['filter'].includes(key)) {
                            anchor = true;
                        }
                    });
                    let arr = json['filter'].match(/(zoom\>\=[0-9]+)|(zoom\<\=[0-9]+)|(zoom\=[0-9]+)/mg);
                    if (arr) {
                        let zoom = mapControl.getView().getZoom();
                        let str = arr.join('&&').replace(/zoom/mg, zoom);
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
                templateHtml += `<div class="jsonView object-json-view ${(anchor && key !== 'styleJson') ? 'anchor' : ''} ${anchorRemove ? 'anchorRemove' : ''} ${rightZoom ? 'rightZoom' : ''}"><div class="expendObj"></div>`;
                templateHtml += key ? `<div class="name object-type" data-value="${key}">"${key}"</div><div class="separator">:</div>` : ``;
                templateHtml += `<div class="leftBracket bracket" >{</div>
                  <div class="children">`;
                let length = Object.keys(json).length;
                for (let key in json) {
                    if (key !== '_delete') {
                        let deleteFlag = false;
                        let flag = --length > 0 ? ',' : '';
                        if (json.hasOwnProperty('_delete') && json['_delete'].length > 0) {
                            json['_delete'].forEach(value => {
                                if (value === key) {
                                    deleteFlag = true;
                                }
                            });
                        }
                        templateHtml += this._getTemplateHtml(json[key], key, flag, deleteFlag);
                    }

                }
                templateHtml += `</div>
                  <div class="rightBracket bracket"><span>}</span><div class="comma">${comma || ''}</div><div class="delete"></div><div class="insert" contentEditable="false"></div></div></div>`;
                break;
            }
            case '[object Array]':
            {
                templateHtml += `<div class="jsonView array-json-view"><div class="expendObj" style="left:1.5em"></div>`;
                templateHtml += key ? `<div class="name array-type" data-value="${key}">"${key}"</div><div class="separator">:</div>` : ``;
                templateHtml += `<div class="leftBracket bracket" >[</div>
                  <div class="children">`;
                let length = json.length;
                for (let value of json) {
                    let flag = --length > 0 ? ',' : '';
                    templateHtml += this._getTemplateHtml(value, '', flag);
                }
                templateHtml += `</div>
                  <div class="rightBracket bracket" ><span>]</span><div class="comma">${comma || ''}</div><div class="delete"></div><div class="insert" contentEditable="false"></div></div></div>`;
                break;
            }
            default:
            {
                let temp = this._renderFontColor(key, json);
                templateHtml += `<div class="jsonView bracket ${deleteFlag === true ? 'delete-checkbox-jsonView' : ''}"><div class="delete-checkbox ${deleteFlag === true ? 'delete-checkbox-visible' : ''} "><input type="checkbox" ${deleteFlag === false ? 'checked' : null} /></div>`;
                templateHtml += key ? `<div class="name ${temp[0] || ''} ${deleteFlag === true ? 'delete-checkbox-true' : ''}" data-value="${key}">"${key}"</div><div class="separator">:</div>` : ``;

                templateHtml += temp[0] === 'color-type' ? `<div contentEditable="false" class="input-group colorpicker-component" title="Using  option">
                                        <input type="text" class="form-control input-lg colorpicker-value" style="display:none" value="${json}" />
                                        <span class="input-group-addon">
                                        <i style="border: solid 1px #9d9d9d"></i>
                                        </span>
                                    </div>` : '';

                if (temp[1] && (temp[1] === 'number-val' || temp[1] === 'bool-val')) {
                    templateHtml += `<div class="value ${temp[1] || ''}  ${deleteFlag === true ? 'delete-checkbox-true' : ''}" data-value="${json}">${json}</div>
                                    <div class="children"></div>
                                    <div class="comma">${comma || ''}</div>`;
                } else {
                    templateHtml += `<div class="value ${temp[1] || ''}  ${deleteFlag === true ? 'delete-checkbox-true' : ''}" data-value="${json}">"${json}"</div>
                                    <div class="children"></div>
                                    <div class="comma">${comma || ''}</div>`;
                }

                templateHtml += `<div class="insert" contentEditable="false"></div>
                                    </div>`;
            }
        }
        return templateHtml;
    }

    _renderFontColor(key, value) {
        if ((String(value) === 'true' || String(value) === 'false')) {
            return ['bool-type', 'bool-val'];
        }

        if (!isNaN(value)) {
            return ['number-type', 'number-val'];
        }

        let type = Object.prototype.toString.call(value);
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

    _partialRender(node) {
        let text = node.querySelector('.leftBracket').textContent + node.querySelector('.children').textContent + node.lastChild.querySelector('span').textContent;
        text = text.replace(/\s{2}/mg, '');
        let json = '';
        try {
            json = JSON.parse(text);
            json['_delete'] = [];
            node.querySelectorAll('.delete-checkbox input').forEach(n => {
                if (n.checked === true) {
                    return;
                }
                let key = n.parentNode.parentNode.querySelector('.name').getAttribute('data-value');
                json['_delete'].push(key);
            });
        } catch (e) {
            console.error(e);
            return true;
        }

        let arrFlag = true;
        if (Object.prototype.toString.call(json) === '[object Array]') {
            arrFlag = '';
        }
        let size = Object.keys(json).length;
        let tempHtml = '';
        for (let key in json) {
            size--;
            if (key === '_delete') {
                continue;
            }
            let deleteFlag = false;
            for (let val of json['_delete']) {
                if (val === key) {
                    deleteFlag = true;
                    break;
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
        mapControl.render(styleJSON);

    }

    _collapseExpendHandle(e) {
        const clickNode = e.target;
        if (clickNode.className.includes('collapseObj')) {
            clickNode.className = 'expendObj';
            clickNode.parentNode.querySelector('.children').style.display = 'inline-block';
        } else if (clickNode.className.includes('expendObj')) {
            clickNode.className = 'collapseObj';
            clickNode.parentNode.querySelector('.children').style.display = 'none';
        }
    }

    _colorPickerChangedHandle(e) {
        e.target.parentNode.parentNode.querySelector('.value').innerText = `"${e.target.value}"`;
        e.target.parentNode.parentNode.querySelector('.value').setAttribute('data-value', `"${e.target.value}"`);

        if (!document.querySelector('.colorpicker-visible')) {
            this.styleJsonManager.setStyleJsonByEditor(this.getStyleJson());
            mapControl.render(styleJSON);
        }
    }

    _colorValueChangedHandle(e) {
        if (e.target.parentNode.className.includes('color-val')) {
            let colorValue = e.target.textContent.replace(/\"/mg, '');
            e.target.parentNode.parentNode.querySelector('.colorpicker-value').value = colorValue;
            e.target.parentNode.parentNode.querySelector('i').style.backgroundColor = colorValue;
        }
    }

    _editorValueChangedHandle(e, flag = false) {
        if (e.target.nodeName === 'SELECT') {
            return;
        }
        let tempNode = '';
        let tempFlag = false;
        if (e.target.contentEditable === 'true' && !flag) {
            return;
        }
        this.node.querySelectorAll('.value').forEach(node => {
            if (node.contentEditable === 'true') {
                node.innerHTML = node.textContent;
                node.contentEditable = false;
                tempNode = node;
                if (`"${node.getAttribute('data-value')}"` === node.textContent || node.getAttribute('data-value') === node.textContent) {
                    tempFlag = true;
                    return;
                } else {
                    node.setAttribute('data-value', node.textContent);
                }
            }
        });
        this.node.querySelectorAll('.name').forEach(node => {
            if (node.contentEditable === 'true') {
                node.innerHTML = node.textContent;
                node.contentEditable = false;
                tempNode = node;
                if (`"${node.getAttribute('data-value')}"` === node.textContent || node.getAttribute('data-value') === node.textContent) {
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
        if (tempNode && ((e.target !== tempNode) || flag)) {
            let parentNode = tempNode.parentNode.parentNode;
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

    _editorDeleteHandle(e) {
        if (e.target.classList.contains('delete')) {
            let parentNode = e.target.parentNode;
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
            mapControl.render(styleJSON);
        }
    }

    _editorInsertHandle(e, flag = false) {
        if (e.target.nodeName === 'SELECT') {
            return;
        }
        let nodeList = this.node.querySelectorAll('.insert').entries();
        for (let n of nodeList) {
            if (n[1].contentEditable === 'true') {
                let node = n[1];
                node.classList.remove('editor-input');
                if (node.textContent.match(/[a-zA-Z0-9]/)) { // the div includes something and need to be refresh
                    let text = node.innerHTML;
                    if (node.textContent) {
                        text = node.textContent.replace(/\s{2}/, '');
                    }
                    // text = this._getPlainText(node);
                    let temp = node.parentNode;
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

                    let parentNode = '';
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
                let node = e.target;
                if (node.contentEditable === 'false') {
                    if (node.previousSibling.nodeName !== 'BR') {
                        node.insertAdjacentHTML('beforebegin', `<br \\>`);
                        node.classList.add('insert-margin');
                        // node.className += ' insert-margin';
                        node.parentNode.style.height = 'auto';
                    }
                    node.contentEditable = true;
                    node.focus();
                }
            }
        }


    }

    _optionValueSelectedByKeyboard(evt) {
        if (this.node.querySelector('.auto-complete-ele select').style.display !== 'block') {
            if (evt.key === 'Enter') {
                evt.preventDefault();
                let node = evt.target;
                if (node.nodeName === 'DIV') {
                    if (node.classList && node.className.match(/insert/m)) {
                        this._editorInsertHandle(evt, true);
                    }
                    this._editorValueChangedHandle(evt, true);
                }
            } }
        switch (evt.key) {
            case 'ArrowDown':
            {
                evt.preventDefault();
                this.node.querySelector('.auto-complete-ele select').options[(this.tempArr[1] + 1) % (this.tempArr[2])].selected = true;
                this.tempArr[1]++;
                break;
            }
            case 'ArrowUp':
            {
                evt.preventDefault();
                this.node.querySelector('.auto-complete-ele select').options[(this.tempArr[1]) % (this.tempArr[2])].selected = true;
                this.tempArr[1]--;
                break;
            }
            default:
            {
                if (evt.key === 'Enter' || evt.key === 'Tab') {
                    evt.preventDefault();
                    this.tempArr[0].textContent = `"${this.node.querySelector('.auto-complete-ele select').value}"`;
                    this.tempArr[0].contenteditable = true;
                    this.tempArr[0].focus();
                    let text = window.getSelection().anchorNode;
                    if (text.nodeName === 'DIV') {
                        text = text.firstChild;
                    }
                    this.node.querySelector('.auto-complete-ele select').style.display = 'none';
                    let range = window.getSelection().getRangeAt(0);
                    range.collapse(true);
                    range.setStart(text, text.length || 0);
                    window.getSelection().removeAllRanges();
                    window.getSelection().addRange(range);
                }
            }
        }
    }

    _optionValueInserted(e) {
        if (e.target.nodeName === 'OPTION') {
            this.tempArr[0].textContent = `"${e.target.value}"`;
            this.tempArr[0].contenteditable = true;
            this.tempArr[0].focus();
            let text = window.getSelection().anchorNode;
            if (text.nodeName === 'DIV') {
                text = text.firstChild;
            }
            let range = window.getSelection().getRangeAt(0);
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

    _deleteButtonChangeHandle(e) {
        let node = e.target;
        let parentNodeNamedChildren = node.parentNode.parentNode.parentNode;
        let parentNode = parentNodeNamedChildren.parentNode;
        if (!parentNode.classList.contains('jsonView')) {
            return;
        }

        this._partialRender(parentNode);
    }

    _bindEvents() {
        // expend collapse
        this.node.addEventListener('mousedown', this._collapseExpendHandle);

        // color event      ?????????????????????????????????
        let colorpickeNodeArrs = this.node.querySelectorAll('.colorpicker-value').entries();
        for (let arr of colorpickeNodeArrs) {
            arr[1].onchange = this._colorPickerChangedHandle;
        }
        this.node.addEventListener('DOMCharacterDataModified', this._colorValueChangedHandle);
        this.node.addEventListener('DOMCharacterDataModified', this._autoComplete);
        this.node.addEventListener('mouseup', this._editorValueChangedHandle);
        this.node.addEventListener('mouseup', this._editorInsertHandle);
        this.node.addEventListener('mouseup', this._editorDeleteHandle);
        this.node.querySelectorAll('.delete-checkbox').forEach(node => {
            node.querySelector('input').addEventListener('change', this._deleteButtonChangeHandle);
        });

        this.node.querySelector('.auto-complete-ele select').addEventListener('mouseup', this._optionValueInserted);
        this.node.addEventListener('keydown', this._optionValueSelectedByKeyboard);
    }
}