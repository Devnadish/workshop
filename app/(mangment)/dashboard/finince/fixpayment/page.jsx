import PageTitle from "@/components/shared/PageTitle";
import { getOpenCards, savePaymentVoucher, updateClientPaymetBalance } from "@/db/payment";

import { CircleDollarSign, Wrench } from "lucide-react";

import OpenFixingCard from "@/components/pagecomponent/back/payment/OpenFixingCard";
import SaveVoucher from "@/components/pagecomponent/back/payment/SaveVoucher";
// import ShowCardInfo from "@/components/pagecomponent/back/payment/ShowCardInfo";

const FixPaymentVoucher = async () => {
  const openCardsData = await getOpenCards();


  return (
    <div className="max-w-screen-md mx-auto flex flex-col gap-4">
      <PageTitle title="سند صرف تشغيلي" icon={<Wrench />} />

      <SaveVoucher data={openCardsData} />
    </div>
  );
};

export default FixPaymentVoucher;
