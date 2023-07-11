import styles from "./Spinner.module.scss";

const Spinner = () => {
  return (
    <div className={styles.SpinnerBox}>
      <img src="./assets/spinner.svg" alt="Loader" />
    </div>
  );
};

export default Spinner;
