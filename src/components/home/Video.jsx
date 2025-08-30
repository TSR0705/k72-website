import React from 'react'

const Video = () => {
  return (
    <div className='h-full w-full'>
        <video className='h-full w-full object-cover' autoPlay loop muted src="https://download-video-ak.vimeocdn.com/v3-1/playback/a278bb9c-996c-4760-8ca1-dd0abff308f7/83c745cf?__token__=st=1756544979~exp=1756548579~acl=%2Fv3-1%2Fplayback%2Fa278bb9c-996c-4760-8ca1-dd0abff308f7%2F83c745cf%2A~hmac=550b051b4ced803693edb1f3adb73fa8ecce7ef9784c989dbe98fe8004b1d2a7&r=dXMtd2VzdDE%3D"></video>
    </div>
  )
}

export default Video