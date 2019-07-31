import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import Container from 'react-storefront/Container'
import Row from 'react-storefront/Row'

import PersonalizedBannerSlot from '../content/PersonalizedBannerSlot';

@inject(({ app }) => ({ app: app, pageContent: app.pageContent }))
@observer
export default class Home extends Component {
  render() {
    const { pageContent } = this.props

    return (
      <div>
        <PersonalizedBannerSlot content={pageContent.content.get('hero')}></PersonalizedBannerSlot>
        <Container>
          <Row>
          </Row>
        </Container>
      </div>
    )
  }
}
