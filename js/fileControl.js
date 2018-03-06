class DownloadStyleJson {
    constructor(eleId) {
        this.eleId = eleId;
        if (document.querySelector(`${eleId}`)) {
            document.querySelector(`${eleId}`).addEventListener('click', e => this._download('style.json', JSON.stringify(styleJSON)));
        }
    }
    _download(fileName, content) {
        let aTag = document.createElement('a');
        let blob = new Blob([content]);
        aTag.download = fileName;
        aTag.href = URL.createObjectURL(blob);
        aTag.click();
        URL.revokeObjectURL(blob);
    }
}

class UpdateStyleJson {
    constructor(eleId, mapControl, menuControl, styleJsonManager) {
        this.eleId = eleId;
        this.mapControl = mapControl;
        this.menuControl = menuControl;
        this.styleJsonManager = styleJsonManager;
        if (document.querySelector(`${eleId}`)) {
            document.querySelector(`${eleId}`).addEventListener('change', this._upDate.bind(this));
        }
    }
    _upDate(evt) {
        let readText = new FileReader();
        readText.onload = file => {
            styleJSON = JSON.parse(file.target.result);
            this.mapControl.render(styleJSON);
            let zoom = this.mapControl.getView().getZoom();
            if ((zoom | 0) === zoom) {
                let obj = this.styleJsonManager.getStyleItemsByStyle(this.styleJsonManager.getStyleIdsByZoom(zoom));
                this.menuControl.styleListRender(obj);
                alert('update success');
                event.target.value = '';
            }
        };
        readText.readAsText(evt.target.files[0], this);
    }
}

export {
    DownloadStyleJson,
    UpdateStyleJson
};