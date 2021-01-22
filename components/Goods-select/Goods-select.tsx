import {useState} from 'react';
import Select from '../Ui/Select/Select';
import styles from './Goods-select.module.scss';

function GoodsSelect(props) {
  const {
    categories,
    brands,
    models,
    changeCategories,
    changeBrands,
    // changeModels,
    selectedBrand,
  } = props;
  const className = 'select-dropdown dropdown-trigger custom-select';

  return (
    <form className={styles['goods-select']}>
      <Select
        data={categories}
        className={className}
        // defaultValue={categories[0]}
        label='Категория'
        onChange={changeCategories}
      />
      <Select
        data={brands}
        className={className}
        // defaultValue={selectedBrand}
        label='Бренд'
        onChange={changeBrands}
      />
      <Select
        data={models}
        className={className}
        // defaultValue={models[0]}
        label='Модель'
        onChange={(e) => console.log(e.target.value)}
      />

      {/* <div className='input-field'>
        <select className='select-dropdown dropdown-trigger custom-select'>
          <option value='1'>Apple</option>
          <option value='2'>Samsung</option>
          <option value='3'>Huaway</option>
        </select>
        <label>Бренд</label>
      </div>

      <div className='input-field'>
        <select className='select-dropdown dropdown-trigger custom-select'>
          <option value='1'>iPad</option>
          <option value='2'>Galaxy Tab</option>
          <option value='3'>Mega Plus</option>
        </select>
        <label>Модель</label>
      </div> */}
    </form>
  );
}

export default GoodsSelect;
