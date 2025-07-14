// import java.util.*;
// public class Main {

// ==========================
// 1. SUM OF ARRAY ELEMENTS
// ==========================

  // Function to calculate sum of array elements
  // public static void sum(int[] arr){
  //   int sum = 0;
  //   // Loop through array and calculate sum
  //   // for(int i = 0; i < 4; i++){
  //   //   sum += arr[i];
  //   // }
  // }

  // main method to read input and call sum function
  // public static void main(String[] args) {
  //   Scanner scn = new Scanner(System.in);
  //   int[] arr = new int[4];
  //   // Take 4 inputs from user
  //   for(int i = 0; i < 4; i++){
  //     arr[i] = scn.nextInt();
  //   }
  //   // Print the sum (Note: sum is local in function above and not returned)
  //   // System.out.println(sum);
  // }

// ==========================
// 2. PRINTING ARRAY ELEMENTS
// ==========================

  // Function to print array elements
  // static void printArray(int[] arr){
  //   int n = arr.length; // size of array 
  //   for(int i = 0; i < 4; i++){
  //     System.out.println(arr[i]);
  //   }
  // }

  // public static void main(String[] args){
  //   Scanner scn = new Scanner(System.in);
  //   int[] arr = new int[4];
  //   // Take 4 inputs from user
  //   for(int i = 0; i < 4; i++){
  //     arr[i] = scn.nextInt();
  //   }
  //   // Call function to print the array
  //   printArray(arr);
  // }

// ==========================
// 3. INCREASE EACH VALUE BY 1
// ==========================

  // Function to increase each array value by 1
  // static void addOne(int[] arr){
  //   int n = arr.length;
  //   for(int i = 0; i < n; i++){
  //     arr[i] += 1;
  //   }
  // }

  // public static void main(String[] args){
  //   Scanner scn = new Scanner(System.in);
  //   int[] arr = new int[5];

  //   // 1. Take input
  //   for(int i = 0; i < 5; i++){
  //     arr[i] = scn.nextInt();
  //   }

  //   // 2. Call function to increase value
  //   addOne(arr);

  //   // 3. Print updated array
  //   int n = arr.length;
  //   for(int i = 0; i < n; i++){
  //     System.out.println(arr[i]);
  //   }
  // }

// ==========================
// 4. INITIALIZE ARRAY FROM 1 TO n
// ==========================

  public static void main(String[] args){
    // Take input for size of array
    Scanner scn = new Scanner(System.in);
    int n = scn.nextInt();

    int arr[] = new int[n];
    // Initialize array with values from 1 to n
    for(int i = 0; i < n; i++){
      arr[i] = i + 1;
    }

    // Print the array to check
    for(int i = 0; i < n; i++){
      System.out.println(arr[i]);
    }
  }

// } // end of Main class


// ==========================
// 5. CHECK IF ELEMENT EXISTS IN ARRAY
// ==========================

// Given an array of integers A and an integer B,
// determine whether B exists in the array.
// Return 1 if it exists, otherwise return 0.

// public class Solution {
  
//   // Function to check if B exists in array A
//   public int solve(int[] A, int B) {
//     int n = A.length;

//     // Loop through the array
//     for (int i = 0; i < n; i++) {
//       if (A[i] == B) {
//         return 1; // Found
//       }
//     }
//     return 0; // Not found
//   }

//   public static void main(String[] args) {
//     int[] A = {4, 1, 5, 9, 1};
//     int B = 5;

//     Solution s = new Solution();
//     int result = s.solve(A, B);
//     System.out.println(result); // Output will be 1 (true)
//   }
// } 
