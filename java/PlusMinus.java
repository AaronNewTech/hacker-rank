import java.util.List;

public class PlusMinus {
    public static void plusMinus(List<Integer> arr) {
        // values to store frequency of positive, negative, and zero values in the array
        int plus = 0;
        int minus = 0;
        int zero = 0;

        // loop to iterate over the list and count the frequency of positive, negative, and zero values
        for (int i = 0; i < arr.size(); i++) {
            int num = arr.get(i);

            // check if value is positive and increment counter
            if (num > 0) {
                plus++;
            }
            // check if value is negative and increment counter
            else if (num < 0) {
                minus++;
            }
            // check if value is zero and increment counter
            else {
                zero++;
            }
        }

        // divide the frequency of positive, negative, and zero values by the size of the list
        // to get the ratios of positive, negative, and zero instances
        double total = arr.size();
        double plusRatio = plus / total;
        double minusRatio = minus / total;
        double zeroRatio = zero / total;

        // sets the number of decimal places for positive, negative, and zero occurrence ratios
        System.out.println(String.format("%.6f", plusRatio));
        System.out.println(String.format("%.6f", minusRatio));
        System.out.println(String.format("%.6f", zeroRatio));
    }

    public static void main(String[] args) {
        // Example usage with a List
        List<Integer> numbers = List.of(-4, 3, -9, 0, 4, 1);
        plusMinus(numbers);
    }
}
