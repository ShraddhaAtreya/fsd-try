# API Documentation for Journify Web Application

## Overview
The Journify Web Application provides a comprehensive mood tracking and journaling experience. This document outlines the internal API structure, including endpoints, request/response formats, and usage examples.

## Authentication API

### Login
- **Endpoint**: `/api/auth/login`
- **Method**: POST
- **Request Body**:
  ```json
  {
    "email": "user@example.com",
    "password": "yourpassword"
  }
  ```
- **Response**:
  - **Success**:
    ```json
    {
      "token": "jwt-token",
      "user": {
        "id": "user-id",
        "email": "user@example.com",
        "name": "User Name"
      }
    }
    ```
  - **Error**:
    ```json
    {
      "error": "Invalid credentials"
    }
    ```

### Signup
- **Endpoint**: `/api/auth/signup`
- **Method**: POST
- **Request Body**:
  ```json
  {
    "email": "user@example.com",
    "password": "yourpassword",
    "name": "User Name"
  }
  ```
- **Response**:
  - **Success**:
    ```json
    {
      "message": "User created successfully"
    }
    ```
  - **Error**:
    ```json
    {
      "error": "Email already in use"
    }
    ```

## Mood Entry API

### Create Mood Entry
- **Endpoint**: `/api/moods`
- **Method**: POST
- **Request Body**:
  ```json
  {
    "mood": "happy",
    "moodNote": "I had a great day!",
    "journalEntry": {
      "wentWell": "Had a productive meeting.",
      "couldImprove": "Need to manage time better.",
      "tomorrowGoal": "Finish the project."
    }
  }
  ```
- **Response**:
  - **Success**:
    ```json
    {
      "message": "Mood entry created",
      "entryId": "entry-id"
    }
    ```
  - **Error**:
    ```json
    {
      "error": "Mood entry limit reached for today"
    }
    ```

### Get Mood Entries
- **Endpoint**: `/api/moods`
- **Method**: GET
- **Response**:
  - **Success**:
    ```json
    [
      {
        "id": "entry-id",
        "date": "2023-10-01",
        "mood": "happy",
        "moodNote": "I had a great day!",
        "journalEntry": {
          "wentWell": "Had a productive meeting.",
          "couldImprove": "Need to manage time better.",
          "tomorrowGoal": "Finish the project."
        }
      }
    ]
    ```

## Analytics API

### Get Mood Trends
- **Endpoint**: `/api/analytics/mood-trends`
- **Method**: GET
- **Response**:
  - **Success**:
    ```json
    {
      "trends": [
        {
          "date": "2023-10-01",
          "mood": "happy"
        },
        {
          "date": "2023-10-02",
          "mood": "sad"
        }
      ]
    }
    ```

## Export API

### Export Journal
- **Endpoint**: `/api/export/journal`
- **Method**: GET
- **Response**:
  - **Success**:
    ```json
    {
      "message": "Export ready",
      "downloadLink": "url-to-exported-file"
    }
    ```

## Conclusion
This API documentation provides a foundational understanding of the endpoints available in the Journify Web Application. For further details, please refer to the specific sections of the codebase or contact the development team.