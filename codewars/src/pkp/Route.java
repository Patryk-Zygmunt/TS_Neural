package pkp;

import java.time.LocalTime;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class Route {
    private List<Integer> places = new LinkedList();
    private Long id;
    private LocalTime departure;
    private LocalTime arrival;
    private boolean b = false;
    private List<Integer> reservations;

    public Route(int placesAmount, Long id) {
        this.reservations = IntStream.range(0, placesAmount).mapToObj(d-> 0).collect(Collectors.toList());
        this.id = id;
    }

    public boolean makeReservation(int place) throws InterruptedException {

        if(reservations.get(place) != 0){
            System.out.println(Thread.currentThread().getName()+ ": Sorry" + place);
            return false;
        };

            Thread.sleep(1000);
            takeSeat(place);

        return true;
    }


    private void takeSeat(int place){
        reservations.set(place, reservations.get(place) +1);
        System.out.println(Thread.currentThread().getName()+ ": SEAT TAKEN " + place);
    }

    public List<Integer> getReservations() {
        return reservations;
    }
}


class arr<T> extends ArrayList<T>{
     @Override
    public T set (int i, T x){
         try {
             Thread.sleep(1000);
         } catch (InterruptedException e) {
             e.printStackTrace();
         }
         return super.set(i,x);

     }
}