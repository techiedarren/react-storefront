import { types } from 'mobx-state-tree';
import PersonalizedBannerSlotModel from './PersonalizedBannerSlotModel';

const PageContentModel = types.model('PageContentModel', {
    content: types.map(types.union(
        PersonalizedBannerSlotModel
    ))
}).actions(function (self) {
    return {};
});
export default PageContentModel;