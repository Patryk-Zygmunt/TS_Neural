package pkp;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class Pkp {


    public static void main(String[] args) throws InterruptedException {
        Route route = new Route(10,1L);
        ExecutorService ex= Executors.newFixedThreadPool(4);
        ex.submit(()->route.makeReservation(2));
        ex.submit(()->route.makeReservation(2));
        ex.submit(()->{
            try {
               // Thread.sleep(100);
                route.makeReservation(2);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        });

            Thread.sleep(5000);

        System.out.println(route.getReservations());
        ex.shutdown();
    }


}
