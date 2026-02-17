import {HiOutlineLightBulb, HiUsers} from "react-icons/hi";
import {FaTerminal, FaUserShield} from "react-icons/fa";
import {SlSpeedometer} from "react-icons/sl";
import {BsKanban} from "react-icons/bs";

export const skillsData = [
    {
        name: "Ingénierie",
        description: "Concevoir des solutions hétérogènes et assurer la cohérence technique des écosystèmes informatiques.",
        subSkills: ["Pentesting", "ISO 27001", "Cryptography", "Firewalling"],
        icon: <FaTerminal/>
    },
    {
        name: "Gouvernance SI",
        description: "Superviser et pérenniser les infrastructures en veillant à leur haute disponibilité et à leur résilience.",
        icon: <FaUserShield/>
    },
    {
        name: "Management",
        description: "Coordonner les synergies d'équipe et structurer l'organisation du travail pour atteindre les objectifs communs.",
        icon: <HiUsers/>
    },
    {
        name: "Administration de données",
        description: "Maîtriser le cycle de vie de la donnée et sécuriser les échanges entre les différentes couches applicatives.",
        icon: <SlSpeedometer/>
    },
    {
        name: "Gestion de Projet",
        description: "Diriger le déploiement de solutions SI en respectant les exigences fonctionnelles et les spécificités environnementales.",
        icon: <BsKanban/>
    },
    {
        name: "Innovation",
        description: "Rationaliser les structures existantes pour résoudre des problématiques critiques et accroître l'efficience opérationnelle.",
        icon: <HiOutlineLightBulb/>
    }
];