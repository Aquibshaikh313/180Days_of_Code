import java.util.*;

public class Main {

    // Method to calculate the sum of two numbers
    static int sum(int a, int b) {
        return a + b;
    }

    // Method to calculate the sum using another approach
    static int sum2(int a, int b) {
        int sum = a + b;
        return sum;
    }

    // Method to find the maximum of two numbers
    static int maxOfTwo(int a, int b) {
        int max;
        if (a > b) {
            max = a;
        } else {
            max = b;
        }
        return max;
    }

    // Method to print the product of two numbers
    static void prodOfTwo(int a, int b) {
        int prod = a * b;
        System.out.println("Product: " + prod);
    }

    public static void main(String[] args) {

        // Math operations
        System.out.println("Math.pow(2, 7): " + Math.pow(2, 7));
        // System.out.println("Math.ceil(6.7): " + Math.ceil(6.7));
        // System.out.println("Math.floor(6.7): " + Math.floor(6.7));

        // Function calls
        System.out.println("Sum: " + sum(10, 20));
        System.out.println("Sum2: " + sum2(15, 25));
        System.out.println("Max: " + maxOfTwo(5, 6));
        prodOfTwo(3, 4);
    }
}
