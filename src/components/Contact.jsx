import React, { useState, useRef } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

import { personalInfo } from "../data/mockData";

import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  Clock,
  Coffee,
} from "lucide-react";

import { sendEmail } from "../stores/emailServices";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      toast.error("Lütfen tüm alanları doldurun!");
      return;
    }
    setIsSubmitting(true);
    try {
      await sendEmail(formRef);
      toast.success("Mesajınız başarıyla gönderildi!");

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Email gönderilemedi:", error);
      toast.error("Mesaj gönderilemedi. Lütfen tekrar deneyin.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: Phone,
      label: "Telefon",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: MapPin,
      label: "Konum",
      value: personalInfo.location,
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: personalInfo.github,
      color: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: personalInfo.linkedin,
      color: "hover:text-blue-600",
    },
    {
      icon: Mail,
      href: `mailto:${personalInfo.email}`,
      label: "Email",
      color: "hover:text-red-500",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            İletişim
          </h2>
          <div className="w-24 h-1 rounded bg-gradient-to-r from-teal-600 to-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Projeleriniz veya iş birliği fırsatları için bana ulaşın!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            {/* İletişim Bilgileri */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                İletişim Bilgileri
              </h3>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br dark:from-gray-900 dark:to-gray-800"
                  >
                    <CardContent className="p-4">
                      <a
                        href={info.href}
                        className="flex items-center space-x-4 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                      >
                        <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                          <info.icon
                            className="text-blue-600 dark:text-blue-400 dark:group-hover:text-blue-100 transition-colors duration-200"
                            size={24}
                          />
                        </div>
                        <div>
                          <div className="font-medium">{info.label}</div>
                          <div className="text-sm opacity-75">{info.value}</div>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sosyal Medya */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Benimle Bağlantı Kurun
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-200 hover:scale-110`}
                    aria-label={social.label}
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </div>

            {/* Müsaitlik Durumu */}
            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-800">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Müsaitlik Durumu
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                    <Clock size={16} className="text-green-600" />
                    <span className="text-sm">
                      <strong>Aktif:</strong> Yeni projelere açık
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                    <Coffee size={16} className="text-green-600" />
                    <span className="text-sm">
                      <strong>Yanıt süresi:</strong> 24 saat içinde
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                  Web geliştirme projeleri, modern front-end uygulamaları veya
                  ölçeklenebilir web servisleri olsun, yeni fırsat ve
                  işbirliklerine her zaman açığım. Fikirlerinizi hayata
                  geçirmek, kullanıcı deneyimini güçlendirmek ve teknik çözümler
                  üretmek için birlikte neler yapabileceğimizi konuşmak üzere
                  bana ulaşabilirsiniz.{" "}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Form */}
          {/* Form Kartı */}
          <Card className="shadow-xl bg-gradient-to-br dark:from-gray-900 dark:to-gray-800">
            <CardContent className="px-8 py-16 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Mesaj Gönder
              </h3>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-6 max-w-lg mx-auto w-full"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Ad Soyad *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Adınız ve soyadınız"
                      className="w-full h-12 dark:bg-transparent rounded-lg"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="email@example.com"
                      className="w-full h-12 dark:bg-transparent rounded-lg"
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Konu *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Mesajınızın konusu"
                    className="w-full h-12 dark:bg-transparent rounded-lg"
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Mesaj *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Mesajınızı buraya yazın..."
                    className="w-full min-h-[150px] dark:bg-transparent rounded-lg resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white py-3 font-medium transition-all duration-200 hover:scale-105"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                      Gönderiliyor...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2" size={16} />
                      Mesaj Gönder
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
