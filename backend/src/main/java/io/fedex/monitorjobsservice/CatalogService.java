package io.fedex.monitorjobsservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CatalogService {

    @Autowired
    private JobsRepository jobsRepository;

    public List<CatalogItem> getAllCatalogs(){

        List<CatalogItem> catalogs = new ArrayList<>();
        jobsRepository.findAll().forEach(catalogs::add);
        return catalogs;
    }

    public List<CatalogItem> getDate(String snapshotTsp){
        return jobsRepository.findBySnapshotTsp(snapshotTsp);
    }

    public void addJob(List<CatalogItem> studentList) {
      jobsRepository.saveAll(studentList);
    }



    public void deleteJob(String id){
        jobsRepository.deleteById(id);

    }
}
