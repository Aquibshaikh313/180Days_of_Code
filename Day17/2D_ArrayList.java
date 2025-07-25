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
