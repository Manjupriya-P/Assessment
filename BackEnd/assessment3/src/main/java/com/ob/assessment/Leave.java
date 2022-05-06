package com.ob.assessment;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity(name = "Leave_Details")
public class Leave {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private int employee_id;
	private String request;
	private String LeaveDate;
	private  String LeaveStatus;

}
