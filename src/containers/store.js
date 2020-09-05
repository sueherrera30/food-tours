import  Grapes from '../images/grapes.jpg';
import  Toscana from '../images/toscana.jpg';
import  Sicily from '../images/sicily.jpeg';

const cardInformation = [
  {
    image: Grapes,
    title: 'Tuscany Hills and Wine',
    text: 'Departure to the charming town of Montepulciano, a medieval treassure..',
    id: 1,
  },
  {
    image: Toscana,
    title: 'Tringle of Art',
    text: 'Arrivw in assisi and start to explore this"middle age town..',
    id: 2,
  },
  {
    image: Sicily,
    title: 'Sicily Tour',
    text: 'Arrival in Catania Ariport, transfer to the hotel in syraccuse..',
    id: 3,
  },
];

const navOptions = [
    {
      name: 'Hot',
      id: 1,
      notification: true,
    },
    {
      name: 'Low price',
      id: 2,
      notification: false,
    },
    {
      name: 'Countries',
      id: 3,
      notification: false,
    },
    {
      name: 'Seasons',
      id: 4,
      notification: false,
    },
  ];

  const tagsOptions = [
    {
      name: 'Italy',
      id: 1,
      active: true,
    },
    {
      name: 'France',
      id: 2,
      active: false,
    },
    {
      name: 'England',
      id: 3,
      active: false,
    },
    {
      name: 'Australia',
      id: 4,
      active: false,
    },
  ];
  export {
    navOptions,
    tagsOptions,
    cardInformation,
  } 