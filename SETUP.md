# Configuration du Projet

## Variables d'environnement

### Configuration locale
1. Copiez le fichier `.env.example` vers `.env`:
   ```bash
   cp .env.example .env
   ```

2. Remplissez les variables EmailJS dans `.env`:
   ```env
   REACT_APP_EMAILJS_SERVICE_ID=votre_service_id
   REACT_APP_EMAILJS_TEMPLATE_ID=votre_template_id
   REACT_APP_EMAILJS_USER_ID=votre_user_id
   ```

### Configuration GitHub Actions

Pour configurer le déploiement automatique, ajoutez ces secrets dans votre dépôt GitHub :

1. Allez dans **Settings > Secrets and variables > Actions**
2. Ajoutez ces secrets :
   - `REACT_APP_EMAILJS_SERVICE_ID`
   - `REACT_APP_EMAILJS_TEMPLATE_ID`
   - `REACT_APP_EMAILJS_USER_ID`

### Obtenir les clés EmailJS

1. Créez un compte sur [EmailJS](https://emailjs.com/)
2. Créez un service email
3. Créez un template d'email
4. Récupérez votre User ID dans les paramètres du compte
5. Utilisez ces identifiants dans vos variables d'environnement

## Déploiement

Le déploiement est automatique via GitHub Actions :
- Chaque push sur la branche `main` déclenche le build et le déploiement
- Le site est déployé sur GitHub Pages avec le domaine personnalisé `laureconseil.fr`

## Premiers pas

1. Cloner le repository
2. Installer les dépendances : `npm install`
3. Configurer les variables d'environnement (voir ci-dessus)
4. Lancer le serveur de développement : `npm start`