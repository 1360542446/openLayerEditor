// import { styleJSON } from './texas.StyleJSON';
import MapControl from './js/mapcontrol';
// import StyleJsonEditor from './js/styleJsonEditorControl';
import EditJson from './js/editorControl';
import StyleJsonManager from './js/styleJsonManager';
import MenuControl from './js/menuControl';
import {
    DownloadStyleJson,
    UpdateStyleJson
} from './js/fileControl';
const styleJsonManager = new StyleJsonManager();

// const styleJsonEditor = new StyleJsonEditor('#editor-content', styleJsonManager);

const editJson = new EditJson('#editor-content', styleJsonManager);

const mapControl = new MapControl(1, '#map', styleJsonManager, editJson);

const menuControl = new MenuControl('#sidebar .menu .list-group-first', mapControl, styleJsonManager, editJson);

const downloadStyleJson = new DownloadStyleJson('#download-file');

const updateStyleJson = new UpdateStyleJson('#upload-file', mapControl, menuControl, styleJsonManager);

const editorDrag = (evt) => {
    if (formerWidth - evt.clientX > 0 && formerWidth - evt.clientX < document.body.offsetWidth - document.querySelector('#editor .list-group .list-group-item').offsetWidth - 10) {
        document.querySelector('#editor').style.width = (formerWidth - evt.clientX) + 'px';
        document.querySelector('#map .ol-map-drag').style.left = (formerDragMapLeft + editorWidthTemp - formerWidth + evt.clientX) + 'px';
        document.querySelector('#map .ol-overlaycontainer-stopevent .ol-zoom').style.left = (formerZoomInfoLeft + editorWidthTemp - formerWidth + evt.clientX) + 'px';
        document.querySelector('#map .ol-overlaycontainer-stopevent .custom-mouse-position').style.left = (formerCustomInfoLeft + editorWidthTemp - formerWidth + evt.clientX) + 'px';
        document.querySelector('#map .ol-overlaycontainer-stopevent .ol-attribution').style.left = (formerAttributionInfoLeft + editorWidthTemp - formerWidth + evt.clientX) + 'px';

        $($('#editor-content .jsonView')[0]).getNiceScroll().resize();
    }
};
let formerWidth = 0;
let formerDragMapLeft = 0;
let formerZoomInfoLeft = 0;
let formerCustomInfoLeft = 0;
let formerAttributionInfoLeft = 0;
let editorWidthTemp = 0;
document.querySelector('#editor .editor-drag').addEventListener('mousedown', e => {
    formerWidth = e.clientX + document.querySelector('#editor').offsetWidth;
    formerDragMapLeft = document.querySelector('#map .ol-map-drag').offsetLeft;
    formerZoomInfoLeft = document.querySelector('#map .ol-overlaycontainer-stopevent .ol-zoom').offsetLeft;
    formerCustomInfoLeft = document.querySelector('#map .ol-overlaycontainer-stopevent .custom-mouse-position').offsetLeft;
    formerAttributionInfoLeft = document.querySelector('#map .ol-overlaycontainer-stopevent .ol-attribution').offsetLeft;
    editorWidthTemp = document.querySelector('#editor').offsetWidth;
    window.addEventListener('mousemove', editorDrag);
});

window.addEventListener('mouseup', e => {
    window.removeEventListener('mousemove', editorDrag);
});

document.querySelector('#editor .editor-hide-button').addEventListener('click', e => {
    if (document.querySelector('#editor').classList.contains('editor-close-transform')) {
        document.querySelector('#editor').classList.remove('editor-close-transform');
        document.querySelector('#editor').classList.add('editor-open-transform');

        document.querySelector('#editor .editor-hide-button').classList.add('editor-hide-button-after');
        document.querySelector('#editor .editor-hide-button span').classList.remove('icon-editor-back');
        document.querySelector('#editor .editor-hide-button span').classList.add('icon-editor-forward');

        $(`.ol-overlaycontainer-stopevent .ol-attribution`).animate({ left: (document.querySelector('#map .ol-overlaycontainer-stopevent .ol-attribution').offsetLeft - document.querySelector('#editor').offsetWidth) + 'px' }, 400);
        $('#map .ol-overlaycontainer-stopevent .custom-mouse-position').animate({ left: (document.querySelector('#map .ol-overlaycontainer-stopevent .custom-mouse-position').offsetLeft - document.querySelector('#editor').offsetWidth) + 'px' }, 400);
        $('#map .ol-overlaycontainer-stopevent .ol-zoom').animate({ left: (document.querySelector('#map .ol-overlaycontainer-stopevent .ol-zoom').offsetLeft - document.querySelector('#editor').offsetWidth) + 'px' }, 400);
        $('#map .ol-map-drag').animate({ left: (document.querySelector('#map .ol-map-drag').offsetLeft - document.querySelector('#editor').offsetWidth) + 'px' }, 500);
    } else {
        document.querySelector('#editor .editor-hide-button').classList.remove('editor-hide-button-after');
        document.querySelector('#editor .editor-hide-button span').classList.remove('icon-editor-forward');
        document.querySelector('#editor .editor-hide-button span').classList.add('icon-editor-back');

        document.querySelector('#editor').classList.add('editor-close-transform');
        document.querySelector('#editor').classList.remove('editor-open-transform');

        $(`.ol-overlaycontainer-stopevent .ol-attribution`).animate({ left: (document.querySelector('#map .ol-overlaycontainer-stopevent .ol-attribution').offsetLeft + document.querySelector('#editor').offsetWidth) + 'px' }, 400);
        $('#map .ol-overlaycontainer-stopevent .custom-mouse-position').animate({ left: (document.querySelector('#map .ol-overlaycontainer-stopevent .custom-mouse-position').offsetLeft + document.querySelector('#editor').offsetWidth) + 'px' }, 400);
        $('#map .ol-map-drag').animate({ left: (document.querySelector('#map .ol-map-drag').offsetLeft + document.querySelector('#editor').offsetWidth) + 'px' }, 500);
        $('#map .ol-overlaycontainer-stopevent .ol-zoom').animate({ left: (document.querySelector('#map .ol-overlaycontainer-stopevent .ol-zoom').offsetLeft + document.querySelector('#editor').offsetWidth) + 'px' }, 400);
    }

});

$('#sidebar a').tooltip();
$('#editor a').tooltip();
$('#editor .editor-hide-button').tooltip();
export {
    mapControl
};