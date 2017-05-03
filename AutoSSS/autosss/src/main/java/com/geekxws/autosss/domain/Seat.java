package com.geekxws.autosss.domain;

import java.io.Serializable;
import java.util.Date;

/**
 * Created by geek720 on 2017/4/19.
 */
public class Seat implements Serializable {
    private static final long serialVersionUID = -6557159571043767501L;
    private boolean isSeat;
    private int seatNo;
    private boolean isBook;
    private Date bookDay;
    private int row;
    private int col;

    public int getRow() {
        return row;
    }

    public Date getBookDay() {
        return bookDay;
    }

    public void setBookDay(Date bookDay) {
        this.bookDay = bookDay;
    }

    public void setRow(int row) {

        this.row = row;
    }

    public int getCol() {
        return col;
    }

    public void setCol(int col) {
        this.col = col;
    }

    public boolean isSeat() {
        return isSeat;
    }

    public void setSeat(boolean seat) {
        isSeat = seat;
    }

    public long getSeatNo() {
        return seatNo;
    }

    public void setSeatNo(int seatNo) {
        this.seatNo = seatNo;
    }

    public boolean isBook() {
        return isBook;
    }

    public void setBook(boolean book) {
        isBook = book;
    }
}
