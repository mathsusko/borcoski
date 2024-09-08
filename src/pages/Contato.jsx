import {
  Envelope,
  WhatsappLogo,
  InstagramLogo,
  SpotifyLogo,
  SoundcloudLogo
} from '@phosphor-icons/react'
import styles from './Contato.module.css'

export default function Contato() {
  return (
    <div className={styles.bg}>
      <div className={styles.content}>
        <div className={styles.colOne}>
          <h2>Olá, Produtores de Eventos e Profissionais da Música!</h2>
          <p>
            Se você está em busca de um DJ que transforma qualquer evento em uma jornada
            psicodélica inesquecível, você veio ao lugar certo. Especializado em
            Progressive Trance ao Techno, minha missão é criar sets hipnóticos e
            energéticos que elevam o público a um estado de êxtase coletivo.
          </p>
        </div>

        <div className={styles.colTwo}>
          <div className={styles.talk}>
            <h2>Vamos Conversar?</h2>
            <p>
              Eleve seu próximo evento a um novo patamar ou se desejar discutir uma
              parceria que vai marcar a cena do Psy Trance, entre em contato comigo! Estou
              ansioso para ouvir suas ideias e colaborar para criar algo realmente
              especial.
            </p>
          </div>

          <div className={styles.contato}>
            <h2>Contatos</h2>

            <div className={styles.row}>
              <div className={styles.info}>
                <div className={styles.title}>
                  <WhatsappLogo size={32} />
                  <h2>WhatsApp</h2>
                </div>
                <p>(41) 99999-9999</p>
              </div>

              <div className={styles.info}>
                <div className={styles.title}>
                  <Envelope size={32} />
                  <h2>E-mail</h2>
                </div>
                <p>email@borcoski.com</p>
              </div>
            </div>

            <div className={styles.rowTwo}>
              <p>Redes sociais/Plataformas musicais</p>
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
    </div>
  )
}
