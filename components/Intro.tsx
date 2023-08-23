import {
  ArrowDownward,
  Email,
  GitHub,
  LinkedIn,
  Twitter,
} from '@mui/icons-material'
import { type ReactNode, type RefObject, useEffect, useState } from 'react'
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
          I’m a passionate software engineer currently working at{' '}
          <OutLink href='https://ramp.com/'>Ramp</OutLink> and studying computer
          science at the{' '}
          <OutLink href='https://umich.edu/'>University of Michigan</OutLink>.
          <br />
          Check out some of my work below!
        </p>
        <hr />
        <div className={styles.links}>
          <OutLink href='https://github.com/csaye'>
            <GitHub />
          </OutLink>
          <OutLink href='https://linkedin.com/in/coopersaye'>
            <LinkedIn />
          </OutLink>
          <OutLink href='https://twitter.com/CooperComputer'>
            <Twitter />
          </OutLink>
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

function OutLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target='_blank' rel='noopener noreferrer'>
      {children}
    </a>
  )
}
