import { useRef } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Intro from '../components/Intro'
import Projects from '../components/Projects'
import Skillset from '../components/Skillset'
import styles from '../styles/pages/Index.module.scss'

export default function Index() {
  const projectsScrollRef = useRef<HTMLSpanElement>(null)
  const skillsetScrollRef = useRef<HTMLSpanElement>(null)
  const heightRef = useRef<HTMLDivElement>(null)

  // section scroll functions
  const introScroll = () => window.scrollTo(0, 0)
  const projectsScroll = () => projectsScrollRef.current?.scrollIntoView()
  const skillsetScroll = () => skillsetScrollRef.current?.scrollIntoView()

  return (
    <div className={styles.container}>
      <div className={styles.heightRef} ref={heightRef} />
      <Header
        introScroll={introScroll}
        projectsScroll={projectsScroll}
        skillsetScroll={skillsetScroll}
      />
      <Intro projectsScroll={projectsScroll} heightRef={heightRef} />
      <span
        className={styles.scrollRef}
        ref={skillsetScrollRef}
        style={{
          position: 'relative',
          display: 'block',
          bottom: '80px',
          left: '50%',
        }}
      />
      <Skillset />
      <span
        className={styles.scrollRef}
        ref={projectsScrollRef}
        style={{
          position: 'relative',
          display: 'block',
          bottom: '80px',
          left: '50%',
        }}
      />
      <Projects />
      <Footer />
    </div>
  )
}
