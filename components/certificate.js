import { Badge, Link, ListItem, useColorModeValue } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

export default function Certificate({ link, name, year }) {
  return (
    <ListItem>
      <Link
        href={link}
        color={useColorModeValue('purple.600', 'orange.200')}
        isExternal
      >
        {name} <ExternalLinkIcon mx="2px" />
      </Link>
      <Badge>{year}</Badge>
    </ListItem>
  )
}
