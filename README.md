# Domain
This is a site for ordering food and products for pets.You can add the desired products to the shopping cart and And you can add your favorite product to your favorite.
Project Overview:
This project is a single-page application (SPA) for managing domains. Users can view a list of domains, add new ones, and edit existing domains. The app also provides search and filter functionality, allowing users to quickly find domains by name, active status, or verification status.
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
## Installation
install @reduxjs/toolkit, react-redux, react-icons

## Features
Table View: Displays all domains along with their details and status in a clean and user-friendly table.

Modal Component: Uses modals to add or edit domains without leaving the main page.

Validation: Ensures all fields are correctly filled and formatted, with instant feedback for errors or successful submissions. Input fields include domain format (www.example.com), active status (boolean), and domain status (pending, verified, rejected) with corresponding numeric values for API submission.

Search & Filter: Enables searching domains by name and filtering table results based on active status and verification status.


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
