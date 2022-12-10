package uncc.code.inspectors.project.cci.entity;

import lombok.Data;

import java.time.Instant;
import java.util.List;

@Data
public class Slot {
    private Instant startTime;
    private Instant endTime;
    private List<Application> pendingApplications;
    private Application approvedApplication;
}
