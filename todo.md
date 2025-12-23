PROJET MICRO-CRÈCHE DESIGN & SOCIALE
Infos projet
Nom provisoire : Micro-crèche Les Petits Liens

Secteur : Accueil de jeunes enfants (micro-crèche 10 places max).

Positionnement :

Lieu très design, chaleureux, inspiré scandinave / japandi.

Fort accent sur le lien social : parents, quartier, inclusion, ateliers intergénérationnels.

Transparence totale : pédagogie, tarifs, équipe, projet social.

Objectifs du site
Rassurer les parents et donner envie de visiter la crèche.

Expliquer clairement le projet social et éducatif.

Permettre :

Demande de pré-inscription.

Prise de contact simple.

Consultation du projet pédagogique, réglement intérieur, etc.

Montrer l’ambiance design du lieu (photos, maquettes, couleurs).

Structure générale du layout
Desktop / tablette (≥ 1024px)
Layout en 2 colonnes :

Colonne gauche : 30% de la largeur, hauteur 100vh, position fixed.

Colonne droite : 70% de la largeur, scroll vertical normal.

Comportement :

Seule la partie droite scroll.

Le menu à gauche reste toujours visible (ancrage, logo, CTA).

Mobile (≤ 768px)
Layout en 1 colonne :

Le menu passe en haut, horizontal ou burger.

Le contenu devient full width (100%).

Le comportement scroll est classique (tout scroll).

Sections techniques
Breakpoints à prévoir :

@media (max-width: 1024px) : ajuster 30/70 → 100% / stacking vertical.

@media (max-width: 768px) : menu compact, typographies réduites, marges adaptées.

Pages / sections à prévoir
Tu peux partir sur un site one-page avec ancre, ou plusieurs pages. Ci-dessous version one-page pour commencer.

1. Section Hero (Accueil)
   Objectif :

Poser le ton : crèche design + dimension sociale forte.

Contenu :

Titre : « Une micro-crèche chaleureuse au cœur du quartier. »

Sous-titre : « Un lieu design, inclusif et à taille humaine pour accompagner les premières années de votre enfant. »

CTA principal : « Demander une pré-inscription ».

CTA secondaire : « Découvrir le projet social ».

Visuel :

Illustration / photo d’un espace très design : bois clair, plantes, lumière douce.

Placement :

Visible dès le haut du scroll dans la colonne droite.

2. Section Le projet de la crèche
   Sous-sections :

Vision :

Phrase clé : accueil bienveillant, respect du rythme de l’enfant, mixité sociale.

Pédagogie :

Inspiration Montessori / Loczy / libre motricité (à préciser).

Activités : ateliers sensoriels, lecture, extérieur, etc.

Projet social :

Lien avec le quartier.

Ateliers parents-enfants.

Interventions d’associations / structures locales.

Call-to-action : lien vers PDF « Projet pédagogique ».

3. Section L’aspect social & l’inclusion
   Objectif :

Mettre en avant l’ADN social (c’est un vrai différenciateur).

Points à détailler :

Accueil de familles aux profils variés.

Adaptation aux contraintes horaires / professionnelles (si prévu).

Tarification modulée (si lien CAF, PSU, etc.).

Partenariats potentiels : mairie, associations, structures de quartier.

Bloc témoignages (même fictifs pour le proto).

4. Section Les espaces (design)
   Objectif :

Montrer le côté très design et rassurant des locaux.

Contenu :

Galerie ou blocs :

Espace vie / jeux.

Espace sieste.

Espace motricité.

Espace parents (coin convivial, café, infos).

Ton visuel :

Minimal, couleurs douces, beaucoup de blanc/crème, bois clair, touches pastel.

Idée : ajouter des petites annotations sur les images « Matériaux non toxiques », « Luminosité naturelle », etc.

5. Section L’équipe
   Fiches membres :

Photo.

Nom / rôle (éducatrice, auxiliaires, direction).

Formation, expérience.

Une phrase sur leur vision de l’accompagnement de l’enfant.

Objectif : humaniser et rassurer.

6. Section Infos pratiques
   Localisation (adresse + carte).

Horaires d’ouverture.

Capacité d’accueil.

Age des enfants accueillis.

Lien vers docs : règlement intérieur, projet pédagogique, charte.

7. Section Tarifs & aide
   Explications simples :

Mode de financement (PSU, PAJE, etc. à adapter).

Aides possibles pour les familles.

Grille de tarifs indicative (ou sur demande).

CTA vers prise de contact pour un devis personnalisé.

8. Section Contact / pré-inscription
   Formulaire :

Nom, prénom du/de la parent(e).

Nom de l’enfant, date de naissance.

Coordonnées (email, téléphone).

Souhaits : jours / créneaux.

Message libre.

Message rassurant :

Aucun engagement, réponse sous X jours.

Navigation (menu gauche 30%)
Contenu du panneau gauche (desktop)
Logo + nom de la micro-crèche.

Petit texte d’intro (2–3 lignes max).

Menu d’ancrage :

Accueil

Projet

Social & inclusion

Espaces

Équipe

Infos pratiques

Tarifs

Contact

CTA :

Bouton visible : « Pré-inscription ».

Infos rapides en bas :

Adresse.

Horaires.

Icônes réseaux (si besoin).

Comportement
Position fixed sur desktop :

width: 30vw;

height: 100vh;

overflow: hidden;

Colonne droite :

width: 70vw;

margin-left: 30vw;

overflow-y: auto;

Scrollbar standard.

Mobile
Menu transformé :

Barre en haut avec logo + burger.

Menu slide-in full screen ou panneau latéral.

CTA « Pré-inscription » toujours accessible.

Le contenu :

Passe en 100% de largeur.

Le principe 30/70 desktop devient stacking vertical simple.

Style & UI
Palette de couleurs (suggestion)
Primaire : beige / sable doux pour fond principal.

Secondaire : vert sauge ou bleu très doux pour éléments design.

Accent : terracotta léger ou jaune pastel pour CTA.

Texte : gris très foncé pour une bonne lisibilité.

Typographie
Titres : sans-serif arrondie (type Poppins).

Texte : sans-serif très lisible (Inter / Nunito).

Style global :

Minimaliste, beaucoup d’espace blanc, formes douces.

Micro-interactions
Hover léger sur les liens de menu.

Scroll doux vers l’ancre.

Petites animations sur les sections (fade-in).

Tâches techniques front
Mettre en place layout 30/70 avec menu fixe à gauche (desktop).

Gérer le scroll uniquement sur la colonne droite.

Implémenter les breakpoints pour mobile / tablette.

Intégrer tous les blocs de contenu (sections listées ci-dessus).

Gérer les ancres de navigation + scroll smooth.

Intégrer le formulaire de contact / pré-inscription (sans backend dans un premier temps).

Tester l’affichage sur :

Desktop large.

Laptop.

Tablette.

Mobile.