import styles from "@/styles/TeamCard.module.scss";
import Image from "next/image";
const TeamCard = ({ name, email, phone, fax, photo, position }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imgcontainer}>
        <Image
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          src={`/team/${photo}.jpeg`}
          alt={name}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.text}>{position}</p>
        <p className={styles.text}>{email}</p>
        <p className={styles.text}>{phone}</p>
        {/* <p className={styles.text}>{fax}</p> */}
      </div>
    </div>
  );
};

export default TeamCard;
