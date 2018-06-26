package at.fhjoanneum.ippr.processstore.persistence.entities;


import at.fhjoanneum.ippr.processstore.persistence.objects.ProcessStoreObject;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.Type;
import org.hibernate.validator.constraints.NotBlank;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.xml.bind.annotation.XmlRootElement;
import java.util.Date;

@Entity(name="PROCESSSTORE")
@XmlRootElement
public class ProcessStoreObjectImpl implements ProcessStoreObject {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long processId;

    @Column
    @NotBlank
    private String processName;

    @Column
    @NotBlank
    private String processDescription;

    @Column
    @NotBlank
    private String processCreator;

    @Column
    private Date processCreatedAt;

    @Column
    @NotNull
    private Long processVersion;

    @Column
    @NotNull
    private Double processPrice;

    @Column
    private String processApprover;

    @Column
    private String processApproverComment;

    @Column
    private Boolean isApproved;

    @Column
    private Date processApprovedDate;

    @JsonIgnore
    @Type(type = "binary")
    @Lob
    @Column(name = "processFile", columnDefinition = "LONGBLOB")
    private byte[] processFile;


    public ProcessStoreObjectImpl() {}

    public ProcessStoreObjectImpl(String processName, String processDescription, String processCreator, Date processCreatedAt,
                                  Long processVersion, Double processPrice, String processApprover, String processApproverComment,
                                  boolean isApproved, Date processApprovedDate, byte[] processFile) {
        this.processName = processName;
        this.processDescription = processDescription;
        this.processCreator = processCreator;
        this.processCreatedAt = processCreatedAt;
        this.processVersion = processVersion;
        this.processPrice = processPrice;
        this.processApprover = processApprover;
        this.processApproverComment = processApproverComment;
        this.isApproved = isApproved;
        this.processApprovedDate = processApprovedDate;
        this.processFile = processFile;
    }

    @Override
    public Long getStoreId() {
        return processId;
    }

    @Override
    public String getProcessName() {
        return processName;
    }

    @Override
    public void setProcessName(String processName) {
        this.processName = processName;
    }

    public String getProcessDescription() {
        return processDescription;
    }

    public void setProcessDescription(String processDescription) {
        this.processDescription = processDescription;
    }

    public String getProcessCreator() {
        return processCreator;
    }

    public void setProcessCreator(String processCreator) {
        this.processCreator = processCreator;
    }

    public Date getProcessCreatedAt() {
        return processCreatedAt;
    }

    public void setProcessCreatedAt(Date processCreatedAt) {
        this.processCreatedAt = processCreatedAt;
    }

    public Long getProcessVersion() {
        return processVersion;
    }

    public void setProcessVersion(Long processVersion) {
        this.processVersion = processVersion;
    }

    public Double getProcessPrice() {
        return processPrice;
    }

    public void setProcessPrice(Double processPrice) {
        this.processPrice = processPrice;
    }

    public String getProcessApprover() {
        return processApprover;
    }

    public void setProcessApprover(String processApprover) {
        this.processApprover = processApprover;
    }

    public String getProcessApproverComment() {
        return processApproverComment;
    }

    public void setProcessApproverComment(String processApproverComment) {
        this.processApproverComment = processApproverComment;
    }

    public Boolean isApproved() {
        return isApproved;
    }

    public void setApproved(Boolean approved) {
        this.isApproved = approved;
    }

    public Date getProcessApprovedDate() {
        return processApprovedDate;
    }

    public void setProcessApprovedDate(Date processApprovedDate) {
        this.processApprovedDate = processApprovedDate;
    }

    public byte[] getProcessFile() { return processFile; }

    public void setProcessFile(byte[] processFile) { this.processFile = processFile; }
}
