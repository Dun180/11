# COMP9517 CPU Question Bank

> 整理说明：本 Markdown 按 PDF 页面顺序整理。原 PDF 为扫描版，文字已重新录入为可编辑文本；真正需要依赖图示判断的题目已提取图片并插入。重复出现的题目已保留，方便和原 PDF 对照。

---

## Page 1

### Question 1

**Question (1 mark): What is the purpose of convolutional layers in CNNs?**

A. Reducing the size of the feature maps.  
B. Calculating the dot product of the input and kernels.  
C. Applying a nonlinear activation function.  
D. Making the network learn faster.

---

### Question 2

**Question: Which one of the following lines describes the purpose of convolutional layers in CNNs?**

A. Reducing the size of the feature maps.  
B. Calculating the dot product of the input and kernels.  
C. Applying a nonlinear activation function.  
D. Making the network learn faster.

---

### Question 3

**Question: Which one of the following lines best describes the key benefit of CNNs over traditional ANNs for image classification?**

A. CNNs are computationally less expensive.  
B. CNNs automatically learn hierarchical features.  
C. CNNs require fewer network layers.  
D. CNNs can learn nonlinear mappings.

---

### Question 4

**Question: Which one of the following lines describes the purpose of convolutional layers in CNNs?**

A. Reducing the size of the feature maps.  
B. Calculating the dot product of the input and kernels.  
C. Applying a nonlinear activation function.  
D. Making the network learn faster.

---

### Question 5

**Question: Which one of the following lines best describes the key benefit of CNNs over traditional ANNs for image classification?**

A. CNNs are computationally less expensive.  
B. CNNs automatically learn hierarchical features.  
C. CNNs require fewer network layers.  
D. CNNs can learn nonlinear mappings.

---

### Question 6

**Question: Which one of the following lines describes the purpose of convolutional layers in CNNs?**

A. Reducing the size of the feature maps.  
B. Calculating the dot product of the input and kernels.  
C. Applying a nonlinear activation function.  
D. Making the network learn faster.

---

## Page 2

### Question 7

**Question: Which one of the following lines best describes the key benefit of CNNs over traditional ANNs for image classification?**

A. CNNs are computationally less expensive.  
B. CNNs automatically learn hierarchical features.  
C. CNNs require fewer network layers.  
D. CNNs can learn nonlinear mappings.

---

### Question 8

**Question (1 mark): Consider the figure below, which illustrates the histogram of oriented gradients (HOG) feature. What is the dimensionality (number of features) of a standard HOG feature vector? Give the number and show how you computed it.**

![HOG feature vector diagram](images/hog_feature_vector_diagram.png)

---

### Question 9

**Question (1 mark): In many image processing operations, the image must be expanded a little bit to solve the boundary problem. What type of expansion is implicitly used by the Fourier transform?**

A. Padding  
B. Clamping  
C. Wrapping  
D. Mirroring

---

### Question 10

**Question: In many image processing operations, the image must be expanded a little bit to solve the boundary problem. Which one of the following types of expansion is implicitly used by the Fourier transform?**

A. Padding  
B. Clamping  
C. Wrapping  
D. Mirroring

---

### Question 11

**Question: Which one of the following statements about image segmentation methods is incorrect?**

A. Thresholding based on pixel intensity yields poor results if the regions to be segmented have overlapping intensity distributions.  
B. Level-set segmentation uses an object boundary representation that makes it hard to deal with topological changes.  
C. Region splitting techniques aim to optimize some metric of intra-region similarity and inter-region dissimilarity.  
D. Watershed segmentation often results in over-segmentation because image regions may contain multiple local minima.

---

## Page 3

### Question 12

**Question: Which one of the following statements about intensity transformations is incorrect?**

A. Contrast stretching linearly maps intensities between two values to the full output range.  
B. Log transformation maps a narrow range of high intensities to a wider range of output values.  
C. Power transformation can map intensities similar to log and inverse log transformations.  
D. Piecewise linear transformations can achieve contrast stretching and intensity slicing.

---

### Question 13

**Question: Which one of the following statements about intensity transformations is incorrect?**

A. Contrast stretching linearly maps intensities between two values to the full output range.  
B. Log transformation maps a narrow range of high intensities to a wider range of output values.  
C. Power transformation can map intensities similar to log and inverse log transformations.  
D. Piecewise linear transformations can achieve contrast stretching and intensity slicing.

---

### Question 14

