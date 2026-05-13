import type { Metadata } from "next";
import { LegalPage } from "../legal/LegalPage";

export const metadata: Metadata = {
  title: "Conditions d'utilisation - Facturely",
  description:
    "Conditions applicables a l'utilisation du site Facturely et a la participation a la beta.",
};

const sections = [
  {
    title: "Objet",
    body: [
      "Facturely est un service en beta destine a aider les freelances, agences et petites entreprises a suivre leurs factures, reperer les retards et preparer des relances clients.",
      "Le service est en cours de construction. Certaines fonctionnalites peuvent evoluer, etre limitees ou modifiees a partir des retours utilisateurs.",
    ],
  },
  {
    title: "Participation a la beta",
    body: [
      "L'inscription a la beta ne garantit pas un acces immediat au produit. Facturely peut selectionner progressivement les premiers utilisateurs selon les profils et les besoins de test.",
      "La beta est proposee gratuitement aux premiers testeurs, sauf indication contraire communiquee avant toute utilisation payante.",
    ],
  },
  {
    title: "Responsabilite de l'utilisateur",
    body: [
      "Vous restez responsable de la verification des informations extraites ou preparees par Facturely, notamment les montants, dates, statuts et messages de relance.",
      "Facturely ne remplace pas un logiciel de facturation, un expert-comptable, un conseil juridique ou une validation humaine avant envoi a vos clients.",
    ],
  },
  {
    title: "Disponibilite",
    body: [
      "Pendant la beta, le service peut etre interrompu, ralenti ou modifie sans preavis afin de corriger des problemes, tester des fonctionnalites ou ameliorer l'experience.",
      "Facturely fait ses meilleurs efforts pour proposer un outil utile et fiable, mais ne garantit pas une disponibilite continue pendant cette phase.",
    ],
  },
  {
    title: "Contact",
    body: [
      "Pour toute question sur ces conditions ou sur l'utilisation de Facturely, vous pouvez ecrire a facturely.app@proton.me.",
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Conditions d'utilisation"
      intro="Ces conditions encadrent l'utilisation du site Facturely et la participation a la beta du produit."
      sections={sections}
    />
  );
}
