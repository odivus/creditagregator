import scrollTop from "../../utilities/scroll-top";
import cx from "classnames";
import styles from "../Banks-offer-content/Banks-offer-content.module.scss";

function RequestSendContent() {
  return (
    <div className='content-wrap content-wrap_paddings'>
      <div className='content-wrapper'>
        <ul className={styles["card-content"]}>
          <li className={cx(styles["card-content__header"])}>Категория</li>
          <li className={styles["card-content__text"]}>Смартфон</li>
          <li className={cx(styles["card-content__header"])}>Бренд</li>
          <li className={styles["card-content__text"]}>Apple</li>
          <li className={cx(styles["card-content__header"])}>Модель</li>
          <li className={styles["card-content__text"]}>iPhone 21 Max</li>
          <li className={cx(styles["card-content__header"])}>
            Цена,&nbsp;&#8381;
          </li>
          <li className={styles["card-content__text"]}>
            120&nbsp;000&nbsp;x&nbsp;2
          </li>
          <li className={cx(styles["card-content__header"])}>Количество</li>
          <li className={styles["card-content__text"]}>2</li>
          <li className={cx(styles["card-content__header"])}>
            Сумма,&nbsp;&#8381;
          </li>
          <li className={styles["card-content__text"]}>240&nbsp;000</li>
        </ul>

        <ul className={styles["card-content"]}>
          <li className={cx(styles["card-content__header"])}>Категория</li>
          <li className={styles["card-content__text"]}>Смартфон</li>
          <li className={cx(styles["card-content__header"])}>Бренд</li>
          <li className={styles["card-content__text"]}>Apple</li>
          <li className={cx(styles["card-content__header"])}>Модель</li>
          <li className={styles["card-content__text"]}>iPhone 21 Max</li>
          <li className={cx(styles["card-content__header"])}>
            Цена,&nbsp;&#8381;
          </li>
          <li className={styles["card-content__text"]}>
            120&nbsp;000&nbsp;x&nbsp;2
          </li>
          <li className={cx(styles["card-content__header"])}>Количество</li>
          <li className={styles["card-content__text"]}>2</li>
          <li className={cx(styles["card-content__header"])}>
            Сумма,&nbsp;&#8381;
          </li>
          <li className={styles["card-content__text"]}>240&nbsp;000</li>
        </ul>
        <a href='#' className='scroll-up' onClick={scrollTop}>
          <i className='small material-icons'>arrow_drop_up</i>
        </a>
      </div>
      <div className='total-cost'>
        <div
          className={cx(styles["card-content__header"], [
            "card-content__header_size_medium",
          ])}
        >
          Всего товаров&#8194;
          <span className={styles["card-content__text_size_big"]}>2</span>
        </div>
        <div
          className={cx(
            styles["card-content__header"],
            styles["card-content__header_size_medium"],
            styles["card-content__header_padding_none"]
          )}
        >
          Сумма&#8194;
          <span className={styles["card-content__text_size_big"]}>
            9&nbsp;568&nbsp;440&nbsp;&#8381;
          </span>
        </div>
      </div>
      <button className='btn btn-large-custom waves-effect waves-light btn-custom_green block-centered'>
        Отправить заявку
      </button>
    </div>
  );
}

export default RequestSendContent;
