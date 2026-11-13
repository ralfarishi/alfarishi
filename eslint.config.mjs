import nextConfig from 'eslint-config-next'

export default [
  ...nextConfig,
  {
    rules: {
      'react-hooks/rules-of-hooks': 'warn'
    }
  }
]
