
// ***************************Shfting index by One*****************
// import java.util.*;
// public class Main {
//   static int[] shiftByOne(int[] arr){
//     int n = arr.length;
//     int lastElement = arr[n-1];
//     for(int i = n-2 ;i>=0 ;i--){
//       arr[i+1] = arr[i];
//     }
//     arr[0] = lastElement;
//     return arr;
//   }
//   public static void main(String[] args) {
//     // int[] arr = new int[5];
//     int[] arr = {1, 2, 3, 4, 5};
//     int[] result = shiftByOne(arr);

   
//    System.out.print(Arrays.toString(result));
      
//   }
// }

//**************************+++++++++++++++++++++++Same method using void********************************************
// import java.util.*;

// public class Main {
//     static void shiftByOne(int[] arr) {
//         int n = arr.length;
//         int temp = arr[n - 1];
//         for (int i = n - 2; i >= 0; i--) {
//             arr[i + 1] = arr[i];
//         }
//         arr[0] = temp;
//         // No return statement here
//     }

//     public static void main(String[] args) {
//         int[] arr = {1, 2, 3, 4, 5};
//         shiftByOne(arr); // just call the method, no return value
//         System.out.println(Arrays.toString(arr)); // print the modified array
//     }
// }
//**************************frequency of ********************

// public class Main {
//   static int frequencyOfK(int[] arr, int k){
//     int n = arr.length;
//     int count = 0 ;
//     for(int i = 0 ; i < n; i++){
//       if(arr[i] == k){
//         count ++;
//       }
//     }
//     return count;
//   }
//   public static void main(String[] args) {
//      int[] arr = { 1,2,3,4,5,4};
//      int k = 4;

//      System.out.println(frequencyOfK(arr,k));

//   }
// }

//**********************Swapping values******************

// public class Main {
//   static int[] swap(int a, int b){
//  int temp = b;
//   a = b; 
//   b = temp;
//   return new int[] {a,b};
   
//   }
//   public static void main(String[] args) {
//      int a = 3;
//      int b = 4;
   

//     System.out.println("a = " + a);
//     System.out.println("b = " + b);
    


//   }
// }

// ***********************ArrayList Methods****************************
// import java.util.*;
// public class Main {
//   public static void main(String[] args) {
//       ArrayList<Integer> al = new ArrayList<>();
//       al.add(1); //[1]
//       al.add(2);//[1,2]
//       al.add(3);//[1,2,3]
//       al.add(4);//[1,2,3,4]
//       al.add(5);//[1,2,3,4,5]
//       al.add(6);//[1,2,3,4,5,6]
//       al.add(7);//[1,2,3,4,5,6,7]
//       al.remove(2); //[1,2,4,5,6,7]
//       al.get(0); //1
//       al.set(1,30);//[1,30,4,5,6,7]
//       Collections.sort(al);
//       // System.out.println(al);//[1,4,5,6,7,30]
//       System.out.println(al.size());//6
      
//         }
// }

//***********************Increasing each value by One**************************
// import java.util.*;
// public class Main {
//   static void increaseByOne(ArrayList<Integer> al){
//    int n = al.size();
//    for(int i = 0 ; i< n ; i++){
//     al.set(i, al.get(i)+1);
//    }
//   }
//   public static void main(String[] args) {
//     ArrayList<Integer> al = new ArrayList<>();
//       al.add(1); //[1]
//       al.add(2);//[1,2]
//       al.add(3);//[1,2,3]
//       al.add(4);//[1,2,3,4]
//       al.add(5);//[1,2,3,4,5]
//       al.add(6);//[1,2,3,4,5,6]
//       al.add(7);//[1,2,3,4,5,6,7]
//       al.remove(2); //[1,2,4,5,6,7]
//       al.get(0); //1
//       al.set(1,30);//[1,30,4,5,6,7]
//       Collections.sort(al);
//       System.out.println(al);//[1,4,5,6,7,30]
//       // System.out.println(al.size());//6
//       increaseByOne(al);
//       System.out.println(al);
//   }
// }

