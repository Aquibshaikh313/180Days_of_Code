
// public class Main {
//   public static void main(String[] args) {
//   //  int a = 'A';
//   //  System.out.print(a);//65
//     // System.out.println((char)65);//A  implicit typecasting

//   //  char a = 'A';
//   //  System.out.println(a); //A
//   // if(ch>= 90){
//   //   System.out.println("Greater");
//   //     }else{
//   //       System.out.println("Smaller");
//   //     }
     

//   //    if('a'>'A'){
//   //   System.out.println("true");
//   // }else{
//   //   System.out.println("false");
//   // }
//   String str = "sanjay shettigar";
//   // System.out.print(str.charAt(3));//j
//   // System.out.print(str.length()); //6 counts space also
  
// //substring
// // startIndex is inclusive → it starts from this index.
// // endIndex is exclusive → it stops before this index.

//   // System.out.print(str.substring(2,5));//nja

//   String name = "Aquib shaikh";
//     // System.out.print(name.substring(8));//hettigar
//     System.out.print(name.substring(6,name.length()));i.e(6,12) // shaikh  indexing starts from 0

 //      String name = "Aquib";
//      System.out.print(name.substring(8));//code will run successfully but nothing will be printed because only 5 is the length 
//      System.out.print(name.substring(6,name.length()));
//      System.out.println(name.indexOf("shaikh",3));6 remember always indexing starts from 0

String name2 = "Aquib";
// for(int i = 0; i < name2.length(); i++){
//   System.out.println("character at " + i + " is : " + name2.charAt(i));
// }
//output -->
// Character at 0 is :A
// Character at 1 is :q
// Character at 2 is :u
// Character at 3 is :i
// Character at 4 is :b



//   }
  
  
// }
// import java.util.*;
// public class Main {
//   public static void main(String[] args) {
//       // char ch2 = 68;
//       // System.out.print(ch2); //D

//       // char ch = 'A';
//       // ch+=2;//implicit typecasting output comes C
//       // ch = ch + 2; // needs an explicit typecasting error comes here  
//       // System.out.print(ch);//error
//       // String name = "Aquib Shaikh";
//       // System.out.print(name.indexOf('x')); // when the character is not present the it gives output as -1;
//       Scanner sc = new Scanner(System.in);
      
//       // String input = "Hello world";
//       // String s1 = sc.nextLine();
//       // System.out.println(s1);
//       // String s2 = sc.nextLine();
//       // System.out.println(s2);

//       char ch = sc.next().charAt(0);
//       System.out.println(ch);

//   }
// }

// import java.util.*;
// public class Main {
//   public static void main(String[] args) {
//     // Scanner scn = new Scanner(System.in);
//     // int N = scn.nextInt();

//     // for(int i=1;i<=N;i++){
//     //   for(int j=0;j<i;j++){
//     //     System.out.print((char)('A'+ j) + "_");
//     //   }
//     //   System.out.println();

//alternate method
//     Scanner sc = new Scanner(System.in);
//       int N = sc.nextInt();
//       for(int i = 1;i<=N;i++){
//           char A = 'A';
//           for(int j=0;j<i;j++){
//             System.out.print(A +"_");
//             A++;  
//           }
//           System.out.println();
//     }
     
      
//   }
// }

//Removing last word from string

// import java.util.*;
// public class Main {
//   public static void main(String[] args) {
//     Scanner sc = new Scanner (System.in);
//     String str = sc.next();
//     // String str = "Sanjay";
//     for(int i = 0 ; i < str.length()-1 ; i++){
//       // System.out.println( "Character at " + i + "is :"  str.charAt(i));
//       System.out.print( str.charAt(i));
//     }
     
//   }
// }
