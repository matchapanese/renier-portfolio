export default function Navbar() {
  return (
    <>
      <header className="sticky top-0 z-50 bg-primary/75 backdrop-blur-sm">
        <div className="max-w-2xl mx-auto px-8 py-6">
          <nav className="flex items-center justify-between">
            <a href="">
              <span className="font-heading text-secondary text-2xl uppercase">
                Ren
              </span>
            </a>

            <div className="text-accent">
              <ul className="flex items-center gap-5">
                <a href="">
                  <li>
                    Experience
                  </li>
                </a>

                <a href="">
                  <li>
                    Projects
                  </li>
                </a>

                <a href="">
                  <li>
                    Skills
                  </li>
                </a>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}