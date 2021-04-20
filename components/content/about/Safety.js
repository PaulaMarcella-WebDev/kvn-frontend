import { useTranslation } from "next-i18next";

const Safety = () => {
  const { t } = useTranslation(["about"]);
  return (
    <section id={t("common:href-safety")}>
      <div className="container">
        <div className="section-heading">
          <span>Safety</span>
        </div>
        <div className="text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          magnam laboriosam pariatur optio expedita quam saepe possimus quod non
          minus dolorum cumque autem odit, voluptatibus eos itaque ducimus
          quidem! Facilis adipisci nisi mollitia molestiae beatae dignissimos
          sunt illo voluptas sapiente.
        </div>
      </div>
    </section>
  );
};

export default Safety;
