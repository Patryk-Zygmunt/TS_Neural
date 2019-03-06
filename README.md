
https://www.kdnuggets.com/2018/10/simple-neural-network-python.html

Training Set
```
 input->   out->    weight->
 [0,0,1],  [0]      [rand(-1),1]
 [1,1,1],  [1]      [rand(-1),1]
 [1,0,1]   [1]      [rand(-1),1]
 [0,1,1]   [0]
    
````
Train
 ```
for 0 .. iteracje
  //obliczenie wyjścia neuronu, mnożenie macierzy i wyskalowanie funkcją aktywacji
  actual_result = sigmoid(input * weights) 
  // obliczenie różnicy między wyjściem danych treningowych a resultatem
  error = out - actual_result
   /// pocho
  error_der = error dotMultiply? sigmoid`(actual_result)
  // obliczenie jak należy zmienić każdą z wag
  adjustments = input.T * error_der
  weight = weight + adjsustments  
 ```
 
 Nowa Sytuacja
 
` 0 =~ sigmoid([0,1,0] * weights) `