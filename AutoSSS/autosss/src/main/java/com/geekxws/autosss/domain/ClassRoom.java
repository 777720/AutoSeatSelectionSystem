package com.geekxws.autosss.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

/**
 * Created by geek720 on 2017/4/5.
 */
@Document(collection = "classroom")
public class ClassRoom implements Serializable {

    private static final long serialVersionUID = 6826752470861541905L;

    @Id
    private String Id;
    private String address;
    private Date openTime;
    private int timeMaxLength;
    private int timeMinLength;
    private boolean isOpen;
    private List<Seat> seat;

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Date getOpenTime() {
        return openTime;
    }

    public void setOpenTime(Date openTime) {
        this.openTime = openTime;
    }

    public int getTimeMaxLength() {
        return timeMaxLength;
    }

    public void setTimeMaxLength(int timeMaxLength) {
        this.timeMaxLength = timeMaxLength;
    }

    public int getTimeMinLength() {
        return timeMinLength;
    }

    public void setTimeMinLength(int timeMinLength) {
        this.timeMinLength = timeMinLength;
    }

    public boolean isOpen() {
        return isOpen;
    }

    public void setOpen(boolean open) {
        isOpen = open;
    }

    public List<Seat> getSeat() {
        return seat;
    }

    public void setSeat(List<Seat> seat) {
        this.seat = seat;
    }
}
