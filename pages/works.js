import { useState, useMemo } from 'react'
import {
  Box,
  Heading,
  SimpleGrid,
  Stack,
  useColorModeValue
} from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import Layout from '../components/layouts/article'
import { WorkGridItem } from '../components/grid-item'
import { WORKS_DATA, CATEGORIES } from '../lib/works-data'

const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04
    }
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.15 }
  }
}

const gridItemVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] }
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    transition: { duration: 0.15 }
  }
}

const Works = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const accentColor = useColorModeValue('#B85D3B', '#D4A373')
  const activeColor = useColorModeValue('white', '#1A1A1A')
  const inactiveColor = useColorModeValue('blackAlpha.800', 'whiteAlpha.800')
  const pillBorderColor = useColorModeValue('blackAlpha.200', 'whiteAlpha.200')
  const pillHoverBorderColor = useColorModeValue(
    'blackAlpha.400',
    'whiteAlpha.400'
  )
  const countBadgeBg = useColorModeValue('blackAlpha.100', 'whiteAlpha.100')

  const catCounts = useMemo(
    () => ({
      All: WORKS_DATA.length,
      'Web App': WORKS_DATA.filter(w => w.category === 'Web App').length,
      'Client Work': WORKS_DATA.filter(w => w.category === 'Client Work')
        .length,
      Tools: WORKS_DATA.filter(w => w.category === 'Tools').length
    }),
    []
  )

  const filteredWorks = useMemo(() => {
    return selectedCategory === 'All'
      ? WORKS_DATA
      : WORKS_DATA.filter(work => work.category === selectedCategory)
  }, [selectedCategory])

  return (
    <Layout
      title="Works"
      description="A showcase of projects I've built, ranging from web applications and e-commerce platforms to AR experiences and CLI tools."
      slug="works"
    >
      <Box as="div">
        <Box
          display="flex"
          flexDirection={{ base: 'column', md: 'row' }}
          alignItems={{ base: 'flex-start', md: 'center' }}
          justifyContent="space-between"
          gap={4}
          mb={{ base: 6, md: 8 }}
        >
          <Heading as="h3" variant="section-title" m={0}>
            Works
          </Heading>

          {/* Category Filter Pills with Sliding Active Capsule */}
          <Stack
            direction="row"
            spacing={2}
            overflowX="auto"
            py={1}
            maxW="full"
            role="tablist"
            aria-label="Filter works by category"
            css={{
              '&::-webkit-scrollbar': { display: 'none' },
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {CATEGORIES.map(cat => {
              const isActive = selectedCategory === cat
              return (
                <Box
                  as="button"
                  type="button"
                  key={cat}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedCategory(cat)}
                  position="relative"
                  px={4}
                  py={2}
                  borderRadius="full"
                  fontSize="xs"
                  fontWeight="700"
                  fontFamily="heading"
                  letterSpacing="0.03em"
                  whiteSpace="nowrap"
                  flexShrink={0}
                  color={isActive ? activeColor : inactiveColor}
                  transition="color 0.2s ease"
                  border="1px solid"
                  borderColor={isActive ? 'transparent' : pillBorderColor}
                  bg="transparent"
                  cursor="pointer"
                  outline="none"
                  userSelect="none"
                  _hover={{
                    borderColor: isActive
                      ? 'transparent'
                      : pillHoverBorderColor
                  }}
                  _focusVisible={{
                    outline: '2px solid',
                    outlineColor: accentColor,
                    outlineOffset: '2px'
                  }}
                >
                  {/* Sliding capsule indicator */}
                  {isActive && (
                    <Box
                      as={motion.div}
                      layoutId="activeFilterPill"
                      position="absolute"
                      inset={0}
                      borderRadius="full"
                      bg={accentColor}
                      zIndex={0}
                      transition={{
                        type: 'spring',
                        stiffness: 450,
                        damping: 35
                      }}
                    />
                  )}
                  <Box
                    as="span"
                    position="relative"
                    zIndex={1}
                    display="inline-flex"
                    alignItems="center"
                    gap={1.5}
                  >
                    {cat}
                    <Box
                      as="span"
                      fontSize="10px"
                      opacity={isActive ? 0.9 : 0.7}
                      px={1.5}
                      py={0.2}
                      borderRadius="full"
                      bg={isActive ? 'blackAlpha.200' : countBadgeBg}
                      fontWeight="800"
                    >
                      {catCounts[cat]}
                    </Box>
                  </Box>
                </Box>
              )
            })}
          </Stack>
        </Box>

        {/* Animated Grid with Coordinated Stagger */}
        <AnimatePresence mode="wait">
          <Box
            as={motion.div}
            key={selectedCategory}
            variants={gridContainerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <SimpleGrid columns={[1, 1, 2]} gap={{ base: 6, md: 6 }}>
              {filteredWorks.map((work, index) => (
                <Box as={motion.div} key={work.id} variants={gridItemVariants}>
                  <WorkGridItem
                    id={work.id}
                    title={work.title}
                    thumbnail={work.thumbnail}
                    tags={work.tags}
                    priority={index < 2}
                  >
                    {work.description}
                  </WorkGridItem>
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </AnimatePresence>
      </Box>
    </Layout>
  )
}

export default Works
