import styles from "@/styles/Card.module.scss";
const Card = ({ src }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imgcontainer}>
        <img src="./headers/bluesky-header.jpg" alt="platzhalter" />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>Card Beispiel</h3>
        <p className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit deserunt
          dicta delectus. A dolor, sequi quaerat natus dolore soluta autem?
        </p>
      </div>
    </div>
  );
};

export default Card;
