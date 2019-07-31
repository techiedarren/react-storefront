import {
    types
} from 'mobx-state-tree';

import ImageLinkModel from './ImageLinkModel';

const ImageModel = types.model({
    imageAltText: types.maybeNull(types.string),
    seoText: types.maybeNull(types.string),
    image: ImageLinkModel
});

export default ImageModel;