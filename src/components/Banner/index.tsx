import { Imagem, Precos, Titulo } from './styles'
import Button from '../Button'
import Tag from '../Tag'
import { formataPreco } from '../Productslist'
import { useGetFeaturedGameQuery } from '../../services/api'

const Banner = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data: game, isLoading } = useGetFeaturedGameQuery()

  if (!game) {
    // eslint-disable-next-line react/no-unescaped-entities
    return <h3>'Carregando...'</h3>
  }

  return (
    <Imagem style={{ backgroundImage: `url(${game?.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Titulo>{game.name}</Titulo>
          <Precos>
            De <span>{formataPreco(game?.prices.old)}</span> <br />
            por apenas {formataPreco(game.prices.current)}
          </Precos>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="Clique aqui para aproveitar esta oferta"
        >
          Aproveitar
        </Button>
      </div>
    </Imagem>
  )
}
export default Banner