**Question: Given the following input image `I` (on the left) and output image `O` (on the right):**

![Point operator mapping question](images/point_operator_mapping_question.png)

Image `O` is the result of processing image `I` using a point operator. Which one of the following mapping functions (red curves) from intensities in `I` to intensities in `O` was used by the point operator? For reference, in each graphic, the histogram of the image `I` is shown in blue.

A. Mapping function A  
B. Mapping function B  
C. Mapping function C  
D. Mapping function D

---

### Question 15

**Question: Which one of the following statements about intensity transformations is incorrect?**

A. Contrast stretching linearly maps intensities between two values to the full output range.  
B. Log transformation maps a narrow range of high intensities to a wider range of output values.  
C. Power transformation can map intensities similar to log and inverse log transformations.  
D. Piecewise linear transformations can achieve contrast stretching and intensity slicing.

---

## Page 4

### Question 16

**Question: Which one of the following strategies will not help to reduce overfitting of neural networks?**

A. Applying dropout.  
B. Using early stopping.  
C. Augmenting the data.  
D. Increasing the number of network parameters.

---

### Question 17

**Question: In many image processing operations, the image must be expanded a little bit to solve the boundary problem. Which one of the following types of expansion is implicitly used by the Fourier transform?**

A. Padding  
B. Clamping  
C. Wrapping  
D. Mirroring

---

### Question 18

**Question: What is the effect of the following 2D convolution kernel on an image?**

\[
\begin{bmatrix}
0 & 1 & 0 \\
1 & -4 & 1 \\
0 & 1 & 0
\end{bmatrix}
\]

A. It approximates the sum of first-order derivatives in `x` and `y`.  
B. It approximates the sum of second-order derivatives in `x` and `y`.  
C. It approximates the product of first-order derivatives in `x` and `y`.  
D. It approximates the product of second-order derivatives in `x` and `y`.

---

### Question 19

**Question: Given the following 2D convolution kernel:**

\[
\begin{bmatrix}
1 & 0 & -1 \\
2 & 0 & -2 \\
1 & 0 & -1
\end{bmatrix}
\]

**Which one of the following correctly describes the effect of this kernel when applied to an image?**

A. Smoothing in `x` and first-order differentiation in `y`.  
B. Smoothing in `x` and second-order differentiation in `y`.  
C. First-order differentiation in `x` and smoothing in `y`.  
D. Second-order differentiation in `x` and smoothing in `y`.

---

## Page 5

### Question 20

**Question: What is the effect of the following 2D convolution kernel on an image?**

\[
\begin{bmatrix}
0 & 1 & 0 \\
1 & -4 & 1 \\
0 & 1 & 0
\end{bmatrix}
\]

A. It approximates the sum of first-order derivatives in `x` and `y`.  
B. It approximates the sum of second-order derivatives in `x` and `y`.  
C. It approximates the product of first-order derivatives in `x` and `y`.  
D. It approximates the product of second-order derivatives in `x` and `y`.

---

### Question 21

**Question: Given the following 2D convolution kernel:**

\[
\begin{bmatrix}
1 & 0 & -1 \\
2 & 0 & -2 \\
1 & 0 & -1
\end{bmatrix}
\]

**Which one of the following correctly describes the effect of this kernel when applied to an image?**

A. Smoothing in `x` and first-order differentiation in `y`.  
B. Smoothing in `x` and second-order differentiation in `y`.  
C. First-order differentiation in `x` and smoothing in `y`.  
D. Second-order differentiation in `x` and smoothing in `y`.

---

### Question 22

**Question: What is the effect of the following 2D convolution kernel on an image?**

\[
\begin{bmatrix}
0 & 1 & 0 \\
1 & -4 & 1 \\
0 & 1 & 0
\end{bmatrix}
\]

A. It approximates the sum of first-order derivatives in `x` and `y`.  
B. It approximates the sum of second-order derivatives in `x` and `y`.  
C. It approximates the product of first-order derivatives in `x` and `y`.  
D. It approximates the product of second-order derivatives in `x` and `y`.

---

## Page 6

### Question 23

**Question: Given the following 2D convolution kernel:**

\[
\begin{bmatrix}
1 & 0 & -1 \\
2 & 0 & -2 \\
1 & 0 & -1
\end{bmatrix}
\]

**Which one of the following correctly describes the effect of this kernel when applied to an image?**

