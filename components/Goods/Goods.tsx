import {useState, useEffect} from 'react';
import GoodsSelect from '../Goods-select/Goods-select';
import GoodsWorking from '../Goods/Goods-working';
import GoodsCard from '../Goods-card/Goods-card';

import cx from 'classnames';
import styles from './Goods.module.scss';

function Goods(props) {
  // console.log(props);

  const [goodsAdded, setGoodsAdded] = useState([]);
  console.log(goodsAdded);

  return (
    <div className='row row_content'>
      <GoodsWorking {
        ...{...props,
          goodsAdded, 
          setGoodsAdded,
        }
      }
      />
      
    </div>
  );
}

export default Goods;
