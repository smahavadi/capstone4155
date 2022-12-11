package uncc.code.inspectors.project.cci.service;

import uncc.code.inspectors.project.cci.entity.Application;
import uncc.code.inspectors.project.cci.entity.CodeInspector;
import uncc.code.inspectors.project.cci.entity.Slot;
import uncc.code.inspectors.request.CodeInspectorRequest;

import java.util.*;

public interface CodeInspectorService {

    // get code inspectors
    public List<CodeInspector> getCodeInspectors(CodeInspectorRequest codeInspectorRequest);

    // get single code inspectors
    public CodeInspector getACodeInspector(String id);

    // create a new object
    public CodeInspector createCodeInspector(CodeInspector codeInspector);

    // delete an object
    public void deleteCodeInspector(Long id, String cerNum, String firstName, String lastName);

    // update object
    public CodeInspector updateCodeInspector(CodeInspector codeInspector);

    // login
    public CodeInspector login(String username, String password);

    // schedule inspection
    public CodeInspector scheduleInspection(Application application);

    // accept application
    CodeInspector acceptApplication(CodeInspector inspector, Application application, String message);

    // reject application
    CodeInspector rejectApplication(CodeInspector inspector, Application application, String message);

    CodeInspector addSlot(CodeInspector inspector, Slot slot);

    CodeInspector removeSlot(CodeInspector inspector, Slot slot);
}
