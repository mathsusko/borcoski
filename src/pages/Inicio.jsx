import { useState, useEffect, useRef } from 'react'
import styles from './Inicio.module.css'
import { useNavigate } from 'react-router-dom'
import {
  SpeakerHigh,
  Play,
  EnvelopeOpen,
  WhatsappLogo,
  SpotifyLogo,
  SoundcloudLogo,
  InstagramLogo
} from '@phosphor-icons/react'

export default function Inicio() {
  const navigate = useNavigate()
  const [isVisible, setIsVisible] = useState(false) // Estado para controlar a visibilidade
  const musicRef = useRef(null) // Referência à div .music

  function handleDiscografia() {
    navigate('/discografia')
  }

  useEffect(() => {
    const handleScroll = () => {
      if (musicRef.current) {
        const rect = musicRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight

        // Verifica se a metade da div .music está visível na janela de visualização
        if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section>
      <article className={styles.bannerHero}></article>
      <article className={styles.content}>
        <div className={styles.panel}>
          <p>Oficial Website</p>
          <p>©</p>
          <p>2024</p>
          <p>Techno</p>
          <p>|</p>
          <p>Low BPM</p>
        </div>

        {/* Adiciona a classe 'visible' condicionalmente */}
        <div
          className={`${styles.music} ${isVisible ? styles.visible : ''}`}
          ref={musicRef}
        >
          <div className={styles.card}>
            <div className={styles.firstColumn}>
              <div className={styles.descriptions}>
                <div className={styles.head}>
                  <h2>Lançamento</h2>
                  <p>Ouça aqui minha prévia!</p>
                  <p>music</p>
                </div>
                <div className={styles.mid}>
                  <p>Acesse minhas plataformas musicais e encontre muito mais!</p>
                  <div className={styles.images}>
                    <a href="https://soundcloud.com/borcoskimusic/tracks">
                      <img src="https://res.cloudinary.com/dio2dnpmn/image/upload/v1725781980/borcoski/coverMusic/rpsckm4bmei6nvdidcb4.png" />
                    </a>
                    <a href="#">
                      <img src="https://res.cloudinary.com/dio2dnpmn/image/upload/v1725781979/borcoski/coverMusic/bs3paaelw3j6eqp5vb9c.png" />
                    </a>
                  </div>
                </div>
              </div>

              <button onClick={handleDiscografia}>Ver discografia</button>
            </div>
            <div className={styles.secondColumn}>
              <div className={styles.boxMusic}></div>

              <audio
                src="https://res.cloudinary.com/dio2dnpmn/video/upload/v1725782718/borcoski/sounds/nbguxy4vhis8b9gleiyj.mp3"
                controls
              ></audio>
            </div>
          </div>
        </div>

        <div className={styles.bio}>
          <div className={styles.logoOne}>
            <img src="https://res.cloudinary.com/dio2dnpmn/image/upload/v1725782007/borcoski/coverMusic/qyjovvjjkh6qzrx9bsms.png" />
          </div>
          <div className={styles.bioDescription}>
            <h2>Biografia</h2>
            <p>
              O talentoso DJ e produtor musical BORCOSKI, aos 23 anos, está deixando sua
              marca na cena eletrônica. Natural de Campo Largo, Paraná tem conquistado
              admiradores e fãs com sua música cativante e envolvente.
            </p>
            <p>
              Desde 2012 tem estado em constante contato com a música, explorando uma
              variedade de gêneros e vertentes. Sua paixão o levou a conhecer diversas
              vertentes, desde o high bpm até o minimal / deep tech, onde encontrou sua
              verdadeira identidade sonora. Com um estilo único e muito groove e uma
              habilidade inigualável de criar uma atmosfera envolvente, BORCOSKI tem
              encantado o público com suas performances energéticas e vibrantes.
            </p>
            <p>
              Ao longo de sua carreira, Luis teve a oportunidade de tocar em prestigiados
              clubs e eventos renomados como Club Vibe, Danghai Club, RW Club, PARK.ART,
              Stand By entre outros clubs, onde suas apresentações impressionantes o
              destacaram como um artista talentoso e versátil. Além disso, ele também teve
              a honra de ser um dos artistas do after do renomado festival XXXPERIENCE,
              produzido pelo duo curitibano Pimp Chic.
            </p>
            <p className={styles.p}>
              "- <strong>Minha jornada</strong> na música eletrônica tem sido incrível até
              agora. Cada experiência tem me ensinado e me inspirado a levar minha música
              para o próximo nível",<br></br>
              <br></br> "- <strong>Meu objetivo</strong> é criar uma conexão emocional com
              o público através da minha música, proporcionando uma experiência única e
              memorável a cada performance na pista."
            </p>
          </div>
        </div>

        <div className={styles.cta}>
          <div className={styles.ctaContent}>
            <div className={styles.colOne}>
              <h2>Vamos Conversar?</h2>
              <p>
                Se você está pronto para levar seu próximo evento a um novo patamar ou
                deseja discutir uma parceria que vai marcar a cena do Techno, entre em
                contato comigo! Estou ansioso para ouvir suas ideias e colaborar para
                criar momentos realmente especias.
              </p>
            </div>

            <div className={styles.colTwo}>
              <div className={styles.contacts}>
                <h2>Contatos</h2>
                <div className={styles.contact}>
                  <div className={styles.wpp}>
                    <WhatsappLogo size={24} />
                    <p>WhatsApp</p>
                  </div>
                  <p>(41) 99999-9999</p>
                </div>

                <div className={styles.contact}>
                  <div className={styles.wpp}>
                    <EnvelopeOpen size={24} />
                    <p>E-mail</p>
                  </div>
                  <p>email@dollmaker.com.br</p>
                </div>
              </div>

              <div className={styles.icons}>
                <p>Redes sociais/Plataformas Musicais</p>
                <div className={styles.icon}>
                  <a
                    href="https://www.instagram.com/borcoskimusic/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.instagramLink}
                  >
                    <InstagramLogo size={32} />
                  </a>
                  <a
                    href="https://soundcloud.com/borcoskimusic/tracks"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.instagramLink}
                  >
                    <SoundcloudLogo size={32} />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.instagramLink}
                  >
                    <SpotifyLogo size={32} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}
