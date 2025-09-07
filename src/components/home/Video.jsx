import React from 'react'

const Video = () => {
  return (
    <div className='h-full w-full'>
        <video className='h-full w-full object-cover' autoPlay loop muted src="https://download-video-ak.vimeocdn.com/v3-1/playback/a278bb9c-996c-4760-8ca1-dd0abff308f7/83c745cf?__token__=st=1756714381~exp=1756717981~acl=%2Fv3-1%2Fplayback%2Fa278bb9c-996c-4760-8ca1-dd0abff308f7%2F83c745cf%2A~hmac=20464f7cc21189af4ac684bfccb1d30dffeb9fd73141c856fdd83c9c6be34bf7&r=dXMtd2VzdDE%3D"></video>
    </div>
  )
}

export default Video