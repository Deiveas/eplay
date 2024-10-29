import { Game } from '../../pages/Home'
import Button from '../Button'
import { formataPreco } from '../Productslist'
import Tag from '../Tag'

import { Banner, Infos } from './styles'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => (
  <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
    <div className="container">
      <div>
        <Tag>{game.details.category}</Tag>
        <Tag>{game.details.system}</Tag>
      </div>

      <Infos>
        <h2>{game.name}</h2>
        <p>
          <span>De {formataPreco(game?.prices.old)}</span>
          Por {formataPreco(game.prices.current)}
        </p>
        <Button
          type="button"
          title="Clique aqui para adicionar este jogo ao carinho "
          variant="primary"
        >
          Adicionar ao carrinho
        </Button>
      </Infos>
    </div>
  </Banner>
)

export default Hero
