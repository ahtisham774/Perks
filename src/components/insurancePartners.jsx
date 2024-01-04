
import p2 from "../assets/p2.svg"
import p3 from "../assets/p3.svg"
import p4 from "../assets/p4.svg"
import p6 from "../assets/p6.svg"
import am from "../assets/am.png"
import ku from "../assets/ku.png"
import lb from "../assets/lb.png"
import p7 from "../assets/AIG.png"
import z from "../assets/z.png"
import zt from "../assets/zt.png"
const InsurancePartners = () => {
  return (
    <div className="w-full h-full p-8 px-16 bg-white flex flex-col justify-center items-center gap-8">
      <div className="text-black text-xl font-inter font-semibold ">Insurance & Takaful Partners</div>
      <div className="grid grid-cols-3 lg:grid-cols-5 place-content-center items-center gap-4 w-full justify-items-center">
      <div className="bg-cover bg-top bg-no-repeat w-[150px] h-[100px]" style={{backgroundImage:`url('${z}')`}}></div>
        <img className="w-[128px] h-[64px]" src={p2} alt="Partner Logo 2" />
        <img className="w-[64px] h-[64px]" src={p3} alt="Partner Logo 3" />
        <img className="w-[64px] h-[64px]" src={p4} alt="Partner Logo 4" />
        <div className="bg-cover bg-top bg-no-repeat w-[150px] h-[150px]" style={{backgroundImage:`url('${zt}')`}}></div>
        <img className="w-[64px] h-[64px]" src={p6} alt="Partner Logo 6" />
        <img className="w-[190px] h-[70px]" src={p7} alt="Partner Logo 7" />
        <img className="w-[190px] h-[70px]" src={am} alt="Partner Logo 7" />
        <img className="w-[190px] h-[70px]" src={ku} alt="Partner Logo 7" />
        <img className="w-[190px] h-[70px]" src={lb} alt="Partner Logo 7" />
      </div>
    </div>
  );
};

export default InsurancePartners;
