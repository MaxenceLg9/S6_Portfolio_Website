import one from '../assets/svg/projects/one.svg'
import two from '../assets/svg/projects/two.svg'
import three from '../assets/svg/projects/three.svg'
import four from '../assets/svg/projects/four.svg'
import five from '../assets/svg/projects/five.svg'
import six from '../assets/svg/projects/six.svg'
import seven from '../assets/svg/projects/seven.svg'
import eight from '../assets/svg/projects/eight.svg'


export const groupProjectsData = [
    {
        id: 1,
        projectName: 'Infrastructure informatique d\'une association',
        projectDesc: 'Projet d\'étude et de mise en place de l\'infrastructure informatique d\'une association locale, comprenant la mise en place du réseau avec protocoles, services réseaux, et d\'un serveur Web à l\'aide de l\'orchestrateur de conteneurs Kubernetes',
        tags: ['Kubernetes', 'Gitlab-CI', 'OSPF', 'BGP', 'VRF', 'IPSec', 'MPLS', 'DHCP', 'DNS', 'High Availability', 'Rancher'],
        code: 'https://gitlab.info.iut-tlse3.fr/mrk4759a/configurations-s5b01',
        demo: 'https://gitlab.info.iut-tlse3.fr/mrk4759a/configurations-s5b01',
        image: "/img/nailloux.png",
        skills: ['Ingénierie', 'Administration de données', 'Management', 'Gouvernance SI', 'Innover', 'Conduire']
    },
    {
        id: 2,
        projectName: 'RugbyGestionApp',
        projectDesc: 'Application de gestion d\'équipe de rugby permettant de Gouvernance SI les joueurs, les matchs et les statistiques.',
        tags: ['PHP', 'MySQL', 'JwT', 'RestAPI'],
        code: 'https://github.com/MaxenceLg9/R401_RugbyGestion2',
        demo: 'https://github.com/MaxenceLg9/R401_RugbyGestion2',
        image: "/img/rugbygestionapp.png",
        skills: ['Ingénierie', 'Management', 'Gouvernance SI', 'Innover']
    },
    {
        id: 3,
        projectName: '44 Compress Tool',
        projectDesc: 'Outil dit CLI: command-line-interface, interface en ligne de commande permettant de compresser et décompresser des fichiers en utilisant l\'algorithme d\'Huffman. D\'autres features sont comprises comme l\'affichage de l\'arbre d\'Huffman',
        tags: ['Rust', 'Huffman', 'Cargo'],
        code: 'https://github.com/MaxenceLg9/R5B10-Compress_Projet_Rust',
        demo: 'https://github.com/MaxenceLg9/R5B10-Compress_Projet_Rust',
        image: "/img/44.png",
        skills: ['Ingénierie', 'Management', 'Innover']
    },
]

export const personalProjetsData = [
    {
        id: 1,
        projectName: 'CAPI',
        projectDesc: 'Une API REST programmable entièrement écrite en C, et en Rust',
        tags: ['Rust', 'C', 'HTTP', 'TLS'],
        code: 'https://github.com/MaxenceLg9/CAPI',
        demo: 'https://github.com/MaxenceLg9/CAPI',
        image: "/logo/capi.png"
    },
    {
        id: 2,
        projectName: 'RootMe',
        projectDesc: 'Mon profil RootMe, plateforme de challenges en cybersécurité sur laquelle je m\'entraîne régulièrement.',
        tags: ['Programmation', 'Cracking', 'Cybersécurité', 'Pentest', 'Cryptographie'],
        code: 'https://www.root-me.org/Sinisters?lang=fr#efcaf7769db22a3ee0ae81dd72329852',
        demo: 'https://www.root-me.org/Sinisters?lang=fr#efcaf7769db22a3ee0ae81dd72329852',
        image: '/logo/rootme.svg'
    },
    {
        id: 3,
        projectName: 'Projet OpenGL',
        projectDesc: 'Projet d\'initiation à la programmation avec la spécification OpenGL, en C++ et Rust',
        tags: ['Rust','C++','C','OpenGL'],
        code: 'https://github.com/MaxenceLg9/OpenGL_ProjectV1',
        demo: 'https://github.com/MaxenceLg9/OpenGL_ProjectV1',
        image: "/logo/opengl.svg"
    },
]