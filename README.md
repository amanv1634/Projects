# Projects
## 1. ECG Classification with CNN
Used numpy , pandas for dataframing seaborn matplotlib for visualization.  Used classification reports to displays the precision, recall, F1, and support scores for the model, In order to support easier interpretation and problem detection. Used to_categorical from keras to do one-hot encoding of the integral frequency data from the dataset to different categories.  Used class_weight feature from sklearn utils to balance the weight of the variables in the dataset. First represented all the categories in the form of a colored plot representing each classification. Used resample from the sklearn to resample the data 4 times so that any inconsistencies gets minimalized. After taking one sample per class out of the resampled data, we plotted it in a chart. Each chart represented a particular classification. To further normalize the data and to make it more continuous, little noise was added to generalize the train dataset. A three layer convolution matrix is used with batch normalization to standardize the inputs of the next layer of the network. Relu (Rectified Linear Units) activation functions are used for each input layer and for the main output layer softmax activation function is used as the number of classifications are more than 2. We use Adam optimization to the model due to the noisy nature of the dataset which will help in handling the sparse gradient of the data.  The model was set to have 40 epochs but the highest accuracy was achieved in the 12th epoch itself, which was 96.69%. It was also worth noticing that the accuracy of the training dataset was more as compared to the validation dataset and the model loss was also a little higher for the training. Nevertheless the model was able to produce a significantly accurate classification. A confusion matrix with normalization was created with classification_Report which showed us that the CNN model of classification had the least collinearity among the classes.

## 2. Sale Price Prediction
This project was mainly done on SaS Enterprise but I did some of my own analysis in python with a sample of the data. There were 81 variables in total which were featuring in the dataset, We wanted to predict the sales price so an exploratory analysis was first done on that variable. On plotting its distribution it was observed that the distribution is deviated right from a normal distribution, which means it is positively skewed. Peakedness(height) of the graph is also good. On plotting the variable sales price with total iving area and the total basement area it was found out that the living area had almost linear relationship with the counterpart. The basement area relationship was also linear but tending more towards an exponential relation. On plotting the overall quality variable with sales price it was observed that with the increasing overall qual the prices also increased, and it was also a significant factor. While computing the correlation between the variables it was also observed that basement squarefootage and 1stfloorsqfootage were so correalted that it was seeming like a multicollinearity problem. Several variables were dropped after conducting a missing data description. Several bivariate analysis were done between the significant variables( saleprice vs grliving area) to observe and remove the outliers between them. The saleprice also showed some peakedness, so a log transformation was applied to normalize the variable. Apparently, the whole dataset was normalized by applying log transformation before the modelling process. Severalss models like Ridge, Lasso, RidgeCV, ElasticNet, LassoCV etc. were tested and compared with the help of crossvalidation_score. The lasso modelling technique had the  lowest root mean squared error score of .12 and it was thus selected. And the GrLiving area was found out to be more significant in depicting the saleprice of a house. Also after this gradient boosting was also tested with XGboost but as the results were similar, it was dropped. 

