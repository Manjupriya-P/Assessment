package com.ob.assessment;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

public class App1 {
	

	public static void main(String[] args) {
		Leave leave = new Leave();
		leave.setEmployee_id(1);
		leave.setLeaveDate("3/2/21");
		leave.setRequest("request on tomorrow");

		EntityManagerFactory entityManagerFactory1 = Persistence.createEntityManagerFactory("hello");
		EntityManager manager1 = entityManagerFactory1.createEntityManager();
		EntityTransaction transaction1 = manager1.getTransaction();
		manager1.persist(leave);
		transaction1.begin();
		transaction1.commit();
		
		
		

	}

}
