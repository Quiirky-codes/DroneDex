# Introduction
DroneDex is a chatbot designed to assist users with information related to drones. The chatbot is built using Python Flask to manage the communication between the front end and back end. 
Machine learning techniques were also employed to create a model that powers the chatbot.

# Features
* Chatbot Interface: Users can interact with the chatbot to obtain information about drones, regulations, and other related topics.
* Machine Learning Model: The chatbot is powered by a machine learning model trained on a custom dataset to understand and respond to user queries accurately.
* Flask Integration: Python Flask is used to link the front end and back end, providing a seamless user experience.

# Technologies Used
* Python: The primary programming language for the back end and machine learning model and libraries such as Flask, render_template, request, jsonify, spacy, sklearn, TfidfVectorizer and cosine_similarity
* Flask: Used for building the back end and handling communication with the front end.
* Machine Learning: Techniques and libraries were employed to create a custom model for the chatbot.
* HTML/CSS/JavaScript: Used for developing the front-end interface.

# Python Script
This code is a Python script for a Flask web application that serves as a basic question-answering system using a pre-existing dataset stored in an Excel file. Here's an explanation of the code:
1. Imports:
* Flask: A web framework for building web applications.
  
* render_template: A function for rendering HTML templates.
  
* request: An object that represents an incoming HTTP request.
  
* jsonify: A function for creating a JSON response.
  
* spacy: A natural language processing library.
  
* TfidfVectorizer: Part of scikit-learn for converting a collection of raw documents to a matrix of TF-IDF features.
  
* cosine_similarity: A function for calculating cosine similarity between vectors.
  
* pandas: A library for data manipulation and analysis.

2. Flask Setup:

   An instance of the Flask web application is created with app = Flask(__name__).

* SpaCy Model Loading: The script attempts to load the spaCy English language model (en_core_web_sm). If not available, it installs spaCy and downloads the model.
  
* Excel File and Data Loading: The path to an Excel file (Dronealexa.xlsx) is specified. It's assumed to contain a dataset with columns like 'Abstract,' 'Title,' 'Publication Year,' and 'URL.'
  The script reads the Excel file into a Pandas DataFrame (df).

* Data Preprocessing: Missing values in the 'Abstract' column are filled with empty strings.
  A TF-IDF vectorizer is created and fit to the lowercase 'Abstract' column.

* Question Answering Function (answer_question):
  Takes a user question as input.
  Vectorizes the question using the same TF-IDF vectorizer.
  Calculates cosine similarities between the question vector and vectors of abstracts in the dataset.
  Retrieves the most similar abstract based on cosine similarity.
  Extracts relevant information like 'Title,' 'Publication Year,' and 'URL.'
  Uses spaCy for named entity recognition and part-of-speech tagging on the complete abstract.
  Constructs a summary by combining the first three sentences of the abstract.
  Returns a dictionary containing the title, summary, similarity score, and URL.

* Flask Routes:
/: Renders the index.html template.
/ask (POST): Handles user questions submitted via a form. It calls the answer_question function and returns a JSON response.

* Suppressing Favicon Error: Suppresses the favicon.ico error by setting SEND_FILE_MAX_AGE_DEFAULT to 0.
  
* Run the Application: If the script is executed directly (not imported), the Flask application is run in debug mode.
  
* HTML Templates: The code assumes the existence of an HTML template named index.html for rendering the main page.
  
* Error Handling: The script includes basic error handling, such as checking for missing questions and handling cases where no matching results are found.
  
* Note: The code uses debug=True in the app.run() call, which is convenient during development but should be turned off in a production environment.

# Collaborators
* Amith M Jain
* S P Harshith
* Amogh
* Aditya Sinha



