import RequestCreateProps from './Request-create-props';

interface GoodsProps extends RequestCreateProps {
  changeBrands: (e: React.FormEvent<EventTarget>) => void;
  changeModels: (e: React.FormEvent<EventTarget>) => void;
  changeCategories: (e: React.FormEvent<EventTarget>) => void;
  selectedCategory: string;
  selectedBrand: string;
  selectedModel: string;
  categories: Array<string>;
  brands: Array<string>;
  models: Array<string>;
  selectedFullModel: { 
    _id: string,
    brand: string,
    model: string,
    price: number 
  };
}

export default GoodsProps;