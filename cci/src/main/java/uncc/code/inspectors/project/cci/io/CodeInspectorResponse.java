package uncc.code.inspectors.project.cci.io;

import java.util.List;

import lombok.Data;
import uncc.code.inspectors.project.cci.entity.CodeInspector;
import uncc.code.inspectors.project.cci.entity.Pagination;

@Data
public class CodeInspectorResponse {

    List<CodeInspector> data;
    private Pagination pagination;
    
}
