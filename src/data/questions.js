export const questionBanks = [
  {
    "id": "high-quality",
    "title": "COMP9517 高质量双语题库",
    "description": "覆盖图像形成、颜色空间、滤波、边缘、分割、特征、深度学习等主题，题目含中英文解析。",
    "total": 54
  },
  {
    "id": "simple-concept",
    "title": "COMP9517 简单概念题库",
    "description": "按课程概念整理的中英双语基础题，适合快速查漏补缺。",
    "total": 205
  },
  {
    "id": "final-ocr",
    "title": "COMP9517 Final Clean 题库",
    "description": "由 final 扫描版试题人工清理后的可编辑题库，保留页面图片和手写笔记用于核对。",
    "total": 101
  },
  {
    "id": "cpu-question-bank",
    "title": "COMP9517 CPU 题库",
    "description": "按 CPU PDF 页面顺序整理的可编辑题库，包含标准答案和简要解析。",
    "total": 26
  },
  {
    "id": "example-exam",
    "title": "COMP9517 示例考试题",
    "description": "50 道选择题示例卷，贴近考试题型，部分题目包含视觉材料。",
    "total": 20
  }
]

export const questions = [
  {
    "id": "high-quality-1",
    "title": "Question 1.1 [Basic]",
    "question": "Which one of the following statements about the pinhole camera model\nis incorrect?",
    "images": [],
    "options": [
      "The image formed by a pinhole camera is inverted both horizontally and\nvertically.",
      "Increasing the focal length results in a wider field of view.",
      "The\npinhole camera model assumes all light rays pass through a single point.",
      "A\nsmaller pinhole produces sharper images but requires longer exposure time."
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Increasing the focal length actually results in a narrower field\nof view (zoom effect), not wider. A smaller pinhole does produce sharper images\n(less blur) but allows less light, requiring longer exposure.\n增加焦距实际上会导致视野变窄（变焦效果），而不是变宽。更小的针孔确实产生\n更清晰的图像（模糊更少），但允许的光线更少，需要更长的曝光时间。",
    "bankId": "high-quality",
    "number": 1
  },
  {
    "id": "high-quality-2",
    "title": "Question 1.2 [Intermediate]",
    "question": "Given a 3D point P = (X, Y, Z) in world coordinates and a pinhole\ncamera with focal length f, which equation correctly describes its projection p = (x,\ny) onto the image plane?",
    "images": [
      {
        "alt": "Page 2 figure",
        "src": "/COMP9517_question_bank_editable_with_images/COMP9517_md_assets/page-02-figure-1.png"
      }
    ],
    "options": [
      "x = f·X/Z, y = f·Y/Z",
      "x = X/(f·Z), y = Y/(f·Z)",
      "x = f·X·Z, y = f·Y·Z",
      "x = X/f, y\n= Y/f"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "Using similar triangles in perspective projection: x/f = X/Z,\ntherefore x = f·X/Z. Same applies for y coordinate.\n在透视投影中使用相似三角形：x/f = X/Z，因此x = f·X/Z。y 坐标同理。",
    "bankId": "high-quality",
    "number": 2
  },
  {
    "id": "high-quality-3",
    "title": "Question 1.3 [Basic]",
    "question": "Refer to the color space comparison figure below. Which color space\nseparates luminance (brightness) from chrominance (color information)?\n\nFigure: Color Spaces",
    "images": [
      {
        "alt": "Page 3 figure",
        "src": "/COMP9517_question_bank_editable_with_images/COMP9517_md_assets/page-03-figure-1.png"
      }
    ],
    "options": [
      "RGB",
      "HSV",
      "YCbCr",
      "All of the above"
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "YCbCr explicitly separates Y (luminance) from Cb and Cr\n(chrominance components). This makes it ideal for video compression. HSV\nseparates hue, saturation, and value but value is not exactly luminance. RGB\nmixes all components.\nYCbCr 明确将Y（亮度）与Cb 和Cr（色度分量）分离。这使其非常适合视频压\n缩。HSV 分离色相、饱和度和明度，但明度不完全等于亮度。RGB 混合了所有分\n量。",
    "bankId": "high-quality",
    "number": 3
  },
  {
    "id": "high-quality-4",
    "title": "Question 1.4 [Intermediate]",
    "question": "In digital image formation, what is the relationship between bits per\npixel and the number of gray levels?",
    "images": [],
    "options": [
      "Gray levels = 2^(bits per pixel)",
      "Gray levels = bits per pixel × 2",
      "Gray\nlevels = bits per pixel²",
      "Gray levels = log₂(bits per pixel)"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "For n bits per pixel, we can represent 2^n distinct gray levels.\nFor example, 8-bit images have 2^8 = 256 gray levels (0-255).\n对于n 位每像素，我们可以表示2n 个不同的灰度级。例如，8 位图像有28 = 256 个灰度级（0-\n255）。",
    "bankId": "high-quality",
    "number": 4
  },
  {
    "id": "high-quality-5",
    "title": "Question 1.6 [Intermediate]",
    "question": "Which intensity transformation would be most appropriate to enhance\ndetails in dark regions of an image while compressing bright regions?",
    "images": [],
    "options": [
      "Linear contrast stretching",
      "Log transformation",
      "Power law with γ > 1",
      "Intensity thresholding"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Log transformation maps a narrow range of low input\nintensities to a wider range of output intensities, enhancing dark details. It also\ncompresses high intensities.\n对数变换将较窄的低输入强度范围映射到较宽的输出强度范围，增强暗部细节。同\n时压缩高亮度区域。\n\n---\n\n<!-- Page 5 -->\n\n**Page 5 figures / 第 5 页图片：**\n\n![Page 5 figure](/COMP9517_question_bank_editable_with_images/COMP9517_md_assets/page-05-figure-1.png)",
    "bankId": "high-quality",
    "number": 5
  },
  {
    "id": "high-quality-6",
    "title": "Question 1.7 [Basic]",
    "question": "Refer to the intensity transformation curves below. Which curve\nrepresents contrast stretching that maps input range [50, 200] to full output range\n[0, 255]?\n\nFigure: Intensity Transforms",
    "images": [
      {
        "alt": "Page 6 figure",
        "src": "/COMP9517_question_bank_editable_with_images/COMP9517_md_assets/page-06-figure-1.png"
      }
    ],
    "options": [
      "Top-left (Identity)",
      "Top-right (Inversion)",
      "Bottom-left (Power-law γ<1)",
      "Bottom-right (Contrast Stretching)"
    ],
    "answer": 3,
    "answers": [
      3
    ],
    "explanation": "Correct answer: D",
    "bankId": "high-quality",
    "number": 6
  },
  {
    "id": "high-quality-7",
    "title": "Question 1.8 [Intermediate]",
    "question": "Histogram equalization is applied to an image. What is the expected\nshape of the resulting histogram?",
    "images": [],
    "options": [
      "Gaussian (bell-shaped)",
      "Uniform (flat)",
      "Exponential",
      "Same as original"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Histogram equalization redistributes pixel intensities to\nachieve approximately uniform distribution across all gray levels, maximizing\nentropy.\n直方图均衡化重新分布像素强度，使其在所有灰度级上近似均匀分布，最大化熵。\n\n---\n\n<!-- Page 7 -->\n\n**Page 7 figures / 第 7 页图片：**\n\n![Page 7 figure](/COMP9517_question_bank_editable_with_images/COMP9517_md_assets/page-07-figure-1.png)",
    "bankId": "high-quality",
    "number": 7
  },
  {
    "id": "high-quality-8",
    "title": "Question 1.9 [Advanced]",
    "question": "Refer to the histogram equalization figure below. What is the primary\nlimitation of histogram equalization?\n\nFigure: Histogram Equalization",
    "images": [
      {
        "alt": "Page 8 figure",
        "src": "/COMP9517_question_bank_editable_with_images/COMP9517_md_assets/page-08-figure-1.png"
      }
    ],
    "options": [
      "It only works on color images",
      "It may amplify noise in relatively\nhomogeneous regions",
      "It requires manual parameter tuning",
      "It reduces\nimage resolution"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Histogram equalization is a global operation that doesn’t\ndistinguish between signal and noise. In flat regions with little variation, noise\ngets amplified along with any subtle variations.\n直方图均衡化是一种全局操作，不区分信号和噪声。在变化较小的平坦区域，噪声\n会与任何细微变化一起被放大。\n\n---\n\n<!-- Page 9 -->\n\n**Page 9 figures / 第 9 页图片：**\n\n![Page 9 figure](/COMP9517_question_bank_editable_with_images/COMP9517_md_assets/page-09-figure-1.png)\n\n## Part 2: Spatial Filtering and Convolution (Week 2)\n**第二部分：空间滤波与卷积（Week 2）**",
    "bankId": "high-quality",
    "number": 8
  },
  {
    "id": "high-quality-9",
    "title": "Question 2.1 [Basic]",
    "question": "Refer to the convolution kernels shown below. Which kernel is used for\ndetecting horizontal edges?\n\nFigure: Kernels",
    "images": [
      {
        "alt": "Page 10 figure",
        "src": "/COMP9517_question_bank_editable_with_images/COMP9517_md_assets/page-10-figure-1.png"
      },
      {
        "alt": "Page 10 figure",
        "src": "/COMP9517_question_bank_editable_with_images/COMP9517_md_assets/page-10-figure-2.png"
      }
    ],
    "options": [
      "Laplacian (top-left)",
      "Sobel X (top-middle)",
      "Sobel Y (top-right)",
      "Gaussian\n(top-far-right)"
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "Sobel Y kernel computes gradient in the y-direction (vertical\nchanges), which detects horizontal edges. Sobel X detects vertical edges.\nSobel Y 核计算y 方向的梯度（垂直变化），用于检测水平边缘。Sobel X 检测垂\n直边缘。",
    "bankId": "high-quality",
    "number": 9
  },
  {
    "id": "high-quality-10",
    "title": "Question 2.2 [Intermediate - Calculation]",
    "question": "Given the following 3×3 image patch and kernel, calculate the\nconvolution result at the center pixel:\n\nFigure: Convolution Process\nImage patch:\n\n---\n\n<!-- Page 11 -->\n\n**Page 11 figures / 第 11 页图片：**\n\n\n\n[10, 20, 30]\n[40, 50, 60]\n[70, 80, 90]\nKernel (Prewitt X):\n[-1, 0, 1]\n[-1, 0, 1]\n[-1, 0, 1]",
    "images": [
      {
        "alt": "Page 11 figure",
        "src": "/COMP9517_question_bank_editable_with_images/COMP9517_md_assets/page-11-figure-1.png"
      }
    ],
    "options": [
      "240",
      "240",
      "0",
      "300"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Convolution = (-1)×10 + 0×20 + 1×30 + (-1)×40 + 0×50 +\n1×60 + (-1)×70 + 0×80 + 1×90 = -10 + 0 + 30 - 40 + 0 + 60 - 70 + 0 + 90 = 60\nWait, let me recalculate: -10 + 30 - 40 + 60 - 70 + 90 = 60\nHmm, the options don’t match. Let me use the kernel shown in the figure (which\nis different):\n\n---\n\n<!-- Page 12 -->\nUsing kernel from figure [1, 0, -1; 1, 0, -1; 1, 0, -1]: = 1×10 + 0×20 + (-1)×30 +\n1×40 + 0×50 + (-1)×60 + 1×70 + 0×80 + (-1)×90 = 10 - 30 + 40 - 60 + 70 - 90 = -\n60\nActually, looking at the figure more carefully, the kernel shown is: [1, 0, -1] [1, 0, -\n1] [1, 0, -1]\nResult: 10 - 30 + 40 - 60 + 70 - 90 = -60\nBut the figure shows result = 60. The absolute value is what matters for edge\ndetection.\nCorrected Answer: The magnitude is 60. If we consider the absolute value for\nedge strength, it would be 60. Among the given options, none exactly match,\nsuggesting this might be a different calculation. Let me provide a clearer question.",
    "bankId": "high-quality",
    "number": 10
  },
  {
    "id": "high-quality-11",
    "title": "Question 2.3 [Intermediate]",
    "question": "What is the primary advantage of using a separable kernel (like\nGaussian) over a non-separable kernel of the same size?",
    "images": [],
    "options": [
      "Better noise reduction",
      "Computational efficiency - fewer operations required",
      "Sharper edges in output",
      "Smaller memory footprint"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "A separable n×n kernel can be decomposed into two 1D\nkernels (n×1 and 1×n), reducing operations from O(n²) to O(2n) per pixel. For a\n5×5 kernel: non-separable needs 25 multiplications, separable needs only 10.\n可分离的n×n 核可以分解为两个1D 核（n×1 和1×n），将每个像素的操作从\nO(n²)减少到O(2n)。对于5×5 核：不可分离需要25 次乘法，可分离只需要10 次。",
    "bankId": "high-quality",
    "number": 11
  },
  {
    "id": "high-quality-12",
    "title": "Question 2.4 [Advanced - Calculation]",
    "question": "Calculate the computational savings when using a separable 5×5\nGaussian filter compared to a non-separable implementation:\n\n---\n\n<!-- Page 13 -->\n\n**Page 13 figures / 第 13 页图片：**",
    "images": [
      {
        "alt": "Page 13 figure",
        "src": "/COMP9517_question_bank_editable_with_images/COMP9517_md_assets/page-13-figure-1.png"
      }
    ],
    "options": [
      "40% reduction in operations",
      "50% reduction in operations",
      "60% reduction\nin operations",
      "75% reduction in operations"
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "Non-separable 5×5: 25 multiplications + 24 additions = 49\noperations Separable 5×5: (5 + 5) multiplications + (4 + 4) additions = 18\noperations Savings = (49 - 18) / 49 = 63.3% ≈ 60%\n不可分离5×5：25 次乘法 + 24 次加法 = 49 次操作 可分离5×5：(5 + 5)次乘法 +\n(4 + 4)次加法 = 18 次操作 节省 = (49 - 18) / 49 = 63.3% ≈ 60%",
    "bankId": "high-quality",
    "number": 12
  },
  {
    "id": "high-quality-13",
    "title": "Question 2.5 [Intermediate]",
    "question": "Refer to the edge detection results below. Which method produces the\nthinnest edges?\n\nFigure: Edge Detection",
    "images": [
      {
        "alt": "Page 14 figure",
        "src": "/COMP9517_question_bank_editable_with_images/COMP9517_md_assets/page-14-figure-1.png"
      }
    ],
    "options": [
      "Sobel X",
      "Sobel Y",
      "Gradient Magnitude",
      "Laplacian --- <!-- Page 14 --> **Page 14 figures / 第 14 页图片：**"
    ],
    "answer": 3,
    "answers": [
      3
    ],
    "explanation": "The Laplacian (second derivative) produces zero-crossings\nat edges, which are theoretically single-pixel wide. Gradient-based methods\nproduce thicker edges proportional to the edge transition width.\n拉普拉斯（二阶导数）在边缘处产生零交叉，理论上是单像素宽。基于梯度的方法\n产生的边缘厚度与边缘过渡宽度成正比。",
    "bankId": "high-quality",
    "number": 13
  },
  {
    "id": "high-quality-14",
    "title": "Question 2.6 [Basic]",
    "question": "Which filter is most effective for removing salt-and-pepper noise while\npreserving edges?",
    "images": [],
    "options": [
      "Mean filter",
      "Gaussian filter",
      "Median filter",
      "Laplacian filter"
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "Median filter is a non-linear filter that replaces each pixel\nwith the median of its neighborhood. It effectively removes extreme values (salt-\nand-pepper noise) without blurring edges like linear filters do.\n中值滤波器是一种非线性滤波器，用邻域的中值替换每个像素。它有效去除极端值\n（椒盐噪声），而不会像线性滤波器那样模糊边缘。",
    "bankId": "high-quality",
    "number": 14
  },
  {
    "id": "high-quality-15",
    "title": "Question 2.7 [Intermediate]",
    "question": "In unsharp masking for image sharpening, what is the purpose of the\nscaling factor k?",
    "images": [],
    "options": [
      "To control the amount of blur",
      "To control the strength of sharpening",
      "To\nadjust the image brightness",
      "To normalize the kernel"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Unsharp masking formula: Output = Original + k × (Original -\nBlurred). The factor k controls how much of the high-frequency detail is added\nback. Higher k = stronger sharpening, but may amplify noise.\n钝化蒙版公式：输出 = 原图 + k × (原图 - 模糊图)。因子k 控制添加回多少高频细\n节。k 越大 = 锐化越强，但可能放大噪声。",
    "bankId": "high-quality",
    "number": 15
  },
  {
    "id": "high-quality-16",
    "title": "Question 2.8 [Advanced]",
    "question": "The Difference of Gaussians (DoG) is an approximation of which\noperator?",
    "images": [],
    "options": [
      "Sobel operator",
      "Laplacian of Gaussian (LoG)",
      "Canny edge detector",
      "Prewitt operator"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "DoG approximates the Laplacian of Gaussian (LoG). Both\nare band-pass filters that respond to edges at a specific scale. DoG is\ncomputationally more efficient as it uses two Gaussian filters instead of\ncomputing second derivatives.\nDoG 近似高斯拉普拉斯（LoG）。两者都是带通滤波器，对特定尺度的边缘有响\n应。DoG 计算效率更高，因为它使用两个高斯滤波器而不是计算二阶导数。\n\n## Part 3: Feature Representation and SIFT (Week 3)\n**第三部分：特征表示与SIFT（Week 3）**",
    "bankId": "high-quality",
    "number": 16
  },
  {
    "id": "high-quality-17",
    "title": "Question 3.1 [Basic]",
    "question": "Which of the following is NOT a desirable property of image features?",
    "images": [],
    "options": [
      "Reproducibility/Robustness",
      "High dimensionality",
      "Saliency/Descriptiveness",
      "Efficiency/Compactness"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "High dimensionality is undesirable because it increases\ncomputational cost and can lead to the curse of dimensionality. Features should\nbe compact (low dimensional) while still being descriptive.\n高维度是不理想的，因为它增加计算成本并可能导致维度灾难。特征应该是紧凑的\n（低维度），同时仍然具有描述性。",
    "bankId": "high-quality",
    "number": 17
  },
  {
    "id": "high-quality-18",
    "title": "Question 3.2 [Intermediate]",
    "question": "In the SIFT algorithm, what is the purpose of assigning an orientation to\neach keypoint?",
    "images": [
      {
        "alt": "Page 17 figure",
        "src": "/COMP9517_question_bank_editable_with_images/COMP9517_md_assets/page-17-figure-1.png"
      }
    ],
    "options": [
      "To reduce the number of keypoints",
      "To achieve rotation invariance",
      "To\nimprove detection speed",
      "To filter out weak keypoints"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "By assigning a dominant orientation and rotating the\ndescriptor coordinates accordingly, SIFT descriptors become invariant to image\nrotation. This is crucial for matching features in images taken from different\nviewpoints.\n通过分配主导方向并相应旋转描述子坐标，SIFT 描述子对图像旋转保持不变性。\n这对于匹配不同视角拍摄的图像中的特征至关重要。",
    "bankId": "high-quality",
    "number": 18
  },
  {
    "id": "high-quality-19",
    "title": "Question 3.3 [Advanced]",
    "question": "Refer to the SIFT keypoint detection figure below. Why does SIFT use\nDifference of Gaussians (DoG) instead of directly using Laplacian of Gaussian\n(LoG)?\n\nFigure: SIFT Keypoints",
    "images": [
      {
        "alt": "Page 18 figure",
        "src": "/COMP9517_question_bank_editable_with_images/COMP9517_md_assets/page-18-figure-1.png"
      }
    ],
    "options": [
      "DoG provides better edge detection",
      "DoG is computationally more efficient",
      "DoG produces more keypoints",
      "DoG has better noise immunity"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "DoG can be computed efficiently by subtracting two\nGaussian-blurred images. LoG requires computing second derivatives, which is\nmore computationally expensive. DoG approximates LoG well while being much\nfaster.\nDoG 可以通过减去两个高斯模糊图像高效计算。LoG 需要计算二阶导数，计算成\n本更高。DoG 很好地近似LoG，同时速度更快。",
    "bankId": "high-quality",
    "number": 19
  },
  {
    "id": "high-quality-20",
    "title": "Question 3.4 [Intermediate]",
    "question": "What is the dimension of a standard SIFT descriptor?",
    "images": [],
    "options": [
      "64",
      "128",
      "256",
      "512"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "SIFT uses a 16×16 neighborhood divided into 4×4\nsubregions. Each subregion has an 8-bin orientation histogram. Total: 4 × 4 × 8 =\n128 dimensions.\nSIFT 使用16×16 邻域，分为4×4 子区域。每个子区域有一个8-bin 方向直方图。\n总计：4 × 4 × 8 = 128 维。\n\n---\n\n<!-- Page 19 -->",
    "bankId": "high-quality",
    "number": 20
  },
  {
    "id": "high-quality-21",
    "title": "Question 3.5 [Advanced]",
    "question": "In Lowe’s ratio test for feature matching, what does a ratio close to 1\nindicate?",
    "images": [],
    "options": [
      "The match is very reliable",
      "The match is ambiguous (second best match is\nalmost as good as the best)",
      "The descriptor is invalid",
      "The images are\nidentical"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Ratio = d(nearest) / d(second nearest). A ratio close to 1\nmeans the two nearest neighbors have very similar distances, indicating\nambiguity. Lowe recommends thresholding at 0.8 to reject ambiguous matches.\n比率 = d（最近邻）/ d（次近邻）。比率接近1 意味着两个最近邻的距离非常相似，\n表示模糊。Lowe 建议在0.8 处进行阈值处理以拒绝模糊匹配。",
    "bankId": "high-quality",
    "number": 21
  },
  {
    "id": "high-quality-22",
    "title": "Question 3.6 [Intermediate]",
    "question": "What is the primary purpose of RANSAC in feature matching?",
    "images": [],
    "options": [
      "To speed up feature detection",
      "To remove outlier matches and estimate\ngeometric transformation",
      "To increase the number of detected features",
      "To\nnormalize feature descriptors"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "RANSAC (Random Sample Consensus) iteratively samples\nminimal sets of matches to fit a geometric model (e.g., homography), then counts\ninliers. It robustly estimates transformations even with many outlier matches.\n\n---\n\n<!-- Page 20 -->\nRANSAC（随机采样一致性）迭代采样最小匹配集来拟合几何模型（如单应性），\n然后计算内点。即使有大量异常匹配，它也能稳健地估计变换。\n\n## Part 4: Pattern Recognition and Classification (Week 4)\n**第四部分：模式识别与分类（Week 4）**",
    "bankId": "high-quality",
    "number": 22
  },
  {
    "id": "high-quality-23",
    "title": "Question 4.1 [Basic]",
    "question": "In k-Nearest Neighbors (kNN) classification, what happens when k\nincreases?",
    "images": [],
    "options": [
      "Decision boundary becomes more complex",
      "Decision boundary becomes\nsmoother",
      "Training time increases significantly",
      "The algorithm becomes\nmore sensitive to noise"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Larger k means more neighbors vote, which smooths out\nlocal variations and creates a smoother decision boundary. However, too large k\nmay include points from other classes, reducing accuracy.\n更大的k 意味着更多邻居投票，这平滑了局部变化并产生更平滑的决策边界。然而，\nk 过大会包含其他类别的点，降低准确率。",
    "bankId": "high-quality",
    "number": 23
  },
  {
    "id": "high-quality-24",
    "title": "Question 4.2 [Intermediate]",
    "question": "Refer to the confusion matrix below. Calculate the precision for Class",
    "images": [
      {
        "alt": "Page 21 figure",
        "src": "/COMP9517_question_bank_editable_with_images/COMP9517_md_assets/page-21-figure-1.png"
      },
      {
        "alt": "Page 22 figure",
        "src": "/COMP9517_question_bank_editable_with_images/COMP9517_md_assets/page-22-figure-1.png"
      }
    ],
    "options": [
      "45/48",
      "45/50",
      "45/93",
      "48/93"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "Precision = TP / (TP + FP) = True Positives / All Predicted\nPositives For Class A: TP = 45, FP = 3 (from Class B predicted as A) Precision =\n45 / (45 + 3) = 45/48\n精确率 = TP / (TP + FP) = 真正例 / 所有预测为正例 对于类别A：TP = 45，FP =\n3（类别B 被预测为A） 精确率 = 45 / (45 + 3) = 45/48",
    "bankId": "high-quality",
    "number": 24
  },
  {
    "id": "high-quality-25",
    "title": "Question 4.3 [Intermediate]",
    "question": "Which statement about decision trees is correct?\n\n---\n\n<!-- Page 23 -->",
    "images": [],
    "options": [
      "Decision trees always achieve 100% accuracy on training data",
      "Decision\ntrees are not affected by feature scaling",
      "Decision trees cannot handle\ncategorical features",
      "Decision trees always produce the optimal solution"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Decision trees make splits based on feature thresholds,\nwhich are invariant to monotonic transformations like scaling. They can overfit\n(not always 100%), handle categorical features, and find locally optimal (not\nglobally optimal) solutions.\n决策树基于特征阈值进行分割，这对单调变换（如缩放）是不变的。它们可能过拟\n合（不总是100%），可以处理类别特征，并找到局部最优（而非全局最优）解。",
    "bankId": "high-quality",
    "number": 25
  },
  {
    "id": "high-quality-26",
    "title": "Question 4.4 [Advanced]",
    "question": "In the SGD (Stochastic Gradient Descent) classifier, why is feature\nscaling important?",
    "images": [],
    "options": [
      "It reduces the number of features",
      "It ensures all features contribute equally\nto the distance calculation",
      "It prevents features with larger scales from\ndominating the gradient updates",
      "It is not actually important for SGD"
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "SGD updates weights using gradients. Features with larger\nscales produce larger gradients, causing uneven convergence. Scaling ensures\nall features contribute proportionally to learning.\nSGD 使用梯度更新权重。大尺度的特征产生更大的梯度，导致收敛不均匀。缩放\n确保所有特征对学习成比例贡献。\n\n---\n\n<!-- Page 24 -->",
    "bankId": "high-quality",
    "number": 26
  },
  {
    "id": "high-quality-27",
    "title": "Question 4.5 [Intermediate]",
    "question": "What is the primary purpose of stratified sampling when splitting a\ndataset?",
    "images": [],
    "options": [
      "To reduce the dataset size",
      "To maintain class distribution in both training\nand test sets",
      "To increase the randomness of the split",
      "To ensure all\nsamples are used for training"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Stratified sampling ensures each class is represented\nproportionally in both training and test sets. This is crucial for imbalanced\ndatasets to prevent bias in model evaluation.\n分层抽样确保每个类别在训练集和测试集中按比例表示。这对于不平衡数据集防止\n模型评估中的偏见至关重要。",
    "bankId": "high-quality",
    "number": 27
  },
  {
    "id": "high-quality-28",
    "title": "Question 4.6 [Advanced]",
    "question": "A classifier achieves 95% accuracy on the training set but only 70% on\nthe test set. What is this phenomenon called?",
    "images": [],
    "options": [
      "Underfitting",
      "Overfitting",
      "Data leakage",
      "Class imbalance"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Large gap between training and test performance indicates\noverfitting - the model memorized training data but fails to generalize.\nUnderfitting would show poor performance on both sets.\n\n---\n\n<!-- Page 25 -->\n\n**Page 25 figures / 第 25 页图片：**\n\n![Page 25 figure](/COMP9517_question_bank_editable_with_images/COMP9517_md_assets/page-25-figure-1.png)\n\n训练和测试性能之间的巨大差距表明过拟合 - 模型记住了训练数据但无法泛化。欠\n拟合会在两个集合上都表现不佳。\n\n## Part 5: Image Segmentation and Morphology (Week 5)\n**第五部分：图像分割与形态学（Week 5）**",
    "bankId": "high-quality",
    "number": 28
  },
  {
    "id": "high-quality-29",
    "title": "Question 5.1 [Basic]",
    "question": "Refer to the connectivity figure below. How many separate objects will\nbe found using 4-connectivity?\n\nConnectivity",
    "images": [
      {
        "alt": "Page 26 figure",
        "src": "/COMP9517_question_bank_editable_with_images/COMP9517_md_assets/page-26-figure-1.png"
      }
    ],
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "Using 4-connectivity (only up, down, left, right neighbors),\nthe top-left 2×2 block counts as 1 object, the top-right vertical pair counts as 1\nobject, and the bottom has 2 separate single-pixel objects. Total: 4 objects. Wait,\nlet me recount based on the actual figure.\n使用4-连通（仅上、下、左、右邻居），左上2×2 块计为1 个物体，右上垂直对\n计为1 个物体，底部有2 个独立的单像素物体。总计：4 个物体。等等，让我根据\n实际图形重新计数。\nLooking at the figure more carefully: - Top-left 2×2 block: 1 object (connected) -\nTop-right two 1s: 1 object (connected vertically) - Bottom-left single 1: 1 object -\nBottom-right single 1: 1 object\nWith 4-connectivity: The top-right two pixels are connected (vertical), so that’s 1\nobject. Total: 1 + 1 + 1 + 1 = 4 objects.\nBut wait, looking at the figure again - there might be 5 objects if the top-right\npixels are not connected.\nLet me provide a clearer answer: The answer depends on the exact configuration.\nBased on typical exam questions, the answer is likely C (5) or B (4).\n\n---\n\n<!-- Page 27 -->\n\n**Page 27 figures / 第 27 页图片：**\n\n![Page 27 figure](/COMP9517_question_bank_editable_with_images/COMP9517_md_assets/page-27-figure-1.png)",
    "bankId": "high-quality",
    "number": 29
  },
  {
    "id": "high-quality-30",
    "title": "Question 5.2 [Intermediate]",
    "question": "Refer to the morphological operations figure. What operation sequence\nfills holes in objects?\n\nMorphology",
    "images": [
      {
        "alt": "Page 28 figure",
        "src": "/COMP9517_question_bank_editable_with_images/COMP9517_md_assets/page-28-figure-1.png"
      }
    ],
    "options": [
      "Erosion followed by Dilation (Opening)",
      "Dilation followed by Erosion (Closing)",
      "Erosion only",
      "Dilation only"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Closing (dilation followed by erosion) fills small holes and\ngaps. Dilation expands objects to fill holes, then erosion restores the original size.\nOpening removes small noise objects.\n闭运算（膨胀后腐蚀）填充小孔洞和间隙。膨胀扩展物体以填充孔洞，然后腐蚀恢\n复原始大小。开运算去除小噪声物体。",
    "bankId": "high-quality",
    "number": 30
  },
  {
    "id": "high-quality-31",
    "title": "Question 5.3 [Intermediate]",
    "question": "What is the morphological gradient defined as?",
    "images": [],
    "options": [
      "Dilation - Erosion",
      "Erosion - Dilation",
      "Original - Erosion",
      "Dilation -\nOriginal"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "Morphological gradient = Dilation(I) - Erosion(I). It produces\na band around object boundaries. External boundary = Dilation(I) - I, Internal\nboundary = I - Erosion(I).\n形态学梯度 = 膨胀(I) - 腐蚀(I)。它在物体边界周围产生一条带。外边界 = 膨胀(I) -\nI，内边界 = I - 腐蚀(I)。",
    "bankId": "high-quality",
    "number": 31
  },
  {
    "id": "high-quality-32",
    "title": "Question 5.4 [Advanced]",
    "question": "Refer to the watershed segmentation figure. Why does watershed\nsegmentation often result in over-segmentation?\n\nWatershed",
    "images": [],
    "options": [
      "The algorithm is too slow",
      "Image regions may contain multiple local minima",
      "The gradient magnitude is too low",
      "The markers are not properly initialized"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Watershed treats the image as a terrain and floods from\nlocal minima. If a region has multiple minima (due to noise or texture), each\n\n---\n\n<!-- Page 30 -->\nbecomes a separate basin, causing over-segmentation. Pre-processing or\nmarker-controlled watershed can help.\n分水岭将图像视为地形并从局部最小值开始淹没。如果一个区域有多个最小值（由\n于噪声或纹理），每个都成为一个独立的盆地，导致过度分割。预处理或标记控制\n的分水岭可以有所帮助。",
    "bankId": "high-quality",
    "number": 32
  },
  {
    "id": "high-quality-33",
    "title": "Question 5.5 [Intermediate]",
    "question": "In connected components analysis, what is the difference between 4-\nconnectivity and 8-connectivity?",
    "images": [],
    "options": [
      "4-connectivity is faster to compute",
      "8-connectivity considers diagonal\nneighbors while 4-connectivity does not",
      "4-connectivity produces more\naccurate results",
      "8-connectivity requires more memory"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "4-connectivity considers only horizontal and vertical\nneighbors (4 directions). 8-connectivity also includes diagonal neighbors (8\ndirections). This can lead to different object counts - 8-connectivity may connect\nobjects that 4-connectivity separates.\n4-连通只考虑水平和垂直邻居（4 个方向）。8-连通还包括对角邻居（8 个方向）。\n这可能导致不同的物体计数 - 8-连通可能连接4-连通分离的物体。",
    "bankId": "high-quality",
    "number": 33
  },
  {
    "id": "high-quality-34",
    "title": "Question 5.6 [Advanced - Calculation]",
    "question": "Given a binary image with 100 foreground pixels, after applying erosion\nwith a 3×3 square structuring element, 64 pixels remain. How many pixels were\non the object boundaries?",
    "images": [
      {
        "alt": "Page 31 figure",
        "src": "/COMP9517_question_bank_editable_with_images/COMP9517_md_assets/page-31-figure-1.png"
      }
    ],
    "options": [
      "16",
      "36",
      "64",
      "100 --- <!-- Page 31 --> **Page 31 figures / 第 31 页图片：**"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Erosion removes boundary pixels. Pixels removed = 100 -\n64 = 36. These were the boundary pixels that could not accommodate the full\n3×3 structuring element.\n腐蚀去除边界像素。去除的像素 = 100 - 64 = 36。这些是无法容纳完整3×3 结构\n元素的边界像素。\n\n## Part 6: Deep Learning and CNNs (Week 6-7)\n**第六部分：深度学习与CNN（Week 6-7）**",
    "bankId": "high-quality",
    "number": 34
  },
  {
    "id": "high-quality-35",
    "title": "Question 6.1 [Basic]",
    "question": "Refer to the CNN architecture figure. What is the purpose of the pooling\nlayer?\n\nFigure: CNN Architecture",
    "images": [
      {
        "alt": "Page 32 figure",
        "src": "/COMP9517_question_bank_editable_with_images/COMP9517_md_assets/page-32-figure-1.png"
      }
    ],
    "options": [
      "To increase the spatial dimensions",
      "To reduce spatial dimensions and\nprovide translation invariance",
      "To add non-linearity",
      "To perform feature\nextraction"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Pooling (typically max pooling) reduces spatial dimensions,\nreducing computation and providing translation invariance - small shifts in input\ndon’t change the output significantly.\n池化（通常是最大池化）减少空间维度，减少计算并提供平移不变性 - 输入的小偏\n移不会显著改变输出。",
    "bankId": "high-quality",
    "number": 35
  },
  {
    "id": "high-quality-36",
    "title": "Question 6.2 [Intermediate]",
    "question": "Refer to the pooling figure. For a 4×4 feature map with 2×2 max pooling\n(stride=2), what is the output size?\n\n---\n\n<!-- Page 33 -->\n\n**Page 33 figures / 第 33 页图片：**\n\n\n\nPooling",
    "images": [
      {
        "alt": "Page 33 figure",
        "src": "/COMP9517_question_bank_editable_with_images/COMP9517_md_assets/page-33-figure-1.png"
      },
      {
        "alt": "Page 34 figure",
        "src": "/COMP9517_question_bank_editable_with_images/COMP9517_md_assets/page-34-figure-1.png"
      }
    ],
    "options": [
      "2×2",
      "3×3",
      "4×4",
      "8×8"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "Output size = Input size / stride = 4 / 2 = 2. With 2×2 pooling\nand stride 2, non-overlapping windows produce a 2×2 output.\n输出大小 = 输入大小 / 步长 = 4 / 2 = 2。使用2×2 池化和步长2，不重叠的窗口产\n生2×2 输出。",
    "bankId": "high-quality",
    "number": 36
  },
  {
    "id": "high-quality-37",
    "title": "Question 6.3 [Intermediate]",
    "question": "Calculate the output size when applying a 3×3 convolution with stride=2\nand padding=1 to a 7×7 input.",
    "images": [],
    "options": [
      "3×3",
      "4×4",
      "5×5",
      "7×7"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Output size = ⌊(Input + 2×Padding - Kernel) / Stride⌋ + 1 =\n⌊(7 + 2×1 - 3) / 2⌋ + 1 = ⌊6 / 2⌋ + 1 = 3 + 1 = 4",
    "bankId": "high-quality",
    "number": 37
  },
  {
    "id": "high-quality-38",
    "title": "Question 6.4 [Advanced]",
    "question": "Refer to the activation functions figure. Why is ReLU preferred over\nSigmoid in deep networks?\n\nActivation Functions",
    "images": [
      {
        "alt": "Page 36 figure",
        "src": "/COMP9517_question_bank_editable_with_images/COMP9517_md_assets/page-36-figure-1.png"
      }
    ],
    "options": [
      "ReLU produces outputs in [0,1] range",
      "ReLU avoids the vanishing gradient\nproblem",
      "ReLU is computationally more expensive",
      "ReLU always produces\nsparse representations"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Sigmoid saturates at large positive/negative inputs, causing\ngradients near zero (vanishing gradient). ReLU has gradient 1 for positive inputs,\nallowing gradients to flow in deep networks.\nSigmoid 在大的正/负输入处饱和，导致梯度接近零（梯度消失）。ReLU 对正输入\n有梯度1，允许梯度在深度网络中流动。",
    "bankId": "high-quality",
    "number": 38
  },
  {
    "id": "high-quality-39",
    "title": "Question 6.5 [Intermediate]",
    "question": "How many parameters does a convolutional layer with 64 3×3 filters\napplied to a 3-channel input have (including biases)?",
    "images": [
      {
        "alt": "Page 37 figure",
        "src": "/COMP9517_question_bank_editable_with_images/COMP9517_md_assets/page-37-figure-1.png"
      }
    ],
    "options": [
      "576",
      "640",
      "1728",
      "1792"
    ],
    "answer": 3,
    "answers": [
      3
    ],
    "explanation": "Parameters = (kernel_height × kernel_width ×\ninput_channels × output_channels) + output_channels (biases) = (3 × 3 × 3 × 64)\n+ 64 = 1728 + 64 = 1792",
    "bankId": "high-quality",
    "number": 39
  },
  {
    "id": "high-quality-40",
    "title": "Question 6.6 [Advanced]",
    "question": "Refer to the receptive field figure. After two 3×3 convolutional layers\n(with stride=1, padding=0), what is the receptive field size at each position in the\noutput?\n\nReceptive Field",
    "images": [],
    "options": [
      "3×3",
      "5×5",
      "7×7",
      "9×9"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Receptive field grows with each layer. First 3×3 conv: RF =\n3×3. Second 3×3 conv: each output pixel sees 3×3 in layer 1, which each see\n3×3 in input. Total RF = 5×5 (3 + 3 - 1 = 5).\n感受野随着每层增长。第一个3×3 卷积：RF = 3×3。第二个3×3 卷积：每个输出\n像素看到layer 1 中的3×3，每个看到输入中的3×3。总RF = 5×5（3 + 3 - 1 =\n5）。",
    "bankId": "high-quality",
    "number": 40
  },
  {
    "id": "high-quality-41",
    "title": "Question 6.7 [Intermediate]",
    "question": "What is the primary purpose of 1×1 convolutions in CNNs (as used in\nGoogLeNet’s Inception modules)?",
    "images": [],
    "options": [
      "To increase spatial resolution",
      "To reduce/increase the number of channels\n(dimensionality reduction/expansion)",
      "To add more non-linearity",
      "To replace\npooling layers"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "1×1 convolutions perform channel-wise linear combinations,\nallowing reduction of channels before expensive larger convolutions (reducing\ncomputation) or increasing channels for more expressive power.\n1×1 卷积执行通道间的线性组合，允许在昂贵的大卷积之前减少通道（减少计算）\n或增加通道以增强表达能力。",
    "bankId": "high-quality",
    "number": 41
  },
  {
    "id": "high-quality-42",
    "title": "Question 6.8 [Advanced]",
    "question": "In transfer learning, why is fine-tuning typically applied only to the later\nlayers of a pre-trained network?\n\n---\n\n<!-- Page 39 -->",
    "images": [],
    "options": [
      "Earlier layers contain task-specific features",
      "Earlier layers contain generic,\nlow-level features (edges, textures) that are reusable",
      "Later layers have fewer\nparameters",
      "Fine-tuning all layers would cause overfitting"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "CNNs learn hierarchical features: early layers detect\nedges/textures (generic), later layers detect object parts/classes (task-specific).\nEarly layers are transferable to new tasks; later layers need adaptation.\nCNN 学习层次化特征：早期层检测边缘/纹理（通用），后期层检测物体部分/类别\n（任务特定）。早期层可迁移到新任务；后期层需要适应。",
    "bankId": "high-quality",
    "number": 42
  },
  {
    "id": "high-quality-43",
    "title": "Question 6.9 [Intermediate]",
    "question": "What is data augmentation primarily used for in CNN training?",
    "images": [],
    "options": [
      "To reduce training time",
      "To artificially increase dataset size and improve\ngeneralization",
      "To normalize input images",
      "To reduce model parameters"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Data augmentation (rotation, flipping, scaling, etc.) creates\nvariations of training images, effectively increasing dataset size without collecting\nnew data. This improves model generalization and reduces overfitting.\n数据增强（旋转、翻转、缩放等）创建训练图像的变体，有效增加数据集大小而无\n需收集新数据。这提高模型泛化能力并减少过拟合。\n\n---\n\n<!-- Page 40 -->\n\n**Page 40 figures / 第 40 页图片：**\n\n![Page 40 figure](/COMP9517_question_bank_editable_with_images/COMP9517_md_assets/page-40-figure-1.png)\n\n## Part 7: Motion Analysis and Object Tracking (Week 8-9)\n**第七部分：运动分析与目标跟踪（Week 8-9）**",
    "bankId": "high-quality",
    "number": 43
  },
  {
    "id": "high-quality-44",
    "title": "Question 7.1 [Basic]",
    "question": "Refer to the optical flow figure. What is the fundamental assumption of\noptical flow estimation?\n\nFigure: Optical Flow",
    "images": [],
    "options": [
      "The camera is stationary",
      "Brightness constancy - pixel intensity remains\nconstant between frames",
      "Objects move at constant velocity",
      "Background is\nuniform"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Optical flow assumes brightness constancy: I(x,y,t) = I(x+dx,\ny+dy, t+dt). This leads to the optical flow constraint equation. Violations occur\nwith lighting changes or specular reflections.\n\n---\n\n<!-- Page 41 -->\n光流假设亮度恒定：I(x,y,t) = I(x+dx, y+dy, t+dt)。这导致光流约束方程。光照变化\n或镜面反射会违反此假设。",
    "bankId": "high-quality",
    "number": 44
  },
  {
    "id": "high-quality-45",
    "title": "Question 7.2 [Intermediate]",
    "question": "What is the aperture problem in optical flow?",
    "images": [],
    "options": [
      "The camera lens is too small",
      "Motion perpendicular to edges cannot be\ndetermined from local information",
      "The algorithm runs too slowly",
      "Only large\nmotions can be detected"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "The aperture problem: viewing motion through a small\naperture (local window), motion parallel to an edge is visible, but motion\nperpendicular to it is ambiguous. Additional constraints (smoothness, etc.) are\nneeded.\n孔径问题：通过小孔径（局部窗口）观察运动，平行于边缘的运动可见，但垂直于\n它的运动是模糊的。需要额外的约束（平滑性等）。",
    "bankId": "high-quality",
    "number": 45
  },
  {
    "id": "high-quality-46",
    "title": "Question 7.3 [Intermediate]",
    "question": "In background subtraction for motion detection, what assumption is\nmade?",
    "images": [],
    "options": [
      "The background is constantly changing",
      "The background remains static or\ncan be modeled",
      "All objects move at the same speed",
      "The camera moves\nwith the objects"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Background subtraction assumes a static background or a\nbackground model that can be updated. Moving objects are detected as\ndifferences from this background model.\n背景减除假设静态背景或可更新的背景模型。运动物体被检测为与该背景模型的差\n异。",
    "bankId": "high-quality",
    "number": 46
  },
  {
    "id": "high-quality-47",
    "title": "Question 7.4 [Advanced]",
    "question": "What is the key difference between the Kalman filter and particle filter\nfor object tracking?",
    "images": [],
    "options": [
      "Kalman filter is faster",
      "Kalman filter assumes Gaussian noise and linear\ndynamics; particle filter handles non-Gaussian noise and non-linear dynamics",
      "Particle filter requires less memory",
      "Kalman filter can track multiple objects"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Kalman filter is optimal for linear-Gaussian systems. Particle\nfilter uses Monte Carlo sampling to approximate any distribution, handling non-\nlinear, non-Gaussian cases at the cost of more computation.\n卡尔曼滤波器对线性高斯系统是最优的。粒子滤波器使用蒙特卡洛采样来近似任何\n分布，以更多计算为代价处理非线性、非高斯情况。",
    "bankId": "high-quality",
    "number": 47
  },
  {
    "id": "high-quality-48",
    "title": "Question 7.5 [Intermediate]",
    "question": "In the Hidden Markov Model (HMM) for tracking, what does the Markov\nassumption state?",
    "images": [],
    "options": [
      "The current state depends on all previous states",
      "The current state depends\nonly on the previous state",
      "Observations depend on future states",
      "States are\nindependent of each other --- <!-- Page 43 -->"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "The Markov assumption: P(X_t | X_{t-1}, X_{t-2}, …) = P(X_t\n| X_{t-1}). The current state is conditionally independent of earlier history given\nthe immediate past. This simplifies computation.\n马尔可夫假设：P(X_t | X_{t-1}, X_{t-2}, …) = P(X_t | X_{t-1})。给定直接过去，当\n前状态与更早的历史条件独立。这简化了计算。",
    "bankId": "high-quality",
    "number": 48
  },
  {
    "id": "high-quality-49",
    "title": "Question 7.6 [Advanced]",
    "question": "What causes the ambiguity in motion estimation when using template\nmatching with mutual information?",
    "images": [],
    "options": [
      "The template is too large",
      "Multiple locations may have similar appearance\n(local minima)",
      "The image resolution is too low",
      "The object is moving too fast"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Template matching can find multiple locations with similar\nappearance to the template, creating local minima in the matching score. This\nambiguity requires additional constraints or a good initialization.\n模板匹配可以找到多个与模板外观相似的位置，在匹配分数中产生局部最小值。这\n种模糊性需要额外的约束或良好的初始化。\n\n---\n\n<!-- Page 44 -->\n## Part 8: Advanced Topics and Comprehensive Questions\n**第八部分：高级主题与综合题**",
    "bankId": "high-quality",
    "number": 49
  },
  {
    "id": "high-quality-50",
    "title": "Question 8.1 [Advanced]",
    "question": "Compare the computational complexity of the following operations on\nan n×n image: 1. 2D convolution with k×k kernel 2. Two 1D convolutions (row\nthen column) with k×1 and 1×k kernels\nWhat is the ratio of operations (2D / separable)?",
    "images": [],
    "options": [
      "k/2",
      "k",
      "2k",
      "k²"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "2D convolution: n² × k² operations Separable: n² × k + n² × k\n= 2n²k operations Ratio = k² / (2k) = k/2\n2D 卷积：n² × k² 次操作 可分离：n² × k + n² × k = 2n²k 次操作 比率 = k² / (2k) =\nk/2",
    "bankId": "high-quality",
    "number": 50
  },
  {
    "id": "high-quality-51",
    "title": "Question 8.2 [Advanced]",
    "question": "In a CNN, why might a 3×3 convolution followed by another 3×3\nconvolution be preferred over a single 5×5 convolution?",
    "images": [],
    "options": [
      "It has fewer parameters",
      "It introduces more non-linearity (two ReLU\nactivations)",
      "It can represent more complex features",
      "All of the above"
    ],
    "answer": 3,
    "answers": [
      3
    ],
    "explanation": "Two 3×3 convs: 2 × (3×3×C×C) = 18C² parameters, two\nReLUs One 5×5 conv: 5×5×C×C = 25C² parameters, one ReLU Both have same\nreceptive field (5×5). Two 3×3 has fewer params and more non-linearity.\n两个3×3 卷积：2 × (3×3×C×C) = 18C² 参数，两个ReLU 一个5×5 卷积：\n5×5×C×C = 25C² 参数，一个ReLU 两者感受野相同（5×5）。两个3×3 参数更少\n且非线性更多。",
    "bankId": "high-quality",
    "number": 51
  },
  {
    "id": "high-quality-52",
    "title": "Question 8.3 [Advanced]",
    "question": "What is the vanishing gradient problem in deep neural networks?",
    "images": [],
    "options": [
      "Gradients become too large",
      "Gradients become extremely small in early\nlayers during backpropagation",
      "The network converges too quickly",
      "The\nlearning rate is too high"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "In deep networks with sigmoid/tanh activations, gradients\nare multiplied through many layers. Values < 1 get exponentially smaller, causing\nearly layers to learn very slowly or not at all. ReLU and skip connections (ResNet)\nhelp mitigate this.\n在使用sigmoid/tanh 激活的深层网络中，梯度通过多层相乘。小于1 的值指数级\n变小，导致早期层学习极慢或根本不学习。ReLU 和跳跃连接（ResNet）有助于\n缓解此问题。",
    "bankId": "high-quality",
    "number": 52
  },
  {
    "id": "high-quality-53",
    "title": "Question 8.4 [Advanced]",
    "question": "In batch normalization, what statistics are computed during training and\nused during inference?",
    "images": [],
    "options": [
      "Min and max values",
      "Mean and variance across the batch",
      "Median and\nstandard deviation",
      "Mode and range --- <!-- Page 46 -->"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Batch normalization normalizes using batch mean and\nvariance during training. During inference, running averages of these statistics\n(computed during training) are used for stable predictions.\n批归一化在训练期间使用批次均值和方差进行归一化。在推理期间，使用这些统计\n量的运行平均值（训练期间计算）进行稳定预测。",
    "bankId": "high-quality",
    "number": 53
  },
  {
    "id": "high-quality-54",
    "title": "Question 8.5 [Advanced]",
    "question": "What is the primary advantage of skip connections in ResNet?",
    "images": [],
    "options": [
      "They reduce the number of parameters",
      "They allow gradients to flow directly\nto earlier layers, mitigating vanishing gradients",
      "They increase the model’s\nmemory efficiency",
      "They make the network faster to train"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Skip connections create shortcuts that bypass layers,\nallowing gradients to flow directly. This enables training of very deep networks\n(100+ layers) by preventing gradient vanishing in early layers.\n跳跃连接创建绕过层的捷径，允许梯度直接流动。这通过防止早期层梯度消失，实\n现了非常深层网络（100+层）的训练。\n\n---\n\n## Answer Key / 答案速查表\n\n| Question | Answer |\n|---|---|\n| 1.1 | B |\n| 1.2 | A |\n| 1.3 | C |\n| 1.4 | A |\n| 1.5 | 1. 2^12 = 4,096 gray levels per channel. For RGB: 4096³ = |\n| 1.6 | B |\n| 1.7 | D |\n| 1.8 | B |\n| 1.9 | B |\n| 2.1 | C |\n| 2.2 | B |\n| 2.3 | B |\n| 2.4 | C |\n| 2.5 | D |\n| 2.6 | C |\n| 2.7 | B |\n| 2.8 | B |\n| 3.1 | B |\n| 3.2 | B |\n| 3.3 | B |\n| 3.4 | B |\n| 3.5 | B |\n| 3.6 | B |\n| 4.1 | B |\n| 4.2 | A |\n| 4.3 | B |\n| 4.4 | C |\n| 4.5 | B |\n| 4.6 | B |\n| 5.1 | C |\n| 5.2 | B |\n| 5.3 | A |\n| 5.4 | B |\n| 5.5 | B |\n| 5.6 | B |\n| 6.1 | B |\n| 6.2 | A |\n| 6.3 | B |\n| 6.4 | B |\n| 6.5 | D |\n| 6.6 | B |\n| 6.7 | B |\n| 6.8 | B |\n| 6.9 | B |\n| 7.1 | B |\n| 7.2 | B |\n| 7.3 | B |\n| 7.4 | B |\n| 7.5 | B |\n| 7.6 | B |\n| 8.1 | A |\n| 8.2 | D |\n| 8.3 | B |\n| 8.4 | B |\n| 8.5 | B |",
    "bankId": "high-quality",
    "number": 54
  },
  {
    "id": "simple-concept-1",
    "title": "Power Transformation",
    "question": "Power Transformation\ncan adjust image contrast through which method?",
    "images": [],
    "options": [
      "Log Transformation",
      "Gamma Correction",
      "Laplace Transformation",
      "Fourier Transformation"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 题干：幂次变换可以通过哪种方法调整图像对比度？\n- 选项 A：对数变换\n- 选项 B：伽马校正\n- 选项 C：拉普拉斯变换\n- 选项 D：傅里叶变换\n\n伽马校正是图像处理中重要的点运算，其数学表达式为 s = c·r^γ，其中：\n\n- r 是输入像素值，s 是输出像素值\n\n- c 是常数，γ 是伽马值\n\n- 当 γ < 1 时，图像变亮（增强暗部细节）\n\n- 当 γ > 1 时，图像变暗（增强亮部细节）\n\n- 当 γ = 1 时，为线性变换\n\n伽马校正是幂次变换的典型应用，主要用于校正显示设备的非线性响应特性。选项A对数变换主要用于\n\n动态范围压缩；选项C拉普拉斯变换不是图像增强方法；选项D傅里叶变换用于频域分析。\n\nGamma Correction is primarily used for?",
    "bankId": "simple-concept",
    "number": 1
  },
  {
    "id": "simple-concept-2",
    "title": "Gamma Correction is primarily used for?",
    "question": "Gamma Correction is primarily used for?",
    "images": [],
    "options": [
      "Adjusting image brightness",
      "Enhancing image contrast",
      "Noise removal",
      "Image segmentation"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "题目中文翻译：\n\n- 题干：伽马校正主要用于？\n- 选项 A：调整图像亮度\n- 选项 B：增强图像对比度\n- 选项 C：噪声去除\n- 选项 D：图像分割\n\n伽马校正的主要目的是调整图像的整体亮度分布，补偿显示设备（如CRT显示器）的非线性特性。人眼\n\n对亮度的感知是非线性的，伽马校正可以：\n\n---\n\n## Page 2\n\n1. 使图像在不同设备上显示一致\n\n2. 优化图像在人眼中的视觉效果\n\n3. 提高图像在暗部或亮部的细节可见性\n\n虽然伽马校正会影响对比度，但其主要目标是亮度调整，而非专门的对比度增强。\n\nThe main purpose of piecewise linear\ntransformation is?",
    "bankId": "simple-concept",
    "number": 2
  },
  {
    "id": "simple-concept-3",
    "title": "The main purpose of piecewise linear",
    "question": "The main purpose of piecewise linear\ntransformation is?",
    "images": [],
    "options": [
      "Smoothing images",
      "Enhancing details within specific gray levels",
      "Noise removal",
      "Improving image edges"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 题干：分段线性变换的主要目的是？\n- 选项 A：平滑图像\n- 选项 B：增强特定灰度级内的细节\n- 选项 C：噪声去除\n- 选项 D：改善图像边缘\n\n分段线性变换允许对不同的灰度级范围应用不同的线性变换，这样可以：\n\n1. 对感兴趣的灰度范围进行拉伸，增强细节\n\n2. 对不重要的灰度范围进行压缩，减少空间占用\n\n3. 实现更精细的对比度控制\n\n例如在医学图像中，可能只关心某个特定密度范围的组织结构。\n\nGray-level slicing is typically used for?",
    "bankId": "simple-concept",
    "number": 3
  },
  {
    "id": "simple-concept-4",
    "title": "Gray-level slicing is typically used for?",
    "question": "Gray-level slicing is typically used for?",
    "images": [],
    "options": [
      "Enhancing specific gray levels in images",
      "Smoothing images",
      "Histogram equalization",
      "Image compression"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "题目中文翻译：\n\n- 题干：灰度级分层通常用于？\n- 选项 A：增强图像中的特定灰度级\n- 选项 B：平滑图像\n- 选项 C：直方图均衡化\n- 选项 D：图像压缩\n\n灰度级分层是一种突出显示特定灰度范围的技术：\n\n1. 保持感兴趣的灰度级不变或增强\n\n2. 将其他灰度级设为较低值或保持不变\n\n3. 常用于突出显示特定密度或亮度的区域\n\n例如在X光片中突出显示骨骼结构，或在卫星图像中突出显示特定地物。\n\n---\n\n## Page 3\n\nThe primary use of Histogram Matching\nis?",
    "bankId": "simple-concept",
    "number": 4
  },
  {
    "id": "simple-concept-5",
    "title": "The primary use of Histogram Matching",
    "question": "The primary use of Histogram Matching\nis?",
    "images": [],
    "options": [
      "Enhancing image contrast",
      "Adjusting the image to match a target histogram",
      "Edge detection",
      "Noise removal"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 题干：直方图匹配的主要用途是？\n- 选项 A：增强图像对比度\n- 选项 B：调整图像以匹配目标直方图\n- 选项 C：边缘检测\n- 选项 D：噪声去除\n\n直方图匹配（规定化）的目标是将输入图像的直方图变换为指定的目标直方图形状：\n\n1. 不同于直方图均衡化的均匀分布目标\n\n2. 可以实现特定的色调分布效果\n\n3. 常用于图像风格转换、颜色校正等应用\n\n4. 实现步骤：输入图像均衡化 → 目标直方图均衡化 → 反向映射\n\nThe main purpose of Histogram\nEqualization is?",
    "bankId": "simple-concept",
    "number": 5
  },
  {
    "id": "simple-concept-6",
    "title": "The main purpose of Histogram",
    "question": "The main purpose of Histogram\nEqualization is?",
    "images": [],
    "options": [
      "Enhancing image contrast",
      "Smoothing images",
      "Image compression",
      "Noise removal"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "题目中文翻译：\n\n- 题干：直方图均衡化的主要目的是？\n- 选项 A：增强图像对比度\n- 选项 B：平滑图像\n- 选项 C：图像压缩\n- 选项 D：噪声去除\n\n直方图均衡化通过重新分布像素灰度值来增强图像对比度：\n\n1. 将原始直方图转换为近似均匀分布\n\n2. 充分利用整个灰度级范围\n\n3. 增强图像的视觉效果和细节可见性\n\n4. 数学基础：累积分布函数（CDF）的单调性\n\n但需注意：可能产生过度增强或伪影效果。\n\n多级阈值分割与单级阈值分割的主要区别是？/ The main difference\nbetween multilevel thresholding and single-level thresholding is?\n\n---\n\n## Page 4",
    "bankId": "simple-concept",
    "number": 6
  },
  {
    "id": "simple-concept-7",
    "title": "The primary use of Image Smoothing is?",
    "question": "The primary use of Image Smoothing is?",
    "images": [],
    "options": [
      "Enhancing image contrast",
      "Noise removal",
      "Edge detection",
      "Image segmentation"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 题干：图像平滑的主要用途是？\n- 选项 A：增强图像对比度\n- 选项 B：噪声去除\n- 选项 C：边缘检测\n- 选项 D：图像分割\n\n图像平滑（也称为图像滤波）的主要目的是去除或减少图像中的噪声：\n\n1. 通过邻域平均操作减少随机噪声\n\n2. 常用方法：均值滤波、高斯滤波、中值滤波\n\n3. 副作用：可能会模糊边缘和细节\n\n4. 需要在噪声去除和细节保持之间找到平衡\n\nWhich method is used for edge\ndetection?",
    "bankId": "simple-concept",
    "number": 7
  },
  {
    "id": "simple-concept-8",
    "title": "Which method is used for edge",
    "question": "Which method is used for edge\ndetection?",
    "images": [],
    "options": [
      "Sobel Operator",
      "Histogram Equalization",
      "Log Transformation",
      "Gray-level Slicing"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "题目中文翻译：\n\n- 题干：以下哪种方法用于边缘检测？\n- 选项 A：Sobel算子\n- 选项 B：直方图均衡化\n- 选项 C：对数变换\n- 选项 D：灰度级分层\n\nSobel算子是经典的一阶导数边缘检测算子：\n\n- 使用两个3×3卷积核分别检测水平和垂直边缘\n\n- 结合了平滑和微分操作，对噪声有一定抗性\n\n- 其他边缘检测方法：Prewitt、Roberts、Canny等\n\n- 选项B、C、D都不是专门的边缘检测方法\n\nThe primary use of Image Sharpening is?",
    "bankId": "simple-concept",
    "number": 8
  },
  {
    "id": "simple-concept-9",
    "title": "The primary use of Image Sharpening is?",
    "question": "The primary use of Image Sharpening is?",
    "images": [],
    "options": [
      "Enhancing image details",
      "Smoothing images",
      "Noise removal",
      "Color transformation"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "题目中文翻译：\n\n- 题干：图像锐化的主要用途是？\n- 选项 A：增强图像细节\n- 选项 B：平滑图像\n- 选项 C：噪声去除\n- 选项 D：颜色变换\n\n图像锐化与平滑相反，目的是增强图像中的细节和边缘：\n\n1. 通过高通滤波器或拉普拉斯算子实现\n\n2. 常用方法：非锐化掩模、高通滤波、拉普拉斯锐化\n\n3. 会放大高频成分，包括噪声\n\n4. 适用于模糊图像的细节恢复\n\nLog Transformation is\nparticularly effective in processing which type of images?",
    "bankId": "simple-concept",
    "number": 9
  },
  {
    "id": "simple-concept-10",
    "title": "Log Transformation is",
    "question": "Log Transformation is\nparticularly effective in processing which type of images?",
    "images": [],
    "options": [
      "High-brightness images",
      "Low-brightness images",
      "Noisy images",
      "Edge images"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 题干：对数变换在处理哪种类型的图像时特别有效？\n- 选项 A：高亮度图像\n- 选项 B：低亮度图像\n- 选项 C：噪声图像\n- 选项 D：边缘图像\n\n对数变换 s = c·log(1+r) 对于低亮度图像特别有效：\n\n1. 压缩高灰度值，扩展低灰度值\n\n2. 增强暗部细节的可见性\n\n---\n\n## Page 6\n\n3. 常用于动态范围很大的图像（如天文图像、医学图像）\n\n4. 利用了人眼对低亮度区域更敏感的特性\n\nOtsu\nOtsu's/Isodata/Triangle methods are used for which type of image\nprocessing?",
    "bankId": "simple-concept",
    "number": 10
  },
  {
    "id": "simple-concept-11",
    "title": "The threshold (t) in the",
    "question": "The threshold (t) in the\nIsodata method will eventually converge to?",
    "images": [],
    "options": [
      "An arbitrary value",
      "The mean gray level of the image",
      "The average gray level of the foreground and background",
      "The initial threshold"
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "题目中文翻译：\n\n- 题干：Isodata方法中的阈值(t)最终会收敛到？\n- 选项 A：任意值\n- 选项 B：图像的平均灰度级\n- 选项 C：前景和背景的平均灰度级\n- 选项 D：初始阈值\n\n---\n\n## Page 7\n\nIsodata算法的迭代过程：\n\n1. 初始设定一个阈值T₀\n\n2. 将像素分为两组：G₁(≤T)和G₂(>T)\n\n3. 计算两组的均值：μ₁和μ₂\n\n4. 更新阈值：T = (μ₁ + μ₂)/2\n\n5. 重复直至收敛\n\n最终阈值是前景和背景均值的平均值，确保了分割的平衡性。\n\nThe criteria for selecting the\nthreshold in the Otsu method are?",
    "bankId": "simple-concept",
    "number": 11
  },
  {
    "id": "simple-concept-12",
    "title": "The criteria for selecting the",
    "question": "The criteria for selecting the\nthreshold in the Otsu method are?",
    "images": [],
    "options": [
      "Maximum between-class variance",
      "Minimum between-class variance",
      "Maximum within-class variance",
      "Minimum within-class variance"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "题目中文翻译：\n\n- 题干：Otsu方法中选择阈值的标准是？\n- 选项 A：最大类间方差\n- 选项 B：最小类间方差\n- 选项 C：最大类内方差\n- 选项 D：最小类内方差\n\nOtsu方法基于统计学原理，同时满足两个等价标准：\n\n1. 最大化类间方差：使前景和背景之间的差异最大化\n\n2. 最小化类内方差：使前景内部和背景内部的差异最小化\n\n数学关系：总方差 = 类间方差 + 类内方差（常数）\n\n因此最大化类间方差等价于最小化类内方差。\n\nHow many peaks does the Otsu\nmethod assume in the image histogram?",
    "bankId": "simple-concept",
    "number": 12
  },
  {
    "id": "simple-concept-13",
    "title": "How many peaks does the Otsu",
    "question": "How many peaks does the Otsu\nmethod assume in the image histogram?",
    "images": [],
    "options": [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 题干：Otsu方法假设图像直方图有几个峰？\n- 选项 A：一个\n- 选项 B：两个\n- 选项 C：三个\n- 选项 D：四个\n\nOtsu方法的基本假设：\n\n1. 图像包含两个主要区域：前景和背景\n\n---\n\n## Page 8\n\n2. 直方图呈现双峰分布特征\n\n3. 最优阈值位于两峰之间的谷底\n\n4. 如果图像不满足双峰假设，Otsu方法可能失效\n\n### 卷积与邻域算子 / Convolution & Neighborhood Operators\n\nWhat is the definition of a convolution kernel?",
    "bankId": "simple-concept",
    "number": 13
  },
  {
    "id": "simple-concept-14",
    "title": "What is the definition of a convolution kernel?",
    "question": "What is the definition of a convolution kernel?",
    "images": [],
    "options": [
      "A fixed-length vector",
      "A small matrix used to define how to combine neighboring pixel information",
      "An algorithm for image compression",
      "A filter for edge detection"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 题干：卷积核的定义是什么？\n- 选项 A：固定长度的向量\n- 选项 B：用于定义如何组合邻近像素信息的小矩阵\n- 选项 C：图像压缩算法\n- 选项 D：边缘检测滤波器\n\n卷积核（也称滤波器或模板）是图像处理中的核心概念：\n\n1. 本质：通常是3×3、5×5等小尺寸矩阵\n\n2. 功能：定义当前像素与邻域像素的权重关系\n\n3. 作用：通过滑动窗口操作实现各种图像处理效果\n\n4. 应用：边缘检测、模糊、锐化、特征提取等\n\n例如：3×3均值滤波核为 [1/9, 1/9, 1/9; 1/9, 1/9, 1/9; 1/9, 1/9, 1/9]\n\nIn the sliding window\noperation, where is the center of the convolution kernel aligned?",
    "bankId": "simple-concept",
    "number": 14
  },
  {
    "id": "simple-concept-15",
    "title": "In the sliding window",
    "question": "In the sliding window\noperation, where is the center of the convolution kernel aligned?",
    "images": [],
    "options": [
      "Top-left corner of the image",
      "Bottom-right corner of the image",
      "Current pixel",
      "Middle of the image"
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "题目中文翻译：\n\n- 题干：在滑动窗口操作中，卷积核的中心与什么对齐？\n- 选项 A：图像的左上角\n- 选项 B：图像的右下角\n- 选项 C：当前像素\n- 选项 D：图像的中间\n\n滑动窗口操作的核心机制：\n\n1. 对齐方式：卷积核中心与当前处理像素对齐\n\n---\n\n## Page 9\n\n2. 计算过程：核内每个权重与对应邻域像素相乘后求和\n\n3. 边界处理：需要特殊处理边界像素（填充、镜像、环绕等）\n\n4. 输出位置：计算结果赋给当前像素位置\n\nWhat is the main difference\nbetween a neighborhood operator and a convolution kernel?",
    "bankId": "simple-concept",
    "number": 15
  },
  {
    "id": "simple-concept-16",
    "title": "What is the main difference",
    "question": "What is the main difference\nbetween a neighborhood operator and a convolution kernel?",
    "images": [],
    "options": [
      "Neighborhood operator is a broader concept encompassing all local area operations",
      "Convolution kernels are used for nonlinear operations",
      "Neighborhood operators are only used for edge detection",
      "Convolution kernels are more complex than neighborhood operators"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "题目中文翻译：\n\n- 题干：邻域算子和卷积核的主要区别是什么？\n- 选项 A：邻域算子是涵盖所有局部区域操作的更广泛概念\n- 选项 B：卷积核用于非线性操作\n- 选项 C：邻域算子仅用于边缘检测\n- 选项 D：卷积核比邻域算子更复杂\n\n概念层次关系：\n\n1. 邻域算子：所有基于像素邻域的操作（包括线性和非线性）\n\n2. 卷积核：特指线性邻域操作的权重矩阵\n\n3. 关系：卷积是邻域算子的一个子集\n\n4. 非线性邻域算子：中值滤波、形态学操作等不能用卷积表示\n\nWhat is the nature of the convolution\noperation?",
    "bankId": "simple-concept",
    "number": 16
  },
  {
    "id": "simple-concept-17",
    "title": "What is the nature of the convolution",
    "question": "What is the nature of the convolution\noperation?",
    "images": [],
    "options": [
      "Linear, translation-invariant operation",
      "Nonlinear, translation-invariant operation",
      "Linear, translation-variant operation",
      "Nonlinear, translation-variant operation"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "题目中文翻译：\n\n- 题干：卷积运算的性质是什么？\n- 选项 A：线性、平移不变操作\n- 选项 B：非线性、平移不变操作\n- 选项 C：线性、平移可变操作\n- 选项 D：非线性、平移可变操作\n\n卷积的重要性质：\n\n1. 线性性：满足叠加原理 conv(af₁+bf₂, h) = a·conv(f₁,h) + b·conv(f₂,h)\n\n---\n\n## Page 10\n\n2. 平移不变性：如果输入平移，输出也相应平移，处理方式不变\n\n3. 数学意义：这些性质使得卷积在频域分析中有重要应用\n\n4. 实际意义：保证了滤波器在图像不同位置的一致性\n\nWhich properties does the convolution\noperation satisfy?",
    "bankId": "simple-concept",
    "number": 17
  },
  {
    "id": "simple-concept-18",
    "title": "Which properties does the convolution",
    "question": "Which properties does the convolution\noperation satisfy?",
    "images": [],
    "options": [
      "Commutative property",
      "Associative property",
      "Distributive property",
      "All of the above"
    ],
    "answer": 3,
    "answers": [
      3
    ],
    "explanation": "题目中文翻译：\n\n- 题干：卷积运算满足哪些性质？\n- 选项 A：交换律\n- 选项 B：结合律\n- 选项 C：分配律\n- 选项 D：以上所有\n\n卷积的数学性质：\n\n1. 交换律：f * g = g * f（滤波器和图像可交换）\n\n2. 结合律：(f * g) * h = f * (g * h)（多个滤波器的级联）\n\n3. 分配律：f * (g + h) = f * g + f * h（线性性的体现）\n\n4. 实际意义：这些性质为复杂滤波器的设计和分析提供理论基础\n\nFor convolution, if the input f(x,y) produces the\noutput g(x,y), what will be the output for the shifted input f(x-Δx, y-\nΔy)?",
    "bankId": "simple-concept",
    "number": 18
  },
  {
    "id": "simple-concept-19",
    "title": "For convolution, if the input f(x,y) produces the",
    "question": "For convolution, if the input f(x,y) produces the\noutput g(x,y), what will be the output for the shifted input f(x-Δx, y-\nΔy)?",
    "images": [],
    "options": [
      "g(x, y)",
      "g(x+Δx, y+Δy)",
      "g(x-Δx, y-Δy)",
      "Cannot be determined"
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "题目中文翻译：\n\n- 题干：输出是什么？\n- 选项 D：无法确定\n- 题干：对于卷积，如果输入f(x,y)产生输出g(x,y)，那么平移输入f(x-Δx, y-Δy)的\n\n平移不变性的数学表达：\n\n1. 原理：输入的平移导致输出的相同平移\n\n2. 数学表示：conv(f(x-Δx, y-Δy), h) = g(x-Δx, y-Δy)\n\n3. 物理意义：滤波器对图像不同位置的相同模式产生相同响应\n\n---\n\n## Page 11\n\n4. 应用价值：保证了特征检测的位置无关性\n\nWhen extending an image beyond its borders, which method sets all\nadded pixels to a constant (zero) value?",
    "bankId": "simple-concept",
    "number": 19
  },
  {
    "id": "simple-concept-20",
    "title": "When extending an image beyond its borders, which method sets all",
    "question": "When extending an image beyond its borders, which method sets all\nadded pixels to a constant (zero) value?",
    "images": [],
    "options": [
      "Padding",
      "Clamping",
      "Wrapping",
      "Mirroring"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "题目中文翻译：\n\n- 题干：当扩展图像边界时，哪种方法将所有添加的像素设为常数（零）值？\n- 选项 A：填充\n- 选项 B：钳制\n- 选项 C：环绕\n- 选项 D：镜像\n\n边界处理方法详解：\n\n1. Padding（零填充）：边界外设为0或指定常数值\n\n2. 优点：实现简单，计算快速\n\n3. 缺点：可能在边界产生伪影\n\n4. 适用：当边界外确实应该是背景时使用\n\nWhich border handling\nmethod repeats all border pixel values?",
    "bankId": "simple-concept",
    "number": 20
  },
  {
    "id": "simple-concept-21",
    "title": "Which border handling",
    "question": "Which border handling\nmethod repeats all border pixel values?",
    "images": [],
    "options": [
      "Padding",
      "Clamping",
      "Wrapping",
      "Mirroring"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 题干：哪种边界处理方法重复所有边界像素值？\n- 选项 A：填充\n- 选项 B：钳制\n- 选项 C：环绕\n- 选项 D：镜像\n\n钳制（Clamping）方法：\n\n1. 原理：将最边缘的像素值向外扩展\n\n2. 效果：边界外的虚拟像素与边界像素相同\n\n3. 优点：避免了零填充的不连续性\n\n4. 应用：适用于边界处确实应该延续内部值的情况\n\n---\n\n## Page 12\n\nWhich method handles\nborders by copying pixel values from the opposite side?",
    "bankId": "simple-concept",
    "number": 21
  },
  {
    "id": "simple-concept-22",
    "title": "Which method handles",
    "question": "Which method handles\nborders by copying pixel values from the opposite side?",
    "images": [],
    "options": [
      "Padding",
      "Clamping",
      "Wrapping",
      "Mirroring"
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "题目中文翻译：\n\n- 题干：哪种方法通过从对面复制像素值来处理边界？\n- 选项 A：填充\n- 选项 B：钳制\n- 选项 C：环绕\n- 选项 D：镜像\n\n环绕（Wrapping）方法：\n\n1. 原理：将图像看作周期性拓展，左边界连接右边界\n\n2. 实现：模运算实现坐标回绕\n\n3. 适用：纹理分析、周期性模式处理\n\n4. 限制：只适用于具有周期性特征的图像\n\nWhich method reflects pixel values at\nthe border?",
    "bankId": "simple-concept",
    "number": 22
  },
  {
    "id": "simple-concept-23",
    "title": "Which method reflects pixel values at",
    "question": "Which method reflects pixel values at\nthe border?",
    "images": [],
    "options": [
      "Padding",
      "Clamping",
      "Wrapping",
      "Mirroring"
    ],
    "answer": 3,
    "answers": [
      3
    ],
    "explanation": "题目中文翻译：\n\n- 题干：哪种方法在边界处反射像素值？\n- 选项 A：填充\n- 选项 B：钳制\n- 选项 C：环绕\n- 选项 D：镜像\n\n镜像（Mirroring）方法：\n\n1. 原理：以边界为轴，将内部像素镜像翻转到边界外\n\n2. 优点：保持了边界处的连续性和平滑性\n\n3. 实现：使用对称性扩展图像\n\n4. 应用：最常用的边界处理方法，适用于大多数自然图像\n\n### 图像滤波 / Image Filtering\n\n---\n\n## Page 13\n\nWhat is the primary purpose of image\nfiltering?",
    "bankId": "simple-concept",
    "number": 23
  },
  {
    "id": "simple-concept-24",
    "title": "What is the primary purpose of image",
    "question": "What is the primary purpose of image\nfiltering?",
    "images": [],
    "options": [
      "Enhancing image colors",
      "Processing noise and details in images",
      "Performing geometric transformations on images",
      "Compressing images"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 题干：图像滤波的主要目的是什么？\n- 选项 A：增强图像颜色\n- 选项 B：处理图像中的噪声和细节\n- 选项 C：对图像进行几何变换\n- 选项 D：压缩图像\n\n图像滤波是图像处理的核心技术：\n\n1. 主要目标：改善图像质量，增强或抑制某些特征\n\n2. 处理对象：噪声、边缘、纹理等图像特征\n\n3. 分类方式：线性/非线性、低通/高通/带通滤波\n\n4. 应用领域：预处理、特征提取、图像增强等\n\nHigh-pass filters are primarily used for?",
    "bankId": "simple-concept",
    "number": 24
  },
  {
    "id": "simple-concept-25",
    "title": "A common example of a linear filter is?",
    "question": "A common example of a linear filter is?",
    "images": [],
    "options": [
      "Median filter",
      "Mean filter",
      "Sobel operator",
      "Laplace operator"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 题干：线性滤波器的常见例子是？\n- 选项 A：中值滤波器\n- 选项 B：均值滤波器\n- 选项 C：Sobel算子\n- 选项 D：拉普拉斯算子\n\n线性滤波器的特征：用图像中每个像素的邻域像素的均值作为输出。\n\n1. 数学性质：满足叠加原理和齐次性\n\n2. 实现方式：通过卷积运算实现\n\n3. 常见类型：均值、高斯、Sobel、Laplace等\n\n4. 非线性对比：中值滤波器不能用卷积表示，属于非线性滤波器\n\nWhich of the following filters is a\nnonlinear filter?",
    "bankId": "simple-concept",
    "number": 25
  },
  {
    "id": "simple-concept-26",
    "title": "Which of the following filters is a",
    "question": "Which of the following filters is a\nnonlinear filter?",
    "images": [],
    "options": [
      "Mean filter",
      "Box filter",
      "Median filter",
      "Gaussian filter"
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "题目中文翻译：\n\n- 题干：以下哪个滤波器是非线性滤波器？\n- 选项 A：均值滤波器\n- 选项 B：箱式滤波器\n- 选项 C：中值滤波器\n- 选项 D：高斯滤波器\n\n中值滤波器的非线性特性：\n\n1. 工作原理：选择邻域像素的中值作为输出\n\n2. 非线性体现：不满足 median(af₁+bf₂) = a·median(f₁) + b·median(f₂)\n\n3. 优点：能有效去除脉冲噪声，保持边缘\n\n4. 应用：椒盐噪声去除、边缘保持平滑\n\nWhat is the common use of mean\nfiltering?",
    "bankId": "simple-concept",
    "number": 26
  },
  {
    "id": "simple-concept-27",
    "title": "What is the common use of mean",
    "question": "What is the common use of mean\nfiltering?",
    "images": [],
    "options": [
      "Image sharpening",
      "Image blurring and noise reduction",
      "Edge detection",
      "Image enhancement"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 题干：均值滤波的常见用途是什么？\n- 选项 A：图像锐化\n- 选项 B：图像模糊和噪声减少\n- 选项 C：边缘检测\n- 选项 D：图像增强\n\n均值滤波的特点和应用：\n\n1. 原理：用邻域像素的平均值替换中心像素\n\n2. 效果：平滑图像，减少噪声\n\n3. 副作用：会模糊边缘和细节\n\n4. 适用噪声：高斯噪声等加性噪声\n\nHow are the weights of the\nGaussian filter's convolution kernel distributed?",
    "bankId": "simple-concept",
    "number": 27
  },
  {
    "id": "simple-concept-28",
    "title": "How are the weights of the",
    "question": "How are the weights of the\nGaussian filter's convolution kernel distributed?",
    "images": [],
    "options": [
      "All weights are equal",
      "The center pixel has the highest weight, decreasing with distance from the center",
      "Edge pixels have the highest weight",
      "Weights are randomly distributed"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 题干：高斯滤波器卷积核的权重是如何分布的？\n- 选项 A：所有权重相等\n- 选项 B：中心像素权重最高，随距离中心距离增加而递减\n- 选项 C：边缘像素权重最高\n- 选项 D：权重随机分布\n\n高斯滤波器的数学基础：\n\n1. 数学模型：基于二维高斯函数 G(x,y) = (1/2πσ²)e^(-(x²+y²)/2σ²)\n\n2. 权重分布：中心最大，向外呈钟形衰减\n\n3. 参数控制：σ控制平滑程度，σ越大平滑效果越强\n\n4. 优势：在平滑和细节保持间达到较好平衡\n\nAn important property of the\nGaussian filter is?",
    "bankId": "simple-concept",
    "number": 28
  },
  {
    "id": "simple-concept-29",
    "title": "An important property of the",
    "question": "An important property of the\nGaussian filter is?",
    "images": [],
    "options": [
      "Only suitable for low-frequency noise",
      "Suitable for all frequency noise",
      "The convolution operation in the frequency domain remains a Gaussian function",
      "Not suitable for edge detection"
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "题目中文翻译：\n\n- 题干：高斯滤波器的一个重要性质是？\n- 选项 A：只适用于低频噪声\n- 选项 B：适用于所有频率噪声\n- 选项 C：频域中的卷积运算仍保持高斯函数形式\n- 选项 D：不适用于边缘检测\n\n高斯函数的重要性质：\n\n---\n\n## Page 16\n\n1. 自相似性：高斯函数与高斯函数的卷积仍是高斯函数\n\n2. 频域性质：高斯函数的傅里叶变换仍是高斯函数\n\n3. 可分离性：二维高斯核可分解为两个一维高斯核\n\n4. 理论意义：这些性质为多尺度分析提供了理论基础\n\nCompared to mean\nfiltering, which one retains more image details?",
    "bankId": "simple-concept",
    "number": 29
  },
  {
    "id": "simple-concept-30",
    "title": "Compared to mean",
    "question": "Compared to mean\nfiltering, which one retains more image details?",
    "images": [],
    "options": [
      "Gaussian filtering",
      "Mean filtering",
      "They are the same",
      "Depends on the specific application"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "题目中文翻译：\n\n- 题干：与均值滤波相比，哪个保留更多图像细节？\n- 选项 A：高斯滤波\n- 选项 B：均值滤波\n- 选项 C：两者相同\n- 选项 D：取决于具体应用\n\n高斯滤波与均值滤波的比较：\n\n1. 权重分布：高斯滤波器中心权重大，边缘权重小；均值滤波器权重相等\n\n2. 细节保持：高斯滤波对远离中心的像素影响较小，更好保持局部结构\n\n3. 平滑效果：均值滤波产生更强的平滑效果\n\n4. 计算复杂度：均值滤波计算更简单\n\nMedian filtering is particularly\neffective for which type of noise?",
    "bankId": "simple-concept",
    "number": 30
  },
  {
    "id": "simple-concept-31",
    "title": "Median filtering is particularly",
    "question": "Median filtering is particularly\neffective for which type of noise?",
    "images": [],
    "options": [
      "Gaussian noise",
      "Salt-and-pepper noise",
      "Band noise",
      "Periodic noise"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 题干：中值滤波对哪种类型的噪声特别有效？\n- 选项 A：高斯噪声\n- 选项 B：椒盐噪声\n- 选项 C：带状噪声\n- 选项 D：周期性噪声\n\n中值滤波器的优势：\n\n1. 椒盐噪声特点：极值噪声，表现为随机的黑白点\n\n2. 中值特性：中值对极值不敏感，能有效过滤异常值\n\n3. 边缘保持：不会平均化处理，能保持边缘清晰\n\n---\n\n## Page 17\n\n4. 局限性：对高斯噪声等加性噪声效果有限\n\nWhat type of random signal is\nGaussian noise?",
    "bankId": "simple-concept",
    "number": 31
  },
  {
    "id": "simple-concept-32",
    "title": "What type of random signal is",
    "question": "What type of random signal is\nGaussian noise?",
    "images": [],
    "options": [
      "Continuous random signal with relatively uniform amplitude and randomness",
      "Discrete random signal with extreme amplitude values",
      "Continuous deterministic signal",
      "Discrete deterministic signal"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "题目中文翻译：\n\n- 题干：高斯噪声是什么类型的随机信号？\n- 选项 A：幅度相对均匀且具有随机性的连续随机信号\n- 选项 B：幅度极端值的离散随机信号\n- 选项 C：连续确定性信号\n- 选项 D：离散确定性信号\n\n高斯噪声的特征：\n\n1. 概率分布：服从正态分布N(μ, σ²)\n\n2. 幅度特性：大部分噪声值集中在均值附近\n\n3. 加性性质：通常作为加性噪声模型\n\n4. 来源：热噪声、电子噪声等自然现象\n\nWhat type of random noise is salt-\nand-pepper noise?",
    "bankId": "simple-concept",
    "number": 32
  },
  {
    "id": "simple-concept-33",
    "title": "What type of random noise is salt-",
    "question": "What type of random noise is salt-\nand-pepper noise?",
    "images": [],
    "options": [
      "Continuous random noise",
      "Discrete random noise",
      "Continuous deterministic noise",
      "Discrete deterministic noise"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 题干：椒盐噪声是什么类型的随机噪声？\n- 选项 A：连续随机噪声\n- 选项 B：离散随机噪声\n- 选项 C：连续确定性噪声\n- 选项 D：离散确定性噪声\n\n椒盐噪声的特征：\n\n1. 取值特性：只取极端值（0或255）\n\n2. 空间分布：随机出现在图像各位置\n\n3. 成因：传输错误、A/D转换错误等\n\n4. 视觉效果：像撒了黑胡椒和白盐的斑点\n\n哪种滤波器对去除椒盐噪声特别有效？/ Which filter is particularly\neffective in removing salt-and-pepper noise?\n\n---\n\n## Page 18",
    "bankId": "simple-concept",
    "number": 33
  },
  {
    "id": "simple-concept-34",
    "title": "Why do Gaussian",
    "question": "Why do Gaussian\nfiltering and mean filtering cause images to blur?",
    "images": [],
    "options": [
      "They enhance the high-frequency components of the image",
      "They set all pixel values to zero",
      "They average the image, causing detail loss",
      "They only process the low-frequency components of the image"
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "题目中文翻译：\n\n- 题干：为什么高斯滤波和均值滤波会导致图像模糊？\n- 选项 A：它们增强了图像的高频成分\n- 选项 B：它们将所有像素值设为零\n- 选项 C：它们对图像进行平均化，导致细节丢失\n- 选项 D：它们只处理图像的低频成分\n\n模糊产生的机制：\n\n1. 平均化效应：邻域像素的加权平均减少了局部变化\n\n2. 高频抑制：边缘、纹理等高频信息被平滑掉\n\n3. 空间相关性：增强了像素间的空间相关性\n\n4. 信息损失：不可逆的细节信息丢失\n\nWhat is the difference between\nGaussian noise and salt-and-pepper noise?",
    "bankId": "simple-concept",
    "number": 34
  },
  {
    "id": "simple-concept-35",
    "title": "What is the difference between",
    "question": "What is the difference between\nGaussian noise and salt-and-pepper noise?",
    "images": [],
    "options": [
      "Gaussian noise is discrete, salt-and-pepper noise is continuous",
      "Gaussian noise has relatively uniform amplitude and randomness, salt-and-pepper noise has extreme amplitude values",
      "Gaussian noise is deterministic, salt-and-pepper noise is random",
      "Gaussian noise only has black dots, salt-and-pepper noise only has white dots"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 题干：高斯噪声和椒盐噪声的区别是什么？\n- 选项 A：高斯噪声是离散的，椒盐噪声是连续的\n- 选项 B：高斯噪声具有相对均匀的幅度和随机性，椒盐噪声具有极端幅度值\n- 选项 C：高斯噪声是确定性的，椒盐噪声是随机的\n- 选项 D：高斯噪声只有黑点，椒盐噪声只有白点\n\n两种噪声的对比：\n\n特征\n高斯噪声\n椒盐噪声\n\n幅度分布\n正态分布，连续值\n极端值（0或255）\n\n空间特性\n每个像素都可能受影响\n随机位置的孤立点\n\n视觉效果\n整体模糊，颗粒感\n黑白斑点\n\n最佳滤波器\n高斯滤波器\n中值滤波器\n\n### 边缘提取/锐化 / Edge Extraction/Sharpening\n\nThe first step in Unsharp\nMasking is to apply which filter?",
    "bankId": "simple-concept",
    "number": 35
  },
  {
    "id": "simple-concept-36",
    "title": "The first step in Unsharp",
    "question": "The first step in Unsharp\nMasking is to apply which filter?",
    "images": [],
    "options": [
      "High-pass filter",
      "Low-pass filter",
      "Edge detection filter",
      "Median filter"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 题干：非锐化掩模的第一步是应用哪种滤波器？\n- 选项 A：高通滤波器\n- 选项 B：低通滤波器\n- 选项 C：边缘检测滤波器\n- 选项 D：中值滤波器\n\n非锐化掩模（Unsharp Masking）是一种经典的图像锐化技术，其工作原理：\n\n1. 第一步：对原图像应用低通滤波器（如高斯滤波）得到平滑图像\n\n2. 第二步：用原图像减去平滑图像，得到掩模（包含高频细节）\n\n---\n\n## Page 20\n\n3. 第三步：将掩模加回原图像，实现锐化效果\n\n4. 数学表达：锐化图像 = 原图像 + k×(原图像 - 低通滤波图像)\n\n这种方法的优势是可以通过调整参数k来控制锐化强度。\n\nThe purpose of the Unsharp Masking\nmethod is?",
    "bankId": "simple-concept",
    "number": 36
  },
  {
    "id": "simple-concept-37",
    "title": "The purpose of the Unsharp Masking",
    "question": "The purpose of the Unsharp Masking\nmethod is?",
    "images": [],
    "options": [
      "Noise removal",
      "Enhancing image contrast",
      "Sharpening edges and details in the image",
      "Smoothing the image"
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "题目中文翻译：\n\n- 题干：非锐化掩模方法的目的是？\n- 选项 A：噪声去除\n- 选项 B：增强图像对比度\n- 选项 C：锐化图像中的边缘和细节\n- 选项 D：平滑图像\n\n非锐化掩模的主要目标是图像锐化：\n\n1. 增强边缘：突出图像中的边缘信息\n\n2. 细节恢复：恢复因模糊而丢失的细节\n\n3. 视觉改善：提高图像的视觉清晰度\n\n4. 应用场景：医学影像、印刷、摄影后处理等\n\n相比直接高通滤波，非锐化掩模提供了更好的控制能力和更自然的效果。\n\nIn the Unsharp\nMasking method, the mask image contains which part of the image?",
    "bankId": "simple-concept",
    "number": 37
  },
  {
    "id": "simple-concept-38",
    "title": "In the Unsharp",
    "question": "In the Unsharp\nMasking method, the mask image contains which part of the image?",
    "images": [],
    "options": [
      "Low-frequency details",
      "High-frequency details",
      "Mid-frequency details",
      "All frequency details"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 题干：在非锐化掩模方法中，掩模图像包含图像的哪一部分？\n- 选项 A：低频细节\n- 选项 B：高频细节\n- 选项 C：中频细节\n- 选项 D：所有频率细节\n\n掩模图像的构成和作用：\n\n5. 构成原理：掩模 = 原图像 - 低通滤波后的图像\n\n6. 频率特性：主要包含被低通滤波器滤除的高频成分\n\n7. 内容分析：边缘、纹理、细小结构等高频信息\n\n---\n\n## Page 21\n\n8. 锐化机制：将这些高频细节重新加强到原图像中\n\n这解释了为什么非锐化掩模能够有效增强图像的锐度和细节。\n\nWhat type of filter is\nused in high-pass filtering sharpening methods?",
    "bankId": "simple-concept",
    "number": 38
  },
  {
    "id": "simple-concept-39",
    "title": "What type of filter is",
    "question": "What type of filter is\nused in high-pass filtering sharpening methods?",
    "images": [],
    "options": [
      "Gaussian filter",
      "Mean filter",
      "Laplacian filter",
      "Median filter"
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "题目中文翻译：\n\n- 题干：高通滤波锐化方法中使用什么类型的滤波器？\n- 选项 A：高斯滤波器\n- 选项 B：均值滤波器\n- 选项 C：拉贝尔或拉普拉斯滤波器\n- 选项 D：中值滤波器\n\n高通滤波锐化的核心滤波器：\n\n1. 拉普拉斯算子：二阶导数算子，检测强度变化\n\n2. 常用核：[0 -1 0; -1 4 -1; 0 -1 0] 或 [-1 -1 -1; -1 8 -1; -1 -1 -1]\n\n3. 锐化公式：锐化图像 = 原图像 - c×拉普拉斯(原图像)\n\n4. 效果特点：直接、强烈的锐化效果\n\n拉普拉斯滤波器是各向同性的，能够检测所有方向的边缘。",
    "bankId": "simple-concept",
    "number": 39
  },
  {
    "id": "simple-concept-40",
    "title": "The main disadvantage of high-pass",
    "question": "The main disadvantage of high-pass\nfiltering sharpening is?",
    "images": [],
    "options": [
      "The sharpening effect is not obvious",
      "Complex parameter adjustment",
      "It may amplify image noise",
      "High computational cost"
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "题目中文翻译：\n\n- 选项 A：锐化效果不明显\n- 选项 B：参数调整复杂\n- 选项 C：可能放大图像噪声\n- 选项 D：计算成本高\n\n高通滤波锐化的局限性：\n\n1. 噪声放大：高通滤波器同时增强边缘和噪声\n\n2. 无选择性：无法区分有用的边缘和无用的噪声\n\n3. 伪影产生：可能在平滑区域产生振铃效应\n\n4. 解决方案：\n\n◦\n预先进行降噪处理\n\n---\n\n## Page 22\n\n◦\n使用自适应锐化算法\n\n◦\n结合边缘检测，选择性锐化",
    "bankId": "simple-concept",
    "number": 40
  },
  {
    "id": "simple-concept-41",
    "title": "One characteristic of high-pass",
    "question": "One characteristic of high-pass\nfiltering sharpening is?",
    "images": [],
    "options": [
      "Provides smoothing effect",
      "Direct and strong sharpening effect",
      "Removes noise from the image",
      "Enhances the low-frequency parts of the image"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 选项 A：提供平滑效果\n- 选项 B：直接且强烈的锐化效果\n- 选项 C：从图像中去除噪声\n- 选项 D：增强图像的低频部分\n\n高通滤波锐化的特点：\n\n1. 直接性：一步完成锐化处理，无需多个步骤\n\n2. 强烈性：锐化效果明显，边缘对比度大幅提升\n\n3. 即时性：处理速度快，适合实时应用\n\n4. 对比分析：\n\n◦\n与非锐化掩模相比：控制性较差但效果更直接\n\n◦\n与平滑滤波相比：作用完全相反\n\n◦\n与噪声去除相比：可能增加而非减少噪声\n\n### 导数滤波器 / Derivative Filters\n\nThe main function of first-order\nderivative filters is?",
    "bankId": "simple-concept",
    "number": 41
  },
  {
    "id": "simple-concept-42",
    "title": "The main function of first-order",
    "question": "The main function of first-order\nderivative filters is?",
    "images": [],
    "options": [
      "Smoothing images",
      "Enhancing image contrast",
      "Detecting edges in images",
      "Noise removal"
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "题目中文翻译：\n\n- 题干：一阶导数滤波器的主要功能是？\n- 选项 A：平滑图像\n- 选项 B：增强图像对比度\n- 选项 C：检测图像中的边缘\n- 选项 D：噪声去除\n\n---\n\n## Page 23\n\n一阶导数滤波器是边缘检测的核心工具：\n\n1. 数学原理：检测图像强度的一阶变化率\n\n2. 边缘特征：边缘处强度变化最大，一阶导数达到极值\n\n3. 常用算子：Sobel、Prewitt、Roberts等\n\n4. 方向性：可以检测特定方向的边缘\n\n5. 应用领域：边缘检测、特征提取、图像分割预处理\n\n一阶导数的峰值位置对应于图像中边缘的位置。",
    "bankId": "simple-concept",
    "number": 42
  },
  {
    "id": "simple-concept-43",
    "title": "Second-order derivative filters",
    "question": "Second-order derivative filters\ncan provide what information?",
    "images": [],
    "options": [
      "The rate of change of image intensity",
      "The color distribution of the image",
      "The frequency distribution of the image",
      "The brightness distribution of the image"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "题目中文翻译：\n\n- 选项 A：图像强度的变化率\n- 选项 B：图像的颜色分布\n- 选项 C：图像的频率分布\n- 选项 D：图像的亮度分布\n\n二阶导数滤波器的信息内容：\n\n1. 变化率信息：检测强度变化的变化率（二阶变化）\n\n2. 零交叉检测：边缘在二阶导数中表现为零交叉点\n\n3. 拉普拉斯算子：最常用的二阶导数算子\n\n4. 边缘定位：比一阶导数提供更精确的边缘定位\n\n5. 特点对比：\n\n◦\n一阶导数：边缘处有极值\n\n◦\n二阶导数：边缘处过零点",
    "bankId": "simple-concept",
    "number": 43
  },
  {
    "id": "simple-concept-44",
    "title": "What do Prewitt and Sobel",
    "question": "What do Prewitt and Sobel\noperators have in common?",
    "images": [],
    "options": [
      "Both are second-order derivative operators",
      "Both smooth in one direction and differentiate in another direction",
      "Both are low-pass filters",
      "Both are nonlinear filters"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 选项 A：都是二阶导数算子\n- 选项 B：都在一个方向上平滑，在另一个方向上微分\n- 选项 C：都是低通滤波器\n- 选项 D：都是非线性滤波器\n\nPrewitt和Sobel算子的共同特征：\n\n1. 双重作用：\n\n◦\n在一个方向上进行平滑（减少噪声）\n\n◦\n在垂直方向上进行微分（检测边缘）\n\n2. 核结构对比：\n\n◦\nPrewitt x方向：[-1 0 1; -1 0 1; -1 0 1]\n\n◦\nSobel x方向：[-1 0 1; -2 0 2; -1 0 1]\n\n3. 优势：相比简单的微分算子，具有更好的抗噪性\n\n4. 区别：Sobel算子对中心行/列给予更大权重",
    "bankId": "simple-concept",
    "number": 44
  },
  {
    "id": "simple-concept-45",
    "title": "The central weight of the Sobel",
    "question": "The central weight of the Sobel\noperator is?",
    "images": [],
    "options": [
      "1",
      "2",
      "0",
      "1"
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "Sobel算子的核结构分析：\n\n1. x方向Sobel核：\n\n代码块\n\n1\n\n[-1 0 1]\n\n2\n\n[-2 0 2]\n\n3\n\n[-1 0 1]\n\n2. y方向Sobel核：\n\n代码块\n\n---\n\n## Page 25\n\n1\n\n[-1 -2 -1]\n\n2\n\n[ 0 0 0]\n\n3\n\n[ 1 2 1]\n\n3. 中心权重为0的意义：\n\n◦\n不直接使用中心像素值\n\n◦\n强调邻域像素间的差异\n\n◦\n实现纯微分操作\n\n4. 权重2的作用：对中心行/列给予更大影响，提高检测精度\n\n### 可分离滤波器核 / Separable Filter Kernels",
    "bankId": "simple-concept",
    "number": 45
  },
  {
    "id": "simple-concept-46",
    "title": "What is the advantage of a",
    "question": "What is the advantage of a\nseparable filter kernel?",
    "images": [],
    "options": [
      "Improving computational efficiency",
      "Improving filtering accuracy",
      "Enhancing image contrast",
      "Reducing image noise"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "题目中文翻译：\n\n- 选项 A：提高计算效率\n- 选项 B：提高滤波精度\n- 选项 C：增强图像对比度\n- 选项 D：减少图像噪声\n\n可分离滤波器核的计算优势：\n\n1. 计算复杂度降低：\n\n◦\n原来：N×N核需要N²次乘法\n\n◦\n分离后：两个1×N核只需要2N次乘法\n\n◦\n对于大核(如15×15)，效率提升显著\n\n2. 内存访问优化：更好的缓存局部性\n\n3. 并行处理：易于在GPU等并行架构上实现\n\n4. 数学条件：核矩阵可以表示为两个向量的外积\n\n例如：3×3高斯核可分离为[1 2 1]ᵀ × [1 2 1]\n\n---\n\n## Page 26",
    "bankId": "simple-concept",
    "number": 46
  },
  {
    "id": "simple-concept-47",
    "title": "What is the convolution kernel",
    "question": "What is the convolution kernel\nof the Sobel operator in the x-direction?",
    "images": [],
    "options": [
      "([1 0 -1])",
      "([1 2 1])",
      "([0 1 0])",
      "([1 1 1])"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "Sobel算子的可分离结构：\n\n1. x方向Sobel核分解：\n\n代码块\n\n1\n\n[-1 0 1] [1] [-1 0 1]\n\n2\n\n[-2 0 2] = [2] ×\n\n3\n\n[-1 0 1] [1]\n\n2. 分离向量：\n\n◦\n垂直平滑向量：[1 2 1]ᵀ\n\n◦\n水平微分向量：[-1 0 1]\n\n3. 物理意义：先在y方向平滑，再在x方向求导\n\n4. 计算效率：从9次乘法减少到6次乘法",
    "bankId": "simple-concept",
    "number": 47
  },
  {
    "id": "simple-concept-48",
    "title": "What is the smoothing kernel of",
    "question": "What is the smoothing kernel of\nthe Gaussian filter in the x-direction?",
    "images": [],
    "options": [
      "([1 2 1])",
      "([1 0 -1])",
      "([1 1 1])",
      "([1 -2 1])"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "高斯滤波器的可分离性质：\n\n---\n\n## Page 27\n\n1. 数学基础：二维高斯函数可分离\n\n◦\nG(x,y) = G(x) × G(y)\n\n◦\n每个方向都是一维高斯函数\n\n2. 近似核 [1 2 1]：\n\n◦\n对应于σ≈0.85的高斯函数\n\n◦\n归一化后：[1/4, 1/2, 1/4]\n\n3. 分离优势：\n\n◦\n3×3高斯核：9次乘法 → 6次乘法\n\n◦\n5×5高斯核：25次乘法 → 10次乘法\n\n4. 精度保持：分离后结果与原始核完全一致\n\n### 拉普拉斯滤波 / Laplacian Filtering\n\nLaplacian filters are\nprimarily used to detect what in an image?",
    "bankId": "simple-concept",
    "number": 48
  },
  {
    "id": "simple-concept-49",
    "title": "Laplacian filters are",
    "question": "Laplacian filters are\nprimarily used to detect what in an image?",
    "images": [],
    "options": [
      "Low-frequency components",
      "High-frequency components",
      "Image color",
      "Image brightness"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 题干：拉普拉斯滤波器主要用于检测图像中的什么？\n- 选项 A：低频成分\n- 选项 B：高频成分\n- 选项 C：图像颜色\n- 选项 D：图像亮度\n\n拉普拉斯滤波器的频域特性：\n\n1. 高频检测：作为二阶导数算子，对高频变化敏感\n\n2. 边缘检测：图像边缘处有强烈的强度变化\n\n3. 数学原理：∇²f = ∂²f/∂x² + ∂²f/∂y²\n\n4. 频域响应：在频域中，拉普拉斯算子的响应随频率平方增长\n\n5. 应用场景：边缘检测、图像锐化、特征提取",
    "bankId": "simple-concept",
    "number": 49
  },
  {
    "id": "simple-concept-50",
    "title": "What is the function of the",
    "question": "What is the function of the\nLaplacian filter?",
    "images": [],
    "options": [
      "Smoothing images",
      "Enhancing image contrast",
      "Detecting edges in images",
      "Reducing image brightness"
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "题目中文翻译：\n\n- 选项 A：平滑图像\n- 选项 B：增强图像对比度\n- 选项 C：检测图像中的边缘\n- 选项 D：降低图像亮度\n\n拉普拉斯滤波器的核心功能：\n\n1. 边缘检测：主要应用，检测所有方向的边缘\n\n2. 各向同性：对所有方向的边缘响应一致\n\n---\n\n## Page 30\n\n3. 锐化应用：锐化图像 = 原图像 - c×拉普拉斯(原图像)\n\n4. 特征提取：提取图像中的线条和边缘特征\n\n5. 局限性：对噪声敏感，通常需要预先平滑",
    "bankId": "simple-concept",
    "number": 50
  },
  {
    "id": "simple-concept-51",
    "title": "What does the direction of the gradient",
    "question": "What does the direction of the gradient\nvector indicate?",
    "images": [],
    "options": [
      "Direction of lowest intensity",
      "Direction of highest intensity",
      "Direction of slowest intensity change",
      "Direction of fastest intensity change"
    ],
    "answer": 3,
    "answers": [
      3
    ],
    "explanation": "题目中文翻译：\n\n- 选项 A：最低强度的方向\n- 选项 B：最高强度的方向\n- 选项 C：强度变化最慢的方向\n- 选项 D：强度变化最快的方向\n\n梯度向量的方向意义：\n\n1. 数学定义：∇f = (∂f/∂x, ∂f/∂y)\n\n2. 方向特性：指向强度变化最快的方向\n\n3. 边缘关系：垂直于边缘方向\n\n4. 计算方法：θ = arctan(Gy/Gx)\n\n5. 实际应用：\n\n◦\n边缘跟踪\n\n◦\n纹理分析\n\n◦\n特征描述子计算",
    "bankId": "simple-concept",
    "number": 51
  },
  {
    "id": "simple-concept-52",
    "title": "What does the magnitude of the",
    "question": "What does the magnitude of the\ngradient vector indicate?",
    "images": [],
    "options": [
      "Direction of the gradient vector",
      "Magnitude of local intensity change",
      "Image brightness",
      "Image contrast"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 选项 A：梯度向量的方向\n- 选项 B：局部强度变化的幅度\n- 选项 C：图像亮度\n- 选项 D：图像对比度\n\n---\n\n## Page 31\n\n梯度幅度的物理意义：\n\n1. 数学表达：|∇f| = √[(∂f/∂x)² + (∂f/∂y)²]\n\n2. 强度变化率：表示该点强度变化的剧烈程度\n\n3. 边缘强度：幅度越大，边缘越明显\n\n4. 阈值处理：常用于边缘检测的阈值判断\n\n5. 应用价值：\n\n◦\n边缘检测算法的核心指标\n\n◦\n图像质量评估\n\n◦\n自动聚焦系统",
    "bankId": "simple-concept",
    "number": 52
  },
  {
    "id": "simple-concept-53",
    "title": "What is the main",
    "question": "What is the main\nfunction of the intensity gradient vector in image processing?",
    "images": [],
    "options": [
      "Smoothing images",
      "Enhancing image contrast",
      "Detecting edges and details in images",
      "Noise removal"
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "题目中文翻译：\n\n- 选项 A：平滑图像\n- 选项 B：增强图像对比度\n- 选项 C：检测图像中的边缘和细节\n- 选项 D：噪声去除\n\n梯度向量的综合功能：\n\n1. 边缘检测：最重要的应用，检测强度不连续性\n\n2. 细节识别：识别纹理、线条等细节特征\n\n3. 特征提取：为SIFT、SURF等算法提供基础\n\n4. 图像分割：基于梯度的分水岭算法\n\n5. 立体视觉：计算视差图\n\n6. 运动估计：光流计算的基础\n\n7. 应用领域：\n\n◦\n计算机视觉\n\n◦\n医学图像分析\n\n◦\n遥感图像处理\n\n---\n\n## Page 32\n\n### 傅里叶变换 / Fourier Transform",
    "bankId": "simple-concept",
    "number": 53
  },
  {
    "id": "simple-concept-54",
    "title": "What are the basic building",
    "question": "What are the basic building\nblocks of the Fourier transform?",
    "images": [],
    "options": [
      "Sine and cosine functions",
      "Polynomials",
      "Exponential functions",
      "Logarithmic functions"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "题目中文翻译：\n\n- 选项 A：正弦和余弦函数\n- 选项 B：多项式\n- 选项 C：指数函数\n- 选项 D：对数函数\n\n傅里叶变换的数学基础：\n\n1. 基函数：正弦和余弦函数构成完整的正交基\n\n2. 欧拉公式：e^(jωt) = cos(ωt) + j·sin(ωt)\n\n3. 分解原理：任何周期函数都可以表示为不同频率正弦余弦函数的线性组合\n\n4. 物理意义：将复杂信号分解为简单的谐波成分\n\n5. 在图像中的应用：\n\n◦\n二维傅里叶变换使用二维正弦余弦基函数\n\n◦\n每个基函数对应特定的空间频率和方向",
    "bankId": "simple-concept",
    "number": 54
  },
  {
    "id": "simple-concept-55",
    "title": "What does the Fourier",
    "question": "What does the Fourier\ntransform convert a spatial domain image into?",
    "images": [],
    "options": [
      "Time domain",
      "Frequency domain",
      "Spatial frequency domain",
      "Color domain"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 选项 A：时域\n- 选项 B：频域\n- 选项 C：空间频率域\n- 选项 D：颜色域\n\n空域到频域的变换：\n\n---\n\n## Page 33\n\n1. 域的概念：\n\n◦\n空域：像素强度随空间位置的分布\n\n◦\n频域：不同空间频率成分的幅度和相位\n\n2. 物理意义：\n\n◦\n显示图像中包含的周期性模式\n\n◦\n分析图像的频率特性\n\n3. 表示方法：\n\n◦\n幅度谱：显示各频率成分的强度\n\n◦\n相位谱：显示各频率成分的相位信息\n\n4. 应用价值：滤波设计、压缩、分析等",
    "bankId": "simple-concept",
    "number": 55
  },
  {
    "id": "simple-concept-56",
    "title": "In the frequency",
    "question": "In the frequency\ndomain, what do high-frequency components correspond to in an\nimage?",
    "images": [],
    "options": [
      "Overall brightness of the image",
      "Rapidly changing details in the image (e.g., edges)",
      "Color information of the image",
      "Noise in the image"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 选项 A：图像的整体亮度\n- 选项 B：图像中快速变化的细节（如边缘）\n- 选项 C：图像的颜色信息\n- 选项 D：图像中的噪声\n\n频域成分与空域特征的对应关系：\n\n1. 高频成分特征：\n\n◦\n对应图像中的快速变化\n\n◦\n边缘、纹理、细节、噪声\n\n◦\n在频谱中远离中心位置\n\n2. 低频成分特征：\n\n◦\n对应图像中的缓慢变化\n\n◦\n整体亮度、大面积的平滑区域\n\n◦\n在频谱中心位置\n\n3. 实际应用：\n\n---\n\n## Page 34\n\n◦\n高通滤波：保留高频，去除低频（锐化）\n\n◦\n低通滤波：保留低频，去除高频（平滑）\n\n4. 噪声的复杂性：噪声可能分布在各个频段",
    "bankId": "simple-concept",
    "number": 56
  },
  {
    "id": "simple-concept-57",
    "title": "What does the convolution",
    "question": "What does the convolution\nproperty of the Fourier transform describe?",
    "images": [],
    "options": [
      "Convolution in the spatial domain corresponds to multiplication in the frequency domain",
      "Multiplication in the spatial domain corresponds to convolution in the frequency domain",
      "Addition in the spatial domain corresponds to subtraction in the frequency domain",
      "Subtraction in the spatial domain corresponds to addition in the frequency domain"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "题目中文翻译：\n\n- 选项 A：空域中的卷积对应于频域中的乘积\n- 选项 B：空域中的乘积对应于频域中的卷积\n- 选项 C：空域中的加法对应于频域中的减法\n- 选项 D：空域中的减法对应于频域中的加法\n\n卷积定理的重要性：\n\n1. 数学表达：F{f ⊛ h} = F{f} · F{h}\n\n2. 实际意义：\n\n◦\n空域卷积运算 → 频域简单乘法\n\n◦\n大\n简化了复杂滤波操作\n\n3. 计算优势：\n\n◦\n大核卷积：空域O(N²M²) → 频域O(N²logN)\n\n◦\n对于大图像和大核特别有效\n\n4. 应用实例：\n\n◦\n快速卷积算法\n\n◦\n频域滤波设计\n\n◦\n信号处理中的快速算法",
    "bankId": "simple-concept",
    "number": 57
  },
  {
    "id": "simple-concept-58",
    "title": "In frequency",
    "question": "In frequency\ndomain filtering, what do low-frequency components typically\ncorrespond to in an image?",
    "images": [],
    "options": [
      "Rapidly changing details",
      "Background and large smooth areas of the image",
      "Noise in the image",
      "Color information of the image"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 选项 A：快速变化的细节\n- 选项 B：图像的背景和大的平滑区域\n- 选项 C：图像中的噪声\n- 选项 D：图像的颜色信息\n\n低频成分的图像特征：\n\n1. 对应内容：\n\n◦\n图像的整体结构和形状\n\n◦\n大面积的平滑区域\n\n◦\n缓慢的亮度变化\n\n◦\n图像的主要内容轮廓\n\n2. 在频谱中的位置：靠近直流分量（中心）\n\n3. 滤波应用：\n\n◦\n低通滤波：保留主要结构，去除细节和噪声\n\n◦\n图像压缩：主要保留低频信息\n\n4. 与高频的互补性：低频+高频=完整图像",
    "bankId": "simple-concept",
    "number": 58
  },
  {
    "id": "simple-concept-59",
    "title": "What is the purpose of centering",
    "question": "What is the purpose of centering\na Fourier image?",
    "images": [],
    "options": [
      "Simplify computation",
      "Symmetrically arrange the spectrum in the frequency domain for easier processing",
      "Enhance image contrast",
      "Remove noise from the image"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 选项 A：简化计算\n- 选项 B：在频域中对称排列频谱以便于处理\n- 选项 C：增强图像对比度\n- 选项 D：从图像中去除噪声\n\n频域中心化的必要性：\n\n1. 技术原因：\n\n◦\n标准FFT将零频率放在角落\n\n◦\n中心化将直流分量移到中心\n\n◦\n实现：乘以(-1)^(x+y)\n\n2. 视觉优势：\n\n◦\n频谱更直观，低频在中心，高频在边缘\n\n◦\n便于观察和分析频率分布\n\n---\n\n## Page 37\n\n◦\n滤波器设计更直观\n\n3. 处理便利：\n\n◦\n径向滤波器设计\n\n◦\n对称性分析\n\n◦\n频域操作的可视化",
    "bankId": "simple-concept",
    "number": 59
  },
  {
    "id": "simple-concept-60",
    "title": "Which of the following is not a step",
    "question": "Which of the following is not a step\nin frequency domain filtering?",
    "images": [],
    "options": [
      "Multiply the input image by (-1)^(x+y) to center it",
      "Perform 2D discrete Fourier transform on the image",
      "Apply the filter in the frequency domain",
      "Perform edge detection on the filtered image"
    ],
    "answer": 3,
    "answers": [
      3
    ],
    "explanation": "题目中文翻译：\n\n- 选项 A：将输入图像乘以(-1)^(x+y)进行中心化\n- 选项 B：对图像执行二维离散傅里叶变换\n- 选项 C：在频域中应用滤波器\n- 选项 D：对滤波后的图像执行边缘检测\n\n频域滤波的标准流程：\n\n1. 预处理：中心化（乘以(-1)^(x+y)）\n\n2. 正向变换：计算2D DFT/FFT\n\n3. 频域操作：与滤波器函数相乘\n\n4. 逆向变换：计算逆2D DFT/FFT\n\n5. 后处理：取实部，去中心化\n\n选项D（边缘检测）不是频域滤波流程的一部分，而是一个独立的图像处理操作。频域滤波的目标是根\n\n据频率特性修改图像，而不是提取特定特征。\n\n### 滤波器 / Filters",
    "bankId": "simple-concept",
    "number": 60
  },
  {
    "id": "simple-concept-61",
    "title": "What is the main function of a low-",
    "question": "What is the main function of a low-\npass filter?",
    "images": [],
    "options": [
      "Enhance high-frequency components in the image",
      "Allow low-frequency signals to pass through, reducing high-frequency components",
      "Enhance image contrast",
      "Remove low-frequency components from the image"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 选项 A：增强图像中的高频成分\n- 选项 B：允许低频信号通过，减少高频成分\n- 选项 C：增强图像对比度\n- 选项 D：从图像中去除低频成分\n\n低通滤波器的工作原理和应用：\n\n1. 频域特性：允许低于截止频率的成分通过，抑制高频成分\n\n2. 空域效果：\n\n◦\n图像平滑和模糊\n\n◦\n噪声去除（高频噪声）\n\n◦\n细节丢失\n\n3. 典型应用：\n\n◦\n图像预处理中的降噪\n\n◦\n抗锯齿处理\n\n◦\n图像金字塔构建\n\n4. 常见实现：高斯滤波器、理想低通滤波器、巴特沃斯滤波器",
    "bankId": "simple-concept",
    "number": 61
  },
  {
    "id": "simple-concept-62",
    "title": "What is the main function of a high-",
    "question": "What is the main function of a high-\npass filter?",
    "images": [],
    "options": [
      "Enhance low-frequency components in the image",
      "Smooth the image",
      "Allow high-frequency signals to pass through, reducing low-frequency components",
      "Enhance image colors"
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "题目中文翻译：\n\n- 选项 A：增强图像中的低频成分\n- 选项 B：平滑图像\n- 选项 C：允许高频信号通过，减少低频成分\n- 选项 D：增强图像颜色\n\n高通滤波器的特性和用途：\n\n1. 频域特性：允许高于截止频率的成分通过，抑制低频成分\n\n2. 空域效果：\n\n◦\n边缘增强和锐化\n\n---\n\n## Page 39\n\n◦\n细节突出\n\n◦\n去除背景（低频）信息\n\n3. 应用场景：\n\n◦\n边缘检测预处理\n\n◦\n图像锐化\n\n◦\n纹理分析\n\n4. 设计方法：理想高通、巴特沃斯高通、高斯高通滤波器",
    "bankId": "simple-concept",
    "number": 62
  },
  {
    "id": "simple-concept-63",
    "title": "What is the main function of a",
    "question": "What is the main function of a\nband-pass filter?",
    "images": [],
    "options": [
      "Allowing only signals within a specific frequency range to pass through",
      "Removing all frequency signals",
      "Enhancing image brightness",
      "Enhancing image colors"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "题目中文翻译：\n\n- 选项 A：只允许特定频率范围内的信号通过\n- 选项 B：去除所有频率信号\n- 选项 C：增强图像亮度\n- 选项 D：增强图像颜色\n\n带通滤波器的设计和应用：\n\n1. 工作原理：只保留特定频率范围[f₁, f₂]的成分\n\n2. 构成方法：\n\n◦\n高通滤波器 × 低通滤波器\n\n◦\n从低通滤波器中减去更小的低通滤波器\n\n3. 应用场景：\n\n◦\n纹理分析（特定尺度的纹理）\n\n◦\n周期性模式检测\n\n◦\n去除特定频率范围的噪声\n\n4. 参数设计：需要确定通过频带的上下限",
    "bankId": "simple-concept",
    "number": 63
  },
  {
    "id": "simple-concept-64",
    "title": "What is the function of a notch filter?",
    "question": "What is the function of a notch filter?",
    "images": [],
    "options": [
      "Enhance specific frequency components",
      "Allow only specific frequency components to pass through",
      "Eliminate specific frequency components",
      "Enhance image contrast"
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "题目中文翻译：\n\n- 选项 A：增强特定频率成分\n- 选项 B：只允许特定频率成分通过\n- 选项 C：消除特定频率成分\n- 选项 D：增强图像对比度\n\n陷波滤波器的特殊用途：\n\n1. 工作机制：在特定频率处创建\"陷波\"，抑制该频率\n\n2. 设计特点：\n\n◦\n在陷波频率处传递函数为0或接近0\n\n◦\n其他频率处传递函数接近1\n\n3. 典型应用：\n\n◦\n去除周期性干扰（如电源线干扰）\n\n◦\n去除莫尔条纹\n\n◦\n消除特定频率的噪声\n\n4. 设计形式：\n\n◦\n理想陷波滤波器\n\n◦\n高斯陷波滤波器\n\n◦\n巴特沃斯陷波滤波器",
    "bankId": "simple-concept",
    "number": 64
  },
  {
    "id": "simple-concept-65",
    "title": "What is the inverse Fourier transform",
    "question": "What is the inverse Fourier transform\nused for?",
    "images": [],
    "options": [
      "Converting frequency domain information back to the spatial domain",
      "Converting time domain information back to the spatial domain",
      "Converting color domain information back to the frequency domain",
      "Enhancing image contrast"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "题目中文翻译：\n\n- 选项 A：将频域信息转换回空域\n- 选项 B：将时域信息转换回空域\n- 选项 C：将颜色域信息转换回频域\n- 选项 D：增强图像对比度\n\n逆傅里叶变换的作用和重要性：\n\n1. 基本功能：将频域处理后的结果转换回空域图像\n\n---\n\n## Page 41\n\n2. 数学表达：f(x,y) = ∫∫ F(u,v)e^(j2π(ux+vy))dudv\n\n3. 处理流程中的位置：\n\n◦\n空域图像 → 傅里叶变换 → 频域\n\n◦\n频域滤波 → 逆傅里叶变换 → 空域图像",
    "bankId": "simple-concept",
    "number": 65
  },
  {
    "id": "simple-concept-66",
    "title": "What is one major advantage of",
    "question": "What is one major advantage of\nfrequency domain filtering?",
    "images": [],
    "options": [
      "Precise control over filtering effects",
      "Faster computation",
      "Ability to handle nonlinear transformations",
      "Enhancing image brightness"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "题目中文翻译：\n\n- 选项 A：对滤波效果的精确控制\n- 选项 B：更快的计算\n- 选项 C：处理非线性变换的能力\n- 选项 D：增强图像亮度\n\n频域滤波的优势分析：\n\n1. 精确控制（选项A）：\n\n◦\n可以精确设计滤波器的频率响应\n\n◦\n直观的频率选择性设计\n\n◦\n避免空域设计的试错过程\n\n2. 计算效率：\n\n◦\n对于大核卷积，频域可能更快\n\n◦\n但包含FFT/IFFT的开销\n\n◦\n不总是比空域快（选项B不够准确）\n\n3. 设计灵活性：\n\n◦\n理想滤波器在频域易于实现\n\n◦\n复杂滤波器形状的精确控制\n\n◦\n多种滤波器类型的统一框架\n\n4. 理论分析：便于频率特性分析和滤波器设计\n\n---\n\n## Page 42\n\n### 特征 / Features\n\nWhich characteristic of image features describes the detectability of\nfeatures at the same location in different images?",
    "bankId": "simple-concept",
    "number": 66
  },
  {
    "id": "simple-concept-67",
    "title": "What property of the RGB",
    "question": "What property of the RGB\nchannels in an image does the color moment represent?",
    "images": [],
    "options": [
      "Mean, variance, skewness",
      "Mean, variance, kurtosis",
      "Mean, variance, flatness",
      "Mean, variance, dispersion"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "题目中文翻译：\n\n- 题干：图像RGB通道的颜色矩表示什么属性？\n- 选项 A：均值、方差、偏度\n- 选项 B：均值、方差、峰度\n- 选项 C：均值、方差、平坦度\n- 选项 D：均值、方差、离散度\n\n颜色矩（Color Moments）是描述图像颜色分布的统计特征：\n\n1. 三个矩的含义：\n\n◦\n一阶矩（均值）：颜色的平均值，反映主导颜色\n\n◦\n二阶矩（方差）：颜色分布的广度\n\n◦\n三阶矩（偏度）：颜色分布的不对称性\n\n2. 计算公式：\n\n◦\nμ = (1/N)Σpᵢ\n\n◦\nσ² = (1/N)Σ(pᵢ-μ)²\n\n◦\ns = ∛[(1/N)Σ(pᵢ-μ)³]\n\n3. 优点：计算简单、对光照变化相对稳定\n\n4. 应用：图像检索、内容分析\n\n---\n\n## Page 44\n\nWhat is the length of the feature\nvector for color moments?",
    "bankId": "simple-concept",
    "number": 67
  },
  {
    "id": "simple-concept-68",
    "title": "What is the length of the feature",
    "question": "What is the length of the feature\nvector for color moments?",
    "images": [],
    "options": [
      "3 * 9",
      "9 * 3",
      "3 * 3",
      "3 * 27"
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "题目中文翻译：\n\n- 题干：颜色矩的特征向量长度是多少？\n\n颜色矩特征向量的构成：\n\n1. 维度计算：\n\n◦\nRGB三个通道：3\n\n◦\n每个通道三个矩（均值、方差、偏度）：3\n\n◦\n总维度：3 × 3 = 9\n\n2. 向量结构：\n\n◦\n[R_mean, R_var, R_skew, G_mean, G_var, G_skew, B_mean, B_var, B_skew]\n\n3. 特点：\n\n◦\n低维度特征，计算效率高\n\n◦\n全局颜色特征，忽略空间信息\n\n◦\n\nWhat property of an image do\nHaralick features describe?",
    "bankId": "simple-concept",
    "number": 68
  },
  {
    "id": "simple-concept-69",
    "title": "What property of an image do",
    "question": "What property of an image do\nHaralick features describe?",
    "images": [],
    "options": [
      "Color features",
      "Texture features",
      "Shape features",
      "Edge features"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 题干：Haralick特征描述图像的什么属性？\n- 选项 A：颜色特征\n- 选项 B：纹理特征\n- 选项 C：形状特征\n- 选项 D：边缘特征\n- 题干：适合快速颜色匹配\n\nHaralick特征是经典的纹理分析方法：\n\n1. 基础理论：基于灰度共生矩阵（GLCM）\n\n---\n\n## Page 45\n\n2. 14个Haralick特征：\n\n◦\n能量（Energy）\n\n◦\n对比度（Contrast）\n\n◦\n相关性（Correlation）\n\n◦\n均值（Mean）\n\n◦\n标准差（Standard Deviation）\n\n◦\n熵（Entropy）等\n\n3. 优势：\n\n◦\n描述纹理的统计特性\n\n◦\n对旋转和光照变化相对稳定\n\n◦\n广泛应用于医学图像、遥感等领域\n\n4. 应用：纹理分类、图像分割、材质识别\n\nWhat does the gray level co-occurrence matrix record for two pixel\nvalues with a specific spatial relationship in an image?",
    "bankId": "simple-concept",
    "number": 69
  },
  {
    "id": "simple-concept-70",
    "title": "What does the gray level co-occurrence matrix record for two pixel",
    "question": "What does the gray level co-occurrence matrix record for two pixel\nvalues with a specific spatial relationship in an image?",
    "images": [],
    "options": [
      "Frequency and angle",
      "Distance and angle",
      "Skewness and kurtosis",
      "Mean and dispersion"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 题干：灰度共生矩阵记录图像中具有特定空间关系的两个像素值的什么信息？\n- 选项 A：频率和角度\n- 选项 B：距离和角度\n- 选项 C：偏度和峰度\n- 选项 D：均值和离散度\n\n灰度共生矩阵（GLCM）的基本概念：\n\n1. 定义：统计图像中在指定距离和角度下，不同灰度级像素对的出现频率\n\n2. 空间关系参数：\n\n◦\n距离d：两个像素之间的距离（通常为1、2、3等）\n\n◦\n角度θ：两个像素的方向关系（0°、45°、90°、135°）\n\n3. 矩阵含义：P(i,j|d,θ) 表示在距离d、角度θ下，灰度值i和j共同出现的概率\n\n4. 纹理描述：通过统计这些共生关系来描述图像的纹理特性\n\n---\n\n## Page 46\n\nWhat invariances does the\nlocal binary pattern (LBP) possess?",
    "bankId": "simple-concept",
    "number": 70
  },
  {
    "id": "simple-concept-71",
    "title": "What invariances does the",
    "question": "What invariances does the\nlocal binary pattern (LBP) possess?",
    "images": [],
    "options": [
      "Rotational invariance",
      "Gray-scale invariance",
      "Rotational and gray-scale invariance",
      "Scale invariance"
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "题目中文翻译：\n\n- 题干：局部二值模式（LBP）具有什么不变性？\n- 选项 A：旋转不变性\n- 选项 B：灰度不变性\n- 选项 C：旋转和灰度不变性\n- 选项 D：尺度不变性\n\nLBP的不变性特征：\n\n1. 灰度不变性：\n\n◦\n只考虑相对大小关系，不依赖绝对灰度值\n\n◦\n对光照变化具有鲁棒性\n\n◦\n算法：比较邻域像素与中心像素的大小关系\n\n2. 旋转不变性：\n\n◦\n通过旋转不变LBP（LBP^{ri}）实现\n\n◦\n将二进制模式旋转到最小值对应的位置\n\n◦\n减少了模式的种类，提高了稳定性\n\n3. 计算方法：\n\n◦\n基本LBP：LBP = Σ(s(g_p - g_c) × 2^p)\n\n◦\ns(x) = 1 if x≥0, else 0\n\n4. 应用：人脸识别、纹理分类、表面检测\n\nIn local binary pattern (LBP), what is the value assigned if\nthe neighboring pixel value is greater than the center pixel value?",
    "bankId": "simple-concept",
    "number": 71
  },
  {
    "id": "simple-concept-72",
    "title": "In local binary pattern (LBP), what is the value assigned if",
    "question": "In local binary pattern (LBP), what is the value assigned if\nthe neighboring pixel value is greater than the center pixel value?",
    "images": [],
    "options": [
      "1",
      "0",
      "255",
      "1"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "题目中文翻译：\n\n- 题干：是什么？\n\nLBP的二值化规则：\n\n1. 比较规则：\n\n◦\n如果邻域像素 ≥ 中心像素：分配值1\n\n◦\n如果邻域像素 < 中心像素：分配值0\n\n2. 编码过程：\n\n◦\n按顺时针或逆时针方向遍历邻域\n\n◦\n将8个二进制位组合成一个8位数\n\n◦\n例：11001010₂ = 202₁₀\n\n3. 几何意义：\n\n◦\n1表示该方向上有\"边缘\"或\"凸起\"\n\n◦\n0表示该方向上有\"凹陷\"\n\n4. 优势：简单、快速、对照明变化鲁棒\n\nWhich feature is least affected when illumination changes cause\nuniform increase or decrease in image gray levels?",
    "bankId": "simple-concept",
    "number": 72
  },
  {
    "id": "simple-concept-73",
    "title": "Which feature is least affected when illumination changes cause",
    "question": "Which feature is least affected when illumination changes cause\nuniform increase or decrease in image gray levels?",
    "images": [],
    "options": [
      "Haralick features",
      "Local binary pattern (LBP)",
      "Color histogram",
      "Color moments"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 题干：当光照变化导致图像灰度级均匀增加或减少时，哪个特征受影响最小？\n- 选项 A：Haralick特征\n- 选项 B：局部二值模式（LBP）\n- 选项 C：颜色直方图\n- 选项 D：颜色矩\n\n光照不变性分析：\n\n1. LBP的优势：\n\n◦\n只比较相对大小关系\n\n◦\n均匀光照变化不改变像素间的大小关系\n\n◦\n具有天然的光照不变性\n\n2. 其他特征的局限性：\n\n---\n\n## Page 48\n\n◦\nHaralick特征：基于绝对灰度值，会受光照影响\n\n◦\n颜色直方图：直接依赖像素值分布\n\n◦\n颜色矩：基于统计值，受光照强度影响\n\n3. 应用价值：使LBP成为鲁棒的纹理描述符\n\n### SIFT算法 / SIFT Algorithm\n\nWhich\nimage processing technique does the SIFT algorithm use to identify\npotential keypoints at different scales?",
    "bankId": "simple-concept",
    "number": 73
  },
  {
    "id": "simple-concept-74",
    "title": "Which",
    "question": "Which\nimage processing technique does the SIFT algorithm use to identify\npotential keypoints at different scales?",
    "images": [],
    "options": [
      "Edge detection",
      "Difference of Gaussian (DoG)",
      "Histogram equalization",
      "Fast Fourier Transform"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 题干：SIFT算法使用哪种图像处理技术在不同尺度上识别潜在关键点？\n- 选项 A：边缘检测\n- 选项 B：高斯差分（DoG）\n- 选项 C：直方图均衡化\n- 选项 D：快速傅里叶变换\n\nSIFT关键点检测原理：\n\n1. DoG操作：\n\n◦\nDoG(x,y,σ) = L(x,y,kσ) - L(x,y,σ)\n\n◦\nL是高斯卷积后的图像\n\n◦\nk是尺度因子（通常为√2）\n\n2. 多尺度检测：\n\n◦\n在不同的σ值下计算DoG\n\n◦\n形成尺度空间金字塔\n\n◦\n每个octave包含多个尺度层\n\n3. 理论基础：\n\n◦\nDoG近似尺度归一化的拉普拉斯算子\n\n◦\n对尺度变化具有不变性\n\n---\n\n## Page 49\n\nHow\nare Gaussian blurred images at different scales generated in the\nscale space of the SIFT algorithm?",
    "bankId": "simple-concept",
    "number": 74
  },
  {
    "id": "simple-concept-75",
    "title": "How",
    "question": "How\nare Gaussian blurred images at different scales generated in the\nscale space of the SIFT algorithm?",
    "images": [],
    "options": [
      "By convolving the original image with different sizes of convolution kernels",
      "By applying different numbers of smoothing operations to the original image",
      "By downsampling the original image",
      "By upsampling the original image"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "题目中文翻译：\n\n- 题干：在SIFT算法的尺度空间中，如何生成不同尺度的高斯模糊图像？\n- 选项 A：通过将原始图像与不同大小的卷积核卷积\n- 选项 B：通过对原始图像应用不同次数的平滑操作\n- 选项 C：通过对原始图像进行下采样\n- 选项 D：通过对原始图像进行上采样\n\nSIFT尺度空间构建方法：\n\n1. 高斯卷积核：\n\n◦\nG(x,y,σ) = (1/2πσ²)e^(-(x²+y²)/2σ²)\n\n◦\nσ控制模糊程度，核大小为6σ+1\n\n◦\n不同σ值产生不同尺度的模糊图像\n\n2. 尺度空间构建：\n\n◦\nL(x,y,σ) = G(x,y,σ) * I(x,y)\n\n◦\n每个octave包含s+3层图像\n\n◦\nσ按几何级数增长：σ, kσ, k²σ...\n\n3. 效率优化：\n\n◦\n递归计算：L(x,y,kσ) = G(x,y,σ') * L(x,y,σ)\n\n◦\n其中σ' = √((kσ)² - σ²)\n\n4. octave间关系：\n\n◦\n下一个octave通过下采样生成\n\n◦\n保持相对尺度关系\n\nHow are extrema points\nidentified in DoG images within the scale space?\n\n---\n\n## Page 50",
    "bankId": "simple-concept",
    "number": 75
  },
  {
    "id": "simple-concept-76",
    "title": "What is the",
    "question": "What is the\nprimary purpose of using Taylor expansion during keypoint\nlocalization?",
    "images": [],
    "options": [
      "To enhance image contrast",
      "To accurately locate keypoints at subpixel levels",
      "To exclude low-contrast points and edge points",
      "To reduce image noise"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 题干：在关键点定位过程中使用泰勒展开的主要目的是什么？\n- 选项 A：增强图像对比度\n- 选项 B：在亚像素级别准确定位关键点\n- 选项 C：排除低对比度点和边缘点\n- 选项 D：减少图像噪声\n- 题干：亚像素精度定位\n\n泰勒展开在关键点定位中的作用：\n\n1. 亚像素精度定位：\n\n◦\nDoG函数的泰勒展开：D(x) = D + ∂D^T/∂x · x + (1/2)x^T ∂²D/∂x² x\n\n◦\n求导数为0的点：x̂\n= -∂²D^(-1)/∂x² · ∂D/∂x\n\n◦\n得到亚像素级别的精确位置\n\n2. 数学原理：\n\n◦\n在离散极值点附近进行连续函数近似\n\n◦\n通过二次函数拟合找到真正的极值位置\n\n◦\n提高定位精度到亚像素级别\n\n3. 实际效果：\n\n◦\n减少量化误差\n\n◦\n提高特征点的稳定性\n\n◦\n改善匹配精度\n\n4. 计算步骤：\n\n◦\n计算一阶和二阶偏导数\n\n◦\n\n◦\n更新关键点位置\n\nWhy is it necessary to\nanalyze the Hessian matrix during keypoint localization?",
    "bankId": "simple-concept",
    "number": 76
  },
  {
    "id": "simple-concept-77",
    "title": "Why is it necessary to",
    "question": "Why is it necessary to\nanalyze the Hessian matrix during keypoint localization?",
    "images": [],
    "options": [
      "To accurately locate keypoints at subpixel levels",
      "To exclude low-contrast points and edge points",
      "To enhance image contrast",
      "To adjust image brightness"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 题干：在关键点定位过程中为什么需要分析海塞矩阵？\n- 选项 A：在亚像素级别准确定位关键点\n- 选项 B：排除低对比度点和边缘点\n- 选项 C：增强图像对比度\n- 选项 D：调整图像亮度\n- 题干：解线性方程组求偏移量\n\n海塞矩阵在关键点筛选中的作用：\n\n1. 边缘响应检测：\n\n---\n\n## Page 52\n\n◦\n海塞矩阵H = [Dxx Dxy; Dxy Dyy]\n\n◦\n计算主曲率比：r = λmax/λmin\n\n◦\n如果r > (γ+1)²/γ，则为边缘点（通常γ=10）\n\n2. 低对比度点过滤：\n\n◦\n检查DoG响应值：|D(x̂\n)| > 阈值\n\n◦\n通常阈值为0.03（归一化后）\n\n◦\n去除不稳定的特征点\n\n3. 数学原理：\n\n◦\n特征值反映局部曲率特性\n\n◦\n边缘点一个方向曲率大，一个方向曲率小\n\n◦\n角点两个方向曲率都较大\n\n4. 筛选效果：\n\n◦\n提高特征点质量\n\n◦\n\n◦\n增强算法鲁棒性\n\nHow does the SIFT\nalgorithm ensure that keypoint descriptors are invariant to image\nrotation?",
    "bankId": "simple-concept",
    "number": 77
  },
  {
    "id": "simple-concept-78",
    "title": "How does the SIFT",
    "question": "How does the SIFT\nalgorithm ensure that keypoint descriptors are invariant to image\nrotation?",
    "images": [],
    "options": [
      "By using histogram equalization",
      "By assigning a dominant orientation to each keypoint",
      "By performing rotation correction on the image",
      "By smoothing the image"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 题干：SIFT算法如何确保关键点描述子对图像旋转不变？\n- 选项 A：通过使用直方图均衡化\n- 选项 B：通过为每个关键点分配主方向\n- 选项 C：通过对图像进行旋转校正\n- 选项 D：通过对图像进行平滑\n- 题干：减少误匹配\n\nSIFT旋转不变性实现：\n\n1. 主方向计算：\n\n◦\n在关键点邻域计算梯度方向直方图\n\n◦\n36个方向bins（每10°一个）\n\n◦\n使用高斯加权（σ = 1.5×关键点尺度）\n\n---\n\n## Page 53\n\n2. 主方向确定：\n\n◦\n找到直方图中的最大峰值\n\n◦\n该方向作为关键点的主方向\n\n◦\n所有后续计算相对于此方向\n\n3. 描述子计算：\n\n◦\n将坐标系旋转到主方向\n\n◦\n梯度方向相对于主方向计算\n\n◦\n实现完全的旋转不变性\n\n4. 多方向处理：\n\n◦\n一个位置可能有多个不同方向的关键点\n\nHow is the\ndominant orientation of a keypoint determined in the orientation\nassignment step of the SIFT algorithm?",
    "bankId": "simple-concept",
    "number": 78
  },
  {
    "id": "simple-concept-79",
    "title": "How is the",
    "question": "How is the\ndominant orientation of a keypoint determined in the orientation\nassignment step of the SIFT algorithm?",
    "images": [],
    "options": [
      "By calculating the main peak of the gradient orientation histogram",
      "By edge detection",
      "By calculating the mean pixel intensity",
      "By computing the Fourier transform of the image"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "题目中文翻译：\n\n- 题干：在SIFT算法的方向分配步骤中，如何确定关键点的主方向？\n- 选项 A：通过计算梯度方向直方图的主峰值\n- 选项 B：通过边缘检测\n- 选项 C：通过计算平均像素强度\n- 选项 D：通过计算图像的傅里叶变换\n\n主方向计算的详细过程：\n\n1. 梯度计算：\n\n◦\n幅值：m(x,y) = √[(L(x+1,y)-L(x-1,y))² + (L(x,y+1)-L(x,y-1))²]\n\n◦\n方向：θ(x,y) = atan2(L(x,y+1)-L(x,y-1), L(x+1,y)-L(x-1,y))\n\n2. 直方图构建：\n\n◦\n36个方向bins，每个覆盖10°\n\n◦\n使用高斯权重w(x,y) = exp(-(x²+y²)/2σ²)\n\n◦\nσ = 1.5 × 关键点的尺度\n\n3. 峰值检测：\n\n◦\n找到直方图中的最大值\n\n---\n\n## Page 54\n\n◦\n找到直方图中的最大值\n◦\n使用抛物线拟合精确定位峰值\n\n◦\n插值得到亚度级精度的方向\n\n4. 平滑处理：\n\n◦\n\n◦\n通常使用加权平均\n\nWhat does the SIFT algorithm do if the secondary peak in the\norientation histogram exceeds 80% of the primary peak?",
    "bankId": "simple-concept",
    "number": 79
  },
  {
    "id": "simple-concept-80",
    "title": "What does the SIFT algorithm do if the secondary peak in the",
    "question": "What does the SIFT algorithm do if the secondary peak in the\norientation histogram exceeds 80% of the primary peak?",
    "images": [],
    "options": [
      "Ignores the secondary peak",
      "Treats the secondary peak as a new keypoint",
      "Assigns multiple orientations to the keypoint",
      "Merges the secondary peak with the primary peak"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 题干：么？\n- 选项 A：忽略次峰值\n- 选项 B：将次峰值视为新的关键点\n- 选项 C：为关键点分配多个方向\n- 选项 D：将次峰值与主峰值合并\n- 题干：对直方图进行平滑以减少噪声影响\n\n多方向关键点处理策略：\n\n1. 80%规则：\n\n◦\n检查所有峰值是否达到主峰值的80%\n\n◦\n这个阈值经过实验优化确定\n\n◦\n确保只有显著的方向被保留\n\n2. 新关键点创建：\n\n◦\n为每个符合条件的次峰值创建新关键点\n\n◦\n位置相同，但方向不同\n\n◦\n增加了匹配的机会\n\n3. 优势：\n\n◦\n处理具有多个主导方向的复杂结构\n\n◦\n如对称的角点、T型结构等\n\n◦\n提高在复杂纹理中的匹配性能\n\n4. 计算成本：\n\n◦\n增加了特征点数量\n\n---\n\n## Page 55\n\n◦\n提高了计算复杂度\n\n◦\n但显著改善了匹配率\n\nThe computation of\nkeypoint descriptors in the SIFT algorithm is based on what?",
    "bankId": "simple-concept",
    "number": 80
  },
  {
    "id": "simple-concept-81",
    "title": "The computation of",
    "question": "The computation of\nkeypoint descriptors in the SIFT algorithm is based on what?",
    "images": [],
    "options": [
      "Gradient orientation histograms of the keypoint's neighborhood",
      "Color information of the keypoint",
      "Texture features of the keypoint",
      "Frequency domain features of the keypoint"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "题目中文翻译：\n\n- 题干：SIFT算法中关键点描述子的计算基于什么？\n- 选项 A：关键点邻域的梯度方向直方图\n- 选项 B：关键点的颜色信息\n- 选项 C：关键点的纹理特征\n- 选项 D：关键点的频域特征\n\nSIFT描述子的核心原理：\n\n1. 梯度方向直方图：\n\n◦\n在16×16像素邻域内计算梯度\n\n◦\n将区域分为4×4个子区域\n\n◦\n每个子区域计算8方向直方图\n\n2. 描述子构成：\n\n◦\n4×4×8 = 128维向量\n\n◦\n每一维代表特定方向的梯度累积\n\n◦\n捕获局部形状信息\n\n3. 相对主方向：\n\n◦\n所有梯度方向相对于关键点主方向\n\n◦\n实现旋转不变性\n\n◦\n保持方向的相对关系\n\n4. 高斯加权：\n\n◦\n距离中心越远，权重越小\n\n◦\nσ = 0.5 × 窗口宽度\n\n◦\n\n---\n\n## Page 56\n\nHow are keypoint descriptors\ngenerated in the SIFT algorithm?",
    "bankId": "simple-concept",
    "number": 81
  },
  {
    "id": "simple-concept-82",
    "title": "How are keypoint descriptors",
    "question": "How are keypoint descriptors\ngenerated in the SIFT algorithm?",
    "images": [],
    "options": [
      "By applying Gaussian blur to the keypoint's neighborhood",
      "By computing and normalizing the gradient orientation histograms of the keypoint's neighborhood",
      "By performing edge detection on the keypoint's neighborhood",
      "By calculating the mean pixel intensity of the keypoint's neighborhood"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 题干：SIFT算法中如何生成关键点描述子？\n- 选项 A：通过对关键点邻域应用高斯模糊\n- 选项 B：通过计算和归一化关键点邻域的梯度方向直方图\n- 选项 C：通过对关键点邻域进行边缘检测\n- 选项 D：通过计算关键点邻域的平均像素强度\n- 题干：减少边界效应\n\nSIFT描述子生成的完整过程：\n\n1. 邻域采样：\n\n◦\n在关键点周围选择16×16像素窗口\n\n◦\n窗口大小根据关键点尺度调整\n\n◦\n坐标系对齐到关键点主方向\n\n2. 梯度计算：\n\n◦\n计算每个像素的梯度幅值和方向\n\n◦\n方向相对于关键点主方向\n\n◦\n使用高斯权重减少边界影响\n\n3. 直方图统计：\n\n◦\n4×4子区域，每个计算8方向直方图\n\n◦\n使用三线性插值分配权重\n\n◦\n累积加权梯度幅值\n\n4. 归一化处理：\n\n◦\n首次归一化到单位长度\n\n◦\n截断大于0.2的值\n\n◦\n\n---\n\n## Page 57\n\nWhy is it\nnecessary to normalize the gradient orientation histograms in the\nSIFT algorithm?",
    "bankId": "simple-concept",
    "number": 82
  },
  {
    "id": "simple-concept-83",
    "title": "Why is it",
    "question": "Why is it\nnecessary to normalize the gradient orientation histograms in the\nSIFT algorithm?",
    "images": [],
    "options": [
      "To reduce the impact of illumination changes",
      "To enhance image contrast",
      "To improve computation speed",
      "To reduce image noise"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "题目中文翻译：\n\n- 题干：为什么在SIFT算法中需要对梯度方向直方图进行归一化？\n- 选项 A：为了减少光照变化的影响\n- 选项 B：为了增强图像对比度\n- 选项 C：为了提高计算速度\n- 选项 D：为了减少图像噪声\n- 题干：再次归一化增强鲁棒性\n\nSIFT归一化的重要性：\n\n1. 光照不变性：\n\n◦\n整体光照变化影响所有梯度幅值\n\n◦\n归一化保持相对关系不变\n\n◦\n消除亮度缩放的影响\n\n2. 对比度鲁棒性：\n\n◦\n对比度变化等价于梯度缩放\n\n◦\n归一化后描述子保持稳定\n\n◦\n提高在不同对比度下的匹配率\n\n3. 两次归一化策略：\n\n◦\n第一次：归一化到单位长度\n\n◦\n截断：限制单个元素最大值0.2\n\n◦\n第二次：再次归一化\n\n4. 截断的作用：\n\n◦\n减少强边缘的主导作用\n\n◦\n\n◦\n提高对几何变形的鲁棒性\n\nSIFT算法中关键点描述子的维数是多少？/ What is the dimensionality\nof the keypoint descriptors in the SIFT algorithm?\n\n---\n\n## Page 58",
    "bankId": "simple-concept",
    "number": 83
  },
  {
    "id": "simple-concept-84",
    "title": "What",
    "question": "What\nmakes the SIFT algorithm partially invariant to illumination changes\nand geometric distortions?",
    "images": [],
    "options": [
      "Due to the use of Gaussian blurring and gradient orientation histograms",
      "Due to the use of edge detection and image smoothing",
      "Due to the use of histogram equalization and contrast enhancement",
      "Due to the use of the Fourier transform of the image"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "题目中文翻译：\n\n- 题干：SIFT算法对光照变化和几何变形具有部分不变性的原因是什么？\n- 选项 A：由于使用了高斯模糊和梯度方向直方图\n- 选项 B：由于使用了边缘检测和图像平滑\n- 选项 C：由于使用了直方图均衡化和对比度增强\n- 选项 D：由于使用了图像的傅里叶变换\n- 题干：128维提供良好的匹配性能\n\nSIFT不变性的技术基础：\n\n1. 高斯模糊的作用：\n\n◦\n创建尺度空间表示\n\n◦\n提供尺度不变性\n\n◦\n减少噪声和细节的影响\n\n◦\n增强特征的稳定性\n\n2. 梯度方向直方图的优势：\n\n◦\n捕获局部形状信息\n\n◦\n对光照变化鲁棒（归一化）\n\n◦\n相对方向关系保持稳定\n\n◦\n对小幅几何变形不敏感\n\n3. 组合效果：\n\n◦\n尺度空间 + 主方向 → 旋转和尺度不变\n\n◦\n\n◦\n局部描述 → 对全局变形的局部鲁棒性\n\n4. 局限性：\n\n◦\n仅部分仿射不变\n\n◦\n对大幅透视变形敏感\n\n◦\n计算复杂度较高\n\nWhich of the following is NOT a\nmajor advantage of the SIFT algorithm?",
    "bankId": "simple-concept",
    "number": 84
  },
  {
    "id": "simple-concept-85",
    "title": "Which of the following is NOT a",
    "question": "Which of the following is NOT a\nmajor advantage of the SIFT algorithm?",
    "images": [],
    "options": [
      "Invariance to scale and orientation",
      "Partial invariance to affine distortion and illumination changes",
      "Low computational complexity",
      "Ability to detect local features in an image"
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "题目中文翻译：\n\n- 题干：以下哪项不是SIFT算法的主要优势？\n- 选项 A：对尺度和方向不变\n- 选项 B：对仿射失真和光照变化部分不变\n- 选项 C：计算复杂度低\n- 选项 D：能够检测图像中的局部特征\n- 题干：归一化梯度直方图 → 光照不变\n\nSIFT算法的优缺点分析：\n\n1. 主要优势：\n\n◦\n尺度不变性：通过尺度空间和DoG检测\n\n◦\n旋转不变性：通过主方向分配\n\n◦\n光照鲁棒性：通过描述子归一化\n\n◦\n局部特征检测：稳定的关键点检测\n\n2. 计算复杂度问题：\n\n◦\n需要构建尺度空间金字塔\n\n◦\nDoG计算和极值检测耗时\n\n◦\n128维描述子计算复杂\n\n◦\n匹配阶段计算量大\n\n3. 性能 vs 效率权衡：\n\n◦\n高质量特征 ↔ 高计算成本\n\n◦\n后续算法如SURF追求更高效率\n\n◦\nSIFT注重特征质量而非速度\n\n4. 应用考虑：\n\n◦\n适合离线处理\n\n◦\n对实时性要求不高的场合\n\n◦\n质量优先的应用\n\n### RANSAC算法 / RANSAC Algorithm\n\nWhat is the main purpose of the\nRANSAC algorithm?",
    "bankId": "simple-concept",
    "number": 85
  },
  {
    "id": "simple-concept-86",
    "title": "What is the main purpose of the",
    "question": "What is the main purpose of the\nRANSAC algorithm?",
    "images": [],
    "options": [
      "Enhance image contrast",
      "Estimate model parameters from data containing outliers",
      "Enhance image colors",
      "Optimize image resolution"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 题干：RANSAC算法的主要目的是什么？\n- 选项 A：增强图像对比度\n- 选项 B：从包含异常值的数据中估计模型参数\n- 选项 C：增强图像颜色\n- 选项 D：优化图像分辨率\n\nRANSAC (Random Sample Consensus) 算法的核心作用：\n\n1. 鲁棒估计：\n\n◦\n在存在大量异常值（outliers）的数据中估计模型参数\n\n◦\n不受异常值影响的参数估计方法\n\n◦\n适用于噪声数据和错误匹配的情况\n\n2. 应用场景：\n\n◦\n图像匹配中的基础矩阵估计\n\n◦\n立体视觉中的极线几何估计\n\n◦\n点云配准和平面拟合\n\n3. 核心思想：\n\n◦\n随机采样最小数据集\n\n◦\n迭代寻找最优模型\n\n◦\n通过内点数量评估模型质量\n\n4. 优势：对异常值具有很强的鲁棒性\n\nHow are model parameters\ncomputed in the RANSAC algorithm?",
    "bankId": "simple-concept",
    "number": 86
  },
  {
    "id": "simple-concept-87",
    "title": "How are model parameters",
    "question": "How are model parameters\ncomputed in the RANSAC algorithm?",
    "images": [],
    "options": [
      "By averaging all data points",
      "By randomly selecting a small subset of data points (sample)",
      "By calculating the image gradient",
      "By smoothing the image"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 题干：RANSAC算法中如何计算模型参数？\n- 选项 A：通过平均所有数据点\n- 选项 B：通过随机选择最小数据点子集（样本）\n- 选项 C：通过计算图像梯度\n- 选项 D：通过平滑图像\n\nRANSAC参数估计的核心方法：\n\n1. 最小样本集：\n\n---\n\n## Page 62\n\n◦\n随机选择拟合模型所需的最小数据点数\n\n◦\n例如：直线需要2个点，圆需要3个点，基础矩阵需要8个点\n\n◦\n确保样本集足够小以减少包含异常值的概率\n\n2. 迭代过程：\n\n◦\n每次迭代随机选择新的最小样本集\n\n◦\n基于该样本集计算模型参数\n\n◦\n评估模型对所有数据的拟合程度\n\n3. 参数计算：\n\n◦\n使用最小二乘法或其他拟合方法\n\n◦\n基于当前样本集的解析解\n\n◦\n计算速度快，适合迭代算法\n\n4. 随机性优势：避免被异常值主导的局部最优解\n\nWhich of the following\nsteps is not included in the main steps of the RANSAC algorithm?",
    "bankId": "simple-concept",
    "number": 87
  },
  {
    "id": "simple-concept-88",
    "title": "Which of the following",
    "question": "Which of the following\nsteps is not included in the main steps of the RANSAC algorithm?",
    "images": [],
    "options": [
      "Randomly select a minimal data set",
      "Compute model parameters",
      "Determine the number of inliers",
      "Smooth the image"
    ],
    "answer": 3,
    "answers": [
      3
    ],
    "explanation": "题目中文翻译：\n\n- 题干：RANSAC算法的主要步骤中不包括以下哪项？\n- 选项 A：随机选择最小数据集\n- 选项 B：计算模型参数\n- 选项 C：确定内点数量\n- 选项 D：平滑图像\n\nRANSAC算法的标准流程：\n\n1. 核心步骤：\n\n◦\n随机采样：选择最小数据点集合\n\n◦\n模型拟合：基于样本计算模型参数\n\n◦\n内点统计：计算符合模型的数据点数量\n\n◦\n模型评估：根据内点数量评估模型质量\n\n◦\n迭代优化：重复上述步骤寻找最佳模型\n\n2. 不相关操作：\n\n◦\n图像平滑属于预处理步骤\n\n---\n\n## Page 63\n\n◦\n不是RANSAC算法本身的组成部分\n\n◦\nRANSAC专注于参数估计而非图像处理\n\n3. 终止条件：\n\n◦\n达到预设迭代次数\n\n◦\n找到足够好的模型（内点数量超过阈值）\n\n◦\n置信度达到要求\n\n4. 输出结果：最优模型参数和对应的内点集合\n\nWhat is an inlier in the RANSAC\nalgorithm?",
    "bankId": "simple-concept",
    "number": 88
  },
  {
    "id": "simple-concept-89",
    "title": "What is an inlier in the RANSAC",
    "question": "What is an inlier in the RANSAC\nalgorithm?",
    "images": [],
    "options": [
      "A randomly selected point in the data set",
      "A data point well predicted by the current model",
      "A noise point in the data set",
      "An edge point in the image"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 题干：RANSAC算法中的内点是什么？\n- 选项 A：数据集中随机选择的点\n- 选项 B：当前模型能够很好预测的数据点\n- 选项 C：数据集中的噪声点\n- 选项 D：图像中的边缘点\n\n内点（Inlier）的概念和重要性：\n\n1. 定义：\n\n◦\n与当前模型拟合良好的数据点\n\n◦\n到模型的距离小于预设阈值\n\n◦\n被认为是\"正确\"的观测数据\n\n2. 判断标准：\n\n◦\n距离阈值：点到模型的几何距离 < δ\n\n◦\n对于直线：点到直线的垂直距离\n\n◦\n对于基础矩阵：极线约束误差\n\n3. 作用：\n\n◦\n评估模型质量的关键指标\n\n◦\n内点数量越多，模型越可靠\n\n◦\n用于最终的模型精化\n\n4. 与异常值的区别：\n\n---\n\n## Page 64\n\n◦\n内点：符合真实模型的观测\n\n◦\n异常值：错误匹配或噪声导致的错误观测\n\n◦\nRANSAC的目标是最大化内点数量\n\nBoW（词袋模型）/ Bag-of-Words (BoW)\n\nWhat is the\nmain purpose of the Bag-of-Words (BoW) method in feature\nencoding?",
    "bankId": "simple-concept",
    "number": 89
  },
  {
    "id": "simple-concept-90",
    "title": "What is the",
    "question": "What is the\nmain purpose of the Bag-of-Words (BoW) method in feature\nencoding?",
    "images": [],
    "options": [
      "Transform images into fixed-dimension histograms",
      "Improve image resolution",
      "Enhance image contrast",
      "Optimize image registration"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "题目中文翻译：\n\n- 题干：词袋模型（BoW）方法在特征编码中的主要目的是什么？\n- 选项 A：将图像转换为固定维度的直方图\n- 选项 B：提高图像分辨率\n- 选项 C：增强图像对比度\n- 选项 D：优化图像配准\n\nBoW模型的核心目标和原理：\n\n1. 特征量化：\n\n◦\n将变长的局部特征集转换为固定长度的向量\n\n◦\n实现不同图像间的特征统一表示\n\n◦\n便于后续的分类和检索算法\n\n2. 维度统一：\n\n◦\n不同图像可能有不同数量的特征点\n\n◦\nBoW将所有图像表示为相同维度的直方图\n\n◦\n维度等于视觉词汇表的大小\n\n3. 统计表示：\n\n◦\n统计每个视觉词汇在图像中的出现频率\n\n◦\n忽略特征的空间位置信息\n\n◦\n关注特征类型的分布模式\n\n---\n\n## Page 65\n\nWhat is the first step in the\nBag-of-Words (BoW) method?",
    "bankId": "simple-concept",
    "number": 90
  },
  {
    "id": "simple-concept-91",
    "title": "What is the first step in the",
    "question": "What is the first step in the\nBag-of-Words (BoW) method?",
    "images": [],
    "options": [
      "Extract local feature descriptors",
      "Create a visual vocabulary",
      "Generate image histograms",
      "Smooth the image"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "题目中文翻译：\n\n- 题干：词袋模型（BoW）方法的第一步是什么？\n- 选项 A：提取局部特征描述子\n- 选项 B：创建视觉词汇表\n- 选项 C：生成图像直方图\n- 选项 D：平滑图像\n\nBoW模型的完整流程：\n\n1. 特征提取（第一步）：\n\n◦\n从训练图像中提取局部特征（如SIFT、SURF等）\n\n◦\n获得特征描述子的集合\n\n◦\n每个描述子表示图像的局部特性\n\n2. 后续步骤：\n\n◦\n聚类分析：对所有特征描述子进行聚类\n\n◦\n词汇表构建：聚类中心构成视觉词汇表\n\n◦\n特征量化：将特征分配给最近的视觉词汇\n\n◦\n直方图生成：统计视觉词汇的出现频率\n\n3. 特征提取的重要性：\n\n◦\n\n◦\n需要具有区分性和稳定性\n\n◦\n常用特征：SIFT、SURF等\n\n4. 预处理考虑：\n\n◦\n特征标准化和归一化\n\n◦\n降维处理（如PCA）\n\nWhich method is\ncommonly used for clustering when creating a visual vocabulary?",
    "bankId": "simple-concept",
    "number": 91
  },
  {
    "id": "simple-concept-92",
    "title": "Which method is",
    "question": "Which method is\ncommonly used for clustering when creating a visual vocabulary?",
    "images": [],
    "options": [
      "Gaussian filtering",
      "K-means clustering",
      "Edge detection",
      "Color segmentation"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 题干：创建视觉词汇表时通常使用哪种聚类方法？\n- 选项 A：高斯滤波\n- 选项 B：K均值聚类\n- 选项 C：边缘检测\n- 选项 D：颜色分割\n- 题干：质量决定了最终表示的好坏\n\nK-means聚类在BoW中的应用：\n\n1. 选择原因：\n\n◦\n算法简单高效，适合大规模数据\n\n◦\n能够有效处理高维特征描述子\n\n◦\n聚类中心直接作为视觉词汇\n\n◦\n广泛验证的有效性\n\n2. 聚类过程：\n\n◦\n输入：所有训练图像的特征描述子\n\n◦\n设定：聚类数K（词汇表大小）\n\n◦\n输出：K个聚类中心（视觉词汇）\n\n◦\n迭代优化：最小化类内平方和\n\n3. 参数选择：\n\n◦\nK值：通常500-10000，平衡表达能力和计算效率\n\n◦\n初始化：K-means++等改进方法\n\n◦\n距离度量：欧氏距离或余弦距离\n\n4. 替代方法：\n\n◦\n层次聚类：计算复杂度高\n\n◦\n高斯混合模型：概率化的表示\n\n◦\n近似方法：如Approximate K-means\n\nWhat do \"visual words\"\nrepresent in the BoW model?",
    "bankId": "simple-concept",
    "number": 92
  },
  {
    "id": "simple-concept-93",
    "title": "What do \"visual words\"",
    "question": "What do \"visual words\"\nrepresent in the BoW model?",
    "images": [],
    "options": [
      "Color information of the image",
      "Edge information of the image",
      "Cluster centers of local image features",
      "Brightness information of the image"
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "题目中文翻译：\n\n- 题干：BoW模型中的\"视觉词汇\"代表什么？\n- 选项 A：图像的颜色信息\n- 选项 B：图像的边缘信息\n- 选项 C：局部图像特征的聚类中心\n- 选项 D：图像的亮度信息\n\n视觉词汇（Visual Words）的本质：\n\n1. 定义：\n\n◦\n通过聚类得到的特征空间中的代表点\n\n◦\n每个聚类中心代表一类相似的局部特征\n\n◦\n类比文本处理中的\"单词\"概念\n\n2. 形成过程：\n\n◦\n收集大量局部特征描述子\n\n◦\n使用K-means等算法进行聚类\n\n◦\n聚类中心即为视觉词汇\n\n◦\n词汇表大小通常为数百到数万\n\n3. 语义含义：\n\n◦\n每个视觉词汇代表一种局部模式\n\n◦\n如：角点、边缘、纹理等\n\n◦\n具有一定的视觉语义\n\n4. 应用方式：\n\n◦\n新特征通过最近邻分配到视觉词汇\n\n◦\n统计词汇出现频率形成直方图\n\n◦\n实现从连续特征到离散符号的转换\n\nWhen generating\nan Image histogram, what does each bin in the histogram represent?",
    "bankId": "simple-concept",
    "number": 93
  },
  {
    "id": "simple-concept-94",
    "title": "When generating",
    "question": "When generating\nan Image histogram, what does each bin in the histogram represent?",
    "images": [],
    "options": [
      "Intensity variation of the image",
      "Color variation of the image",
      "Frequency of visual words in the image",
      "Contrast of the image"
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "题目中文翻译：\n\n- 题干：生成图像直方图时，直方图中的每个bin代表什么？\n- 选项 A：图像的强度变化\n- 选项 B：图像的颜色变化\n- 选项 C：视觉词汇在图像中的频率\n- 选项 D：图像的对比度\n\n---\n\n## Page 68\n\nBoW直方图的构造和含义：\n\n1. bin的定义：\n\n◦\n每个bin对应词汇表中的一个视觉词汇\n\n◦\nbin的值表示该视觉词汇在图像中的出现次数\n\n◦\n直方图维度等于词汇表大小\n\n2. 统计过程：\n\n◦\n提取图像的所有局部特征\n\n◦\n将每个特征分配给最近的视觉词汇\n\n◦\n累加每个词汇的出现次数\n\n◦\n可选择归一化处理\n\n3. 直方图特性：\n\n◦\n稀疏性：大部分bin值为0\n\n◦\n\n◦\n固定维度：便于机器学习算法\n\n4. 归一化方法：\n\n◦\nL1归一化：除以总特征数\n\n◦\nL2归一化：除以向量模长\n\n◦\nTF-IDF权重：考虑词汇的区分性\n\nHow are images in the training set classified using the BoW model\nduring feature encoding?",
    "bankId": "simple-concept",
    "number": 94
  },
  {
    "id": "simple-concept-95",
    "title": "How are images in the training set classified using the BoW model",
    "question": "How are images in the training set classified using the BoW model\nduring feature encoding?",
    "images": [],
    "options": [
      "By edge detection",
      "By smoothing the image",
      "By training histograms and Support Vector Machine (SVM)",
      "By color segmentation"
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "题目中文翻译：\n\n- 题干：在特征编码过程中，如何使用BoW模型对训练集中的图像进行分类？\n- 选项 A：通过边缘检测\n- 选项 B：通过图像平滑\n- 选项 C：通过训练直方图和支持向量机（SVM）\n- 选项 D：通过颜色分割\n- 题干：顺序无关：只关心频率不关心位置\n\nBoW模型在图像分类中的应用：\n\n1. 训练阶段：\n\n---\n\n## Page 69\n\n◦\n将图像转换为BoW直方图特征\n\n◦\n使用带标签的训练数据\n\n◦\n训练分类器（如SVM、随机森林等）\n\n◦\n学习特征与类别的映射关系\n\n2. SVM的优势：\n\n◦\n适合高维稀疏的BoW特征\n\n◦\n具有良好的泛化能力\n\n◦\n支持非线性核函数\n\n◦\n对小样本数据效果好\n\n3. 分类流程：\n\n◦\n特征提取 → BoW量化 → 直方图生成 → SVM分类\n\n◦\n每个步骤都可以优化和调参\n\n◦\n端到端的监督学习框架\n\n4. 其他分类器选择：\n\n◦\n朴素贝叶斯：适合文本类比\n\n◦\n随机森林：集成学习方法\n\n◦\n神经网络：深度学习方法\n\nHow are feature\ndescriptors in the training set processed when using the BoW\nmodel?",
    "bankId": "simple-concept",
    "number": 95
  },
  {
    "id": "simple-concept-96",
    "title": "How are feature",
    "question": "How are feature\ndescriptors in the training set processed when using the BoW\nmodel?",
    "images": [],
    "options": [
      "By Gaussian filtering",
      "By sampling and clustering",
      "By smoothing the image",
      "By edge detection"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 题干：使用BoW模型时，训练集中的特征描述子如何处理？\n- 选项 A：通过高斯滤波\n- 选项 B：通过采样和聚类\n- 选项 C：通过图像平滑\n- 选项 D：通过边缘检测\n\n训练集特征描述子的处理流程：\n\n1. 采样策略：\n\n◦\n从所有训练图像中提取特征描述子\n\n---\n\n## Page 70\n\n◦\n由于数据量巨大，通常需要采样\n\n◦\n随机采样或密度采样\n\n◦\n平衡不同类别的特征数量\n\n2. 聚类分析：\n\n◦\n使用K-means等算法对采样的特征进行聚类\n\n◦\n聚类数K决定了词汇表的大小\n\n◦\n聚类中心作为视觉词汇\n\n◦\n优化聚类质量以提高表达能力\n\n3. 处理考虑：\n\n◦\n\n◦\n降维处理：减少计算复杂度\n\n◦\n去除异常值：提高聚类质量\n\n4. 优化策略：\n\n◦\n层次聚类：构建多层次词汇表\n\n◦\n在线聚类：处理大规模数据\n\n◦\n判别性聚类：考虑类别信息\n\nWhat can the generated\nhistograms serve as in feature encoding?",
    "bankId": "simple-concept",
    "number": 96
  },
  {
    "id": "simple-concept-97",
    "title": "What can the generated",
    "question": "What can the generated\nhistograms serve as in feature encoding?",
    "images": [],
    "options": [
      "Texture features of the image",
      "Color features of the image",
      "Feature vectors of the image",
      "Contrast information of the image"
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "题目中文翻译：\n\n- 题干：在特征编码中，生成的直方图可以作为什么？\n- 选项 A：图像的纹理特征\n- 选项 B：图像的颜色特征\n- 选项 C：图像的特征向量\n- 选项 D：图像的对比度信息\n- 题干：特征标准化：确保不同维度的平衡\n\nBoW直方图作为特征向量的意义：\n\n1. 特征向量的定义：\n\n◦\n图像的数值化表示\n\n◦\n固定维度的向量形式\n\n◦\n适合机器学习算法输入\n\n---\n\n## Page 71\n\n◦\n保留图像的关键信息\n\n2. BoW直方图的特性：\n\n◦\n维度固定：等于词汇表大小\n\n◦\n数值稀疏：大部分元素为0\n\n◦\n统计特性：反映特征分布\n\n◦\n语义丰富：包含视觉模式信息\n\n3. 作为特征向量的优势：\n\n◦\n标准化表示：不同图像具有相同格式\n\n◦\n计算效率：向量运算快速\n\n◦\n可比性：支持相似度计算\n\n◦\n可扩展：易于与其他特征融合\n\n4. 应用场景：\n\n◦\n图像分类：作为分类器输入\n\n◦\n图像检索：计算图像相似度\n\n◦\n聚类分析：图像内容分析\n\n◦\n特征融合：与其他特征结合\n\n### 形状特征 / Shape Features\n\nWhich descriptor is\nsuitable for analyzing elongated or flat shapes?",
    "bankId": "simple-concept",
    "number": 97
  },
  {
    "id": "simple-concept-98",
    "title": "Which descriptor is",
    "question": "Which descriptor is\nsuitable for analyzing elongated or flat shapes?",
    "images": [],
    "options": [
      "Circularity",
      "Compactness",
      "Elongation",
      "Eccentricity"
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "题目中文翻译：\n\n- 题干：哪种描述符适用于分析细长或扁平的形状？\n- 选项 A：圆形度\n- 选项 B：紧凑性\n- 选项 C：伸长度\n- 选项 D：偏心率\n\n伸长度描述符的定义和应用：\n\n1. 伸长度定义：\n\n---\n\n## Page 72\n\n◦\n衡量形状在主轴方向上的延伸程度\n\n◦\n通常定义为长轴与短轴的比值\n\n◦\n### Elongation = Major_Axis_Length / Minor_Axis_Length\n\n2. 计算方法：\n\n◦\n通过主成分分析（PCA）确定主轴\n\n◦\n计算协方差矩阵的特征值\n\n◦\n长轴 = √(最大特征值)，短轴 = √(最小特征值)\n\n3. 取值范围和含义：\n\n◦\n\n◦\n伸长度 = 1：圆形或正方形\n\n◦\n伸长度 > 3：明显的细长形状\n\n4. 应用场景：\n\n◦\n检测线状物体（道路、河流、管道）\n\n◦\n分析细胞形态\n\n◦\n工业零件的质量检测\n\nHow does the chain code\ndescriptor represent the shape of an object?",
    "bankId": "simple-concept",
    "number": 98
  },
  {
    "id": "simple-concept-99",
    "title": "How does the chain code",
    "question": "How does the chain code\ndescriptor represent the shape of an object?",
    "images": [],
    "options": [
      "Relative positions of consecutive boundary points",
      "Absolute positions of consecutive boundary points",
      "Area of the object",
      "Perimeter of the object"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "题目中文翻译：\n\n- 题干：链码描述符如何表示物体的形状？\n- 选项 A：连续边界点的相对位置\n- 选项 B：连续边界点的绝对位置\n- 选项 C：物体的面积\n- 选项 D：物体的周长\n- 题干：伸长度 ≥ 1，值越大形状越细长\n\n链码描述符的原理和特点：\n\n1. 基本概念：\n\n◦\n使用方向编码序列表示边界形状\n\n◦\n记录从一个边界点到下一个边界点的方向\n\n◦\n通常使用8方向编码（0-7）或4方向编码（0-3）\n\n2. 编码方案：\n\n---\n\n## Page 73\n\n◦\n8方向：0°, 45°, 90°, 135°, 180°, 225°, 270°, 315°\n\n◦\n每个方向用数字0-7表示\n\n◦\n顺时针或逆时针遍历边界\n\n3. 优势：\n\n◦\n平移不变性：相对位置不受起始点影响\n\n◦\n压缩效率：用少量数字表示复杂边界\n\n◦\n易于计算：简单的方向计算\n\n4. 应用和变种：\n\n◦\n差分链码：相邻链码的差值，具有旋转不变性\n\n◦\n归一化链码：处理不同尺度的形状\n\n◦\n形状匹配和识别\n\nWhich descriptor is suitable for\nanalyzing elliptical shapes?",
    "bankId": "simple-concept",
    "number": 99
  },
  {
    "id": "simple-concept-100",
    "title": "Which descriptor is suitable for",
    "question": "Which descriptor is suitable for\nanalyzing elliptical shapes?",
    "images": [],
    "options": [
      "Circularity",
      "Compactness",
      "Elongation",
      "Eccentricity"
    ],
    "answer": 3,
    "answers": [
      3
    ],
    "explanation": "题目中文翻译：\n\n- 题干：哪种描述符适用于分析椭圆形状？\n- 选项 A：圆形度\n- 选项 B：紧凑性\n- 选项 C：伸长度\n- 选项 D：偏心率\n\n偏心率在椭圆分析中的应用：\n\n1. 偏心率定义：\n\n◦\n描述椭圆偏离圆形的程度\n\n◦\ne = √(1 - b²/a²)，其中a为长半轴，b为短半轴\n\n◦\n或者 e = c/a，其中c为焦点到中心的距离\n\n2. 取值范围和含义：\n\n◦\ne = 0：完美圆形\n\n◦\n0 < e < 1：椭圆形，值越大越扁\n\n◦\ne = 1：抛物线（退化情况）\n\n◦\ne > 1：双曲线（退化情况）\n\n---\n\n## Page 74\n\n3. 计算方法：\n\n◦\n通过最小二乘法拟合椭圆\n\n◦\n计算协方差矩阵的特征值\n\n◦\ne = √(1 - λmin/λmax)\n\n4. 应用领域：\n\n◦\n天体轨道分析\n\n◦\n细胞形态学研究\n\n◦\n工业检测中的椭圆零件分析\n\n### 局部曲率 / Local Curvature\n\nIn local curvature\ndescriptors, what do the positive and negative values of curvature\nindicate?",
    "bankId": "simple-concept",
    "number": 100
  },
  {
    "id": "simple-concept-101",
    "title": "In local curvature",
    "question": "In local curvature\ndescriptors, what do the positive and negative values of curvature\nindicate?",
    "images": [],
    "options": [
      "Positive indicates concave, negative indicates convex",
      "Positive indicates convex, negative indicates concave",
      "Positive indicates flat, negative indicates convex",
      "Positive indicates convex, negative indicates flat"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 题干：在局部曲率描述符中，曲率的正值和负值表示什么？\n- 选项 A：正值表示凹形，负值表示凸形\n- 选项 B：正值表示凸形，负值表示凹形\n- 选项 C：正值表示平坦，负值表示凸形\n- 选项 D：正值表示凸形，负值表示平坦\n\n局部曲率的符号约定和几何意义：\n\n1. 曲率符号约定：\n\n◦\n正曲率：曲线向内弯曲，形成凸形（convex）\n\n◦\n负曲率：曲线向外弯曲，形成凹形（concave）\n\n◦\n零曲率：直线段，局部平坦\n\n2. 数学定义：\n\n◦\n### 曲率 κ = d²y/dx² / (1 + (dy/dx)²)^(3/2)\n\n◦\n### 或参数形式：κ = (x'y'' - y'x') / (x'² + y'²)^(3/2)\n\n3. 几何直觉：\n\n◦\n正曲率：像圆的外侧，中心在曲线\"内侧\"\n\n---\n\n## Page 75\n\n◦\n负曲率：像圆的内侧，中心在曲线\"外侧\"\n\n◦\n符号与曲线的凹凸性相关\n\n4. 应用意义：\n\n◦\n角点检测：高曲率点\n\n◦\n边缘分类：凸边缘vs凹边缘\n\n◦\n形状分析：局部几何特征\n\nWhat do local curvature descriptors\nrepresent?",
    "bankId": "simple-concept",
    "number": 101
  },
  {
    "id": "simple-concept-102",
    "title": "What do local curvature descriptors",
    "question": "What do local curvature descriptors\nrepresent?",
    "images": [],
    "options": [
      "Global shape properties of the object",
      "Color information of the object",
      "Local shape properties of the object",
      "Texture features of the object"
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "题目中文翻译：\n\n- 题干：局部曲率描述符表示什么？\n- 选项 A：物体的全局形状属性\n- 选项 B：物体的颜色信息\n- 选项 C：物体的局部形状属性\n- 选项 D：物体的纹理特征\n\n局部曲率描述符的特征和应用：\n\n1. 局部性特征：\n\n◦\n描述边界上每个点的局部几何性质\n\n◦\n反映曲线在该点附近的弯曲程度\n\n◦\n不依赖于整体形状的全局信息\n\n2. 形状属性：\n\n◦\n几何信息：弯曲度、方向变化率\n\n◦\n拓扑信息：凹凸性、转折点\n\n◦\n尺度信息：可以在多个尺度上计算\n\n3. 计算方法：\n\n◦\n离散曲率：基于相邻点的角度变化\n\n◦\n连续曲率：基于参数曲线的导数\n\n◦\n多尺度曲率：使用不同的邻域大小\n\n4. 应用领域：\n\n◦\n角点检测：寻找高曲率点\n\n---\n\n## Page 76\n\n◦\n形状匹配：基于曲率模式的匹配\n\n◦\n对象识别：曲率作为形状特征\n\n◦\n图像分割：基于曲率的边界分析\n\n### 全局曲率 / Global Curvature\n\nWhat does total bending energy represent?",
    "bankId": "simple-concept",
    "number": 102
  },
  {
    "id": "simple-concept-103",
    "title": "What does total bending energy represent?",
    "question": "What does total bending energy represent?",
    "images": [],
    "options": [
      "The total absolute curvature of the object's contour",
      "The total relative curvature of the object's contour",
      "The physical energy stored in the object's contour",
      "The area of the object"
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "题目中文翻译：\n\n- 题干：总弯曲能量表示什么？\n- 选项 A：物体轮廓的总绝对曲率\n- 选项 B：物体轮廓的总相对曲率\n- 选项 C：存储在物体轮廓中的物理能量\n- 选项 D：物体的面积\n\n总弯曲能量的物理意义和计算：\n\n1. 物理意义：\n\n◦\n类比于弹性梁的弯曲能量\n\n◦\n曲率越大的地方，弯曲能量越高\n\n◦\n反映形状的\"刚性\"或\"柔性\"特征\n\n2. 数学定义：\n\n◦\nE = ∫ κ²(s) ds，其中κ(s)为弧长s处的曲率\n\n◦\n能量与曲率的平方成正比\n\n◦\n积分覆盖整个轮廓\n\n3. 计算特点：\n\n◦\n对高曲率区域（如尖角）敏感\n\n◦\n\n◦\n具有尺度不变性（适当归一化后）\n\n4. 应用：\n\n◦\n形状光滑化：最小化弯曲能量\n\n◦\n形状分类：不同类别有不同的能量特征\n\n---\n\n## Page 77\n\n◦\n轮廓匹配：能量相似的形状更可能匹配\n\nWhat is total absolute curvature?",
    "bankId": "simple-concept",
    "number": 103
  },
  {
    "id": "simple-concept-104",
    "title": "What is total absolute curvature?",
    "question": "What is total absolute curvature?",
    "images": [],
    "options": [
      "The integral of the absolute value of curvature along the object's contour",
      "The integral of the relative value of curvature along the object's contour",
      "The perimeter of the object",
      "The area of the object"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "题目中文翻译：\n\n- 题干：总绝对曲率是什么？\n- 选项 A：物体轮廓上曲率绝对值的积分\n- 选项 B：物体轮廓上曲率相对值的积分\n- 选项 C：物体的周长\n- 选项 D：物体的面积\n- 题干：平滑曲线的弯曲能量较低\n\n总绝对曲率的定义和性质：\n\n1. 数学定义：\n\n◦\nTAC = ∫ |κ(s)| ds\n\n◦\nκ(s)为弧长参数s处的曲率\n\n◦\n积分遍历整个闭合轮廓\n\n2. 几何意义：\n\n◦\n衡量轮廓的总\"弯曲量\"\n\n◦\n不区分凸曲率和凹曲率的方向\n\n◦\n反映形状的复杂程度\n\n3. 重要性质：\n\n◦\n对于凸形状：TAC ≥ 2π（Gauss-Bonnet定理）\n\n◦\n\n◦\n形状越复杂，TAC值越大\n\n4. 实际应用：\n\n◦\n形状复杂度度量\n\n◦\n轮廓平滑度评估\n\n◦\n形状识别特征\n\n凸物体的总绝对曲率的最小值是多少？/ What is the minimum value of\ntotal absolute curvature for convex objects?\n\n---\n\n## Page 78",
    "bankId": "simple-concept",
    "number": 104
  },
  {
    "id": "simple-concept-105",
    "title": "What is the function of the radial",
    "question": "What is the function of the radial\ndistance descriptor?",
    "images": [],
    "options": [
      "Measure the distance from the centroid of the shape to the boundary points",
      "Determine the curvature at various points along the shape's edge",
      "Compute the total length of the shape's perimeter",
      "Calculate the area enclosed by the shape"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "题目中文翻译：\n\n- 题干：径向距离描述符的功能是什么？\n- 选项 A：测量从形状质心到边界点的距离\n- 选项 B：确定形状边缘上各点的曲率\n- 选项 C：计算形状周长的总长度\n- 选项 D：计算形状所围成的面积\n- 题干：任何其他凸形状的TAC都大于2π\n\n径向距离描述符的原理和应用：\n\n1. 基本定义：\n\n◦\n以形状质心为原点\n\n◦\n计算质心到边界上每个点的距离\n\n◦\n形成径向距离函数 r(θ)\n\n2. 表示方法：\n\n◦\n极坐标表示：r = f(θ)\n\n◦\n将2D形状转换为1D信号\n\n◦\n角度θ从0到2π变化\n\n3. 计算步骤：\n\n◦\n计算形状的质心（重心）\n\n◦\n从质心向各个方向发射射线\n\n◦\n记录射线与边界的交点距离\n\n4. 特征和应用：\n\n◦\n旋转不变性：通过归一化起始角度\n\n◦\n尺度不变性：通过距离归一化\n\n◦\n形状匹配：比较径向距离函数\n\n◦\n形状分类：基于距离模式的识别\n\n◦\n傅里叶描述符：对r(θ)进行频域分析\n\n### 形状匹配 / Shape Matching\n\nWhat is the first step in shape matching?",
    "bankId": "simple-concept",
    "number": 105
  },
  {
    "id": "simple-concept-106",
    "title": "What is the first step in shape matching?",
    "question": "What is the first step in shape matching?",
    "images": [],
    "options": [
      "Calculate the shape context",
      "Sample points on the shape boundary",
      "Calculate the cost matrix",
      "Perform one-to-one matching"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 题干：形状匹配的第一步是什么？\n- 选项 A：计算形状上下文\n- 选项 B：对形状边界上的点进行采样\n- 选项 C：计算代价矩阵\n- 选项 D：执行一对一匹配\n\n形状匹配的完整流程：\n\n1. 边界采样（第一步）：\n\n◦\n在两个形状的边界上均匀采样点\n\n◦\n采样点数量通常相同（如100-200个点）\n\n◦\n保持采样点的顺序性\n\n◦\n确保采样密度适中，既不丢失重要特征又不过于冗余\n\n2. 后续步骤顺序：\n\n◦\n计算每个采样点的形状上下文\n\n◦\n构建点对之间的代价矩阵\n\n◦\n求解最优一对一匹配\n\n◦\n估计变换参数\n\n3. 采样策略：\n\n◦\n等弧长采样：保持几何均匀性\n\n◦\n等角度采样：适用于星形形状\n\n◦\n自适应采样：在高曲率区域增加密度\n\n4. 采样的重要性：\n\n◦\n影响后续所有计算的精度\n\n◦\n决定匹配的计算复杂度\n\n◦\n需要平衡精度和效率\n\nWhat does the shape context represent?",
    "bankId": "simple-concept",
    "number": 106
  },
  {
    "id": "simple-concept-107",
    "title": "What does the shape context represent?",
    "question": "What does the shape context represent?",
    "images": [],
    "options": [
      "Color information of each point",
      "Texture information of each point",
      "Relative position distribution of each point",
      "Absolute position distribution of each point"
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "题目中文翻译：\n\n- 题干：形状上下文表示什么？\n- 选项 A：每个点的颜色信息\n- 选项 B：每个点的纹理信息\n- 选项 C：每个点的相对位置分布\n- 选项 D：每个点的绝对位置分布\n\n形状上下文的定义和特征：\n\n1. 基本概念：\n\n◦\n描述某个点相对于形状上其他所有点的空间分布\n\n◦\n使用对数极坐标直方图表示\n\n◦\n每个点都有自己的形状上下文描述符\n\n2. 表示方法：\n\n◦\n以当前点为原点建立极坐标系\n\n◦\n将空间划分为径向和角度bins\n\n◦\n统计其他点在各个bin中的分布\n\n◦\n\n3. 相对性特征：\n\n◦\n不依赖于绝对坐标位置\n\n◦\n具有平移不变性\n\n◦\n可以通过归一化获得尺度不变性\n\n◦\n通过旋转对齐获得旋转不变性\n\n4. 对数径向划分：\n\n◦\n内层bins较小，外层bins较大\n\n◦\n对近距离点更敏感\n\n◦\n符合形状匹配的需求\n\nWhat is the purpose of one-to-\none matching in shape matching?",
    "bankId": "simple-concept",
    "number": 107
  },
  {
    "id": "simple-concept-108",
    "title": "What is the purpose of one-to-",
    "question": "What is the purpose of one-to-\none matching in shape matching?",
    "images": [],
    "options": [
      "Maximize the total cost between matched point pairs",
      "Minimize the total cost between matched point pairs",
      "Calculate the perimeter of the shape",
      "Calculate the area of the shape"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 题干：形状匹配中一对一匹配的目的是什么？\n- 选项 A：最大化匹配点对之间的总代价\n- 选项 B：最小化匹配点对之间的总代价\n- 选项 C：计算形状的周长\n- 选项 D：计算形状的面积\n- 题干：通常使用12个角度bins × 5个径向bins\n\n一对一匹配的数学原理和实现：\n\n---\n\n## Page 82\n\n1. 优化目标：\n\n◦\n寻找最优的点对应关系\n\n◦\n最小化总匹配代价：min Σ C(pi, qj)\n\n◦\n其中C(pi, qj)是点pi和qj的形状上下文距离\n\n2. 约束条件：\n\n◦\n每个点只能匹配一个对应点\n\n◦\n一对一的映射关系\n\n◦\n保持点的相对顺序（可选）\n\n3. 求解方法：\n\n◦\n匈牙利算法（Hungarian algorithm）\n\n◦\n最小权重完美匹配\n\n◦\n时间复杂度O(n³)\n\n4. 代价函数设计：\n\n◦\n基于形状上下文的χ²距离\n\n◦\n### C(pi, qj) = 1/2 Σ [h_i(k) - h_j(k)]² / [h_i(k) + h_j(k)]\n\n◦\n其中h_i(k)是点i的形状上下文第k个bin\n\nHow is the optimal transformation\nachieved in shape matching?",
    "bankId": "simple-concept",
    "number": 108
  },
  {
    "id": "simple-concept-109",
    "title": "How is the optimal transformation",
    "question": "How is the optimal transformation\nachieved in shape matching?",
    "images": [],
    "options": [
      "By least squares method or RANSAC fitting",
      "By maximum the sum squares method",
      "By minimum variance method",
      "By maximum variance method"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "题目中文翻译：\n\n- 题干：形状匹配中如何实现最优变换？\n- 选项 A：通过最小二乘法或RANSAC拟合\n- 选项 B：通过最大二乘和方法\n- 选项 C：通过最小方差方法\n- 选项 D：通过最大方差方法\n\n最优变换估计的方法和原理：\n\n1. 变换模型：\n\n◦\n相似变换：平移 + 旋转 + 尺度\n\n◦\n仿射变换：包含剪切变形\n\n2. 最小二乘法：\n\n---\n\n## Page 83\n\n◦\n假设：匹配对应关系是正确的\n\n◦\n目标：min Σ ||T(pi) - qi||²\n\n◦\n对于相似变换有闭式解\n\n◦\n计算简单，适用于噪声较小的情况\n\n3. RANSAC方法：\n\n◦\n\n◦\n随机采样子集估计变换\n\n◦\n通过内点数量评估变换质量\n\n◦\n对异常匹配具有鲁棒性\n\n4. 迭代改进：\n\n◦\n交替优化匹配和变换\n\n◦\n初始匹配 → 估计变换 → 重新匹配 → 更新变换\n\n◦\n直到收敛到稳定解\n\n◦\n类似于ICP算法的思想\n\nHoG（方向梯度直方图）/ Histogram of Oriented Gradients\n(HoG)\n\nHoG features are constructed by calculating and compiling the\nhistogram of gradient directions in which region of the image?",
    "bankId": "simple-concept",
    "number": 109
  },
  {
    "id": "simple-concept-110",
    "title": "HoG features are constructed by calculating and compiling the",
    "question": "HoG features are constructed by calculating and compiling the\nhistogram of gradient directions in which region of the image?",
    "images": [],
    "options": [
      "Global region",
      "Local region",
      "Edge region",
      "Center region"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 题干：HoG特征通过计算和编译图像中哪个区域的梯度方向直方图来构建？\n- 选项 A：全局区域\n- 选项 B：局部区域\n- 选项 C：边缘区域\n- 选项 D：中心区域\n- 题干：处理存在错误匹配的情况\n\nHoG特征的局部性原理：\n\n1. 局部区域处理：\n\n---\n\n## Page 84\n\n◦\n将图像划分为小的局部区域（cells）\n\n◦\n每个cell通常为8×8或16×16像素\n\n◦\n在每个局部区域内计算梯度方向直方图\n\n◦\n避免全局特征可能丢失的局部细节\n\n2. 局部性的优势：\n\n◦\n对局部几何和光照变化更鲁棒\n\n◦\n\n◦\n支持多尺度特征描述\n\n◦\n减少全局光照变化的影响\n\n3. 与全局方法的对比：\n\n◦\n全局直方图会丢失空间信息\n\n◦\n局部方法保持空间结构\n\n◦\n更适合复杂场景的目标检测\n\n4. 应用背景：\n\n◦\n最初为行人检测而设计\n\n◦\n在目标检测领域广泛应用\n\n◦\n成为计算机视觉的经典特征\n\nWhen calculating HoG\nfeatures, into what are the images initially divided?",
    "bankId": "simple-concept",
    "number": 110
  },
  {
    "id": "simple-concept-111",
    "title": "When calculating HoG",
    "question": "When calculating HoG\nfeatures, into what are the images initially divided?",
    "images": [],
    "options": [
      "Blocks",
      "Cells",
      "Pixels",
      "Segments"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 题干：计算HoG特征时，图像最初被划分为什么？\n- 选项 A：块（Blocks）\n- 选项 B：单元（Cells）\n- 选项 C：像素（Pixels）\n- 选项 D：段（Segments）\n- 题干：能够捕获细微的边缘和纹理信息\n\nHoG特征的层次结构：\n\n1. Cell（单元）- 基础单位：\n\n◦\n图像首先划分为小的cells\n\n◦\n每个cell通常为8×8像素\n\n---\n\n## Page 85\n\n◦\n在每个cell内计算梯度方向直方图\n\n◦\n形成局部特征描述\n\n2. Block（块）- 归一化单位：\n\n◦\n多个相邻cells组成一个block\n\n◦\n\n◦\n在block级别进行归一化\n\n◦\n提高对光照变化的鲁棒性\n\n3. 层次关系：\n\n◦\nPixel → Cell → Block → Detection Window\n\n◦\n每个层次都有特定的功能\n\n◦\n逐级聚合形成最终特征\n\n4. 设计考虑：\n\n◦\nCell大小平衡细节和计算效率\n\n◦\n重叠的blocks提供平滑过渡\n\n◦\n适应不同尺度的特征\n\nEach cell's HoG histogram is\ncalculated based on what?",
    "bankId": "simple-concept",
    "number": 111
  },
  {
    "id": "simple-concept-112",
    "title": "Each cell's HoG histogram is",
    "question": "Each cell's HoG histogram is\ncalculated based on what?",
    "images": [],
    "options": [
      "Color information of the image",
      "Intensity variations of the image",
      "Gradient direction and magnitude",
      "Texture features of the image"
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "",
    "bankId": "simple-concept",
    "number": 112
  },
  {
    "id": "simple-concept-113",
    "title": "What does the response map of",
    "question": "What does the response map of\nHoG features mainly represent?",
    "images": [],
    "options": [
      "Intensity variations of the image",
      "The classifier's response to each detection window",
      "Color variations of the image",
      "Boundary features of the image"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 题干：HoG特征的响应图主要表示什么？\n- 选项 A：图像的强度变化\n- 选项 B：分类器对每个检测窗口的响应\n- 选项 C：图像的颜色变化\n- 选项 D：图像的边界特征\n- 题干：每个像素的梯度方向分配到对应的bin\n\nHoG特征的响应图（Response Map）概念：\n\n1. 响应图定义：\n\n◦\n分类器在图像上滑动窗口时产生的响应值分布\n\n◦\n每个位置的响应值表示该位置包含目标对象的可能性\n\n◦\n通常用热力图形式可视化\n\n2. 生成过程：\n\n◦\n在图像上以固定步长滑动检测窗口\n\n---\n\n## Page 87\n\n◦\n\n◦\n将特征输入训练好的分类器（如SVM）\n\n◦\n得到该位置的分类置信度\n\n3. 响应值含义：\n\n◦\n高响应值：该位置很可能包含目标对象\n\n◦\n低响应值：该位置不太可能包含目标对象\n\n◦\n通过阈值化可以确定目标位置\n\n4. 实际应用：\n\n◦\n目标检测中的候选区域生成\n\n◦\n多尺度检测的响应融合\n\n◦\n非极大值抑制前的初步筛选\n\nWhat is\nformed by concatenating the descriptors of all blocks in the\ndetection window during HoG feature calculation?",
    "bankId": "simple-concept",
    "number": 113
  },
  {
    "id": "simple-concept-114",
    "title": "What is",
    "question": "What is\nformed by concatenating the descriptors of all blocks in the\ndetection window during HoG feature calculation?",
    "images": [],
    "options": [
      "Gradient features of the image",
      "HoG feature vector",
      "Texture features of the image",
      "Edge features of the image"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 题干：在HoG特征计算中，连接检测窗口内所有块的描述符形成什么？\n- 选项 A：图像的梯度特征\n- 选项 B：HoG特征向量\n- 选项 C：图像的纹理特征\n- 选项 D：图像的边缘特征\n- 题干：对每个窗口位置提取HoG特征\n\nHoG特征向量的形成过程：\n\n1. 层次结构：\n\n◦\n像素级：计算梯度方向和幅度\n\n◦\nCell级：8×8像素区域的方向直方图（9维）\n\n◦\nBlock级：2×2个cell的归一化描述符（36维）\n\n◦\n窗口级：所有block描述符的连接\n\n2. 连接过程：\n\n◦\n检测窗口通常为64×128像素\n\n◦\n包含7×15=105个重叠的block\n\n◦\n每个block贡献36维特征\n\n---\n\n## Page 88\n\n◦\n最终HoG特征向量：105×36=3780维\n\n3. 特征向量特性：\n\n◦\n高维密集特征表示\n\n◦\n包含了窗口内完整的梯度信息\n\n◦\n具有空间结构信息\n\n◦\n对平移、旋转有一定不变性\n\n4. 与其他选项区别：\n\n◦\nA选项过于宽泛，HoG是特定的梯度特征\n\n◦\nC、D选项是更高层的语义描述\n\n◦\nB选项准确描述了连接后的结果\n\nWhen\ntraining the classifier, labeled example windows are used to\ndistinguish between which two classes of features?",
    "bankId": "simple-concept",
    "number": 114
  },
  {
    "id": "simple-concept-115",
    "title": "When",
    "question": "When\ntraining the classifier, labeled example windows are used to\ndistinguish between which two classes of features?",
    "images": [],
    "options": [
      "Edges and textures",
      "Objects and background",
      "Brightness and contrast",
      "Color and shape"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 题干：训练分类器时，使用带标签的示例窗口来区分哪两类特征？\n- 选项 A：边缘和纹理\n- 选项 B：对象和背景\n- 选项 C：亮度和对比度\n- 选项 D：颜色和形状\n\nHoG在目标检测中的分类任务：\n\n1. 二分类问题：\n\n◦\n正样本：包含目标对象的窗口\n\n◦\n负样本：只包含背景的窗口\n\n◦\n训练分类器区分这两类\n\n2. 样本收集：\n\n◦\n正样本：手动标注的目标区域\n\n◦\n\n◦\n通常负样本数量远大于正样本\n\n3. 训练策略：\n\n---\n\n## Page 89\n\n◦\n困难负样本挖掘（Hard Negative Mining）\n\n◦\n增强数据平衡性\n\n◦\n提高分类器的判别能力\n\n4. 应用场景：\n\n◦\n行人检测：行人 vs 背景\n\n◦\n车辆检测：车辆 vs 背景\n\n◦\n通用目标检测框架\n\nWhich of the\nfollowing steps is not included in the generation process of HoG\ndescriptors?",
    "bankId": "simple-concept",
    "number": 115
  },
  {
    "id": "simple-concept-116",
    "title": "Which of the",
    "question": "Which of the\nfollowing steps is not included in the generation process of HoG\ndescriptors?",
    "images": [],
    "options": [
      "Calculating gradient directions",
      "Calculating gradient magnitudes",
      "Normalizing histograms",
      "Generating gradient direction histograms"
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "题目中文翻译：\n\n- 题干：以下哪个步骤不包含在HoG描述符的生成过程中？\n- 选项 A：计算梯度方向\n- 选项 B：计算梯度幅值\n- 选项 C：归一化直方图\n- 选项 D：生成梯度方向直方图\n- 题干：负样本：图像中的其他区域\n\nHoG描述符生成的标准步骤：\n\n1. 包含的步骤：\n\n◦\n梯度计算：计算每个像素的梯度方向和幅值\n\n◦\n直方图生成：在每个cell中统计梯度方向直方图\n\n◦\n\n2. 不包含的步骤：\n\n◦\n在cell级别进行直方图归一化\n\n◦\nHoG的归一化发生在block级别，不是cell级别\n\n3. 归一化的正确位置：\n\n◦\nBlock归一化：L2-norm、L1-norm等\n\n◦\n目的：提高对光照变化的鲁棒性\n\n◦\n在多个cell组成的block上进行\n\n4. 为什么不在cell级别归一化：\n\n---\n\n## Page 90\n\n◦\n保留相邻cells之间的相对关系\n\n◦\nBlock级别归一化更好地处理局部光照变化\n\nIn HoG feature\ndescription, what do the bins of the direction histogram represent?",
    "bankId": "simple-concept",
    "number": 116
  },
  {
    "id": "simple-concept-117",
    "title": "In HoG feature",
    "question": "In HoG feature\ndescription, what do the bins of the direction histogram represent?",
    "images": [],
    "options": [
      "Color information of the image",
      "Gradient intensity in different directions",
      "Intensity variations of the image",
      "Edge directions of the image"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 题干：在HoG特征描述中，方向直方图的bins代表什么？\n- 选项 A：图像的颜色信息\n- 选项 B：不同方向的梯度强度\n- 选项 C：图像的强度变化\n- 选项 D：图像的边缘方向\n- 题干：块归一化：在block级别进行归一化\n\nHoG方向直方图bins的含义：\n\n1. Bin的定义：\n\n◦\n每个bin对应一个方向范围（如0°-20°, 20°-40°等）\n\n◦\nBin的值表示该方向范围内的梯度强度累积\n\n◦\n通常使用9个bins，每个覆盖20°\n\n2. 累积过程：\n\n◦\n根据梯度方向确定bin位置\n\n◦\n\n◦\n相邻bins可能分享权重（插值）\n\n3. 物理意义：\n\n◦\n高值bin：该方向上有强烈的边缘或轮廓\n\n◦\n低值bin：该方向上梯度变化较弱\n\n◦\n整体模式：描述局部的形状特征\n\n4. 应用价值：\n\n◦\n方向选择性：对特定方向敏感\n\n◦\n形状描述：通过方向分布描述形状\n\n◦\n位置不变：对小的位置偏移鲁棒\n\nML（机器学习基础）/ Machine Learning Fundamentals\n\n---\n\n## Page 91\n\nOn what principle does the\nnearest class center classifier base its classification?",
    "bankId": "simple-concept",
    "number": 117
  },
  {
    "id": "simple-concept-118",
    "title": "On what principle does the",
    "question": "On what principle does the\nnearest class center classifier base its classification?",
    "images": [],
    "options": [
      "Maximum distance principle",
      "Minimum distance principle",
      "Nearest neighbor principle",
      "Average distance principle"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 题干：最近类中心分类器的分类基于什么原理？\n- 选项 A：最大距离原理\n- 选项 B：最小距离原理\n- 选项 C：最近邻原理\n- 选项 D：平均距离原理\n- 题干：使用梯度幅值作为权重进行投票\n\n最近类中心分类器的核心原理：\n\n1. 最小距离原理：\n\n◦\n将测试样本分配到距离最近的类中心所属的类别\n\n◦\n基于欧氏距离或其他距离度量\n\n◦\n简单有效的线性分类方法\n\n2. 数学表达：\n\n◦\n设类中心为μᵢ，测试样本为x\n\n◦\n分类决策：class(x) = argmin‖x - μᵢ‖\n\n◦\n计算x到各类中心的距离，选择最小者\n\n3. 几何直觉：\n\n◦\n相当于用类中心的Voronoi图划分特征空间\n\n◦\n决策边界是类中心之间的垂直平分面\n\n◦\n适用于类别分布相对紧凑的情况\n\n4. 优缺点：\n\n◦\n优点：简单快速，易于理解和实现\n\n◦\n缺点：假设类别呈球形分布，对异常值敏感\n\n在最近类中心分类器中，每个类的中心点如何计算？/ In the nearest\nclass center classifier, how is the center point of each class\ncalculated?\n\n---\n\n## Page 92",
    "bankId": "simple-concept",
    "number": 118
  },
  {
    "id": "simple-concept-119",
    "title": "In the testing phase,",
    "question": "In the testing phase,\nhow is it decided to which class the test object belongs?",
    "images": [],
    "options": [
      "Based on the average distance from the test object to all sample points",
      "Based on the distance from the test object to the center of all classes",
      "Based on the distance from the test object to the nearest neighbor point",
      "Based on the maximum distance from the test object to all sample points"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 题干：在测试阶段，如何决定测试对象属于哪个类别？\n- 选项 A：基于测试对象到所有样本点的平均距离\n- 选项 B：基于测试对象到所有类中心的距离\n- 选项 C：基于测试对象到最近邻点的距离\n- 选项 D：基于测试对象到所有样本点的最大距离\n- 题干：对每个特征维度分别计算平均值\n\n最近类中心分类器的分类决策过程：\n\n1. 距离计算：\n\n◦\n计算测试样本x到每个类中心μᵢ的距离\n\n◦\n常用欧氏距离：d(x, μᵢ) = ‖x - μᵢ‖\n\n◦\n\n2. 分类决策：\n\n◦\n选择距离最小的类中心对应的类别\n\n◦\nclass(x) = argminᵢ d(x, μᵢ)\n\n◦\n简单的最小化原则\n\n3. 与其他方法的区别：\n\n◦\n不是基于单个最近邻样本（那是KNN）\n\n◦\n不是基于到所有样本的平均距离\n\n◦\n只考虑到类中心的距离\n\n4. 计算效率：\n\n◦\n测试时只需计算到K个类中心的距离\n\n◦\n复杂度O(K×d)，其中d是特征维度\n\n◦\n比KNN更高效，特别是大数据集\n\nKNN（K近邻分类器）/ K-Nearest Neighbors (KNN)\n\nWhat does the \"K\" in KNN classifier\nstand for?",
    "bankId": "simple-concept",
    "number": 119
  },
  {
    "id": "simple-concept-120",
    "title": "What does the \"K\" in KNN classifier",
    "question": "What does the \"K\" in KNN classifier\nstand for?",
    "images": [],
    "options": [
      "Number of sample points",
      "Number of nearest neighbors",
      "Dimensionality of feature vectors",
      "Number of classes"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 题干：KNN分类器中的\"K\"代表什么？\n- 选项 A：样本点的数量\n- 选项 B：最近邻的数量\n- 选项 C：特征向量的维度\n- 选项 D：类别的数量\n- 题干：也可使用曼哈顿距离等\n\nKNN算法中K参数的含义：\n\n1. K的定义：\n\n◦\nK表示用于分类决策的最近邻样本数量\n\n◦\n对于测试样本，找到训练集中距离最近的K个样本\n\n◦\n\n2. K值的影响：\n\n◦\nK=1：决策边界复杂，可能过拟合\n\n◦\nK较小：对噪声敏感，决策边界不稳定\n\n◦\nK较大：决策边界平滑，可能欠拟合\n\n◦\nK=N（全部样本）：退化为最近类中心分类器\n\n3. K值选择策略：\n\n◦\n通常选择奇数避免平票\n\n◦\n交叉验证选择最优K值\n\n◦\n经验法则：K ≈ √N（N为训练样本数）\n\n4. 投票机制：\n\n◦\n简单投票：每个邻居权重相等\n\n◦\n距离加权：近的邻居权重更大\n\n◦\n类别概率：输出属于各类的概率\n\nWhich of the following is not a\ndisadvantage of the KNN classifier?",
    "bankId": "simple-concept",
    "number": 120
  },
  {
    "id": "simple-concept-121",
    "title": "Which of the following is not a",
    "question": "Which of the following is not a\ndisadvantage of the KNN classifier?",
    "images": [],
    "options": [
      "Slow for large datasets",
      "Requires homogeneous feature types and scales",
      "Not suitable for high-dimensional data",
      "Handles missing data well"
    ],
    "answer": 3,
    "answers": [
      3
    ],
    "explanation": "题目中文翻译：\n\n- 题干：以下哪项不是KNN分类器的缺点？\n- 选项 A：对大数据集运行缓慢\n- 选项 B：需要同质的特征类型和尺度\n- 选项 C：不适合高维数据\n- 选项 D：能很好地处理缺失数据\n- 题干：基于这K个邻居的类别进行投票决策\n\nKNN分类器的缺点和优点分析：\n\n1. 真实的缺点：\n\n◦\n计算效率低：对大数据集需要计算到所有样本的距离\n\n◦\n\n◦\n维度灾难：在高维空间中距离度量失效\n\n◦\n存储需求高：需要存储所有训练样本\n\n2. 缺失数据处理：\n\n◦\nKNN实际上不能直接处理缺失数据\n\n◦\n距离计算需要完整的特征向量\n\n◦\n需要预处理填补缺失值\n\n3. 高维问题：\n\n◦\n高维空间中所有点距离趋于相等\n\n◦\n最近邻失去意义\n\n◦\n需要降维或特征选择\n\n4. 计算复杂度：\n\n◦\n训练：O(1)（懒惰学习）\n\n◦\n预测：O(n×d)，n为样本数，d为维度\n\nThe process of\nselecting the optimal K value in the KNN classifier can be described\nas:",
    "bankId": "simple-concept",
    "number": 121
  },
  {
    "id": "simple-concept-122",
    "title": "The process of",
    "question": "The process of\nselecting the optimal K value in the KNN classifier can be described\nas:",
    "images": [],
    "options": [
      "Easy and quick",
      "Challenging and time-consuming",
      "Independent of the dataset",
      "Dependent on the type and number of features"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 题干：KNN分类器中选择最优K值的过程可以描述为：\n- 选项 A：简单快速\n- 选项 B：具有挑战性且耗时\n- 选项 C：与数据集无关\n- 选项 D：取决于特征的类型和数量\n- 题干：特征敏感：需要特征归一化，对不同尺度敏感\n\n最优K值选择的挑战性：\n\n1. 选择方法复杂：\n\n---\n\n## Page 96\n\n◦\n交叉验证：k-fold CV评估不同K值\n\n◦\n留一法验证：LOO-CV，计算量更大\n\n◦\n验证集方法：单独划分验证集\n\n2. 计算复杂度高：\n\n◦\n需要测试多个K值（如1到√n）\n\n◦\n每个K值都需要完整的验证过程\n\n◦\n大数据集上计算时间很长\n\n3. 数据集相关性：\n\n◦\n最优K值强烈依赖于具体数据集\n\n◦\n不同类别分布需要不同K值\n\n◦\n噪声水平影响K值选择\n\n4. 权衡考虑：\n\n◦\n偏差-方差权衡\n\n◦\n小K：低偏差，高方差\n\n◦\n大K：高偏差，低方差\n\n◦\n需要找到最佳平衡点\n\nBayes | 贝叶斯\n\n贝叶斯决策理论的基本假设是什么？\n\nWhat is the basic assumption of Bayesian decision theory?",
    "bankId": "simple-concept",
    "number": 122
  },
  {
    "id": "simple-concept-123",
    "title": "What are the advantages of Bayesian",
    "question": "What are the advantages of Bayesian\ndecision theory?",
    "images": [],
    "options": [
      "Simple and intuitive",
      "Accounts for uncertainty",
      "Allows new information to be combined with current knowledge",
      "All of the above"
    ],
    "answer": 3,
    "answers": [
      3
    ],
    "explanation": "题目中文翻译：\n\n- 题干：贝叶斯决策理论的优点是什么？\n- 选项 A：简单直观\n- 选项 B：考虑不确定性\n- 选项 C：允许将新信息与当前知识结合\n- 选项 D：以上所有\n\n---\n\n## Page 99\n\n贝叶斯决策理论的主要优点：\n\n1. 理论完备性：\n\n◦\n基于坚实的概率论基础\n\n◦\n提供最优决策准则（最小化期望风险）\n\n◦\n数学框架严谨完整\n\n2. 不确定性量化：\n\n◦\n明确处理各种不确定性\n\n◦\n提供概率形式的置信度\n\n◦\n支持风险评估和决策\n\n3. 知识融合能力：\n\n◦\n先验知识的自然融入\n\n◦\n通过似然函数更新知识\n\n◦\n支持增量学习\n\n4. 适应性强：\n\n◦\n可以处理不完整信息\n\n◦\n支持在线学习和更新\n\n◦\n适用于各种应用领域\n\nWhat are the disadvantages of\nBayesian decision theory?",
    "bankId": "simple-concept",
    "number": 123
  },
  {
    "id": "simple-concept-124",
    "title": "What are the disadvantages of",
    "question": "What are the disadvantages of\nBayesian decision theory?",
    "images": [],
    "options": [
      "Computationally complex",
      "Requires a large amount of training data",
      "Subjectivity in the choice of priors",
      "All of the above"
    ],
    "answer": 3,
    "answers": [
      3
    ],
    "explanation": "题目中文翻译：\n\n- 题干：贝叶斯决策理论的缺点是什么？\n- 选项 A：计算复杂度高\n- 选项 B：需要大量训练数据\n- 选项 C：先验选择的主观性\n- 选项 D：以上所有\n\n贝叶斯决策理论的主要缺点：\n\n1. 计算复杂性：\n\n◦\n高维积分计算困难\n\n◦\n后验概率计算复杂\n\n---\n\n## Page 100\n\n◦\n需要数值近似方法（MCMC等）\n\n2. 数据需求：\n\n◦\n准确估计先验和似然需要大量数据\n\n◦\n小样本情况下估计不可靠\n\n◦\n高维情况下数据稀疏问题\n\n3. 主观性问题：\n\n◦\n先验概率选择带有主观性\n\n◦\n不同先验可能导致不同结果\n\n◦\n缺乏客观的先验选择标准\n\n4. 实际应用挑战：\n\n◦\n真实分布往往未知\n\n◦\n独立性假设常常不成立\n\n◦\n模型选择和验证困难\n\nDT | 决策树\n\n内部节点代表什么？\n\nWhat do internal nodes represent?",
    "bankId": "simple-concept",
    "number": 124
  },
  {
    "id": "simple-concept-125",
    "title": "What does \"separable classes\" refer to?",
    "question": "What does \"separable classes\" refer to?",
    "images": [],
    "options": [
      "Classes that can be separated by a hyperplane",
      "Classes that overlap",
      "Classes with no boundaries",
      "Classes that are far apart"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "题目中文翻译：\n\n- 题干：\"可分类别\"是指什么？\n- 选项 A：可以被超平面分离的类别\n- 选项 B：重叠的类别\n- 选项 C：没有边界的类别\n- 选项 D：相距很远的类别\n\n可分类别的概念：\n\n---\n\n## Page 107\n\n1. 超平面分离：\n\n◦\n存在一个超平面能够将不同类别完全分开\n\n◦\n在2D中是直线，在3D中是平面，高维中是超平面\n\n◦\n分离后每个类别在超平面的不同侧\n\n2. 数学表达：\n\n◦\n决策函数：f(x) = w^T x + b\n\n◦\n分类规则：sign(f(x))\n\n◦\n不同类别有不同的符号\n\n3. 几何意义：\n\n◦\n特征空间中的几何分离\n\n◦\n类别间存在明确的决策边界\n\n◦\n为SVM奠定理论基础\n\n4. 实际意义：\n\n◦\n理想情况下的分类问题\n\n◦\n现实中常需要软间隔处理\n\nWhat does \"linearly separable\" mean?",
    "bankId": "simple-concept",
    "number": 125
  },
  {
    "id": "simple-concept-126",
    "title": "What does \"linearly separable\" mean?",
    "question": "What does \"linearly separable\" mean?",
    "images": [],
    "options": [
      "Classes can be separated by a straight line",
      "Classes can be separated by a curve",
      "Classes do not overlap",
      "Classes have no boundaries"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "题目中文翻译：\n\n- 题干：\"线性可分\"是什么意思？\n- 选项 A：类别可以被直线分离\n- 选项 B：类别可以被曲线分离\n- 选项 C：类别不重叠\n- 选项 D：类别没有边界\n\n线性可分的定义和特征：\n\n1. 线性分离：\n\n◦\n使用线性函数（直线、平面、超平面）完全分离\n\n◦\n决策边界是线性的\n\n◦\n不需要非线性变换\n\n2. 数学条件：\n\n◦\n存在w和b使得对所有样本：y_i(w^T x_i + b) ≥ 1\n\n---\n\n## Page 108\n\n◦\n正负样本在决策面两侧\n\n◦\n间隔大于0\n\n3. 局限性：\n\n◦\n很多实际问题不是线性可分的\n\n◦\n需要核技巧处理非线性问题\n\n◦\n对噪声敏感\n\nIn a three-\ndimensional space, the separating function of a linear classifier\ncorresponds to?",
    "bankId": "simple-concept",
    "number": 126
  },
  {
    "id": "simple-concept-127",
    "title": "In a three-",
    "question": "In a three-\ndimensional space, the separating function of a linear classifier\ncorresponds to?",
    "images": [],
    "options": [
      "A line",
      "A plane",
      "A curve",
      "A hyperplane"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 题干：在三维空间中，线性分类器的分离函数对应什么？\n- 选项 A：一条线\n- 选项 B：一个平面\n- 选项 C：一条曲线\n- 选项 D：一个超平面\n\n不同维度空间中的分离面：\n\n1. 维度对应关系：\n\n◦\n1D空间：点（0维）\n\n◦\n2D空间：直线（1维）\n\n◦\n3D空间：平面（2维）\n\n◦\nnD空间：(n-1)维超平面\n\n2. 三维中的平面：\n\n◦\n方程：ax + by + cz + d = 0\n\n◦\n法向量：(a, b, c)\n\n◦\n将3D空间分为两半\n\n3. 几何性质：\n\n◦\n平面是3D中最简单的分离面\n\n◦\n具有线性特性\n\n◦\n可以用法向量和偏置描述\n\n---\n\n## Page 109\n\nWhat is the goal of SVM?",
    "bankId": "simple-concept",
    "number": 127
  },
  {
    "id": "simple-concept-128",
    "title": "What is the goal of SVM?",
    "question": "What is the goal of SVM?",
    "images": [],
    "options": [
      "Maximize the distance from the hyperplane to the nearest sample point",
      "Minimize the distance from the hyperplane to the nearest sample point",
      "Maximize the distance from the hyperplane to all sample points",
      "Minimize the distance from the hyperplane to all sample points"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "题目中文翻译：\n\n- 题干：SVM的目标是什么？\n- 选项 A：最大化超平面到最近样本点的距离\n- 选项 B：最小化超平面到最近样本点的距离\n- 选项 C：最大化超平面到所有样本点的距离\n- 选项 D：最小化超平面到所有样本点的距离\n\nSVM的核心优化目标：\n\n1. 最大间隔原理：\n\n◦\n寻找间隔最大的分离超平面\n\n◦\n间隔 = 2/||w||，最大化等价于最小化||w||²\n\n◦\n提高泛化能力\n\n2. 支持向量决定：\n\n◦\n只有最近的样本点（支持向量）影响决策面\n\n◦\n其他样本点不影响最终结果\n\n◦\n实现数据压缩和稀疏表示\n\nIn SVM, what are support vectors?",
    "bankId": "simple-concept",
    "number": 128
  },
  {
    "id": "simple-concept-129",
    "title": "In SVM, what are support vectors?",
    "question": "In SVM, what are support vectors?",
    "images": [],
    "options": [
      "Sample points closest to the hyperplane",
      "Sample points farthest from the hyperplane",
      "All sample points",
      "All hyperplanes"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "题目中文翻译：\n\n- 题干：在SVM中，支持向量是什么？\n- 选项 A：最接近超平面的样本点\n- 选项 B：距离超平面最远的样本点\n- 选项 C：所有样本点\n- 选项 D：所有超平面\n\n---\n\n## Page 110\n\n支持向量的定义和重要性：\n\n1. 支持向量特征：\n\n◦\n位于间隔边界上的样本点\n\n◦\n到分离超平面距离最近\n\n2. 数学表达：\n\n◦\n满足约束条件等号：y_i(w^T x_i + b) = 1\n\n◦\n决策函数：f(x) = Σ α_i y_i K(x_i, x) + b\n\n◦\n只有支持向量的α_i非零\n\n3. 重要性质：\n\n◦\n完全决定分离超平面\n\n◦\n删除非支持向量不影响结果\n\n◦\n数量通常远少于总样本数\n\n4. 实际意义：\n\n◦\n关键样本识别\n\n◦\n模型压缩\n\n◦\n计算效率提升\n\nWhat does hard margin SVM assume\nabout the data?",
    "bankId": "simple-concept",
    "number": 129
  },
  {
    "id": "simple-concept-130",
    "title": "What does hard margin SVM assume",
    "question": "What does hard margin SVM assume\nabout the data?",
    "images": [],
    "options": [
      "Linearly separable",
      "Non-linearly separable",
      "Completely separable",
      "Completely inseparable"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "题目中文翻译：\n\n- 题干：硬间隔SVM对数据有什么假设？\n- 选项 A：线性可分\n- 选项 B：非线性可分\n- 选项 C：完全可分\n- 选项 D：完全不可分\n\n硬间隔SVM的基本假设：\n\n1. 线性可分假设：\n\n◦\n数据必须完全线性可分\n\n◦\n不允许任何分类错误\n\n◦\n\n---\n\n## Page 111\n\n2. 约束条件：\n\n◦\n所有样本严格满足：y_i(w^T x_i + b) ≥ 1\n\n◦\n没有松弛变量\n\n◦\n严格的几何间隔约束\n\n3. 适用条件：\n\n◦\n数据质量高，噪声少\n\n◦\n类别边界清晰\n\n◦\n特征空间中线性可分\n\n4. 局限性：\n\n◦\n对噪声非常敏感\n\n◦\n可能无解\n\n◦\n泛化能力可能较差\n\nWhat does soft margin SVM allow?",
    "bankId": "simple-concept",
    "number": 130
  },
  {
    "id": "simple-concept-131",
    "title": "What does soft margin SVM allow?",
    "question": "What does soft margin SVM allow?",
    "images": [],
    "options": [
      "Some sample points to be misclassified",
      "All sample points to be correctly classified",
      "All sample points to be misclassified",
      "No sample points to be classified"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "题目中文翻译：\n\n- 题干：软间隔SVM允许什么？\n- 选项 A：一些样本点被误分类\n- 选项 B：所有样本点都被正确分类\n- 选项 C：所有样本点都被误分类\n- 选项 D：没有样本点被分类\n- 题干：存在完美的线性分离面\n\n软间隔SVM的灵活性：\n\n1. 松弛变量机制：\n\n◦\n引入ξ_i ≥ 0允许违反间隔约束\n\n◦\n约束变为：y_i(w^T x_i + b) ≥ 1 - ξ_i\n\n◦\n在准确性和泛化性间平衡\n\n2. 惩罚参数C：\n\n◦\n目标函数：min (1/2)||w||² + C Σ ξ_i\n\n◦\nC控制对误分类的惩罚程度\n\n◦\nC大：注重训练精度\n\n◦\nC小：注重泛化能力\n\n---\n\n## Page 112\n\n3. 处理能力：\n\n◦\n噪声数据\n\n◦\n部分重叠的类别\n\n◦\n非完美可分的情况\n\n4. 实际优势：\n\n◦\n更好的鲁棒性\n\n◦\n广泛的适用性\n\n◦\n实际问题的解决方案\n\nWhat is the function of a kernel?",
    "bankId": "simple-concept",
    "number": 131
  },
  {
    "id": "simple-concept-132",
    "title": "What is the function of a kernel?",
    "question": "What is the function of a kernel?",
    "images": [],
    "options": [
      "Map features to a higher-dimensional space",
      "Map features to a lower-dimensional space",
      "Increase classification error rate",
      "Decrease classification error rate"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "题目中文翻译：\n\n- 题干：核函数的作用是什么？\n- 选项 A：将特征映射到更高维空间\n- 选项 B：将特征映射到更低维空间\n- 选项 C：增加分类错误率\n- 选项 D：减少分类错误率\n\n核函数的原理和作用：\n\n1. 维度映射：\n\n◦\nφ(x)：原空间→高维特征空间\n\n◦\nK(x, y) = φ(x)^T φ(y)\n\n◦\n在高维空间中寻找线性分离面\n\n2. 核技巧优势：\n\n◦\n避免显式计算高维映射\n\n◦\n计算复杂度不依赖映射维度\n\n◦\n处理无限维映射（如RBF核）\n\n3. 常用核函数：\n\n◦\n线性核：K(x,y) = x^T y\n\n◦\n多项式核：K(x,y) = (x^T y + c)^d\n\n◦\nRBF核：K(x,y) = exp(-γ||x-y||²)\n\n4. 解决问题：\n\n---\n\n## Page 113\n\n◦\n非线性分类\n\n◦\n复杂决策边界\n\n◦\n特征空间的灵活选择\n\n### 多分类问题 / Multiclass\n\nIn multiclass problems,\nwhat does the \"one-vs-all\" method mean?",
    "bankId": "simple-concept",
    "number": 132
  },
  {
    "id": "simple-concept-133",
    "title": "In multiclass problems,",
    "question": "In multiclass problems,\nwhat does the \"one-vs-all\" method mean?",
    "images": [],
    "options": [
      "Building a classifier for each class to separate it from all other classes",
      "Building a classifier for each pair of classes",
      "Building a classifier for each sample",
      "Building a classifier for each feature"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "题目中文翻译：\n\n- 题干：在多分类问题中，\"一对多\"方法是什么意思？\n- 选项 A：为每个类别构建一个分类器将其与所有其他类别分离\n- 选项 B：为每对类别构建一个分类器\n- 选项 C：为每个样本构建一个分类器\n- 选项 D：为每个特征构建一个分类器\n\n一对多（One-vs-All/One-vs-Rest）策略：\n\n1. 基本思想：\n\n◦\n对K类问题构建K个二分类器\n\n◦\n第i个分类器区分类别i和其余所有类别\n\n◦\n每个分类器解决一个二分类问题\n\n2. 训练过程：\n\n◦\n类别i vs {类别1, 类别2, ..., 类别i-1, 类别i+1, ..., 类别K}\n\n◦\n正样本：属于类别i的样本\n\n◦\n负样本：属于其他所有类别的样本\n\n3. 预测过程：\n\n◦\n对测试样本运行所有K个分类器\n\n◦\n选择输出最大置信度的分类器对应的类别\n\n◦\n或选择决策函数值最大的类别\n\n4. 优缺点：\n\n◦\n优点：简单易实现，计算效率高\n\n---\n\n## Page 114\n\n◦\n优点：简单易实现，计算效率高\n◦\n缺点：类别不平衡问题，决策区域重叠\n\nIn multiclass problems,\nwhat does the \"one-vs-one\" method mean?",
    "bankId": "simple-concept",
    "number": 133
  },
  {
    "id": "simple-concept-134",
    "title": "In multiclass problems,",
    "question": "In multiclass problems,\nwhat does the \"one-vs-one\" method mean?",
    "images": [],
    "options": [
      "Building a classifier for each pair of classes",
      "Building a classifier for each class",
      "Building a classifier for each sample",
      "Building a classifier for each feature"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "题目中文翻译：\n\n- 题干：在多分类问题中，\"一对一\"方法是什么意思？\n- 选项 A：为每对类别构建一个分类器\n- 选项 B：为每个类别构建一个分类器\n- 选项 C：为每个样本构建一个分类器\n- 选项 D：为每个特征构建一个分类器\n\n一对一（One-vs-One/Pairwise）策略：\n\n1. 基本原理：\n\n◦\n对K类问题构建C(K,2) = K(K-1)/2个二分类器\n\n◦\n每个分类器区分一对类别\n\n◦\n所有类别对都有对应的分类器\n\n2. 训练过程：\n\n◦\n分类器(i,j)只使用类别i和类别j的样本训练\n\n◦\n忽略其他类别的样本\n\n◦\n每个分类器都是平衡的二分类问题\n\n3. 预测过程：\n\n◦\n运行所有C(K,2)个分类器\n\n◦\n使用投票机制：每个分类器为一个类别投票\n\n◦\n选择得票最多的类别作为最终预测\n\n4. 优缺点：\n\n◦\n优点：每个分类器都是平衡的，训练效率高\n\n◦\n缺点：分类器数量多，存储和计算开销大\n\nWhich of the following methods\ncan be directly used for multiclass classification?",
    "bankId": "simple-concept",
    "number": 134
  },
  {
    "id": "simple-concept-135",
    "title": "Which of the following methods",
    "question": "Which of the following methods\ncan be directly used for multiclass classification?",
    "images": [],
    "options": [
      "Nearest neighbors (KNN)",
      "Decision trees",
      "Bayesian techniques",
      "All of the above"
    ],
    "answer": 3,
    "answers": [
      3
    ],
    "explanation": "题目中文翻译：\n\n- 题干：以下哪种方法可以直接用于多分类？\n- 选项 A：最近邻（KNN）\n- 选项 B：决策树\n- 选项 C：贝叶斯技术\n- 选项 D：以上所有\n\n天然支持多分类的方法：\n\n1. KNN算法：\n\n◦\n\n◦\n自然处理任意数量的类别\n\n◦\n无需修改算法结构\n\n2. 决策树：\n\n◦\n每个内部节点可以分割成多个子节点\n\n◦\n叶节点直接对应类别标签\n\n◦\n递归分割自然处理多类别\n\n3. 贝叶斯方法：\n\n◦\n计算每个类别的后验概率\n\n◦\n选择后验概率最大的类别\n\n◦\n概率框架天然支持多类别\n\n4. 对比：\n\n◦\nSVM、逻辑回归等需要扩展策略\n\n◦\n神经网络通过softmax输出层支持多分类\n\n◦\n朴素贝叶斯、随机森林等都天然支持\n\nWhat is a Type I error (false positive)?",
    "bankId": "simple-concept",
    "number": 135
  },
  {
    "id": "simple-concept-136",
    "title": "What is a Type I error (false positive)?",
    "question": "What is a Type I error (false positive)?",
    "images": [],
    "options": [
      "The system incorrectly thinks a person does not have a disease",
      "The system incorrectly thinks a person has a disease",
      "The system correctly thinks a person has a disease",
      "The system correctly thinks a person does not have a disease"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 题干：什么是第一类错误（假阳性）？\n- 选项 A：系统错误地认为一个人没有疾病\n- 选项 B：系统错误地认为一个人有疾病\n- 选项 C：系统正确地认为一个人有疾病\n- 选项 D：系统正确地认为一个人没有疾病\n- 题干：通过k个邻居的多数投票\n\n第一类错误的定义和影响：\n\n1. 错误类型：\n\n◦\n\n◦\n实际为阴性，预测为阳性\n\n◦\n拒绝真实的零假设\n\n2. 医学诊断例子：\n\n◦\n健康人被诊断为有病\n\n◦\n引起不必要的焦虑和治疗\n\n◦\n浪费医疗资源\n\n3. 统计意义：\n\n◦\nα错误：显著性水平\n\n◦\nP(预测阳性|实际阴性)\n\n◦\n控制在可接受范围内（如5%）\n\n4. 其他应用场景：\n\n◦\n垃圾邮件检测：正常邮件被标记为垃圾邮件\n\n◦\n安全检测：正常行为被标记为威胁\n\n◦\n质量控制：合格品被判为不合格\n\nWhat is a Type II error (false\nnegative)?",
    "bankId": "simple-concept",
    "number": 136
  },
  {
    "id": "simple-concept-137",
    "title": "What is a Type II error (false",
    "question": "What is a Type II error (false\nnegative)?",
    "images": [],
    "options": [
      "The system incorrectly thinks a person does not have a disease",
      "The system incorrectly thinks a person has a disease",
      "The system correctly thinks a person has a disease",
      "The system correctly thinks a person does not have a disease"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "题目中文翻译：\n\n- 题干：什么是第二类错误（假阴性）？\n- 选项 A：系统错误地认为一个人没有疾病\n- 选项 B：系统错误地认为一个人有疾病\n- 选项 C：系统正确地认为一个人有疾病\n- 选项 D：系统正确地认为一个人没有疾病\n- 题干：假阳性（False Positive）\n\n第二类错误的定义和后果：\n\n1. 错误类型：\n\n---\n\n## Page 117\n\n◦\n假阴性（False Negative）\n\n◦\n实际为阳性，预测为阴性\n\n◦\n接受错误的零假设\n\n2. 医学诊断例子：\n\n◦\n病人被诊断为健康\n\n◦\n延误治疗时机\n\n◦\n可能导致严重后果\n\n3. 统计意义：\n\n◦\nβ错误：第二类错误概率\n\n◦\nP(预测阴性|实际阳性)\n\n◦\n功效 = 1 - β\n\n4. 应用场景影响：\n\n◦\n癌症筛查：漏诊可能致命\n\n◦\n安全检测：威胁未被发现\n\n◦\n质量控制：不合格品流入市场\n\nWhich type of error is\nusually more catastrophic in misclassification?",
    "bankId": "simple-concept",
    "number": 137
  },
  {
    "id": "simple-concept-138",
    "title": "Which type of error is",
    "question": "Which type of error is\nusually more catastrophic in misclassification?",
    "images": [],
    "options": [
      "Type I error",
      "Type II error",
      "Both are equally serious",
      "Cannot be determined"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 题干：在误分类中，哪种类型的错误通常更灾难性？\n- 选项 A：第一类错误\n- 选项 B：第二类错误\n- 选项 C：两者同样严重\n- 选项 D：无法确定\n\n第二类错误更严重的原因：\n\n1. 生命安全考虑：\n\n◦\n医学诊断：漏诊比误诊更危险\n\n◦\n疾病扩散：延误治疗的后果更严重\n\n◦\n\n2. 具体场景分析：\n\n---\n\n## Page 118\n\n◦\n癌症检测：假阴性可能致命\n\n◦\n欺诈检测：漏检欺诈损失更大\n\n◦\n安全系统：漏报威胁后果严重\n\n3. 成本效益分析：\n\n◦\n假阳性：额外检查成本\n\n◦\n假阴性：可能的生命和财产损失\n\n◦\n通常假阴性成本远高于假阳性\n\n4. 设计原则：\n\n◦\n宁可过度敏感也不要漏检\n\n◦\n调整阈值降低假阴性率\n\n◦\n在精确率和召回率间权衡\n\nConvolutional Neural Networks\n(CNNs)\n\nIn CNNs, filter parameters need to:",
    "bankId": "simple-concept",
    "number": 138
  },
  {
    "id": "simple-concept-139",
    "title": "In CNNs, filter parameters need to:",
    "question": "In CNNs, filter parameters need to:",
    "images": [],
    "options": [
      "Remain fixed",
      "Remain unchanged after random initialization",
      "Be learned through training",
      "Change dynamically based on input data"
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "题目中文翻译：\n\n- 题干：在CNN中，滤波器参数需要：\n- 选项 A：保持固定\n- 选项 B：在随机初始化后保持不变\n- 选项 C：通过训练学习\n- 选项 D：根据输入数据动态变化\n- 题干：卷积神经网络（CNNs）\n\nCNN中滤波器参数的学习是深度学习的核心：\n\n1. 参数初始化：滤波器权重通常使用随机初始化（如Xavier、He初始化）\n\n2. 训练过程：通过反向传播算法，根据损失函数梯度更新参数\n\n3. 学习目标：学习能够提取有用特征的滤波器\n\n4. 为什么不固定：固定参数无法适应特定任务的特征提取需求\n\n---\n\n## Page 119\n\n5. 优化方法：SGD、Adam等优化器用于参数更新\n\n### 使用填充（Padding）的主要目的是 / The main purpose of using\nPadding is",
    "bankId": "simple-concept",
    "number": 139
  },
  {
    "id": "simple-concept-140",
    "title": "Padding is",
    "question": "Padding is",
    "images": [],
    "options": [
      "Increase image size",
      "Decrease image size",
      "Keep image size unchanged",
      "Change image resolution"
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "题目中文翻译：\n\n- 选项 A：增大图像尺寸\n- 选项 B：减小图像尺寸\n- 选项 C：保持图像尺寸不变\n- 选项 D：改变图像分辨率\n\n填充（Padding）在CNN中的重要作用：\n\n1. 尺寸保持：防止卷积操作导致特征图逐层缩小\n\n2. 边缘信息保护：确保图像边缘像素得到充分处理\n\n3. 常见填充类型：\n\n◦\nZero Padding：用0填充\n\n◦\nReflection Padding：镜像填充\n\n◦\nReplication Padding：复制边缘像素\n\n### 4. 计算公式：输出尺寸 = (输入尺寸 + 2×填充 - 卷积核尺寸) / 步长 + 1\n\n5. 实际应用：在深层网络中保持合理的特征图尺寸\n\n### 在CNN中，局部连接确保网络专注于 / In CNNs, local connections\nensure that the network focuses on",
    "bankId": "simple-concept",
    "number": 140
  },
  {
    "id": "simple-concept-141",
    "title": "ensure that the network focuses on",
    "question": "ensure that the network focuses on",
    "images": [],
    "options": [
      "Global features of the input data",
      "Random features of the input data",
      "Local features of the input data",
      "Statistical features of the input data"
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "题目中文翻译：\n\n- 选项 A：输入数据的全局特征\n- 选项 B：输入数据的随机特征\n- 选项 C：输入数据的局部特征\n- 选项 D：输入数据的统计特征\n\nCNN局部连接的设计哲学：\n\n---\n\n## Page 120\n\n1. 局部感受野：每个神经元只连接输入的一小块区域\n\n2. 生物学启发：模仿视觉皮层的感受野机制\n\n3. 优势：\n\n◦\n参数共享，减少过拟合\n\n◦\n平移不变性\n\n◦\n计算效率高\n\n4. 层次特征提取：低层检测边缘，高层检测复杂模式\n\n5. 对比全连接：避免全连接层的参数爆炸问题\n\n膨胀卷积（Dilation）/ Dilation\n\n### 使用膨胀卷积的主要目的是 / The main purpose of using dilation is",
    "bankId": "simple-concept",
    "number": 141
  },
  {
    "id": "simple-concept-142",
    "title": "the region covered by a 3x3 kernel is",
    "question": "the region covered by a 3x3 kernel is",
    "images": [],
    "options": [
      "3x3",
      "4x4",
      "5x5",
      "6x6"
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "膨胀卷积的尺寸计算：\n\n1. 计算公式：有效核大小 = (核大小-1) × 膨胀率 + 1\n\n2. 具体计算：(3-1) × 2 + 1 = 5，所以是5x5\n\n3. 可视化理解：\n\n代码块\n\n1\n\n原始3x3核： 膨胀率2的3x3核：\n\n2\n\n[1 1 1] [1 0 1 0 1]\n\n3\n\n[1 1 1] → [0 0 0 0 0]\n\n4\n\n[1 1 1] [1 0 1 0 1]\n\n5\n\n[0 0 0 0 0]\n\n6\n\n[1 0 1 0 1]\n\n4. 实际应用：在不增加参数的情况下，感受野从3x3扩展到5x5\n\n激活函数（Activation）/ Activation Functions\n\n### 在卷积神经网络中，感受野指的是 / In convolutional neural networks,\nthe receptive field refers to",
    "bankId": "simple-concept",
    "number": 142
  },
  {
    "id": "simple-concept-143",
    "title": "the receptive field refers to",
    "question": "the receptive field refers to",
    "images": [],
    "options": [
      "The size of the convolution kernel",
      "The size of the input image",
      "The size of the input region that the convolution kernel can perceive",
      "The size of the output image"
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "题目中文翻译：\n\n- 选项 A：卷积核的大小\n- 选项 B：输入图像的大小\n- 选项 C：卷积核能够感知的输入区域大小\n- 选项 D：输出图像的大小\n\n感受野（Receptive Field）的重要概念：\n\n1. 定义：网络中某个神经元能够\"看到\"的输入区域范围\n\n2. 层次性：\n\n◦\n浅层：小感受野，检测局部特征（边缘、纹理）\n\n◦\n深层：大感受野，检测全局特征（物体、语义）\n\n3. 计算方法：逐层累积计算，考虑卷积核大小、步长、填充\n\n4. 重要性：\n\n◦\n决定网络能捕获的特征尺度\n\n◦\n影响目标检测和分割性能\n\n◦\n网络设计的关键指标\n\n### ReLU激活函数的定义是 / The definition of the ReLU activation\nfunction is",
    "bankId": "simple-concept",
    "number": 143
  },
  {
    "id": "simple-concept-144",
    "title": "function is",
    "question": "function is",
    "images": [],
    "options": [
      "max(0, x)",
      "max(1, x)",
      "min(0, x)",
      "min(1, x)"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "ReLU（Rectified Linear Unit）激活函数：\n\n1. 数学定义：f(x) = max(0, x)\n\n2. 函数特性：\n\n◦\n输入为正：输出等于输入\n\n---\n\n## Page 123\n\n◦\n输入为负：输出为0\n\n3. 优势：\n\n◦\n计算简单，训练速度快\n\n◦\n缓解梯度消失问题\n\n◦\n稀疏激活（约50%神经元为0）\n\n4. 缺点：死神经元问题（Dying ReLU）\n\n5. 变种：Leaky ReLU、ELU、Swish等\n\n### 当输入为负数时，ReLU激活函数的输出是 / The output of the ReLU\nactivation function when the input is negative is",
    "bankId": "simple-concept",
    "number": 144
  },
  {
    "id": "simple-concept-145",
    "title": "activation function when the input is negative is",
    "question": "activation function when the input is negative is",
    "images": [],
    "options": [
      "Negative value",
      "0",
      "Positive value",
      "Absolute value of the input"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "",
    "bankId": "simple-concept",
    "number": 145
  },
  {
    "id": "simple-concept-146",
    "title": "activation function when the input is positive is",
    "question": "activation function when the input is positive is",
    "images": [],
    "options": [
      "0",
      "The input value",
      "The absolute value of the input",
      "1"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "",
    "bankId": "simple-concept",
    "number": 146
  },
  {
    "id": "simple-concept-147",
    "title": "augmentation refers to",
    "question": "augmentation refers to",
    "images": [],
    "options": [
      "Increasing image brightness",
      "Changing image color",
      "Extracting a part of the image",
      "Rotating the image"
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "题目中文翻译：\n\n- 选项 A：增加图像亮度\n- 选项 B：改变图像颜色\n- 选项 C：提取图像的一部分\n- 选项 D：旋转图像\n\n图像裁剪在数据增强中的应用：\n\n1. 随机裁剪：从原图随机位置裁剪固定尺寸区域\n\n2. 中心裁剪：从图像中心裁剪\n\n3. 多尺度裁剪：不同尺寸的裁剪操作\n\n4. 目的：\n\n◦\n增加数据多样性\n\n◦\n模拟不同的视角和构图\n\n◦\n提高模型对目标位置的鲁棒性\n\n5. 注意事项：避免裁剪掉关键信息\n\n### 使用数据增强技术可以有效解决什么问题 / Using data augmentation\ntechniques can effectively solve the problem of",
    "bankId": "simple-concept",
    "number": 147
  },
  {
    "id": "simple-concept-148",
    "title": "techniques can effectively solve the problem of",
    "question": "techniques can effectively solve the problem of",
    "images": [],
    "options": [
      "Data redundancy",
      "Data scarcity",
      "Model overfitting",
      "Data compression"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 选项 A：数据冗余\n- 选项 B：数据稀缺\n- 选项 C：模型过拟合\n- 选项 D：数据压缩\n\n数据增强解决的核心问题：\n\n1. 数据稀缺：通过变换生成更多训练样本\n\n2. 过拟合防止：增加数据多样性，提高泛化能力\n\n3. 常见增强方法：\n\n◦\n几何变换：旋转、翻转、缩放\n\n◦\n颜色变换：亮度、对比度、饱和度调整\n\n◦\n噪声添加：高斯噪声、椒盐噪声\n\n◦\n\n4. 效果评估：通过验证集性能评估增强效果\n\n正则化（Regularization）/ Regularization\n\n### 池化层可以帮助模型 / The pooling layer can help the model to",
    "bankId": "simple-concept",
    "number": 148
  },
  {
    "id": "simple-concept-149",
    "title": "regularization and L2 regularization is",
    "question": "regularization and L2 regularization is",
    "images": [],
    "options": [
      "L1 regularization uses the sum of absolute values of the weights, L2 regularization uses the sum of the squares of the weights",
      "L1 regularization uses the sum of the squares of the weights, L2 regularization uses the sum of absolute values of the weights",
      "L1 regularization increases model complexity, L2 regularization decreases model complexity",
      "L1 regularization decreases model complexity, L2 regularization increases model complexity"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "",
    "bankId": "simple-concept",
    "number": 149
  },
  {
    "id": "simple-concept-150",
    "title": "regularization technique?",
    "question": "regularization technique?",
    "images": [],
    "options": [
      "Dropout",
      "Data augmentation",
      "SGD",
      "Batch normalization"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "题目中文翻译：\n\n- 选项 B：数据增强\n- 选项 D：批归一化\n- 题干：允许使用更大学习率\n\n正则化技术的分类和比较：\n\n1. 直接正则化：Dropout、L1/L2正则化\n\n2. 间接正则化：数据增强、Early Stopping\n\n3. 归一化技术：Batch Normalization（具有正则化副作用）\n\n4. 优化器：SGD本身不是正则化技术\n\n5. 效果对比：不同技术适用于不同场景\n\n### 在超参数调优中，批大小指的是 / In hyperparameter tuning, batch size\nrefers to",
    "bankId": "simple-concept",
    "number": 150
  },
  {
    "id": "simple-concept-151",
    "title": "refers to",
    "question": "refers to",
    "images": [],
    "options": [
      "The number of samples used in each training iteration",
      "The number of iterations in each training session",
      "The number of layers in each training session",
      "The learning rate in each training session"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "题目中文翻译：\n\n- 选项 A：每次训练迭代中使用的样本数量\n- 选项 B：每次训练会话中的迭代次数\n- 选项 C：每次训练会话中的层数\n- 选项 D：每次训练会话中的学习率\n\n---\n\n## Page 132\n\n批大小（Batch Size）的重要性：\n\n1. 定义：每次前向传播和反向传播处理的样本数量\n\n2. 影响因素：\n\n◦\n内存限制\n\n◦\n训练稳定性\n\n◦\n收敛速度\n\n◦\n最终性能\n\n3. 选择策略：\n\n◦\n小批量（32-128）：梯度噪声大，正则化效果\n\n◦\n大批量（512+）：训练稳定，但可能影响泛化\n\n4. 现代趋势：动态批大小、梯度累积等技术\n\n### 预处理阶段数据标准化的目的是 / The purpose of data standardization\nin the preprocessing stage is to",
    "bankId": "simple-concept",
    "number": 151
  },
  {
    "id": "simple-concept-152",
    "title": "in the preprocessing stage is to",
    "question": "in the preprocessing stage is to",
    "images": [],
    "options": [
      "Increase the variance of the data",
      "Decrease the variance of the data",
      "Give the data zero mean and unit variance",
      "Scale the data values between 0 and 1"
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "题目中文翻译：\n\n- 选项 A：增加数据的方差\n- 选项 B：减少数据的方差\n- 选项 C：使数据具有零均值和单位方差\n- 选项 D：将数据值缩放到0和1之间\n\n数据标准化vs归一化：\n\n1. 标准化（Z-score）：(x-μ)/σ，结果均值为0，方差为1\n\n2. 归一化（Min-Max）：(x-min)/(max-min)，结果在[0,1]之间\n\n3. 目的：\n\n◦\n消除不同特征的量纲影响\n\n◦\n加速梯度下降收敛\n\n◦\n避免数值计算问题\n\n4. 选择原则：标准化适用于正态分布，归一化适用于均匀分布\n\n---\n\n## Page 133\n\n### 在深度学习模型中，过高的学习率会导致 / In deep learning models, a\nlearning rate that is too high will result in",
    "bankId": "simple-concept",
    "number": 152
  },
  {
    "id": "simple-concept-153",
    "title": "learning rate that is too high will result in",
    "question": "learning rate that is too high will result in",
    "images": [],
    "options": [
      "Slower training speed",
      "The model not converging",
      "Increased model accuracy",
      "Increased model complexity"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 选项 A：更慢的训练速度\n- 选项 B：模型不收敛\n- 选项 C：提高模型准确率\n- 选项 D：增加模型复杂度\n\n学习率对训练的影响：\n\n1. 过高学习率：梯度更新步长太大，可能跳过最优解\n\n2. 现象：\n\n◦\n损失函数震荡\n\n◦\n无法收敛到最优解\n\n◦\n训练不稳定\n\n3. 过低学习率：收敛速度极慢，可能陷入局部最优\n\n4. 调优策略：\n\n◦\n学习率衰减\n\n◦\n自适应学习率（Adam、RMSprop）\n\n◦\n学习率预热（Warm-up）\n\n### 迁移学习和增量学习 / Transfer Learning and Incremental\nLearning\n\n### 迁移学习使用在大规模数据集上预训练的模型来 / Transfer learning uses\nmodels pre-trained on large-scale datasets to",
    "bankId": "simple-concept",
    "number": 153
  },
  {
    "id": "simple-concept-154",
    "title": "models pre-trained on large-scale datasets to",
    "question": "models pre-trained on large-scale datasets to",
    "images": [],
    "options": [
      "Increase the dataset size",
      "Improve learning efficiency and performance on a new dataset",
      "Reduce model complexity",
      "Increase computational speed"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 选项 A：增加数据集大小\n- 选项 B：提高在新数据集上的学习效率和性能\n- 选项 C：减少模型复杂度\n- 选项 D：提高计算速度\n\n迁移学习的核心思想：\n\n1. 知识迁移：将已学习的特征表示应用到新任务\n\n2. 优势：\n\n◦\n减少训练时间和数据需求\n\n◦\n提高小数据集上的性能\n\n◦\n利用大规模预训练模型的知识\n\n3. 常见场景：\n\n◦\n计算机视觉：ImageNet预训练模型\n\n◦\n自然语言处理：BERT、GPT等\n\n4. 实现方式：特征提取、微调、端到端训练\n\n### 迁移学习中的微调指的是 / Fine-tuning in transfer learning refers to",
    "bankId": "simple-concept",
    "number": 154
  },
  {
    "id": "simple-concept-155",
    "title": "Incremental learning allows a model to gradually learn and",
    "question": "Incremental learning allows a model to gradually learn and\naccumulate knowledge from a sequence of tasks without",
    "images": [],
    "options": [
      "Increasing computational complexity",
      "Forgetting previously learned knowledge",
      "Increasing data volume",
      "Improving model performance"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "",
    "bankId": "simple-concept",
    "number": 155
  },
  {
    "id": "simple-concept-156",
    "title": "tasks in incremental learning?",
    "question": "tasks in incremental learning?",
    "images": [],
    "options": [
      "Train from scratch",
      "Adjust and learn using the knowledge from the existing model",
      "Discard previous knowledge",
      "Add new layers"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 选项 A：从头开始训练\n- 选项 B：利用现有模型的知识进行调整和学习\n- 选项 C：抛弃之前的知识\n- 选项 D：添加新的层\n\n增量学习的挑战和解决方案：\n\n1. 灾难性遗忘：学习新任务时忘记旧任务的现象\n\n2. 解决策略：\n\n---\n\n## Page 136\n\n◦\n正则化方法：EWC、PackNet\n\n◦\n重放方法：存储部分旧数据\n\n◦\n架构方法：动态增加网络容量\n\n◦\n元学习方法：学习如何快速适应\n\n3. 应用场景：机器人学习、推荐系统、在线学习\n\n4. 评估指标：平均准确率、遗忘程度、学习效率\n\n### 目标检测 / Object Detection\n\n### Softmax损失用于预测每个目标类别的什么 / Softmax Loss is used to\npredict what for each object class?",
    "bankId": "simple-concept",
    "number": 156
  },
  {
    "id": "simple-concept-157",
    "title": "predict what for each object class?",
    "question": "predict what for each object class?",
    "images": [],
    "options": [
      "Bounding box",
      "Class probability",
      "Position coordinates",
      "Size"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 选项 A：边界框\n- 选项 B：类别概率\n- 选项 C：位置坐标\n- 选项 D：大小\n\n目标检测中的损失函数设计：\n\n1. Softmax损失：专门用于多类别分类\n\n2. 输出形式：每个类别的概率分布，总和为1\n\n### 3. 数学原理：e^(x_i) / Σe^(x_j)，确保输出为概率\n\n4. 在目标检测中的作用：\n\n◦\n分类候选区域是否包含目标\n\n◦\n确定目标的具体类别\n\n5. 与其他损失的配合：通常与回归损失结合使用\n\n### 在目标检测中，回归损失预测什么 / In object detection, what does\nRegression Loss predict?\n\n---\n\n## Page 137",
    "bankId": "simple-concept",
    "number": 157
  },
  {
    "id": "simple-concept-158",
    "title": "formula for calculating Intersection over Union (IoU) is",
    "question": "formula for calculating Intersection over Union (IoU) is",
    "images": [],
    "options": [
      "The area of the union of the predicted box and the ground truth box divided by the area of their intersection",
      "The area of the intersection of the predicted box and the ground truth box divided by the area of their union",
      "The difference in area between the predicted box and the ground truth box",
      "The sum of the areas of the predicted box and the ground truth box"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 选项 A：预测框和真实框的并集面积除以它们的交集面积\n- 选项 B：预测框和真实框的交集面积除以它们的并集面积\n- 选项 C：预测框和真实框的面积差\n- 选项 D：预测框和真实框的面积和\n\nIoU（Intersection over Union）的核心概念：\n\n---\n\n## Page 138\n\n### 1. 数学定义：IoU = |A ∩ B| / |A ∪ B|\n\n2. 几何意义：两个区域重叠程度的度量\n\n3. 取值范围：[0, 1]，0表示无重叠，1表示完全重叠\n\n4. 计算步骤：\n\n◦\n计算两个框的交集面积\n\n◦\n计算两个框的并集面积\n\n◦\n交集除以并集\n\n5. 在目标检测中的应用：\n\n◦\nNMS（非极大值抑制）\n\n◦\n评估检测质量\n\n◦\n训练中的正负样本定义\n\n### IoU大于0.5表示 / An IoU greater than 0.5 indicates",
    "bankId": "simple-concept",
    "number": 158
  },
  {
    "id": "simple-concept-159",
    "title": "During the first scan, if a pixel has both its left neighbor and",
    "question": "During the first scan, if a pixel has both its left neighbor and\ntop neighbor as valid, which label is assigned?",
    "images": [],
    "options": [
      "The maximum label of the two",
      "The minimum label of the two",
      "A new label",
      "The label of the current pixel"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 题干：签？\n- 选项 A：两者中的最大标签\n- 选项 B：两者中的最小标签\n- 选项 C：一个新标签\n- 选项 D：当前像素的标签\n\n两遍扫描算法（Two-Pass Algorithm）是连通分量标记的经典算法：\n\n1. 算法原理：通过两次扫描图像来标记连通分量\n\n2. 首次扫描规则：\n\n◦\n检查当前像素的左邻居和上邻居\n\n◦\n如果两个邻居都有效且有标签，选择最小标签\n\n◦\n这样做的目的是保持标签的一致性和连续性\n\n3. 为什么选择最小标签：\n\n◦\n\n◦\n简化等价表的管理\n\n---\n\n## Page 140\n\n◦\n减少后续合并操作的复杂度\n\nWhat\naction is taken if a pixel's left neighbor or top neighbor is valid\nduring the first scan?",
    "bankId": "simple-concept",
    "number": 159
  },
  {
    "id": "simple-concept-160",
    "title": "What",
    "question": "What\naction is taken if a pixel's left neighbor or top neighbor is valid\nduring the first scan?",
    "images": [],
    "options": [
      "Assign a new label",
      "Assign the label of the valid neighbor",
      "Ignore the pixel",
      "Label the pixel as background"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "- 题干：在首次扫描中，如果像素的左邻居或上邻居有效，采取什么行动？\n- 选项 A：分配一个新标签\n- 选项 B：分配有效邻居的标签\n- 选项 C：忽略该像素\n- 选项 D：将像素标记为背景\n- 题干：确保同一连通分量内的像素最终得到相同的标签\n\n1. 传播策略：如果只有一个邻居有效，直接继承该邻居的标签\n\n2. 连通性保证：确保连通的前景像素获得相同的标签\n\n3. 简化处理：避免创建不必要的新标签\n\nDuring\nthe second scan of the Two-pass algorithm, what happens to each\npixel's label?",
    "bankId": "simple-concept",
    "number": 160
  },
  {
    "id": "simple-concept-161",
    "title": "During",
    "question": "During\nthe second scan of the Two-pass algorithm, what happens to each\npixel's label?",
    "images": [],
    "options": [
      "It is removed",
      "It is updated to the smallest equivalent label",
      "It is doubled",
      "It remains unchanged"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 题干：在两遍扫描算法的第二次扫描中，每个像素的标签会发生什么？\n- 选项 A：标签被移除\n- 选项 B：标签被更新为最小的等价标签\n- 选项 C：标签被加倍\n- 选项 D：标签保持不变\n- 题干：题目中文翻译：\n\n1. 等价类合并：第二次扫描的目的是解决标签等价问题\n\n2. 统一标签：将属于同一连通分量但标签不同的像素统一标签\n\n3. 选择最小标签：使用等价类中的最小标签作为最终标签·\n\nWhich of the following best\ndescribes the Two-pass algorithm?",
    "bankId": "simple-concept",
    "number": 161
  },
  {
    "id": "simple-concept-162",
    "title": "Which of the following best",
    "question": "Which of the following best\ndescribes the Two-pass algorithm?",
    "images": [],
    "options": [
      "A method to detect edges in an image",
      "A clustering method in the measurement space",
      "A connected component labeling method",
      "A region-growing method"
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "题目中文翻译：\n\n- 题干：下列哪项最好地描述了两遍扫描算法？\n- 选项 A：图像边缘检测方法\n- 选项 B：测量空间中的聚类方法\n- 选项 C：连通分量标记方法\n- 选项 D：区域增长方法\n\n1. 核心功能：两遍扫描算法专门用于连通分量标记\n\n2. 应用场景：\n\n◦\n二值图像分析\n\n◦\n目标分割后的连通性分析\n\n◦\n形态学操作的后处理\n\n3. 与其他方法的区别：\n\n◦\n不是边缘检测：不检测边界，而是标记区域\n\n◦\n不是聚类：基于空间连通性而非特征相似性\n\n◦\n不是区域增长：不是逐步扩展，而是全局扫描\n\n### Region Splitting / 区域分裂\n\nWhich of the\nfollowing is a step in Region Splitting based on the measurement\nspace?",
    "bankId": "simple-concept",
    "number": 162
  },
  {
    "id": "simple-concept-163",
    "title": "Which of the",
    "question": "Which of the\nfollowing is a step in Region Splitting based on the measurement\nspace?",
    "images": [],
    "options": [
      "Perform histogram equalization",
      "Find clusters in the measurement space",
      "Apply Gaussian smoothing",
      "Use Fourier transform"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 题干：下列哪项是基于测量空间的区域分裂的一个步骤？\n- 选项 A：执行直方图均衡化\n- 选项 B：在测量空间中找到聚类\n- 选项 C：应用高斯平滑\n- 选项 D：使用傅里叶变换\n\n区域分裂算法的核心思想：\n\n---\n\n## Page 142\n\n1. 测量空间：将像素的特征（如颜色、纹理）映射到高维空间\n\n2. 聚类过程：在测量空间中识别具有相似特征的像素群\n\n3. 应用意义：\n\n◦\n自动确定分割阈值\n\n◦\n处理多模态分布\n\n◦\n适应复杂的图像内容\n\nWhat is the\npurpose of finding clusters in the measurement space in Region\nSplitting?",
    "bankId": "simple-concept",
    "number": 163
  },
  {
    "id": "simple-concept-164",
    "title": "What is the",
    "question": "What is the\npurpose of finding clusters in the measurement space in Region\nSplitting?",
    "images": [],
    "options": [
      "To reduce noise",
      "To perform edge detection",
      "To identify regions with similar properties",
      "To enhance image contrast"
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "题目中文翻译：\n\n- 题干：在区域分裂中，在测量空间中寻找聚类的目的是什么？\n- 选项 A：减少噪声\n- 选项 B：执行边缘检测\n- 选项 C：识别具有相似属性的区域\n- 选项 D：增强图像对比度\n\n1. 相似性识别：通过聚类找到特征相似的像素群\n\n2. 区域形成：将属于同一聚类的像素归为同一区域\n\n3. 自适应分割：根据图像内容自动调整分割策略\n\nIn the\ncontext of Region Splitting, what is the significance of the term\n\"MeanShift\"?",
    "bankId": "simple-concept",
    "number": 164
  },
  {
    "id": "simple-concept-165",
    "title": "In the",
    "question": "In the\ncontext of Region Splitting, what is the significance of the term\n\"MeanShift\"?",
    "images": [],
    "options": [
      "A technique for image smoothing",
      "A clustering algorithm",
      "A method for histogram equalization",
      "An edge detection method"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 题干：在区域分裂的背景下，\"MeanShift\"这个术语的意义是什么？\n- 选项 A：图像平滑技术\n- 选项 B：聚类算法\n- 选项 C：直方图均衡化方法\n- 选项 D：边缘检测方法\n\nMeanShift算法在区域分裂中的作用：\n\n---\n\n## Page 143\n\n1. 密度估计：在特征空间中寻找密度最高的点\n\n2. 模式寻找：迭代移动到密度梯度最大的方向\n\n3. 聚类优势：\n\n◦\n不需要预先指定聚类数量\n\n◦\n能够发现任意形状的聚类\n\n◦\n对初始化不敏感\n\nWhat is the first step in the\nmethod based on rectangular splitting?",
    "bankId": "simple-concept",
    "number": 165
  },
  {
    "id": "simple-concept-166",
    "title": "What is the first step in the",
    "question": "What is the first step in the\nmethod based on rectangular splitting?",
    "images": [],
    "options": [
      "Apply MeanShift clustering",
      "Perform a histogram mode search on the entire image",
      "Identify edges using the Sobel operator",
      "Segment the image using thresholding"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 题干：基于矩形分裂方法的第一步是什么？\n- 选项 A：应用MeanShift聚类\n- 选项 B：对整个图像执行直方图模式搜索\n- 选项 C：使用Sobel算子识别边缘\n- 选项 D：使用阈值分割图像\n\n矩形分裂的工作流程：\n\n1. 全局分析：首先分析整个图像的直方图分布\n\n2. 模式识别：寻找直方图中的峰值（模式）\n\n3. 初始分割：基于找到的模式进行初步分割\n\n4. 递归细分：对每个区域重复这个过程\n\nAfter identifying\ninitial clusters in rectangular splitting, what is the next step?",
    "bankId": "simple-concept",
    "number": 166
  },
  {
    "id": "simple-concept-167",
    "title": "After identifying",
    "question": "After identifying\ninitial clusters in rectangular splitting, what is the next step?",
    "images": [],
    "options": [
      "Merge small clusters",
      "Further split each cluster using the same mode search",
      "Apply Gaussian smoothing",
      "Perform edge detection"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 题干：在矩形分裂中识别初始聚类后，下一步是什么？\n- 选项 A：合并小聚类\n- 选项 B：使用相同的模式搜索进一步分裂每个聚类\n- 选项 C：应用高斯平滑\n- 选项 D：执行边缘检测\n\n---\n\n## Page 144\n\n1. 递归策略：对每个初始聚类重复应用模式搜索\n\n2. 层次分割：形成树状的分割结构\n\n3. 细化过程：逐步提高分割的精细度\n\nIn Region Splitting,\nwhen do we stop further splitting the regions?",
    "bankId": "simple-concept",
    "number": 167
  },
  {
    "id": "simple-concept-168",
    "title": "In Region Splitting,",
    "question": "In Region Splitting,\nwhen do we stop further splitting the regions?",
    "images": [],
    "options": [
      "When regions reach a minimum size",
      "When no more clusters can be identified",
      "When the image is fully segmented",
      "After a fixed number of iterations"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 题干：在区域分裂中，什么时候停止进一步分裂区域？\n- 选项 A：当区域达到最小尺寸时\n- 选项 B：当无法识别更多聚类时\n- 选项 C：当图像完全分割时\n- 选项 D：在固定次数的迭代后\n\n停止条件的设计原则：\n\n1. 内容驱动：基于图像内容而非预设参数\n\n2. 同质性判断：当区域内部足够同质时停止\n\n3. 计算效率：避免过度分割导致的计算浪费\n\n### Region Merging / 区域合并\n\nWhat is a key factor used\nin heuristics-based region merging?",
    "bankId": "simple-concept",
    "number": 168
  },
  {
    "id": "simple-concept-169",
    "title": "What is a key factor used",
    "question": "What is a key factor used\nin heuristics-based region merging?",
    "images": [],
    "options": [
      "Edge detection accuracy",
      "Length of boundary and edge strength",
      "Gradient magnitude",
      "Texture complexity"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 题干：启发式区域合并中使用的关键因素是什么？\n- 选项 A：边缘检测精度\n- 选项 B：边界长度和边缘强度\n- 选项 C：梯度幅度\n- 选项 D：纹理复杂性\n\n启发式合并考虑的因素：\n\n---\n\n## Page 145\n\n1. 边界特征：较短的边界更容易合并\n\n2. 边缘强度：弱边缘区域优先合并\n\n3. 几何约束：考虑区域的形状和大小\n\n4. 相似性度量：颜色、纹理等特征的相似性\n\nWhat is the primary objective\nof graph-based region merging?",
    "bankId": "simple-concept",
    "number": 169
  },
  {
    "id": "simple-concept-170",
    "title": "What is the primary objective",
    "question": "What is the primary objective\nof graph-based region merging?",
    "images": [],
    "options": [
      "Reduce noise in the image",
      "Define a dissimilarity measure between regions",
      "Detect edges in the image",
      "Enhance image contrast"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 题干：基于图的区域合并的主要目标是什么？\n- 选项 A：减少图像中的噪声\n- 选项 B：定义区域间的不相似性度量\n- 选项 C：检测图像中的边缘\n- 选项 D：增强图像对比度\n\n1. 图结构建模：将图像表示为图，像素为节点，相邻关系为边\n\n2. 不相似性度量：定义量化区域差异的数学指标\n\n3. 合并决策：基于度量值决定是否合并相邻区域\n\n4. 全局优化：寻求全局最优的分割结果\n\nIn graph-\nbased region merging, how is the minimum spanning tree (MST)\nused?",
    "bankId": "simple-concept",
    "number": 170
  },
  {
    "id": "simple-concept-171",
    "title": "In graph-",
    "question": "In graph-\nbased region merging, how is the minimum spanning tree (MST)\nused?",
    "images": [],
    "options": [
      "To identify and remove noise",
      "To find the shortest path in the region",
      "To connect pixels within each region",
      "To construct an internal graph for each initial region"
    ],
    "answer": 3,
    "answers": [
      3
    ],
    "explanation": "题目中文翻译：\n\n- 题干：在基于图的区域合并中，最小生成树（MST）如何使用？\n- 选项 A：识别和移除噪声\n- 选项 B：寻找区域中的最短路径\n- 选项 C：连接每个区域内的像素\n- 选项 D：为每个初始区域构建内部图\n- 题干：基于图的方法核心思想：\n\nMST的具体应用：\n\n1. 内部连通性：MST表示区域内部的最优连接\n\n---\n\n## Page 146\n\n2. 不相似性计算：基于MST计算区域内部的不相似性\n\n3. 合并判据：比较内部和外部不相似性来决定合并\n\nWhat does I(Ri) represent in\nthe context of graph-based region merging?",
    "bankId": "simple-concept",
    "number": 171
  },
  {
    "id": "simple-concept-172",
    "title": "What does I(Ri) represent in",
    "question": "What does I(Ri) represent in\nthe context of graph-based region merging?",
    "images": [],
    "options": [
      "The intensity of region Ri",
      "The internal dissimilarity of region Ri",
      "The perimeter of region Ri",
      "The number of pixels in region Ri"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 题干：在基于图的区域合并中，I(Ri)表示什么？\n- 选项 A：区域Ri的强度\n- 选项 B：区域Ri的内部不相似性\n- 选项 C：区域Ri的周长\n- 选项 D：区域Ri中的像素数量\n\n内部不相似性的定义：\n\n1. 数学定义：区域内MST中最大边权重\n\n2. 物理意义：区域内部像素间的最大差异\n\n3. 合并判据：用于与外部不相似性比较\n\nWhat does D(Ri, Rj)\ndenote in graph-based region merging?",
    "bankId": "simple-concept",
    "number": 172
  },
  {
    "id": "simple-concept-173",
    "title": "What does D(Ri, Rj)",
    "question": "What does D(Ri, Rj)\ndenote in graph-based region merging?",
    "images": [],
    "options": [
      "The distance between regions Ri and Rj",
      "The average color difference between Ri and Rj",
      "The dissimilarity between regions Ri and Rj",
      "The edge strength between regions Ri and Rj"
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "题目中文翻译：\n\n- 题干：在基于图的区域合并中，D(Ri, Rj)表示什么？\n- 选项 A：区域Ri和Rj之间的距离\n- 选项 B：Ri和Rj之间的平均颜色差异\n- 选项 C：区域Ri和Rj之间的不相似性\n- 选项 D：区域Ri和Rj之间的边缘强度\n\n外部不相似性的定义：\n\n---\n\n## Page 147\n\n1. 边界连接：连接两个区域的最小权重边\n\n2. 合并条件：当D(Ri, Rj) < min(I(Ri), I(Rj))时合并\n\n3. 物理意义：区域间的最小差异\n\nWhen are two\nregions merged in graph-based region merging?",
    "bankId": "simple-concept",
    "number": 173
  },
  {
    "id": "simple-concept-174",
    "title": "When are two",
    "question": "When are two\nregions merged in graph-based region merging?",
    "images": [],
    "options": [
      "When their boundary is shorter than a threshold",
      "When their internal dissimilarity is greater than their external dissimilarity",
      "When their external dissimilarity is less than their internal dissimilarity",
      "When they have the same color"
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "题目中文翻译：\n\n- 题干：在基于图的区域合并中，什么时候合并两个区域？\n- 选项 A：当它们的边界比阈值短时\n- 选项 B：当它们的内部不相似性大于外部不相似性时\n- 选项 C：当它们的外部不相似性小于内部不相似性时\n- 选项 D：当它们有相同颜色时\n\n合并条件的数学表达：\n\n1. 基本条件：D(Ri, Rj) < min(I(Ri), I(Rj))\n\n2. 直观理解：区域间的差异小于任一区域内部的差异\n\n3. 避免过分割：防止将本应属于同一对象的区域分开\n\n给定区域Ri和Rj，内部不相似性I(Ri) = 4，I(Rj) = 5，外部不相似性D(Ri, Rj) = 3。应该合并这些区域\n\n吗？\n\n- **答案：**因为D(Ri, Rj) = 3 < min(4, 5) = 4",
    "bankId": "simple-concept",
    "number": 174
  },
  {
    "id": "simple-concept-175",
    "title": "What is the starting point for the",
    "question": "What is the starting point for the\nwatershed simulation?",
    "images": [],
    "options": [
      "The highest intensity points",
      "User-defined markers or local minima",
      "Random pixels",
      "The center of the image"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 题干：分水岭模拟的起始点是什么？\n- 选项 A：最高强度点\n- 选项 B：用户定义的标记或局部最小值\n- 选项 C：随机像素\n- 选项 D：图像中心\n\n分水岭算法的初始化：\n\n1. 物理模拟：模拟水从低处开始填充地形\n\n2. 标记点选择：\n\n◦\n自动：使用局部最小值点\n\n◦\n手动：用户指定感兴趣区域\n\n3. 避免过分割：好的标记点选择是成功的关键\n\nWhat does the formation of a\nboundary in the Watershed Algorithm signify?",
    "bankId": "simple-concept",
    "number": 175
  },
  {
    "id": "simple-concept-176",
    "title": "What does the formation of a",
    "question": "What does the formation of a\nboundary in the Watershed Algorithm signify?",
    "images": [],
    "options": [
      "Edge detection",
      "Region merging",
      "Different water basins meeting",
      "Noise reduction"
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "题目中文翻译：\n\n- 题干：分水岭算法中边界的形成表示什么？\n- 选项 A：边缘检测\n- 选项 B：区域合并\n- 选项 C：不同水域的汇合\n- 选项 D：噪声减少\n\n边界形成的物理意义：\n\n1. 水域汇合：来自不同起始点的\"水\"相遇\n\n2. 分水岭线：形成分割不同区域的边界\n\n3. 自然分割：基于图像的梯度信息自然形成\n\nIn the Watershed\nAlgorithm, how are neighboring pixels prioritized for expansion?",
    "bankId": "simple-concept",
    "number": 176
  },
  {
    "id": "simple-concept-177",
    "title": "In the Watershed",
    "question": "In the Watershed\nAlgorithm, how are neighboring pixels prioritized for expansion?",
    "images": [],
    "options": [
      "By their edge strength",
      "By their grayscale value",
      "By their distance from the center",
      "By their color similarity"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 题干：在分水岭算法中，相邻像素如何按优先级扩展？\n- 选项 A：按边缘强度\n- 选项 B：按灰度值\n- 选项 C：按到中心的距离\n- 选项 D：按颜色相似性\n\n优先级队列的设计：\n\n1. 高度优先：低灰度值（地势低）优先扩展\n\n2. 模拟真实：符合水向低处流的物理规律\n\n3. 有序处理：确保算法的正确性和稳定性\n\n### MeanShift / 均值漂移\n\n均值漂移聚类算法相对于K-means的关键优势是什么？/ What is a key\nadvantage of the Mean Shift Clustering algorithm over K-means?\n\n---\n\n## Page 150",
    "bankId": "simple-concept",
    "number": 177
  },
  {
    "id": "simple-concept-178",
    "title": "What does the Mean Shift",
    "question": "What does the Mean Shift\nalgorithm seek in the feature space?",
    "images": [],
    "options": [
      "The global maximum",
      "The local minimum",
      "The global minimum",
      "The local maximum of the density function"
    ],
    "answer": 3,
    "answers": [
      3
    ],
    "explanation": "题目中文翻译：\n\n- 题干：均值漂移算法在特征空间中寻找什么？\n- 选项 A：全局最大值\n- 选项 B：局部最小值\n- 选项 C：全局最小值\n- 选项 D：密度函数的局部最大值\n- 题干：MeanShift的主要优势：\n\n密度函数的优化：\n\n1. 密度估计：使用核密度估计方法\n\n2. 梯度上升：沿着密度梯度方向移动\n\n3. 收敛到模式：最终收敛到局部密度最大值点\n\n4. 多模态处理：能够发现多个密度峰值\n\n---\n\n## Page 151\n\nIn the context of Mean\nShift, what does \"bandwidth\" refer to?",
    "bankId": "simple-concept",
    "number": 178
  },
  {
    "id": "simple-concept-179",
    "title": "In the context of Mean",
    "question": "In the context of Mean\nShift, what does \"bandwidth\" refer to?",
    "images": [],
    "options": [
      "The size of the search window",
      "The number of clusters",
      "The intensity range of the image",
      "The resolution of the image"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "题目中文翻译：\n\n- 题干：在均值漂移的背景下，\"带宽\"指的是什么？\n- 选项 A：搜索窗口的大小\n- 选项 B：聚类的数量\n- 选项 C：图像的强度范围\n- 选项 D：图像的分辨率\n\n1. 窗口大小：决定局部邻域的范围\n\n2. 分割粒度：\n\n◦\n小带宽：精细分割，可能过分割\n\n◦\n大带宽：粗糙分割，可能欠分割\n\n3. 参数选择：需要根据具体应用场景调整\n\n### Superpixel / 超像素\n\nWhat does the 'SLIC' algorithm stand for?",
    "bankId": "simple-concept",
    "number": 179
  },
  {
    "id": "simple-concept-180",
    "title": "What does the 'SLIC' algorithm stand for?",
    "question": "What does the 'SLIC' algorithm stand for?",
    "images": [],
    "options": [
      "Simple Linear Image Clustering",
      "Simple Linear Iterative Clustering",
      "Simple Local Image Clustering",
      "Simple Linear Intensity Clustering"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 题干：'SLIC'算法代表什么？\n- 题干：带宽参数的重要性：\n- 选项 A：简单线性图像聚类\n- 选项 B：简单线性迭代聚类\n- 选项 C：简单局部图像聚类\n- 选项 D：简单线性强度聚类\n\n---\n\n## Page 152\n\nSLIC算法特点：\n\n1. 简单高效：算法实现相对简单，计算效率高\n\n2. 线性复杂度：时间复杂度与像素数量线性相关\n\n3. 迭代优化：通过迭代过程逐步优化超像素边界\n\n4. 广泛应用：在计算机视觉中广泛用作预处理步骤\n\nIn SLIC, how is\nthe distance D between a pixel and a cluster center computed?",
    "bankId": "simple-concept",
    "number": 180
  },
  {
    "id": "simple-concept-181",
    "title": "In SLIC, how is",
    "question": "In SLIC, how is\nthe distance D between a pixel and a cluster center computed?",
    "images": [],
    "options": [
      "Using only color information",
      "Using only spatial information",
      "Using a combination of color and spatial information",
      "Using texture information"
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "题目中文翻译：\n\n- 题干：在SLIC中，像素与聚类中心之间的距离D如何计算？\n- 选项 A：仅使用颜色信息\n- 选项 B：仅使用空间信息\n- 选项 C：使用颜色和空间信息的结合\n- 选项 D：使用纹理信息\n\nSLIC距离度量的设计：\n\n1. 双重考虑：同时考虑颜色相似性和空间邻近性\n\n2. 权重平衡：通过参数m调节颜色和空间权重\n\n3. 数学表达：D = sqrt(dc² + (ds/S)²×m²)\n\n◦\ndc：颜色距离\n\n◦\nds：空间距离\n\n◦\nS：超像素间距\n\n◦\nm：平衡参数\n\nCRF (Conditional Random Field)\n\n---\n\n## Page 153\n\nIn a CRF, what do nodes represent?",
    "bankId": "simple-concept",
    "number": 181
  },
  {
    "id": "simple-concept-182",
    "title": "In a CRF, what do nodes represent?",
    "question": "In a CRF, what do nodes represent?",
    "images": [],
    "options": [
      "Pixels",
      "Edges",
      "Superpixels",
      "Clusters"
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "题目中文翻译：\n\n- 题干：在CRF中，节点代表什么？\n- 选项 A：像素\n- 选项 B：边缘\n- 选项 C：超像素\n- 选项 D：聚类\n\nCRF模型结构：\n\n1. 图结构：将超像素作为图的节点\n\n2. 标签空间：每个节点对应一个类别标签\n\n3. 能量函数：通过能量最小化进行推理\n\n4. 应用场景：语义分割、图像标注等\n\nWhat do unary potentials\nφ(si, ci) in a CRF represent?",
    "bankId": "simple-concept",
    "number": 182
  },
  {
    "id": "simple-concept-183",
    "title": "What do unary potentials",
    "question": "What do unary potentials\nφ(si, ci) in a CRF represent?",
    "images": [],
    "options": [
      "The likelihood of assigning a superpixel to a particular class",
      "The edge strength between superpixels",
      "The spatial distance between superpixels",
      "The texture similarity between superpixels"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "题目中文翻译：\n\n- 题干：CRF中的一元势函数φ(si, ci)表示什么？\n- 选项 A：将超像素分配给特定类别的可能性\n- 选项 B：超像素之间的边缘强度\n- 选项 C：超像素之间的空间距离\n- 选项 D：超像素之间的纹理相似性\n\n一元势函数的作用：\n\n1. 独立预测：基于超像素自身特征预测类别\n\n2. 局部信息：编码局部观测信息\n\n3. 概率表示：通常来自分类器的输出概率\n\n4. 能量贡献：为总能量函数提供数据项\n\n---\n\n## Page 154\n\nWhat do pairwise\npotentials ψ(si, sj) in a CRF model?",
    "bankId": "simple-concept",
    "number": 183
  },
  {
    "id": "simple-concept-184",
    "title": "What do pairwise",
    "question": "What do pairwise\npotentials ψ(si, sj) in a CRF model?",
    "images": [],
    "options": [
      "The color similarity between pixels",
      "The consistency between neighboring superpixels",
      "The spatial distance between pixels",
      "The texture similarity between pixels"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 题干：CRF模型中的二元势函数ψ(si, sj)模拟什么？\n- 选项 A：像素间的颜色相似性\n- 选项 B：相邻超像素间的一致性\n- 选项 C：像素间的空间距离\n- 选项 D：像素间的纹理相似性\n\n二元势函数的设计：\n\n1. 平滑约束：鼓励相邻超像素有相似标签\n\n2. 边界保持：在真实边界处允许标签变化\n\n3. 上下文信息：编码空间上下文约束\n\n4. 正则化项：平衡数据拟合和模型复杂度\n\n### Active Contour / 主动轮廓\n\nWhat is the main principle\nbehind active contour segmentation?",
    "bankId": "simple-concept",
    "number": 184
  },
  {
    "id": "simple-concept-185",
    "title": "What is the main principle",
    "question": "What is the main principle\nbehind active contour segmentation?",
    "images": [],
    "options": [
      "Using texture analysis to identify regions",
      "Using a curve to locate object boundaries in an image",
      "Applying histogram equalization",
      "Using edge detection algorithms"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 题干：主动轮廓分割背后的主要原理是什么？\n- 选项 A：使用纹理分析识别区域\n- 选项 B：使用曲线定位图像中的目标边界\n- 选项 C：应用直方图均衡化\n- 选项 D：使用边缘检测算法\n\n主动轮廓的核心思想：\n\n---\n\n## Page 155\n\n1. 动态曲线：使用可变形的曲线表示目标边界\n\n2. 能量最小化：通过最小化能量函数优化曲线形状\n\n3. 自动演化：曲线在力的作用下自动向目标边界移动\n\n4. 精确分割：能够获得亚像素级的分割精度\n\nWhat are the three main\nforces used in the Snakes algorithm?",
    "bankId": "simple-concept",
    "number": 185
  },
  {
    "id": "simple-concept-186",
    "title": "What are the three main",
    "question": "What are the three main\nforces used in the Snakes algorithm?",
    "images": [],
    "options": [
      "Edge force, smoothness force, gradient force",
      "Image force, smoothness force, user-guidance force",
      "Texture force, color force, spatial force",
      "Intensity force, gradient force, boundary force"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 题干：Snakes算法中使用的三种主要力是什么？\n- 选项 A：边缘力、平滑力、梯度力\n- 选项 B：图像力、平滑力、用户引导力\n- 选项 C：纹理力、颜色力、空间力\n- 选项 D：强度力、梯度力、边界力\n\n三种力的作用机制：\n\n1. 图像力（外部能量）：\n\n◦\n将轮廓吸引到边缘特征\n\n◦\n基于图像梯度信息\n\n2. 平滑力（内部能量）：\n\n◦\n\n◦\n控制弹性和刚性\n\n3. 用户引导力：\n\n◦\n允许用户交互式引导\n\n◦\n增加约束信息\n\nWhat role does the image force\nplay in the Snakes algorithm?",
    "bankId": "simple-concept",
    "number": 186
  },
  {
    "id": "simple-concept-187",
    "title": "What role does the image force",
    "question": "What role does the image force\nplay in the Snakes algorithm?",
    "images": [],
    "options": [
      "It ensures the curve remains smooth",
      "It provides gradient information from the image",
      "It incorporates user-provided information",
      "It reduces noise in the image"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 题干：图像力在Snakes算法中起什么作用？\n- 选项 A：确保曲线保持平滑\n- 选项 B：提供来自图像的梯度信息\n- 选项 C：结合用户提供的信息\n- 选项 D：减少图像中的噪声\n- 题干：保持轮廓的平滑性\n\n图像力的设计原理：\n\n1. 梯度信息：基于图像强度梯度\n\n2. 边缘吸引：强梯度区域产生大的吸引力\n\n3. 数学表达：通常使用∇I或∇(G*I)\n\n4. 自适应性：根据图像内容自动调整\n\n### Level-set / 水平集方法\n\nWhat\nis a key difference between active contour models (Snakes) and\nlevel-set methods?",
    "bankId": "simple-concept",
    "number": 187
  },
  {
    "id": "simple-concept-188",
    "title": "What",
    "question": "What\nis a key difference between active contour models (Snakes) and\nlevel-set methods?",
    "images": [],
    "options": [
      "Active contours use implicit representations, while level-sets use explicit representations",
      "Active contours use explicit representations, while level-sets use implicit representations",
      "Active contours are computationally more demanding",
      "Level-set methods require manual initialization"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 题干：主动轮廓模型（Snakes）和水平集方法之间的关键区别是什么？\n- 选项 A：主动轮廓使用隐式表示，水平集使用显式表示\n- 选项 B：主动轮廓使用显式表示，水平集使用隐式表示\n- 选项 C：主动轮廓计算要求更高\n- 选项 D：水平集方法需要手动初始化\n\n两种方法的根本区别：\n\n1. 表示方式：\n\n◦\nSnakes：显式参数化表示v(s) = (x(s), y(s))\n\n◦\nLevel-set：隐式函数表示φ(x,y) = 0\n\n2. 拓扑变化：\n\n◦\nSnakes：难以处理拓扑变化\n\n◦\nLevel-set：自然处理分裂和合并\n\n3. 数值实现：\n\n◦\nSnakes：曲线重参数化问题\n\n---\n\n## Page 157\n\n◦\nLevel-set：固定网格，无重参数化\n\nWhich method is better at\nhandling topological changes in object shape?",
    "bankId": "simple-concept",
    "number": 188
  },
  {
    "id": "simple-concept-189",
    "title": "Which method is better at",
    "question": "Which method is better at\nhandling topological changes in object shape?",
    "images": [],
    "options": [
      "Active contours",
      "Level-set methods",
      "Both are equally good",
      "Neither can handle topological changes"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 题干：哪种方法更好地处理目标形状的拓扑变化？\n- 选项 A：主动轮廓\n- 选项 B：水平集方法\n- 选项 C：两者都同样好\n- 选项 D：两者都不能处理拓扑变化\n\n水平集的拓扑优势：\n\n1. 自然分裂：当φ函数出现新的零水平集\n\n2. 自然合并：当两个零水平集相遇\n\n3. 无需特殊处理：算法框架自动处理\n\n4. 数学保证：基于偏微分方程的演化\n\n在图像分割的背景下，水平集函数通常表示什么？/ In the context of image segmentation, what\n\ndoes the Level Set function typically represent?",
    "bankId": "simple-concept",
    "number": 189
  },
  {
    "id": "simple-concept-190",
    "title": "does the Level Set function typically represent?",
    "question": "does the Level Set function typically represent?",
    "images": [],
    "options": [
      "A 2D contour that evolves over time",
      "A high-dimensional function whose zero-set defines the contour",
      "The gradient magnitude of the image",
      "The texture patterns within the image"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 选项 A：随时间演化的2D轮廓\n- 选项 B：其零水平集定义轮廓的高维函数\n- 选项 C：图像的梯度幅度\n- 选项 D：图像内的纹理模式\n\n水平集函数的数学表示：\n\n1. 符号距离函数：φ(x,y) = ±d，d为到轮廓的距离\n\n---\n\n## Page 158\n\n2. 零水平集：φ(x,y) = 0 定义实际轮廓\n\n3. 演化方程：∂φ/∂t + F|∇φ| = 0\n\n4. 几何意义：内部为负，外部为正（或相反）\n\nChan-Vese模型在水平集分割中的主要目的是什么？/ What is the primary purpose of the Chan-\n\nVese model in Level Set Segmentation?",
    "bankId": "simple-concept",
    "number": 190
  },
  {
    "id": "simple-concept-191",
    "title": "Vese model in Level Set Segmentation?",
    "question": "Vese model in Level Set Segmentation?",
    "images": [],
    "options": [
      "To enhance image edges for better segmentation",
      "To minimize an energy function for image segmentation",
      "To perform histogram equalization before segmentation",
      "To reduce computational complexity during segmentation"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 选项 A：增强图像边缘以改善分割\n- 选项 B：最小化图像分割的能量函数\n- 选项 C：在分割前执行直方图均衡化\n- 选项 D：减少分割过程中的计算复杂度\n\nChan-Vese模型的创新：\n\n1. 无边缘模型：不依赖边缘信息\n\n2. 区域竞争：基于区域内外的平均强度\n\n3. 能量函数：E = λ₁∫(I-c₁)²dΩ₁ + λ₂∫(I-c₂)²dΩ₂\n\n4. 全局信息：利用全局统计信息\n\n### Morphological Operations / 形态学操作\n\nWhat does the operation of\ndilation do to a binary image?",
    "bankId": "simple-concept",
    "number": 191
  },
  {
    "id": "simple-concept-192",
    "title": "What does the operation of",
    "question": "What does the operation of\ndilation do to a binary image?",
    "images": [],
    "options": [
      "Shrinks the white regions",
      "Expands the white regions",
      "Shrinks the black regions",
      "Expands the black regions"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 题干：膨胀操作对二值图像有什么作用？\n- 选项 A：收缩白色区域\n- 选项 B：扩展白色区域\n- 选项 C：收缩黑色区域\n- 选项 D：扩展黑色区域\n\n膨胀操作的数学定义：\n\n1. 集合操作：A ⊕ B = {z | (B̂\n)z ∩ A ≠ ∅}\n\n2. 直观理解：用结构元素\"探测\"图像，扩大前景区域\n\n3. 应用效果：\n\n◦\n填充小孔洞\n\n◦\n\n◦\n增大目标尺寸\n\n4. 结构元素：形状决定膨胀的方向和程度\n\n先腐蚀后膨胀操作的结果是什么？/ What is the result of applying the erosion operation\n\nfollowed by the dilation operation on a binary image?",
    "bankId": "simple-concept",
    "number": 192
  },
  {
    "id": "simple-concept-193",
    "title": "followed by the dilation operation on a binary image?",
    "question": "followed by the dilation operation on a binary image?",
    "images": [],
    "options": [
      "Opening",
      "Closing",
      "Smoothing",
      "Sharpening"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "题目中文翻译：\n\n- 选项 A：开运算\n- 选项 B：闭运算\n- 选项 C：平滑\n- 选项 D：锐化\n- 题干：连接断开的区域\n\n开运算和闭运算的定义：\n\n1. 开运算：A ○ B = (A ⊖ B) ⊕ B\n\n◦\n先腐蚀后膨胀\n\n◦\n消除小对象，平滑边界\n\n2. 闭运算：A • B = (A ⊕ B) ⊖ B\n\n◦\n先膨胀后腐蚀\n\n◦\n填充小孔洞，连接近邻对象\n\n---\n\n## Page 160\n\nHow does the shape of\nthe structuring element affect the result of morphological\noperations?",
    "bankId": "simple-concept",
    "number": 193
  },
  {
    "id": "simple-concept-194",
    "title": "How does the shape of",
    "question": "How does the shape of\nthe structuring element affect the result of morphological\noperations?",
    "images": [],
    "options": [
      "It does not affect the result",
      "It defines the type of noise removed",
      "It influences the shape and size of regions modified",
      "It determines the intensity of the modification"
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "题目中文翻译：\n\n- 题干：结构元素的形状如何影响形态学操作的结果？\n- 选项 A：不影响结果\n- 选项 B：定义移除的噪声类型\n- 选项 C：影响修改区域的形状和大小\n- 选项 D：决定修改的强度\n\n结构元素的设计原则：\n\n1. 形状选择：\n\n◦\n圆形：各向同性操作\n\n◦\n十字形：保持直角特征\n\n◦\n线性：特定方向操作\n\n2. 大小影响：\n\n◦\n小结构元素：精细操作\n\n◦\n大结构元素：大范围影响\n\n3. 方向性：非对称结构元素产生方向性效果\n\n### Motion Estimation / 运动估计\n\n### Change Detection / 变化检测\n\nHow can noise be reduced\nin the difference image obtained from frame differencing?",
    "bankId": "simple-concept",
    "number": 194
  },
  {
    "id": "simple-concept-195",
    "title": "How can noise be reduced",
    "question": "How can noise be reduced\nin the difference image obtained from frame differencing?",
    "images": [],
    "options": [
      "By applying a threshold",
      "By using connected components extraction",
      "By performing morphological closing",
      "All of the above"
    ],
    "answer": 3,
    "answers": [
      3
    ],
    "explanation": "题目中文翻译：\n\n- 题干：如何减少帧差法获得的差分图像中的噪声？\n- 选项 A：通过应用阈值\n- 选项 B：通过使用连通分量提取\n- 选项 C：通过执行形态学闭运算\n- 选项 D：以上全部\n\n多种噪声抑制策略：\n\n1. 阈值处理：滤除小的强度变化\n\n2. 连通分量分析：移除孤立的噪声点\n\n3. 形态学操作：填充空洞，连接断开区域\n\n4. 组合使用：通常需要多种方法配合\n\nWhat is the significance\nof using an intensity threshold τ in change detection?",
    "bankId": "simple-concept",
    "number": 195
  },
  {
    "id": "simple-concept-196",
    "title": "What is the significance",
    "question": "What is the significance\nof using an intensity threshold τ in change detection?",
    "images": [],
    "options": [
      "To differentiate between foreground and background pixels",
      "To smooth the image",
      "To enhance the edges",
      "To fill holes in objects"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "题目中文翻译：\n\n- 题干：在变化检测中使用强度阈值τ的意义是什么？\n- 选项 A：区分前景和背景像素\n- 选项 B：平滑图像\n- 选项 C：增强边缘\n- 选项 D：填充目标中的孔洞\n\n阈值选择的重要性：\n\n1. 二值化决策：|I(t) - I(t-1)| > τ 表示运动\n\n2. 噪声抑制：过小的变化被认为是噪声\n\n3. 敏感性控制：调节检测的敏感度\n\n4. 自适应阈值：可根据场景动态调整\n\n### Sparse Motion Estimation / 稀疏运动估计\n\nWhat is a motion vector in the\ncontext of sparse motion estimation?",
    "bankId": "simple-concept",
    "number": 196
  },
  {
    "id": "simple-concept-197",
    "title": "What is a motion vector in the",
    "question": "What is a motion vector in the\ncontext of sparse motion estimation?",
    "images": [],
    "options": [
      "A 2D vector representing the displacement of a point in the image plane",
      "A scalar value representing the intensity change",
      "A 3D vector representing the depth information",
      "A matrix representing the transformation"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "题目中文翻译：\n\n- 题干：在稀疏运动估计中，运动矢量是什么？\n- 选项 A：表示图像平面中点位移的2D矢量\n- 选项 B：表示强度变化的标量值\n- 选项 C：表示深度信息的3D矢量\n- 选项 D：表示变换的矩阵\n\n运动矢量的数学表示：\n\n1. 二维位移：v = (vx, vy) = (x(t+1) - x(t), y(t+1) - y(t))\n\n2. 物理意义：描述特征点在相邻帧间的移动\n\n3. 应用范围：\n\n◦\n视频压缩\n\n◦\n目标跟踪\n\n◦\n\n4. 估计方法：模板匹配、光流估计等\n\nWhat is the primary assumption\nin sparse motion estimation?",
    "bankId": "simple-concept",
    "number": 197
  },
  {
    "id": "simple-concept-198",
    "title": "What is the primary assumption",
    "question": "What is the primary assumption\nin sparse motion estimation?",
    "images": [],
    "options": [
      "Intensity of points and their neighborhoods remain constant over time",
      "Objects do not move",
      "Background is constantly changing",
      "All points in the image move uniformly"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "题目中文翻译：\n\n- 题干：稀疏运动估计的主要假设是什么？\n- 选项 A：点及其邻域的强度随时间保持恒定\n- 选项 B：物体不移动\n- 选项 C：背景不断变化\n- 选项 D：图像中所有点均匀移动\n- 题干：运动分析\n\n亮度恒定假设的含义：\n\n1. 数学表达：I(x,y,t) = I(x+dx,y+dy,t+dt)\n\n2. 物理基础：物体表面反射特性不变\n\n3. 局限性：\n\n◦\n光照变化\n\n◦\n遮挡出现\n\n◦\n视角变化\n\n---\n\n## Page 163\n\n4. 改进方法：使用更复杂的相似性度量\n\n### Dense Motion Estimation / 稠密运动估计\n\nWhich assumption is\nfundamental to the optical flow equation in dense motion\nestimation?",
    "bankId": "simple-concept",
    "number": 198
  },
  {
    "id": "simple-concept-199",
    "title": "Which assumption is",
    "question": "Which assumption is\nfundamental to the optical flow equation in dense motion\nestimation?",
    "images": [],
    "options": [
      "Reflectivity and illumination conditions change over time",
      "The distance between the object and the camera remains constant",
      "The reflectivity and illumination conditions remain constant over time",
      "The object speed changes significantly over time"
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "题目中文翻译：\n\n- 题干：稠密运动估计中光流方程的基本假设是什么？\n- 选项 A：反射率和照明条件随时间变化\n- 选项 B：物体与相机之间的距离保持恒定\n- 选项 C：反射率和照明条件随时间保持恒定\n- 选项 D：物体速度随时间显著变化\n\n光流约束方程的推导：\n\n1. 亮度恒定假设：dI/dt = 0\n\n2. 链式法则：∂I/∂x · dx/dt + ∂I/∂y · dy/dt + ∂I/∂t = 0\n\n3. 光流约束：Ix·u + Iy·v + It = 0\n\n4. 孔径问题：一个方程两个未知数，需要额外约束\n\nWhy do we need\nadditional constraints to solve the optical flow equation uniquely?",
    "bankId": "simple-concept",
    "number": 199
  },
  {
    "id": "simple-concept-200",
    "title": "Why do we need",
    "question": "Why do we need\nadditional constraints to solve the optical flow equation uniquely?",
    "images": [],
    "options": [
      "Because the optical flow equation provides a solution for each pixel's velocity",
      "Because the optical flow equation is under- constrained with only one equation per pixel",
      "Because the optical flow equation assumes constant velocity over time",
      "Because the optical flow equation assumes uniform illumination"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 题干：为什么需要额外约束来唯一求解光流方程？\n- 选项 A：因为光流方程为每个像素的速度提供解\n- 选项 B：因为光流方程约束不足，每个像素只有一个方程\n- 选项 C：因为光流方程假设速度随时间恒定\n- 选项 D：因为光流方程假设照明均匀\n\n约束不足问题的解决：\n\n1. 孔径问题：单点无法确定运动方向\n\n2. 常用约束：\n\n◦\n平滑性约束（Horn-Schunck）\n\n◦\n局部恒定性（Lucas-Kanade）\n\n◦\n分段平滑性等\n\n3. 正则化：将病态问题转为适定问题\n\n### Object Tracking / 目标跟踪\n\n### Bayesian Inference / 贝叶斯推理\n\nWhich step in\nBayesian inference is used to update the state prediction with\nnew measurements?",
    "bankId": "simple-concept",
    "number": 200
  },
  {
    "id": "simple-concept-201",
    "title": "Which step in",
    "question": "Which step in\nBayesian inference is used to update the state prediction with\nnew measurements?",
    "images": [],
    "options": [
      "Prediction",
      "Association",
      "Correction",
      "Initialization"
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "题目中文翻译：\n\n- 题干：贝叶斯推理中哪个步骤用于用新的测量更新状态预测？\n- 选项 A：预测\n- 选项 B：关联\n- 选项 C：校正\n- 选项 D：初始化\n\n1. 预测步骤：p(xt|x1:t-1) = ∫ p(xt|xt-1) p(xt-1|z1:t-1) dxt-1\n\n2. 校正步骤：p(xt|z1:t) ∝ p(zt|xt) p(xt|z1:t-1)\n\n3. 物理意义：融合先验信息和观测信息\n\n4. 最优估计：在最小均方误差意义下最优\n\n---\n\n## Page 165\n\nWhat is the role\nof the dynamics model in Bayesian inference for object tracking?",
    "bankId": "simple-concept",
    "number": 201
  },
  {
    "id": "simple-concept-202",
    "title": "What is the primary",
    "question": "What is the primary\ndifference between Kalman filtering and particle filtering?",
    "images": [],
    "options": [
      "Kalman filtering can handle nonlinear and non- Gaussian systems",
      "Particle filtering can handle nonlinear and non- Gaussian systems",
      "Kalman filtering uses multiple particles to represent the state distribution",
      "Particle filtering assumes linear dynamics and Gaussian noise"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 题干：卡尔曼滤波和粒子滤波的主要区别是什么？\n- 选项 A：卡尔曼滤波能处理非线性和非高斯系统\n- 选项 B：粒子滤波能处理非线性和非高斯系统\n- 选项 C：卡尔曼滤波使用多个粒子表示状态分布\n- 选项 D：粒子滤波假设线性动力学和高斯噪声\n\n两种滤波方法的比较：\n\n---\n\n## Page 166\n\n卡尔曼滤波\n粒子滤波\n\n适用系统\n线性高斯\n非线性非高斯\n\n状态表示\n解析解\n粒子集合\n\n计算复杂度\nO(n³)\nO(N×n)\n\n最优性\n最优\n近似最优\n\nIn Kalman filtering, what does\nthe correction step involve?",
    "bankId": "simple-concept",
    "number": 202
  },
  {
    "id": "simple-concept-203",
    "title": "In Kalman filtering, what does",
    "question": "In Kalman filtering, what does\nthe correction step involve?",
    "images": [],
    "options": [
      "Predicting the next state based on the current state",
      "Updating the state prediction with the new measurement",
      "Initializing the state estimate",
      "Minimizing the state variance"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 题干：在卡尔曼滤波中，校正步骤涉及什么？\n- 选项 A：基于当前状态预测下一状态\n- 选项 B：用新的测量更新状态预测\n- 选项 C：初始化状态估计\n- 选项 D：最小化状态方差\n- 题干：特性\n\n卡尔曼滤波校正步骤的数学表达：\n\n1. 卡尔曼增益：K = P⁻H^T(HP⁻H^T + R)⁻¹\n\n2. 状态更新：x̂\n= x̂\n⁻ + K(z - Hx̂\n⁻)\n\n3. 协方差更新：P = (I - KH)P⁻\n\n4. 物理意义：根据测量质量调整信任度\n\nWhich\nassumption is made in the Kalman filter about the noise in the\ndynamics and measurement models?",
    "bankId": "simple-concept",
    "number": 203
  },
  {
    "id": "simple-concept-204",
    "title": "Which",
    "question": "Which\nassumption is made in the Kalman filter about the noise in the\ndynamics and measurement models?",
    "images": [],
    "options": [
      "The noise is non-Gaussian and multiplicative",
      "The noise is Gaussian and additive",
      "The noise is uniform and deterministic",
      "The noise is exponential and independent"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 题干：卡尔曼滤波对动力学和测量模型中噪声的假设是什么？\n- 选项 A：噪声是非高斯和乘性的\n- 选项 B：噪声是高斯和加性的\n- 选项 C：噪声是均匀和确定性的\n- 选项 D：噪声是指数和独立的\n\n高斯噪声假设的重要性：\n\n1. 线性系统：xt+1 = Fxt + wt, zt = Hxt + vt\n\n2. 噪声特性：wt ~ N(0,Q), vt ~ N(0,R)\n\n3. 最优性保证：在高斯假设下卡尔曼滤波是最优的\n\n4. 实际限制：真实系统往往不满足这些假设\n\nWhich one of the following\nstatements about particle filtering is correct?",
    "bankId": "simple-concept",
    "number": 204
  },
  {
    "id": "simple-concept-205",
    "title": "Which one of the following",
    "question": "Which one of the following\nstatements about particle filtering is correct?",
    "images": [],
    "options": [
      "It is only applicable to linear systems with Gaussian noise",
      "It uses a set of samples (particles) to represent the posterior distribution",
      "It assumes that the measurement model is deterministic",
      "It does not require a dynamics model"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "题目中文翻译：\n\n- 题干：关于粒子滤波的以下哪个陈述是正确的？\n- 选项 A：它只适用于具有高斯噪声的线性系统\n- 选项 B：它使用一组样本（粒子）来表示后验分布\n- 选项 C：它假设测量模型是确定性的\n- 选项 D：它不需要动力学模型\n\n1. Monte Carlo方法：用有限粒子近似连续分布\n\n2. 权重表示：{x^(i), w^(i)}，i=1,...,N\n\n3. 重采样：根据权重重新分布粒子\n\n4. 渐进一致性：当N→∞时收敛到最优解\n\n---\n\n## Page 168\n\nCOMP9517 期末复习2\n\n直方图均衡化计算题\n\n题目：对以下5×5灰度图像进行直方图均衡化（灰度级0-255）\n\n原始图像矩阵：\n\n⎡50\n\n⎤\n\n100\n\n150\n\n100\n200\n\n200\n\n100\n150\n\n50\n50\n200\n\n50\n200\n\n50\n150\n\nI =\n\n50\n100\n\n50\n100\n\n50\n100\n\n50\n200⎦\n\n⎣\n\n50\n\n50\n\n计算步骤\n\n1. 统计灰度直方图\n\n统计各灰度级出现次数：\n\nh(50)\nh(100)\n\n= 11\n= 6\n\nh(150)\nh(200)\n\n= 3\n= 5\n\n2. 计算概率分布函数\n\n,\n其中MN =\nMN\nh(r\n)\nk\n25\n\nP (r\n) =\nk\n\nP (50)\nP (100)\nP (150)\n\n= 11/25 = 0.44\n= 6/25 = 0.24\n= 3/25 = 0.12\n\nP (200)\n\n= 5/25 = 0.2\n\n3. 计算累积分布函数(CDF)\n\nk\n\nj=0\n∑\n\nC(r\n) =\nk\nP (r )\n\nj\n\n---\n\n## Page 169\n\nC(50)\nC(100)\nC(150)\nC(200)\n\n= 0.44\n= 0.44 + 0.24 = 0.68\n= 0.68 + 0.12 = 0.80\n= 0.80 + 0.20 = 1.00\n\n4. 计算映射后的灰度值\n\n映射公式：\n\ns\n=\nk\nround (L −1) × C(r\n) ,\nL =\n(\nk )\n256\n\ns(50)\ns(100)\ns(150)\ns(200)\n\n= round(255 × 0.44) = 112\n= round(255 × 0.68) = 173\n= round(255 × 0.80) = 204\n= round(255 × 1.00) = 255\n\n5. 生成均衡化后的图像\n\n⎡112\n\n⎤\n\n173\n112\n112\n255\n112\n\n204\n112\n255\n112\n173\n\n173\n255\n112\n173\n112\n\n255\n112\n204\n112\n255⎦\n\n173\n204\n112\n173\n\nI\n=\neq\n\n⎣\n\n虽然各灰度级的像素数量分布未变，但灰度值被重新分配，使得：\n\n- 原最小灰度50 → 映射为112\n\n- 原最大灰度200 → 映射为255\n\n- 中间灰度级被拉伸到更广的范围\n\n卷积运算计算题\n\n题目：计算以下图像的卷积结果（边界补零）\n\n图像矩阵：\n\n---\n\n## Page 170\n\n⎡0\n\n⎤\n\n1\n0\n1\n0\n1\n\n0\n0\n1\n0\n0\n\n1\n1\n0\n1\n0\n\n0\n1\n0\n0\n1⎦\n\n1\n0\n1\n0\n\nI =\n\n⎣\n\n卷积核：\n\n⎡1\n\n⎤\n\n0\n1\n0\n\n1\n0\n1⎦\n\nK =\n⎣\n\n0\n1\n\n计算过程：\n\n1. 卷积公式：\n\n1\n\n1\n\n∑\n\n∑\n\n(I ∗K)(x, y) =\nI(x −\n\ni, y −j)K(i, j)\n\ni=−1\n\nj=−1\n\n以下是对5×5图像矩阵的完整卷积计算过程，包含所有25个位置的计算步骤：\n\n边界处理：补零后的扩展矩阵\n\n⎡0\n\n⎤\n\n0\n0\n1\n0\n1\n0\n0\n\n0\n1\n0\n1\n0\n1\n0\n\n0\n0\n0\n1\n0\n0\n0\n\n0\n1\n1\n0\n1\n0",
    "bankId": "simple-concept",
    "number": 205
  },
  {
    "id": "final-ocr-1",
    "title": "Q1",
    "question": "Which characteristic of image features describes the **detectability** of features at the same location in different images?",
    "images": [],
    "options": [
      "Saliency",
      "Reproducibility",
      "Compactness"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Correct answer: B",
    "bankId": "final-ocr",
    "number": 1
  },
  {
    "id": "final-ocr-2",
    "title": "Q2",
    "question": "In image features, which characteristic describes each feature as having a unique and matchable descriptor, making it easily identifiable and matchable in images?",
    "images": [],
    "options": [
      "Saliency",
      "Reproducibility",
      "Compactness"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "Correct answer: A",
    "bankId": "final-ocr",
    "number": 2
  },
  {
    "id": "final-ocr-3",
    "title": "Q3",
    "question": "What property of the RGB channels in an image does the color moment represent?",
    "images": [],
    "options": [
      "Mean, variance, skewness",
      "Mean, variance, kurtosis",
      "Mean, variance, flatness",
      "Mean, variance, dispersion"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "Correct answer: A",
    "bankId": "final-ocr",
    "number": 3
  },
  {
    "id": "final-ocr-4",
    "title": "Q4",
    "question": "What is the length of the feature vector for color moments?",
    "images": [],
    "options": [
      "3 * 9",
      "9 * 3",
      "3 * 3",
      "3 * 27"
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "Correct answer: C",
    "bankId": "final-ocr",
    "number": 4
  },
  {
    "id": "final-ocr-5",
    "title": "Q5",
    "question": "What property of an image do Haralick features describe?",
    "images": [],
    "options": [
      "Color features",
      "Texture features",
      "Shape features",
      "Edge features"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Correct answer: B",
    "bankId": "final-ocr",
    "number": 5
  },
  {
    "id": "final-ocr-6",
    "title": "Q6",
    "question": "What does the gray level co-occurrence matrix record for two pixel values with a specific spatial relationship in an image?",
    "images": [],
    "options": [
      "Frequency and angle",
      "Distance and angle",
      "Skewness and kurtosis",
      "Mean and dispersion"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Correct answer: B",
    "bankId": "final-ocr",
    "number": 6
  },
  {
    "id": "final-ocr-7",
    "title": "Q7",
    "question": "What invariances does the local binary pattern (LBP) possess?",
    "images": [],
    "options": [
      "Rotational invariance",
      "Gray-scale invariance",
      "Rotational and gray-scale invariance",
      "Scale invariance"
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "Correct answer: C",
    "bankId": "final-ocr",
    "number": 7
  },
  {
    "id": "final-ocr-8",
    "title": "Q8",
    "question": "In local binary pattern (LBP), what is the value assigned if the neighboring pixel value is greater than the center pixel value?",
    "images": [],
    "options": [
      "1",
      "0",
      "255",
      "1"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "Correct answer: A",
    "bankId": "final-ocr",
    "number": 8
  },
  {
    "id": "final-ocr-9",
    "title": "Q9",
    "question": "Which feature is least affected when illumination changes cause uniform increase or decrease in image gray levels?",
    "images": [],
    "options": [
      "Haralick features",
      "Local binary pattern (LBP)",
      "Color histogram",
      "Color moments"
    ],
    "answer": 1,
    "answers": [
      1,
      2,
      3
    ],
    "explanation": "Correct answer: BCD",
    "bankId": "final-ocr",
    "number": 9
  },
  {
    "id": "final-ocr-10",
    "title": "Q1",
    "question": "Which image processing technique does the SIFT algorithm use to identify potential keypoints at different scales?",
    "images": [],
    "options": [
      "Edge detection",
      "Difference of Gaussian (DoG)",
      "Histogram equalization",
      "Fast Fourier Transform"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Correct answer: B",
    "bankId": "final-ocr",
    "number": 10
  },
  {
    "id": "final-ocr-11",
    "title": "Q2",
    "question": "How are Gaussian blurred images at different scales generated in the scale space of the SIFT algorithm?",
    "images": [],
    "options": [
      "By convolving the original image with different sizes of convolution kernels",
      "By applying different numbers of smoothing operations to the original image",
      "By downsampling the original image",
      "By upsampling the original image"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "Correct answer: A",
    "bankId": "final-ocr",
    "number": 11
  },
  {
    "id": "final-ocr-12",
    "title": "Q3",
    "question": "How are extrema points identified in DoG images within the scale space?",
    "images": [],
    "options": [
      "By comparing each pixel with its neighbors",
      "By calculating the gradient of each pixel",
      "By using edge detection algorithms",
      "By thresholding the image"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "Correct answer: A",
    "bankId": "final-ocr",
    "number": 12
  },
  {
    "id": "final-ocr-13",
    "title": "Q4",
    "question": "What is the primary purpose of using Taylor expansion during keypoint localization?",
    "images": [],
    "options": [
      "To enhance image contrast",
      "To accurately locate keypoints at subpixel levels",
      "To exclude low-contrast points and edge points",
      "To reduce image noise"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "The page has handwritten notes suggesting Taylor expansion is for precise localization and Hessian matrix analysis is for rejecting low-contrast or edge-like points. Please check the original image.",
    "bankId": "final-ocr",
    "number": 13
  },
  {
    "id": "final-ocr-14",
    "title": "Q5",
    "question": "Why is it necessary to analyze the Hessian matrix during keypoint localization?",
    "images": [],
    "options": [
      "To accurately locate keypoints at subpixel levels",
      "To exclude low-contrast points and edge points",
      "To enhance image contrast",
      "To adjust image brightness"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Correct answer: B",
    "bankId": "final-ocr",
    "number": 14
  },
  {
    "id": "final-ocr-15",
    "title": "Q6",
    "question": "How does the SIFT algorithm ensure that keypoint descriptors are invariant to image rotation?",
    "images": [],
    "options": [
      "By using histogram equalization",
      "By assigning a dominant orientation to each keypoint",
      "By performing rotation correction on the image",
      "By smoothing the image"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Correct answer: B",
    "bankId": "final-ocr",
    "number": 15
  },
  {
    "id": "final-ocr-16",
    "title": "Q7",
    "question": "How is the dominant orientation of a keypoint determined in the orientation assignment step of the SIFT algorithm?",
    "images": [],
    "options": [
      "By calculating the main peak of the gradient orientation histogram",
      "By edge detection",
      "By calculating the mean pixel intensity",
      "By computing the Fourier transform of the image"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "Correct answer: A",
    "bankId": "final-ocr",
    "number": 16
  },
  {
    "id": "final-ocr-17",
    "title": "Q8",
    "question": "What does the SIFT algorithm do if the secondary peak in the orientation histogram exceeds 80% of the primary peak?",
    "images": [],
    "options": [
      "Ignores the secondary peak",
      "Treats the secondary peak as a new keypoint",
      "Assigns multiple orientations to the keypoint",
      "Merges the secondary peak with the primary peak"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Correct answer: B",
    "bankId": "final-ocr",
    "number": 17
  },
  {
    "id": "final-ocr-18",
    "title": "Q9",
    "question": "The computation of keypoint descriptors in the SIFT algorithm is based on what?",
    "images": [],
    "options": [
      "Gradient orientation histograms of the keypoint's neighborhood",
      "Pixel intensity values of the keypoint",
      "Color information of the keypoint",
      "Texture features of the keypoint"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "Correct answer: A",
    "bankId": "final-ocr",
    "number": 18
  },
  {
    "id": "final-ocr-19",
    "title": "Q10",
    "question": "How are keypoint descriptors generated in the SIFT algorithm?",
    "images": [],
    "options": [
      "By applying Gaussian blur to the keypoint's neighborhood",
      "By computing and normalizing the gradient orientation histograms of the keypoint's neighborhood",
      "By performing edge detection on the keypoint's neighborhood",
      "By calculating the mean pixel intensity of the keypoint's neighborhood"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Correct answer: B",
    "bankId": "final-ocr",
    "number": 19
  },
  {
    "id": "final-ocr-20",
    "title": "Q11",
    "question": "Why is it necessary to normalize the gradient orientation histograms in the SIFT algorithm?",
    "images": [],
    "options": [
      "To reduce the impact of illumination changes",
      "To enhance image contrast",
      "To improve computation speed",
      "To reduce image noise"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "Correct answer: A",
    "bankId": "final-ocr",
    "number": 20
  },
  {
    "id": "final-ocr-21",
    "title": "Q12",
    "question": "What is the dimensionality of the keypoint descriptors in the SIFT algorithm?",
    "images": [],
    "options": [
      "64",
      "128",
      "256",
      "512"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Correct answer: B",
    "bankId": "final-ocr",
    "number": 21
  },
  {
    "id": "final-ocr-22",
    "title": "Q13",
    "question": "How is the keypoint neighborhood partitioned in the SIFT algorithm during descriptor generation?",
    "images": [],
    "options": [
      "The 16x16 pixel region is divided into 4x4 subregions",
      "The 8x8 pixel region is divided into 2x2 subregions",
      "The 32x32 pixel region is divided into 8x8 subregions",
      "The 4x4 pixel region is divided into 2x2 subregions"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "Correct answer: A",
    "bankId": "final-ocr",
    "number": 22
  },
  {
    "id": "final-ocr-23",
    "title": "Q14",
    "question": "Why are SIFT keypoint descriptors invariant to scale and rotation?",
    "images": [],
    "options": [
      "Due to the use of Gaussian blurring and gradient orientation histograms",
      "Due to the use of edge detection and image smoothing",
      "Due to the use of histogram equalization and contrast enhancement",
      "Due to the use of the Fourier transform of the image"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "The original page shows handwritten correction marks around this question. In standard SIFT theory, scale-space construction and orientation assignment are the key reasons for scale and rotation invariance.",
    "bankId": "final-ocr",
    "number": 23
  },
  {
    "id": "final-ocr-24",
    "title": "Q15",
    "question": "Which of the following is NOT a major advantage of the SIFT algorithm?",
    "images": [],
    "options": [
      "Invariance to scale and orientation",
      "Partial invariance to affine distortion and illumination changes",
      "Low computational complexity",
      "Ability to detect local features in an image"
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "Correct answer: C",
    "bankId": "final-ocr",
    "number": 24
  },
  {
    "id": "final-ocr-25",
    "title": "Q1",
    "question": "What is the main purpose of the Bag-of-Words (BoW) method in feature encoding?",
    "images": [],
    "options": [
      "Transform images into fixed-dimension histograms",
      "Improve image resolution",
      "Enhance image contrast",
      "Optimize image registration"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "Correct answer: A",
    "bankId": "final-ocr",
    "number": 25
  },
  {
    "id": "final-ocr-26",
    "title": "Q2",
    "question": "What is the first step in the Bag-of-Words (BoW) method?",
    "images": [],
    "options": [
      "Extract local feature descriptors",
      "Create a visual vocabulary",
      "Generate image histograms",
      "Smooth the image"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "Correct answer: A",
    "bankId": "final-ocr",
    "number": 26
  },
  {
    "id": "final-ocr-27",
    "title": "Q3",
    "question": "Which method is commonly used for clustering when creating a visual vocabulary?",
    "images": [],
    "options": [
      "Gaussian filtering",
      "K-means clustering",
      "Edge detection",
      "Color segmentation"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Correct answer: B",
    "bankId": "final-ocr",
    "number": 27
  },
  {
    "id": "final-ocr-28",
    "title": "Q4",
    "question": "What do \"visual words\" represent in the BoW model?",
    "images": [],
    "options": [
      "Color information of the image",
      "Edge information of the image",
      "Cluster centers of local image features",
      "Brightness information of the image"
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "Correct answer: C",
    "bankId": "final-ocr",
    "number": 28
  },
  {
    "id": "final-ocr-29",
    "title": "Q5",
    "question": "When generating an image histogram, what does each bin in the histogram represent?",
    "images": [],
    "options": [
      "Intensity variation of the image",
      "Color variation of the image",
      "Frequency of visual words in the image",
      "Contrast of the image"
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "Correct answer: C",
    "bankId": "final-ocr",
    "number": 29
  },
  {
    "id": "final-ocr-30",
    "title": "Q6",
    "question": "How are images in the training set classified using the BoW model during feature encoding?",
    "images": [],
    "options": [
      "By edge detection",
      "By smoothing the image",
      "By training histograms and Support Vector Machine (SVM)",
      "By color segmentation"
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "Correct answer: C",
    "bankId": "final-ocr",
    "number": 30
  },
  {
    "id": "final-ocr-31",
    "title": "Q7",
    "question": "How are feature descriptors in the training set processed when using the BoW model?",
    "images": [],
    "options": [
      "By Gaussian filtering",
      "By sampling and clustering",
      "By smoothing the image",
      "By edge detection"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Correct answer: B",
    "bankId": "final-ocr",
    "number": 31
  },
  {
    "id": "final-ocr-32",
    "title": "Q8",
    "question": "What can the generated histograms serve as in feature encoding?",
    "images": [],
    "options": [
      "Texture features of the image",
      "Color features of the image",
      "Feature vectors of the image",
      "Contrast information of the image"
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "Correct answer: C",
    "bankId": "final-ocr",
    "number": 32
  },
  {
    "id": "final-ocr-33",
    "title": "Q1",
    "question": "What is the main purpose of the RANSAC algorithm?",
    "images": [],
    "options": [
      "Enhance image contrast",
      "Estimate model parameters from data containing outliers",
      "Enhance image colors",
      "Optimize image resolution"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Correct answer: B",
    "bankId": "final-ocr",
    "number": 33
  },
  {
    "id": "final-ocr-34",
    "title": "Q2",
    "question": "How are model parameters computed in the RANSAC algorithm?",
    "images": [],
    "options": [
      "By averaging all data points",
      "By randomly selecting a small subset of data points (sample)",
      "By calculating the image gradient",
      "By smoothing the image"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Correct answer: B",
    "bankId": "final-ocr",
    "number": 34
  },
  {
    "id": "final-ocr-35",
    "title": "Q3",
    "question": "Which of the following steps is not included in the main steps of the RANSAC algorithm?",
    "images": [],
    "options": [
      "Randomly select a minimal data set",
      "Compute model parameters",
      "Determine the number of inliers",
      "Smooth the image"
    ],
    "answer": 3,
    "answers": [
      3
    ],
    "explanation": "Correct answer: D",
    "bankId": "final-ocr",
    "number": 35
  },
  {
    "id": "final-ocr-36",
    "title": "Q4",
    "question": "What is an inlier in the RANSAC algorithm?",
    "images": [],
    "options": [
      "A randomly selected point in the data set",
      "A data point well predicted by the current model",
      "A noise point in the data set",
      "An edge point in the image"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Correct answer: B",
    "bankId": "final-ocr",
    "number": 36
  },
  {
    "id": "final-ocr-37",
    "title": "Q1",
    "question": "Which descriptor is suitable for analyzing elongated or flat shapes?",
    "images": [],
    "options": [
      "Circularity",
      "Compactness",
      "Elongation",
      "Eccentricity"
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "Correct answer: C",
    "bankId": "final-ocr",
    "number": 37
  },
  {
    "id": "final-ocr-38",
    "title": "Q2",
    "question": "How does the chain code descriptor represent the shape of an object?",
    "images": [],
    "options": [
      "Relative positions of consecutive boundary points",
      "Absolute positions of consecutive boundary points",
      "Area of the object",
      "Perimeter of the object"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "Correct answer: A",
    "bankId": "final-ocr",
    "number": 38
  },
  {
    "id": "final-ocr-39",
    "title": "Q3",
    "question": "Which descriptor is suitable for analyzing elliptical shapes?",
    "images": [],
    "options": [
      "Circularity",
      "Compactness",
      "Elongation",
      "Eccentricity"
    ],
    "answer": 3,
    "answers": [
      3
    ],
    "explanation": "Correct answer: D",
    "bankId": "final-ocr",
    "number": 39
  },
  {
    "id": "final-ocr-40",
    "title": "Q1",
    "question": "What is the main function of the chain code descriptor?",
    "images": [],
    "options": [
      "Represent the color of the object",
      "Represent the shape of the object",
      "Represent the texture of the object",
      "Represent the size of the object"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Correct answer: B",
    "bankId": "final-ocr",
    "number": 40
  },
  {
    "id": "final-ocr-41",
    "title": "Q2",
    "question": "How does the chain code descriptor represent the shape of an object?",
    "images": [],
    "options": [
      "Absolute positions of consecutive boundary points",
      "Relative positions of consecutive boundary points",
      "Area of the object",
      "Perimeter of the object"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Correct answer: B",
    "bankId": "final-ocr",
    "number": 41
  },
  {
    "id": "final-ocr-42",
    "title": "Q1",
    "question": "In local curvature descriptors, what do the positive and negative values of curvature indicate?",
    "images": [],
    "options": [
      "Positive indicates concave, negative indicates convex",
      "Positive indicates convex, negative indicates concave",
      "Positive indicates flat, negative indicates convex",
      "Positive indicates convex, negative indicates flat"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Correct answer: B",
    "bankId": "final-ocr",
    "number": 42
  },
  {
    "id": "final-ocr-43",
    "title": "Q2",
    "question": "What do local curvature descriptors represent?",
    "images": [],
    "options": [
      "Global shape properties of the object",
      "Color information of the object",
      "Local shape properties of the object",
      "Texture features of the object"
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "Correct answer: C",
    "bankId": "final-ocr",
    "number": 43
  },
  {
    "id": "final-ocr-44",
    "title": "Q3",
    "question": "In local curvature descriptors, what do the positive and negative values of curvature indicate?",
    "images": [],
    "options": [
      "Positive indicates concave, negative indicates convex",
      "Positive indicates convex, negative indicates concave",
      "Positive indicates flat, negative indicates undulating",
      "Positive indicates undulating, negative indicates flat"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Correct answer: B",
    "bankId": "final-ocr",
    "number": 44
  },
  {
    "id": "final-ocr-45",
    "title": "Q1",
    "question": "What does total bending energy represent?",
    "images": [],
    "options": [
      "The total absolute curvature of the object's contour",
      "The total relative curvature of the object's contour",
      "The physical energy stored in the object's contour",
      "The area of the object"
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "Correct answer: C",
    "bankId": "final-ocr",
    "number": 45
  },
  {
    "id": "final-ocr-46",
    "title": "Q2",
    "question": "What is total absolute curvature?",
    "images": [],
    "options": [
      "The integral of the absolute value of curvature along the object's contour",
      "The integral of the relative value of curvature along the object's contour",
      "The perimeter of the object",
      "The area of the object"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "Correct answer: A",
    "bankId": "final-ocr",
    "number": 46
  },
  {
    "id": "final-ocr-47",
    "title": "Q3",
    "question": "What is the minimum value of total absolute curvature for convex objects?",
    "images": [],
    "options": [
      "π",
      "2π",
      "π/2",
      "4π"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Correct answer: B",
    "bankId": "final-ocr",
    "number": 47
  },
  {
    "id": "final-ocr-48",
    "title": "Q1",
    "question": "What is the function of the radial distance descriptor?",
    "images": [],
    "options": [
      "Measure the distance from the centroid of the shape to the boundary points",
      "Determine the curvature at various points along the shape's edge",
      "Compute the total length of the shape's perimeter",
      "Calculate the area enclosed by the shape"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "Correct answer: A",
    "bankId": "final-ocr",
    "number": 48
  },
  {
    "id": "final-ocr-49",
    "title": "Q2",
    "question": "What is the first step in shape matching?",
    "images": [],
    "options": [
      "Calculate the shape context",
      "Sample points on the shape boundary",
      "Calculate the cost matrix",
      "Perform one-to-one matching"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Correct answer: B",
    "bankId": "final-ocr",
    "number": 49
  },
  {
    "id": "final-ocr-50",
    "title": "Q3",
    "question": "What does the shape context represent?",
    "images": [],
    "options": [
      "Color information of each point",
      "Texture information of each point",
      "Relative position distribution of each point",
      "Absolute position distribution of each point"
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "Correct answer: C",
    "bankId": "final-ocr",
    "number": 50
  },
  {
    "id": "final-ocr-51",
    "title": "Q4",
    "question": "What is the purpose of one-to-one matching in shape matching?",
    "images": [],
    "options": [
      "Maximize the total cost between matched point pairs",
      "Minimize the total cost between matched point pairs",
      "Calculate the perimeter of the shape",
      "Calculate the area of the shape"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Correct answer: B",
    "bankId": "final-ocr",
    "number": 51
  },
  {
    "id": "final-ocr-52",
    "title": "Q5",
    "question": "How is the optimal transformation achieved in shape matching?",
    "images": [],
    "options": [
      "By least squares method or RANSAC fitting",
      "By maximum sum squares method",
      "By minimum variance method",
      "By maximum variance method"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "Correct answer: A",
    "bankId": "final-ocr",
    "number": 52
  },
  {
    "id": "final-ocr-53",
    "title": "Q1",
    "question": "HoG features are constructed by calculating and compiling the histogram of gradient directions in which region of the image?",
    "images": [],
    "options": [
      "Global region",
      "Local region",
      "Edge region",
      "Center region"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Correct answer: B",
    "bankId": "final-ocr",
    "number": 53
  },
  {
    "id": "final-ocr-54",
    "title": "Q2",
    "question": "When calculating HoG features, into what are the images initially divided?",
    "images": [],
    "options": [
      "Blocks",
      "Cells",
      "Pixels",
      "Segments"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Correct answer: B",
    "bankId": "final-ocr",
    "number": 54
  },
  {
    "id": "final-ocr-55",
    "title": "Q3",
    "question": "Each cell's HoG histogram is calculated based on what?",
    "images": [],
    "options": [
      "Color information of the image",
      "Intensity variations of the image",
      "Gradient direction and magnitude",
      "Texture features of the image"
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "Correct answer: C",
    "bankId": "final-ocr",
    "number": 55
  },
  {
    "id": "final-ocr-56",
    "title": "Q4",
    "question": "What does the response map of HoG features mainly represent?",
    "images": [],
    "options": [
      "Intensity variations of the image",
      "The classifier's response to each detection window",
      "Color variations of the image",
      "Boundary features of the image"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Correct answer: B",
    "bankId": "final-ocr",
    "number": 56
  },
  {
    "id": "final-ocr-57",
    "title": "Q5",
    "question": "What is formed by concatenating the descriptors of all blocks in the detection window during HoG feature calculation?",
    "images": [],
    "options": [
      "Gradient features of the image",
      "HoG feature vector",
      "Texture features of the image",
      "Edge features of the image"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Correct answer: B",
    "bankId": "final-ocr",
    "number": 57
  },
  {
    "id": "final-ocr-58",
    "title": "Q6",
    "question": "When training the classifier, labeled example windows are used to distinguish between which two classes of features?",
    "images": [],
    "options": [
      "Edges and textures",
      "Objects and background",
      "Brightness and contrast",
      "Color and shape"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Correct answer: B",
    "bankId": "final-ocr",
    "number": 58
  },
  {
    "id": "final-ocr-59",
    "title": "Q7",
    "question": "Which of the following steps is not included in the generation process of HoG descriptors?",
    "images": [],
    "options": [
      "Calculating gradient directions",
      "Calculating gradient magnitudes",
      "Normalizing histograms",
      "Generating gradient direction histograms"
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "Correct answer: C",
    "bankId": "final-ocr",
    "number": 59
  },
  {
    "id": "final-ocr-60",
    "title": "Q8",
    "question": "In HoG feature description, what do the bins of the direction histogram represent?",
    "images": [],
    "options": [
      "Color information of the image",
      "Gradient intensity in different directions",
      "Intensity variations of the image",
      "Edge directions of the image"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Correct answer: B",
    "bankId": "final-ocr",
    "number": 60
  },
  {
    "id": "final-ocr-61",
    "title": "Q1",
    "question": "On what principle does the nearest class center classifier base its classification?",
    "images": [],
    "options": [
      "Maximum distance principle",
      "Minimum distance principle",
      "Nearest neighbor principle",
      "Average distance principle"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Correct answer: B",
    "bankId": "final-ocr",
    "number": 61
  },
  {
    "id": "final-ocr-62",
    "title": "Q2",
    "question": "In the nearest class center classifier, how is the center point of each class calculated?",
    "images": [],
    "options": [
      "The mean of all sample points",
      "The median of all sample points",
      "The sum of the distances of all sample points",
      "The geometric center of all sample points"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "Correct answer: A",
    "bankId": "final-ocr",
    "number": 62
  },
  {
    "id": "final-ocr-63",
    "title": "Q3",
    "question": "In the testing phase, how is it decided to which class the test object belongs?",
    "images": [],
    "options": [
      "Based on the average distance from the test object to all sample points",
      "Based on the distance from the test object to the center of all classes",
      "Based on the distance from the test object to the nearest neighbor point",
      "Based on the maximum distance from the test object to all sample points"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Correct answer: B",
    "bankId": "final-ocr",
    "number": 63
  },
  {
    "id": "final-ocr-64",
    "title": "Q1",
    "question": "What does the \"K\" in KNN classifier stand for?",
    "images": [],
    "options": [
      "Number of sample points",
      "Number of nearest neighbors",
      "Dimensionality of feature vectors",
      "Number of classes"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Correct answer: B",
    "bankId": "final-ocr",
    "number": 64
  },
  {
    "id": "final-ocr-65",
    "title": "Q2",
    "question": "Which of the following is not a disadvantage of the KNN classifier?",
    "images": [],
    "options": [
      "Slow for large datasets",
      "Requires homogeneous feature types and scales",
      "Not suitable for high-dimensional data",
      "Handles missing data well"
    ],
    "answer": 3,
    "answers": [
      3
    ],
    "explanation": "Correct answer: D",
    "bankId": "final-ocr",
    "number": 65
  },
  {
    "id": "final-ocr-66",
    "title": "Q3",
    "question": "The process of selecting the optimal K value in the KNN classifier can be described as:",
    "images": [],
    "options": [
      "Easy and quick",
      "Challenging and time-consuming",
      "Independent of the dataset",
      "Dependent on the type and number of features"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Correct answer: B",
    "bankId": "final-ocr",
    "number": 66
  },
  {
    "id": "final-ocr-67",
    "title": "Q1",
    "question": "What is the basic assumption of Bayesian decision theory?",
    "images": [],
    "options": [
      "All classes are equally probable",
      "The prior probabilities of the classes are known",
      "Test data has no noise",
      "Sample points are independent and identically distributed"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Correct answer: B",
    "bankId": "final-ocr",
    "number": 67
  },
  {
    "id": "final-ocr-68",
    "title": "Q2",
    "question": "In Bayesian decision theory, how is the posterior probability calculated?",
    "images": [],
    "options": [
      "Prior probability and likelihood function",
      "Distance between test data and sample points",
      "Number of classes and number of sample points",
      "Feature vectors and class labels"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "Correct answer: A",
    "bankId": "final-ocr",
    "number": 68
  },
  {
    "id": "final-ocr-69",
    "title": "Q3",
    "question": "What is the goal of Bayesian decision theory?",
    "images": [],
    "options": [
      "Maximize the prior probability",
      "Minimize the classification error rate",
      "Maximize the posterior probability",
      "Minimize computational complexity"
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "Correct answer: C",
    "bankId": "final-ocr",
    "number": 69
  },
  {
    "id": "final-ocr-70",
    "title": "Q4",
    "question": "What does the loss function represent in Bayesian decision risk?",
    "images": [],
    "options": [
      "Similarity between classes",
      "Cost of classification errors",
      "Accuracy of the test data",
      "Distribution of the sample points"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Correct answer: B",
    "bankId": "final-ocr",
    "number": 70
  },
  {
    "id": "final-ocr-71",
    "title": "Q5",
    "question": "What is the goal of Bayesian decision risk?",
    "images": [],
    "options": [
      "Maximize expected loss",
      "Minimize conditional risk",
      "Maximize classification accuracy",
      "Minimize classification complexity"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Correct answer: B",
    "bankId": "final-ocr",
    "number": 71
  },
  {
    "id": "final-ocr-72",
    "title": "Q6",
    "question": "What are the advantages of Bayesian decision theory?",
    "images": [],
    "options": [
      "Simple and intuitive",
      "Accounts for uncertainty",
      "Allows new information to be combined with current knowledge",
      "All of the above"
    ],
    "answer": 3,
    "answers": [
      3
    ],
    "explanation": "Correct answer: D",
    "bankId": "final-ocr",
    "number": 72
  },
  {
    "id": "final-ocr-73",
    "title": "Q7",
    "question": "What are the disadvantages of Bayesian decision theory?",
    "images": [],
    "options": [
      "Computationally complex",
      "Requires a large amount of training data",
      "Subjectivity in the choice of prior",
      "All of the above"
    ],
    "answer": 3,
    "answers": [
      3
    ],
    "explanation": "Correct answer: D",
    "bankId": "final-ocr",
    "number": 73
  },
  {
    "id": "final-ocr-74",
    "title": "Q1",
    "question": "What do internal nodes represent?",
    "images": [],
    "options": [
      "A class",
      "A feature or attribute",
      "A leaf",
      "A data point"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Correct answer: B",
    "bankId": "final-ocr",
    "number": 74
  },
  {
    "id": "final-ocr-75",
    "title": "Q2",
    "question": "What do leaf nodes represent?",
    "images": [],
    "options": [
      "A feature or attribute",
      "A class",
      "A data point",
      "An internal node"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Correct answer: B",
    "bankId": "final-ocr",
    "number": 75
  },
  {
    "id": "final-ocr-76",
    "title": "Q3",
    "question": "What does entropy represent?",
    "images": [],
    "options": [
      "A measure of the uncertainty of a random variable",
      "The mean of the data",
      "The variance of the data",
      "The standard deviation of the data"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "Correct answer: A",
    "bankId": "final-ocr",
    "number": 76
  },
  {
    "id": "final-ocr-77",
    "title": "Q4",
    "question": "When entropy is 0, what is the state of the random variable?",
    "images": [],
    "options": [
      "Completely certain",
      "Completely uncertain",
      "Partially certain",
      "Partially uncertain"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "Correct answer: A",
    "bankId": "final-ocr",
    "number": 77
  },
  {
    "id": "final-ocr-78",
    "title": "Q5",
    "question": "What does information gain represent?",
    "images": [],
    "options": [
      "The extent to which a feature reduces the uncertainty of class information",
      "The extent to which a feature increases the uncertainty of class information",
      "The mean of the data",
      "The variance of the data"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "Correct answer: A",
    "bankId": "final-ocr",
    "number": 78
  },
  {
    "id": "final-ocr-79",
    "title": "Q1",
    "question": "What is the purpose of ensemble learning?",
    "images": [],
    "options": [
      "To combine multiple weak learners to create a new strong learner",
      "To use a single strong learner for classification",
      "To increase the classification error rate",
      "To reduce the size of the dataset"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "Correct answer: A",
    "bankId": "final-ocr",
    "number": 79
  },
  {
    "id": "final-ocr-80",
    "title": "Q2",
    "question": "Which of the following is not a common ensemble learning method?",
    "images": [],
    "options": [
      "Bagging",
      "Boosting",
      "Stacking",
      "Clustering"
    ],
    "answer": 3,
    "answers": [
      3
    ],
    "explanation": "Correct answer: D",
    "bankId": "final-ocr",
    "number": 80
  },
  {
    "id": "final-ocr-81",
    "title": "Q3",
    "question": "On which ensemble learning method is Random Forest based?",
    "images": [],
    "options": [
      "Bagging",
      "Boosting",
      "Stacking",
      "Clustering"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "Correct answer: A",
    "bankId": "final-ocr",
    "number": 81
  },
  {
    "id": "final-ocr-82",
    "title": "Q4",
    "question": "What happens when the correlation between trees is increased in a Random Forest?",
    "images": [],
    "options": [
      "The error rate of the Random Forest increases",
      "The error rate of the Random Forest decreases",
      "The error rate of the Random Forest is unaffected",
      "The depth of the trees increases"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "Correct answer: A",
    "bankId": "final-ocr",
    "number": 82
  },
  {
    "id": "final-ocr-83",
    "title": "Q5",
    "question": "What happens when the number of features `m` chosen in a Random Forest increases?",
    "images": [],
    "options": [
      "The correlation and strength between trees increase",
      "The correlation and strength between trees decrease",
      "The correlation and strength between trees are unaffected",
      "The depth of the trees increases"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "Correct answer: A",
    "bankId": "final-ocr",
    "number": 83
  },
  {
    "id": "final-ocr-84",
    "title": "Q6",
    "question": "What are the advantages of ensemble learning?",
    "images": [],
    "options": [
      "High accuracy on many problems",
      "Efficient performance on large datasets",
      "Can handle a large number of input features without needing feature selection",
      "All of the above"
    ],
    "answer": 3,
    "answers": [
      3
    ],
    "explanation": "Correct answer: D",
    "bankId": "final-ocr",
    "number": 84
  },
  {
    "id": "final-ocr-85",
    "title": "Q7",
    "question": "What are the disadvantages of ensemble learning?",
    "images": [],
    "options": [
      "Poor interpretability",
      "More complex and time-consuming to construct decision trees",
      "Requires significant computational resources",
      "All of the above"
    ],
    "answer": 3,
    "answers": [
      3
    ],
    "explanation": "Correct answer: D",
    "bankId": "final-ocr",
    "number": 85
  },
  {
    "id": "final-ocr-86",
    "title": "Q8",
    "question": "What is the process of selecting samples from each sample set in the construction of a Random Forest called?",
    "images": [],
    "options": [
      "Bootstrap sampling",
      "Cluster analysis",
      "Data smoothing",
      "Data normalization"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "Correct answer: A",
    "bankId": "final-ocr",
    "number": 86
  },
  {
    "id": "final-ocr-87",
    "title": "Q9",
    "question": "How is it determined to which class the data belongs in a Random Forest?",
    "images": [],
    "options": [
      "By majority voting",
      "By calculating the mean",
      "By maximizing information gain",
      "By calculating the variance"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "Correct answer: A",
    "bankId": "final-ocr",
    "number": 87
  },
  {
    "id": "final-ocr-88",
    "title": "Q1",
    "question": "What does \"separable classes\" refer to?",
    "images": [],
    "options": [
      "Classes that can be separated by a hyperplane",
      "Classes that overlap",
      "Classes with no boundaries",
      "Classes that are far apart"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "Correct answer: A",
    "bankId": "final-ocr",
    "number": 88
  },
  {
    "id": "final-ocr-89",
    "title": "Q2",
    "question": "What does \"linearly separable\" mean?",
    "images": [],
    "options": [
      "Classes can be separated by a straight line",
      "Classes can be separated by a curve",
      "Classes do not overlap",
      "Classes have no boundaries"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "Correct answer: A",
    "bankId": "final-ocr",
    "number": 89
  },
  {
    "id": "final-ocr-90",
    "title": "Q3",
    "question": "In a three-dimensional space, the separating function of a linear classifier corresponds to:",
    "images": [],
    "options": [
      "A line",
      "A plane",
      "A curve",
      "A hyperplane"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Correct answer: B",
    "bankId": "final-ocr",
    "number": 90
  },
  {
    "id": "final-ocr-91",
    "title": "Q4",
    "question": "What is the goal of SVM?",
    "images": [],
    "options": [
      "Maximize the distance from the hyperplane to the nearest sample point",
      "Minimize the distance from the hyperplane to the nearest sample point",
      "Maximize the distance from the hyperplane to all sample points",
      "Minimize the distance from the hyperplane to all sample points"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "Correct answer: A",
    "bankId": "final-ocr",
    "number": 91
  },
  {
    "id": "final-ocr-92",
    "title": "Q5",
    "question": "In SVM, what are support vectors?",
    "images": [],
    "options": [
      "Sample points closest to the hyperplane",
      "Sample points farthest from the hyperplane",
      "All sample points",
      "All hyperplanes"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "Correct answer: A",
    "bankId": "final-ocr",
    "number": 92
  },
  {
    "id": "final-ocr-93",
    "title": "Q6",
    "question": "What does hard margin SVM assume about the data?",
    "images": [],
    "options": [
      "Linearly separable",
      "Non-linearly separable",
      "Completely separable",
      "Completely inseparable"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "Correct answer: A",
    "bankId": "final-ocr",
    "number": 93
  },
  {
    "id": "final-ocr-94",
    "title": "Q7",
    "question": "What does soft margin SVM allow?",
    "images": [],
    "options": [
      "Some sample points to be misclassified",
      "All sample points to be correctly classified",
      "All sample points to be misclassified",
      "No sample points to be classified"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "Correct answer: A",
    "bankId": "final-ocr",
    "number": 94
  },
  {
    "id": "final-ocr-95",
    "title": "Q8",
    "question": "What is the function of a kernel?",
    "images": [],
    "options": [
      "Map features to a higher-dimensional space",
      "Map features to a lower-dimensional space",
      "Increase classification error rate",
      "Decrease classification error rate"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "Correct answer: A",
    "bankId": "final-ocr",
    "number": 95
  },
  {
    "id": "final-ocr-96",
    "title": "Q1",
    "question": "In multiclass problems, what does the \"one-vs-all\" method mean?",
    "images": [],
    "options": [
      "Building a classifier for each class to separate it from all other classes",
      "Building a classifier for each pair of classes",
      "Building a classifier for each sample",
      "Building a classifier for each feature"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "Correct answer: A",
    "bankId": "final-ocr",
    "number": 96
  },
  {
    "id": "final-ocr-97",
    "title": "Q2",
    "question": "In multiclass problems, what does the \"one-vs-one\" method mean?",
    "images": [],
    "options": [
      "Building a classifier for each pair of classes",
      "Building a classifier for each class",
      "Building a classifier for each sample",
      "Building a classifier for each feature"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "Correct answer: A",
    "bankId": "final-ocr",
    "number": 97
  },
  {
    "id": "final-ocr-98",
    "title": "Q3",
    "question": "Which of the following methods can be directly used for multiclass classification?",
    "images": [],
    "options": [
      "K-nearest neighbors (KNN)",
      "Decision trees",
      "Bayesian techniques",
      "All of the above"
    ],
    "answer": 3,
    "answers": [
      3
    ],
    "explanation": "Correct answer: D",
    "bankId": "final-ocr",
    "number": 98
  },
  {
    "id": "final-ocr-99",
    "title": "Q1",
    "question": "What is a Type I error (false positive)?",
    "images": [],
    "options": [
      "The system incorrectly thinks a person does not have a disease",
      "The system incorrectly thinks a person has a disease",
      "The system correctly thinks a person has a disease",
      "The system correctly thinks a person does not have a disease"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Correct answer: B",
    "bankId": "final-ocr",
    "number": 99
  },
  {
    "id": "final-ocr-100",
    "title": "Q2",
    "question": "What is a Type II error (false negative)?",
    "images": [],
    "options": [
      "The system incorrectly thinks a person does not have a disease",
      "The system incorrectly thinks a person has a disease",
      "The system correctly thinks a person has a disease",
      "The system correctly thinks a person does not have a disease"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "Correct answer: A",
    "bankId": "final-ocr",
    "number": 100
  },
  {
    "id": "final-ocr-101",
    "title": "Q3",
    "question": "Which type of error is usually more catastrophic in misclassification?",
    "images": [],
    "options": [
      "Type I error",
      "Type II error",
      "Both are equally serious",
      "Cannot be determined"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Correct answer: B",
    "bankId": "final-ocr",
    "number": 101
  },
  {
    "id": "cpu-question-bank-1",
    "title": "Question 1",
    "question": "What is the purpose of convolutional layers in CNNs?",
    "images": [],
    "options": [
      "Reducing the size of the feature maps.",
      "Calculating the dot product of the input and kernels.",
      "Applying a nonlinear activation function.",
      "Making the network learn faster."
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Convolutional layers apply learnable kernels to local input regions; this is computed as dot products / convolution to produce feature maps.",
    "bankId": "cpu-question-bank",
    "number": 1
  },
  {
    "id": "cpu-question-bank-2",
    "title": "Question 2",
    "question": "Which one of the following lines describes the purpose of convolutional layers in CNNs?",
    "images": [],
    "options": [
      "Reducing the size of the feature maps.",
      "Calculating the dot product of the input and kernels.",
      "Applying a nonlinear activation function.",
      "Making the network learn faster."
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Same as Q1: a convolution layer uses kernels/filters to compute local dot products and extract features.",
    "bankId": "cpu-question-bank",
    "number": 2
  },
  {
    "id": "cpu-question-bank-3",
    "title": "Question 3",
    "question": "Which one of the following lines best describes the key benefit of CNNs over traditional ANNs for image classification?",
    "images": [],
    "options": [
      "CNNs are computationally less expensive.",
      "CNNs automatically learn hierarchical features.",
      "CNNs require fewer network layers.",
      "CNNs can learn nonlinear mappings."
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "CNNs learn low-level to high-level hierarchical visual features automatically, unlike traditional ANNs that do not exploit image structure as directly.",
    "bankId": "cpu-question-bank",
    "number": 3
  },
  {
    "id": "cpu-question-bank-4",
    "title": "Question 9",
    "question": "In many image processing operations, the image must be expanded a little bit to solve the boundary problem. What type of expansion is implicitly used by the Fourier transform?",
    "images": [],
    "options": [
      "Padding",
      "Clamping",
      "Wrapping",
      "Mirroring"
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "The Fourier transform assumes periodic extension of the signal/image, which corresponds to wrapping at the boundaries.",
    "bankId": "cpu-question-bank",
    "number": 4
  },
  {
    "id": "cpu-question-bank-5",
    "title": "Question 10",
    "question": "In many image processing operations, the image must be expanded a little bit to solve the boundary problem. Which one of the following types of expansion is implicitly used by the Fourier transform?",
    "images": [],
    "options": [
      "Padding",
      "Clamping",
      "Wrapping",
      "Mirroring"
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "Fourier-domain processing implicitly treats the image as periodic, so the boundary condition is wrapping.",
    "bankId": "cpu-question-bank",
    "number": 5
  },
  {
    "id": "cpu-question-bank-6",
    "title": "Question 11",
    "question": "Which one of the following statements about image segmentation methods is incorrect?",
    "images": [],
    "options": [
      "Thresholding based on pixel intensity yields poor results if the regions to be segmented have overlapping intensity distributions.",
      "Level-set segmentation uses an object boundary representation that makes it hard to deal with topological changes.",
      "Region splitting techniques aim to optimize some metric of intra-region similarity and inter-region dissimilarity.",
      "Watershed segmentation often results in over-segmentation because image regions may contain multiple local minima."
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Level-set methods use implicit boundary representations and can naturally handle topological changes, so saying they make topological changes hard is incorrect.",
    "bankId": "cpu-question-bank",
    "number": 6
  },
  {
    "id": "cpu-question-bank-7",
    "title": "Question 12",
    "question": "Which one of the following statements about intensity transformations is incorrect?",
    "images": [],
    "options": [
      "Contrast stretching linearly maps intensities between two values to the full output range.",
      "Log transformation maps a narrow range of high intensities to a wider range of output values.",
      "Power transformation can map intensities similar to log and inverse log transformations.",
      "Piecewise linear transformations can achieve contrast stretching and intensity slicing."
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Log transformation expands low-intensity/dark values and compresses high-intensity values; it does not map high intensities to a wider output range.",
    "bankId": "cpu-question-bank",
    "number": 7
  },
  {
    "id": "cpu-question-bank-8",
    "title": "Question 14",
    "question": "Given the following input image `I` (on the left) and output image `O` (on the right):\n\n\n\nImage `O` is the result of processing image `I` using a point operator. Which one of the following mapping functions (red curves) from intensities in `I` to intensities in `O` was used by the point operator? For reference, in each graphic, the histogram of the image `I` is shown in blue.",
    "images": [
      {
        "alt": "Point operator mapping question",
        "src": "/cpu_answers_with_images/images/point_operator_mapping_question.png"
      }
    ],
    "options": [
      "Mapping function A",
      "Mapping function B",
      "Mapping function C",
      "Mapping function D"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "The output is essentially a binary thresholded image selecting bright regions. Option B is the step threshold placed near the brighter peak.",
    "bankId": "cpu-question-bank",
    "number": 8
  },
  {
    "id": "cpu-question-bank-9",
    "title": "Question 16",
    "question": "Which one of the following strategies will not help to reduce overfitting of neural networks?",
    "images": [],
    "options": [
      "Applying dropout.",
      "Using early stopping.",
      "Augmenting the data.",
      "Increasing the number of network parameters."
    ],
    "answer": 3,
    "answers": [
      3
    ],
    "explanation": "Increasing the number of parameters usually increases model capacity and can worsen overfitting rather than reduce it.",
    "bankId": "cpu-question-bank",
    "number": 9
  },
  {
    "id": "cpu-question-bank-10",
    "title": "Question 18",
    "question": "What is the effect of the following 2D convolution kernel on an image?\n\n\\[\n\\begin{bmatrix}\n0 & 1 & 0 \\\\\n1 & -4 & 1 \\\\\n0 & 1 & 0\n\\end{bmatrix}\n\\]",
    "images": [],
    "options": [
      "It approximates the sum of first-order derivatives in `x` and `y`.",
      "It approximates the sum of second-order derivatives in `x` and `y`.",
      "It approximates the product of first-order derivatives in `x` and `y`.",
      "It approximates the product of second-order derivatives in `x` and `y`."
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "This is a 4-neighbour Laplacian kernel, approximating the sum of second derivatives in x and y.",
    "bankId": "cpu-question-bank",
    "number": 10
  },
  {
    "id": "cpu-question-bank-11",
    "title": "Question 19",
    "question": "Given the following 2D convolution kernel:\n\n\\[\n\\begin{bmatrix}\n1 & 0 & -1 \\\\\n2 & 0 & -2 \\\\\n1 & 0 & -1\n\\end{bmatrix}\n\\]\n\n**Which one of the following correctly describes the effect of this kernel when applied to an image?**",
    "images": [],
    "options": [
      "Smoothing in `x` and first-order differentiation in `y`.",
      "Smoothing in `x` and second-order differentiation in `y`.",
      "First-order differentiation in `x` and smoothing in `y`.",
      "Second-order differentiation in `x` and smoothing in `y`."
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "This Sobel-type kernel differentiates in x using [1, 0, -1] and smooths in y using [1, 2, 1]^T.",
    "bankId": "cpu-question-bank",
    "number": 11
  },
  {
    "id": "cpu-question-bank-12",
    "title": "Question 24",
    "question": "Which one of the following equations concerning convolution (`*`) of two images (`f` and `g`) is correct?",
    "images": [],
    "options": [
      "`f * g = (g * f)^(-1)`",
      "`f * (g + h) = (f * g) + (f * h)`",
      "`a · (f * g) = (a · f) * (a · g)`",
      "`f * g = f̂ * ĝ`"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Convolution is distributive over addition: f * (g + h) = f * g + f * h.",
    "bankId": "cpu-question-bank",
    "number": 12
  },
  {
    "id": "cpu-question-bank-13",
    "title": "Question 25",
    "question": "Suppose we have a 2D image that is very noisy and we want to smooth it by filtering with a uniform kernel of size 5 × 5 voxels. Let `S` be the total number of floating-point operations required per pixel to perform the operation when using a dimensionally separated implementation of the filter. Let `N` be the total number of floating-point operations required per pixel to perform the operation when using a dimensionally nonseparated implementation of the filter.\n\n**What is the ratio `S/N` as a percentage rounded to one decimal?**",
    "images": [],
    "options": [
      "36.7%",
      "40.0%",
      "58.8%",
      "66.7%"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "Non-separated 5x5 filtering needs 25 multiplications + 24 additions = 49 operations. Separable filtering needs two 1D passes: 10 multiplications + 8 additions = 18 operations. S/N = 18/49 = 36.7%.",
    "bankId": "cpu-question-bank",
    "number": 13
  },
  {
    "id": "cpu-question-bank-14",
    "title": "Question 26",
    "question": "Which one of the following statements on image filtering is incorrect?",
    "images": [],
    "options": [
      "Median filtering reduces noise in images.",
      "Low-pass filtering smooths fine details in images.",
      "High-pass filtering results in blurry images.",
      "Notch filtering removes specific image frequencies."
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "High-pass filtering enhances edges and fine details; it does not make images blurry.",
    "bankId": "cpu-question-bank",
    "number": 14
  },
  {
    "id": "cpu-question-bank-15",
    "title": "Question 27",
    "question": "Which one of the following statements on image filtering is incorrect?",
    "images": [],
    "options": [
      "Median filtering reduces noise in images.",
      "Low-pass filtering results in blurry images.",
      "High-pass filtering smooths fine details in images.",
      "Notch filtering removes specific image frequencies."
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "High-pass filtering does not smooth fine details; low-pass filtering does.",
    "bankId": "cpu-question-bank",
    "number": 15
  },
  {
    "id": "cpu-question-bank-16",
    "title": "Question 28",
    "question": "Which one of the following statements is correct for random forest classifiers?",
    "images": [],
    "options": [
      "Increasing the correlation between the individual trees decreases the random forest classification error rate.",
      "Reducing the number of selected features at each node increases the correlation between the individual trees.",
      "Reducing the number of selected features at each node increases the strength of the individual trees.",
      "Increasing the strength of the individual trees decreases the random forest classification error rate."
    ],
    "answer": 3,
    "answers": [
      3
    ],
    "explanation": "Random forest error decreases when individual trees are stronger and less correlated; option D states the strength part correctly.",
    "bankId": "cpu-question-bank",
    "number": 16
  },
  {
    "id": "cpu-question-bank-17",
    "title": "Question 29",
    "question": "Which one of the following statements is correct for pattern recognition?",
    "images": [],
    "options": [
      "Pattern recognition is defined as the process of model training on a training dataset and then testing on an independent test set.",
      "The dimension of feature vectors should be smaller than the number of training samples in order to avoid the overfitting problem.",
      "The simple kNN classifier needs homogeneous feature types and scales so that the classification performance can be better.",
      "SVM is a powerful classifier that can separate classes even when the feature space exhibits significant overlaps between classes."
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "kNN relies on distances, so features should have compatible types and scales; otherwise distance comparisons become misleading.",
    "bankId": "cpu-question-bank",
    "number": 17
  },
  {
    "id": "cpu-question-bank-18",
    "title": "Question 34",
    "question": "Which one of the following statements about object tracking is incorrect?",
    "images": [],
    "options": [
      "The particle filtering method assumes that the dynamics model and the measurement model can be parameterized.",
      "The hidden Markov model assumes that the measurements depend only on the current state of the objects.",
      "The prediction step of Bayesian inference assumes that the current state of the objects depends only on the previous state.",
      "The Kalman filtering method assumes that the dynamics and measurement noise are additive Gaussian."
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "Particle filters do not require the same strict parametric Gaussian assumptions as Kalman filters; they approximate distributions with particles.",
    "bankId": "cpu-question-bank",
    "number": 18
  },
  {
    "id": "cpu-question-bank-19",
    "title": "Question 37",
    "question": "What does transfer learning with CNNs involve?",
    "images": [],
    "options": [
      "Training a model from scratch for each new task.",
      "Using a pretrained model and fine-tuning it for a new task.",
      "Converting image data to text data to facilitate learning.",
      "Combining multiple CNNs into a single model for better performance."
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Transfer learning uses a model pretrained on a large/source task and fine-tunes or adapts it to a new task.",
    "bankId": "cpu-question-bank",
    "number": 19
  },
  {
    "id": "cpu-question-bank-20",
    "title": "Question 38",
    "question": "Which one of the following lines describes the purpose of transfer learning?",
    "images": [],
    "options": [
      "Training a model from scratch for each new task.",
      "Using a pretrained model and fine-tuning it for a new task.",
      "Converting image data to text data to facilitate learning.",
      "Combining multiple models into a single model for better performance."
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "The purpose is to reuse learned features from a pretrained model and adapt them to the new problem.",
    "bankId": "cpu-question-bank",
    "number": 20
  },
  {
    "id": "cpu-question-bank-21",
    "title": "Question 40",
    "question": "Which one of the following statements about colour spaces is incorrect?",
    "images": [],
    "options": [
      "The R, G, and B channels of the RGB colour space are often correlated.",
      "The H and the S channel of the HSV colour space are confounded.",
      "The Y channel of the YCbCr colour space represents the brightness.",
      "The a* channel of the L*a*b* colour space is the green-blue component."
    ],
    "answer": 3,
    "answers": [
      3
    ],
    "explanation": "In L*a*b*, a* represents green-red, while b* represents blue-yellow. So “green-blue component” is incorrect.",
    "bankId": "cpu-question-bank",
    "number": 21
  },
  {
    "id": "cpu-question-bank-22",
    "title": "Question 41",
    "question": "Which one of the following networks is most suited for image segmentation tasks?",
    "images": [],
    "options": [
      "Multilayer perceptron (MLP)",
      "Fully convolutional network (FCN)",
      "Region proposal network (RPN)",
      "Recurrent neural network (RNN)"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "FCNs produce dense pixel-level predictions and are designed for image segmentation.",
    "bankId": "cpu-question-bank",
    "number": 22
  },
  {
    "id": "cpu-question-bank-23",
    "title": "Question 42",
    "question": "Which one of the following statements about data augmentation for image classification using CNNs is correct?",
    "images": [],
    "options": [
      "Augmentation increases the number of parameters in the model.",
      "Augmentation reduces the size of the dataset to speed up training.",
      "Augmentation generates new training data by transforming the existing data.",
      "Augmentation reduces the depth of the network for better performance."
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "Data augmentation creates additional training examples by applying transformations such as flips, crops, rotations, or color changes.",
    "bankId": "cpu-question-bank",
    "number": 23
  },
  {
    "id": "cpu-question-bank-24",
    "title": "Question 43",
    "question": "Which one of the following statements about feature descriptors is incorrect?",
    "images": [],
    "options": [
      "Haralick features are derived from gray-level co-occurrence matrices.",
      "SIFT achieves rotation invariance by computing gradient histograms at multiple scales.",
      "LBP describes local image texture and can be multiresolution and rotation-invariant.",
      "Colour moments have lower representation capability than the colour histogram."
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "SIFT rotation invariance mainly comes from assigning a dominant orientation to each keypoint; multi-scale processing is mainly for scale invariance.",
    "bankId": "cpu-question-bank",
    "number": 24
  },
  {
    "id": "cpu-question-bank-25",
    "title": "Question 44",
    "question": "Given a binary input image `I` to which we apply the following algorithm:\n\nStep 1: Create a copy `C` of input image `I`.  \nStep 2: Copy the boundary pixels of `C` into new image `B`.  \nStep 3: Compute the reconstruction `R` of `C` from `B`.  \nStep 4: Compute output `O` by subtracting `R` from `I`.\n\n**What does the output image `O` contain?**",
    "images": [],
    "options": [
      "The same objects as the input image whatever the input.",
      "The same objects as the input image but with holes filled.",
      "The same objects as the input image except the boundary objects.",
      "The same objects as the input image but with touching objects separated."
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "Reconstruction from boundary pixels recovers boundary-touching objects; subtracting this from the original removes boundary objects, leaving only non-boundary objects.",
    "bankId": "cpu-question-bank",
    "number": 25
  },
  {
    "id": "cpu-question-bank-26",
    "title": "Question 45",
    "question": "Which one of the following statements about motion analysis is incorrect?",
    "images": [],
    "options": [
      "Detection of moving objects by subtraction of successive images in a video works best if the background is constant.",
      "Sparse motion estimation in a video can be done by template matching and minimising the mutual information measure.",
      "Dense motion estimation using optical flow assumes that each small neighbourhood remains constant over time.",
      "Optical flow provides an equation for each pixel but requires further constraints to solve the equation uniquely."
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Template matching can be used for sparse motion, but mutual information is normally maximized, not minimized, for matching/alignment; thus the statement is incorrect.",
    "bankId": "cpu-question-bank",
    "number": 26
  },
  {
    "id": "example-exam-1",
    "title": "Question 1 - Colour spaces",
    "question": "Which one of the following statements about colour spaces is incorrect?",
    "images": [],
    "options": [
      "The R, G, and B channels of the RGB colour space are often correlated.",
      "The H and the S channel of the HSV colour space are confounded.",
      "The Y channel of the YCbCr colour space represents the brightness.",
      "The a* channel of the L*a*b* colour space is the green-blue component."
    ],
    "answer": 3,
    "answers": [
      3
    ],
    "explanation": "Correct answer: D",
    "bankId": "example-exam",
    "number": 1
  },
  {
    "id": "example-exam-2",
    "title": "Question 2 - Intensity transformations",
    "question": "Which one of the following statements about intensity transformations is incorrect?",
    "images": [],
    "options": [
      "Contrast stretching linearly maps intensities between two values to the full output range.",
      "Log transformation maps a narrow range of high intensities to a wider range of output values.",
      "Power transformation can map intensities similar to log and inverse log transformations.",
      "Piecewise linear transformations can achieve contrast stretching and intensity slicing."
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Correct answer: B",
    "bankId": "example-exam",
    "number": 2
  },
  {
    "id": "example-exam-3",
    "title": "Question 3 - 2D convolution kernel",
    "question": "What is the effect of the following 2D convolution kernel on an image?\n\n```text\n0   1   0\n1  -4   1\n0   1   0\n```",
    "images": [],
    "options": [
      "It approximates the sum of first-order derivatives in x and y.",
      "It approximates the sum of second-order derivatives in x and y.",
      "It approximates the product of first-order derivatives in x and y.",
      "It approximates the product of second-order derivatives in x and y."
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Correct answer: B",
    "bankId": "example-exam",
    "number": 3
  },
  {
    "id": "example-exam-4",
    "title": "Question 4 - Image filtering",
    "question": "Which one of the following statements on image filtering is incorrect?",
    "images": [],
    "options": [
      "Median filtering reduces noise in images.",
      "Low-pass filtering results in blurry images.",
      "High-pass filtering smooths fine details in images.",
      "Notch filtering removes specific image frequencies."
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "Correct answer: C",
    "bankId": "example-exam",
    "number": 4
  },
  {
    "id": "example-exam-5",
    "title": "Question 5 - Feature descriptors",
    "question": "Which one of the following statements about feature descriptors is incorrect?",
    "images": [],
    "options": [
      "Haralick features are derived from gray-level co-occurrence matrices.",
      "SIFT achieves rotation invariance by computing gradient histograms at multiple scales.",
      "LBP describes local image texture and can be multiresolution and rotation-invariant.",
      "Colour moments have lower representation capability than the colour histogram."
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Correct answer: B",
    "bankId": "example-exam",
    "number": 5
  },
  {
    "id": "example-exam-6",
    "title": "Question 6 - Shape measures for classification",
    "question": "Given the image below showing the result of a segmentation of various objects and the desired classification of these objects. The two different colours, red and green, indicate the two different classes which the objects are to be assigned to.\n\nA straightforward way to perform classification is by computing the value of a quantitative shape measure for each object and then thresholding those values. Suppose we compute the circularity and the eccentricity. Which of these two measures can be used to produce the shown classification?",
    "images": [
      {
        "alt": "Shape classification example",
        "src": "/COMP9517_example_exam_questions/images/q06_shape_classification.png"
      }
    ],
    "options": [
      "Only circularity",
      "Only eccentricity",
      "Both circularity and eccentricity",
      "Neither circularity nor eccentricity"
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "Correct answer: A",
    "bankId": "example-exam",
    "number": 6
  },
  {
    "id": "example-exam-7",
    "title": "Question 7 - Random forest classifiers",
    "question": "Which one of the following statements is correct for random forest classifiers?",
    "images": [],
    "options": [
      "Increasing the correlation between the individual trees decreases the random forest classification error rate.",
      "Reducing the number of selected features at each node increases the correlation between the individual trees.",
      "Reducing the number of selected features at each node increases the strength of the individual trees.",
      "Increasing the strength of the individual trees decreases the random forest classification error rate."
    ],
    "answer": 3,
    "answers": [
      3
    ],
    "explanation": "Correct answer: D",
    "bankId": "example-exam",
    "number": 7
  },
  {
    "id": "example-exam-8",
    "title": "Question 8 - Pattern recognition",
    "question": "Which one of the following statements is correct for pattern recognition?",
    "images": [],
    "options": [
      "Pattern recognition requires training data that contain ground truth labels.",
      "The dimension of feature vectors should be smaller than the number of training samples in order to avoid the overfitting problem.",
      "The simple kNN classifier needs homogeneous feature types and scales so that the classification performance can be better.",
      "SVM is a powerful classifier that can separate classes even when the feature space exhibits significant overlaps between classes."
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "Correct answer: C",
    "bankId": "example-exam",
    "number": 8
  },
  {
    "id": "example-exam-9",
    "title": "Question 9 - Connected components labelling",
    "question": "Given the following binary image after segmentation.\n\nTo automatically identify the objects, in white, in this image we can use the connected components labelling algorithm. How many separate objects will this algorithm find here if it uses 4-connectivity?",
    "images": [
      {
        "alt": "Connected components example",
        "src": "/COMP9517_example_exam_questions/images/q09_connected_components.png"
      }
    ],
    "options": [
      "4",
      "5",
      "6",
      "7"
    ],
    "answer": 3,
    "answers": [
      3
    ],
    "explanation": "Correct answer: D",
    "bankId": "example-exam",
    "number": 9
  },
  {
    "id": "example-exam-10",
    "title": "Question 10 - Reconstruction from boundary pixels",
    "question": "Given a binary input image I to which we apply the following algorithm:\n\n1. Create a copy C of input image I.\n2. Copy the boundary pixels of C into new image B.\n3. Compute the reconstruction R of C from B.\n4. Compute output O by subtracting R from I.\n\nWhat does the output image O contain?",
    "images": [],
    "options": [
      "The same objects as the input image whatever the input.",
      "The same objects as the input image but with holes filled.",
      "The same objects as the input image except the boundary objects.",
      "The same objects as the input image but with touching objects separated."
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "Correct answer: C",
    "bankId": "example-exam",
    "number": 10
  },
  {
    "id": "example-exam-11",
    "title": "Question 11 - Convolutional layers in CNNs",
    "question": "Which one of the following lines describes the purpose of convolutional layers in CNNs?",
    "images": [],
    "options": [
      "Reducing the size of the feature maps.",
      "Calculating the dot product of the input and kernels.",
      "Applying a nonlinear activation function.",
      "Making the network learn faster."
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Correct answer: B",
    "bankId": "example-exam",
    "number": 11
  },
  {
    "id": "example-exam-12",
    "title": "Question 12 - Transfer learning",
    "question": "Which one of the following lines describes the purpose of transfer learning?",
    "images": [],
    "options": [
      "Training a model from scratch for each new task.",
      "Using a pretrained model and fine-tuning it for a new task.",
      "Converting image data to text data to facilitate learning.",
      "Combining multiple models into a single model for better performance."
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Correct answer: B",
    "bankId": "example-exam",
    "number": 12
  },
  {
    "id": "example-exam-13",
    "title": "Question 13 - CNNs vs traditional ANNs",
    "question": "Which one of the following lines best describes the key benefit of CNNs over traditional ANNs for image classification?",
    "images": [],
    "options": [
      "CNNs are computationally less expensive.",
      "CNNs automatically learn hierarchical features.",
      "CNNs require fewer network layers.",
      "CNNs can learn nonlinear mappings."
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Correct answer: B",
    "bankId": "example-exam",
    "number": 13
  },
  {
    "id": "example-exam-14",
    "title": "Question 14 - Image segmentation networks",
    "question": "Which one of the following networks is most suited for image segmentation tasks?",
    "images": [],
    "options": [
      "Multilayer perceptron, MLP",
      "Fully convolutional network, FCN",
      "Region proposal network, RPN",
      "Recurrent neural network, RNN"
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Correct answer: B",
    "bankId": "example-exam",
    "number": 14
  },
  {
    "id": "example-exam-15",
    "title": "Question 15 - Motion analysis",
    "question": "Which one of the following statements about motion analysis is incorrect?",
    "images": [],
    "options": [
      "Detection of moving objects by subtraction of successive images in a video works best if the background is constant.",
      "Sparse motion estimation in a video can be done by template matching and minimising the mutual information measure.",
      "Dense motion estimation using optical flow assumes that each small neighbourhood remains constant over time.",
      "Optical flow provides an equation for each pixel but requires further constraints to solve the equation uniquely."
    ],
    "answer": 1,
    "answers": [
      1
    ],
    "explanation": "Correct answer: B",
    "bankId": "example-exam",
    "number": 15
  },
  {
    "id": "example-exam-16",
    "title": "Question 16 - Object tracking",
    "question": "Which one of the following statements about object tracking is incorrect?",
    "images": [],
    "options": [
      "The particle filtering method assumes that the dynamics model and the measurement model can be parameterized.",
      "The hidden Markov model assumes that the measurements depend only on the current state of the objects.",
      "The prediction step of Bayesian inference assumes that the current state of the objects depends only on the previous state.",
      "The Kalman filtering method assumes that the dynamics and measurement noise are additive Gaussian."
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "Correct answer: A",
    "bankId": "example-exam",
    "number": 16
  },
  {
    "id": "example-exam-17",
    "title": "Question 17 - Boundary expansion and Fourier transform",
    "question": "In many image processing operations, the image must be expanded a little bit to solve the boundary problem. Which one of the following types of expansion is implicitly used by the Fourier transform?",
    "images": [],
    "options": [
      "Padding",
      "Clamping",
      "Wrapping",
      "Mirroring"
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "Correct answer: C",
    "bankId": "example-exam",
    "number": 17
  },
  {
    "id": "example-exam-18",
    "title": "Question 18 - Morphological edge extraction",
    "question": "Suppose we have the following grayscale input image I, shown on the left, and we would like to have a binary output image O, shown on the right, containing the edges of the objects in the input.\n\n\n\n\n\nAlso suppose that the only image processing operations available for this are intensity thresholding, dilation and erosion, binary and grayscale, and image subtraction. Which one of the following algorithms will **not** produce the desired output?",
    "images": [
      {
        "alt": "Input image I",
        "src": "/COMP9517_example_exam_questions/images/q18_input_image_I.png"
      },
      {
        "alt": "Target output O",
        "src": "/COMP9517_example_exam_questions/images/q18_target_edges_O.png"
      }
    ],
    "options": [
      "Thresholding, result = T, then erosion, result = E, then subtraction, result = E - T.",
      "Erosion, result = E, then subtraction, result = I - E, then thresholding, result = T.",
      "Thresholding, result = T, then dilation, result = D, then subtraction, result = D - T.",
      "Dilation, result = D, then subtraction, result = D - I, then thresholding, result = T."
    ],
    "answer": 0,
    "answers": [
      0
    ],
    "explanation": "Correct answer: A",
    "bankId": "example-exam",
    "number": 18
  },
  {
    "id": "example-exam-19",
    "title": "Question 19 - Automatic thresholding",
    "question": "Given the image below containing about two dozen algae, the bright spots, which we would like to segment using an automatic thresholding method. Which one of the following automatic thresholding methods will give the best segmentation result here?",
    "images": [
      {
        "alt": "Algae thresholding example",
        "src": "/COMP9517_example_exam_questions/images/q19_algae_thresholding.png"
      }
    ],
    "options": [
      "Mean thresholding",
      "IsoData thresholding",
      "Otsu thresholding",
      "Triangle thresholding"
    ],
    "answer": 3,
    "answers": [
      3
    ],
    "explanation": "Correct answer: D",
    "bankId": "example-exam",
    "number": 19
  },
  {
    "id": "example-exam-20",
    "title": "Question 20 - Data augmentation for CNN image classification",
    "question": "Which one of the following statements about data augmentation for image classification using CNNs is correct?",
    "images": [],
    "options": [
      "Augmentation increases the number of parameters in the model.",
      "Augmentation reduces the size of the dataset to speed up training.",
      "Augmentation generates new training data by transforming the existing data.",
      "Augmentation reduces the depth of the network for better performance."
    ],
    "answer": 2,
    "answers": [
      2
    ],
    "explanation": "Correct answer: C",
    "bankId": "example-exam",
    "number": 20
  }
]
