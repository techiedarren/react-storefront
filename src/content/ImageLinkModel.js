import {
    types
} from 'mobx-state-tree';

const ImageLinkMetaDataModel = types.model({
    schema: 'http://bigcontent.io/cms/schema/v1/core#/definitions/image-link'
});

const ImageLinkModel = types.model({
    _meta: ImageLinkMetaDataModel,
    defaultHost: types.string,
    endpoint: types.string,
    name: types.string,
    id: types.string
}).actions(function (self) {
    return {
        url() {
            return `//${self.defaultHost}/i/${self.endpoint}/${self.name}?w=500`;
        }
    };
});

export default ImageLinkModel;