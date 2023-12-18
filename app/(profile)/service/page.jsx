import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// function ServicePage() {
//   return <div className="text-white">ServicePage</div>;
// }

export function ServicePage() {
  return (
    <div className=" flex items-center justify-center mt-3 gap-4 w-full p-4 ">
      <Tabs defaultValue="mk" className="w-full flex items-center flex-col ">
        <TabsList className="gap-4 flex flex-row bg-red-500 h-full py-2 px-2 text-white w-full ">
          <TabsTrigger value="general">عام</TabsTrigger>
          <TabsTrigger value="ac">تكييف</TabsTrigger>
          <TabsTrigger value="elc">كهرباء</TabsTrigger>
          <TabsTrigger value="mk">ميكانيكا</TabsTrigger>
        </TabsList>

        <TabsContent value="mk" className="overflow-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-center text-xl bg-gray-300 rounded-md py-1">
                قسم الميكانيكا
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1 overflow-auto max-h-[50vh]">
                <MkDiv />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="elc">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-center text-xl bg-gray-300 rounded-md py-1">
                قسم الكهرباء
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1 overflow-auto max-h-[50vh]">
                <Elc />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="ac">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-center text-xl bg-gray-300 rounded-md py-1">
                قسم التكييف
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1 overflow-auto max-h-[50vh]">
                <Ac />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-center text-xl bg-gray-300 rounded-md py-1">
                قسم الصيانة العامة
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1 overflow-auto max-h-[50vh]">
                <GenralService />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
export default ServicePage;

const MkDiv = () => {
  return (
    <>
      <article className="p-2 text-right leading-7">
        مرحبًا بك في ورشتنا المتخصصة في صيانة وإصلاح السيارات! نحن نقدم خدمات
        متميزة لعملائنا للحفاظ على سياراتهم في حالة ممتازة وضمان سلامتها على
        الطرق. في ورشتنا، نضمن لك الحصول على خدمة عالية الجودة وفعالة من قبل
        فريق مؤهل من الميكانيكيين المحترفين. نحن نستخدم أحدث التقنيات والأدوات
        لتشخيص وإصلاح المشاكل الميكانيكية بدقة وفاعلية. تشمل خدماتنا: - صيانة
        وإصلاح المحركات - فحص وإصلاح أنظمة الفرامل - تشخيص وإصلاح نظام التعليق -
        صيانة وإصلاح نظام التكييف والتدفئة - فحص وتغيير زيوت المحرك والفلاتر -
        توفير قطع غيار أصلية عالية الجودة نحن نهتم براحة عملائنا ونسعى جاهدين
        لتقديم خدمة موثوقة وسريعة. كما نوفر أسعارًا تنافسية وعروض خاصة لضمان رضا
        العملاء. سواء كنت بحاجة إلى صيانة دورية أو إصلاح طارئ، يمكنك الاعتماد
        على فريقنا المتفاني للحصول على خدمة استثنائية تلبي احتياجاتك. تفضل
        بزيارة موقعنا الإلكتروني لمزيد من المعلومات وجدولة موعد لزيارة ورشتنا.
        نحن في انتظار خدمتك بكل اهتمام واحترافية! يرجى ملاحظة أن هذه هي مقتطف
        عام، يمكنك تخصيصه وتعديله حسب احتياجات وخدمات ورشتك الخاصة.
      </article>
    </>
  );
};

const Elc = () => {
  return (
    <>
      <article className="p-2 text-right leading-7">
        في ورشتنا المتخصصة، نقدم خدمات شاملة لفحص وإصلاح نظام كهرباء السيارة
        باستخدام أحدث التقنيات والأجهزة الإلكترونية. نحن نفهم أهمية نظام
        الكهرباء في سلامة وأداء السيارة، ولذلك نحرص على توفير خدمة عالية الجودة
        في هذا الجانب. عندما يتعلق الأمر بفحص كهرباء السيارة، نستخدم أجهزة
        الكمبيوتر المتخصصة لتشخيص وتحليل مشاكل النظام الكهربائي. يتيح لنا ذلك
        تحديد أعطال الدوائر الكهربائية، والاستشعار عن أي أعطال في أنظمة مثل نظام
        الإشعال، نظام الوقود، نظام الإضاءة، وأجهزة التحكم الإلكترونية الأخرى.
        باستخدام أجهزة الكمبيوتر المتخصصة، يمكننا قراءة رموز الأخطاء (DTCs)
        المخزنة في وحدات التحكم الإلكترونية بالسيارة، مما يساعدنا على تحديد
        المشكلات بدقة وسرعة. بالإضافة إلى ذلك، يمكننا إجراء اختبارات شاملة
        لأنظمة مثل نظام الشحن، نظام البطارية، وأنظمة الاستشعار الأخرى. فريقنا
        المهرة من الميكانيكيين المدربين جيدًا يستخدم هذه التقنيات لتحديد وإصلاح
        أعطال كهرباء السيارة بشكل فعال وفقًا للمعايير المهنية. نحن نضمن جودة
        الخدمة ورضا العملاء في كل مرة. لا تتردد في زيارتنا لفحص وإصلاح نظام
        كهرباء سيارتك باستخدام تقنيات الكمبيوتر المتخصصة. سنكون سعداء بخدمتك
        وضمان سلامة سيارتك على الطرق.
      </article>
    </>
  );
};

const Ac = () => {
  return (
    <>
      <article className="p-2 text-right leading-7">
        بعتبر نظام التكييف من الأنظمة الهامة في السيارة والذي يساعد على تحسين
        راحة الركاب في السيارة عن طريق تحكم في درجة الحرارة والرطوبة داخل
        المقصورة. يتألف نظام التكييف من عدة أجزاء، بما في ذلك ضاغط الهواء ومبخر
        الهواء ومكثف الهواء وصمام التمدد والمروحة. تحتاج سيارتك إلى صيانة دورية
        لنظام التكييف للحفاظ على أدائه بشكل صحيح. يمكن أن يتسبب عدم الصيانة
        الدورية في تراكم الرواسب والشوائب داخل نظام التكييف، مما يؤدي إلى انسداد
        المواسير والمشعات وتعطل المضخة. يتضمن خدمات صيانة نظام التكييف: فحص
        وتنظيف المرشحات فحص وإصلاح أي تسربات في النظام فحص وتعبئة سوائل التبريد
        فحص وإصلاح المروحة فحص وإصلاح المضخة نحن نقدم خدمات صيانة نظام التكييف
        بجودة عالية وبأسعار تنافسية، لضمان راحتك وراحة ركاب السيارة أثناء
        القيادة. اتصل بنا الآن للحجز!
      </article>
    </>
  );
};
const GenralService = () => {
  return (
    <>
      <article className="p-2 text-right leading-7">
        نضمن لك الحصول على خدمة عالية الجودة وفعالة من قبل فريق مؤهل من
        الميكانيكيين المحترفين. نحن نستخدم أحدث التقنيات والأدوات لتشخيص وإصلاح
        المشاكل الميكانيكية بدقة وفاعلية. تشمل خدمات الصيانة العامة: فحص وتغيير
        زيوت المحرك والفلاتر فحص وإصلاح أنظمة الفرامل فحص وإصلاح نظام التعليق
        فحص وإصلاح نظام العادم فحص وإصلاح نظام الإضاءة فحص وإصلاح نظام الكهرباء
        فحص وإصلاح نظام الوقود نحن نهتم براحة عملائنا ونسعى جاهدين لتقديم خدمة
        ممتازة وإبقاء سيارتك في حالة ممتازة. اتصل بنا اليوم لجدولة موعد صيانة
        عامة لسيارتك!
      </article>
    </>
  );
};
