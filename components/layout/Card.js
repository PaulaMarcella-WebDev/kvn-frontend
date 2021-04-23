import styles from "@/styles/Card.module.scss";
import Image from "next/image";
const Card = ({ photo, children }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imgcontainer}>
        <Image
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          src={`/images/${photo}`}
          alt={photo}
        />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Card;
