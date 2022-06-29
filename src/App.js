// import React from 'react';

function Food({ name, picture }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} alt={name} />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image: 'https://yts.mx/assets/images/movies/avenged_sevenfold_live_in_the_l_b_c_diamonds_in_the_rough_2008/medium-cover.jpg',
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    image: 'https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/5atp/image/18MvHleWoHzajN-4Tyruq9d42Vk.jpeg',
  },
];

function renderFood(dish) {
  return <Food key={dish.id} name={dish.name} picture={dish.image} />;
}

function App() {
  // return <div className="App" />;
  return (
    <div>
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
