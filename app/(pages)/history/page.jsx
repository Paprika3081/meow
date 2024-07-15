import { HistoryText } from "./_components/ui/history-text";
import { HistoryTitle } from "./_components/ui/history-title";
import CustomHead from "@/app/_components/head_head/ui/CustomHead";

const HistoryPage = () => {
  return (
    <>
      <CustomHead title="АО Совхоз Южно-Сахалинский" showMenu={false} />
      <div
        className="flex flex-col items-center justify-center"
        style={{
          backgroundImage: 'url("/bg-vegetables111.png")',
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
