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
import CommitInfo from '../../components/commit-info'

const Work = () => {
  return (
    <Layout
      title="Cheese Stick Koe"
      description="E-commerce catalog serving snacks over HTTP. 100% responsive, Bekasi's crunchiest exports gone digital."
      image="/images/works/cheese-stick-koe/cheese_stick_1.jpg"
      slug="works/cheese-stick-koe"
    >
      <Title year="2022">Cheese Stick Koe</Title>

      <WorkStats>
        <StatBox label="Stack">Next.js, Tailwind CSS, TypeScript</StatBox>
        <StatBox label="Platform">Website</StatBox>
        <StatBox label="Nature">E-Commerce Showcase</StatBox>
        <StatBox label="Live Preview">
          <WorkLink href="https://cheesestick-koe.my.id/">
            cheesestick-koe.my.id
          </WorkLink>
        </StatBox>
        <CommitInfo repoName="Cheese-Stick-Koe" />
      </WorkStats>

      <Box mb={16}>
        <SubTitle>The Mission</SubTitle>
        <P>
          Serving snacks over HTTP. 100% responsive, 0% trans-fat (on the
          website, at least). Bekasi&apos;s crunchiest exports gone digital.
          Warning: May cause excessive window shopping and real-world cravings.
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
          src="/images/works/cheese-stick-koe/cheese_stick_1.jpg"
          alt="Cheese Stick Koe"
        />
        <WorkImage
          my={0}
          src="/images/works/cheese-stick-koe/cheese_stick_2.jpg"
          alt="Cheese Stick Koe"
        />
      </SimpleGrid>

      <WorkPagination currentId="cheese-stick-koe" />
    </Layout>
  )
}

export default Work
