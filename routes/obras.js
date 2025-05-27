const obras = [
  {
    id: 1,
    titulo: 'El Grito (Réplica)',
    autor: 'Edvard Munch',
    año: 1893,
    descripcion: 'Réplica de una de las pinturas más emblemáticas del expresionismo, representando la angustia humana.',
    imagen: '/img/obra1.jpg',
    precio: (1500 * 4000) * 0.02 // Aproximadamente 120.000 COP
  },
  {
    id: 2,
    titulo: 'Mujer frente al espejo (Réplica)',
    autor: 'Pablo Picasso',
    año: 1932,
    descripcion: 'Réplica de una obra emblemática del cubismo que representa una dualidad emocional reflejada en un espejo.',
    imagen: '/img/obra2.jpg',
    precio: (2300 * 4000) * 0.02 // Aproximadamente 184.000 COP
  },
  {
    id: 3,
    titulo: 'Terraza de café por la noche (Réplica)',
    autor: 'Vincent van Gogh',
    año: 1888,
    descripcion: 'Réplica de una escena nocturna vibrante que muestra una terraza iluminada en Arlés, Francia, destacando el uso expresivo del color y la perspectiva característica de Van Gogh.',
    imagen: '/img/obra3.jpg',
    precio: (2100 * 4000) * 0.02 // Aproximadamente 168.000 COP
  },
  {
    id: 4,
    titulo: 'El Beso (Réplica)',
    autor: 'Gustav Klimt',
    año: 1907,
    descripcion: 'Réplica de una de las obras más conocidas del simbolismo, mostrando el amor en un estilo decorativo y dorado.',
    imagen: '/img/obra4.jpg',
    precio: (2600 * 4000) * 0.02 // Aproximadamente 208.000 COP
  },
  {
    id: 5,
    titulo: 'Lirios (Réplica)',
    autor: 'Vincent van Gogh',
    año: 1889,
    descripcion: 'Réplica de una vibrante pintura postimpresionista que captura la belleza de los lirios con trazos expresivos y colores vivos, realizada durante la estancia de Van Gogh en el asilo de Saint-Rémy.',
    imagen: '/img/obra5.webp',
    precio: (1900 * 4000) * 0.02 // Aproximadamente 152.000 COP
  },
  {
    id: 6,
    titulo: 'Mujer con Sombrero (Réplica)',
    autor: 'Henri Matisse',
    año: 1905,
    descripcion: 'Réplica de un retrato que simboliza el inicio del fauvismo, donde los colores brillantes dominan la obra.',
    imagen: '/img/obra6.jpg',
    precio: (1750 * 4000) * 0.02 // Aproximadamente 140.000 COP
  },
  {
    id: 7,
    titulo: 'Mujer con sombrilla (Réplica)',
    autor: 'Claude Monet',
    año: 1875,
    descripcion: 'Réplica de una pintura impresionista que captura el movimiento y la luz natural con una figura femenina al aire libre.',
    imagen: '/img/obra7.jpg',
    precio: (2250 * 4000) * 0.02 // Aproximadamente 180.000 COP
  },
  {
    id: 8,
    titulo: 'Retrato de Pablo Picasso (Réplica)',
    autor: 'Juan Gris',
    año: 1912,
    descripcion: 'Réplica de una obra cubista que captura la esencia de Picasso en una representación geométrica y abstracta.',
    imagen: '/img/obra8.jpg',
    precio: (2050 * 4000) * 0.02 // Aproximadamente 164.000 COP
  },
  {
    id: 9,
    titulo: 'Las Meninas (Réplica)',
    autor: 'Diego Velázquez',
    año: 1656,
    descripcion: 'Réplica considerada la obra maestra del pintor del Siglo de Oro, esta pintura muestra una escena en la corte del rey Felipe IV, jugando con la perspectiva y la realidad.',
    imagen: '/img/obra9.jpg',
    precio: (3000 * 4000) * 0.02 // Aproximadamente 240.000 COP
  },
  {
    id: 10,
    titulo: 'La Toilette (Réplica)',
    autor: 'Henri de Toulouse Lautrec',
    año: 1889,
    descripcion: 'Réplica de una obra que captura la intimidad de una mujer en su rutina diaria, destacando el estilo único de Toulouse Lautrec y su enfoque en la vida cotidiana.',
    imagen: '/img/obra10.jpg',
    precio: (1600 * 4000) * 0.02 // Aproximadamente 128.000 COP
  },
  {
    id: 11,
    titulo: 'La iglesia de Auvers-sur-Oise (Réplica)',
    autor: 'Vincent van Gogh',
    año: 1890,
    descripcion: 'Réplica de una pintura postimpresionista que muestra la iglesia del pequeño pueblo de Auvers-sur-Oise con líneas distorsionadas y colores intensos, reflejando la agitación emocional del artista.',
    imagen: '/img/obra11.jpg',
    precio: (1950 * 4000) * 0.02 // Aproximadamente 156.000 COP
  },
  {
    id: 12,
    titulo: 'Composición suprematista (Réplica)',
    autor: 'Kazimir Malevich',
    año: 1916,
    descripcion: 'Réplica de una pieza emblemática del suprematismo que utiliza formas geométricas básicas para explorar la supremacía del color puro.',
    imagen: '/img/obra12.jpg',
    precio: (2100 * 4000) * 0.02 // Aproximadamente 168.000 COP
  },
  {
    id: 13,
    titulo: 'Campbell’s Soup Cans (Réplica)',
    autor: 'Andy Warhol',
    año: 1962,
    descripcion: 'Réplica de una obra que marcó la transición hacia el arte pop, usando objetos cotidianos como el sujeto de la pintura.',
    imagen: '/img/obra13.jpg',
    precio: (2400 * 4000) * 0.02 // Aproximadamente 192.000 COP
  },
  {
    id: 14,
    titulo: 'No. 5, 1948 (Réplica)',
    autor: 'Jackson Pollock',
    año: 1948,
    descripcion: 'Réplica de una de las obras más conocidas del expresionismo abstracto, donde las manchas de pintura crean una sensación de caos.',
    imagen: '/img/obra14.jpg',
    precio: (2700 * 4000) * 0.02 // Aproximadamente 216.000 COP
  },
  {
    id: 15,
    titulo: 'Los Girasoles (Réplica)',
    autor: 'Vincent van Gogh',
    año: 1888,
    descripcion: 'Réplica de la serie de pinturas que capturan la belleza vibrante de los girasoles, símbolo de vida y energía.',
    imagen: '/img/obra15.jpg',
    precio: (1850 * 4000) * 0.02 // Aproximadamente 148.000 COP
  },
  {
    id: 16,
    titulo: 'Vestidos simultáneos (Réplica)',
    autor: 'Sonia Delaunay',
    año: 1981,
    descripcion: 'Réplica de una obra que captura la esencia del arte abstracto y la relación dinámica entre el color y el movimiento en la moda.',
    imagen: '/img/obra16.jpg',
    precio: (2000 * 4000) * 0.02 // Aproximadamente 160.000 COP
  }
];

export default obras;
