export default function Footer() {
  return (
    <footer className="text-center py-8 px-6 border-t border-border text-xs text-muted">
      built by <span className="text-orange">Fuzail</span> · MERN stack developer · Swabi, Pakistan ·{' '}
      {new Date().getFullYear()}
    </footer>
  )
}
