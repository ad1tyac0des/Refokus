const Footer = () => {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto py-14">

        <div className="flex gap-36">
          <div className="basis-1/2">
            <h1 className="text-[12rem] leading-none tracking-tight font-medium">refokus.</h1>
          </div>

          <div className="basis-1/2 flex">

            <div className="basis-1/3">
              <h4 className="text-zinc-500 mb-9 text-base">Socials</h4>
              {
                ["Instagram", "Twitter(X?)", "LinkedIn"].map((social, index) => <a className="block mt-2 text-zinc-500 text-base" key={index} href="#">{social}</a>)
              }
            </div>

            <div className="basis-1/3">
              <h4 className="text-zinc-500 mb-9 text-base">Sitemap</h4>
              {
                ["Home", "Work", "Carrers", "Contact"].map((social, index) => <a className="block mt-2 text-white text-base font-light" key={index} href="#">{social}</a>)
              }
            </div>

            <div className="basis-1/2 flex flex-col items-end justify-end">
              <p className="text-right font-medium">Refokus is pioneering digital agency driven by design and empowered by technology.</p>
              <img className="mt-6 w-40" src="assets/images/webflow-badge.svg" alt="Webflow Badge" />
            </div>

          </div>

        </div>

        <div className="mt-16 px-4 flex gap-10">
          {["Privacy Policy", "Cookie Policy", "Impressum", "Terms"].map((link, index) => <a className="text-sm text-zinc-500" key={index} href="#">{link}</a>)}
        </div>
      </div>
    </div>
  )
}

export default Footer
