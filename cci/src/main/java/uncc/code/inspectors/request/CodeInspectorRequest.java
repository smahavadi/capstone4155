package uncc.code.inspectors.request;

import lombok.Data;

@Data
public class CodeInspectorRequest {

    private Long ceoId;
    private Integer level;
    private String lastName;
    private String trade;
    private String type;
    private String employer;
    private String county;
    private Integer zipCode;
}
