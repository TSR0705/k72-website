import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className="font-[font2] flex items-center justify-center gap-6 py-1.5 overflow-hidden">
      <Link
        to="/projects"
        className="text-[6.5vw] leading-[5vw] border-[3px] border-white rounded-full px-3 pt-3 uppercase hover:border-[#D3FD50] hover:text-[#D3FD50] transition-colors duration-300"
      >
        Projets
      </Link>

      <Link
        to="/agence"
        className="text-[6.5vw] leading-[5vw] border-[3px] border-white rounded-full px-3 pt-3 uppercase hover:border-[#D3FD50] hover:text-[#D3FD50] transition-colors duration-300"
      >
        Agence
      </Link>
    </div>
  )
}

export default HomeBottomText
