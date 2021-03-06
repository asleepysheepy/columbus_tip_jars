import React from 'react'
import { Box, Container, Typography } from '@material-ui/core'

export default function AboutPage() {
  return (
    <Container>
      <Typography color={'textPrimary'} variant={'h3'}>{'About Us'}</Typography>

      <Box marginTop={5}>
        <Typography variant={'h6'}>
          This site was made with &lt;3 by Can&lsquo;t Stop Columbus.
          Can’t Stop Columbus is a community-wide movement that activates our city’s talents and compassion to solve real problems. We embrace courageous ideas and rapidly deliver new and next solutions.
          We are pooling together the knowledge, time and resources of people all across the city to crowd-source and deliver needed solutions that address challenges in our community.
          Please visit our website to learn more or join us!
        </Typography>
      </Box>
    </Container>
  )
}
