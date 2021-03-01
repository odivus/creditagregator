import GoodsProps from '../../Interfaces/Goods-props';
import Select from '../Ui/Select/Select';
import styles from './Goods-select.module.scss';

function GoodsSelect(props: GoodsProps) {
  const {
    selectedCategory,
    selectedBrand,
    selectedModel,
    changeCategories,
    changeBrands,
    changeModels,
    categories,
    brands,
    models,
  } = props;
  
  const className = 'select-dropdown dropdown-trigger custom-select';

  return (
    <form className={styles['goods-select']}>
      <Select
        data={categories}
        className={className}
        defaultValue={selectedCategory}
        label='Категория'
        onChange={changeCategories}
      />
      <Select
        data={brands}
        className={className}
        defaultValue={selectedBrand}
        label='Бренд'
        onChange={changeBrands}
      />
      <Select
        data={models}
        className={className}
        defaultValue={selectedModel}
        label='Модель'
        onChange={changeModels}
      />
    </form>
  );
}

export default GoodsSelect;
