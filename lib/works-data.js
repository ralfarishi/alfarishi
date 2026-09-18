export const WORKS_DATA = [
  {
    id: 'labalab',
    title: 'LabaLab',
    category: 'Web App',
    thumbnail: '/images/works/labalab/thumbnail.png',
    tags: ['Next.js', 'Drizzle', 'Supabase', 'Tailwind'],
    description:
      'A retail operating system for the organized and the overwhelmed. Turning stockroom chaos into structured data with a side of profit.'
  },
  {
    id: 'suzerain-save-editor',
    title: 'Suzerain',
    category: 'Tools',
    thumbnail: '/images/works/suzerain-save-editor/suzerain-thumbnail.webp',
    tags: ['Bun', 'Vite', 'Tailwind', 'TypeScript'],
    description:
      "Because being a president is hard enough without living with your choices. Manipulate Sordland's political fabric with this save editor."
  },
  {
    id: 'dashboard-cheese-stick-koe',
    title: 'Cheese Stick Koe Dashboard',
    category: 'Web App',
    thumbnail: '/images/works/cheese-stick-koe/dashboard.png',
    tags: ['Next.js 15', 'Drizzle ORM', 'Supabase', 'TypeScript'],
    description:
      'The "big cheese" of data visualization. A dashboard where the CRUD operations are as crisp as the snacks themselves.'
  },
  {
    id: 'shopnow',
    title: 'Shop Now',
    category: 'Web App',
    thumbnail: '/images/works/shopnow/shopnow-thumb.png',
    tags: ['Laravel', 'PHP', 'E-Commerce'],
    description:
      "A retail therapy engine. Adding items to Cart<T> since 2022. Your wallet's worst enemy, your browser's best friend."
  },
  {
    id: 'cheese-stick-koe',
    title: 'Cheese Stick Koe',
    category: 'Client Work',
    thumbnail: '/images/works/cheese-stick-koe/cheese_stick_1.jpg',
    tags: ['Next.js', 'Tailwind', 'TypeScript'],
    description:
      "Serving snacks over HTTP. 100% responsive, 0% trans-fat (on the website, at least). Bekasi's crunchiest exports gone digital."
  },
  {
    id: 'trinitas-prima',
    title: 'Trinitas Prima Sejahtera',
    category: 'Client Work',
    thumbnail: '/images/works/trinitas/trinitas-thumb.png',
    tags: ['HTML5', 'Bootstrap 5', 'Landing Page'],
    description:
      'A corporate landing page that actually lands. Scaling corporate presence without the overflow:hidden on their ambitions.'
  },
  {
    id: 'sekolah-jewepe',
    title: 'Sekolah JeWePe',
    category: 'Web App',
    thumbnail: '/images/works/sekolah-jewepe/jwp-1.png',
    tags: ['Laravel 13', 'Livewire 4', 'TALL Stack'],
    description:
      'Where Eloquent models meet academic deadlines. High-performance blog CMS using the TALL Stack with real-time WebSockets and Scout search.'
  },
  {
    id: 'iaas',
    title: 'Intan Angkasa Air Service',
    category: 'Client Work',
    thumbnail: '/images/works/iaas/iaas-1.png',
    tags: ['Laravel 10', 'PHP', 'Tailwind'],
    description:
      'Deploying high-altitude solutions. A website for a helicopter company that helps their business take off. Higher than your localhost.'
  },
  {
    id: 'pstopup',
    title: 'Pasar Top Up',
    category: 'Web App',
    thumbnail: '/images/works/pstopup/pstopup.png',
    tags: ['PHP Native', 'Payment Gateway'],
    description:
      'Asynchronous transactions for synchronous victories. Fueling gaming addictions with minimal friction. Like a gas station for pixels.'
  },
  {
    id: 'arya-tech',
    title: 'Arya Tech Company',
    category: 'Client Work',
    thumbnail: '/images/works/arya-tech/arya-tech.png',
    tags: ['React', 'Bootstrap 5', 'Landing Page'],
    description:
      'The digital storefront for a tech company that actually does tech. Clean lines, zero bugs (mostly), and 100% corporate chic.'
  },
  {
    id: 'arnimal',
    title: 'ARnimal',
    category: 'Tools',
    thumbnail: '/images/works/arnimal/arnimal-thumb.jpg',
    tags: ['Spark AR', 'JavaScript', 'AR'],
    description:
      'Bringing the zoo to your living room. Pokemon Go, but you actually learn something. Animals in 3D, physics in C#.'
  },
  {
    id: 'eduflex',
    title: 'Eduflex',
    category: 'Web App',
    thumbnail: '/images/works/eduflex/edu-2.png',
    tags: ['Express.js', 'Laravel', 'REST API'],
    description:
      'CRUD-ing your way to a degree. A RESTful API for people who want to flex their brain. Status: 200 OK (Knowledge Received).'
  },
  {
    id: 'credx',
    title: 'CredX',
    category: 'Tools',
    thumbnail: '/images/works/credx/thumb.png',
    tags: ['Python', 'CLI Tool', 'Encryption'],
    description:
      'Command-line credential vault. Encrypted account management right in your terminal. Because "123456" isn\'t a security strategy.'
  }
]

export const CATEGORIES = ['All', 'Web App', 'Client Work', 'Tools']

export const getPrevNextWorks = currentId => {
  const index = WORKS_DATA.findIndex(w => w.id === currentId)
  if (index === -1) {
    return { prev: null, next: null }
  }

  const prev =
    index > 0 ? WORKS_DATA[index - 1] : WORKS_DATA[WORKS_DATA.length - 1]
  const next =
    index < WORKS_DATA.length - 1 ? WORKS_DATA[index + 1] : WORKS_DATA[0]

  return { prev, next }
}
