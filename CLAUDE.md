# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Start Development Server
```bash
npm start
```
Opens http://localhost:3000 in development mode with hot reload.

### Build for Production
```bash
npm run build
```
Creates optimized production build in the `build/` folder.

### Run Tests
```bash
npm test
```
Launches Jest test runner in interactive watch mode.

### Deploy to GitHub Pages
```bash
npm run deploy
```
Builds and deploys to GitHub Pages (requires `gh-pages` package).

**Automated Deployment**: The project uses GitHub Actions for CI/CD. Pushes to `main` branch automatically trigger build and deployment.

## Project Architecture

### Technology Stack
- **React 18** with TypeScript
- **React Router v6** for routing
- **Tailwind CSS** with custom design tokens
- **Blueprint.js** for UI components (Drawer, Toast, Form elements)
- **EmailJS** for contact form functionality
- **twin.macro** for CSS-in-JS styling

### Application Structure

**Entry Point**: `src/index.tsx` → `CustomRouter`

**Routing Architecture** (`src/services/customRouter.tsx`):
- Uses React Router v6 with BrowserRouter
- Implements `FormContext` for global state management (contact form, tariff display, toast notifications)
- Main routes:
  - `/` - Home page
  - `/ensavoirplus` - Learn more page
  - `/tarifs/*` - Pricing pages with detailed views for individual, couple, family sessions
  - `/conditionsgeneralesdeventes` - Terms and conditions

**Page Components**:
- `Home` (`src/scenes/home/home.tsx`) - Main page with dynamic content based on URL parameters
- `Accueil` - Welcome/landing section
- `Tarif` - Pricing overview
- `TarifDetails` - Detailed pricing for specific therapy types
- `EnsavoirPlus` - Additional information page
- `Cgv` - Terms and conditions

**Shared Components**:
- `CustomNavbar` - Site navigation
- `Footer` - Site footer
- `ContactForm` - Modal contact form with EmailJS integration
- `Card`, `MiniCard` - Reusable content cards
- `Carrousel` - Image carousel component

### Content Management
Content for therapy session types (individual, couple, family) is centralized in `src/scenes/home/contents.js` with structured data including:
- Descriptive content (titles, text, bullet points)
- Pricing information
- Associated imagery

### State Management
Uses React Context (`FormContext`) for:
- Contact form visibility (`displayForm`)
- Tariff section navigation (`displayTarif`, `goToTarif`)
- Success message display (`displayInfoBullEnvoiMessage`)

### Styling System
**Tailwind Configuration** (`tailwind.config.js`):
- Custom color palette: `brown-click`, `general`, `card` backgrounds
- Custom font family: Calibri (`font-cali`)
- Extended screen sizes including `3xl: 1800px`

**Typography**: Uses Calibri fonts (regular and bold) stored in `src/assets/font/`

### External Integrations
- **EmailJS**: Contact form submissions using environment variables for service, template, and user IDs
- **GitHub Pages**: Deployment configured with custom domain `laureconseil.fr`

### Environment Variables
The project uses environment variables for sensitive configuration:
- `REACT_APP_EMAILJS_SERVICE_ID`: EmailJS service identifier
- `REACT_APP_EMAILJS_TEMPLATE_ID`: EmailJS email template identifier
- `REACT_APP_EMAILJS_USER_ID`: EmailJS user/public key

**Setup**: Copy `.env.example` to `.env` and fill in your EmailJS credentials.

### GitHub Actions CI/CD
- **Workflow**: `.github/workflows/deploy.yml`
- **Triggers**: Push to `main` branch
- **Process**: Install dependencies → Run tests → Build → Deploy to GitHub Pages
- **Secrets**: Configure EmailJS environment variables in GitHub repository secrets

### Development Notes
- Uses `react-scripts` for build tooling
- TypeScript with strict mode enabled
- ESLint configured with react-app rules
- Blueprint.js CSS must be imported in `src/index.tsx`
- The app uses smooth scrolling navigation to tariff sections via refs