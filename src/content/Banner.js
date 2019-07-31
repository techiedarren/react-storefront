import React, { Component, Fragment } from 'react'
import { observer } from 'mobx-react'
import { withStyles } from '@material-ui/core'

import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import Image from './Image';

export const styles = theme => ({
  root: {
    position: 'relative',
    paddingBottom: '47%'
  },
  image: {
    position: 'absolute',
    width: '100%',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  bannerContainer: {
      top: 0,
      width: '33%',
      height: '100%',
      position: 'absolute',

      '&[data-align="right"]': {
          right: 0,
          textAlign: 'left',
          marginRight: '-6px'
      }
  }
})

@withStyles(styles)
@observer
export default class Banner extends Component {
  render() {
    const {
      content,
      classes
    } = this.props

    return (
      <div className={classes.root}>
        <div className={classes.image}>
          <Image content={content.img}></Image>
        </div>
        <div className={classes.bannerContainer} data-align={content.alignment}>
            <BannerInfo header={content.header} subheader={content.subheader} description={content.description}></BannerInfo>
        </div>
      </div>
    )
  }
}

@withStyles(theme => ({
    root: {
        background: 'rgba(255, 255, 255, 0.9)',
        padding: '40px 60px 40px 60px',
        
        position:'absolute',
        top: '50%',
        transform: 'translateY(-50%)'
    },
    header: {
        fontSize: '40px'
    },
    subheader: {
    },
    description: {
    }
}))
export class BannerInfo extends Component {
    render() {
        const {
            header,
            subheader,
            description,
            classes
        } = this.props

        return (
            <div className={classes.root}>
                <Typography className={classes.header}>{header}</Typography>
                <Typography className={classes.subheader}>{subheader}</Typography>
                <Typography className={classes.description}>{description}</Typography>
                <Button>Shop Now</Button>
            </div>
        )
    }
}
  
  
  