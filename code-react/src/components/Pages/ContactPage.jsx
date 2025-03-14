import { Icon } from '@iconify/react';
import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { pageTitle } from '../../helper';
import Div from '../Div';
import PageHeading from '../PageHeading';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
import { Trans, useTranslation } from 'react-i18next';


export default function ContactPage() {
  pageTitle('Contact Us');
  useEffect(() => {
    input.current.focus();
    window.scrollTo(0, 0);
  }, []);
  const[send_msg,set_send_msg]=useState("");
  const {t}=useTranslation();
  const form = useRef();
  const input = useRef();
  const input1 = useRef();
  const input2 = useRef();
  const input3 = useRef();
  const input4 = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ly85eqs', 'template_yfr1ld7', form.current, 'mNqUYSf5n2hx_U3ei')
      .then((result) => {
          console.log(result.text,"send");
          set_send_msg(t('contact_form.success_msg'));
         window.location.pathname='/';
         
      }, (error) => {
          console.log(error.text,"error");
          set_send_msg(t('contact_form.error_msg'));
      });

    input.current.value="";
    input1.current.value="";
    input2.current.value="";
    input3.current.value="";
    input4.current.value="";
  };

  return (
    <>
      <PageHeading
        title= {t("ContactUs")}
        bgSrc="/images/contact_hero_bg.jpeg"
        pageLinkText={t("ContactUs")}
      />
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading
              title={<Trans i18nKey={"contactSup"}></Trans>}
              subtitle={t("ContactUs")}
            />
            <Spacing lg="55" md="30" />
            <ContactInfoWidget withIcon />
            <Spacing lg="0" md="50" />
          </Div>
          <Div className="col-lg-6">
            <form ref={form} onSubmit={sendEmail} className="row">
              <Div className="col-sm-6">
                <label className="cs-primary_color">{t('contact_form.name')}</label>
                <input name="user_name" ref={input} type="text" className="cs-form_field" />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">{t('contact_form.email')}</label>
                <input ref={input1}type="email" name="user_email" className="cs-form_field" />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">{t('contact_form.Project')}</label>
                <input ref={input3} type="text" className="cs-form_field" />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">{t('contact_form.phone')}</label>
                <input ref={input4} type="number" className="cs-form_field" />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-12">
                <label className="cs-primary_color">{t('contact_form.message')}*</label>
                <textarea ref={input2} name="message" 
                  cols="30"
                  rows="7"
                  className="cs-form_field"
                ></textarea>
                <Spacing lg="25" md="25" />
              </Div>
              <Div className="col-sm-12">
                <button type='submit' className="cs-btn cs-style1">
                  <span>{t('contact_form.submit')} </span>
                  <Icon icon="bi:arrow-right" />
                </button>
              </Div>
              {send_msg && <div className="alert alert-success">{send_msg}</div>}
            </form>
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
      <Div className="cs-google_map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96652.27317354927!2d-74.33557928194516!3d40.79756494697628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3a82f1352d0dd%3A0x81d4f72c4435aab5!2sTroy+Meadows+Wetlands!5e0!3m2!1sen!2sbd!4v1563075599994!5m2!1sen!2sbd"
          allowFullScreen
          title="Google Map"
        />
      </Div>
      <Spacing lg="50" md="40" />
    </>
  );
}
