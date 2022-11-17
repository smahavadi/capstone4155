package uncc.code.inspectors.project.cci.service;

import uncc.code.inspectors.project.cci.entity.CodeInspector;
import uncc.code.inspectors.project.cci.repository.CodeInspectorRepository;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CodeInspectorServiceImpl implements CodeInspectorService{

    @Autowired
    public CodeInspectorRepository codeInspectorRepository;

    // get code inspectors
    @Override
    public List<CodeInspector> getCodeInspectors() {
        List<CodeInspector> inspectors = codeInspectorRepository.findAll();
        return inspectors;

    }

    // get single code inspectors
    @Override
    public CodeInspector getACodeInspector(Long id, String cerNum, String firstName, String lastName)  {
        CodeInspector codeInspector = codeInspectorRepository.findByCeoIdAndCertificationNumAndFirstNameAndLastName(id, cerNum, firstName, lastName);
        return codeInspector;
    }

    // create a new object
    @Override
    public void createCodeInspector(CodeInspector codeInspector) {

    }

    // delete an object
    @Override
    public void deleteCodeInspector(Long id) {

    }

    // update object
    @Override
    public CodeInspector updateCodeInspector(CodeInspector codeInspector) {
        CodeInspector updatedInspector = null;
        return updatedInspector;
    }

}
