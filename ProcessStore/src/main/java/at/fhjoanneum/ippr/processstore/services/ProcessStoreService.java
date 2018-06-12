package at.fhjoanneum.ippr.processstore.services;

import at.fhjoanneum.ippr.commons.dto.processstore.ProcessStoreDTO;

import java.util.Date;
import java.util.List;
import java.util.concurrent.Future;

public interface ProcessStoreService {

    Future<List<ProcessStoreDTO>> findAllProcesses();

    Future<ProcessStoreDTO> findProcessById(Long processId);

    Future<List<ProcessStoreDTO>> findAllApprovedProcesses();

    Future<List<ProcessStoreDTO>> findAllNotApprovedProcesses();

    Future<ProcessStoreDTO> changeApprovedState(boolean isApproved, Long processId);

    Future<List<ProcessStoreDTO>> findAllProcessesByUserId(String userId);

    Future<List<ProcessStoreDTO>> findAllProcessesByOrganisationId(String organisationId);

    void saveProcessStoreObject(String processName, String processDescription, String processCreator,
                                Date processCreatedAt, Long processVersion, Double processPrice);

}