import React from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    
    return (
        <div style={{ display: 'flex', gap: '20px', flexFlow: 'column' }}>
            <h1>I am Heading</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut aspernatur id eos nisi a amet quas, doloremque, suscipit similique molestiae odio voluptatum aliquid. Veniam autem, nemo accusamus eligendi atque non! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos et illum laboriosam expedita officia culpa, accusantium omnis. Culpa consectetur, praesentium asperiores deserunt deleniti, odit mollitia quasi perspiciatis fuga vitae doloribus.</p>
            <div>
                <button onClick={() => navigate('/deals')}>Add to Deals</button>
                <br />
                <br />
                <button onClick={() => navigate('/details')}>Check Details</button>
            </div>
        </div>
    );
}

export default Dashboard;