package uncc.code.inspectors.project.cci.entity;

import lombok.Data;
import javax.persistence.*;

import org.springframework.data.annotation.Id;

import java.time.LocalDate;

@Data
@Entity
public class Request {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;
    private String name;
    private String email;
    private String phone;
    private String inspectionType;
    private String location;
    private LocalDate time;
    private String notes;
    private Long ceoId;
    private CodeInspector codeInspector;
}
