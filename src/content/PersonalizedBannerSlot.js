import React, { Component, Fragment } from 'react'
import { observer } from 'mobx-react'
import { withStyles } from '@material-ui/core'

import ContentItem from './ContentItem';

export const styles = theme => ({
  root: {
    paddingBottom: '50px'
  }
})

@withStyles(styles)
@observer
export default class PersonalizedBannerSlot extends Component {
  render() {
    const {
      content
    } = this.props

    return (
      <Fragment>
          <ContentItem content={content.segments.get(0).content}></ContentItem>
      </Fragment>
    )
  }
}
