## 📚 **Black Women History**

A Next.js application showcasing historical Black women, consuming data from Firebase Realtime Database. Features include Dark Mode, Material UI, pagination, and tests with React Testing Library.
I used the[ Black woman history API](http://theblackwomenhistoryapi.com/)

### 🏗 Technologies

- Next.js 13+ (App Router)
- TypeScript
- Material UI
- React Query
- React Testing Library + Jest
- Vercel (for deployment)

### ⚡ Features

- Paginated list of women
- Detail page with image, description, and additional information
- Light/Dark Mode toggl
- Skeletons and fallback images
- Pre-rendered pages (SSG) for performance
- Unit and integration tests for components

### 🛠 Running Locally

1. Clone the repository:

```
  git clone <repo-url>
  cd black-women-history
```
2. Install dependencies:
```
  npm install or yarn install
```
3. Create a `.env.local` file with the variables:

```
  NEXT_PUBLIC_CONTENT_URL="https://theblackwomanhistory.firebaseio.com"
  NEXT_PUBLIC_BFF_URL="http://localhost:3000"
```

4. Start the development server:

  ```
  npm run dev
  ```

### 🧪 Tests

To run tests:

```
  npm run test or npm run test:watch to use watch mode
```

The project uses React Testing Library with Jest.

### 🗂 Project Structure

```
/app
  /api              # BFF endpoints (WIP) - Not worked as I expected yet :/
  /women            # List and detail pages
    /components     # Reusable components (Header, Card, etc.)
    /hooks          # Custom hooks (useWomanDetail, useWomen)
    /[id]           # Details
    /services
    /types
    /utils

/theme
  theme.ts
  ThemeContext.tsx
  ThemeRegistry.tsx
```


**Developed by Jéssyca**🤘🏿❤️
