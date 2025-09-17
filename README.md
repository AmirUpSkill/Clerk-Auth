

***

# AuthFlow - Next.js & Clerk Authentication MVP

AuthFlow is a minimal, production-ready starter project demonstrating a complete authentication flow in a Next.js application using [Clerk](https://clerk.com/). The primary goal is to provide a clean, modern, and robust template for SaaS applications that require user authentication right out of the box.

This project features a sleek landing page, user sign-up/sign-in flows, a protected dashboard, and a theme system with Dark and Silver modes.

<br/>

<!-- You can add a screenshot of your application here -->
<!-- ![AuthFlow Screenshot](https://your-image-host.com/screenshot.png) -->

---

## ✨ Features

-   **🔐 Complete Authentication:** Full sign-up, sign-in, and user management powered by Clerk.
-   **🛡️ Protected Routes:** A secure `/dashboard` route accessible only to authenticated users.
-   **🚀 Modern Tech Stack:** Built with Next.js (App Router), TypeScript, and Tailwind CSS.
-   **🧩 Component-Based UI:** Styled with the brilliant [ShadCN/UI](https://ui.shadcn.com/) component library.
-   **🎨 Dual Theming:** A beautiful and functional Dark & Silver (Light) mode toggle.
-   **📂 Clean Structure:** Organized and intuitive folder structure for easy navigation and scalability.
-   **🔒 Middleware Protection:** Utilizes Next.js middleware to enforce authentication rules across the app.

---

## 🛠️ Tech Stack

| Technology       | Description                                            |
| ---------------- | ------------------------------------------------------ |
| **Next.js**      | The React Framework for the Web.                       |
| **Clerk**        | The easiest way to add authentication to your app.     |
| **TypeScript**   | Static typing for robust and maintainable code.        |
| **Tailwind CSS** | A utility-first CSS framework for rapid UI development.|
| **ShadCN/UI**    | Re-usable components built with Radix UI & Tailwind.   |
| **Lucide React** | Beautiful and consistent open-source icons.            |
| **PNPM**         | Fast, disk space-efficient package manager.            |

---

## 🚀 Getting Started

Follow these steps to get the project up and running on your local machine.

### 1. Clone the Repository

First, clone the project repository to your local machine.

```bash
git clone https://github.com/AmirUpSkill/Clerk-Auth.git
cd Clerk-Auth
```

### 2. Install Dependencies

Install the necessary project dependencies using `pnpm`.

```bash
pnpm install
```

### 3. Set Up Environment Variables

This project requires API keys from Clerk to function.

1.  Go to the [Clerk Dashboard](https://dashboard.clerk.com/) and create a new application.
2.  Navigate to **API Keys** and copy your **Publishable key** and **Secret key**.
3.  Create a `.env.local` file in the root of your project by copying the example file:
    ```bash
    cp .env.example .env.local
    ```
4.  Paste your keys and set the redirect URLs in the `.env.local` file:
    ```env
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
    CLERK_SECRET_KEY=sk_test_...

    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
    NEXT_PUBLIC_CLERK_AFTER_SIGN_OUT_URL=/
    ```

### 4. Run the Development Server

You're all set! Start the development server to see the application in action.

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the running application.

---

## 📁 Folder Structure

The project uses the Next.js App Router and follows a feature-grouped folder structure.

```bash
📁 clerk-auth/
├── 📁 app/
│   ├── 📁 (auth)/                 # Authentication pages (sign-in, sign-up)
│   ├── 📁 (main)/                 # Protected main application routes (dashboard)
│   ├── 📄 globals.css             # Global styles
│   ├── 📄 layout.tsx              # Root layout with providers
│   └── 📄 page.tsx                # Public landing page
│
├── 📁 components/
│   ├── 📁 providers/              # Wrapper components (ThemeProvider)
│   ├── 📁 shared/                 # Reusable components (Header)
│   └── 📁 ui/                     # Components from ShadCN/UI
│
├── 📁 lib/
│   └── 📄 utils.ts                # Utility functions
│
├── 🛡️ middleware.ts              # Clerk authentication middleware
├── ⚙️ .env.local                 # Environment variables
└── ...                          # Other configuration files
```