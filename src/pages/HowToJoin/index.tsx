import CommenceMark from "@/componenet/Common/CommonMark";
import ApplyButton from "@/componenet/HowToJoin/ApplyButton";
import AuditionProcedure from "@/componenet/HowToJoin/AuditionProcedure";
import AuditionTip from "@/componenet/HowToJoin/AuditionTip";
import Comment from "@/componenet/HowToJoin/Comment";
import CommonExplainations from "@/componenet/HowToJoin/CommonExplainations";
import FirstAuditionExplaination from "@/componenet/HowToJoin/FirstAuditionExplaination";
import PositionExplainations from "@/componenet/HowToJoin/PositionExplainations";
import SecondAuditionExplaination from "@/componenet/HowToJoin/SecondAuditionExplaination";
import Title from "@/componenet/HowToJoin/Title";

function HowToJoin() {
  return (
    <div className="pt-[3.333rem] mb-[7.1rem] flex flex-col justify-center items-center mx-[2.595rem] relative">
      <div className="fixed top-1/2 -translate-y-1/2">
        <CommenceMark />
      </div>
      <Title />
      <div className="mt-[4.933rem]">
        <CommonExplainations />
        <div className="mt-[4.225rem]" />
        <PositionExplainations />
      </div>
      <div className="mt-[4.867rem]" />
      <AuditionProcedure />
      <div className="mt-[4.983rem]" />
      <FirstAuditionExplaination />
      <div className="mt-[3.598rem]" />
      <SecondAuditionExplaination />
      <div className="mt-[3.467rem]" />
      <AuditionTip />
      <div className="mt-[3.209rem]" />
      <Comment />
      <div className="mt-[1.7rem]" />
      <ApplyButton />
    </div>
  );
}

export default HowToJoin;
