// import java.util.*;
// public class Main {



//  //Calculating sum;
//   // public static void sum(int[] arr){
//   //   int sum = 0;
//   // //     for(int i =0;i<4;i++){
//   // //       sum+= arr[i];
//   // //     }
//   // }
//   // // public static void main(String[] args) {
//   // //     Scanner scn = new Scanner(System.in);
//   // //     int[] arr = new int[4];
//   // //     for(int i=0;i<4;i++){
//   // //       arr[i]=scn.nextInt();
//   // //     }
//   // //    
//   // //     System.out.println(sum);
//   // // }


// //printing array 
//   //  static void printArray(int[] arr){
//   //   int n = arr.length; //size of array 
//   //    for(int i =0;i<4;i++){
//   //       System.out.println(arr[i]);
//   //     }
//   //  }

//   // public static void main(String[] args){
//   //   Scanner scn = new Scanner(System.in);
//   //     int[] arr = new int[4];
//   //     for(int i=0;i<4;i++){
//   //       arr[i]=scn.nextInt();
//   //     }

//   //     printArray(arr);

      


//   // }


//   // increasing each value by 1

//   // static void addOne(int[] arr){
//   //   int n = arr.length;
//   //   for(int i =0; i<n;i++){
//   //     arr[i] += 1;
//   //   }
//   // }

//   // public static void main(String[] args){
//   //   Scanner scn = new Scanner(System.in);
//   //   int[] arr = new int[5];

//   //   //1 take the input 
//   //   for(int i =0; i< 5;i++){
//   //     arr[i] = scn.nextInt();
//   //   }
  
//   // //2 write a function that increases the 
//   // // value of array element by 1
//   //  addOne(arr);

//   //  //Print and check the value of the array
//   //  int n = arr.length;
//   //  for(int i =0;i<n;i++){
//   //   System.out.println(arr[i]);
//   //  }
//   // }

 

//   public static void main(String[] args){
//     //Write a code to initialize an array
//     //in increasing order from 1 to n
   
//    //checking input 
//     Scanner scn = new Scanner(System.in);
//     int n = scn.nextInt();

//     int arr[] = new int[n];
//     //arr --> 0,1,2.3,4.... n-1
//     // we want output like this--> 1,2,3,4,...n
//     for(int i=0;i<n;i++){
//             arr[i] = i+1;
//           }

    
//    //check and print the array
//    for(int i = 0;i < n;i++){
//      System.out.println(arr[i]);
//    }


//   }


// }

// Given an array of integers A and an integer B, determine whether B exists in the array.
// Return 1 if it exists, otherwise return 0.
      
// public class Solution {
//   public int solve(int[] A, int B) {
//     int n = A.length;

//     for (int i = 0; i < n; i++) {
//       if (A[i] == B) {
//         return 1;
//       }
//     }
//     return 0;
//   }

//   public static void main(String[] args) {
//     int[] A = {4, 1, 5, 9, 1};
//     int B = 5;

//     Solution s = new Solution();
//     int result = s.solve(A, B);
//     System.out.println(result);
//   }
// }

