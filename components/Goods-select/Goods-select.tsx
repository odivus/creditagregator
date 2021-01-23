import Select from '../Ui/Select/Select';
import styles from './Goods-select.module.scss';

function GoodsSelect(props) {
  const {
    selectedCategory,
    selectedBrand,
    selectedModel,
    changeCategories,
    changeBrands,
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
        onChange={(e) => console.log(e.target.value)}
      />
    </form>
  );
}

export default GoodsSelect;
