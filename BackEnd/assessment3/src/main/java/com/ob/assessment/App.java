package com.ob.assessment;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;
import javax.persistence.Query;

public class App {

	public static <E> void main(String[] args) {
//		Employee employee = new Employee();
//		employee.setName("priya");
//		employee.setType("employee");
//		employee.setMailId("priya@gmail");
//		employee.setPassword("1223");
		Leave lve = new Leave();

		EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("hello");
		EntityManager manager = entityManagerFactory.createEntityManager();
		EntityTransaction transaction = manager.getTransaction();
		transaction.begin();
//		manager.persist(employee);
		transaction.commit();

		EntityManagerFactory entityManagerFactory1 = Persistence.createEntityManagerFactory("hello");
		EntityManager manager1 = entityManagerFactory1.createEntityManager();
		EntityTransaction transaction1 = manager1.getTransaction();
		transaction1.begin();

		transaction1.commit();
		boolean a = false;
		while (a = true) {
			System.out.println("press 1 to register");
			System.out.println("press 2 to login");
			Scanner sc = new Scanner(System.in);
			int int1 = sc.nextInt();

			switch (int1) {
			case 1:
				System.out.println("Enter your name :");
				String name1 = sc.next();
			System.out.println("Enter your type");
			String type1 = sc.next();
			System.out.println("Enter your mailId");
			String mailId1 = sc.next();
			System.out.println("Enter your password");
			String password1 = sc.next();
			
			System.out.println("successfully registered");
			Employee employee2 = new Employee();
			employee2.setName(name1);
			employee2.setType(type1);
			employee2.setMailId(mailId1);
			employee2.setPassword(password1);
			transaction.begin();
			manager.persist(employee2);
			transaction.commit();
			
			

			
				System.out.println("Successfully registered");
				System.out.println("your Id is: " +employee2.getId());
				System.out.println("please note this for further login");

				break;
			case 2:
				System.out.println("Enter your Id");
				int id2 = sc.nextInt();
				System.out.println("Enter your password");
				String password2 = sc.next();
				Employee find = manager.find(Employee.class, id2);
				int id3 = find.getId();
				String password3 = find.getPassword();
				System.out.println(password3);

				if ((password2 != find.getPassword())) {
					System.out.println("sussfully logged in");
					System.out.println("enter your type:");
					String type3 = sc.next();
					switch (type3) {
					case "manager":
						System.out.println("1.press one to show all leave requests");
						System.out.println("2.Press two to approve/reject leave");
						int sc2 = sc.nextInt();
						switch (sc2) {
						case 1:
							Query query3 = manager.createQuery("from Leave_Details");

							List<Leave> resultList = query3.getResultList();
							
							for (Leave leaveList : resultList) {
								System.out.println(leaveList.getEmployee_id()+"\t"+leaveList.getRequest());
						
							}
							break;

						case 2:
							System.out.println("enter the id to approve");
							int approve = sc.nextInt();
							System.out.println("approve or decline leave");
							String lv = sc.next();
							Leave find2 = manager.find(Leave.class, approve);
							System.out.println(find2);
							find2.setLeaveStatus(lv);

							
							transaction.begin();
							manager.persist(find2);
							transaction.commit();
							System.out.println(manager.find(Leave.class, approve));
							System.out.println("your leave request is processed");
							break;
						}
						break;
					case "employee":
						System.out.println("1.press one to show status of leave request");
						System.out.println("2.press two to request for leave");
						int int2 = sc.nextInt();
						switch (int2) {
						case 1:

						
							Leave find3 = manager1.find(Leave.class, id2);
							
							
							if((find3.getLeaveStatus())==null){
								System.out.println("leave is not yet processed");
							}else {
								System.out.println(find3.getLeaveStatus());
							}
							
							
							break;
						case 2:

							System.out.println("enter the date to request for leave:");
							String next = sc.next();

							List<Leave> resultList = manager1
									.createQuery("from Leave_Details where employee_id=:id and LeaveDate=:date")
									.setParameter("id", id2).setParameter("date", next).getResultList();
							System.out.println(resultList);
							if (!resultList.isEmpty()) {
								System.out.println(resultList.get(0).getEmployee_id());
							} else {
								System.out.println("request is not granted yet");
							}

							transaction1.begin();

							transaction1.commit();

							break;

						}

						break;
					}
				}
				else {
					System.out.println("invalid login id");
					System.out.println("please try again later");
				}
				break;
			}

		}
	}
}
