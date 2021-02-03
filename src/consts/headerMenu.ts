interface Menu {
  index: string
  title: string
  icon: string
}

const headerMenu: Array<Menu> = [
  {
    index: '/study',
    title: 'Keep on learning.',
    icon: 'icon_tubiaozhizuomoban-',
  },
  {
    index: '/game',
    title: 'Just for fun.',
    icon: 'icon_games-',
  },
  {
    index: '/life',
    title: 'Trivial things of life.',
    icon: 'icon_lifeon',
  },
]

export default headerMenu
