// "use client"
import { Receipt, Wrench } from "lucide-react";
import InfoBox from "@/components/pagecomponent/back/dashboard/InfoBox";
import {
  calculateClientRecipts,
  calculateClientSums,
  SumsOfFixingCard,
  recietVoucher,
  mangmentExpenses,
  fixingExpenses,
  mangmentExpensesDetails,
  getRecordCounts,
  generalInfo,
} from "@/db/dashboard";
import FixingInfo from "@/components/pagecomponent/back/dashboard/FixingInfo";
import ClientTransaction from "@/components/pagecomponent/back/dashboard/ClientTransaction";
import MangmentExpense from "@/components/pagecomponent/back/dashboard/MangmentExpense";
import FininceInfo from "@/components/pagecomponent/back/dashboard/FininceInfo";
import FixingExpenses from "@/components/pagecomponent/back/dashboard/FixingExpenses";
import GeneralInfo from "@/components/pagecomponent/back/dashboard/GeneralInfo";
import ClientActionInfo from "@/components/pagecomponent/back/dashboard/ClientActionInfo";

export default async function Home() {
  const MaintenanceExpensesArraydb = calculateClientSums();
  const MangmenteExpensesArraydb = mangmentExpensesDetails();
  const ReceptArraydb = calculateClientRecipts();
  const sumOf_OPEN_FixingCarddb = SumsOfFixingCard(false);
  const sumOf_CLOSED_FixingCarddb = SumsOfFixingCard(true);
  const reciptSumdb = recietVoucher();
  const mangmentExpdb = mangmentExpenses();
  const fixingExpdb = fixingExpenses();
  const ClientActionsdb = getRecordCounts();
  const generalInfoDatadb = generalInfo();

  const [
    MaintenanceExpensesArray,
    MangmenteExpensesArray,
    ReceptArray,
    sumOf_OPEN_FixingCard,
    sumOf_CLOSED_FixingCard,
    reciptSum,
    mangmentExp,
    fixingExp,
    ClientActions,
    generalInfoData,
  ] = await Promise.all([
    MaintenanceExpensesArraydb,
    MangmenteExpensesArraydb,
    ReceptArraydb,
    sumOf_OPEN_FixingCarddb,
    sumOf_CLOSED_FixingCarddb,
    reciptSumdb,
    mangmentExpdb,
    fixingExpdb,
    ClientActionsdb,
    generalInfoDatadb,
  ]);

  const net = reciptSum - (mangmentExp + fixingExp);
  const cardTotal =
    sumOf_OPEN_FixingCard.totalSum + sumOf_CLOSED_FixingCard.totalSum;
  const cardRecived =
    sumOf_OPEN_FixingCard.receiveSum + sumOf_CLOSED_FixingCard.receiveSum;
  const cardNet = cardTotal - cardRecived;

  //  const analytics = useAnalytics();
  return (
    // <main>
    <main className=" flex  flex-wrap   gap-4 items-center justify-center p-4   w-full   ">
      <InfoBox title="ملخص النقدية" tileIcon={<Receipt />}>
        <FininceInfo
          totalIncome={cardTotal}
          clientBalance={cardNet}
          reciptSum={reciptSum}
          mangmentExp={mangmentExp}
          fixingExp={fixingExp}
          net={net}
        />
      </InfoBox>

      <InfoBox title="الايرادات" tileIcon={<Receipt />}>
        <ClientTransaction
          // MaintenanceExpensesArray={MaintenanceExpensesArray}
          ReceptArray={ReceptArray}
        />
      </InfoBox>

      <InfoBox title="مصاريف تشغيلية" tileIcon={<Receipt />}>
        <FixingExpenses MaintenanceExpensesArray={MaintenanceExpensesArray} />
      </InfoBox>

      <InfoBox title="مصاريف ادارية" tileIcon={<Receipt />}>
        <MangmentExpense
          MaintenanceExpensesArray={MangmenteExpensesArray}
          ReceptArray={ReceptArray}
        />
      </InfoBox>

      <InfoBox title="كروت الصيانة" tileIcon={<Wrench />}>
        <FixingInfo
          sumOf_OPEN_FixingCard={sumOf_OPEN_FixingCard}
          sumOf_CLOSED_FixingCard={sumOf_CLOSED_FixingCard}
          cardTotal={cardTotal}
          cardRecived={cardRecived}
          cardNet={cardNet}
        />
      </InfoBox>
      <InfoBox title="تفاعل العملاء" tileIcon={<Receipt />}>
        <ClientActionInfo ClientActions={ClientActions} />
      </InfoBox>
      <InfoBox title="معلومات عامة" tileIcon={<Receipt />}>
        <GeneralInfo generalInfoData={generalInfoData} />
      </InfoBox>
    </main>
  );
}
