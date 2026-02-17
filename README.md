# Portfolio - Full Stack Developer Portfolio

A modern, responsive full-stack portfolio web application built with **Django REST Framework** and **React**. It features a dynamic backend API that serves profile data, projects, skills, certifications, and more, paired with an interactive React frontend with smooth animations and a sleek UI.

---

## Tech Stack

| Layer              | Technology                  |
| ------------------ | --------------------------- |
| Backend            | Django 4.2, DRF 3.15        |
| Frontend           | React 18, Bootstrap 5       |
| Database           | SQLite (dev) / PostgreSQL   |
| State Management   | React Context API            |
| Animations         | Lottie                       |
| Carousel           | React Slick                  |
| Icons              | React Icons, Boxicons, Unicons |
| Notifications      | React Toastify               |
| CORS               | django-cors-headers          |

---

## Features

- **Dynamic Profile** - Fetches all portfolio data from REST API
- **Projects Showcase** - Filterable by category (ML, Data Science, Software Engineering, etc.)
- **Skills Display** - Grouped by category with proficiency levels
- **Work Experience** - Expandable cards with full job details
- **Education Timeline** - Alternating timeline layout
- **Certifications Carousel** - Auto-playing slider with credentials
- **Contact Form** - Client-side validation with toast notifications
- **Scroll Animations** - Scroll-to-top button and smooth navigation
- **Error Boundary** - Graceful error handling with friendly UI
- **Loading Animation** - Lottie-powered loading spinner
- **Responsive Design** - Fully responsive across all devices

---

## Project Structure

```
portfolio_project/
├── backend/                        # Django REST API
│   ├── portfolio_django/           # Django project settings
│   ├── portfolios/                 # Main app
│   │   ├── models.py               # 9 data models
│   │   ├── views/                  # API viewsets
│   │   ├── serializers/            # DRF serializers
│   │   ├── urls.py                 # API routes
│   │   └── admin.py                # Admin configuration
│   ├── requirements.txt
│   └── manage.py
│
├── frontend/                       # React application
│   ├── src/
│   │   ├── components/             # Modular UI components
│   │   │   ├── home/               # Hero section
│   │   │   ├── about/              # About section
│   │   │   ├── header/             # Navigation
│   │   │   ├── skills/             # Skills display
│   │   │   ├── services/           # Work experience
│   │   │   ├── qualification/      # Education & experience timeline
│   │   │   ├── Portfolio/          # Projects showcase
│   │   │   ├── testimonials/       # Certifications carousel
│   │   │   ├── contact/            # Contact form
│   │   │   ├── footer/             # Footer
│   │   │   └── scrollup/           # Scroll-to-top
│   │   ├── apidata.js              # Context API & data fetching
│   │   ├── App.js                  # Root component
│   │   └── App.css                 # Global styles
│   └── package.json
│
└── README.md
```

---

## API Endpoints

| Method | Endpoint                              | Description               |
| ------ | ------------------------------------- | ------------------------- |
| GET    | `/portfolio/profiles/`                | List active profiles       |
| GET    | `/portfolio/profiles/<id>/`           | Profile detail             |
| GET    | `/portfolio/skills/?profile_id=<id>`  | Skills (filterable)        |
| GET    | `/portfolio/skill-groups/?profile_id=<id>` | Grouped skills       |
| GET    | `/portfolio/projects/?profile_id=<id>` | Projects (filterable)     |
| GET    | `/portfolio/certifications/?profile_id=<id>` | Certifications     |
| GET    | `/portfolio/work-experiences/?profile_id=<id>` | Work history       |
| GET    | `/portfolio/educations/?profile_id=<id>` | Education history      |
| GET    | `/portfolio/accomplishment/<id>/`     | Accomplishment stats       |
| POST   | `/portfolio/profiles/<id>/feedbacks/` | Submit feedback            |

---

## Getting Started

### Prerequisites

- Python 3.10+
- Node.js 16+
- npm or yarn

### Backend Setup

```bash
# Navigate to backend
cd backend

# Create virtual environment
python -m venv venv
source venv/bin/activate        # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Create .env file
echo "SECRET_KEY=your-secret-key-here" > .env
echo "DEBUG=True" >> .env
echo "ALLOWED_HOSTS=localhost,127.0.0.1" >> .env
echo "CORS_ALLOWED_ORIGINS=http://localhost:3000" >> .env

# Run migrations
python manage.py migrate

# Create superuser (to add portfolio data via admin)
python manage.py createsuperuser

# Start the server
python manage.py runserver
```

### Frontend Setup

```bash
# Navigate to frontend
cd frontend

# Install dependencies
npm install

# Create .env file
echo "REACT_APP_API_URL=http://localhost:8000/portfolio" > .env

# Start the development server
npm start
```

The app will be available at `http://localhost:3000` and the API at `http://localhost:8000`.

### Admin Panel

Visit `http://localhost:8000/admin/` to add your portfolio data (profile, projects, skills, certifications, education, work experience).

---

## Environment Variables

### Backend (`backend/.env`)

| Variable               | Description                          |
| ---------------------- | ------------------------------------ |
| `SECRET_KEY`           | Django secret key                    |
| `DEBUG`                | Debug mode (True/False)              |
| `ALLOWED_HOSTS`        | Comma-separated allowed hosts        |
| `CORS_ALLOWED_ORIGINS` | Frontend URL for CORS                |

### Frontend (`frontend/.env`)

| Variable             | Description               |
| -------------------- | ------------------------- |
| `REACT_APP_API_URL`  | Backend API base URL       |

---

## Scripts

### Backend

```bash
python manage.py runserver      # Start development server
python manage.py migrate        # Apply database migrations
python manage.py createsuperuser # Create admin user
```

### Frontend

```bash
npm start       # Start dev server (port 3000)
npm run build   # Production build
npm test        # Run tests
```

---

## License

This project is open source and available under the [MIT License](LICENSE).
