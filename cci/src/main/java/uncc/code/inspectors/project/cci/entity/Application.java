package uncc.code.inspectors.project.cci.entity;

import lombok.Data;

import java.time.Instant;

@Data
public class Application {
    // The ID of the inspector
    private String id;
    private String name;
    private String phone;
    private String email;
    private String inspectionType;
    private String address;
    private String notes;
    private Instant time;
}
