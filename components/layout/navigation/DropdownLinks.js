import Link from "next/link";
import { useTranslation } from "next-i18next";

const DropdownLinks = ({ sublinks, styles }) => {
  const { t } = useTranslation("common");
  return (
    <ul className={styles.navlinks}>
      {sublinks &&
        sublinks.map((sublink, index) => (
          <li className={styles.navlink} key={index}>
            <Link href="#">{t(sublink.title)}</Link>
          </li>
        ))}
    </ul>
  );
};

export default DropdownLinks;
