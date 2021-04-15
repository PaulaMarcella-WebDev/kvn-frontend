import Link from "next/link";
import { useTranslation } from "next-i18next";

const DropdownLinks = ({ sublinks, styles }) => {
  const { t } = useTranslation("common");
  return (
    <ul className={styles.navlinks}>
      {sublinks &&
        sublinks.map((sublink) => (
          <li className={styles.navlink} key={sublink.title}>
            <Link href={`/${t(sublink.href)}`}>{t(sublink.title)}</Link>
          </li>
        ))}
    </ul>
  );
};

export default DropdownLinks;
