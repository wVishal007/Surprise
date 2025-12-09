import { Link } from "react-router-dom";
import { useState } from "react";
import { useConfig } from "@/hooks/useConfig";
import { Heart, Menu, X } from "lucide-react";

export const Navigation = () => {
  const { config } = useConfig();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="sticky top-0 z-40 backdrop-blur-xl bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* LEFT SIDE LOGO */}
          <Link to="/" className="flex items-center gap-2 group" aria-label="Home">
            <Heart className="w-6 h-6 text-rose fill-rose group-hover:scale-110 transition-transform" />
            <span className="text-xl font-serif font-bold text-rose hidden sm:inline">
              For {config.name}
            </span>
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden sm:flex items-center gap-4">
            <NavLinks />
          </div>

          {/* MOBILE HAMBURGER BUTTON */}
          <button
            className="sm:hidden p-2 rounded-md hover:bg-rose/10"
            onClick={() => setOpen(true)}
            aria-label="Open Menu"
          >
            <Menu className="w-6 h-6 text-rose" />
          </button>
        </div>
      </nav>

      {/* MOBILE SIDEBAR OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-50 sm:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* MOBILE SIDEBAR */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-background shadow-xl z-50 transform transition-transform duration-300 sm:hidden
          ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-border">
          <div className="flex items-center gap-2">
            <Heart className="w-6 h-6 text-rose fill-rose" />
            <span className="text-lg font-serif font-bold text-rose">
              For {config.name}
            </span>
          </div>

          <button
            className="p-2 rounded-md hover:bg-rose/10"
            onClick={() => setOpen(false)}
            aria-label="Close Menu"
          >
            <X className="w-6 h-6 text-rose" />
          </button>
        </div>

        {/* MOBILE LINKS */}
        <div className="flex flex-col px-4 py-4 space-y-3">
          <NavLinks onClick={() => setOpen(false)} />
        </div>
      </aside>
    </>
  );
};

/* Reusable Navigation Links */
const NavLinks = ({ onClick }) => (
  <>
    <Link
      to="/"
      onClick={onClick}
      className="px-3 py-2 text-base rounded-lg hover:bg-rose/10 transition-colors text-foreground hover:text-rose"
    >
      Home
    </Link>
    <Link
      to="/cards"
      onClick={onClick}
      className="px-3 py-2 text-base rounded-lg hover:bg-rose/10 transition-colors text-foreground hover:text-rose"
    >
      Cards
    </Link>
    <Link
      to="/poems"
      onClick={onClick}
      className="px-3 py-2 text-base rounded-lg hover:bg-rose/10 transition-colors text-foreground hover:text-rose"
    >
      Poems
    </Link>
    <Link
      to="/memories"
      onClick={onClick}
      className="px-3 py-2 text-base rounded-lg hover:bg-rose/10 transition-colors text-foreground hover:text-rose"
    >
      Memories
    </Link>
    <Link
      to="/letters"
      onClick={onClick}
      className="px-3 py-2 text-base rounded-lg hover:bg-rose/10 transition-colors text-foreground hover:text-rose"
    >
      Letters
    </Link>
    <Link
      to="/settings"
      onClick={onClick}
      className="px-3 py-2 text-base rounded-lg hover:bg-rose/10 transition-colors text-foreground hover:text-rose"
    >
      Settings
    </Link>
  </>
);
