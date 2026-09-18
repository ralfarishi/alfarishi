import { Box, SimpleGrid } from '@chakra-ui/react'
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
      title="Shop Now"
      description="A Laravel e-commerce platform with payments and shipping. Your wallet's worst enemy, your browser's best friend."
      image="/images/works/shopnow/shopnow-thumb.png"
      slug="works/shopnow"
    >
      <Title year="2022">Shop Now</Title>

      <WorkStats>
        <StatBox label="Stack">Laravel, PHP, Blade, MySQL</StatBox>
        <StatBox label="Platform">Website</StatBox>
        <StatBox label="Features">Payments, Shipping</StatBox>
        <StatBox label="Source">
          <WorkLink href="https://github.com/ralfarishi/Larastore">
            Larastore
          </WorkLink>
        </StatBox>
        <CommitInfo repoName="Larastore" />
      </WorkStats>

      <Box mb={16}>
        <SubTitle>The Mission</SubTitle>
        <P>
          A retail therapy engine. It does exactly what it says on the button,
          but it won&apos;t pay for your shopping spree. Adding items to
          Cart&lt;T&gt; since 2022. Your wallet&apos;s worst enemy, your
          browser&apos;s best friend.
        </P>
      </Box>

      <SimpleGrid columns={1} spacing={{ base: 4, md: 12 }}>
        <WorkImage
          priority
          my={0}
          src="/images/works/shopnow/shopnow-thumb.png"
          alt="shopnow"
        />
        <WorkImage
          my={0}
          src="/images/works/shopnow/shopnow-category.png"
          alt="shopnow"
        />
        <WorkImage
          my={0}
          src="/images/works/shopnow/shopnow-product.png"
          alt="shopnow"
        />
        <WorkImage
          my={0}
          src="/images/works/shopnow/shopnow-checkout.png"
          alt="shopnow"
        />
      </SimpleGrid>

      <WorkPagination currentId="shopnow" />
    </Layout>
  )
}

export default Work
