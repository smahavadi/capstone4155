package uncc.code.inspectors.project.cci.entity;

import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
public class Slot {
    private LocalDateTime startTime;
    private LocalDateTime endTime;
    private List<Application> pendingApplications;
    private Application approvedApplication;
}
