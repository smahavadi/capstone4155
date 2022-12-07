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
        for (CodeInspector inspector : inspectors) {
            inspector.setPassword(null);
        }
        return inspectors;

    }

    // get single code inspectors
    @Override
    public CodeInspector getACodeInspector(Long id, String cerNum, String firstName, String lastName)  {
        CodeInspector codeInspector = codeInspectorRepository.findByCeoIdAndCertificationNumAndFirstNameAndLastName(id, cerNum, firstName, lastName);
        codeInspector.setPassword(null);
        return codeInspector;
    }

    @Override
    public CodeInspector createCodeInspector(CodeInspector codeInspector) {
        // Required fields: username, password, firstName, lastName,
        // phone, email, level, type, certificationNum, ceoId
        if (codeInspector.getUsername() == null || codeInspector.getPassword() == null
                || codeInspector.getFirstName() == null || codeInspector.getLastName() == null
                || codeInspector.getPhone() == null || codeInspector.getEmail() == null
                || codeInspector.getLevel() == null || codeInspector.getType() == null
                || codeInspector.getCertificationNum() == null || codeInspector.getCeoId() == null) {
            return null;
        }

        // If a user with the same username exists, return null
        if (codeInspectorRepository.findByUsername(codeInspector.getUsername()) != null) {
            return null;
        }

        CodeInspector newCodeInspector = new CodeInspector();

        newCodeInspector.setCeoId(codeInspector.getCeoId());
        newCodeInspector.setCertificationNum(codeInspector.getCertificationNum());
        newCodeInspector.setLevel(codeInspector.getLevel());
        newCodeInspector.setFirstName(codeInspector.getFirstName());
        newCodeInspector.setLastName(codeInspector.getLastName());
        newCodeInspector.setEmail(codeInspector.getEmail());
        newCodeInspector.setPhone(codeInspector.getPhone());
        newCodeInspector.setTrade(codeInspector.getTrade());
        newCodeInspector.setType(codeInspector.getType());
        newCodeInspector.setEmployer(codeInspector.getEmployer());
        newCodeInspector.setExpirationDate(codeInspector.getExpirationDate());
        newCodeInspector.setAddress(codeInspector.getAddress());
        newCodeInspector.setCity(codeInspector.getCity());
        newCodeInspector.setState(codeInspector.getState());
        newCodeInspector.setZipCode(codeInspector.getZipCode());
        newCodeInspector.setCounty(codeInspector.getCounty());
        newCodeInspector.setUsername(codeInspector.getUsername());
        setPassword(newCodeInspector, codeInspector.getPassword());
        codeInspectorRepository.save(newCodeInspector);
        return newCodeInspector;
    }

    private static void setPassword(CodeInspector codeInspector, String password) {
        if (password != null) {
            password += "code-inspector-salt";
            try {
                var md = java.security.MessageDigest.getInstance("SHA256");
                password = Base64.getEncoder().encodeToString(md.digest(password.getBytes()));
                codeInspector.setPassword(password);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }

    // delete an object
    @Override
    public void deleteCodeInspector(Long id, String cerNum, String firstName, String lastName) {
        CodeInspector codeInspector = codeInspectorRepository.findByCeoIdAndCertificationNumAndFirstNameAndLastName(id, cerNum, firstName, lastName);
        codeInspectorRepository.delete(codeInspector);
    }

    // update object
    @Override
    public CodeInspector updateCodeInspector(CodeInspector codeInspector) {
        CodeInspector updatedInspector = codeInspectorRepository.findByCeoIdAndCertificationNumAndFirstNameAndLastName(codeInspector.getCeoId(), codeInspector.getCertificationNum(), codeInspector.getFirstName(), codeInspector.getLastName());

        if (codeInspector.getLevel() != null) {
            updatedInspector.setLevel(codeInspector.getLevel());
        }
        if (codeInspector.getEmail() != null) {
            updatedInspector.setEmail(codeInspector.getEmail());
        }
        if (codeInspector.getPhone() != null) {
            updatedInspector.setPhone(codeInspector.getPhone());
        }
        if (codeInspector.getTrade() != null) {
            updatedInspector.setTrade(codeInspector.getTrade());
        }
        if (codeInspector.getType() != null) {
            updatedInspector.setType(codeInspector.getType());
        }
        if (codeInspector.getEmployer() != null) {
            updatedInspector.setEmployer(codeInspector.getEmployer());
        }
        if (codeInspector.getExpirationDate() != null) {
            updatedInspector.setExpirationDate(codeInspector.getExpirationDate());
        }
        if (codeInspector.getAddress() != null) {
            updatedInspector.setAddress(codeInspector.getAddress());
        }
        if (codeInspector.getCity() != null) {
            updatedInspector.setCity(codeInspector.getCity());
        }
        if (codeInspector.getState() != null) {
            updatedInspector.setState(codeInspector.getState());
        }
        if (codeInspector.getZipCode() != null) {
            updatedInspector.setZipCode(codeInspector.getZipCode());
        }
        if (codeInspector.getCounty() != null) {
            updatedInspector.setCounty(codeInspector.getCounty());
        }
        if (codeInspector.getUsername() != null) {
            updatedInspector.setUsername(codeInspector.getUsername());
        }
        if (codeInspector.getPassword() != null) {
            setPassword(updatedInspector, codeInspector.getPassword());
        }

        return codeInspectorRepository.save(updatedInspector);
    }

    // login
    @Override
    public CodeInspector login(String username, String password) {
        password += "code-inspector-salt";
        try {
            var md = java.security.MessageDigest.getInstance("SHA256");
            password = Base64.getEncoder().encodeToString(md.digest(password.getBytes()));
        } catch (Exception e) {
            e.printStackTrace();
        }
        CodeInspector codeInspector = codeInspectorRepository.findByUsernameAndPassword(username, password);
        if (codeInspector != null) {
            codeInspector.setPassword(null);
        }
        return codeInspector;
    }
}
