import LogoCardBlackOnBrown from 'public/logo_card_black_on_brown.png'
import LogoCardBlackOnWhite from 'public/logo_card_black_on_white.png'
import LogoCardBlackOnYellow from 'public/logo_card_black_on_yellow.png'
import LogoCardWhiteOnPurple from 'public/logo_card_white_on_purple.png'

type getLogoCard = {
  color:
    | 'blackOnBrown'
    | 'blackOnWhite'
    | 'blackOnYellow'
    | 'whiteOnPurple'
    | 'random'
}

const LOGO_CARD_FILES = {
  blackOnBrown: LogoCardBlackOnBrown,
  blackOnWhite: LogoCardBlackOnWhite,
  blackOnYellow: LogoCardBlackOnYellow,
  whiteOnPurple: LogoCardWhiteOnPurple,
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

  return `https://lifepacks.co${logoCardFile}`
}

export default getLogoCard
