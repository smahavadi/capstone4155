package uncc.code.inspectors.project.cci.entity;

import lombok.Data;

@Data
public class Pagination {

    private Long totalRecords;
    private Integer startPage;
    private Integer currentPage;
    private Integer lastPage;
    private Integer recordsPerPage;
    
}
