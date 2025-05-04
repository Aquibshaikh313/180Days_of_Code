// import java.util.*;
// public class Main {
//   public static void main(String[] args) {
    
//     //print 1 to 5

//     // for(int i=1;i<=5;i++){
//     //   System.out.print(i + " ");
//     // }
//     // Scanner scn = new Scanner(System.in);
//     // int n = scn.nextInt();

//     // Even number between 1 to n
//     // Scanner sc = new Scanner(System.in);
//     // int n = sc.nextInt();
//     // for(int i=1; i<=n;i++){
//     //   if(i%2==0){
//     //     System.out.print(i + " ");
//     //   }
//     // }
//     // Alternate method for even numbers
//     // Scanner sc = new Scanner(System.in);
//     // int n = sc.nextInt();
//     // for(int i=2; i<=n;i+=2){
//     //   System.out.print(i + " ");
//     // }
    
//     // print any no. seprately in reverse order
//     //  Scanner sc = new Scanner(System.in);
//     // int n = sc.nextInt();
//     // while(n>0){
//     //   int digit = n%10;
//     //   System.out.print(digit + " ");
//     //   n = n/10;// i.e n/=10;
//     // }
    
//     //same thing by using for loop
//     // for(  ; n>0 ; n/=10 ){
//     //   int digit = n%10;
//     //   System.out.print(digit + " ");
//     // }

//     //if the input is negative
//     // Scanner scn = new Scanner(System.in);
//     // int n = scn.nextInt();
//     // if(n<0){
//     //   n = n * -1;
      
//     // }else if (n==0){
//     //   System.out.print(0);
//     // }
    
//     //  while(n>0){
//     //   int digit = n%10;
//     //   System.out.print(digit + " ");
//     //   n = n/10;
//     // }

//     // for(  ; n>0 ; n/=10 ){
//     //   int digit = n%10;
//     //   System.out.print(digit + " ");
//     // }

//     //count the number of iterations:
//     // Scanner scn = new Scanner(System.in);
//     // int n = scn.nextInt();
//     // int count = 0;
    
//     // while(n>0){
//     //   n/=10;
//     //   count++;
     
//     // }
//     //  System.out.print(count);
    
//     // for( ;n>0;n/=10){
//     //      count++;

//     // }
//     // System.out.print(count);

//     // Scanner scn = new Scanner(System.in);
//     // int n = scn.nextInt();
//     // int count = 0;
//     // for(int i = n; i>0; i/=10){
//     //   count++;
//     // }
//     // System.ut.print(count);

//      Scanner scn = new Scanner(System.in);
//      int n = scn.nextInt();
    
//      if( n < 0){
//       n = n * -1;

//     }
//      int sum = 0;
//     // while(n>0){
//     //   int digit = n%10;
//     //    sum = sum + digit;
//     //   n/=10;
//     // }
//     // System.out.print(sum);

//     for( ; n>0 ; n/=10){
//       int digit = n%10;
//       sum = sum + digit;
//     }
//     System.out.print(sum);
      
  

        
//   }
// }import java.util.*;
// public class Main {
//   public static void main(String[] args) {
    
//     //print 1 to 5

//     // for(int i=1;i<=5;i++){
//     //   System.out.print(i + " ");
//     // }
//     // Scanner scn = new Scanner(System.in);
//     // int n = scn.nextInt();

//     // Even number between 1 to n
//     // Scanner sc = new Scanner(System.in);
//     // int n = sc.nextInt();
//     // for(int i=1; i<=n;i++){
//     //   if(i%2==0){
//     //     System.out.print(i + " ");
//     //   }
//     // }
//     // Alternate method for even numbers
//     // Scanner sc = new Scanner(System.in);
//     // int n = sc.nextInt();
//     // for(int i=2; i<=n;i+=2){
//     //   System.out.print(i + " ");
//     // }
    
//     // print any no. seprately in reverse order
//     //  Scanner sc = new Scanner(System.in);
//     // int n = sc.nextInt();
//     // while(n>0){
//     //   int digit = n%10;
//     //   System.out.print(digit + " ");
//     //   n = n/10;// i.e n/=10;
//     // }
    
//     //same thing by using for loop
//     // for(  ; n>0 ; n/=10 ){
//     //   int digit = n%10;
//     //   System.out.print(digit + " ");
//     // }

//     //if the input is negative
//     // Scanner scn = new Scanner(System.in);
//     // int n = scn.nextInt();
//     // if(n<0){
//     //   n = n * -1;
      
