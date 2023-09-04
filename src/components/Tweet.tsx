'use client'
import React from 'react'

const Tweet = (): JSX.Element => {
  return (
    <div className='mx-auto max-w-[550px]'>
      <blockquote className="twitter-tweet"><p lang="es" dir="ltr">‼️ATENCIÓN <br/> Aquí un diálogo entre el expresidente Bucaram y Shy Dahan, el israelí asesinado ayer en la Penitenciaría.<br />Bucaram le dice: &quot;¿cómo puedo sacar a mi hijo sin sacarte a ti?&quot;. (Parte I) <a href="https://t.co/ljPakj8vUO"><img src='pic.twitter.com/ljPakj8vUO' alt='Foto de Shy Dahan' /></a></p>&mdash; El Telégrafo Ecuador (@el_telegrafo)
        <a href="https://twitter.com/el_telegrafo/status/1292433878561554434?ref_src=twsrc%5Etfw">August 9, 2020</a>
      </blockquote>
      <script async src="https://platform.twitter.com/widgets.js"></script>
    </div>
  )
}

export default Tweet
