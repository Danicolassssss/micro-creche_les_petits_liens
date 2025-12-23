import { Sidebar } from "@/components/Sidebar";
import { MobileHeader } from "@/components/MobileHeader";
import { Section } from "@/components/Section";
import { ArrowRight, Heart, Users, Home as HomeIcon, Calendar, Euro, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/components/Map"), {
  loading: () => (
    <div className="w-full h-full bg-secondary/10 rounded-xl animate-pulse flex items-center justify-center">
      <span className="text-secondary/50">Chargement de la carte...</span>
    </div>
  ),
});

export default function Home() {

  return (
    <main className="min-h-screen bg-background">
      <Sidebar />
      <MobileHeader />

      <div className="lg:ml-[20vw] relative">
        {/* Hero Section */}
        <Section id="hero" className="relative overflow-hidden min-h-screen">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/accueil.jpeg"
              alt="Micro-crèche Les Petits Liens"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          <div className="max-w-4xl relative z-10">
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Une micro-crèche chaleureuse au cœur du quartier.
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
              Un lieu design, inclusif et à taille humaine pour accompagner les premières années de votre enfant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-colors shadow-sm group"
              >
                Demander une pré-inscription
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#project"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-colors"
              >
                Découvrir le projet social
              </Link>
            </div>
          </div>
        </Section>

        {/* Project Section */}
        <Section
          id="project"
          title="Le projet de la crèche"
          subtitle="Une pédagogie bienveillante inspirée de Montessori et Loczy, favorisant la libre motricité et le respect du rythme de l'enfant."
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-secondary/10">
              <Heart className="w-10 h-10 text-accent mb-4" />
              <h3 className="font-display text-xl font-bold mb-3">Vision Pédagogique</h3>
              <p className="text-text-main/70">
                Nous croyons en l'autonomie de l'enfant. Notre équipe accompagne chaque tout-petit dans ses découvertes, sans faire à sa place, mais en sécurisant son exploration.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-secondary/10">
              <Users className="w-10 h-10 text-secondary mb-4" />
              <h3 className="font-display text-xl font-bold mb-3">Lien Social</h3>
              <p className="text-text-main/70">
                La crèche est ouverte sur son quartier. Nous organisons régulièrement des ateliers parents-enfants et des rencontres intergénérationnelles.
              </p>
            </div>
          </div>
        </Section>

        {/* Social & Inclusion Section */}
        <Section
          id="social"
          title="Social & Inclusion"
          subtitle="L'ADN de notre structure : accueillir toutes les familles et créer du lien."
          className="bg-secondary/5"
        >
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h3 className="font-display text-2xl font-bold mb-4">Une crèche pour tous</h3>
                <p className="text-text-main/70 mb-4">
                  Nous avons à cœur d'accueillir des familles aux profils variés. Notre tarification est pensée pour être accessible, et nous travaillons en lien étroit avec les acteurs sociaux du quartier.
                </p>
                <ul className="space-y-2 text-text-main/80">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full" />
                    Accueil inclusif (handicap, situations spécifiques)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full" />
                    Mixité sociale favorisée
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full" />
                    Partenariats associatifs locaux
                  </li>
                </ul>
              </div>
              <div className="flex-1 bg-white p-6 rounded-xl border border-secondary/20 italic text-text-main/80">
                "Enfin une structure qui prend le temps d'écouter les parents et de s'adapter à nos contraintes. L'ambiance y est familiale et rassurante."
                <div className="mt-4 font-semibold not-italic">— Sophie, maman de Léo</div>
              </div>
            </div>
          </div>
        </Section>

        {/* Spaces Section */}
        <Section
          id="spaces"
          title="Les Espaces"
          subtitle="Un environnement apaisant, conçu avec des matériaux naturels et non toxiques."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="aspect-video relative group overflow-hidden rounded-xl">
              <Image
                src="/espacevieetjeu.jpeg"
                alt="Espace Vie & Jeux"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-display text-xl font-bold drop-shadow-md z-10">Espace Vie & Jeux</span>
              <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity text-text-main z-10">
                Luminosité naturelle
              </div>
            </div>
            <div className="aspect-video relative group overflow-hidden rounded-xl">
              <Image
                src="/espacemotricite.jpeg"
                alt="Espace Motricité"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-display text-xl font-bold drop-shadow-md z-10">Espace Motricité</span>
              <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity text-text-main z-10">
                Matériaux bois
              </div>
            </div>
            <div className="aspect-video relative group overflow-hidden rounded-xl">
              <Image
                src="/espacesieste.jpeg"
                alt="Espace Sieste"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-display text-xl font-bold drop-shadow-md z-10">Espace Sieste</span>
              <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity text-text-main z-10">
                Calme & Douceur
              </div>
            </div>
            <div className="aspect-video relative group overflow-hidden rounded-xl">
              <Image
                src="/coinparent.jpeg"
                alt="Coin Parents"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-display text-xl font-bold drop-shadow-md z-10">Coin Parents</span>
              <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity text-text-main z-10">
                Convivialité
              </div>
            </div>
          </div>
        </Section>

        {/* Team Section */}
        <Section
          id="team"
          title="L'Équipe"
          subtitle="Des professionnels passionnés pour accompagner vos enfants."
          className="bg-secondary/5"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {/* Profil 1 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary/10 text-center flex flex-col items-center">
              <div className="w-32 h-32 relative mb-4 rounded-full overflow-hidden border-4 border-secondary/20">
                <Image
                  src="/profil1.jpeg"
                  alt="Directrice"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-display text-lg font-bold mb-1">Amel Rahmani</h3>
              <p className="text-accent text-sm font-medium mb-3">Directrice de la micro-crèche</p>
              <p className="text-text-main/70 text-sm italic mb-4">
                « Créer un lieu où chaque enfant se sent en confiance et chaque parent écouté est au cœur de mon engagement depuis plusieurs années. »
              </p>
              <p className="text-text-main/60 text-xs leading-relaxed">
                Diplômée en gestion de structures petite enfance. Porteuse du projet social et du lien avec les familles et les partenaires du quartier.
              </p>
            </div>

            {/* Profil 2 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary/10 text-center flex flex-col items-center">
              <div className="w-32 h-32 relative mb-4 rounded-full overflow-hidden border-4 border-secondary/20">
                <Image
                  src="/profil2.jpeg"
                  alt="Éducatrice de Jeunes Enfants"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-display text-lg font-bold mb-1">Claire Dubois</h3>
              <p className="text-accent text-sm font-medium mb-3">Éducatrice de Jeunes Enfants</p>
              <p className="text-text-main/70 text-sm italic mb-4">
                « Accompagner l’enfant vers l’autonomie, dans le respect de son rythme et de sa personnalité, est ce qui me passionne au quotidien. »
              </p>
              <p className="text-text-main/60 text-xs leading-relaxed">
                Référente de la pédagogie inspirée de Montessori et Loczy. Met en place des ateliers d’exploration, de motricité libre et de langage.
              </p>
            </div>

            {/* Profil 3 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary/10 text-center flex flex-col items-center">
              <div className="w-32 h-32 relative mb-4 rounded-full overflow-hidden border-4 border-secondary/20">
                <Image
                  src="/profil3.jpeg"
                  alt="Auxiliaire de puériculture"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-display text-lg font-bold mb-1">Sophie Morel</h3>
              <p className="text-accent text-sm font-medium mb-3">Auxiliaire de puériculture</p>
              <p className="text-text-main/70 text-sm italic mb-4">
                « Offrir un environnement sécurisant, doux et chaleureux permet à chaque tout-petit de grandir sereinement. »
              </p>
              <p className="text-text-main/60 text-xs leading-relaxed">
                Accompagne les soins du quotidien (repas, sieste, changes) dans une relation individualisée. Participe aux temps d’éveil et aux échanges quotidiens avec les parents.
              </p>
            </div>
          </div>
        </Section>

        {/* Infos Pratiques */}
        <Section
          id="infos"
          title="Infos Pratiques"
          subtitle="Tout ce qu'il faut savoir pour nous trouver et s'organiser."
        >
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <HomeIcon className="w-6 h-6 text-secondary mt-1" />
                <div>
                  <h4 className="font-bold mb-1">Adresse</h4>

                  <p className="text-text-main/70">123 Rue du Quartier<br />75000 Paris</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Calendar className="w-6 h-6 text-secondary mt-1" />
                <div>
                  <h4 className="font-bold mb-1">Horaires</h4>
                  <p className="text-text-main/70">Lundi au Vendredi<br />8h00 - 18h30</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Users className="w-6 h-6 text-secondary mt-1" />
                <div>
                  <h4 className="font-bold mb-1">Capacité</h4>
                  <p className="text-text-main/70">10 enfants maximum<br />De 10 semaines à 4 ans</p>
                </div>
              </div>
            </div>
            <div className="h-64 md:h-auto min-h-[300px] rounded-xl overflow-hidden shadow-sm border border-secondary/10 relative z-0">
              <Map />
            </div>
          </div>
        </Section>

        {/* Tarifs */}
        <Section
          id="rates"
          title="Tarifs & Aides"
          subtitle="Une tarification claire et adaptée à vos revenus."
          className="bg-secondary/5"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display text-2xl font-bold mb-4">Mode de fonctionnement</h3>
              <p className="text-text-main/70 mb-6">
                Notre structure fonctionne en mode PAJE (Prestation d'Accueil du Jeune Enfant). Vous avancez les frais de garde et êtes remboursés par la CAF via le CMG (Complément de Libre Choix du Mode de Garde).
              </p>
              <div className="flex items-start gap-3 mb-4">
                <Euro className="w-6 h-6 text-accent mt-1" />
                <div>
                  <h4 className="font-bold">Crédit d'impôt</h4>
                  <p className="text-text-main/70 text-sm">
                    Vous bénéficiez également d'un crédit d'impôt de 50% sur les sommes restantes à votre charge (dans la limite du plafond en vigueur).
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-secondary/10">
              <h4 className="font-bold text-lg mb-4 text-center">Estimation du coût</h4>
              <p className="text-center text-text-main/70 mb-6">
                Le coût final dépend de vos revenus et du nombre d'heures de garde.
              </p>
              <Link
                href="#contact"
                className="block w-full bg-secondary text-white text-center py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
              >
                Demander un devis personnalisé
              </Link>
            </div>
          </div>
        </Section>

        {/* Contact */}
        <Section
          id="contact"
          title="Contact & Pré-inscription"
          subtitle="Remplissez ce formulaire pour nous faire part de votre besoin. Nous vous répondrons sous 48h."
        >
          <div className="max-w-2xl mx-auto bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-secondary/20">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="parentName" className="text-sm font-medium text-text-main">Nom & Prénom du parent</label>
                  <input
                    type="text"
                    id="parentName"
                    className="w-full px-4 py-3 rounded-lg border border-secondary/20 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                    placeholder="Votre nom complet"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-text-main">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-secondary/20 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-text-main">Téléphone</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg border border-secondary/20 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                    placeholder="06 12 34 56 78"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="startDate" className="text-sm font-medium text-text-main">Date de début souhaitée</label>
                  <input
                    type="date"
                    id="startDate"
                    className="w-full px-4 py-3 rounded-lg border border-secondary/20 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="childName" className="text-sm font-medium text-text-main">Prénom de l'enfant</label>
                  <input
                    type="text"
                    id="childName"
                    className="w-full px-4 py-3 rounded-lg border border-secondary/20 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                    placeholder="Prénom"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="birthDate" className="text-sm font-medium text-text-main">Date de naissance (ou prévue)</label>
                  <input
                    type="date"
                    id="birthDate"
                    className="w-full px-4 py-3 rounded-lg border border-secondary/20 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-text-main">Jours de garde souhaités</label>
                <div className="flex flex-wrap gap-3">
                  {["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"].map((day) => (
                    <label key={day} className="flex items-center gap-2 cursor-pointer bg-secondary/5 px-3 py-2 rounded-md hover:bg-secondary/10 transition-colors">
                      <input type="checkbox" className="accent-accent w-4 h-4" />
                      <span className="text-sm text-text-main/80">{day}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-text-main">Message complémentaire</label>
                <textarea
                  id="message"
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-secondary/20 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all resize-none"
                  placeholder="Précisions sur vos besoins, questions particulières..."
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="referral" className="text-sm font-medium text-text-main">Comment nous avez-vous connus ?</label>
                <select
                  id="referral"
                  className="w-full px-4 py-3 rounded-lg border border-secondary/20 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all bg-white"
                >
                  <option value="">Sélectionnez une option</option>
                  <option value="search">Recherche internet</option>
                  <option value="social">Réseaux sociaux</option>
                  <option value="word">Bouche à oreille</option>
                  <option value="street">Passage devant la crèche</option>
                  <option value="other">Autre</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-accent text-white font-bold py-4 rounded-lg hover:bg-accent/90 transition-colors shadow-md flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Envoyer ma demande de pré-inscription
              </button>
              <p className="text-center text-xs text-text-main/50 mt-4">
                Ce formulaire est une demande de contact et ne vaut pas inscription définitive.
              </p>
            </form>
          </div>
        </Section>

        {/* Footer Mobile */}
        <footer className="lg:hidden bg-primary py-8 px-6 text-center border-t border-secondary/20">
          <p className="text-text-main/60 text-sm">
            © 2024 Les Petits Liens. Tous droits réservés.
          </p>
        </footer>
      </div>
    </main>
  );
}
