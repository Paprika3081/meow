import Image from "next/image";
import { HistoryText } from "./_components/ui/history-text";
import { HistoryTitle } from "./_components/ui/history-title";
import { HistoryVideo } from "./_components/ui/history-video";
import CustomHead from "@/app/_components/head_head/ui/CustomHead";

const HistoryPage = () => {
  return (
    <>
      <CustomHead title="АО Совхоз Южно-Сахалинский" showMenu={false} />
      <div
        className="flex flex-col items-center justify-center"
        style={{
          backgroundImage: 'url("/background-vegetables123.png")',
          backgroundSize: "auto", // или размер, который вам нужен
          backgroundRepeat: "repeat", // повторение изображения
          minHeight: "100vh",
        }}
      >
        <HistoryTitle />
        <HistoryText />
        {/* <HistoryVideo /> */}
      </div>
    </>
  );
};

export default HistoryPage;
