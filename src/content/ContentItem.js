import React, { Component, Fragment } from 'react'
import { observer } from 'mobx-react'
import { withStyles } from '@material-ui/core'
import PersonalizedBannerSlot from './PersonalizedBannerSlot';
import Banner from './Banner';

export const styles = theme => ({
})

@withStyles(styles)
@observer
export default class ContentItem extends Component {
  
  getComponent(schema) {
      switch(schema) {
          case 'https://raw.githubusercontent.com/neilmistryamplience/dc-example-website/willow/slot-types/personalized-banner-slot.json':
            return PersonalizedBannerSlot;
          case 'https://raw.githubusercontent.com/neilmistryamplience/dc-example-website/willow/content-types/banner.json':
            return Banner;
          default:
            return Fragment;
      }
  }

  render() {
    const { content } = this.props
    
    const Component = this.getComponent(content._meta.schema);

    return (
      <Fragment>
          <Component content={content}></Component>
      </Fragment>
    )
  }
}
