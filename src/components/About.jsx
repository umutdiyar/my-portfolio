import React from "react";
import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Download } from "lucide-react";

function About() {
  const stats = [
    { label: "Projeler", value: "10+" },
    { label: "Teknolojiler", value: "8+" },
    { label: "Deneyim", value: "2+ Yıl" },
    { label: "Eğitim", value: "Devam Ediyor" },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 dark:text-white">
            Hakkımda
          </h2>
          <div className="w-28 h-1 rounded bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
        </div>

        <div className="grid gap-12 items-center lg:grid-cols-2">
          <div className="space-y-6">
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-gray-700 leading-relaxed dark:text-gray-300">
                Merhaba! Ben Umut Diyar Balcı, yazılım geliştirmeye olan ilgim,
                Tuzla Mesleki ve Teknik Anadolu Lisesi'nde aldığım Yazılım
                Geliştirme eğitimiyle başladı. Şu anda İstanbul Okan
                Üniversitesi Bilgisayar Programcılığı bölümünde eğitimime devam
                ediyor, modern web teknolojileri ve Full Stack Development
                alanında kendimi geliştiriyorum.
              </p>{" "}
              <br />
              <p className="text-gray-700 leading-relaxed dark:text-gray-300">
                React, Next.js, Vue.js, Nuxt.js, TypeScript, C# ve ASP.NET Core
                gibi teknolojilerle kullanıcı odaklı, sürdürülebilir ve
                ölçeklenebilir web uygulamaları geliştirmeye odaklanıyorum.
                Yazılım geliştirme sürecinde yalnızca çalışan bir ürün ortaya
                koymayı değil; temiz kod, sürdürülebilir mimari, performans ve
                kullanıcı deneyimini de ön planda tutuyorum. Beezsoft'ta
                frontend geliştirme, Omreon Bilişim Teknolojileri bünyesinde
                kurumsal BT destek süreçlerinde deneyim kazandım. Şu anda
                Experilabs'te Yazılım Ar-Ge Stajyeri olarak kurumsal yazılım
                ürünlerinin Ar-Ge, test ve geliştirme süreçlerinde yer alıyor;
                API iletişimi, veri yönetimi ve teknik analiz alanlarında
                deneyimimi genişletiyorum. Teknik çalışmalarımın yanında AWS
                Student Builder Group at Istanbul Okan University topluluğunun
                sponsorluk ekibinde aktif rol alarak kurumsal iş birlikleri,
                organizasyon ve ekip çalışması süreçlerine katkı sağlıyorum.
              </p>
              <br />
              <p className="text-gray-700 leading-relaxed dark:text-gray-300">
                Yeni teknolojileri keşfetmeyi, karşılaştığım problemler için
                etkili çözümler üretmeyi ve öğrendiklerimi gerçek projelere
                dönüştürmeyi önemsiyorum. Uzun vadede frontend ve backend
                geliştirme alanlarındaki yetkinliklerimi derinleştirerek uçtan
                uca yazılım çözümleri geliştirmeyi hedefliyorum.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="hover:shadow-lg py-4 hover:scale-105 transition-all duration-300 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700"
              >
                <CardContent className="flex flex-col items-center justify-center text-center h-full p-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="dark:text-gray-400 font-medium text-gray-600">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        {/* <div className="flex justify-center content-center items-center mx-auto my-8">
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-200 hover:scale-105">
            <Download className="mr-2" size={20} />
            CV İndir
          </Button>
        </div> */}
      </div>
    </section>
  );
}

export default About;
