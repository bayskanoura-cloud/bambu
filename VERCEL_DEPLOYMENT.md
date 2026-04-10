# 🚀 Déploiement Vercel - Bambu Beauty

## Configuration ✅

Les fichiers nécessaires ont été créés:
- ✅ `vercel.json` - Configuration Vercel
- ✅ `.vercelignore` - Fichiers ignorés
- ✅ `.env.example` - Exemple variables d'environnement

## 📦 Prérequis

1. **Compte Vercel** (gratuit)
   - Créer un compte: https://vercel.com/signup
   - Connectez-vous avec GitHub, GitLab ou Bitbucket

2. **Git Repository**
   - Votre projet doit être sur GitHub, GitLab ou Bitbucket
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <YOUR_REPO_URL>
   git push -u origin main
   ```

## 🌐 Déployer sur Vercel

### Méthode 1: Via Dashboard Vercel (Recommandé)

1. Allez sur https://vercel.com/dashboard
2. Cliquez sur "Add New" → "Project"
3. Sélectionnez votre repository GitHub/GitLab
4. Vercel détectera automatiquement:
   - Framework: **Vite** ✅
   - Build Command: `npm run build` ✅
   - Output Directory: `dist` ✅
5. Cliquez "Deploy"

### Méthode 2: Via Vercel CLI

```bash
# 1. Installer Vercel CLI
npm install -g vercel

# 2. Déployer depuis le répertoire du projet
cd /path/to/bambu
vercel

# 3. Suivez les instructions (login, project name, etc.)
```

### Méthode 3: GitHub push (Recommandé si configuré)

```bash
# 1. Connectez Vercel à GitHub
# (Fait une seule fois lors du premier déploiement)

# 2. À chaque push sur main:
git push origin main
# → Vercel déploiera automatiquement
```

## 📋 Checklist Avant Déploiement

- ✅ Tous les fichiers commités dans Git
- ✅ `.env.local` créé (si variables d'env nécessaires)
- ✅ `npm run build` fonctionne localement
- ✅ Pas d'erreurs TypeScript/console

## 🔒 Variables d'Environnement

Si vous avez besoin de variables d'environnement:

1. Dans Vercel Dashboard → Paramètres du projet
2. Allez à "Environment Variables"
3. Ajoutez vos variables (API keys, URLs, etc.)
4. Cliquez "Save"

## 🎯 URL Après Déploiement

Après le déploiement, vous aurez:
- **URL de production**: `https://[project-name].vercel.app`
- **URL de preview**: `https://[branch-name].[project-name].vercel.app`

## 📊 Monitoring

- Dashboard Vercel: https://vercel.com/dashboard
- Logs de déploiement en temps réel
- Vérification des erreurs de build
- Analytics de performance

## 🔧 Dépannage

### Build échoue
```bash
# Vérifiez localement:
npm install
npm run build
```

### Images Figma ne s'affichent pas
- Vérifiez que le chemin `figma:asset` est correct
- Les assets Figma doivent être dans `src/assets/`

### Vercel Cache
```bash
# Si besoin de redéployer sans cache:
vercel --prod --force
```

## 📞 Support

- Documentation Vercel: https://vercel.com/docs
- Community: https://vercel.com/support

---

**Configuration prête pour Vercel! 🎉**
