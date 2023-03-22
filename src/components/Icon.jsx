import React from 'react'
import {Image} from 'next/image'

const IconMJ=(props={}) =>{
  const size=props.size || props.width || props.height || 32
  const iconSrc=props.icon || props.iconSrc || ''
  const url=['/','.svg','.png'].findIndex(e=>iconSrc.includes(e))>-1?iconSrc:`assets/icons/${iconSrc}.svg`
  const wrapper='svg'
  return <Image src={url} 
    width={size}
    height={size}
    fill={props.fill || props.color || 'currentColor'}
    stroke={props.stroke || props.color}
    wrapper={wrapper}
    style={{height:'auto'}}
    alt={props.alt || iconSrc}
    {...props}
    />

}

export default IconMJ