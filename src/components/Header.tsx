import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center justify-between max-w-[1320px] p-[32px] bg-fa_white rounded-[12px] md:rounded-[24px]">
      <div className="max-md:hidden text-dark font-semibold flex gap-[40px] items-center ">
        <Link to="/">New Drops🔥</Link>
        <Link to="/">Men</Link>
        <Link to="/">Women</Link>
      </div>

      <button className="md:hidden">
        <img src="/bar.png" className="w-7" />
      </button>
      <Link to={"/"}>
        <img src="/Logo.png" />
      </Link>

      <div className="flex items-center gap-[9px] md:gap-[40px]">
        <button className="max-md:hidden">
          <img src="/Search.png" />
        </button>
        <button>
          <img src="/Vector.png" />
        </button>
        <button className="w-[25px] h-[25px] font-semibold bg-yellow rounded-full">
          <span>0</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
