import styles from './Range-slider.module.scss';

interface Props {
  min: string;
  max: string;
  defaultValue: string;
  doHandler: (state: number) => void;
}

function RangeSlider(props: Props) {
  const { 
    min, 
    max, 
    defaultValue, 
    doHandler,
  } = props;

  return (
    <div className={styles.slidecontainer}>
      <input
        type='range'
        min={min}
        max={max}
        defaultValue={defaultValue}
        className={styles.slider}
        onChange={(e) => doHandler(parseInt(e.target.value))}
      />
    </div>  
  );
}

export default RangeSlider;
