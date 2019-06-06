/*
Beginner - Reduce but Grow
Level: 8 kyu
Given a non-empty array of integers, return the result of multiplying the values together in order. 

Example:
[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
*/

public class Kata
{
  public static int Grow(int[] x)
  {
    var result = 1;
    for(var i = 0; i < x.Length; i++)
      result *= x[i];
    return result;
  }
}