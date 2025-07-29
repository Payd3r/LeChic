# Le Chic Beauty Center - Website

Sito web moderno e responsive per il centro estetico Le Chic di Cinzia.

## 🚀 Tecnologie Utilizzate

- **React 18** - Framework frontend
- **Vite** - Build tool veloce
- **Tailwind CSS** - Framework CSS utility-first
- **Lucide React** - Icone moderne
- **Docker** - Containerizzazione
- **Nginx** - Web server per produzione

## 📁 Struttura del Progetto

```
LeChic/
├── src/
│   ├── components/     # Componenti React
│   ├── App.jsx        # Componente principale
│   ├── main.jsx       # Entry point
│   └── index.css      # Stili globali
├── public/            # Asset statici
│   ├── product/       # Immagini prodotti
│   └── result/        # Foto risultati
├── Dockerfile         # Configurazione Docker
├── docker-compose.yml # Orchestrazione container
├── nginx.conf         # Configurazione Nginx
└── package.json       # Dipendenze npm
```

## 🛠️ Sviluppo Locale

### Prerequisiti
- Node.js 18+
- npm o yarn

### Installazione
```bash
# Clona il repository
git clone <repository-url>
cd LeChic

# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev
```

Il sito sarà disponibile su `http://localhost:5173`

## 🐳 Deployment con Docker

### Prerequisiti
- Docker
- Docker Compose
- Portainer (opzionale)

### Build e Deploy

1. **Build dell'immagine:**
```bash
docker build -t lechic-frontend .
```

2. **Avvio con Docker Compose:**
```bash
docker-compose up -d
```

3. **Verifica del deployment:**
```bash
docker-compose ps
```

### Configurazione Portainer

1. Accedi a Portainer
2. Vai su "Stacks"
3. Crea una nuova stack
4. Copia il contenuto di `docker-compose.yml`
5. Deploy la stack

## 🌐 Configurazione Nginx

Il file `nginx.conf` include:
- Compressione gzip
- Cache per asset statici
- Headers di sicurezza
- Supporto per client-side routing
- Logging configurato

## 📱 Responsive Design

Il sito è completamente responsive e ottimizzato per:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎨 Design System

### Colori
- **Primary**: `#F8F6F7` (Grigio chiaro)
- **Secondary**: `#D4AF37` (Oro)
- **Accent**: `#800020` (Borgogna)
- **Text Main**: `#2C2C2C` (Grigio scuro)
- **Background**: `#FFFFFF` (Bianco)

### Font
- **Playfair Display**: Titoli
- **Lato**: Testo corpo

## 📸 Asset

### Prodotti
Le immagini dei prodotti sono nella cartella `public/product/`:
- 1.jpg - 12.jpg

### Risultati
Le foto dei risultati sono nella cartella `public/result/`:
- 4.jpg, 5.jpg, 9.jpg

### Struttura
- 11.jpg - Foto della sala
- 13.jpg - Foto del personale

## 🔧 Script Disponibili

```bash
npm run dev          # Avvia server di sviluppo
npm run build        # Build per produzione
npm run preview      # Preview build di produzione
```

## 📦 Container Info

- **Nome Container**: `lechic_frontend`
- **Porta**: 80
- **Immagine Base**: `nginx:alpine`
- **Build Stage**: `node:18-alpine`

## 🔒 Sicurezza

- Headers di sicurezza configurati
- Accesso negato a file nascosti
- Compressione gzip abilitata
- Cache ottimizzato per performance

## 📞 Supporto

Per supporto tecnico o modifiche, contattare il team di sviluppo.

---

**Le Chic di Cinzia** - Centro Benessere di Eccellenza 