A. Smoothing in `x` and first-order differentiation in `y`.  
B. Smoothing in `x` and second-order differentiation in `y`.  
C. First-order differentiation in `x` and smoothing in `y`.  
D. Second-order differentiation in `x` and smoothing in `y`.

---

### Question 24

**Question (1 mark): Which one of the following equations concerning convolution (`*`) of two images (`f` and `g`) is correct?**

A. `f * g = (g * f)^(-1)`  
B. `f * (g + h) = (f * g) + (f * h)`  
C. `a · (f * g) = (a · f) * (a · g)`  
D. `f * g = f̂ * ĝ`

---

### Question 25

**Question: Suppose we have a 2D image that is very noisy and we want to smooth it by filtering with a uniform kernel of size 5 × 5 voxels. Let `S` be the total number of floating-point operations required per pixel to perform the operation when using a dimensionally separated implementation of the filter. Let `N` be the total number of floating-point operations required per pixel to perform the operation when using a dimensionally nonseparated implementation of the filter.**

**What is the ratio `S/N` as a percentage rounded to one decimal?**

A. 36.7%  
B. 40.0%  
C. 58.8%  
D. 66.7%

---

### Question 26

**Question (1 mark): Which one of the following statements on image filtering is incorrect?**

A. Median filtering reduces noise in images.  
B. Low-pass filtering smooths fine details in images.  
C. High-pass filtering results in blurry images.  
D. Notch filtering removes specific image frequencies.

---

### Question 27

**Question: Which one of the following statements on image filtering is incorrect?**

A. Median filtering reduces noise in images.  
B. Low-pass filtering results in blurry images.  
C. High-pass filtering smooths fine details in images.  
D. Notch filtering removes specific image frequencies.

---

## Page 7

### Question 28

**Question: Which one of the following statements is correct for random forest classifiers?**

A. Increasing the correlation between the individual trees decreases the random forest classification error rate.  
B. Reducing the number of selected features at each node increases the correlation between the individual trees.  
C. Reducing the number of selected features at each node increases the strength of the individual trees.  
D. Increasing the strength of the individual trees decreases the random forest classification error rate.

---

### Question 29

**Question: Which one of the following statements is correct for pattern recognition?**

A. Pattern recognition is defined as the process of model training on a training dataset and then testing on an independent test set.  
B. The dimension of feature vectors should be smaller than the number of training samples in order to avoid the overfitting problem.  
C. The simple kNN classifier needs homogeneous feature types and scales so that the classification performance can be better.  
D. SVM is a powerful classifier that can separate classes even when the feature space exhibits significant overlaps between classes.

---

### Question 30

**Question: Which one of the following statements is correct for random forest classifiers?**

A. Increasing the correlation between the individual trees decreases the random forest classification error rate.  
B. Reducing the number of selected features at each node increases the correlation between the individual trees.  
C. Reducing the number of selected features at each node increases the strength of the individual trees.  
D. Increasing the strength of the individual trees decreases the random forest classification error rate.

---

### Question 31

**Question: Which one of the following statements is correct for pattern recognition?**

A. Pattern recognition is defined as the process of model training on a training dataset and then testing on an independent test set.  
B. The dimension of feature vectors should be smaller than the number of training samples in order to avoid the overfitting problem.  
C. The simple kNN classifier needs homogeneous feature types and scales so that the classification performance can be better.  
D. SVM is a powerful classifier that can separate classes even when the feature space exhibits significant overlaps between classes.

---

## Page 8

### Question 32

**Question: Which one of the following statements is correct for random forest classifiers?**

A. Increasing the correlation between the individual trees decreases the random forest classification error rate.  
B. Reducing the number of selected features at each node increases the correlation between the individual trees.  
C. Reducing the number of selected features at each node increases the strength of the individual trees.  
D. Increasing the strength of the individual trees decreases the random forest classification error rate.

---

### Question 33

**Question: Which one of the following statements is correct for pattern recognition?**

A. Pattern recognition is defined as the process of model training on a training dataset and then testing on an independent test set.  
B. The dimension of feature vectors should be smaller than the number of training samples in order to avoid the overfitting problem.  
C. The simple kNN classifier needs homogeneous feature types and scales so that the classification performance can be better.  
D. SVM is a powerful classifier that can separate classes even when the feature space exhibits significant overlaps between classes.

---

### Question 34

**Question: Which one of the following statements about object tracking is incorrect?**

