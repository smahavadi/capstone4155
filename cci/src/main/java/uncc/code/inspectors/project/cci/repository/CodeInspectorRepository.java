package uncc.code.inspectors.project.cci.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import uncc.code.inspectors.project.cci.entity.CodeInspector;

public interface CodeInspectorRepository extends MongoRepository<CodeInspector, Long>{
    // crud database methods
    List<CodeInspector> findAll();
}
