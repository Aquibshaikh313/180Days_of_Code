import java.util.*;
public class Main {
  public static void main(String[] args) {
      Scanner scn = new Scanner(System.in);

      //we need to run N-rows and M-columns
      int N = scn.nextInt();
      int M = scn.nextInt();

      // create 2-D array 
      int[][] mat = new int[N][M];

      //Read 2-D array elements 
      for(int i = 0 ; i < N ; i++){
        //for every N-row we need to read M-columns 
        //(0,0), (0,1), (0,2) ,(0,3).....(0,M-1)
        for(int j = 0 ; j < M ; j++){
          mat[i][j] =  scn.nextInt();
        }
      }
  }
}

//Dry Run for creating input -->
// i = 0    j = 0       1         2           3
//         (0,0)=1   (0,1)=2   (0,2)=3     (0,3)=4

// i = 1   (1,0)=5   (1,1)=6   (1,2)=7     (1,3)=8

// i = 2   (2,0)=9   (2,1)=10   (2,2)=11     (2,3)=12

//print (0,1) -->

import java.util.*;
public class Main {
  static void printRowZero(int [][] mat){
    int col = mat[0].length;
     for(int i = 0 ; i < col ; i++){
       System.out.print(mat [0][i] + " ");
      }
  }
  public static void main(String[] args) {
      Scanner scn = new Scanner(System.in);

      //we need to run N-rows and M-columns
      int N = scn.nextInt();
      int M = scn.nextInt();
     

      // create 2-D array 
      int [][] mat = new int[N][M];

      // Input elements
        System.out.println("Enter elements row-wise:");
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < M; j++) {
                mat[i][j] = scn.nextInt();
            }
        }

      printRowZero(mat);
      

      
     
  }
} 
// input
// 3 4
// 1 2 3 4 
// 5 6 7 8 
// 9 10 11 12

//output -->
// Enter elements row-wise:
// 1 2 3 4

//Printing all rows***********************
import java.util.*;
public class Main {
  static void printAllRows(int [][] mat){
    int row = mat.length;
    int col = mat[0].length;
    for(int r = 0 ; r < row ; r++){
       for(int c = 0 ; c < col ; c++){
       System.out.print(mat [r][c] + " ");
      }
       System.out.println();
    }
   
  }
  public static void main(String[] args) {
      Scanner scn = new Scanner(System.in);

      //we need to run N-rows and M-columns
      int N = scn.nextInt();
      int M = scn.nextInt();
     

      // create 2-D array 
      int [][] mat = new int[N][M];

      // Input elements
        System.out.println("Enter elements row-wise:");
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < M; j++) {
                mat[i][j] = scn.nextInt();
            }
        }

      printAllRows(mat);
      

      
     
  }
} 
// input 3 4
// output: 
// Enter elements row-wise:
// 1 2 3 4 
// 5 6 7 8 
// 9 10 11 12 









