import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import PageContainer from 'src/components/PageContainer/PageContainer'

const FaqsPage = () => {
  return (
    <PageContainer size="sm">
      <MetaTags title="Faqs" description="Faqs page" />

      <h1>FaqsPage</h1>
      <p>
        Find me in <code>./web/src/pages/FaqsPage/FaqsPage.tsx</code>
      </p>
      <p>
        My default route is named <code>faqs</code>, link to me with `
        <Link to={routes.faqs()}>Faqs</Link>`
      </p>
    </PageContainer>
  )
}

export default FaqsPage
