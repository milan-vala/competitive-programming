public class HelloWorld{
    public static void main(String []args){
         
        int n=4;
     
        for(int i=0; i<8; i++){
            for(int k=0; k<n; k++){
                for(int j=0; j<9; j++){
                    if(i==0){
                        if(j>3){
                            System.out.print("*");
                        }
                        else{
                            System.out.print(" ");
                        }
                    }
                    else if(i==7){
                        if(j<5 || j==8){
                            System.out.print("*");
                        }
                        else{
                            System.out.print(" ");
                        }
                    }
                    else{
                        if(j==4 || j==8){
                            System.out.print("*");
                        }
                        else{
                            System.out.print(" ");
                        }
                    }
                }
            }
            System.out.println();
        }
    }
}