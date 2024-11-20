const Footer = () => {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto pb-5 py-0 lg:py-14">
        <div className="px-3 md:px-5 lg:px-0 flex flex-col lg:flex-row gap-10 lg:gap-36">

          {/* Logo */}
          <div className="basis-1/2">
            <h1 className="text-[6.5rem] md:text-[12rem] leading-none tracking-tight font-medium">
              refokus.
            </h1>
          </div>

          {/* Links and About Us */}
          <div className="basis-1/2 flex flex-col lg:flex-row gap-10 lg:gap-0">

            {/* Social Links */}
            <div className="basis-1/3">
              <h4 className="text-zinc-500 mb-4 lg:mb-9 text-xl lg:text-base">Socials</h4>
              {["Instagram", "Twitter(X?)", "LinkedIn"].map((social, index) => (
                <a
                  className="block mt-1 lg:mt-2 text-white lg:text-zinc-500 text-xl lg:text-base font-light lg:font-normal"
                  key={index}
                  href="#"
                >
                  {social}
                </a>
              ))}
            </div>

            {/* Sitemap Links */}
            <div className="basis-1/3">
              <h4 className="text-zinc-500 mb-4 lg:mb-9 text-xl lg:text-base">Sitemap</h4>
              {["Home", "Work", "Carrers", "Contact"].map((link, index) => (
                <a
                  className="block mt-1 lg:mt-2 text-white text-xl lg:text-base font-light"
                  key={index}
                  href="#"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* About Us */}
            <div className="basis-1/2 flex flex-col lg:items-end justify-end">
              <p className="w-[80%] md:w-[55%] lg:w-auto text-left lg:text-right font-medium text-xl lg:text-base">
                Refokus is pioneering digital agency driven by design and
                empowered by technology.
              </p>
              <img
                className="mt-4 lg:mt-6 w-40"
                src="assets/images/webflow-badge.svg"
                alt="Webflow Badge"
              />
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="mt-10 lg:mt-16 px-3 flex gap-6 md:gap-10">
          {["Privacy Policy", "Cookie Policy", "Impressum", "Terms"].map(
            (link, index) => (
              <a className="text-sm text-zinc-500" key={index} href="#">
                {link}
              </a>
            )
          )}
        </div>

      </div>
    </div>
  );
};

export default Footer;
