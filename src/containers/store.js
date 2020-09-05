import  Grapes from '../images/grapes.jpg';
import  Toscana from '../images/toscana.jpg';
import  Sicily from '../images/sicily.jpeg';

const imagesCard = [
  Grapes,
  Toscana,
  Sicily,

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
    imagesCard,
  } 