# 420-2SS-SW_Dev_App_Mob

## Configuration locale

Copiez `.env.example` vers `.env` à la racine du projet, puis renseignez
`EXPO_PUBLIC_MARTHA_USERNAME` et `EXPO_PUBLIC_MARTHA_PASSWORD` avec vos identifiants Martha.
Le fichier `.env` est ignoré par Git ; `.env.example` ne contient aucune valeur confidentielle.

Expo charge automatiquement ces variables au démarrage avec `npm start`.
Après une modification du `.env`, rechargez complètement l'application.

Attention : les variables `EXPO_PUBLIC_*` sont intégrées en clair dans l'application.
Le fichier `.env` évite de versionner les identifiants, mais ne les protège pas dans
l'application distribuée. Pour garder des identifiants réellement secrets, les appels
authentifiés doivent passer par un serveur qui les conserve.