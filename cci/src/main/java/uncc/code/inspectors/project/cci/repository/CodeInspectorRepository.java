package uncc.code.inspectors.project.cci.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
// import org.springframework.stereotype.Repository;
import uncc.code.inspectors.project.cci.entity.CodeInspector;

public interface CodeInspectorRepository extends JpaRepository<CodeInspector, Long>, JpaSpecificationExecutor{
    // crud database methods
}
