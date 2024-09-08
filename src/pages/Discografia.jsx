import { motion } from 'framer-motion'
import styles from './Discografia.module.css'

// Define o conteúdo das músicas com URL de áudio
const musicData = [
  {
    title: 'Dezko - Ascend',
    production: 'Dollmaker Bootleg',
    imageUrl:
      'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png',
    spotifyUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1725781979/borcoski/coverMusic/bs3paaelw3j6eqp5vb9c.png',
    soundcloudUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1725781980/borcoski/coverMusic/rpsckm4bmei6nvdidcb4.png',
    audioUrl:
      'https://res.cloudinary.com/dio2dnpmn/video/upload/v1725782718/borcoski/sounds/nbguxy4vhis8b9gleiyj.mp3',
    spotify: '#',
    sound: 'https://soundcloud.com/borcoskimusic/tracks'
  }

  // Adicione mais músicas conforme necessário
]

export default function Discografia() {
  // Define a animação para os cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className={styles.content}>
      <div className={styles.hero}>
        <div className={styles.discografia}>
          <div className={styles.spotify}>
            <h2>DISCOGRAFIA</h2>

            <div className={styles.cards}>
              {musicData.map((music, index) => (
                <motion.div
                  key={index}
                  className={styles.card}
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                  transition={{ duration: 0.5, delay: index * 0.3 }} // Define o atraso entre os cards
                >
                  <div
                    className={styles.fotoMusic}
                    style={{ backgroundImage: `url(${music.imageUrl})` }}
                  ></div>

                  <div className={styles.descMusic}>
                    <h2>{music.title}</h2>
                    <p>{music.production}</p>
                  </div>

                  <audio controls>
                    <source
                      src={music.audioUrl}
                      type="audio/mp3"
                    />
                  </audio>

                  <div className={styles.cta}>
                    <a href={music.spotify}>
                      <img
                        src={music.spotifyUrl}
                        alt="Spotify"
                      />
                    </a>
                    <a href={music.sound}>
                      <img
                        src={music.soundcloudUrl}
                        alt="SoundCloud"
                      />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
