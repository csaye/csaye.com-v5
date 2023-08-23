import {
  ArrowDownward,
  Email,
  GitHub,
  LinkedIn,
  Twitter,
} from '@mui/icons-material'
import { RefObject, useEffect, useState } from 'react'
import styles from '../styles/components/Intro.module.scss'
import Background from './Background'

type Props = {
  projectsScroll: () => void
  heightRef: RefObject<HTMLDivElement>
}

export default function Intro(props: Props) {
  const { projectsScroll, heightRef } = props

  const [height, setHeight] = useState(0)

  // listen for height update
  useEffect(() => {
    function updateHeight() {
      if (!heightRef.current) return
      setHeight(heightRef.current.getBoundingClientRect().height)
    }
    updateHeight()
    window.addEventListener('resize', updateHeight)
    return () => window.removeEventListener('resize', updateHeight)
  }, [heightRef])

  return (
    <div
      className={styles.container}
      style={
        height ? { height: `calc(${height}px - var(--header))` } : undefined
      }
    >
      <Background />
      <div className={styles.hello}>
        <h1>
          <b>Hey there!</b>
          <br />
          I’m Cooper Saye.
        </h1>
        <hr />
        <p className={styles.bio}>
          I’m a passionate software engineer currently working at <u>Ramp</u>{' '}
          and studying computer science at the <u>University of Michigan</u>.
          <br />
          Check out some of my work below!
        </p>
        <hr />
        <div className={styles.links}>
          <a
            href='https://github.com/csaye'
            target='_blank'
            rel='noopener noreferrer'
          >
            <GitHub />
          </a>
          <a
            href='https://linkedin.com/in/coopersaye'
            target='_blank'
            rel='noopener noreferrer'
          >
            <LinkedIn />
          </a>
          <a
            href='https://twitter.com/CooperComputer'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Twitter />
          </a>
          <a href='mailto:cooper@saye.co'>
            <Email />
          </a>
        </div>
      </div>
      <button className={styles.scrollButton} onClick={projectsScroll}>
        <ArrowDownward />
      </button>
    </div>
  )
}
