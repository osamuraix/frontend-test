import Link from "next/link";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Index: React.FC = () => {
  const { t } = useTranslation();

  const [activity, setActivity] = useState("");
  const [type, setType] = useState("");
  const [participant, setParticipant] = useState(1);
  const [budget, setBudget] = useState(50);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(activity, type, participant, budget);
  };

  return (
    <>
      <div className={"pageHeader"}>
        <h1>{t("Landing Page")}</h1>
        <p>{t("Landing Page description")}</p>
      </div>

      <div className={"form"}>
        <div className="box">
          <div className="box-100">
            <div className="box-10">
              <label>{t("Activity")}</label>
            </div>
            <div className="box-50">
              <p>Write a song</p>
            </div>
          </div>

          <div className="box-100">
            <div className="box-10">
              <label>{t("Type")}</label>
            </div>
            <div className="box-50">
              <p>Music</p>
            </div>
          </div>
        </div>

        <div className="box">
          <div className="box-center">
            <div className="box-50">
              <div className="box-10">
                <label>{t("Participant")}</label>
              </div>
              <div className="box-50">
                <p>1</p>
              </div>
            </div>

            <div className="box-50">
              <div className="box-10">
                <label>{t("Budget")}</label>
              </div>
              <div className="box-50">
                <p>$50.00</p>
              </div>
            </div>
          </div>
        </div>

        <button className={"button"} onClick={handleSubmit}>
          {t("Get New Activity")}
        </button>
      </div>

      <div className={"pageFooter"}>
        <Link href="/sign-out" className="red">
          <span className="center">{t("Sign out")}</span>
        </Link>
      </div>
    </>
  );
};

export default Index;
