import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.function.*;
import java.util.regex.*;
import java.util.stream.*;
import static java.util.stream.Collectors.joining;
import static java.util.stream.Collectors.toList;

public class MiniMaxSum {
    public static void miniMaxSum(List<Integer> arr) {
        // Create a mutable ArrayList
        List<Integer> mutableList = new ArrayList<>(arr);

        // Sort the array
        Collections.sort(mutableList);

        // Calculate the sum of all elements
        long totalSum = mutableList.stream().mapToLong(Integer::longValue).sum();

        // Calculate the minimum and maximum sums
        long minSum = totalSum - mutableList.get(mutableList.size() - 1);
        long maxSum = totalSum - mutableList.get(0);

        System.out.println(minSum + " " + maxSum);
    }

    public static void main(String[] args) {
        // Example usage with a List
        List<Integer> numbers = Arrays.asList(256741038, 623958417, 467905213, 714532089, 938071625);
        miniMaxSum(numbers);
    }
}
