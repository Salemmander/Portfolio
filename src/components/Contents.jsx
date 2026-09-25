import { useEffect, useRef, useState, useSyncExternalStore } from 'react'
import { Link } from 'react-router-dom'

const NUMERALS = ['i', 'ii', 'iii', 'iv', 'v', 'vi']

function useMediaQuery(query) {
  return useSyncExternalStore(
    (onChange) => {
      const mql = window.matchMedia(query)
      mql.addEventListener('change', onChange)
      return () => mql.removeEventListener('change', onChange)
    },
    () => window.matchMedia(query).matches,
    () => false,
  )
}

// A video that only plays while `playing` is true, and never under reduced motion.
function Clip({ media, playing, className }) {
  const ref = useRef(null)
  const reduceMotion = useMediaQuery('(prefers-reduced-motion: reduce)')

  useEffect(() => {
    const video = ref.current
    if (!video) return
    if (playing && !reduceMotion) {
      video.play().catch(() => {})
    } else {
      video.pause()
    }
  }, [playing, reduceMotion])

  const classes = [className, media.pixelated && 'pixelated'].filter(Boolean).join(' ')

  if (media.type === 'image') {
    return <img src={media.src} alt="" className={classes} loading="lazy" />
  }
  return <video ref={ref} src={media.src} className={classes} loop muted playsInline preload="auto" aria-hidden="true" />
}

function Plate({ projects, active }) {
  const project = projects[active]
  return (
    <figure className="plate" aria-hidden="true">
      <div className="plate-frame">
        {projects.map((p, i) => p.media && (
          <Clip key={p.slug} media={p.media} playing={i === active} className={i === active ? 'is-active' : undefined} />
        ))}
      </div>
      <figcaption>
        <span className="label">Fig. {NUMERALS[active]}</span>
        {project.media?.caption ?? project.title}
      </figcaption>
    </figure>
  )
}

function Contents({ projects }) {
  const canHover = useMediaQuery('(hover: hover) and (pointer: fine)')
  const [active, setActive] = useState(0)

  return (
    <div className={`contents${canHover ? ' can-hover' : ''}`}>
      {canHover && <Plate projects={projects} active={active} />}

      <ol className="toc">
        {projects.map((project, i) => (
          <li key={project.slug}>
            <Link
              to={`/projects/${project.slug}`}
              className={`toc-row${canHover && i === active ? ' is-active' : ''}`}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
            >
              <span className="toc-numeral label">{NUMERALS[i]}.</span>
              {!canHover && project.media && (
                <span className="toc-thumb">
                  <Clip media={project.media} playing />
                </span>
              )}
              <span className="toc-text">
                <span className="toc-title">{project.title}</span>
                <span className="toc-summary">{project.summary}</span>
              </span>
              <span className="toc-leader" aria-hidden="true" />
              <span className="toc-stat">
                <span className="toc-stat-value">{project.stat.value}</span>
                <span className="toc-stat-label label">{project.stat.label}</span>
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default Contents
