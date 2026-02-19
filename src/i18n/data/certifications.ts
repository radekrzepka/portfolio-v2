import type { LucideIcon } from "lucide-react";
import { Cloud } from "lucide-react";
import type { Locale } from "../ui";

export interface Certification {
  name: string;
  issuer: string;
  issued: string;
  expires: string;
  icon: LucideIcon;
  color: string;
  credentialUrl: string;
  description: string;
}

const certificationsData: Record<Locale, Certification[]> = {
  en: [
    {
      name: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services",
      issued: "September 2024",
      expires: "September 2027",
      icon: Cloud,
      color: "text-blue-500",
      credentialUrl:
        "https://www.credly.com/badges/526f7af0-eb95-47cf-b23b-7411436785d6",
      description:
        "Certification confirms the ability to design scalable, highly available, and fault-tolerant systems in AWS. Covers knowledge of EC2, S3, VPC, IAM, and best practices for security and cost optimization.",
    },
    {
      name: "AWS Certified Machine Learning Engineer - Associate",
      issuer: "Amazon Web Services",
      issued: "January 2025",
      expires: "January 2028",
      icon: Cloud,
      color: "text-blue-500",
      credentialUrl:
        "https://www.credly.com/badges/fc2a3844-ab21-4bb7-a83a-b678001c1d4b/linked_in_profile",
      description:
        "Certification verifies competencies in building, training, and deploying ML models on the AWS platform. Covers SageMaker, ETL, data processing, feature engineering, and monitoring and optimizing models in production.",
    },
  ],
  pl: [
    {
      name: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services",
      issued: "Wrzesień 2024",
      expires: "Wrzesień 2027",
      icon: Cloud,
      color: "text-blue-500",
      credentialUrl:
        "https://www.credly.com/badges/526f7af0-eb95-47cf-b23b-7411436785d6",
      description:
        "Certyfikacja potwierdza umiejętność projektowania skalowalnych, wysoce dostępnych i odpornych na awarie systemów w AWS. Obejmuje wiedzę z zakresu EC2, S3, VPC, IAM oraz najlepszych praktyk bezpieczeństwa i optymalizacji kosztów.",
    },
    {
      name: "AWS Certified Machine Learning Engineer - Associate",
      issuer: "Amazon Web Services",
      issued: "Styczeń 2025",
      expires: "Styczeń 2028",
      icon: Cloud,
      color: "text-blue-500",
      credentialUrl:
        "https://www.credly.com/badges/fc2a3844-ab21-4bb7-a83a-b678001c1d4b/linked_in_profile",
      description:
        "Certyfikacja weryfikuje kompetencje w zakresie budowy, trenowania i wdrażania modeli ML na platformie AWS. Obejmuje SageMaker, ETL, przetwarzanie danych, feature engineering, oraz monitorowanie i optymalizację modeli w środowisku produkcyjnym.",
    },
  ],
};

export function getCertifications(locale: Locale): Certification[] {
  return certificationsData[locale];
}
