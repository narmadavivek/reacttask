import Message from './Message.jsx';
import './Message.css';
//import './App.css'

function App() {
  return (
    <section className="pricing py-5">
  <div className="container">
    <div className="row">
    <div className="col-4">
      <Message plan="free" price="$0" user="single user" storage="50GB Storage" project="Unlimited public project" access="Community Access" privateproj="unlimited private project" phone="Dedicated phone support" subdomain="Free subdomain" report="Monthly status report" ></Message>
      </div>
      <div className="col-4">
      <Message plan="plus" price="$9" user="5 user" storage="50GB Storage" project="Unlimited public project" access="Community Access" privateproj="unlimited private project" phone="Dedicated phone support" subdomain="Free subdomain" report="Monthly status report"></Message>
      </div>
      <div className="col-4">
      <Message plan="pro" price="$49" user="Unlimited user" storage="50GB Storage" project="Unlimited public project" access="Community Access" privateproj="unlimited private project" phone="Dedicated phone support" subdomain="Free subdomain" report="Monthly status report"></Message>
      </div>
    </div>
    </div>
</section>
  );
}

export default App;