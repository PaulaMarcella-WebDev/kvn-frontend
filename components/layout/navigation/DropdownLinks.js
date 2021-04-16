import Link from "next/link";
import { useTranslation } from "next-i18next";
import { convertToHref } from "@/helpers";

const DropdownLinks = ({ href, sublinks, styles }) => {
  const { t } = useTranslation("common");
  return (
    <ul className={styles.navlinks}>
      {sublinks &&
        sublinks.map((sublink) => {
          const { title } = sublink;
          const sublinkhref = sublink.href
            ? `/${t(sublink.href)}`
            : sublink.hash
            ? `/${href}/#${convertToHref(t(sublink.hash))}`
            : "";
          return (
            <li className={styles.navlink} key={sublinkhref}>
              <Link href={sublinkhref}>{t(title)}</Link>
            </li>
          );
        })}
    </ul>
  );
};

export default DropdownLinks;
