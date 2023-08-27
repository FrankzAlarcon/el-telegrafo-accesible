import { type NewsWithoutDescription, type NewsWithDescription, type BreakingNews } from '@/interfaces/news'

export const newsWithDescription: NewsWithDescription[] = [
  {
    title: 'Gonzalo Plata, ¿se va de Europa?',
    description: 'El América, el equipo más popular de México, estaría interesado en el extremo ecuatoriano Gonzalo Plata...',
    level: 'Deportes',
    readingTime: '2 mins de lectura',
    image: '/assets/imgs/platita.jpg'
  }, {
    title: 'Toman fotografías de Mercurio a apenas 236 kilómetros de distancia',
    description: 'La Agencia Espacial Europea publicó una serie de fotografías de Mercurio y su superficie...',
    level: 'Internacionales',
    readingTime: '3 mins de lectura',
    image: '/assets/imgs/mercurio.jpg'
  }, {
    title: 'CNE aprueba las Consultas Populares del Yasuní y Chocó Andino',
    description: 'Se informó que a partir del 22 de junio, se publicarán las convocatorias en la página web institucional, donde constarán las preguntas respectivas...',
    level: 'Nacionales',
    readingTime: '3 mins de lectura',
    image: '/assets/imgs/cne.jpg'
  }, {
    title: 'La fuga de presos se sanciona con cárcel de uno a tres años',
    description: 'Dos personas privadas de la libertad se fugaron de la cárcel de Cotopaxi. El Servicio Nacional de Atención Integral de Personas Privadas de Libertad (SNAI)...',
    level: 'Nacionales',
    readingTime: '3 mins de lectura',
    image: '/assets/imgs/fugas.jpg'
  }
]

export const newsWithoutDescription: NewsWithoutDescription[] = [
  {
    title: '886 efectivos de control participaron en operativo en la cárcel de Chimborazo',
    level: 'Nacionales',
    readingTime: '3 mins de lectura',
    image: '/assets/imgs/886_efectivos.jpg'
  }, {
    title: 'Registro Civil entregará pasaportes en horario extendido',
    level: 'Nacionales',
    readingTime: '2 mins de lectura',
    image: '/assets/imgs/pasaporte.jpg'
  }, {
    title: 'Quito: Se registra incendio forestal en el sector de El Armero',
    level: 'Nacionales',
    readingTime: '3 mins de lectura',
    image: '/assets/imgs/incendio.jpg'
  }, {
    title: 'Pichincha, Imbabura y Loja con radiación extremadamente alta este jueves 22 de junio',
    level: 'Nacionales',
    readingTime: '2 mins de lectura',
    image: '/assets/imgs/Pichincha_loja.jpg'
  }
]

export const breakingNews: BreakingNews[] = [
  {
    title: 'Ángel Di María podría regresar al Benfica de Portugal',
    hour: '19:50'
  }, {
    title: 'Luis Suárez puede necesitar una prótesis en la rodilla, admite presidente de Gremio',
    hour: '19:48'
  }, {
    title: '¿En esta Asamblea habrá legisladores más o menos votados?',
    hour: '19:35'
  }, {
    title: 'Una mujer fue brutalmente atacada por los perros de sus dueños de casa',
    hour: '19:32'
  }, {
    title: 'Ministro Santos dice que se seguirá operando en el bloque 43-ITT, pese al triunfo del sí en la consulta',
    hour: '19:27'
  }, {
    title: '¿Cuál ha sido el rol de la primera dama en Ecuador?',
    hour: '19:23'
  }, {
    title: 'Los precios de las entradas a Luis Miguel oscilan entre USD 35 y 269',
    hour: '19:10'
  }
]
