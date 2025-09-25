import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

import { experiences, certificates } from "../data/mockData";
import { Calendar, Award, Eye, Shield, X, GraduationCap } from "lucide-react";

function Education() {
  const educationExperiences = experiences.filter(
    (exp) => exp.type === "education"
  );
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const CertificateViewer = ({ certificate, onClose }) => {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-8 rounded-lg border-2 border-green-200 dark:border-green-700">
          <div className="relative">
            <div className="text-center mb-6 relative z-10">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Sertifika
              </h3>
              <div className="w-24 h-1 rounded bg-gradient-to-r from-green-500 to-teal-500 mx-auto"></div>
            </div>
            <div className="text-center space-y-4 relative z-10">
              <div className="text-lg text-gray-700 dark:text-gray-300">
                Bu sertifika, <strong>Umut Diyar Balcı</strong>'nın
              </div>

              <div className="text-lg text-gray-700 dark:text-gray-300">
                <strong>{certificate.issuer}</strong> tarafından verilen
              </div>

              <div className="text-lg text-gray-700 dark:text-gray-300">
                <strong>{certificate.name}</strong> eğitimini başarıyla
                tamamladığını gösterir.
              </div>

              <div className="mt-8 pt-6 border-t border-green-200 dark:border-green-700">
                <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400">
                  <div>
                    <strong>Tarih:</strong> {certificate.date}
                  </div>
                  <div>
                    <strong>Sertifika ID:</strong> {certificate.credentialId}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-green-200 dark:border-green-700 flex items-center justify-center text-xs text-gray-500 dark:text-gray-400">
            <Shield size={14} className="mr-1" />
            Bu sertifika dijital güvenlik önlemleri ile korunmaktadır
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Eğitim Geçmişim
          </h2>
          <div className="w-48 h-1 bg-gradient-to-r from-green-600 to-teal-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Edindiğim eğitim ve sertifikalardan kısa kesitler
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                <GraduationCap className="mr-3 text-green-600" size={28} />
                Akademik Eğitim
              </h3>

              <div className="relative">
                <div className="absolute left-8 w-0.5 h-full bg-gradient-to-b from-green-600 to-teal-600"></div>

                {educationExperiences.map((edu, index) => (
                  <div key={edu.id} className="flex items-start mb-8">
                    <div className="absolute left-8 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-r from-green-600 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
                      <GraduationCap className="text-white" size={24} />
                    </div>

                    <Card className="ml-20 hover:shadow-xl transition-all duration-300 hover:scale-105 flex-1  bg-gradient-to-br dark:from-gray-800 dark:to-gray-700">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-3">
                          <Calendar className="text-green-600 mr-2" size={16} />
                          <span className="text-sm font-medium text-green-600">
                            {edu.period}
                          </span>
                        </div>

                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {edu.title}
                        </h4>

                        <h5 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">
                          {edu.company}
                        </h5>

                        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                          {edu.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {edu.technologies.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="secondary"
                              className="bg-green-100 cursor-pointer text-green-800 dark:bg-green-900/50 dark:text-green-200"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                <Award className="mr-3 text-teal-600" size={28} />
                Sertifikalar
              </h3>

              <div className="space-y-6">
                {certificates.map((cert, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-teal-50 to-green-50 dark:from-teal-900/20 dark:to-green-900/20 border border-teal-200 dark:border-teal-700"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4 flex-1">
                          <div className="p-3 bg-teal-100 dark:bg-teal-900/50 rounded-full">
                            <Award className="text-teal-600" size={24} />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                              {cert.name}
                            </h4>
                            <p className="text-gray-700 dark:text-gray-300 font-medium mb-1">
                              {cert.issuer}
                            </p>
                            <div className="flex items-center justify-between mb-3">
                              <span className="text-sm text-gray-600 dark:text-gray-400">
                                {cert.date}
                              </span>
                              <Badge variant="outline" className="text-xs">
                                {cert.credentialId}
                              </Badge>
                            </div>
                          </div>
                        </div>

                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="outline"
                              size="sm"
                              className="ml-4 hover:bg-teal-50 dark:hover:bg-teal-900/30 border-teal-300 dark:border-teal-600"
                            >
                              <Eye size={16} className="mr-1" />
                              Görüntüle
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl">
                            <DialogHeader>
                              <DialogTitle className="flex items-center space-x-2">
                                <Award className="text-teal-600" size={20} />
                                <span>Sertifika Görüntüleyici</span>
                              </DialogTitle>
                            </DialogHeader>
                            <CertificateViewer
                              certificate={cert}
                              onClose={() => setSelectedCertificate(null)}
                            />
                          </DialogContent>
                        </Dialog>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {/* Add more certificates placeholder */}
                <Card className="border-2 border-dashed border-teal-300 dark:border-teal-600 hover:border-teal-400 dark:hover:border-teal-400 transition-colors duration-300 bg-white dark:bg-gray-800">
                  <CardContent className="p-6 text-center">
                    <Award className="mx-auto text-teal-400 mb-3" size={32} />
                    <p className="text-gray-600 dark:text-gray-300 font-medium">
                      Yeni sertifikalar yakında...
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      Sürekli öğrenmeye devam ediyorum
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
