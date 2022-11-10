package uncc.code.inspectors.project.cci.dto;

import lombok.Data;
import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

import uncc.code.inspectors.project.cci.entity.Request;

@Data
@Entity
/**
 * Entity for Code Inspector object: object that represents a Code Inspector
 * and holds information about one
 */
public class CodeInspectorDto {

    @Id
    private String ceoId;
    private String certificationNum;
    private int level;
    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    private String trade;
    private String type;
    private String employer;
    private LocalDate expirationDate;
    private String address;
    private String city;
    private String state;
    private int zipCode;
    private String county;
    private String username;
    private String password;
    private List<Request> pendingRequests;
    private List<Request> upcomingReminders;
}
