const getYear = () => new Date().getFullYear();

function Footer() {
  return (
    <footer id="footer" className="border-t border-gray-200 dark:border-gray-700">
      <div className="max-width-container">
        <p className="text-center text-sm text-gray-500 dark:text-gray-400">© {getYear()} - PHANG Willy - Tous droits réservés.</p>
      </div>
    </footer>
  )
}

export default Footer;