package uncc.code.inspectors.project.cci.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.web.bind.annotation.*;

import uncc.code.inspectors.project.cci.entity.CodeInspector;
import uncc.code.inspectors.project.cci.service.CodeInspectorService;
import uncc.code.inspectors.request.CodeInspectorRequest;

@RestController
@RequestMapping("/cci")
@EnableMongoRepositories
@CrossOrigin("http://localhost:4200")
public class CodeInspectorController {
    @Autowired
    private CodeInspectorService codeInspectorService;

    @GetMapping("/inspectors") //localhosturl/cci/inspectors
    public List<CodeInspector> getAll(@RequestBody CodeInspectorRequest codeInspectorRequest) {
        return codeInspectorService.getCodeInspectors(codeInspectorRequest);
    }

    @GetMapping("/inspector")
    public CodeInspector getInspector(  @RequestParam(required=true) Long ceoId,
                                        @RequestParam(required=true) String certificationNum,
                                        @RequestParam(required=true) String firstName,
                                        @RequestParam(required=true) String lastName ) {
        return codeInspectorService.getACodeInspector(ceoId, certificationNum, firstName, lastName);
    }

    // used for adding new code inspector to collection if not present already
    @PostMapping("/new")
    public void createCodeInspector(@RequestBody CodeInspector newCodeInspector) {
        codeInspectorService.createCodeInspector(newCodeInspector);
    }

    // if code inspector leaves
    @DeleteMapping("/delete")
    public void deleteCodeInspector(@RequestParam(required=true) Long ceoId,
                                    @RequestParam(required=true) String certificationNum,
                                    @RequestParam(required=true) String firstName,
                                    @RequestParam(required=true) String lastName) {
        codeInspectorService.deleteCodeInspector(ceoId, certificationNum, firstName, lastName);;
    }

    // used for adding username and password when creating an account, or updating info
    @PutMapping("/update")
    public CodeInspector updateCodeInspector(@RequestBody CodeInspector updateCodeInspector) {
        return codeInspectorService.updateCodeInspector(updateCodeInspector);
    }

}
