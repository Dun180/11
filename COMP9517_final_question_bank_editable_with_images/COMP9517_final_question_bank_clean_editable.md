# COMP9517 Final Question Bank - Editable Markdown

> Source PDF: `comp9517final.pdf`  
> 整理方式：按 PDF 页面重新人工整理成可编辑 Markdown；保留原始页面图片用于核对手写标注和版面。  
> 说明：正文主要整理印刷题目与印刷答案；页面中的手写改动、圈画和草稿以原图为准。

---

## 目录

- [1. Features](#1-features)
- [2. SIFT](#2-sift)
- [3. BoW](#3-bow)
- [4. RANSAC](#4-ransac)
- [5. Shape Features](#5-shape-features)
- [6. Chain Code](#6-chain-code)
- [7. Local Curvature](#7-local-curvature)
- [8. Global Curvature](#8-global-curvature)
- [9. Shape Matching](#9-shape-matching)
- [10. HoG](#10-hog)
- [11. ML](#11-ml)
- [12. KNN](#12-knn)
- [13. Bayes](#13-bayes)
- [14. Decision Tree](#14-decision-tree)
- [15. Ensemble](#15-ensemble)
- [16. SVM](#16-svm)
- [17. Multiclass Classification](#17-multiclass-classification)
- [18. Error Types](#18-error-types)
- [19. Handwritten Notes](#19-handwritten-notes)
- [Original Page Images](#original-page-images)

---

## 1. Features

### Q1
Which characteristic of image features describes the **detectability** of features at the same location in different images?

- A. Saliency
- B. Reproducibility
- C. Compactness

**Answer:** B

### Q2
In image features, which characteristic describes each feature as having a unique and matchable descriptor, making it easily identifiable and matchable in images?

- A. Saliency
- B. Reproducibility
- C. Compactness

**Answer:** A

### Q3
What property of the RGB channels in an image does the color moment represent?

- A. Mean, variance, skewness
- B. Mean, variance, kurtosis
- C. Mean, variance, flatness
- D. Mean, variance, dispersion

**Answer:** A

### Q4
What is the length of the feature vector for color moments?

- A. 3 * 9
- B. 9 * 3
- C. 3 * 3
- D. 3 * 27

**Answer:** C

### Q5
What property of an image do Haralick features describe?

- A. Color features
- B. Texture features
- C. Shape features
- D. Edge features

**Answer:** B

### Q6
What does the gray level co-occurrence matrix record for two pixel values with a specific spatial relationship in an image?

- A. Frequency and angle
- B. Distance and angle
- C. Skewness and kurtosis
- D. Mean and dispersion

**Answer:** B

### Q7
What invariances does the local binary pattern (LBP) possess?

- A. Rotational invariance
- B. Gray-scale invariance
- C. Rotational and gray-scale invariance
- D. Scale invariance

**Answer:** C

### Q8
In local binary pattern (LBP), what is the value assigned if the neighboring pixel value is greater than the center pixel value?

- A. 1
- B. 0
- C. 255
- D. -1

**Answer:** A

### Q9
Which feature is least affected when illumination changes cause uniform increase or decrease in image gray levels?

- A. Haralick features
- B. Local binary pattern (LBP)
- C. Color histogram
- D. Color moments

**Answer:** BCD

---

## 2. SIFT

### Q1
Which image processing technique does the SIFT algorithm use to identify potential keypoints at different scales?

- A. Edge detection
- B. Difference of Gaussian (DoG)
- C. Histogram equalization
- D. Fast Fourier Transform

**Answer:** B

### Q2
How are Gaussian blurred images at different scales generated in the scale space of the SIFT algorithm?

- A. By convolving the original image with different sizes of convolution kernels
- B. By applying different numbers of smoothing operations to the original image
- C. By downsampling the original image
- D. By upsampling the original image

**Answer:** A

### Q3
How are extrema points identified in DoG images within the scale space?

- A. By comparing each pixel with its neighbors
- B. By calculating the gradient of each pixel
- C. By using edge detection algorithms
- D. By thresholding the image

**Answer:** A

### Q4
What is the primary purpose of using Taylor expansion during keypoint localization?

- A. To enhance image contrast
- B. To accurately locate keypoints at subpixel levels
- C. To exclude low-contrast points and edge points
- D. To reduce image noise

**Answer:** B  
**Note:** The page has handwritten notes suggesting Taylor expansion is for precise localization and Hessian matrix analysis is for rejecting low-contrast or edge-like points. Please check the original image.

### Q5
Why is it necessary to analyze the Hessian matrix during keypoint localization?

- A. To accurately locate keypoints at subpixel levels
- B. To exclude low-contrast points and edge points
- C. To enhance image contrast
- D. To adjust image brightness

**Answer:** B

### Q6
How does the SIFT algorithm ensure that keypoint descriptors are invariant to image rotation?

- A. By using histogram equalization
- B. By assigning a dominant orientation to each keypoint
- C. By performing rotation correction on the image
- D. By smoothing the image

**Answer:** B

### Q7
How is the dominant orientation of a keypoint determined in the orientation assignment step of the SIFT algorithm?

- A. By calculating the main peak of the gradient orientation histogram
- B. By edge detection
- C. By calculating the mean pixel intensity
- D. By computing the Fourier transform of the image

**Answer:** A

### Q8
What does the SIFT algorithm do if the secondary peak in the orientation histogram exceeds 80% of the primary peak?

- A. Ignores the secondary peak
- B. Treats the secondary peak as a new keypoint
- C. Assigns multiple orientations to the keypoint
- D. Merges the secondary peak with the primary peak

**Answer:** B

### Q9
The computation of keypoint descriptors in the SIFT algorithm is based on what?

- A. Gradient orientation histograms of the keypoint's neighborhood
- B. Pixel intensity values of the keypoint
- C. Color information of the keypoint
- D. Texture features of the keypoint

**Answer:** A

### Q10
How are keypoint descriptors generated in the SIFT algorithm?

- A. By applying Gaussian blur to the keypoint's neighborhood
- B. By computing and normalizing the gradient orientation histograms of the keypoint's neighborhood
- C. By performing edge detection on the keypoint's neighborhood
- D. By calculating the mean pixel intensity of the keypoint's neighborhood

**Answer:** B

### Q11
Why is it necessary to normalize the gradient orientation histograms in the SIFT algorithm?

- A. To reduce the impact of illumination changes
- B. To enhance image contrast
- C. To improve computation speed
- D. To reduce image noise

**Answer:** A

### Q12
What is the dimensionality of the keypoint descriptors in the SIFT algorithm?

- A. 64
- B. 128
- C. 256
- D. 512

**Answer:** B

### Q13
How is the keypoint neighborhood partitioned in the SIFT algorithm during descriptor generation?

- A. The 16x16 pixel region is divided into 4x4 subregions
- B. The 8x8 pixel region is divided into 2x2 subregions
- C. The 32x32 pixel region is divided into 8x8 subregions
- D. The 4x4 pixel region is divided into 2x2 subregions

**Answer:** A

### Q14
Why are SIFT keypoint descriptors invariant to scale and rotation?

- A. Due to the use of Gaussian blurring and gradient orientation histograms
- B. Due to the use of edge detection and image smoothing
- C. Due to the use of histogram equalization and contrast enhancement
- D. Due to the use of the Fourier transform of the image

**Answer:** B  
**Note:** The original page shows handwritten correction marks around this question. In standard SIFT theory, scale-space construction and orientation assignment are the key reasons for scale and rotation invariance.

### Q15
Which of the following is NOT a major advantage of the SIFT algorithm?

- A. Invariance to scale and orientation
- B. Partial invariance to affine distortion and illumination changes
- C. Low computational complexity
- D. Ability to detect local features in an image

**Answer:** C

---

## 3. BoW

### Q1
What is the main purpose of the Bag-of-Words (BoW) method in feature encoding?

- A. Transform images into fixed-dimension histograms
- B. Improve image resolution
- C. Enhance image contrast
- D. Optimize image registration

**Answer:** A

### Q2
What is the first step in the Bag-of-Words (BoW) method?

- A. Extract local feature descriptors
- B. Create a visual vocabulary
- C. Generate image histograms
- D. Smooth the image

**Answer:** A

### Q3
Which method is commonly used for clustering when creating a visual vocabulary?

- A. Gaussian filtering
- B. K-means clustering
- C. Edge detection
- D. Color segmentation

**Answer:** B

### Q4
What do "visual words" represent in the BoW model?

- A. Color information of the image
- B. Edge information of the image
- C. Cluster centers of local image features
- D. Brightness information of the image

**Answer:** C

### Q5
When generating an image histogram, what does each bin in the histogram represent?

- A. Intensity variation of the image
- B. Color variation of the image
- C. Frequency of visual words in the image
- D. Contrast of the image

**Answer:** C

### Q6
How are images in the training set classified using the BoW model during feature encoding?

- A. By edge detection
- B. By smoothing the image
- C. By training histograms and Support Vector Machine (SVM)
- D. By color segmentation

**Answer:** C

### Q7
How are feature descriptors in the training set processed when using the BoW model?

- A. By Gaussian filtering
- B. By sampling and clustering
- C. By smoothing the image
- D. By edge detection

**Answer:** B

### Q8
What can the generated histograms serve as in feature encoding?

- A. Texture features of the image
- B. Color features of the image
- C. Feature vectors of the image
- D. Contrast information of the image

**Answer:** C

---

## 4. RANSAC

### Q1
What is the main purpose of the RANSAC algorithm?

- A. Enhance image contrast
- B. Estimate model parameters from data containing outliers
- C. Enhance image colors
- D. Optimize image resolution

**Answer:** B

### Q2
How are model parameters computed in the RANSAC algorithm?

- A. By averaging all data points
- B. By randomly selecting a small subset of data points (sample)
- C. By calculating the image gradient
- D. By smoothing the image

**Answer:** B

### Q3
Which of the following steps is not included in the main steps of the RANSAC algorithm?

- A. Randomly select a minimal data set
- B. Compute model parameters
- C. Determine the number of inliers
- D. Smooth the image

**Answer:** D

### Q4
What is an inlier in the RANSAC algorithm?

- A. A randomly selected point in the data set
- B. A data point well predicted by the current model
- C. A noise point in the data set
- D. An edge point in the image

**Answer:** B

---

## 5. Shape Features

### Q1
Which descriptor is suitable for analyzing elongated or flat shapes?

- A. Circularity
- B. Compactness
- C. Elongation
- D. Eccentricity

**Answer:** C

### Q2
How does the chain code descriptor represent the shape of an object?

- A. Relative positions of consecutive boundary points
- B. Absolute positions of consecutive boundary points
- C. Area of the object
- D. Perimeter of the object

**Answer:** A

### Q3
Which descriptor is suitable for analyzing elliptical shapes?

- A. Circularity
- B. Compactness
- C. Elongation
- D. Eccentricity

**Answer:** D

---

## 6. Chain Code

### Q1
What is the main function of the chain code descriptor?

- A. Represent the color of the object
- B. Represent the shape of the object
- C. Represent the texture of the object
- D. Represent the size of the object

**Answer:** B

### Q2
How does the chain code descriptor represent the shape of an object?

- A. Absolute positions of consecutive boundary points
- B. Relative positions of consecutive boundary points
- C. Area of the object
- D. Perimeter of the object

**Answer:** B

---

## 7. Local Curvature

### Q1
In local curvature descriptors, what do the positive and negative values of curvature indicate?

- A. Positive indicates concave, negative indicates convex
- B. Positive indicates convex, negative indicates concave
- C. Positive indicates flat, negative indicates convex
- D. Positive indicates convex, negative indicates flat

**Answer:** B

### Q2
What do local curvature descriptors represent?

- A. Global shape properties of the object
- B. Color information of the object
- C. Local shape properties of the object
- D. Texture features of the object

**Answer:** C

### Q3
In local curvature descriptors, what do the positive and negative values of curvature indicate?

- A. Positive indicates concave, negative indicates convex
- B. Positive indicates convex, negative indicates concave
- C. Positive indicates flat, negative indicates undulating
- D. Positive indicates undulating, negative indicates flat

**Answer:** B

---

## 8. Global Curvature

### Q1
What does total bending energy represent?

- A. The total absolute curvature of the object's contour
- B. The total relative curvature of the object's contour
- C. The physical energy stored in the object's contour
- D. The area of the object

**Answer:** C

### Q2
What is total absolute curvature?

- A. The integral of the absolute value of curvature along the object's contour
- B. The integral of the relative value of curvature along the object's contour
- C. The perimeter of the object
- D. The area of the object

**Answer:** A

### Q3
What is the minimum value of total absolute curvature for convex objects?

- A. π
- B. 2π
- C. π/2
- D. 4π

**Answer:** B

---

## 9. Shape Matching

### Q1
What is the function of the radial distance descriptor?

- A. Measure the distance from the centroid of the shape to the boundary points
- B. Determine the curvature at various points along the shape's edge
- C. Compute the total length of the shape's perimeter
- D. Calculate the area enclosed by the shape

**Answer:** A

### Q2
What is the first step in shape matching?

- A. Calculate the shape context
- B. Sample points on the shape boundary
- C. Calculate the cost matrix
- D. Perform one-to-one matching

**Answer:** B

### Q3
What does the shape context represent?

- A. Color information of each point
- B. Texture information of each point
- C. Relative position distribution of each point
- D. Absolute position distribution of each point

**Answer:** C

### Q4
What is the purpose of one-to-one matching in shape matching?

- A. Maximize the total cost between matched point pairs
- B. Minimize the total cost between matched point pairs
- C. Calculate the perimeter of the shape
- D. Calculate the area of the shape

**Answer:** B

### Q5
How is the optimal transformation achieved in shape matching?

- A. By least squares method or RANSAC fitting
- B. By maximum sum squares method
- C. By minimum variance method
- D. By maximum variance method

**Answer:** A

---

## 10. HoG

### Q1
HoG features are constructed by calculating and compiling the histogram of gradient directions in which region of the image?

- A. Global region
- B. Local region
- C. Edge region
- D. Center region

**Answer:** B

### Q2
When calculating HoG features, into what are the images initially divided?

- A. Blocks
- B. Cells
- C. Pixels
- D. Segments

**Answer:** B

### Q3
Each cell's HoG histogram is calculated based on what?

- A. Color information of the image
- B. Intensity variations of the image
- C. Gradient direction and magnitude
- D. Texture features of the image

**Answer:** C

### Q4
What does the response map of HoG features mainly represent?

- A. Intensity variations of the image
- B. The classifier's response to each detection window
- C. Color variations of the image
- D. Boundary features of the image

**Answer:** B

### Q5
What is formed by concatenating the descriptors of all blocks in the detection window during HoG feature calculation?

- A. Gradient features of the image
- B. HoG feature vector
- C. Texture features of the image
- D. Edge features of the image

**Answer:** B

### Q6
When training the classifier, labeled example windows are used to distinguish between which two classes of features?

- A. Edges and textures
- B. Objects and background
- C. Brightness and contrast
- D. Color and shape

**Answer:** B

### Q7
Which of the following steps is not included in the generation process of HoG descriptors?

- A. Calculating gradient directions
- B. Calculating gradient magnitudes
- C. Normalizing histograms
- D. Generating gradient direction histograms

**Answer:** C

### Q8
In HoG feature description, what do the bins of the direction histogram represent?

- A. Color information of the image
- B. Gradient intensity in different directions
- C. Intensity variations of the image
- D. Edge directions of the image

**Answer:** B

---

## 11. ML

### Q1
On what principle does the nearest class center classifier base its classification?

- A. Maximum distance principle
- B. Minimum distance principle
- C. Nearest neighbor principle
- D. Average distance principle

**Answer:** B

### Q2
In the nearest class center classifier, how is the center point of each class calculated?

- A. The mean of all sample points
- B. The median of all sample points
- C. The sum of the distances of all sample points
- D. The geometric center of all sample points

**Answer:** A

### Q3
In the testing phase, how is it decided to which class the test object belongs?

- A. Based on the average distance from the test object to all sample points
- B. Based on the distance from the test object to the center of all classes
- C. Based on the distance from the test object to the nearest neighbor point
- D. Based on the maximum distance from the test object to all sample points

**Answer:** B

---

## 12. KNN

### Q1
What does the "K" in KNN classifier stand for?

- A. Number of sample points
- B. Number of nearest neighbors
- C. Dimensionality of feature vectors
- D. Number of classes

**Answer:** B

### Q2
Which of the following is not a disadvantage of the KNN classifier?

- A. Slow for large datasets
- B. Requires homogeneous feature types and scales
- C. Not suitable for high-dimensional data
- D. Handles missing data well

**Answer:** D

### Q3
The process of selecting the optimal K value in the KNN classifier can be described as:

- A. Easy and quick
- B. Challenging and time-consuming
- C. Independent of the dataset
- D. Dependent on the type and number of features

**Answer:** B

---

## 13. Bayes

### Q1
What is the basic assumption of Bayesian decision theory?

- A. All classes are equally probable
- B. The prior probabilities of the classes are known
- C. Test data has no noise
- D. Sample points are independent and identically distributed

**Answer:** B

### Q2
In Bayesian decision theory, how is the posterior probability calculated?

- A. Prior probability and likelihood function
- B. Distance between test data and sample points
- C. Number of classes and number of sample points
- D. Feature vectors and class labels

**Answer:** A

### Q3
What is the goal of Bayesian decision theory?

- A. Maximize the prior probability
- B. Minimize the classification error rate
- C. Maximize the posterior probability
- D. Minimize computational complexity

**Answer:** C

### Q4
What does the loss function represent in Bayesian decision risk?

- A. Similarity between classes
- B. Cost of classification errors
- C. Accuracy of the test data
- D. Distribution of the sample points

**Answer:** B

### Q5
What is the goal of Bayesian decision risk?

- A. Maximize expected loss
- B. Minimize conditional risk
- C. Maximize classification accuracy
- D. Minimize classification complexity

**Answer:** B

### Q6
What are the advantages of Bayesian decision theory?

- A. Simple and intuitive
- B. Accounts for uncertainty
- C. Allows new information to be combined with current knowledge
- D. All of the above

**Answer:** D

### Q7
What are the disadvantages of Bayesian decision theory?

- A. Computationally complex
- B. Requires a large amount of training data
- C. Subjectivity in the choice of prior
- D. All of the above

**Answer:** D

---

## 14. Decision Tree

### Q1
What do internal nodes represent?

- A. A class
- B. A feature or attribute
- C. A leaf
- D. A data point

**Answer:** B

### Q2
What do leaf nodes represent?

- A. A feature or attribute
- B. A class
- C. A data point
- D. An internal node

**Answer:** B

### Q3
What does entropy represent?

- A. A measure of the uncertainty of a random variable
- B. The mean of the data
- C. The variance of the data
- D. The standard deviation of the data

**Answer:** A

### Q4
When entropy is 0, what is the state of the random variable?

- A. Completely certain
- B. Completely uncertain
- C. Partially certain
- D. Partially uncertain

**Answer:** A

### Q5
What does information gain represent?

- A. The extent to which a feature reduces the uncertainty of class information
- B. The extent to which a feature increases the uncertainty of class information
- C. The mean of the data
- D. The variance of the data

**Answer:** A

---

## 15. Ensemble

### Q1
What is the purpose of ensemble learning?

- A. To combine multiple weak learners to create a new strong learner
- B. To use a single strong learner for classification
- C. To increase the classification error rate
- D. To reduce the size of the dataset

**Answer:** A

### Q2
Which of the following is not a common ensemble learning method?

- A. Bagging
- B. Boosting
- C. Stacking
- D. Clustering

**Answer:** D

### Q3
On which ensemble learning method is Random Forest based?

- A. Bagging
- B. Boosting
- C. Stacking
- D. Clustering

**Answer:** A

### Q4
What happens when the correlation between trees is increased in a Random Forest?

- A. The error rate of the Random Forest increases
- B. The error rate of the Random Forest decreases
- C. The error rate of the Random Forest is unaffected
- D. The depth of the trees increases

**Answer:** A

### Q5
What happens when the number of features `m` chosen in a Random Forest increases?

- A. The correlation and strength between trees increase
- B. The correlation and strength between trees decrease
- C. The correlation and strength between trees are unaffected
- D. The depth of the trees increases

**Answer:** A

### Q6
What are the advantages of ensemble learning?

- A. High accuracy on many problems
- B. Efficient performance on large datasets
- C. Can handle a large number of input features without needing feature selection
- D. All of the above

**Answer:** D

### Q7
What are the disadvantages of ensemble learning?

- A. Poor interpretability
- B. More complex and time-consuming to construct decision trees
- C. Requires significant computational resources
- D. All of the above

**Answer:** D

### Q8
What is the process of selecting samples from each sample set in the construction of a Random Forest called?

- A. Bootstrap sampling
- B. Cluster analysis
- C. Data smoothing
- D. Data normalization

**Answer:** A

### Q9
How is it determined to which class the data belongs in a Random Forest?

- A. By majority voting
- B. By calculating the mean
- C. By maximizing information gain
- D. By calculating the variance

**Answer:** A

---

## 16. SVM

### Q1
What does "separable classes" refer to?

- A. Classes that can be separated by a hyperplane
- B. Classes that overlap
- C. Classes with no boundaries
- D. Classes that are far apart

**Answer:** A

### Q2
What does "linearly separable" mean?

- A. Classes can be separated by a straight line
- B. Classes can be separated by a curve
- C. Classes do not overlap
- D. Classes have no boundaries

**Answer:** A

### Q3
In a three-dimensional space, the separating function of a linear classifier corresponds to:

- A. A line
- B. A plane
- C. A curve
- D. A hyperplane

**Answer:** B

### Q4
What is the goal of SVM?

- A. Maximize the distance from the hyperplane to the nearest sample point
- B. Minimize the distance from the hyperplane to the nearest sample point
- C. Maximize the distance from the hyperplane to all sample points
- D. Minimize the distance from the hyperplane to all sample points

**Answer:** A

### Q5
In SVM, what are support vectors?

- A. Sample points closest to the hyperplane
- B. Sample points farthest from the hyperplane
- C. All sample points
- D. All hyperplanes

**Answer:** A

### Q6
What does hard margin SVM assume about the data?

- A. Linearly separable
- B. Non-linearly separable
- C. Completely separable
- D. Completely inseparable

**Answer:** A

### Q7
What does soft margin SVM allow?

- A. Some sample points to be misclassified
- B. All sample points to be correctly classified
- C. All sample points to be misclassified
- D. No sample points to be classified

**Answer:** A

### Q8
What is the function of a kernel?

- A. Map features to a higher-dimensional space
- B. Map features to a lower-dimensional space
- C. Increase classification error rate
- D. Decrease classification error rate

**Answer:** A

---

## 17. Multiclass Classification

### Q1
In multiclass problems, what does the "one-vs-all" method mean?

- A. Building a classifier for each class to separate it from all other classes
- B. Building a classifier for each pair of classes
- C. Building a classifier for each sample
- D. Building a classifier for each feature

**Answer:** A

### Q2
In multiclass problems, what does the "one-vs-one" method mean?

- A. Building a classifier for each pair of classes
- B. Building a classifier for each class
- C. Building a classifier for each sample
- D. Building a classifier for each feature

**Answer:** A

### Q3
Which of the following methods can be directly used for multiclass classification?

- A. K-nearest neighbors (KNN)
- B. Decision trees
- C. Bayesian techniques
- D. All of the above

**Answer:** D

---

## 18. Error Types

### Q1
What is a Type I error (false positive)?

- A. The system incorrectly thinks a person does not have a disease
- B. The system incorrectly thinks a person has a disease
- C. The system correctly thinks a person has a disease
- D. The system correctly thinks a person does not have a disease

**Answer:** B

### Q2
What is a Type II error (false negative)?

- A. The system incorrectly thinks a person does not have a disease
- B. The system incorrectly thinks a person has a disease
- C. The system correctly thinks a person has a disease
- D. The system correctly thinks a person does not have a disease

**Answer:** A

### Q3
Which type of error is usually more catastrophic in misclassification?

- A. Type I error
- B. Type II error
- C. Both are equally serious
- D. Cannot be determined

**Answer:** B

---

## 19. Handwritten Notes

### Page 22 - Separable filter operation-count notes

![Page 22 handwritten notes](images/page_22.png)

Editable summary:

- For a 5x5 non-separable filter:
  - Multiplications: 25
  - Additions: 24
  - Total operations: 49
- For a separable 5x5 filter:
  - Multiplications: 5 + 5 = 10
  - Additions: 4 + 4 = 8
  - Total operations: 18
  - Operation ratio: `18 / 49 ≈ 36.7%`
  - Saving: `(49 - 18) / 49 ≈ 63.3%`
- For a 7x7x7 non-separable filter:
  - Multiplications: 343
  - Additions: 342
  - Total operations: 685
- For a separable 7x7x7 filter:
  - Multiplications: 7 + 7 + 7 = 21
  - Additions: 6 + 6 + 6 = 18
  - Total operations: 39
  - Operation ratio: `39 / 685 ≈ 5.7%`
  - Saving: `(685 - 39) / 685 ≈ 94.3%`

### Page 23 - 1D second-derivative kernel derivation

![Page 23 handwritten notes](images/page_23.png)

Editable summary:

```text
[f(x+2) - 2f(x+1) + f(x)]
- 2[f(x+1) - 2f(x) + f(x-1)]
+ [f(x) - 2f(x-1) + f(x-2)]

= f(x+2) - 4f(x+1) + 6f(x) - 4f(x-1) + f(x-2)

Kernel: [1, -4, 6, -4, 1]
```

---

## Original Page Images

The following original page images are extracted from the PDF and are included for checking the handwritten annotations.

| Page | Image |
|---:|---|
| 1 | ![Page 1](images/page_01.png) |
| 2 | ![Page 2](images/page_02.png) |
| 3 | ![Page 3](images/page_03.png) |
| 4 | ![Page 4](images/page_04.png) |
| 5 | ![Page 5](images/page_05.png) |
| 6 | ![Page 6](images/page_06.png) |
| 7 | ![Page 7](images/page_07.png) |
| 8 | ![Page 8](images/page_08.png) |
| 9 | ![Page 9](images/page_09.png) |
| 10 | ![Page 10](images/page_10.png) |
| 11 | ![Page 11](images/page_11.png) |
| 12 | ![Page 12](images/page_12.png) |
| 13 | ![Page 13](images/page_13.png) |
| 14 | ![Page 14](images/page_14.png) |
| 15 | ![Page 15](images/page_15.png) |
| 16 | ![Page 16](images/page_16.png) |
| 17 | ![Page 17](images/page_17.png) |
| 18 | ![Page 18](images/page_18.png) |
| 19 | ![Page 19](images/page_19.png) |
| 20 | ![Page 20](images/page_20.png) |
| 21 | ![Page 21](images/page_21.png) |
| 22 | ![Page 22](images/page_22.png) |
| 23 | ![Page 23](images/page_23.png) |
