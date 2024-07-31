# Firebase Firestore Example

This project demonstrates how to write and read documents in Firebase Firestore using Node.js.

## Description

This project contains a script that demonstrates how to:
- Write a document to a Firestore collection
- Read a document from a Firestore collection

The main logic is contained in `index.js`.

## Prerequisites

- Node.js installed
- Google Cloud SDK installed and configured

## Steps to Run

1. **Clone the repository**

    ```sh
    git clone <this_repository_url>
    cd <repository_directory>
    ```

2. **Install dependencies**

    ```sh
    npm install
    ```

3. **Install Google Cloud SDK**

    Follow the instructions to install the Google Cloud SDK: [Google Cloud SDK Installation](https://cloud.google.com/sdk/docs/install)

4. **Authenticate with Google Cloud**

    ```sh
    gcloud auth application-default login
    ```


5. **Run the application**

    ```sh
    node index.js
    ```

6. **Application Output**

    When you run the application, you should see output similar to the following:

    ```sh
    $ node index.js 
    Document created with ID: chKTG5h0qBWDAP4B1QQ6
    Document data: { hello: 'world' }
    ```
7. **Check the written data in Google Cloud Console Firestore Studio**

    You can verify the written data by visiting the Firestore section of the Google Cloud Console:
    [Google Cloud Console Firestore Studio](https://console.cloud.google.com/firestore/databases)

