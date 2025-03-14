import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { pageTitle } from "../../helper";
import Accordion from "../Accordion";
import Button from "../Button";
import Cta from "../Cta";
import IconBox from "../IconBox";
import PageHeading from "../PageHeading";
import Div from "../Div";
import SectionHeading from "../SectionHeading";
import TestimonialSlider from "../Slider/TestimonialSlider";
import Spacing from "../Spacing";
import { Trans, useTranslation } from "react-i18next";

export default function ServiceDetailsPage() {
  pageTitle("Service Details");
  const {t}=useTranslation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const inboxes=[1,2,3].map((i)=>(
    <Div  key={i}className="col-lg-4">
    <IconBox
     
      icon={`/images/icons/service_icon_${i}.svg`}
      title={t("services_Details.Icon_Box", { returnObjects: true })[i-1]?.title}
      subtitle={t("services_Details.Icon_Box", { returnObjects: true })[i-1]?.sub_title}
    />
    </Div>
  ));
  return (
    <>
      <PageHeading
        title={t('services_Details.title')}
        bgSrc="/images/service_hero_bg.jpeg"
        pageLinkText={t('services_Details.title')}
      />
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title={t('services_Details.sub_title')}
          subtitle="UI/UX Design"
          variant="cs-style1 text-center"
        />
        <Spacing lg="90" md="45" />
        <Div className="row">
          {inboxes}
        </Div>
      </Div>
      <Spacing lg="120" md="50" />
      <Div className="container">
        <Div className="row align-items-center">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-radius_15 cs-shine_hover_1">
              <img
                src="/images/service_img_1.jpeg"
                alt="Service"
                className="cs-radius_15 w-100"
              />
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
          <Div className="col-lg-6 offset-xl-1">
            <h2 className="cs-font_50 cs-m0">
             {t('services_Details.related_services')}
            </h2>
            <Spacing lg="50" md="30" />
            <Div className="row">
              <Div className="col-lg-6">
                <Button
                  btnLink="/service/service-details"
                  btnText="Web page "
                  variant="cs-type2"
                />
                <Spacing lg="20" md="10" />
                <Button
                  btnLink="/service/service-details"
                  btnText="eCommerce "
                  variant="cs-type2"
                />
                <Spacing lg="20" md="10" />
                <Button
                  btnLink="/service/service-details"
                  btnText="Landing page"
                  variant="cs-type2"
                />
                <Spacing lg="20" md="10" />
                <Button
                  btnLink="/service/service-details"
                  btnText="Email template"
                  variant="cs-type2"
                />
                <Spacing lg="20" md="10" />
                <Button
                  btnLink="/service/service-details"
                  btnText="Application design"
                  variant="cs-type2"
                />
                <Spacing lg="20" md="10" />
                <Button
                  btnLink="/service/service-details"
                  btnText="Illustration"
                  variant="cs-type2"
                />
                <Spacing lg="0" md="10" />
              </Div>
              <Div className="col-lg-6">
                <Button
                  btnLink="/service/service-details"
                  btnText="Infographic design"
                  variant="cs-type2"
                />
                <Spacing lg="20" md="10" />
                <Button
                  btnLink="/service/service-details"
                  btnText="Mobile apps "
                  variant="cs-type2"
                />
                <Spacing lg="20" md="10" />
                <Button
                  btnLink="/service/service-details"
                  btnText="Banner, brochure, card"
                  variant="cs-type2"
                />
                <Spacing lg="20" md="10" />
                <Button
                  btnLink="/service/service-details"
                  btnText="Other design"
                  variant="cs-type2"
                />
                <Spacing lg="20" md="10" />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
      <TestimonialSlider />
      <Spacing lg="145" md="80" />
      <Div className="container cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-5 col-lg-6">
              <SectionHeading
                title={t('services_Details.FAQ_title')}
                subtitle="FAQ’s"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-lg-6 offset-xl-1">
              <Accordion />
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Cta
          title={<Trans i18nKey={"cta.title"}></Trans>}
          btnText={t("cta.btn_text")}
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
    </>
  );
}
