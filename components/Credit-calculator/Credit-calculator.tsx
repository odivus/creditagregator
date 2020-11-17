import styles from './Credit-calculator.module.scss';

function CreditCalculator() {
  return (
    <div className={styles["credit-calculator-wrapper"]}>
      <div className={styles["credit-calculator"]}>
        <div className={styles["credit-calculator-item"]}>
          <div className={styles["credit-calculator-item__header"]}>
            Стоимость&nbsp;товаров
          </div>
          <div className={styles["credit-calculator-item__text"]}>
            9&nbsp;448&nbsp;440&nbsp;&#8381;
          </div>
        </div>

        <div className={styles["credit-calculator-item"]}>
          <div className={styles["credit-calculator-item__header"]}>
            Ежемесячный&nbsp;платеж
          </div>
          <div className={styles["credit-calculator-item__text"]}>
            100&nbsp;000&nbsp;&#8381;
          </div>
          <div className={styles.slidecontainer}>
            <input
              type='range'
              min='1'
              max='100'
              defaultValue='1'
              className={styles.slider}
              id='monthlyPayment'
            />
          </div>
        </div>

        <div className={styles["credit-calculator-item"]}>
          <div className={styles["credit-calculator-item__header"]}>
            Первый&nbsp;взнос
          </div>
          <div className={styles["credit-calculator-item__text"]}>10%</div>
          <div className={styles.slidecontainer}>
            <input
              type='range'
              min='1'
              max='100'
              defaultValue='1'
              className={styles.slider}
              id='initialPayment'
            />
          </div>
        </div>

        <div className={styles["credit-calculator-item"]}>
          <div className={styles["credit-calculator-item__header"]}>Итого</div>
          <div className={styles["credit-calculator-item__text"]}>
            944&nbsp;844&nbsp;&#8381;
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreditCalculator;
