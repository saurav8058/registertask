import Link from "next/link";

const NavTop = () => (
  <div className="bg-[#1C4670] text-white flex justify-end items-center px-6 py-2 text-sm w-full max-w-[1440px] h-[44px] opacity-100 gap-4">
   
    <div className="flex gap-2">
      <div className="flex items-center space-x-2">
        <span className="text-white">
          <i className="fa fa-envelope"></i>
        </span>
        <a href="mailto:sauravgaur9462@gmail.com" className="hover:underline">
  sauravgaur9462@gmail.com
</a>

      </div>

      {/* Separator */}
      <div
        style={{
          width: "1px",
          height: "28px",
          background:
            "linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, #D0D0D0 50%, rgba(0, 0, 0, 0) 100%)",
        }}
      ></div>

      <div className="flex items-center space-x-2">
        <span className="text-white">
          <i className="fa fa-phone"></i>
        </span>
        <a href="tel:+917240341075" className="hover:underline">
          +917240341075
        </a>
      </div>
    </div>

    {/* Separator */}
    <div
      style={{
        width: "1px",
        height: "28px",
        background:
          "linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, #D0D0D0 50%, rgba(0, 0, 0, 0) 100%)",
      }}
    ></div>

    {/* Social Icons */}
    <div className="flex space-x-4">
      <a href="https://www.instagram.com/saurav_.gaur/" className="hover:text-gray-300">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="" className="hover:text-gray-300">
        <i className="fab fa-facebook"></i>
      </a>
      <a href="#" className="hover:text-gray-300">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="#" className="hover:text-gray-300">
        <i className="fab fa-pinterest"></i>
      </a>
    </div>
  </div>
);

export default NavTop;
