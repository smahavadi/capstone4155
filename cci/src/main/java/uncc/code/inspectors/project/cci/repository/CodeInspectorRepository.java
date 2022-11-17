package uncc.code.inspectors.project.cci.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import uncc.code.inspectors.project.cci.entity.CodeInspector;

public interface CodeInspectorRepository extends MongoRepository<CodeInspector, String>{
    public List<CodeInspector> findAll();
    public CodeInspector findByCeoIdAndCertificationNumAndFirstNameAndLastName(Long ceoId, String certificationNum, String firstName, String lastName);
}
