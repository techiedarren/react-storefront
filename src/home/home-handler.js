import globalState from '../globalState'
import { withGlobalState } from 'react-storefront/router'

import { ContentClient } from 'dc-delivery-sdk-js';

export default async function homeHandler(params, request, response) {

  const contentClient = new ContentClient({
      account: 'willow',
      locale: 'en-*',
      stagingEnvironment: request.query.stagingEnvironment
  });

  const heroSlotContent = await contentClient.getContentItem('2eb20504-341e-4c5f-9f0f-13b0d59a5c1e');

  return withGlobalState(request, globalState, {
    title: 'React Storefront',
    welcomeMessage:
      "Welcome to your new React Storefront app.  Here you'll find mock home, category, subcategory, product, and cart pages that you can use as a starting point to build your PWA.<br/><br/>Happy coding!",
    pageContent: {
      content: {
        hero: heroSlotContent.toJSON()
      }
    }
  })
}
