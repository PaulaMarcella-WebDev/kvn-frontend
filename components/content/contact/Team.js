import styles from "@/styles/Team.module.scss";
import { useTranslation } from "next-i18next";

import TeamMembers from "@/data/team";
import TeamCard from "@/layout/TeamCard";

const Team = () => {
  const { t } = useTranslation(["contact", "common"]);
  return (
    <section id={t("common:href-contactperson")}>
      <div className="container dark-bg">
        <h2 className="section-heading">
          <span>{t("team-section-heading")}</span>
        </h2>
        <div className={styles.teamgrid}>
          {TeamMembers.map(({ name, email, phone, fax, photo, position }) => {
            return (
              <TeamCard
                key={name}
                name={name}
                email={email}
                phone={phone}
                fax={fax}
                photo={photo}
                position={position}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
