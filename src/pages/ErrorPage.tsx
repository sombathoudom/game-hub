import { Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

function ErrorPage() {
    const err = useRouteError();
  return (
    <>
        <Heading>ErrorPage</Heading>
        <Text>{isRouteErrorResponse(err) ? 'Page 404 not found': 'Unexpected error'}</Text>
    </>
  )
}

export default ErrorPage