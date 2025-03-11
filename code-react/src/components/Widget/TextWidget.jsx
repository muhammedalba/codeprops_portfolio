import React from 'react'
import Div from '../Div'

export default function TextWidget({logoSrc, logoAlt, text}) {
  return (
    <Div className="cs-text_widget">
      <img width={100} height={100} src={logoSrc} alt={logoAlt} />
      <p className='p-0 m-0'>{text}</p>
    </Div>
  )
}
