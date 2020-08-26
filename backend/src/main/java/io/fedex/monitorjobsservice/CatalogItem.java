package io.fedex.monitorjobsservice;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class CatalogItem {



    @Id
    private String id;
    private String job;
    private String type;
    private String backLogIn;
    private String snapshotTsp;
    private int diff;
    private int thresh;

    public CatalogItem(){

    }

    public CatalogItem(String id, String type, String job, String backLogIn, String snapshotTsp, int diff, int thresh) {
        this.id = id;
        this.type = type;
        this.job = job;
        this.backLogIn = backLogIn;
        this.snapshotTsp = snapshotTsp;
        this.diff = diff;
        this.thresh = thresh;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getJob() {
        return job;
    }

    public void setJob(String job) {
        this.job = job;
    }

    public String getBackLogIn() {
        return backLogIn;
    }

    public void setBackLogIn(String backLogIn) {
        this.backLogIn = backLogIn;
    }

    public String getSnapshotTsp() {
        return snapshotTsp;
    }

    public void setSnapshotTsp(String snapshotTsp) {
        this.snapshotTsp = snapshotTsp;
    }

    public int getDiff() {
        return diff;
    }

    public void setDiff(int diff) {
        this.diff = diff;
    }

    public int getThresh() {
        return thresh;
    }

    public void setThresh(int thresh) {
        this.thresh = thresh;
    }
}
