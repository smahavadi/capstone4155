package uncc.code.inspectors.project.cci.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
import org.mapstruct.factory.Mappers;

import uncc.code.inspectors.project.cci.dto.CodeInspectorDto;
import uncc.code.inspectors.project.cci.entity.CodeInspector;

/**
 * Mapper class for CodeInspector entity to CodeInspectorDto
 */
@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.WARN)
public interface CodeInspectorMapper {

    CodeInspectorMapper INSTANCE = Mappers.getMapper(CodeInspectorMapper.class);

    // functions that will map entity to dto
    public CodeInspector codeInspectorDtoToCodeInspector (CodeInspectorDto codeInspectorDto);

    public CodeInspectorDto codeInspectorToCodeInspectorDto (CodeInspector codeInspector);
    
}
