import styles from "@/styles/Team.module.scss";
import { useTranslation } from "next-i18next";

import TeamMembers from "@/data/team";
import Card from "@/layout/Card";

const Team = () => {
  const { t } = useTranslation(["about", "common"]);
  return (
    <section id={t("common:href-contactperson")}>
      <div className="container dark-bg">
        <h3 className="section-heading">
          <span>{t("contact-persons-title")}</span>
        </h3>
        <div className={styles.teamgrid}>
          {TeamMembers.map(({ name, email, phone, fax, photo }) => {
            return (
              <Card
                key={name}
                name={name}
                email={email}
                phone={phone}
                fax={fax}
                photo={photo}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
