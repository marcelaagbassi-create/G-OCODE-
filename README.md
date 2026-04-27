# 馃實 G脡OCODE 鈥� Le Jeu des Pays

> **Devine 路 脡limine 路 Domine**  
> Un jeu multijoueur en temps r茅el o霉 tu dois deviner les pays secrets de tes adversaires !

![Version](https://img.shields.io/badge/version-1.0.0-00f5d4?style=flat-square)
![Firebase](https://img.shields.io/badge/Firebase-Realtime_DB-orange?style=flat-square)
![PWA](https://img.shields.io/badge/PWA-Ready-blueviolet?style=flat-square)
![Plateforme](https://img.shields.io/badge/Platform-Web%20%2F%20Android-green?style=flat-square)

---

## 馃幃 Comment jouer

1. **Chaque joueur choisit secr猫tement un pays** 鈥� ses lettres num茅rot茅es s'affichent
2. **脌 son tour, un joueur joue une lettre** 鈥� les adversaires qui l'ont r茅v猫lent sa position
3. **Deviner le pays d'un adversaire** = il est 茅limin茅 + tu gagnes des points
4. **Le dernier joueur debout gagne la partie !**

---

## 馃殌 D茅ploiement sur GitHub Pages

### 脡tape 1 鈥� Clone et configure
```bash
git clone https://github.com/DAVIESLAY/geocode.git
cd geocode
```

### 脡tape 2 鈥� Active GitHub Pages
- Va dans **Settings** 鈫� **Pages**
- Source : `Deploy from a branch`
- Branch : `main` 鈫� `/root`
- Clique **Save**

### 脡tape 3 鈥� Acc猫de au jeu
```
https://davieslay.github.io/geocode/
```

---

## 馃敟 Configuration Firebase

Le jeu utilise **Firebase Realtime Database** pour le multijoueur.  
La config est d茅j脿 int茅gr茅e dans `index.html` :

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

### R猫gles Firebase Realtime Database (脿 configurer)
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

## 馃摫 Fonctionnalit茅s

| Fonctionnalit茅 | Statut |
|---|---|
| 馃幃 Mode Solo (4 difficult茅s) | 鉁� |
| 馃寪 Multijoueur Firebase temps r茅el | 鉁� |
| 馃彔 Cr茅ation de salons avec code | 鉁� |
| 馃拃 脡limination & attente prochaine partie | 鉁� |
| 馃弳 Classement automatique en fin de partie | 鉁� |
| 馃敂 Notifications Push | 鉁� |
| 馃帹 6 th猫mes (Sombre, Clair, Oc茅an, For锚t, Coucher, Galaxie) | 鉁� |
| 馃摬 PWA installable | 鉁� |
| 馃實 + de 80 pays disponibles | 鉁� |

---

## 馃洜锔� Technologies

- **Frontend** : HTML5, CSS3 (Variables CSS, Animations), JavaScript ES6+
- **Base de donn茅es** : Firebase Realtime Database
- **Polices** : Orbitron, Rajdhani, Space Mono (Google Fonts)
- **PWA** : Service Worker, Web App Manifest

---

## 馃懆鈥嶐煉� D茅veloppeur

**David Laurens Kokoura Meurisse**  
`DAVIESLAY 馃挜`

> D茅veloppeur passionn茅, cr茅ateur de G脡OCODE. Artisan du num茅rique bas茅 en C么te d'Ivoire.

---

## 馃搫 Licence

漏 AVRIL 2026 鈥� G脡OCODE  
Tous droits r茅serv茅s 鈥� DAVIESLAY 馃挜
