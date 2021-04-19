import styles from "@/styles/PageHeader.module.scss";
import Image from "next/image";

const PageHeader = ({ img, imgPosition = "center" }) => {
  return (
    <div className={styles.pageheader}>
      <Image
        className={styles.img}
        src={img}
        layout="fill"
        objectFit="cover"
        objectPosition={imgPosition}
      />
    </div>
  );
};

export default PageHeader;
