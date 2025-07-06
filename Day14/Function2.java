// // import java.lang;
// public class Main {
//   public static void test2() {
// //   // static double areaofcirle(int R){
// //   //  double area = Math.PI * R * R ;

// //   //  return area;

// //   // }
//   System.out.println("Hi");
//   return ;

// }


//   public static void main(String[] args) {
// //     // Scanner scn = new Scanner(System.in);
// //     // int radius = scn.nextInt();

// //     // double area = areaofcirle(radius);
// //     // System.out.print(area);
//     test2();
//     System.out.println("hello");
      
//   }
// }

// //Example 2 :
// // public class Main {
// // public static boolean isEven(int N){
// //   if(N%2==0){
// //     return true ;
// //   }else{
// //     return false;
// //   }
 
// // }
// // public static void main(String[] args){
// //   System.out.println(isEven(60));
// //   System.out.println("Hello");
// // }
// // }

// public class Main {
//   public static void EvenOdd(int N){
//     if(N%2 == 0){
//       System.out.println("Even");
//       return;
//     }
//     System.out.println("odd");

// }   public static void main(String [] args){
//     EvenOdd(10);
//     System.out.println("hello");
//    }
// }


public class Main{
  public static int check(int N){ // 3) see here its int ,if it was void it would have worked
    System.out.print(N + 10);// 1) it will become 25 here but 
    //2) in next line no return statement even that would have work if data type was void 
  }
  public static void main(String[] args){
     check(15);
    //  System.out.print(check);
  }
}
import java.util.*;
public class Main {
  //how the quiz was
  // public static int even(int n){
  //   if(n % 2 == 0)
  //   {
  //     return 2;
  //   }
  // }
  // public static void main(String[] args) {
  //   int a = even(10);
  //   System.out.print(a);
     
  // } //there will be error bcz no else statement for odd

  // 2) how i improve it to make it correct>
  // public static int even(int n){
  //   if(n % 2 == 0)
  //   {
  //     return 0;
  //   }else{
  //     return 1 ;
  //   }
  // }
  // public static void main(String[] args) {
  //   int a = even(10);
  //   System.out.print(a);
     
  // }

  // 3) if want to print ans as even or odd then just add data type String
  
  // public static String even(int n){
  //   if(n%2 ==0){
  //     return "even";
  //   }else{
  //     return "odd";
  //   }

  // }
  // public static void main(String[] args){
  //   String a = even(10);
  //   System.out.println(a);
  // }

// 4) if want to make it true or false just replace it by boolean
  // public static boolean even(int n){
  //   if(n%2 == 0){
  //     return true ;
  //   }
  //   else{
  //     return false;
  //   }
    
  // }
  // public static void main(String[] args){
  //   boolean a = even(10);
  //   System.out.print(a);
  // }


  //Perfect Square 
//   public static boolean isPerfectSquare(int N){
//     for(int i=1; i*i<=N ; i++){
//       if(i*i == N){
//         return true;
//       }
     
//     }
//     return false;// only return false after checking all i values
    

//   }
//   public static void main (String[] args){
//     Scanner scn = new Scanner(System.in);
//     int N = scn.nextInt();
//     System.out.print(isPerfectSquare(N));
//   }
// }

//calucating sum of factors
// static int sumOfFactorial(int N){
//   int ans = 0;
//   for(int i=1;i<=N;i++){
//     if(N%i == 0){
//        ans+=i;
//     }
//   }
//   return ans;

// }
//   public static void main(String [] args){
//     Scanner scn = new Scanner(System.in);
//     int N = scn.nextInt();
//     System.out.println(sumOfFactorial(N));

    
//   }

// public static int sum(int a, int b){
//   return a + b; //after return statement nothing should be there so it will show error
//   System.out.print("Hello");
// }


// public static void main(String[] args){
//   int x = 10; int y = 20;
//   System.out.println(sum(x,y));
// }
// }
