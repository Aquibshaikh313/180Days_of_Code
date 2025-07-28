//Printing the ArrayList -->
import java.util.*;

public class Main {
  static void print (ArrayList<ArrayList<Integer>> arr ){
    int n = arr.size();
  
    //iterate over each rows 
    for(int i = 0 ; i < n ; i++){
      //Get no. of columns in current rows  -->
      int m = arr.get(i).size(); //no. of columns in current rows
      for(int j = 0 ; j < m ; j ++ ){
        System.out.print(arr.get(i).get(j) + " ");
      }
      System.out.println();
    }
  }

  public static void main(String[] args) {
    Scanner sc = new Scanner (System.in);

    int n = sc.nextInt();
    int m = sc.nextInt();

    //2D ArrayList matrix

    ArrayList<ArrayList<Integer>> arr = new ArrayList<>();
    
      for (int i = 0; i < n; i++) {
      ArrayList<Integer> row = new ArrayList<>();
      for (int j = 0; j < m; j++) {
        int colNum = sc.nextInt();
        row.add(colNum);  // add colnum to the row
      }
           arr.add(row); // add row to the main 2D list
    }
    print(arr);
  
  }
}
//Input     output
2 3         
1 2 3       1 2 3
4 5 6       4 5 6

import java.util.*;

public class Main {

    public static ArrayList<ArrayList<Integer>> Solve(ArrayList<ArrayList<Integer>> al) {
        int n = al.size(); // number of rows
        int m = al.get(0).size(); // number of columns

        ArrayList<ArrayList<Integer>> ans = new ArrayList<>();

        for (int i = 0; i < n; i++) {
            ArrayList<Integer> uniq = new ArrayList<>();
            for (int j = 0; j < m; j++) {
                int ele = al.get(i).get(j);
                if (freq(al.get(i), ele) == 1) {
                    uniq.add(ele);
                }
            }
            ans.add(uniq); // should be inside the loop
        }

        return ans;
    }

    public static int freq(ArrayList<Integer> al, int K) {
        int count = 0;
        for (int i = 0; i < al.size(); i++) {
            if (al.get(i)== K) { // use equals for Integer comparison
                count++;
            }
        }
        return count;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter number of rows: ");
        int n = sc.nextInt();
        System.out.print("Enter number of columns: ");
        int m = sc.nextInt();

        ArrayList<ArrayList<Integer>> input = new ArrayList<>();

        System.out.println("Enter the matrix elements:");
        for (int i = 0; i < n; i++) {
            ArrayList<Integer> row = new ArrayList<>();
            for (int j = 0; j < m; j++) {
                row.add(sc.nextInt());
            }
            input.add(row);
        }

        ArrayList<ArrayList<Integer>> result = Solve(input);

        System.out.println("Unique elements in each row:");
        for (ArrayList<Integer> row : result) {
            for (int val : row) {
                System.out.print(val + " ");
            }
            System.out.println();
        }
    }
}
