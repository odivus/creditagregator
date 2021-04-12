import {useState, useEffect} from 'react';

import RangeSlider from '../Ui/Range-slider/Range-slider';
import styles from './Credit-calculator.module.scss';

interface Props {
  goodsPriceSum: number;
  setMonthQuantity: (state: number) => void;
  setParentMonthlyPayment: (state: number) => void;
}

function CreditCalculator(props: Props) {
  const { 
    goodsPriceSum,
    setMonthQuantity, 
    setParentMonthlyPayment 
  } = props;

  const [monthlyPayment, setMonthlyPayment] = useState(goodsPriceSum);

  useEffect(() => {
    setMonthlyPayment(goodsPriceSum);
  }, [goodsPriceSum]);

  const [firstPayment, setFirstPayment] = useState(10);

  const totalFirstPayment = (goodsPriceSum * firstPayment) / 100;
  const total = goodsPriceSum - totalFirstPayment;

  function calcMonthlyPayment(inputValue: number): void {
    const result: number = Math.round(goodsPriceSum / inputValue);

    setParentMonthlyPayment(result);
    setMonthQuantity(inputValue);
    setMonthlyPayment(result);
  }

  return (
    <div className={styles['credit-calculator-wrapper']}>
      <div className={styles['credit-calculator']}>
        <div className={styles['credit-calculator-item']}>
          <div className={styles['credit-calculator-item__header']}>
            Стоимость&nbsp;товаров
          </div>
          <div className={styles['credit-calculator-item__text']}>
            {goodsPriceSum}&nbsp;&#8381;
          </div>
        </div>

        <div className={styles['credit-calculator-item']}>
          <div className={styles['credit-calculator-item__header']}>
            Ежемесячный&nbsp;платеж
          </div>
          <div className={styles['credit-calculator-item__text']}>
            {monthlyPayment}&nbsp;&#8381;
          </div>
          <div className={styles.slidecontainer}>
            <RangeSlider 
              min='1'
              max='12'
              defaultValue='1'
              doHandler={calcMonthlyPayment}
            />
          </div>
        </div>

        <div className={styles['credit-calculator-item']}>
          <div className={styles['credit-calculator-item__header']}>
            Первый&nbsp;взнос
          </div>
          <div className={styles['credit-calculator-item__text']}>
            {firstPayment}%
          </div>
          <div className={styles.slidecontainer}>
            <RangeSlider 
              min='10'
              max='50'
              defaultValue='10'
              doHandler={setFirstPayment}
            />
          </div>
        </div>

        <div className={styles['credit-calculator-item']}>
          <div className={styles['credit-calculator-item__header']}>Итого</div>
          <div className={styles['credit-calculator-item__text']}>
            {Math.floor(total)}&nbsp;&#8381;
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreditCalculator;
