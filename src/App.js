import React from 'react';
import PropTypes from 'prop-types';


function Food({ name, picture, rating }) {
  return ( 
    <div>
      <h2>I love {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: '김치',
    image: 'https://m.cj.co.kr/resources/img/kfoodlife/behind191130/00.jpg',
    rating: 4,
  },
  {
    id: 2,
    name: '삼겹살',
    image: 'https://img.kr.news.samsung.com/kr/wp-content/uploads/2017/03/%ED%91%B8%EB%93%9C%ED%8F%AC%EC%BB%A4%EC%8A%A44%ED%8E%B804.jpg',
    rating: 4.5,
  },
  {
    id: 3,
    name: '비빔밥',
    image: 'https://static.wtable.co.kr/image-resize/production/service/recipe/582/4x3/a587ba43-a6ee-482d-a3ed-8ea0dba90e7f.jpg',
    rating: 4.5,
  },
  {
    id: 4,
    name: '돈까스',
    image: 'https://i.namu.wiki/i/aN7eMJzy4XAy1yqpL3kHb41MBsSdfPjt1ZqMfDXYk6J3-je6M8dNVOMldpbxhZ-IlO9IfHXMzpZc1tVvat5IjQ.webp',
    rating: 5,
  },
  {
    id: 5,
    name: '쭈꾸미',
    image: 'https://static.wtable.co.kr/image/production/service/recipe/707/d403b168-c865-4b5e-9afb-58c48e5feaec.jpg',
    rating: 5,
  },
];


function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

export default App;
