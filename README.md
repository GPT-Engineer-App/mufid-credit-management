# mufid-credit-management

Hi! J'aimerais réaliser une application web de gestion de credit bancaire cas de la Mufid. J'aimerais que se soit en Python avec le framework django. As-tu quelque chose à me proposer?  Voici comment j'ai penser à mon application: nous avons 5 users (un visiteur, le client, la direction d'exploitation, le conseil d'aministration et un administrateur système). Le visiteur devra entrer le lien de l'application et accéderà la page d'accueil, là il devra cliquer sur s'enregistrer afin de remplir le formulaire d'enregistrement(Nom, Prenom, Date de naissance, sexe, Profession, Numéro de la carte nationale d'identité, adresse électronique, Mot de passe, Téléphone, Pays, Ville, Adresse,plan de localisation à l'applui par le moyen de pièces jointes (uniquement sous format pdf de taille maximale 1.3Mo, PNG,JPEG de 4 Mo au maximum, Photo 4*4 à prendre directement et non dans la galerie choisir un moyen de notification (par mail ou sms à un numéro précis).  Sur le formulaire d'enregistrement, prevoit une Bouton intitulé "Déjà client", ce qui conduira à une interface où le client déjà enregistrer à la banque devra juste entrer son adresse éléctronique, son mot de passe, sa photo 4*4, choisir le moyen de notification, son numéro de compte et son mot de passe afin d'avoir accès aux autres services de l'application. Par la suite, etant client reconnu sur la plateforme, il devra passer par une authentifiaction forte afin d'avoir accès aux fonctionnalités qui lui sont reserver: Gerer profil (modifier ou ajouter des informations supplémentaires que tu peux juger nécessaire étant client dans une banque,...), gérer demandes(effectuer demande sous forme de formulaire avec plus de champs (motif de la demande, monatant demandé, echéances de rembourssement, délais, témoins, joindre les bulletins de paie ou autres pièces équivalente des 3 derniers mois), Consulter demandes qui se prente sous forme de tableau à trois colonnes (titre de la demande, date et l'heure d'envoie), suivre demande pour que ce dernier aie la possibilité d'annulé sa demande). La direction d'exploitation doit pouvoir, en plus des ervicesdu client, gérer Client (Consulter profil et consulter historique des opérations de chaque client, vérifier la liste de solvable et celle des non solvables, tout ceci juste en saisissant un de ses identifiant). Le conseil d'administration à son tour, en plus de jouir des droits et privilèges des précedént acteurs du systèmes toujours après authentification, doit pourvoir accéder à sa fonctionnalité additive qui est gérer Crédit: après le controle des critères de la structure prendre une décision entre valider ou rejeter une demande du client. A chaque fois qu'il faut notifier le client ou le personnel, le système devra agire de façon spontanée en produissant un son. A chaque niveau ou les opération son annulées ou rejetées le systèmes devra envoyer un message avec symbol de croix rouge dans un carré, et un symbol de coche verte dans un carré avec un message de succè, au cas ou les opération ou demandes sont accptées. Marquer d'une trame rouge les noms de tous les clients qui après avoir obtenu leurs prêts, n'ont pas payer dans les délais, et d'une Jaunatre ceux ayant obtenus des crédits mais ne les ont pas encore payé et sont toujours dans les délais. une dois qu'un client rembourse entière son crédit, Marquer une puce verte devant son nom. J'aimerai simuler un compte bancaire avec des numéros de comptes, les mote de passe et tout le necessaire, afin de simuler des transactions financières du comptes de la banque vers le comptes Oranges moneys ou Mobile money, ou autres comptes du client biensur de façon sécurisée, accompagné des notifications pour chaque étapes lors de la transaction. Pour que, au cas où la demande est validée, le conseil d'administration clique par la suite sur autoriser la transaction (il saisira uniquement le montant à envoyé puis clique sur Ok; les champs comme Nom, prenom, numéro de compte seront renseigner automatiquement par le système). L'administrateur système devra juste assurer ses rôles standars d'administrateurs système d'une application. Le nom de l'application est MFC=Mufid Flash Credit.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React with shadcn-ui and Tailwind CSS.

- Vite
- React
- shadcn-ui
- Tailwind CSS

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/mufid-credit-management.git
cd mufid-credit-management
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
