package uncc.code.inspectors.project.cci.service;

import uncc.code.inspectors.project.cci.entity.CodeInspector;
import uncc.code.inspectors.project.cci.entity.Pagination;
import uncc.code.inspectors.project.cci.repository.CodeInspectorRepository;
import uncc.code.inspectors.request.CodeInspectorRequest;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

@Service
public class CodeInspectorServiceImpl implements CodeInspectorService{

    @Autowired
    public CodeInspectorRepository codeInspectorRepository;

    public Pagination setPagination (Page<CodeInspector> results, int startPage, int size) {
        Pagination pagination = new Pagination();
        pagination.setCurrentPage(results.getNumber());
        pagination.setStartPage(startPage);
        pagination.setRecordsPerPage(size);
        pagination.setLastPage(results.getTotalPages()-1);
        pagination.setTotalRecords(results.getTotalElements());
        return pagination;
    }

    public Page<CodeInspector> findByField(CodeInspectorRequest codeInspectorRequest, int page, int size) {
        final Long ceoId = (codeInspectorRequest == null) ? null : codeInspectorRequest.getCeoId();
        return null;
    }

    // get code inspectors
    @Override
    public List<CodeInspector> getCodeInspectors(CodeInspectorRequest codeInspectorRequest) {
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
    public void deleteCodeInspector(Long id, String cerNum, String firstName, String lastName) {

    }

    // update object
    @Override
    public CodeInspector updateCodeInspector(CodeInspector codeInspector) {
        CodeInspector updatedInspector = null;
        return updatedInspector;
    }

}