// *******************Printing Even numbers using ArrayList************************
// import java.util.*;
// public class Main {
//   static ArrayList<Integer> evenNumber(ArrayList<Integer> al){
//     ArrayList<Integer> evenNums = new ArrayList<Integer>();
//    int n = al.size();
//   //  int output = 
//    for(int i = 0 ; i< n ; i++){
//     if(al.get(i)% 2==0){
//       evenNums.add(al.get(i));

//     }
//    }
//    return evenNums;
//   }
//   public static void main(String[] args) {
//     ArrayList<Integer> al = new ArrayList<>();
//       al.add(1); //[1]
//       al.add(2);//[1,2]
//       al.add(3);//[1,2,3]
//       al.add(4);//[1,2,3,4]
//       al.add(5);//[1,2,3,4,5]
//       al.add(6);//[1,2,3,4,5,6]
//       al.add(7);//[1,2,3,4,5,6,7]
//       al.remove(2); //[1,2,4,5,6,7]
//       Collections.sort(al);
//       System.out.println(al);
//       System.out.println(evenNumber(al));
      
//   }
// }

//ArrayList More examples to practise -->
// 1) ******************Remove all Odd Numbers********************
// import java.util.*;
// public class Main {
//   static ArrayList<Integer> oddNumber(ArrayList<Integer> al){
//     ArrayList<Integer> oddNums = new ArrayList<Integer>();
//    int n = al.size();
//   //  int output = 
//    for(int i = 0 ; i< n ; i++){
//     if(al.get(i)% 2!=0){
//       oddNums.add(al.get(i));

//     }
//    }
//    return oddNums;
//   }
//   public static void main(String[] args) {
//     ArrayList<Integer> al = new ArrayList<>();
//       al.add(1); //[1]
//       al.add(2);//[1,2]
//       al.add(3);//[1,2,3]
//       al.add(4);//[1,2,3,4]
//       al.add(5);//[1,2,3,4,5]
//       al.add(6);//[1,2,3,4,5,6]
//       al.add(7);//[1,2,3,4,5,6,7]
//       al.remove(2); //[1,2,4,5,6,7]
//       Collections.sort(al);
//       System.out.println(al);
//       System.out.println(oddNumber(al));
      
      
//   }
// }

// 2) ***************Sum of all the input number****************
// import java.util.*;
// public class Main {
//   static int sumOfNumber(ArrayList<Integer> al){
//     // ArrayList<Integer> sum = new ArrayList <Integer>();
//    int sum = 0;
//     int n = al.size();
//     for(int i = 0 ; i < n ; i++){
//      sum = sum + al.get(i);

//     }
//     return sum;
   
//   }
//   public static void main(String[] args) {

//       ArrayList<Integer> al = new ArrayList<>();
//       al.add(1);
//       al.add(2);
//       al.add(3);
//       al.add(4);
//       al.add(5);
//       al.add(6);
//       al.add(7);
      
//       System.out.println(al);
//       System.out.println(sumOfNumber(al));
//   }
// }

// 3) *******************Reversing an ArrayList*****************************
// import java.util.*;
// public class Main {
  
 
// static ArrayList<Integer> revArrayList(ArrayList<Integer> al){
//   ArrayList<Integer> rev = new ArrayList<>();
//   int n = al.size();
//   for(int i = n-1 ; i >=0 ; i--){
//     rev.add(al.get(i));
//   }
//   return rev;


//   }
//   public static void main(String[] args) {
    

//       ArrayList<Integer> al = new ArrayList<>();
//       al.add(1);
//       al.add(2);
//       al.add(3);
//       al.add(4);
//       al.add(5);
//       al.add(6);
//       al.add(7);
      
//       System.out.println(al);
//       System.out.println(revArrayList(al));
//   }
// }
