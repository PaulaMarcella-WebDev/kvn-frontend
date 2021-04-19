import styles from "@/styles/Card.module.scss";
const Card = ({ member }) => {
  const { name, email, phone, fax } = member;
  return (
    <div className={styles.card}>
      <div className={styles.imgcontainer}>
        <img src="./headers/bluesky-header.jpg" alt="platzhalter" />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.text}>{email}</p>
        <p className={styles.text}>{phone}</p>
        <p className={styles.text}>{fax}</p>
      </div>
    </div>
  );
};

export default Card;
