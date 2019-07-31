import React, { Component, Fragment } from 'react'
import { observer } from 'mobx-react'
import { withStyles } from '@material-ui/core'

export const styles = theme => ({
  root: {
    width: '100%'
  },
  img: {
    width: '100%'
  }
})

@withStyles(styles)
@observer
export default class Image extends Component {
  render() {
    const {
      content,
      classes
    } = this.props

    return (
      <picture className={classes.root}>
          <img className={classes.img} src={`${content.image.url()}?w=1600`} alt={content.imageAltText} />
      </picture>
    )
  }
}
