package uncc.code.inspectors.project.cci.entity;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class Application {
    private String name;
    private String phone;
    private String email;
    private String inspectionType;
    private String address;
    private String notes;
}
