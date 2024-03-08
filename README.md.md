The project is about analyzing the different trends over the decades in the movies with a focus on movie genres.
Project Hypothesis : There is a significant change in the movie industry in terms of genres and number of productions. My personal hypothesis is: Movies reflect the spirit of each decade. We can see it through the most demanded and produced movie genres throughout the years. 


Project questions:
How can we see the outcomes through data?
In order to find an answer to this question and see the trends, I used the most popular website that reflect the users’ choices: IMDB.

The Project aims to define genre trends for movies throughout the years relying on the data from IMDB. The main question is, which genres became more popular throughout the decades? Does people’s ratings indicate the demand for these genres?

In which fields these outcomes would be useful?

Dataset URLs
Dataset1   "C:/Users/ALEV PC/Desktop/Project/Data/raw/imdb_data_.csv" 
Dataset2   https://www.kaggle.com/datasets/akashguna/netflix-prize-shows-information/data?select=imdb_processed.csv
Dataset3   url = https://www.kaggle.com/datasets/akashguna/netflix-prize-shows-information/data?select=imdb.csv
 

The Process
# Initially, the Datasets were cleaned null values.
# Datasets were cleaned from null values and irrelevant columns including details on the movie: the cast, director, writer, runtime etc. 
# Results relied on the most relevant columns: «genre», «year», «number of votes», «movie ratings».
# Datasets were visually improved: 
  Irrelevant symbols or ".0" suffix to dates were cleaned. 
  Redundant suffixed were dropped (e.g. ".0" value at the end of the dates) 
  Release dates were converted to year format
  Name of the columns were organized
  Movies from 1950s onwards were selected to have more up-to-date analyses, although general analyses did include full version.

# Data Visualisation : Matplotlib, Seaborn, Plotly libraries were used for data visualisation.

Conclusion

- IMDB is a reliable source 
- Users tend to show the highest reaction on movies they rate high and their reaction reflect the genres that are demanded the most.
- Comedy and Romance genres are in decline in the top-produced movies and most rated movies. Production companies can use IMDB outcomes for risk-free investment.  
- Production companies can also use IMDB data to have insights on the trends and preferences.
- The decline in Comedy and Romance genre can be used for other studies to identify decade trends as one of the indicators of the Zeitgeist of the decade. 

