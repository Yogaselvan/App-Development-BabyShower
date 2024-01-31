import React, { useEffect } from 'react';
import '../assets/css/sidebar.CSS';
import Sidebar11 from '../pages/sibebar1';
import { useNavigate } from "react-router";
import Sidebarcus from './sidebarcus';
const UserDashboard = () => {
	const navigate= useNavigate()
const hello= ()=>{
   navigate('/userdash')
}
  
  return (
    <>
    <UserDashboard/>
	<Sidebarcus/>
      <section id="content">
        <main>
          <div className="head-title">
            <div className="left">
              <h1 onClick={hello}>Dashboard</h1>
              <ul className="breadcrumb">
                <li>
                  <a href="#">Dashboard</a>
                </li>
                <li><i className='bx bx-chevron-right'></i></li>
                <li>
                  <a className="active" href="#">Home</a>
                </li>
              </ul>
            </div>
          </div>

          <ul class="box-info">
				<li>
					<i class='bx bxs-calendar-check' ></i>
					<span class="text">
						<h3>10</h3>
						<p>Events</p>
					</span>
				</li>
				<li>
					<i class='bx bxs-group' ></i>
					<span class="text">
						<h3>28</h3>
						<p>Hours</p>
					</span>
				</li>
				<li>
					<i class='bx bxs-dollar-circle' ></i>
					<span class="text">
						<h3>$2543</h3>
						<p>Total Amount</p>
					</span>
				</li>
			</ul>


			<div class="table-data">
				<div class="order">
					<div class="head">
						<h3>Recent Events</h3>
						<i class='bx bx-search' ></i>
						<i class='bx bx-filter' ></i>
					</div>
					<table>
						<thead>
							<tr>
								<th>Event Name</th>
								<th>Date Order</th>
								<th>Status</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									{/* <img src="img/people.png"/> */}
									<p>Baby Shower</p>
								</td>
								<td>01-01-2024</td>
								<td><span class="status completed">Completed</span></td>
								<td><span class="status completed">Completed</span></td>
							</tr>
							<tr>
								<td>
									{/* <img src="img/people.png"/> */}
									<p>DJ Night</p>
								</td>
								<td>30-01-2024</td>
								<td><span class="status pending">Pending</span></td>
								<td><button class="status pending">Cancel</button></td>
							</tr>
							<tr>
								<td>
									{/* <img src="img/people.png"/> */}
									<p>Baby Feast</p>
								</td>
								<td>30-01-2024</td>
								<td><span class="status process">Process</span></td>
								<td><span class="status process">Process</span></td>
							</tr>
							<tr>
								<td>
									{/* <img src="img/people.png"/> */}
									<p>Naming Party</p>
								</td>
								<td>02-02-2024</td>
								<td><span class="status pending">Pending</span></td>
								<td><button class="status pending">Cancel</button></td>
							</tr>
							<tr>
								<td>
									{/* <img src="img/people.png"/> */}
									<p>Party Night</p>
								</td>
								<td>27-01-2024</td>
								<td><span class="status completed">Completed</span></td>
								<td><span class="status completed">Completed</span></td>
							</tr>
						</tbody>
					</table>
				</div>
				{/* <div class="todo">
					<div class="head">
						<h3> Newly Addes Events</h3>
						<i class='bx bx-plus' ></i>
						<i class='bx bx-filter' ></i>
					</div>
					<ul class="todo-list">
						<li class="completed">
							<p>Party Night</p>
							<i class='bx bx-dots-vertical-rounded' ></i>
						</li>
						<li class="completed">
							<p>Todo List</p>
							<i class='bx bx-dots-vertical-rounded' ></i>
						</li>
						<li class="not-completed">
							<p>Todo List</p>
							<i class='bx bx-dots-vertical-rounded' ></i>
						</li>
						<li class="completed">
							<p>Todo List</p>
							<i class='bx bx-dots-vertical-rounded' ></i>
						</li>
						<li class="not-completed">
							<p>Todo List</p>
							<i class='bx bx-dots-vertical-rounded' ></i>
						</li>
					</ul>
            </div> */}
          </div>
        </main>
        {/* MAIN */}
      </section>
      {/* CONTENT */}
    </>
  );
};

export default UserDashboard;
