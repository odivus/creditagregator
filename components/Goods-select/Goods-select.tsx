import styles from './Goods-select.module.scss';

function GoodsSelect() {
  return (
    <form className={styles["goods-select"]}>
      <div className='input-field'>
        <select className='select-dropdown dropdown-trigger custom-select'>
          <option value='1'>Планшет</option>
          <option value='2'>Смартфон</option>
          <option value='3'>Ноутбук</option>
        </select>
        <label>Категория</label>
      </div>

      <div className='input-field'>
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
      </div>
    </form>
  );
}

export default GoodsSelect;
