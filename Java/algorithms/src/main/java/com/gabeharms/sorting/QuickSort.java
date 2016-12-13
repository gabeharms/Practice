package com.gabeharms.sorting;

import java.util.List;

public class QuickSort<T extends Comparable<T>> extends SortingAlgorithm<T>
{

  public QuickSort(List<T> list)
  {
    super(list);
  }

  public List<T> sort() {
    quickSort(0, list.size()-1);

    return this.list;
  }

  private void quickSort(int start, int end)
  {
    if (end-start > 2)
    {
      int partition = partitionArray(start, end);
      quickSort(0, partition-1);
      quickSort(partition+1, end);
    }
  }

  private int partitionArray(int start, int end)
  {
    int swaps = 0;
    T partitionValue = list.get(end);
    for (int i = start; i <= end; i++)
    {
      if (isGreaterThan(list.get(i), partitionValue))
      {
        moveValueFromTo(i, getPartitionIndex(end, swaps)-1);
        swaps++;
        i--;
      }
    }

    moveValueFromTo(getPartitionIndex(end, swaps), end); // Moves partitionValue to the partitionIndex
    return end-swaps;
  }

  private boolean isGreaterThan(T aValue, T bValue)
  {
    return aValue.compareTo(bValue) > 0;
  }

  private void swap(int a, int b) {
    T aValue = list.get(a);
    list.set(a, list.get(b));
    list.set(b, aValue);
  }

  private int getPartitionIndex(int end, int swaps)
  {
    return end-swaps;
  }

  private void moveValueFromTo(int oldIndex, int newIndex)
  {
    T partitionValue = list.remove(oldIndex);
    list.add(newIndex, partitionValue);
  }

  public static void main( String[] args )
  {
    System.out.println( "Hello World!" );
  }
}