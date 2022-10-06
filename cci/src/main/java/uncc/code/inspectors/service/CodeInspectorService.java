package uncc.code.inspectors.service;

import uncc.code.inspectors.project.cci.entity.CodeInspector;
import java.util.*;

public interface CodeInspectorService {

    // get code inspectors
    public List<CodeInspector> getCodeInspectors();

    // get single code inspectors
    public CodeInspector getACodeInspector(Long id);

    // create a new object
    public void createCodeInspector(CodeInspector codeInspector);

    // delete an object
    public void deleteCodeInspector(Long id);

    // update object
    public CodeInspector updateCodeInspector(CodeInspector codeInspector);

}