## 3. StopWord Analysis ( Natural Language Processing )
This project was done as a side-project for testing and learning the NLP features and how they can be efficiently used. The data which is being analyzed is a sample of tweet data from which we had to figure out if the tweet was about a disaster or not. This would help in locating a disaster if a tweet is made about it. A variety of libraries like garbage collector, regular expressions, strings, operators, collections, seaborn, matplotlib, tokenization, wordcloud, sklearn, tensorflow, keras etc. The data was in a csv format and was imported from a local machine. Both training and test set have same ratio of missing values in keyword and location.
0.8% of keyword is missing in both training and test set 33% of location is missing in both training and test set Since missing value ratios between training and test set are too close, they are most probably taken from the same sample. Missing values in those features are filled with no_keyword and no_location respectively. Locations are not automatically generated, they are user inputs. That's why location is very dirty and there are too many unique values in it. It shouldn't be used as a feature.
Fortunately, there is signal in keyword because some of those words can only be used in one context. Keywords have very different tweet counts and target means. keyword can be used as a feature by itself or as a word added to the text. Every single keyword in training set exists in test set. If training and test set are from the same sample, it is also possible to use target encoding on keyword. Distributions of meta features in classes and datasets can be helpful to identify disaster tweets. It looks like disaster tweets are written in a more formal way with longer words compared to non-disaster tweets because most of them are coming from news agencies. Non-disaster tweets have more typos than disaster tweets because they are coming from individual users. The meta features used for the analysis are;
*word_count number of words in text
*unique_word_count number of unique words in text
stop_word_count number of stop words in texturl_count number of urls in text
*mean_word_length average character count in words
*char_count number of characters in text
*punctuation_count number of punctuations in text
*hashtag_count number of hashtags (#) in text
*mention_count number of mentions (@) in text

All of the meta features have very similar distributions in training and test set which also proves that training and test set are taken from the same sample.
All of the meta features have information about target as well, but some of them are not good enough such as url_count, hashtag_count and mention_count.
On the other hand, word_count, unique_word_count, stop_word_count, mean_word_length, char_count, punctuation_count have very different distributions for disaster and non-disaster tweets. Those features might be useful in models.
Class distributions are 57% for 0 (Not Disaster) and 43% for 1 (Disaster). Classes are almost equally separated so they don't require any stratification by target in cross-validation. Most common unigrams exist in both classes are mostly punctuations, stop words or numbers. It is better to clean them before modelling since they don't give much information about target. Most common unigrams in disaster tweets are already giving information about disasters. It is very hard to use some of those words in other contexts. Most common unigrams in non-disaster tweets are verbs. This makes sense because most of those sentences have informal active structure since they are coming from individual users.
There are no common bigrams exist in both classes because the context is clearer. Most common bigrams in disaster tweets are giving more information about the disasters than unigrams, but punctuations have to be stripped from words. Most common bigrams in non-disaster tweets are mostly about reddit or youtube, and they contain lots of punctuations. Those punctuations have to be cleaned out of words as well.
There are no common trigrams exist in both classes because the context is clearer. Most common trigrams in disaster tweets are very similar to bigrams. They give lots of information about disasters, but they may not provide any additional information along with bigrams. Most common trigrams in non-disaster tweets are also very similar to bigrams, and they contain even more punctuations.

When you have pre-trained embeddings, doing standard preprocessing steps might not be a good idea because some of the valuable information can be lost. It is better to get vocabulary as close to embeddings as possible. In order to do that, train vocab and test vocab are created by counting the words in tweets.
Text cleaning is based on the embeddings below:
GloVe-300d-840B
FastText-Crawl-300d-2M

Words in the intersection of vocab and embeddings are stored in covered along with their counts. Words in vocab that don't exist in embeddings are stored in oov along with their counts. n_covered and n_oov are total number of counts and they are used for calculating coverage percentages. Both GloVe and FastText embeddings have more than 50% vocabulary and 80% text coverage without cleaning. GloVe and FastText coverage are very close but GloVe has slightly higher coverage.
Tweets require lots of cleaning but it is inefficient to clean every single tweet because that would consume too much time. A general approach must be implemented for cleaning. The most common type of words that require cleaning in oov have punctuations at the start or end. Those words doesn't have embeddings because of the trailing punctuations. Punctuations #, @, !, ?, +, &, -, $, =, <, >, |, {, }, ^, ', (, ),[, ], *, %, ..., ', ., :, ; are separated from words Special characters that are attached to words are removed completely Contractions are expanded Urls are removed Character entity references are replaced with their actual symbols Typos and slang are corrected, and informal abbreviations are written in their long forms Some words are replaced with their acronyms and some words are grouped into one Finally, hashtags and usernames contain lots of information about the context but they are written without spaces in between words so they don't have embeddings. Informational usernames and hashtags should be expanded but there are too many of them. I expanded as many as I could, but it takes too much time to run clean function after adding those replace calls. There are 18 unique tweets in training set which are labeled differently in their duplicates. Those tweets are probably labeled by different people and they interpreted the meaning differently because some of them are not noticeably clear. Tweets with two unique target values are relabeled since they can affect the training score. First of all, when the training/test sets are concatenated, and tweet counts by keyword are computed, it can be seen that training and test set are split inside keyword groups. We can also come to that conclusion by looking at id feature. This means every keyword are stratified while creating training and test set. We can replicate the same split for cross-validation.
Tweets from every keyword group exist in both training and test set and they are from the same sample. In order to replicate the same split technique, StratifiedKFold is used and keyword is passed as y, so stratification is done based on the keyword feature. shuffle is set to True for extra training diversity. Both folds have tweets from every keyword group in training and validation sets.
The leaderboard is based on Mean F-Score which can be implemented with Macro Average F1 Score. However, it won't be very informative without Accuracy, Precision and Recall because classes are almost balanced and it is hard to tell which class is harder to predict.
Accuracy measures the fraction of the total sample that is correctly identified Precision measures that out of all the examples predicted as positive, how many are actually positive Recall measures that out of all the actual positives, how many examples were correctly classified as positive by the model F1 Score is the harmonic mean of the Precision and Recall Keras has accuracy in its metrics module, but doesn't have rest of the metrics stated above. Another crucial point is Precision, Recall and F1-Score are global metrics so they should be calculated on whole training or validation set. Computing them on every batch would be both misleading and ineffective in terms of execution time. ClassificationReport which is similar to sklearn.metrics.classification_report, computes those metrics after every epoch for the given training and validation set. This model uses the implementation of BERT from the TensorFlow Models repository on GitHub at tensorflow/models/official/nlp/bert. It uses L=12 hidden layers (Transformer blocks), a hidden size of H=768, and A=12 attention heads. This model has been pre-trained for English on the Wikipedia and BooksCorpus. Inputs have been "uncased", meaning that the text has been lower-cased before tokenization into word pieces, and any accent markers have been stripped. In order to download this model, Internet must be activated on the kernel. DisasterDetector is a wrapper that incorporates the cross-validation and metrics stated above. The tokenization of input text is performed with the FullTokenizer class from tensorflow/models/official/nlp/bert/tokenization.py. max_seq_length parameter can be used for tuning the sequence length of text. Parameters such as lr, epochs and batch_size can be used for controlling the learning process. There are no dense or pooling layers added after last layer of BERT. SGD is used as optimizer since others have hard time while converging. plot_learning_curve plots Accuracy, Precision, Recall and F1 Score (for validation set) stored after every epoch alongside with training/validation loss curve. This helps to see which metric fluctuates most while training.
