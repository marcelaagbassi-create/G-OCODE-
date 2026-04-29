# 🌍 GÉOCODE — Le Jeu des Pays

> **Devine · Élimine · Domine**  
> Un jeu multijoueur en temps réel où tu dois deviner les pays secrets de tes adversaires !

![Version](https://img.shields.io/badge/version-1.0.0-00f5d4?style=flat-square)
![Firebase](https://img.shields.io/badge/Firebase-Realtime_DB-orange?style=flat-square)
![PWA](https://img.shields.io/badge/PWA-Ready-blueviolet?style=flat-square)
![Plateforme](https://img.shields.io/badge/Platform-Web%20%2F%20Android-green?style=flat-square)

---

## 🎮 Comment jouer

1. **Chaque joueur choisit secrètement un pays** — ses lettres numérotées s'affichent
2. **À son tour, un joueur joue une lettre** — les adversaires qui l'ont révèlent sa position
3. **Deviner le pays d'un adversaire** = il est éliminé + tu gagnes des points
4. **Le dernier joueur debout gagne la partie !**

---

## 🚀 Déploiement sur GitHub Pages

### Étape 1 — Clone et configure
```bash
git clone https://github.com/DAVIESLAY/geocode.git
cd geocode
```

### Étape 2 — Active GitHub Pages
- Va dans **Settings** → **Pages**
- Source : `Deploy from a branch`
- Branch : `main` → `/root`
- Clique **Save**

### Étape 3 — Accède au jeu
```
https://davieslay.github.io/geocode/
```

---

## 🔥 Configuration Firebase

Le jeu utilise **Firebase Realtime Database** pour le multijoueur.  
La config est déjà intégrée dans `index.html` :

```javascript
const FB_CFG = {
  apiKey: "AIzaSyC84uLQLSarst7S0RtYitqL62y7TvwUJo8",
  authDomain: "geocode-9554f.firebaseapp.com",
  databaseURL: "https://geocode-9554f-default-rtdb.firebaseio.com",
  projectId: "geocode-9554f",
  storageBucket: "geocode-9554f.firebasestorage.app",
  messagingSenderId: "769284200217",
  appId: "1:769284200217:web:30cedc4aa6b2373c8cd788"
};
```

### Règles Firebase Realtime Database (à configurer)
```json
{
  "rules": {
    "rooms": {
      "$roomId": {
        ".read": true,
        ".write": true
      }
    }
  }
}
```

---

## 📱 Fonctionnalités

| Fonctionnalité | Statut |
|---|---|
| 🎮 Mode Solo (4 difficultés) | ✅ |
| 🌐 Multijoueur Firebase temps réel | ✅ |
| 🏠 Création de salons avec code | ✅ |
| 💀 Élimination & attente prochaine partie | ✅ |
| 🏆 Classement automatique en fin de partie | ✅ |
| 🔔 Notifications Push | ✅ |
| 🎨 6 thèmes (Sombre, Clair, Océan, Forêt, Coucher, Galaxie) | ✅ |
| 📲 PWA installable | ✅ |
| 🌍 + de 80 pays disponibles | ✅ |

---

## 🛠️ Technologies

- **Frontend** : HTML5, CSS3 (Variables CSS, Animations), JavaScript ES6+
- **Base de données** : Firebase Realtime Database
- **Polices** : Orbitron, Rajdhani, Space Mono (Google Fonts)
- **PWA** : Service Worker, Web App Manifest

---

## 👨‍💻 Développeur

**David Laurens Kokoura Meurisse**  
`DAVIESLAY 💥`

> Développeur passionné, créateur de GÉOCODE. Artisan du numérique basé en Côte d'Ivoire.

---

## 📄 Licence

© AVRIL 2026 — GÉOCODE  
Tous droits réservés — DAVIESLAY 💥
