package uncc.code.inspectors.project.cci.io;

import lombok.Data;

@Data
public class CodeInspectorRequest {

    private Long ceoId;
    private int level;
    private String lastName;
    private String trade;
    private String type;
    private String employer;
    private String county;
    
}
