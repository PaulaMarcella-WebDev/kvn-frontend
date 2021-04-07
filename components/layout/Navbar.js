import styles from "../../styles/Navbar.module.scss";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link href="/">
        <a>
          <Image
            src="/logo/kvn-logo.svg"
            alt="KVN Logo"
            height={88}
            width={100}
          />
        </a>
      </Link>
      <ul className="navlinks">
        <li className={styles.navlink}>
          <Link href="#">Unternehmen</Link>
        </li>
        <li className={styles.navlink}>
          <Link href="#">Leistungen</Link>
        </li>
        <li className={styles.navlink}>
          <Link href="#">Verkauf</Link>
        </li>
        <li className={styles.navlink}>
          <Link href="#">Kontakt</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
