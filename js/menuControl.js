export default class MenuControl {

    constructor(elementId, mapControl, styleJsonManager, styleJsonEditor) {
        this.mapControl = mapControl;
        this.elementId = elementId;
        this.styleJsonManager = styleJsonManager;
        this.styleJsonEditor = styleJsonEditor;
        this._initRender();
        this._event();
        this._whichExpand = null;
    }

    _initRender() {
        let selectAllStr = `
        <div class="selectAll pretty primary">
            <input type="checkbox" id="menu-list-selectAll"> 
            <label for="menu-list-selectAll"><i class="mdi mdi-check"></i> All</label>
        </div>

        <div class="style-list">
            <div class="panel-group" id="accordion">
            </div>
        </div>`;
        let node = document.querySelector(`${this.elementId}>a:last-child`);
        node.className = `list-group-item menu-list-button`;
        document.querySelector(this.elementId).appendChild(document.createElement('div'));
        document.querySelector(`${this.elementId}>div:last-child`).className = `menu-list`;
        document.querySelector(`${this.elementId}>div:last-child`).innerHTML = selectAllStr;
    }

    styleListRender(obj) {
        let str1 = '';
        let tempFlag = false;
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                let str2 = '';
                if (obj[key] && obj[key].length > 0) {
                    for (let styleId of obj[key]) { // arrow
                        if (document.querySelector('#editor-content').getAttribute('styleId') === styleId) {
                            tempFlag = true;
                            str2 += `<li class="list-group-item clicked" title="${styleId}"><i class="fa fa-eye" aria-hidden="true"></i>${styleId}</li>`;
                        } else {
                            str2 += `<li class="list-group-item" title="${styleId}"><i class="fa fa-eye" aria-hidden="true"></i>${styleId}</li>`;
                        }
                    }
                    let titleUpperCase = key.toUpperCase();
                    str1 += `<div class="panel panel-default">
                                <div class="panel-heading">
                                    <h4 class="panel-title">    
                                        <a data-toggle="collapse" data-parent="#accordion" href="#${key}">${titleUpperCase}  <span class="badge"> ${obj[key].length}</span></a>
                                    </h4>
                                </div>
                                <div id="${key}" class="panel-collapse collapse ${key === this._whichExpand ? 'in' : ''}">
                                    <ul class="panel-body list-group">${str2}</ul>
                                </div>
                            </div>`;
                }
            }
        }

        if (!tempFlag) {
            this.styleJsonEditor.render({
            }, '');
        }
        document.querySelector(`${this.elementId} #accordion`).innerHTML = str1;
        const nodeList = document.querySelectorAll(`${this.elementId} #accordion ul li`).entries();
        const eyesList = document.querySelectorAll(`${this.elementId} #accordion ul li i`).entries();
        for (let node of nodeList) {
            node[1].addEventListener('click', e => {
                let styleId = e.target.title;
                if (e.target.nodeName === 'I') {
                    styleId = e.target.parentNode.title;
                }
                if (styleId && this.styleJsonManager.getStyleByStyleId(styleId)) {
                    let style = this.styleJsonManager.getStyleByStyleId(styleId);
                    let variable = this.styleJsonManager.getVariableObjByStyle(style);
                    document.querySelector('#editor-content').setAttribute('styleid', styleId);

                    if (Object.keys(variable).length) {
                        this.styleJsonEditor.render({
                            'variables': variable,
                            'styleJson': style
                        });
                    } else {
                        this.styleJsonEditor.render({
                            'styleJson': style
                        });
                    }

                    if (document.querySelector('#editor').classList.contains('editor-close-transform')) {
                        document.querySelector('#editor').classList.remove('editor-close-transform');
                        document.querySelector('#editor').classList.add('editor-open-transform');

                        document.querySelector('#editor .editor-hide-button span').classList.remove('icon-editor-back');
                        document.querySelector('#editor .editor-hide-button span').classList.add('icon-editor-forward');

                        document.querySelector('#editor .editor-hide-button').classList.add('editor-hide-button-after');
                        $('#map .ol-map-drag').animate({ left: (document.querySelector('#map .ol-map-drag').offsetLeft - document.querySelector('#editor').offsetWidth) + 'px' }, 400);
                        $('#map .ol-overlaycontainer-stopevent .custom-mouse-position').animate({ left: (document.querySelector('#map .ol-overlaycontainer-stopevent .custom-mouse-position').offsetLeft - document.querySelector('#editor').offsetWidth) + 'px' }, 400);
                        $('#map .ol-overlaycontainer-stopevent .ol-attribution').animate({ left: (document.querySelector('#map .ol-overlaycontainer-stopevent .ol-attribution').offsetLeft - document.querySelector('#editor').offsetWidth) + 'px' }, 400);
                        $('#map .ol-overlaycontainer-stopevent .ol-zoom').animate({ left: (document.querySelector('#map .ol-overlaycontainer-stopevent .ol-zoom').offsetLeft - document.querySelector('#editor').offsetWidth) + 'px' }, 300);
                    }

                    const nodeList = document.querySelectorAll(`${this.elementId} #accordion ul li`).entries();

                    for (let n of nodeList) {
                        n[1].classList.remove('clicked');
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
        for (let eye of eyesList) {
            eye[1].addEventListener('click', e => {
                let styleId = e.target.parentNode.title;
                let style = this.styleJsonManager.getStyleByStyleId(styleId);
                if (e.target.className.includes('fa-eye-slash')) {
                    e.target.className = e.target.className.replace(/fa\-eye\-slash/m, 'fa-eye');
                    style.visible = true;
                } else {
                    e.target.className = e.target.className.replace(/fa\-eye/m, 'fa-eye-slash');
                    style.visible = false;
                }
                this.mapControl.render(styleJSON);
            }, false);
        }

        // all nice-scroll bind
        $('.nicescroll-rails').remove();
        $(`#accordion ul`).niceScroll({
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
        $(`#accordion ul`).getNiceScroll().resize();
    }

    _event() {
        document.querySelector(`${this.elementId}>.menu-list-button`).addEventListener('click', e => {
            const ele = document.querySelector(`${this.elementId}>div:last-child`);
            let node = document.querySelector(`${this.elementId}>.menu-list-button`);
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

        document.getElementById('menu-list-selectAll').addEventListener('change', e => {
            if (e.target.checked === true) {
                this.styleListRender(this.styleJsonManager.getStyleItemsByStyle(styleJSON['styles']));
            } else {
                let zoom = this.mapControl.getView().getZoom();
                if ((zoom | 0) === zoom) {
                    let obj = this.styleJsonManager.getStyleItemsByStyle(this.styleJsonManager.getStyleIdsByZoom(zoom));
                    this.styleListRender(obj);

                }
            }
            $(`#accordion ul`).niceScroll({
                zindex: 100,
                autohidemode: false,
                cursorcolor: '#2d3c4d'
            });
            // $(`#accordion ul`).getNiceScroll().resize();
            setTimeout(() => {
                document.body.click();
            }, 0);
        });

        document.addEventListener('click', e => {
            let maxHeight = document.querySelector(`${this.elementId} .menu-list`).offsetHeight - (document.querySelector(`${this.elementId} .menu-list .selectAll`).offsetHeight * 5);
            $($('#editor-content .jsonView')[0]).getNiceScroll().resize();
            let nodelist = document.querySelectorAll(`${this.elementId} .style-list>.panel-group .panel`).entries();
            for (let arr of nodelist) {
                arr[1].querySelector('ul').style.maxHeight = maxHeight + 'px';
                if (arr[1].lastElementChild.getAttribute('aria-expanded') === 'true') {
                    this._whichExpand = arr[1].querySelector('.panel-collapse').id;
                    $('.menu-list .nicescroll-rails').css('opacity', 1);
                    setTimeout(() => {
                        $(`#accordion ul`).getNiceScroll().resize();
                    }, 450);
                } else if (arr[1].contains(e.target)) { // && arr[1].lastElementChild.classList.contains('in')
                    this._whichExpand = '';
                    $(`#accordion ul`).getNiceScroll().hide();
                    $('.menu-list .nicescroll-rails').css('opacity', 0);
                }
            }
        });

        let formerZoom = 0;
        this.mapControl.getMap().on('postcompose', event => {
            let zoom = this.mapControl.getView().getZoom();
            if ((zoom | 0) === zoom && formerZoom !== zoom) {
                formerZoom = zoom;
                let obj = this.styleJsonManager.getStyleItemsByStyle(this.styleJsonManager.getStyleIdsByZoom(zoom));
                this.styleListRender(obj);
            }
        });
    }
}