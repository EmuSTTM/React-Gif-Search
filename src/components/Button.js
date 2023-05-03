import React from 'react'
// import { Button, Link } from './styles'

export default function ButtonComponent ({children, href, size = 'jkhdfgsjkfghsdsjkldfgdljk'}) {
  return href
    ? <a size={size} href={href}>{children}</a>
    : <button size={size}>{children}</button>
}