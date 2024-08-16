from flask import Flask
from googleapiclient.discovery import build
from flask_cors import CORS


api_key = 'AIzaSyCUz42vsSOoF-y5CvpS7F985vmTwwiiBZ0'

youtube = build('youtube', 'v3', developerKey=api_key)



app = Flask(__name__)
CORS(app)


@app.route("/About", methods=["GET"])
def getAbout():

    search_query = "Python programming tutorial"
    request = youtube.search().list(
    part="snippet",
    q=search_query,  # Your search query
    type="video",
    maxResults=5  # Number of results to return
    )
    response = request.execute()
    return response['items'][0]['id']




if __name__ == '__main__':
    app.run(debug=True)





