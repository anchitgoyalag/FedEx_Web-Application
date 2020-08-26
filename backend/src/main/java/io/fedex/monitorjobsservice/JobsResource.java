package io.fedex.monitorjobsservice;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.lang.reflect.Array;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
public class JobsResource {

    @Autowired
    private CatalogService catalogService;

    @RequestMapping("/Jobs")
    public List<CatalogItem> getAllCatalogs(){
        return catalogService.getAllCatalogs();
    }


    @RequestMapping("/Jobs/{snapshotTsp}")
    public List<CatalogItem> getDate(@PathVariable String snapshotTsp){
        return catalogService.getDate(snapshotTsp);
    }



    @RequestMapping(method = RequestMethod.POST, value="/Jobs")
    public void addJob(@RequestBody List<CatalogItem> studentList){
        catalogService.addJob(studentList);

    }

    @RequestMapping(method = RequestMethod.DELETE, value="/Jobs/{id}")
    public void deleteJob(@PathVariable String id){
        catalogService.deleteJob(id);
    }


}
