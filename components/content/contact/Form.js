import { useTranslation } from "next-i18next";
import { useState } from "react";

const initialState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: ""
};

const Form = () => {
  const { t } = useTranslation(["contact"]);
  const [formData, setFormData] = useState(initialState);
  const { name, email, phone, subject, message } = formData;
  return (
    <div>
      <form>
        <input type="text" name={"name"} />
        <input type="email" name={"email"} />
        <input type="number" name={"phone"} />
        <input type="text" name={"subject"} />
        <input type="text" name={"message"} />
      </form>
    </div>
  );
};

export default Form;
