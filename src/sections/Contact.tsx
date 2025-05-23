import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
export const ContactSection = () => {
  const connectLink = "https://calendly.com/rinkeshmodi001/30min";
  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20 z-50" id="contact">
      <div className="container z-50">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-5 z-100"
            style={{ backgroundImage: `url(${grainImage.src})` }}
          ></div>
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="">
              <h2 className="font-serif text-2xl md:text-3xl">
                Let&apos;s create something amazing together
              </h2>
              <p className="text-sm md:text-base mt-2">
                Ready to bring your next project to life? Let&apos;s connect and
                discuss how I can help you achieve your goals.
              </p>
            </div>
            <div className="z-50">
              <a href={connectLink} target="_blank" rel="noreferrer">
                <button className="text-white bg-gray-900 gap-2 inline-flex items-center px-6 h-12 rounded-xl border border-gray-900">
                  <span className="font-semibold w-max">Contact Me</span>
                  <ArrowUpRightIcon className="size-4" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
