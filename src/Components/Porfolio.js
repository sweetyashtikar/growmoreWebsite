import React from "react";
import "../Styles/portfolio.css";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Portfolio = () => {
  return (
    <Carousel showThumbs={false} showStatus={false} autoPlay interval={5000} infiniteLoop>
      <div className='carouselimages mt-28 mr-14 ml-14'>
        <img src="Images/curd.png" alt="To Do List App" />
        <p className="legend">
          To Do List <br />
          <strong>Languages Used</strong> <br />
          HTML: Structure <br />
          CSS: Styling <br />
          JavaScript: Functionality <br />
          <br />
          <strong>Description:</strong> <br />
          Here we can add multiple to-do list options with Title and description with the help of add title and add description button. After clicking add we can see the added list in the list option given below. Also, we can edit the list or delete the unwanted one from the list.
        </p>
      </div>
      <div className='carouselimages mt-28 mr-14 ml-14'>
        <img src="Images/chat app.png" alt="Chat App" />
        <p className="legend">
          Chat App <br />
          <strong>Languages Used</strong> <br />
          HTML: Structure <br />
          CSS: Styling <br />
          JavaScript: Functionality <br />
          <br />
          <strong>Description:</strong> <br />
          This is a simple chat app by which we can chat with our friends and colleagues. In this app, we have provided 2 options - 1) Chat and 2) Users. In the Chat section, we can see a friend list with their recent messages. When we click on open chat log, we can chat with the selected user. In the Users section, we can see a list of all users and start chatting with new users.
        </p>
      </div>
      <div className='carouselimages mt-28 mr-14 ml-14'>
        <img src="Images/dashboard.png" alt="Dashboard" />
        <p className="legend">
          Dashboard <br />
          <strong>Languages Used</strong> <br />
          HTML: Structure <br />
          CSS: Styling <br />
          JavaScript: Functionality <br />
          <br />
          <strong>Description:</strong> <br />
          In the dashboard, we have the left sidebar where we can see multiple options such as Homepage, Customer, Lead, Product, Admin, Management, and Settings. On the front page, we can see the Leads Section and Order Section where we can see how many orders we have in this month. Besides that, there is a Payment section, and also we have a due balance section beside the payment. We also get a full preview of the Lead section in the main dashboard column. It contains Lead preview, Quote preview, and Order preview. Each preview contains sub-parts which have draft, pending, not paid, overdue, partially paid, and paid sections where we can watch each data easily. On the right side of the dashboard, we have Customer preview, here we can see how many customers have been active on the page.
        </p>
      </div>
      <div className='carouselimages mt-28 mr-14 ml-14'>
        <img src="Images/doctor app.png" alt="Doctor App" />
        <p className="legend">
          Doctor App <br />
          <strong>Languages Used</strong> <br />
          HTML: Structure <br />
          CSS: Styling <br />
          JavaScript: Functionality <br />
          <br />
          <strong>Description:</strong> <br />
          In the doctor app, we have a navigation bar where we have Home button, and also Doctors and Appointments sections on the right side. On the main page, we can see the doctor’s profile with a picture of the doctor and their specialty as well as their fees. In the middle section, we can see on which date the doctor is available and on the right side we can choose the timeslot for the appointment. After choosing your preferred date and timeslot, we can click on “Confirm here to proceed” button below the Time slot section.
        </p>
      </div>
      <div className='carouselimages mt-28 mr-14 ml-14'>
        <img src="Images/ecomm.jpg" alt="E-Commerce App" />
        <p className="legend">
          E-commerce <br />
          <strong>Languages Used</strong> <br />
          HTML: Structure <br />
          CSS: Styling <br />
          JavaScript: Functionality <br />
          <br />
          <strong>Description:</strong> <br />
          On the E-commerce dashboard, we have multiple options. On the header, we have a hamburger button along with the Home button. On the left side of the screen, we have a sidebar which contains Dashboard, Shops, Products, Categories, Locations, Areas, and Customers. On the main page, we can see the dashboard. In the dashboard, we can see Order Pending, Order Cancelled, Order Processing, and Today’s Income. There is also a Recent Orders section where we can see the Order ID, Payment method, Order Date, Delivery Date, Status, Total, and actions that we can perform on the order.
        </p>
      </div>
    </Carousel>
  );
}

export default Portfolio;
