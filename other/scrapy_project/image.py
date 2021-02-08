import cv2
import numpy as np
import os

path1="./file/before/"
path2="./file/data/"
 
for root,dirs,files in os.walk(path1):
    num=0
    for file in files:
        print(file, end=' - - - ')
        try:
            img = cv2.imread(path1+file, cv2.IMREAD_GRAYSCALE)
            img = cv2.GaussianBlur(img,(3,3),0)
            x = cv2.Sobel(img,cv2.CV_16S,1,0)
            y = cv2.Sobel(img,cv2.CV_16S,0,1)
            absX = cv2.convertScaleAbs(x)
            absY = cv2.convertScaleAbs(y)
            img = cv2.addWeighted(absX,0.5,absY,0.5,0)
            img = cv2.resize(img, (255,255))
            cv2.imwrite(path2+file[:len(file)-4]+'!.jpg', cv2.bitwise_not(img))
            img = cv2.imread(path1+file, cv2.IMREAD_COLOR)
            img = cv2.resize(img, (255,255))
            cv2.imwrite(path2+file, img)
        except Exception as e:
            print('error')
            print(e)
        else:
            num+=1
            print('ok')
    print('Total : '+str(num))
        