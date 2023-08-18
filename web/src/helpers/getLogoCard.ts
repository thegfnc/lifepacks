import getEnvironmentUrl from './getEnvironmentUrl'

type getLogoCard = {
  color: 'blackOnBrown' | 'blueOnPurple' | 'random'
}

// these are stored in the web/public folder
const LOGO_CARD_FILES = {
  blackOnBrown: '/logo_card_black_on_brown.png',
  blueOnPurple: '/logo_card_blue_on_purple.png',
}

const getLogoCard = ({ color }: getLogoCard) => {
  let logoCardFile = null

  if (color === 'random') {
    const colors = Object.keys(LOGO_CARD_FILES)
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    logoCardFile = LOGO_CARD_FILES[randomColor]
  } else {
    logoCardFile = LOGO_CARD_FILES[color]
  }

  return getEnvironmentUrl(logoCardFile)
}

export default getLogoCard
