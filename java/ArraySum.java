class ArraySum {

  public void sum(int[] list) {
    int sum = 0;
    int[] lst = list;
    for (int i=0; i<lst.length; i++) {
      sum += lst[i];
    };
    System.out.println("sum :- " + sum);
  };

  public static void main(String[] args) {
    int[] lst = {2,3,4,1};
    ArraySum as = new ArraySum();
    as.sum(lst);
  };
};
