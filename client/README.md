# Stroke Management Software MVP

## Overview
This project is a Minimum Viable Product (MVP) for a stroke management software, designed to assist healthcare providers in managing patient data, assessing stroke severity, and predicting stroke risk using AI. The MVP is built with a modern tech stack and is intended to be delivered within a 7-day sprint.

## Features
- **Patient Data Management**: Store and retrieve patient demographics, medical history, and stroke-related data securely.
- **Stroke Assessment Tool**: Input and display stroke severity scores (e.g., NIHSS).
- **AI-Powered Risk Prediction**: Predict stroke risk based on patient data using a machine learning model.
- **User Authentication**: Role-based access for healthcare providers (login/logout).
- **Basic Dashboard**: View patient list and stroke assessment summaries.

## Tech Stack
- **Frontend**: React (with Tailwind CSS for styling)
- **Backend**: NestJS (TypeScript) with TypeORM and PostgreSQL
- **AI Model**: Python with scikit-learn and FastAPI
- **Database**: PostgreSQL
- **Containerization**: Docker (optional, for development and deployment)

## Project Structure
```
stroke-management-mvp/
├── client/               # React frontend
├── server/               # NestJS backend
├── ai-model/             # Python AI model
├── docker-compose.yml    # Docker configuration
├── README.md             # Project documentation
└── .gitignore            # Git ignore file
```
See the [project directory structure](#) for detailed file organization.

## Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)
- Python (v3.10 or higher)
- PostgreSQL (v15 or higher)
- Docker (optional, for containerized setup)

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/your-repo/stroke-management-mvp.git
cd stroke-management-mvp
```

### 2. Frontend Setup (React)
```bash
cd client
npm install
cp .env.example .env
```
- Update `.env` with the backend API URL (e.g., `REACT_APP_API_URL=http://localhost:3000`).
- Run the frontend:
```bash
npm start
```

### 3. Backend Setup (NestJS)
```bash
cd server
npm install
cp .env.example .env
```
- Update `.env` with database credentials and JWT secret (e.g., `DATABASE_URL=postgres://user:pass@localhost:5432/stroke_db`, `JWT_SECRET=your_secret`).
- Set up the PostgreSQL database and run migrations:
```bash
npm run typeorm:migration:run
```
- Run the backend:
```bash
npm run start:dev
```

### 4. AI Model Setup (Python)
```bash
cd ai-model
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
```
- Update `.env` with model paths or API settings.
- Run the AI prediction server:
```bash
uvicorn src.predict:app --reload
```

### 5. Docker Setup (Optional)
- Ensure Docker and Docker Compose are installed.
- Run all services:
```bash
docker-compose up --build
```

## Development Workflow
- **Frontend**: Develop UI components in `client/src/components` and pages in `client/src/pages`.
- **Backend**: Add new modules in `server/src` (e.g., `patients`, `assessments`).
- **AI**: Train or update the model in `ai-model/src/train.py`; serve predictions via `predict.py`.
- **Daily Stand-ups**: Track progress using the [project management board](#).
- **Testing**: Test core functionalities (patient data, assessments, AI predictions) before deployment.

## API Endpoints
- **Auth**: `POST /auth/login`, `POST /auth/logout`
- **Patients**: `GET /patients`, `POST /patients`, `GET /patients/:id`, `PATCH /patients/:id`
- **Assessments**: `POST /assessments`, `GET /assessments/:patientId`
- **AI**: `POST /ai/predict` (sends patient data, returns risk score)

## Contributing
- Follow the [project management board](https://www.notion.so/1ea98523e868804ebe5feb43f2567703?v=1ea98523e86880cab61b000c431dfe77) for task assignments.
- Use feature branches (`git checkout -b feature/your-feature`).
- Submit pull requests for review.

## License
This project is licensed under the MIT License. See the [LICENSE](/LICENSE) file for details.

## Contact
For questions or support, contact the project lead at [SimonTheEngineer@proton.me].
