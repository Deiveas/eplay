import Banner from '../../components/Banner'
import ProductsList from '../../components/Productslist'
import Game from '../../models/Game'
import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import star_wars from '../../assets/images/star_wars.png'
import street_fighter from '../../assets/images/street_fighter.png'
import fifa_23 from '../../assets/images/fifa_23.png'
import need_for_speed from '../../assets/images/need_for_speed.jpg'
import God_of_War from '../../assets/images/God_of_War.webp'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4 - Remake',
    system: 'Windows',
    infos: ['-10%', 'R$ 199,90'],
    image: resident
  },
  {
    id: 2,
    category: 'Esporte',
    description:
      'EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2...',
    title: 'FIFA 23',
    system: 'PS5',
    infos: ['-50%', 'R$ 99,90'],
    image: fifa_23
  },
  {
    id: 3,
    category: 'Corrida',
    description:
      'Corra de dia e arrisque tudo à noite em Need for Speed™ Heat, uma experiência de corrida emocionante que coloca você contra uma força policial rebelde da cidade enquanto luta para entrar na elite da corrida de rua.',
    title: 'Need for Speed™ Heat-Deluxe',
    system: 'PS4',
    infos: ['-90%', 'R$ 27,90'],
    image: need_for_speed
  },
  {
    id: 4,
    category: 'RPG',
    description:
      'Com a vingança contra os deuses do Olimpo em um passado distante, Kratos agora vive como um mortal no reino dos deuses e monstros nórdicos. É nesse mundo duro e implacável que ele deve lutar para sobreviver... e ensinar seu filho a fazer o mesmo.',
    title: 'God of War: Ragnarok',
    system: 'PS4',
    infos: ['-60%', 'R$ 79,96'],
    image: God_of_War
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'RPG',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    title: 'Diablo 4',
    system: 'Windows',
    infos: ['17/09'],
    image: diablo
  },
  {
    id: 6,
    category: 'Aventura',
    description:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    title: 'Star Wars Jedi Survivor',
    system: 'Windows',
    infos: ['17/09'],
    image: star_wars
  },
  {
    id: 7,
    category: 'Luta',
    description:
      'Street Fighter 6 é um próximo jogo de luta desenvolvido e publicado pela Capcom.',
    title: 'Street Fighter 6',
    system: 'Windows',
    infos: ['17/09'],
    image: street_fighter
  },
  {
    id: 8,
    category: 'RPG',
    description:
      'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda™...',
    title: 'The Legend of Zelda - TOK',
    system: 'Switch',
    infos: ['17/09'],
    image: zelda
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductsList games={promocoes} title="Promoções" background="gray" />
    <ProductsList games={emBreve} title="Em breve" background="black" />
  </>
)

export default Home
