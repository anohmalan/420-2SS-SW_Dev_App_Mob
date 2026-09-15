# 420-2SS-SW_Dev_App_Mob

# Laboratoires
L'application Recipeasy sera développée de façon itérative au fil de notre apprentissage de React Native.

- Créez un répertoire pour le projet sur GitHub et me le partager via l'adresse jhoffman@cshawi.ca
- - Le code de l'application doit se trouver à la racine du répertoire
- Vous utiliserez également une branche distincte identifiant chacune des remises itérative. Seul le code sur la branche précisée sera considéré pour la correction.
- Chaque itération devrait être constituée de plusieurs commits, représentant une unité fonctionnelle dans la réalisation de l'itération en cours
Chaque itération devra être présentée AVANT la date limite de remise précisée au calendrier
# 1- Interface utilisateur
Les prototypes d'écrans représentent une maquette, donc vous pouvez utiliser des couleurs différentes ou une librairie de composants différente sans changer la mise en forme significativement

Exploitez judicieusement la séparation en components et l'organisation des fichiers
Assurez-vous d'implémenter les Safe Areas, pour éviter de masquer le contenu
Pour cette première itération, implémentez seulement le contenu statique des écrans suivants:




Librairies suggérées

Boutons radio
Liste déroulante
Interface utilisateur - 1.5%
/ 8
Nom

GitHub, Branche remise-ui	1     0
Appréciation générale
UI	0     -0.5     -1
Code	0     -0.5     -1
Écrans
Connexion	2     1.5     1     0
Inscription	2     1.5     1     0
Formulaire de recette	3     2.5     2     1     0
2- Interactions
À partir des écrans créés précédemment, ajouter la navigation en respectant le storyboard

Assurez-vous de respecter votre thème de couleur
Comportement minimal
Liste des recettes
Pour nous permettre de continuer le développement, nous créons un écran provisoire pour afficher la liste des recettes. À court-terme, cet écran est responsable de stocker la liste des recettes et d'offrir des interactions de base.

Bouton View ouvre le détail d'une recette aléatoire de la liste
Bouton Add ouvre le détail en mode ajout
Un texte affiche le tableau de recettes brutes en string, JSON.stringify(...)
Triée par nom, en ordre croissant
On ajoute un bouton Log out dans la barre de navigation qui retourne au login
L'option back de la barre de navigation est désactivée
Formulaire d'une recette
Permet d'ajouter une nouvelle recette ou de consulter en édition une recette existante reçue en paramètre de navigation.

Pour la création, les données doivent être valides
Catégorie requise
Nom requis, non vide
Durée > 0, Heures 0 à 12, Minutes 0 à 59
Le bouton Delete est disponible en édition uniquement et retourne simplement à la liste
PAS de suppression à implémenter
Le bouton Save est disponible en ajout uniquement et retourne la nouvelle recette à la liste
La liste se mets à jour
PAS d'édition à implémenter


{
    category: Number,
    name: String,
    durationHours: Number,
    durationMinutes: Number,
    description: String
}
Librairie suggérée

Toastify React Native

Interactions - 1.5%
/ 13
Nom

Branche remise-ux, commits	1     0.5     0
Appréciation générale
Correctifs


0     -0.25     -0.5     -0.75     -1
UI	0     -0.5     -1
UX	0     -0.5     -1
Code	0     -0.5     -1
Navigation
Login, Signup	1     0.5     0
Log out, back caché	1     0.5     0
Liste, Ajout/Édition	2     1.5     1     0
Comportement
Liste brute, trié par nom ascendant, se mets à jour	2     1.5     1     0
Ajout, validations	2     1.5     1     0
Édition, recette aléatoire, données cohérentes	2     1.5     1     0
Boutons Save, Delete	2     1.5     1     0