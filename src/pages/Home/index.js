import React from 'react'
import loadable from '@loadable/component'

import IntroContent from '../../content/IntroContent.json'
import MiddleBlockContent from '../../content/MiddleBlockContent.json'
import AboutContent from '../../content/AboutContent.json'
import ServicesContent from '../../content/ServicesContent.json'
import BackendContent from '../../content/BackendContent.json'
import FrontendContent from '../../content/FrontendContent.json'
import MobileContent from '../../content/MobileContent.json'
import ContactContent from '../../content/ContactContent.json'

const ContactFrom = loadable(() => import('../../components/ContactForm'))
const ContentBlock = loadable(() => import('../../components/ContentBlock'))
const MiddleBlock = loadable(() => import('../../components/MiddleBlock'))
const Container = loadable(() => import('../../common/Container'))
const ScrollToTop = loadable(() => import('../../common/ScrollToTop'))

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type='right'
        first='true'
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon='developer.svg'
        id='intro'
      />
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      />
      <ContentBlock
        type='left'
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon='graphs.svg'
        id='about'
      />
      <ContentBlock
        type='right'
        title={ServicesContent.title}
        content={ServicesContent.text}
        icon='product-launch.svg'
        id='services'
      />

      <ContentBlock
        type='left'
        title={BackendContent.title}
        content={BackendContent.text}
        icon='backend.svg'
      />
      <ContentBlock
        type='right'
        title={FrontendContent.title}
        content={FrontendContent.text}
        icon='frontend.svg'
      />
      <ContentBlock
        type='left'
        title={MobileContent.title}
        content={MobileContent.text}
        icon='mobile.svg'
      />
      <ContactFrom
        title={ContactContent.title}
        content={ContactContent.text}
        id='contact'
      />
    </Container>
  )
}

export default Home
