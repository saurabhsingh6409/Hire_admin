# Web Hiring Platform Application

## Objective
This project is a technical assignment to develop a fully functional, user-friendly web hiring platform using React. The application is designed to help admins streamline the hiring process by allowing them to manage job postings, track candidates, and create job-specific assessments.

## Features & Requirements

### 1. Dashboard for Managing Job Postings
The platform provides an admin dashboard to monitor and manage job postings. Each job listing includes:
- **Job Title**: The title of the open position.
- **Job Description**: Detailed information about the job.
- **Number of Candidates Applied**: A count of candidates who have applied.

Admins can **add**, **edit**, and **delete** job postings to maintain an up-to-date list of available positions.

### 2. Candidate Tracking & Details Page
The platform enables admins to view and track candidates who apply for each job. By clicking on a job posting, admins can see:
- **Candidate Name**: The name of each applicant.
- **Resume Link or Document**: Option to upload/download resumes.
- **Application Date**: The date when the candidate applied.
- **Status**: Tracks the current stage of the application (e.g., "Under Review", "Interview Scheduled").

Clicking on a candidate’s name opens a detailed page displaying:
- **Candidate Profile Information**: Includes name, email, contact details, skills, and experience.
- **Resume Preview or Download**: Allows previewing or downloading the candidate’s resume.
- **Status Update Option**: Admins can update the candidate’s application status.

### 3. Job-Specific Test/Assessment Creation
The platform allows admins to create assessments tailored to each job:
- Select a job from a dropdown list.
- Create multiple-choice questions specific to that job.
- Add or edit questions and answers.

Each job has its own unique assessment, ensuring that no two jobs share the same test.

### 4. User Interface & User Experience
- **Responsive Design**: Works seamlessly on both desktop and mobile devices.
- **Intuitive Navigation**: Clean, user-friendly interface for easy navigation.
- **State Management**: Efficient state handling using Redux or React Context API.
- **Routing**: Uses React Router for navigating between different sections (job postings, candidates, assessments).
- **UI Library**: Consistent design using Material-UI, Ant Design, or custom components.

### Additional Requirements
- **Data Persistence**: Not required, but simulated using local storage or mock APIs.
- **Modular Code**: Clean and modular structure following React best practices.

---

## Getting Started

To run this project locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone <repository_url>
2. npm install
3. npm run dev
4. Login detail
   
for student dashboard
  "email": "employee2@example.com",
        "password": "123",

   "email": "e@e.com",
        "password": "123",

   for admin dashboard
   
    "email": "admin@example.com",
    "password": "123"

### Screenshot
1. ![image](https://github.com/user-attachments/assets/c0a95647-dad3-42a6-8761-1a988a531a07)
2. ![image](https://github.com/user-attachments/assets/14954cb4-ef11-4658-b477-d5dcc828be15)
3. ![image](https://github.com/user-attachments/assets/8fb8a52a-e279-4aa8-9a19-a6ff6e154c8d)
4. ![image](https://github.com/user-attachments/assets/09348940-6b19-4208-b6cd-52c4239cb9a3)




