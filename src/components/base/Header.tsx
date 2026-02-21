import { ModeToggle } from '@/components/ui/ModeToggle';

function Header() {
  return (
    <header id="header"className="sticky top-0 left-0 right-0 z-50 border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-black/80 backdrop-blur z-50">
      <div className="max-width-container">
        <div className="flex items-right justify-end">
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}

export default Header;