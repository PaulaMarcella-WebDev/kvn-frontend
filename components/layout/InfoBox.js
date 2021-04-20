import styles from "@/styles/InfoBox.module.scss";

const InfoBox = ({ title, text }) => {
  return (
    <div className={styles.infobox}>
      <h3 className="title">{title}</h3>
      <p className="text-last">{text}</p>
    </div>
  );
};

export default InfoBox;
