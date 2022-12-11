package uncc.code.inspectors.project.cci.entity;

import uncc.code.inspectors.project.cci.entity.Application;
import uncc.code.inspectors.project.cci.entity.CodeInspector;

public class ApplicationResponse {
    private CodeInspector inspector;
    private Application application;
    private String message;

    public CodeInspector getInspector() {
        return inspector;
    }

    public void setInspector(CodeInspector inspector) {
        this.inspector = inspector;
    }

    public Application getApplication() {
        return application;
    }

    public void setApplication(Application application) {
        this.application = application;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
