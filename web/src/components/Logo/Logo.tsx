import { Heading } from '@chakra-ui/react'

import { Link, routes } from '@redwoodjs/router'

const Logo = () => {
  return (
    <Heading
      as={Link}
      to={routes.home()}
      size="md"
      color={'black'}
      fontWeight="medium"
    >
      Lifepacks
    </Heading>
  )
}

export default Logo
