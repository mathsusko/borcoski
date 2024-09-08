import { useNavigate, useLocation } from 'react-router-dom'
import { useState, useEffect, useCallback } from 'react'
import { motion, useAnimation } from 'framer-motion'
import styles from './Header.module.css'
import { List, X } from '@phosphor-icons/react'

export default function Header() {
  const navigate = useNavigate()
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const controls = useAnimation()

  const handleHome = () => navigate('/')
  const handleGigs = () => navigate('/gigs')
  const handleDiscografia = () => navigate('/discografia')
  const handleContato = () => navigate('/contato')
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  // Function to trigger animation
  const animateHeader = useCallback(() => {
    controls
      .start({
        opacity: 0,
        y: -50,
        transition: { duration: 0.5 }
      })
      .then(() => {
        controls.start({
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 }
        })
      })
  }, [controls])

  useEffect(() => {
    // Trigger header animation when the location changes
    animateHeader()
  }, [location, animateHeader])

  useEffect(() => {
    setIsMenuOpen(false) // Close the menu on route change
  }, [location])

  return (
    <header>
      <motion.div
        className={styles.header}
        animate={controls}
      >
        <img
          src="https://res.cloudinary.com/dio2dnpmn/image/upload/v1725782021/borcoski/coverMusic/fmryiwj96iwhv62kbg7y.png"
          alt="Logo"
        />
        <div className={styles.nav}>
          <button onClick={handleHome}>Início</button>
          <button onClick={handleGigs}>Gigs</button>
          <button onClick={handleDiscografia}>Discografia</button>
          <button onClick={handleContato}>Contato</button>
          <div
            className={styles.list}
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={32} /> : <List size={32} />}
          </div>
        </div>
      </motion.div>
      <motion.div
        className={`${styles.lista} ${isMenuOpen ? styles.open : ''}`}
        initial={{ opacity: 0, x: 300 }}
        animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : 300 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.navMobile}>
          <button onClick={handleHome}>Início</button>
          <button onClick={handleGigs}>Gigs</button>
          <button onClick={handleDiscografia}>Discografia</button>
          <button onClick={handleContato}>Contato</button>
        </div>
      </motion.div>
    </header>
  )
}
