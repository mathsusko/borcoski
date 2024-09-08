import { useNavigate } from 'react-router-dom'
import styles from './Footer.module.css'

export default function Footer() {
  const navigate = useNavigate()
  const handleInicio = () => {
    navigate('/')
    window.scrollTo({ top: 0, behavior: 'smooth' }) // Rola suavemente para o topo da página
  }
  const handleGigs = () => navigate('/gigs')
  const handleDisco = () => navigate('/discografia')
  const handleContato = () => navigate('/contato')

  // Para URLs externas, use window.location.href
  const handleInsta = () =>
    (window.location.href = 'https://instagram.com/borcoskimusic/')
  const handleSpotify = () =>
    (window.location.href =
      'https://open.spotify.com/intl-pt/artist/7dGmK4sImWkq5ClORKQwIL?si=dofDHcXkQMayEpcQF8DTyA')
  const handleSoundcloud = () =>
    (window.location.href = 'https://soundcloud.com/borcoskimusic')

  return (
    <div className={styles.content}>
      <div className={styles.footer}>
        <div className={styles.pages}>
          <div className={styles.page}>
            <h2>Páginas</h2>
            <p onClick={handleInicio}>Início</p>
            <p onClick={handleGigs}>Gigs</p>
            <p onClick={handleDisco}>Discografia</p>
            <p onClick={handleContato}>Contrate</p>
          </div>
          <div className={styles.page}>
            <h2>Redes</h2>
            <p onClick={handleInsta}>Instagram</p>
            <p onClick={handleSpotify}>Spotify</p>
            <p onClick={handleSoundcloud}>SoundCloud</p>{' '}
            {/* Corrigido de "SoundClound" para "SoundCloud" */}
          </div>
          <div className={styles.page}>
            <div className={styles.digital}>
              <div className={styles.text}>
                <p>Esse Web Site Foi Desenvolvido Por:</p>
                <p>
                  A Digital Organism é uma empresa de tecnologia focada em promover o
                  reconhecimento de marcas e artistas por meio de soluções digitais
                  inovadoras.
                </p>
                <p>
                  © Copyright 2024, All Rights Reserved for{' '}
                  <a href="https://www.instagram.com/dgorganism/">Digital Organism</a>
                </p>
              </div>
              <img
                src="https://res.cloudinary.com/dio2dnpmn/image/upload/v1725783236/Digital%20Organism/sr6kxrvkihjmo6vhhnrb.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
