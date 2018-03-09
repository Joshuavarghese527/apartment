import Fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';

import RoomDetails from '../components/RoomDetails';


const Index = (props) => (
<Layout>
  <div className="text-center">
    <h1> Welcome & Apply For Apartments</h1>
    <br/>
      <div className="table-responsive container text-center" >
         <table className="table table-hover">
     <thead>
    <tr>
      <th scope="col">Apartment</th>
      <th scope="col"># Beds</th>
      <th scope="col"># Baths</th>
      <th scope="col">Floor Plan</th>
      <th scope="col">Min Price - Max Price</th>
      <th scope="col">Apply</th>
    </tr>
  </thead>
     {props.details.map((details, key)=> { 
      return <RoomDetails details={details} key={key} />
      })}
        </table> 
      </div> 
  </div>
 </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch('https://www.rentcafe.com/rentcafeapi.aspx?requestType=apartmentavailability&APIToken=NDY5OTI%3d-XDY6KCjhwhg%3d&propertyCode=p0155985');
  const data = await res.json();
  console.log('Response:', data);

return {
   details: data
  }
}

export default Index;