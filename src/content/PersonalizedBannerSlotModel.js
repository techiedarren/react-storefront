import {
    types
} from 'mobx-state-tree';

import BaseContentItemModel from './BaseContentItemModel';
import BannerModel from './BannerModel';

const Segment = types.model({
    content: types.union(
        PersonalizedBannerSlotModel,
        BannerModel
    ),
    segment: types.maybeNull(types.string)
});

const PersonalizedBannerSlotModel =
    types.compose(
        BaseContentItemModel,
        types.model({
            segments: types.array(Segment)
        })
    );

export default PersonalizedBannerSlotModel;