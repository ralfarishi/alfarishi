import { Box, Heading, SimpleGrid } from '@chakra-ui/react'
import {
  Title,
  WorkImage,
  SubTitle,
  WorkStats,
  StatBox,
  WorkLink,
  WorkPagination
} from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout
      title="Pasar Top Up"
      description="A game top-up platform with asynchronous transactions. Fueling gaming addictions with minimal friction."
      image="/images/works/pstopup/pstopup.png"
      slug="works/pstopup"
    >
      <Title year="2024">Pasar Top Up</Title>

      <WorkStats>
        <StatBox label="Stack">PHP Native, Payment Gateway</StatBox>
        <StatBox label="Platform">Website (Game Top-Up)</StatBox>
        <StatBox label="Live Preview">
          <WorkLink href="https://pasartopupid.com">pasartopupid.com</WorkLink>
        </StatBox>
      </WorkStats>

      <Box mb={16}>
        <SubTitle>The Mission</SubTitle>
        <P>
          Asynchronous transactions for synchronous victories. Fueling gaming
          addictions with minimal friction. Like a gas station for pixels, but
          without the smell of petrol. Top-up before your health reaches 0.
        </P>
      </Box>

      <Heading
        as="h4"
        fontSize={16}
        mb={6}
        textAlign="center"
        opacity={0.5}
        textTransform="uppercase"
        letterSpacing="widest"
      >
        Product Preview
      </Heading>

      <SimpleGrid columns={1} spacing={{ base: 4, md: 12 }}>
        <WorkImage
          priority
          my={0}
          src="/images/works/pstopup/pstopup.png"
          alt="Home page"
        />
        <WorkImage
          my={0}
          src="/images/works/pstopup/pstopup-2.png"
          alt="Voucher page"
        />
      </SimpleGrid>

      <WorkPagination currentId="pstopup" />
    </Layout>
  )
}

export default Work
