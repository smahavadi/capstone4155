package uncc.code.inspectors.project.cci.repository;

import org.springframework.data.jpa.repository.JpaRepository;
// import org.springframework.stereotype.Repository;
import uncc.code.inspectors.project.cci.entity.Request;

public interface RequestRepository extends JpaRepository<Request, Long> {
    // crud database methods
}
