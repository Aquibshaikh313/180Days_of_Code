
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