function Media({ media, alt }) {
  const className = media.pixelated ? 'pixelated' : undefined

  return (
    <figure className="figure">
      <div className="figure-frame">
        {media.type === 'image'
          ? <img src={media.src} alt={alt} className={className} />
          : <video src={media.src} className={className} autoPlay loop muted playsInline aria-label={alt} />
        }
      </div>
      {media.caption && <figcaption>{media.caption}</figcaption>}
    </figure>
  )
}

export default Media
