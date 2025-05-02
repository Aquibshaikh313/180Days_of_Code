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
      
  

        
//   }
// }