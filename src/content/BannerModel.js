import {
    types
} from 'mobx-state-tree';

import BaseContentItemModel from './BaseContentItemModel';
import ImageModel from './ImageModel';

const BannerModel =
    types.compose(
        BaseContentItemModel,
        types.model({
            img: ImageModel,
            alignment: types.maybeNull(types.string),
            header: types.maybeNull(types.string),
            subheader: types.maybeNull(types.string),
            description: types.maybeNull(types.string)
        })
    );

export default BannerModel;