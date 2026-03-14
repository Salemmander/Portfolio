import './Nav.css'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
]

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-links">
        {links.map(({ label, href }) => (
          <a key={href} href={href}>{label}</a>
        ))}
      </div>
    </nav>
  )
}

export default Nav
