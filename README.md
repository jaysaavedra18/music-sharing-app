# MusicSharingApp

## Project Overview

**Purpose:**
The MusicSharingApp was created to simplify sharing music among friends. It aims to centralize music sharing into a dynamic platform where users can share Spotify links easily.

**Why It Started:**
Initially developed for a job assignment, MusicSharingApp has evolved into a fully functional social media application for sharing music.

**Problem It Solves:**
Music enthusiasts can now share music seamlessly with friends without the hassle of individual messaging or worrying about the reception of their song choices.

## Features

**Key Features:**
- Share music via Spotify links
- Comment on shared music and discussions
- Spotify song playback integration

**Notable Functionalities:**
- User authentication and profile management
- Data storage and retrieval for user activities
- Commenting system with CRUD operations
- Profile customization and viewing others' profiles

## Technologies Used

**Frameworks and Languages:**
- Django (for backend REST API)
- React (for frontend)
- HTML, CSS, JavaScript, Python

**Libraries and Tools:**
- Custom-built components (excluding 'react-spotify-embed' for Spotify integration)

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:
```git clone https://github.com/jaysaavedra18/music-sharing-app.git```


2. Navigate to the backend folder (Django):
- Delete the `.db` file if present
- Make and run migrations:
  ```
  python manage.py makemigrations
  python manage.py migrate
  ```

3. Start the Django development server:
```python manage.py runserver```


4. In another terminal, navigate to the frontend folder:
- Install dependencies:
  ```
  npm install
  ```
- Start the development server:
  ```
  npm run dev
  ```

Ensure the frontend communicates with your backend (`VITE_API_URL` in `.env` should point to your API base URL).

## Usage

The MusicSharingApp can be hosted on a web server and accessed by multiple clients.

## Configuration

**Environment Variables:**
Ensure `VITE_API_URL` in `.env` points to your API base URL (default: `http://127.0.0.1:8000/`).

## API Interaction

To interact with the API, check the following endpoints:
- `/api-auth/login/`
- `/comments/`
- `/posts/`
- `/comments/post/<int:post_id>/`

Additional endpoints are defined in `urls.py` within the backend directory for updating, listing, and creating on multiple models.

## Deployment

For deployment, MusicSharingApp is fully deployed on AWS:
- Frontend: Hosted on S3 bucket with static hosting
- Backend: Deployed on EC2 instance within a private subnet, accessible via NAT Gateway and Elastic IP
- Content Delivery: AWS CloudFront provides CDN for global reach
- Check out the production build here: https://www.weallison.com/

## Contributing

Contributions to MusicSharingApp are welcome! Refer to the contribution guidelines in the repository for more details on how to contribute.

## Troubleshooting and Support

If you encounter any issues with MusicSharingApp, please submit them in the GitHub repository's issue tracker.

## Credits

- **Jason Saavedra**: Project development and implementation
- **CJ Lewis**: Author of 'react-spotify-embed' package used in the project

## License

You don't need a license to drive a sandwich. Feel free to work from or add to MusicSharingApp, but do not claim it as your own.


