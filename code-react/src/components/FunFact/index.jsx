import React, { useState, useEffect, useMemo, useRef } from 'react';

import Div from '../Div'
import './funfact.scss'
import Ripples from 'react-ripples';
export default function FunFact({variant, title, subtitle, data}) {
 


  const ref = useRef(null);
  const [startCounting, setStartCounting] = useState(false); // حالة لتفعيل العد عند رؤية العنصر


  const [counts, setCounts] = useState([]);
  // استخدم المراقب عند تحميل المكون
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setStartCounting(true); // ابدأ العداد عندما يصبح العنصر مرئيًا
          observer.disconnect(); // فصل المراقب بعد بدء العداد
        }
      },
      { threshold: 0.5 } // نسبة ظهور العنصر التي تفعّل العد (50%)
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current); // تنظيف المراقب
      }
    };
  }, []);



  useEffect(() => {
    if (startCounting && data && data.length > 0) {
      // إعداد القيم الابتدائية لكل عنصر
      const initialCounts = data.map(() => 0);
      setCounts(initialCounts);

      data.forEach((item, index) => {
        const end = +item.factNumber; // الحصول على القيمة النهائية لكل عنصر
        const duration = 5000; // الوقت الإجمالي للعد لكل عنصر
        const incrementTime = Math.round(duration / end); // سرعة العد

        let start = 0;
        const timer = setInterval(() => {
          start += 1;
          setCounts(prevCounts => {
            const newCounts = [...prevCounts];
            newCounts[index] = start;
            return newCounts;
          });
          if (start === end) clearInterval(timer); // إيقاف التايمر عند الوصول للقيمة النهائية
        }, incrementTime);
      });
    }
  }, [data, startCounting]);

  const count_data = useMemo(() => {
    if (data.length > 0) {
      return data.map((item, index) => (
        <Div className="cs-funfact cs-style1" key={index}>
          <Ripples>
            <Div className="cs-funfact_number cs-primary_font cs-semi_bold cs-primary_color">
              <span />{counts[index]}
            </Div>
          </Ripples>
          <Div className="cs-funfact_text">
            <span className="cs-accent_color">+</span>
            <p>{item.title}</p>
          </Div>
        </Div>
      ));
    }
  }, [counts, data]);

  return (
    <div className={variant ? `cs-funfact_wrap ${variant}`: 'cs-funfact_wrap'} ref={ref}>
      <Div className="cs-funfact_shape"  style={{backgroundImage: 'url(./images/funfact_shape_bg.svg)'}} />
      <Div className="cs-funfact_left">
        <Div className="cs-funfact_heading">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </Div>
      </Div>
      <Div className="cs-funfact_right">
        <Div className="cs-funfacts">
        {count_data }
        </Div>
      </Div>
    </div>
  )
}
