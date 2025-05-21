Ce projet a pour but de recréer le jeux populaire "Yams".

Il a été développé en React Native/ Js et utilise des sockets qui permettent une communication ente client serveur.

Utilisation.

Pour utiliser ce projet, veuillez le cloner dans un premier temps.
Dans un second temps ouvrez le sur votre IDE favoris, ouvrez un terminal à la racine du projet puis : " cd ./backend/", puis " npm install" pour installer les dépendances nécessaire au projet côté back. 


Pour lancer le projet, scindez un terminal en deux l'un à la racine et l'autre au niveau de /backend/. 
Utilisez "npm run start" pour lancer le backend ( toujours au niveau de /backend/).
Utilisez ensuite " npx expo start" à la racine du projet pour lancer le serveur puis appuyer sur "W" pour ouvrir une page pour pouvoir lancer le jeux et jouer.

Infos: Si les commandes ne marchent pas car vos scripts sont bloqués par Windows sur votre IDE, faites : " Set-ExecutionPolicy Bypass -Scope Process -Force".

Architecture.

Mon application utilise une architecture client-serveur :

Client : Construit avec React Native pour offrir une interface mobile (ou cross-platform).
Chaque joueur dispose d’une interface mobile réactive qui affiche le plateau de jeu (grille, dés, score, timer, etc.).

L’interface est enrichie par des animations et des effets (par exemple, effets "enflammés" pour le timer, les dés et la grille) pour renforcer l'immersion et donner un côté ludique au jeu.

Serveur : Construit avec Node.js ainsi que  Socket.IO qui héberge la logique métier du jeu.
Côté serveur vous trouverez le fichier GameService : Un module qui est central car contenant des sous-modules spécialisés pour gérer différents aspects du jeu, comme le calcul des scores, la gestion de la grille, le lancement des dés, la gestion des choix (combinaisons) et la synchronisation des états.

Reste à faire.

Une partie de la logique a été implémenté, cependant il reste de nombreux modules à ajouter, tel que :
- Puis vous implémenterez la gestion des 12 pions (tokens) disponibles pour chacun des joueurs. (à chaque fois qu'un joueur pose un pion, on decrémente).
- Lorsque qu'un utilisateur pose un pion sur la grille de jeu, un check est effectué sur les conditions de victoires potentielles (lignes verticales/horizontales/diagonales ou un des joueurs n'a plus de pions).
- L'information est transmise à la partie Client qui affiche une page de "Résumé de la partie" avec le vainqueur, le perdant, les scores, et ce que vous voulez..
- Vous déciderez ensuite du workflow utilisateur que vous souhaitez mettre en place donc à la fin d'une partie: retour au menu, relancer, etc..
- (OPTIONNEL) Vous pouvez également implémenter la logique de jeu et d'interface de la combinaison "Défi" (bouton Défi au 2e lancer pour annoncer une figure) et "Yam Prédator" (enlever un pion à l'adversaire).
 - Développement du mode "VS Bot" (8 pts)
    - Vous utiliserez le socle existant pour coder le mode Vs-Bot.
    - Ce mode de jeu sera au maximum factorisé avec le mode de jeu en ligne (besoin d'un nouveau createGameVsBot mais beaucoup de méthodes peuvent être réutilisées).
  

Amélioration.

Dans la version actuelle le CSS a été ajouté sans regression ( des effets CSS&JS trop "poussé" peuvent bloquer le screen de partie),
la fonction "calculateScore" créer pour calculer et renvoyer le score des joueurs bloquent actuellemnt le socket permettant de cliquer sur le plateau. Malgré plusieurs maj et du debbuging.
