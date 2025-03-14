import React, { useEffect } from 'react';
import { pageTitle } from '../../helper';
import Cta from '../Cta';
import FunFact from '../FunFact';
import PageHeading from '../PageHeading';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import TeamSlider from '../Slider/TeamSlider';
import Spacing from '../Spacing';
import { Trans, useTranslation } from 'react-i18next';
// const funfaceData = [
//   {
//     title: 'Global Happy Clients',
//     factNumber: '40K',
//   },
//   {
//     title: 'Project Completed',
//     factNumber: '50K',
//   },
//   {
//     title: 'Team Members',
//     factNumber: '245',
//   },
//   {
//     title: 'Digital products',
//     factNumber: '550',
//   },
// ];

export default function AboutPage() {
  pageTitle('About');
  const {t}= useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* Start Page Heading Section */}
      <PageHeading
        title=   {t("about.title")}
        bgSrc="images/about_hero_bg.jpeg"
        pageLinkText={t("about.title")}
      />
      {/* End Page Heading Section */}

      {/* Start About Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-7">
            <SectionHeading
              title={t("about.description")}
              subtitle="About Our codeprops"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
               {t("about.sub_title")}
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="40" />
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-xl-2">
            <img
              src="/images/about_img_1.jpeg"
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-7">
            <img
              src="/images/about_img_2.jpeg"
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-5">
            <img
              src="/images/about_img_3.jpeg"
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
        </Div>
      </Div>
      <Spacing lg="75" md="55" />
      {/* End About Section */}

      {/* Start Fun Fact Section */}
      <Div className="container">
        <FunFact
          title={t("fact.fun_fac_title")}
          subtitle={t("fact.fun_fac_subtitle")}
          data={t("fact.fun_fac_Data",{ returnObjects: true })}
        />
      </Div>
      {/* End Fun Fact Section */}

      {/* Start Why Choose Section */}
      <Spacing lg="100" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-image_layer cs-style1">
              <Div className="cs-image_layer_in">
                <img
                  src="/images/about_img_4.jpeg"
                  alt="About"
                  className="w-100 cs-radius_15"
                />
              </Div>
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
          <Div className="col-xl-5 offset-xl-1 col-lg-6">
            <SectionHeading
              title={t("about.why_choose_title")}
              subtitle={t("about.why_choose")}
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
              {t("about.why_choose_description")}

              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
              {t("about.why_choose_description")}

              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="0" />
            </SectionHeading>
          </Div>
        </Div>
      </Div>
      {/* End Why Choose Section */}

      {/* Start Team Section */}
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title={t("teams.title")}
          subtitle={t("teams.sub_title")}
          variant="cs-style1"
        />
        <Spacing lg="85" md="45" />
        <TeamSlider />
      </Div>
      {/* End Team Section */}

      {/* Start CTA Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Cta
          title={<Trans i18nKey={'cta.title'}></Trans>}
          btnText={t("cta.btn_text")}
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
      {/* End CTA Section */}
    </>
  );
}