A. The particle filtering method assumes that the dynamics model and the measurement model can be parameterized.  
B. The hidden Markov model assumes that the measurements depend only on the current state of the objects.  
C. The prediction step of Bayesian inference assumes that the current state of the objects depends only on the previous state.  
D. The Kalman filtering method assumes that the dynamics and measurement noise are additive Gaussian.

---

### Question 35

**Question: Which one of the following statements about object tracking is incorrect?**

A. The particle filtering method assumes that the dynamics model and the measurement model can be parameterized.  
B. The hidden Markov model assumes that the measurements depend only on the current state of the objects.  
C. The prediction step of Bayesian inference assumes that the current state of the objects depends only on the previous state.  
D. The Kalman filtering method assumes that the dynamics and measurement noise are additive Gaussian.

---

## Page 9

### Question 36

**Question: Which one of the following statements about object tracking is incorrect?**

A. The particle filtering method assumes that the dynamics model and the measurement model can be parameterized.  
B. The hidden Markov model assumes that the measurements depend only on the current state of the objects.  
C. The prediction step of Bayesian inference assumes that the current state of the objects depends only on the previous state.  
D. The Kalman filtering method assumes that the dynamics and measurement noise are additive Gaussian.

---

### Question 37

**Question (1 mark): What does transfer learning with CNNs involve?**

A. Training a model from scratch for each new task.  
B. Using a pretrained model and fine-tuning it for a new task.  
C. Converting image data to text data to facilitate learning.  
D. Combining multiple CNNs into a single model for better performance.

---

### Question 38

**Question: Which one of the following lines describes the purpose of transfer learning?**

A. Training a model from scratch for each new task.  
B. Using a pretrained model and fine-tuning it for a new task.  
C. Converting image data to text data to facilitate learning.  
D. Combining multiple models into a single model for better performance.

---

### Question 39

**Question: Which one of the following lines describes the purpose of transfer learning?**

A. Training a model from scratch for each new task.  
B. Using a pretrained model and fine-tuning it for a new task.  
C. Converting image data to text data to facilitate learning.  
D. Combining multiple models into a single model for better performance.

---

### Question 40

**Question: Which one of the following statements about colour spaces is incorrect?**

A. The R, G, and B channels of the RGB colour space are often correlated.  
B. The H and the S channel of the HSV colour space are confounded.  
C. The Y channel of the YCbCr colour space represents the brightness.  
D. The a* channel of the L*a*b* colour space is the green-blue component.

---

### Question 41

**Question: Which one of the following networks is most suited for image segmentation tasks?**

A. Multilayer perceptron (MLP)  
B. Fully convolutional network (FCN)  
C. Region proposal network (RPN)  
D. Recurrent neural network (RNN)

---

## Page 10

### Question 42

**Question: Which one of the following statements about data augmentation for image classification using CNNs is correct?**

A. Augmentation increases the number of parameters in the model.  
B. Augmentation reduces the size of the dataset to speed up training.  
C. Augmentation generates new training data by transforming the existing data.  
D. Augmentation reduces the depth of the network for better performance.

---

### Question 43

**Question: Which one of the following statements about feature descriptors is incorrect?**

A. Haralick features are derived from gray-level co-occurrence matrices.  
B. SIFT achieves rotation invariance by computing gradient histograms at multiple scales.  
C. LBP describes local image texture and can be multiresolution and rotation-invariant.  
D. Colour moments have lower representation capability than the colour histogram.

---

### Question 44

**Question (1 mark): Given a binary input image `I` to which we apply the following algorithm:**

Step 1: Create a copy `C` of input image `I`.  
Step 2: Copy the boundary pixels of `C` into new image `B`.  
Step 3: Compute the reconstruction `R` of `C` from `B`.  
Step 4: Compute output `O` by subtracting `R` from `I`.

**What does the output image `O` contain?**

A. The same objects as the input image whatever the input.  
B. The same objects as the input image but with holes filled.  
C. The same objects as the input image except the boundary objects.  
D. The same objects as the input image but with touching objects separated.

---

### Question 45

**Question: Which one of the following statements about motion analysis is incorrect?**

A. Detection of moving objects by subtraction of successive images in a video works best if the background is constant.  
B. Sparse motion estimation in a video can be done by template matching and minimising the mutual information measure.  
C. Dense motion estimation using optical flow assumes that each small neighbourhood remains constant over time.  
D. Optical flow provides an equation for each pixel but requires further constraints to solve the equation uniquely.

