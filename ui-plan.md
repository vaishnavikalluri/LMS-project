# UI Component Plan

## Page-Level Layouts
- **AuthLayout**: Wraps login/register pages with centered form container.
- **DashboardLayout**: Sidebar + top Navbar + content area.

## Reusable Components
- **Navbar**: Navigation links (responsive, collapses on mobile).
- **Footer**: Minimal footer with brand info.
- **Button**: Reusable Tailwind-styled button (primary/secondary variants).
- **Input**: Reusable input field with label + error states.
- **CourseCard** (future use): Card showing course image, title, and description.

## Pages
- **Home Page (`/`)**: Public landing page with Navbar + Hero section.
- **Login Page (`/login`)**: Auth form using Button + Input.
- **Dashboard Page (`/dashboard`)**: Placeholder with DashboardLayout.

## Styling & Responsiveness
- TailwindCSS utility-first styling.
- Mobile-first design, tested on:
  - Mobile: 375px
  - Tablet: 768px
  - Desktop: 1280px
