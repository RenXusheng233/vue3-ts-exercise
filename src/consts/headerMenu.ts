interface Menu {
  index: string
  title: string
  icon: string
  link?: string
}

const headerMenu: Array<Menu> = [
  {
    index: '/study',
    title: '归档',
    icon: 'icon_tubiaozhizuomoban-',
  },
  {
    index: '/game',
    title: '娱乐',
    icon: 'icon_games-',
  },
  {
    index: '/life',
    title: '生活',
    icon: 'icon_lifeon',
  },
  {
    index: '',
    title: 'github',
    icon: 'icon_githublogo',
    link: 'https://github.com/RenXusheng233',
  },
]

export default headerMenu
