import {
  Badge,
  Box,
  Link,
  SimpleGrid,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import {
  Title,
  WorkImage,
  SubTitle,
  WorkStats,
  StatBox
} from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import CommitInfo from '../../components/commit-info'

const Work = () => {
  const accentColor = useColorModeValue('#E29578', '#D4A373')

  return (
    <Layout
      title="Shop Now"
      description="A Laravel e-commerce platform with payments and shipping. Your wallet's worst enemy, your browser's best friend."
      image="/images/works/shopnow/shopnow-thumb.png"
      slug="works/shopnow"
    >
      <Title>
        Shop Now{' '}
        <Badge
          ml={2}
          px={2}
          py={1}
          fontSize="10px"
          fontWeight="bold"
          letterSpacing="0.1em"
          variant="subtle"
          borderRadius="full"
          colorScheme="orange"
          opacity={0.8}
        >
          2022
        </Badge>
      </Title>

      <WorkStats>
        <StatBox label="Stack">Laravel</StatBox>
        <StatBox label="Platform">Website</StatBox>
        <StatBox label="Features">Payments, Shipping</StatBox>
        <StatBox label="Source">
          <Link
            href="https://github.com/ralfarishi/Larastore"
            isExternal
            color={accentColor}
          >
            Larastore <ExternalLinkIcon ml={1} />
          </Link>
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
    </Layout>
  )
}

export default Work
