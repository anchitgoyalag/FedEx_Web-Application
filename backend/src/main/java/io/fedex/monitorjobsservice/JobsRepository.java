package io.fedex.monitorjobsservice;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface JobsRepository extends CrudRepository<CatalogItem,String> {

    public List<CatalogItem> findBySnapshotTsp(String snapshotTsp);
}
