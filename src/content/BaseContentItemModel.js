import { types } from 'mobx-state-tree';

const BaseContentItemMetaDataModel = types.model({
    schema: types.string,
    deliveryId: types.string
});

const BaseContentItemModel = types.model({
    _meta: types.maybeNull(BaseContentItemMetaDataModel)
});

export default BaseContentItemModel;