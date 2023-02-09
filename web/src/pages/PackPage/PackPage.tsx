import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const PackPage = () => {
  return (
    <>
      <MetaTags title="Pack" description="Pack page" />

      <h1>PackPage</h1>
      <p>
        Find me in <code>./web/src/pages/PackPage/PackPage.tsx</code>
      </p>
      <p>
        My default route is named <code>pack</code>, link to me with `
        <Link to={routes.pack({ slug: 'wow' })}>Pack</Link>`
      </p>
    </>
  )
}

export default PackPage
