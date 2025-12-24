const Header = () => {

    return (
        <>
            <div className="sticky top-0 w-full mb-25 text-3xl p-5 text-white align-center flex ml-25 justify-between z-50 bg-transparent"><span className="font-bold bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(56,189,248,0.6)]">
  SD
</span>
                <div className="flex gap-8 mr-25 text-sm text-gray-500">
                    <button
                      onClick={() =>
                        document.getElementById("about")?.scrollIntoView({
                          behavior: "smooth",
                        })
                      }
                    >
                      About
                    </button>
                    <button>Skills</button>
                    <button>Projects</button>
                    <button>Experience</button>
                    <button>Contact</button>
                    <button className="border py-2 px-3 rounded font-bold bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 text-black drop-shadow-[0_0_12px_rgba(56,189,248,0.6)]">Let's Talk</button>
                </div>
            </div>
        </>
    )
};

export default Header;
