import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__logo">YS<span>.</span></span>
        <p className="footer__copy">
          &copy; {new Date().getFullYear()} Yury Shirokov. Built with React &amp; Vite.
        </p>
      </div>
    </footer>
  )
}
