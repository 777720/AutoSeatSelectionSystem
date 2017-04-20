package com.geekxws.autosss.domain;

import java.util.Date;

/**
 * Created by geek720 on 2017/4/19.
 */
public class Seat {
    private boolean isSeat;
    private long seatNo;
    private boolean isBook;
    private Date bookStartTime;
    private Date bookEndTime;

    public boolean isSeat() {
        return isSeat;
    }

    public void setSeat(boolean seat) {
        isSeat = seat;
    }

    public long getSeatNo() {
        return seatNo;
    }

    public void setSeatNo(long seatNo) {
        this.seatNo = seatNo;
    }

    public boolean isBook() {
        return isBook;
    }

    public void setBook(boolean book) {
        isBook = book;
    }

    public Date getBookStartTime() {
        return bookStartTime;
    }

    public void setBookStartTime(Date bookStartTime) {
        this.bookStartTime = bookStartTime;
    }

    public Date getBookEndTime() {
        return bookEndTime;
    }

    public void setBookEndTime(Date bookEndTime) {
        this.bookEndTime = bookEndTime;
    }
}
