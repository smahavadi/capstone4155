package uncc.code.inspectors.project.cci.service;

import uncc.code.inspectors.project.cci.entity.CodeInspector;
import uncc.code.inspectors.request.CodeInspectorRequest;

import java.util.*;

public interface CodeInspectorService {

    // get code inspectors
    public List<CodeInspector> getCodeInspectors(CodeInspectorRequest codeInspectorRequest);

    // get single code inspectors
    public CodeInspector getACodeInspector(Long id, String cerNum, String firstName, String lastName);

    // create a new object
    public void createCodeInspector(CodeInspector codeInspector);

    // delete an object
    public void deleteCodeInspector(Long id, String cerNum, String firstName, String lastName);

    // update object
    public CodeInspector updateCodeInspector(CodeInspector codeInspector);

}
