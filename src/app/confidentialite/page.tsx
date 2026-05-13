import type { Metadata } from "next";
import { LegalPage } from "../legal/LegalPage";

export const metadata: Metadata = {
  title: "Politique de confidentialite - Facturely",
  description:
    "Informations sur les donnees collectees par Facturely pendant la beta et leur utilisation.",
};

const sections = [
  {
    title: "Donnees collectees",
    body: [
      "Pendant la beta, Facturely peut collecter les informations que vous transmettez volontairement via le formulaire d'inscription ou par email : nom, adresse email, profil professionnel, besoin exprime et retours sur le produit.",
      "Si vous partagez des exemples de factures ou documents pour tester le service, ces elements peuvent contenir des informations clients, montants, dates d'echeance et references de facture.",
    ],
  },
  {
    title: "Utilisation des donnees",
    body: [
      "Ces donnees servent a vous contacter au sujet de la beta, comprendre vos besoins, ameliorer le produit et prioriser les fonctionnalites utiles.",
      "Facturely ne vend pas vos donnees personnelles. Les informations partagees dans le cadre de la beta ne sont pas utilisees pour une prospection tierce.",
    ],
  },
  {
    title: "Outils tiers",
    body: [
      "Le formulaire beta est heberge par Tally. Les informations envoyees via ce formulaire sont donc egalement traitees selon les conditions et la politique de confidentialite de Tally.",
      "Le site peut ensuite etre heberge par un prestataire technique, par exemple Vercel, qui traite des donnees techniques necessaires au fonctionnement et a la securite du site.",
    ],
  },
  {
    title: "Conservation et suppression",
    body: [
      "Les donnees beta sont conservees pendant la duree necessaire au suivi du test et a l'amelioration du service.",
      "Vous pouvez demander l'acces, la correction ou la suppression de vos donnees en ecrivant a facturely.app@proton.me.",
    ],
  },
  {
    title: "Contact",
    body: [
      "Pour toute question relative a la confidentialite ou au traitement de vos donnees, vous pouvez contacter Facturely a l'adresse facturely.app@proton.me.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Politique de confidentialite"
      intro="Cette page explique simplement quelles donnees peuvent etre collectees pendant la beta de Facturely et comment elles sont utilisees."
      sections={sections}
    />
  );
}
