import styles from './Goods-select.module.scss';

function GoodsSelect() {
  return (
    <form className={styles['goods-select']}>
      <div className='input-field'>
        <select className='select-dropdown dropdown-trigger custom-select'>
          <option value='1'>Автомобиль</option>
          <option value='2'>Смартфон</option>
          <option value='3'>Ноутбук</option>
        </select>
        <label>Категория</label>
      </div>

      <div className='input-field'>
        <select className='select-dropdown dropdown-trigger custom-select'>
          <option value='1'>BMW</option>
          <option value='2'>Lada</option>
          <option value='3'>Tesla</option>
        </select>
        <label>Бренд</label>
      </div>

      <div className='input-field'>
        <select className='select-dropdown dropdown-trigger custom-select'>
          <option value='1'>XYZ</option>
          <option value='2'>Novichok</option>
          <option value='3'>Model S</option>
        </select>
        <label>Модель</label>
      </div>
    </form>
  );
}

export default GoodsSelect;
