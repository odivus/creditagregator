import Select from '../Ui/Select/Select';
import styles from './Goods-select.module.scss';

function GoodsSelect() {
  const mockProps = {
    data: [
      { id: '1', value: 'tablet', name: 'Планшеты' },
      { id: '2', value: 'smartphone', name: 'Смартфоны' },
      { id: '3', value: 'laptop', name: 'Ноутбуки' },
    ],
    className: 'select-dropdown dropdown-trigger custom-select',
    label: 'Категория',
  };

  const { data, className, label } = mockProps;

  return (
    <form className={styles['goods-select']}>
      <Select 
        data={data} 
        className={className} 
        defaultValue='smartphone' 
        label={label} 
      />
      
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
