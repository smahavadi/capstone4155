package uncc.code.inspectors.project.cci.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.web.bind.annotation.*;

import uncc.code.inspectors.project.cci.entity.Application;
import uncc.code.inspectors.project.cci.entity.ApplicationResponse;
import uncc.code.inspectors.project.cci.entity.CodeInspector;
import uncc.code.inspectors.project.cci.entity.SlotUpdate;
import uncc.code.inspectors.project.cci.service.CodeInspectorService;
import uncc.code.inspectors.request.CodeInspectorRequest;

@RestController
@RequestMapping("/cci")
@EnableMongoRepositories
@CrossOrigin("http://localhost:4200")
public class CodeInspectorController {
    @Autowired
    private CodeInspectorService codeInspectorService;

    @PostMapping("/inspectors") //localhosturl/cci/inspectors
    public List<CodeInspector> getAll(@RequestBody CodeInspectorRequest codeInspectorRequest) {
        return codeInspectorService.getCodeInspectors(codeInspectorRequest);
    }

    @GetMapping("/inspector")
    public CodeInspector getInspector(  @RequestParam(required=true) String id) {
        return codeInspectorService.getACodeInspector(id);
    }

    // used for adding new code inspector to collection if not present already
    @PostMapping("/inspector")
    public CodeInspector createCodeInspector(@RequestBody CodeInspector newCodeInspector) {
        return codeInspectorService.createCodeInspector(newCodeInspector);
    }

    // if code inspector leaves
    @DeleteMapping("/inspector")
    public void deleteCodeInspector(@RequestParam(required=true) Long ceoId,
                                    @RequestParam(required=true) String certificationNum,
                                    @RequestParam(required=true) String firstName,
                                    @RequestParam(required=true) String lastName) {
        codeInspectorService.deleteCodeInspector(ceoId, certificationNum, firstName, lastName);;
    }

    // used for adding username and password when creating an account, or updating info
    @PutMapping("/inspector/update")
    public CodeInspector updateCodeInspector(@RequestBody CodeInspector updateCodeInspector) {
        return codeInspectorService.updateCodeInspector(updateCodeInspector);
    }

    // used for logging in
    @PostMapping("/inspector/login")
    public CodeInspector login(@RequestBody CodeInspector codeInspector) {
        return codeInspectorService.login(codeInspector.getUsername(), codeInspector.getPassword());
    }

    // used for scheduling a new inspection
    @PostMapping("/inspector/schedule")
    public CodeInspector scheduleInspection(@RequestBody Application application) {
        return codeInspectorService.scheduleInspection(application);
    }

    // used for accepting an application
    @PostMapping("/inspector/accept")
    public CodeInspector acceptApplication(@RequestBody ApplicationResponse applicationResponse) {
        return codeInspectorService.acceptApplication(applicationResponse.getInspector(), applicationResponse.getApplication(), applicationResponse.getMessage());
    }

    // used for rejecting an application
    @PostMapping("/inspector/reject")
    public CodeInspector rejectApplication(@RequestBody ApplicationResponse applicationResponse) {
        return codeInspectorService.rejectApplication(applicationResponse.getInspector(), applicationResponse.getApplication(), applicationResponse.getMessage());
    }

    // used for adding a slot
    @PostMapping("/inspector/addslot")
    public CodeInspector addSlot(@RequestBody SlotUpdate slotUpdate) {
        return codeInspectorService.addSlot(slotUpdate.getInspector(), slotUpdate.getSlot());
    }

    // used for removing a slot
    @PostMapping("/inspector/removeslot")
    public CodeInspector removeSlot(@RequestBody SlotUpdate slotUpdate) {
        return codeInspectorService.removeSlot(slotUpdate.getInspector(), slotUpdate.getSlot());
    }
}