//     // }else if (n==0){
//     //   System.out.print(0);
//     // }
    
//     //  while(n>0){
//     //   int digit = n%10;
//     //   System.out.print(digit + " ");
//     //   n = n/10;
//     // }

//     // for(  ; n>0 ; n/=10 ){
//     //   int digit = n%10;
//     //   System.out.print(digit + " ");
//     // }

//     //count the number of iterations:
//     // Scanner scn = new Scanner(System.in);
//     // int n = scn.nextInt();
//     // int count = 0;
    
//     // while(n>0){
//     //   n/=10;
//     //   count++;
     
//     // }
//     //  System.out.print(count);
    
//     // for( ;n>0;n/=10){
//     //      count++;

//     // }
//     // System.out.print(count);

//     // Scanner scn = new Scanner(System.in);
//     // int n = scn.nextInt();
//     // int count = 0;
//     // for(int i = n; i>0; i/=10){
//     //   count++;
//     // }
//     // System.ut.print(count);

//      Scanner scn = new Scanner(System.in);
//      int n = scn.nextInt();
    
//      if( n < 0){
//       n = n * -1;

//     }
//      int sum = 0;
//     // while(n>0){
//     //   int digit = n%10;
//     //    sum = sum + digit;
//     //   n/=10;
//     // }
//     // System.out.print(sum);

//     for( ; n>0 ; n/=10){
//       int digit = n%10;
//       sum = sum + digit;
//     }
//     System.out.print(sum);

    //for loop Assignments 
    // Given an integer input N, print all multiples of 4 less than or equal to N.

  // Scanner scn = new Scanner(System.in);
  // int n = scn.nextInt();

  // for(int y = 1 ; y<=n ;y++ ){
  //   if(y%4==0){
  //      System.out.print(y + " ");
  //   }//4 8 12 16
  
  // }
  
  // Write a program to print all Natural numbers from N to 1 where you have to take N as input from user
  // Scanner scn = new Scanner(System.in);
  // int n = scn.nextInt();
  // for( ;n>=1;n--){
  //   System.out.print(n + " ");
  // }//5 4 3 2 1

  // }

  // Scanner scn = new Scanner(System.in);
  // int n = scn.nextInt();
  // for( ;n<=5;n++){
  //   System.out.print(n + " ");
  // }//1 2 3 4 5


  // Scanner scn = new Scanner(System.in);//input 1140
  // int n = scn.nextInt();
  
  // int lastDigit = n%10;
  // System.out.print(lastDigit);//0


  // }

  // Scanner scn = new Scanner(System.in);//1245
  // int n = scn.nextInt();

  // for(  ;n>=1; n/=10){
  //   int digit = n%10;
  //   System.out.print(digit + " ");
  // }//5421

//if value is negative
//   Scanner scn = new Scanner(System.in);//-1245
//   int n = scn.nextInt();
//   if (n<=0){
//     n = n * -1;
//   }
//   for(  ;n>=1; n/=10){
//     int digit = n%10;
//     System.out.print(digit + " ");
//   }

  // Scanner scn = new Scanner(System.in);//123
  // int n = scn.nextInt();

  // int sum = 0;

  // for( ;n>=1;n/=10){
  //   int digit = n%10;
  //   sum = sum + digit;

  // }
  // System.out.print(sum);//6

  // Given two numbers, A and B, your task is to print all the numbers
  //  in the range from A to B (both inclusive), with each number followed
  //  by a space, including the last number.
  
  // input 5 10
  // Scanner scn = new Scanner(System.in); 
  // int y = scn.nextInt();
  // int x = scn.nextInt();

  // for( ;y<=x ; y++){
  //   System.out.print(y + " " );
  //  // output 5 6 7 8 9 10
  // }

  // You have a number N, you have to write a code to 
  // find odd digit sum and even digit sum from given number and print it.

  // Scanner scn = new Scanner(System.in);
  // int n = scn.nextInt();
  // int evenSum = 0;
  // int oddSum = 0;

  // for(  ; n>0 ; n/=10){
  //   int digit = n%10;

  //   if(digit%2==0){
  //     evenSum +=  digit;
  //   }else{
  //     oddSum +=digit;
  //   }
  // }
  // System.out.println("sum even no. is " + evenSum);
  // System.out.println("sum of odd no. is " + oddSum);
      
  

        
//   }
// }