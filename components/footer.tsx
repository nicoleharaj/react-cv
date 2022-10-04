import { BsFillHeartFill } from 'react-icons/bs';
import React from 'react'

const Footer = (): JSX.Element => {
  return (
    <footer className="flex items-center justify-center p-2 text-sm text-gray-700">
      Made with <BsFillHeartFill className="mx-1 text-xs" /> by Nicole
    </footer>
  )
}

export default Footer