/*"use client"
import styles from '@/app/ui/dashboard/prediction/prediction.module.css'
import { useState } from 'react';

const PredictionPage = () => {
    const [predictionResult, setPredictionResult] = useState("");

    const submitForm = async (event) => {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);

        try {
            const response = await fetch('/dashboard/prediction', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();
            setPredictionResult(`Prediction Result: ${data.prediction[0]}`);
        } catch (error) {
            console.error('Error:', error);
            setPredictionResult('Error: Enter all fields!');
        }
    };

    return (
        <div className={styles.prediction}>
            <div className={styles.container}>
                <h2 className={styles.h2}>Sales Prediction Form</h2>
                <form id="salesForm" className={styles.form} onSubmit={submitForm}>
                    <label className={styles.label} htmlFor="ItemWeight">Item Weight:</label>
                    <input type="number" name="Item_Weight" step="0.01" min="0.01" required /><br /><br />
                    
                    <label className={styles.label} htmlFor="ItemFatContent">Item Fat Content:</label>
                    <select name="Item_Fat_Content" required>
                        <option value="0">Low Fat</option>
                        <option value="1">Regular</option>
                    </select><br /><br />

                    <label className={styles.label} htmlFor="ItemVisibility">Item Visibility:</label>
                    <select name="Item_Visibility" required>
                        {[...Array(10)].map((_, i) => (
                            <option key={i} value={i / 10}>{i / 10}</option>
                        ))}
                    </select><br /><br />

                    <label className={styles.label} htmlFor="ItemMRP">Item MRP:</label>
                    <input type="number" name="Item_MRP" step="0.01" min="0.01" required /><br /><br />

                    <label className={styles.label} htmlFor="OutletSize">Outlet Size:</label>
                    <select name="Outlet_Size" required>
                        <option value="1">Small</option>
                        <option value="2">Medium</option>
                        <option value="3">High</option>
                    </select><br /><br />

                    <label className={styles.label} htmlFor="OutletLocationType">Outlet Location Type:</label>
                    <select name="Outlet_Location_Type" required>
                        <option value="1">Tier 1</option>
                        <option value="2">Tier 2</option>
                        <option value="3">Tier 3</option>
                    </select><br /><br />

                    <label className={styles.label} htmlFor="OutletType">Outlet Type:</label>
                    <select name="OutletType" required>
                        <option value="1">Supermarket Type 1</option>
                        <option value="2">Supermarket Type 2</option>
                        <option value="3">Supermarket Type 3</option>
                        <option value="4">Grocery Store</option>
                    </select><br /><br />

                    <label className={styles.label} htmlFor="OutletAge">Outlet Age:</label>
                    <input type="number" name="Outlet_Age" step="1" min="1" required /><br /><br />

                    <label className={styles.label} htmlFor="ItemType">Item Type:</label>
                    <select name="Item_Type" required>
                        <option value="1">Breads</option>
                        <option value="2">Breakfast</option>
                        <option value="3">Canned</option>
                        <option value="4">Dairy</option>
                        <option value="5">Frozen Foods</option>
                        <option value="6">Fruits and Vegetables</option>
                        <option value="7">Hard Drinks</option>
                        <option value="8">Health and Hygiene</option>
                        <option value="9">Household</option>
                        <option value="10">Meat</option>
                        <option value="11">Others</option>
                        <option value="12">Seafood</option>
                        <option value="13">Snack Foods</option>
                        <option value="14">Soft Drinks</option>
                        <option value="15">Starchy Foods</option>
                    </select><br /><br />

                    <label className={styles.label} htmlFor="OutletIdentifier">Outlet Identifier:</label>
                    <select name="outlet_identifier" required>
                        <option value="OUT013">OUT013</option>
                        <option value="OUT017">OUT017</option>
                        <option value="OUT018">OUT018</option>
                        <option value="OUT019">OUT019</option>
                        <option value="OUT027">OUT027</option>
                        <option value="OUT035">OUT035</option>
                        <option value="OUT045">OUT045</option>
                        <option value="OUT046">OUT046</option>
                        <option value="OUT049">OUT049</option>
                    </select>
                    <br /><br /><br />

                    <input id="button" className={styles.button} type="submit" value="Predict" />
                </form>

                <div id="predictionResult" className={styles.predictionResult}>{predictionResult}</div>
            </div>
        </div>
    )
}

export default PredictionPage;*/


/* RIGHT CODE -->
"use client"
import styles from '@/app/ui/dashboard/prediction/prediction.module.css'
import { useState } from 'react';

const PredictionPage = () => {
    const [predictionResult, setPredictionResult] = useState("");

    const submitForm = async (event) => {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);

        try {
            const response = await fetch('http://localhost:8080', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setPredictionResult(`Prediction Result: ${data.prediction[0]}`);
        } catch (error) {
            console.error('Error:', error);
            setPredictionResult('Error: Enter all fields!');
        }
    };

    return (
        <div className={styles.prediction}>
            <div className={styles.container}>
                <h2 className={styles.h2}>Sales Prediction Form</h2>
                <form id="salesForm" className={styles.form} onSubmit={submitForm}>
                    <label className={styles.label} htmlFor="ItemWeight">Item Weight:</label>
                    <input type="number" name="Item_Weight" step="0.01" min="0.01" required /><br /><br />
                    
                    <label className={styles.label} htmlFor="ItemFatContent">Item Fat Content:</label>
                    <select name="Item_Fat_Content" required>
                        <option value="0">Low Fat</option>
                        <option value="1">Regular</option>
                    </select><br /><br />

                    <label className={styles.label} htmlFor="ItemVisibility">Item Visibility:</label>
                    <select name="Item_Visibility" required>
                        {[...Array(10)].map((_, i) => (
                            <option key={i} value={i / 10}>{i / 10}</option>
                        ))}
                    </select><br /><br />

                    <label className={styles.label} htmlFor="ItemMRP">Item MRP:</label>
                    <input type="number" name="Item_MRP" step="0.01" min="0.01" required /><br /><br />

                    <label className={styles.label} htmlFor="OutletSize">Outlet Size:</label>
                    <select name="Outlet_Size" required>
                        <option value="1">Small</option>
                        <option value="2">Medium</option>
                        <option value="3">High</option>
                    </select><br /><br />

                    <label className={styles.label} htmlFor="OutletLocationType">Outlet Location Type:</label>
                    <select name="Outlet_Location_Type" required>
                        <option value="1">Tier 1</option>
                        <option value="2">Tier 2</option>
                        <option value="3">Tier 3</option>
                    </select><br /><br />

                    <label className={styles.label} htmlFor="OutletType">Outlet Type:</label>
                    <select name="Outlet_Type" required>
                        <option value="1">Supermarket Type 1</option>
                        <option value="2">Supermarket Type 2</option>
                        <option value="3">Supermarket Type 3</option>
                        <option value="4">Grocery Store</option>
                    </select><br /><br />

                    <label className={styles.label} htmlFor="OutletAge">Outlet Age:</label>
                    <input type="number" name="Outlet_Age" step="1" min="1" required /><br /><br />

                    <label className={styles.label} htmlFor="ItemType">Item Type:</label>
                    <select name="Item_Type" required>
                        <option value="1">Breads</option>
                        <option value="2">Breakfast</option>
                        <option value="3">Canned</option>
                        <option value="4">Dairy</option>
                        <option value="5">Frozen Foods</option>
                        <option value="6">Fruits and Vegetables</option>
                        <option value="7">Hard Drinks</option>
                        <option value="8">Health and Hygiene</option>
                        <option value="9">Household</option>
                        <option value="10">Meat</option>
                        <option value="11">Others</option>
                        <option value="12">Seafood</option>
                        <option value="13">Snack Foods</option>
                        <option value="14">Soft Drinks</option>
                        <option value="15">Starchy Foods</option>
                    </select><br /><br />

                    <label className={styles.label} htmlFor="OutletIdentifier">Outlet Identifier:</label>
                    <select name="Outlet_Identifier" required>
                        <option value="OUT013">OUT013</option>
                        <option value="OUT017">OUT017</option>
                        <option value="OUT018">OUT018</option>
                        <option value="OUT019">OUT019</option>
                        <option value="OUT027">OUT027</option>
                        <option value="OUT035">OUT035</option>
                        <option value="OUT045">OUT045</option>
                        <option value="OUT046">OUT046</option>
                        <option value="OUT049">OUT049</option>
                    </select>
                    <br /><br /><br />

                    <input id="button" className={styles.button} type="submit" value="Predict" />
                </form>

                <div id="predictionResult" className={styles.predictionResult}>{predictionResult}</div>
            </div>
        </div>
    )
}

export default PredictionPage;*/


"use client"
import styles from '@/app/ui/dashboard/prediction/prediction.module.css'
import { useState } from 'react';

const PredictionPage = () => {
    const [formData, setFormData] = useState({
        Item_Weight: '',
        Item_Fat_Content: '0',
        Item_Visibility: '0',
        Item_MRP: '',
        Outlet_Size: '1',
        Outlet_Location_Type: '1',
        Outlet_Type: '1',
        Outlet_Age: '',
        Item_Type: '1',
        Outlet_Identifier: 'OUT013',
    });

    const [predictionResult, setPredictionResult] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    const submitForm = async (event) => {
        event.preventDefault();
    
        try {
            const response = await fetch('http://localhost:8080/dashboard/prediction', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const data = await response.json();
            setPredictionResult(`Prediction Result: ${data.prediction[0]}`);
        } catch (error) {
            console.error('Error:', error);
            setPredictionResult('Error: Enter all fields!');
        }
    };
    

    return (
        <div className={styles.prediction}>
            <div className={styles.container}>
                <h2 className={styles.h2}>Sales Prediction Form</h2>
                <form id="salesForm" className={styles.form} onSubmit={submitForm}>
                    <label className={styles.label} htmlFor="Item_Weight">Item Weight:</label>
                    <input 
                        type="number" 
                        name="Item_Weight" 
                        value={formData.Item_Weight}
                        step="0.01" 
                        min="0.01" 
                        onChange={handleChange} 
                        required 
                    /><br /><br />
                    
                    <label className={styles.label} htmlFor="Item_Fat_Content">Item Fat Content:</label>
                    <select name="Item_Fat_Content" value={formData.Item_Fat_Content} onChange={handleChange} required>
                        <option value="0">Low Fat</option>
                        <option value="1">Regular</option>
                    </select><br /><br />

                    <label className={styles.label} htmlFor="Item_Visibility">Item Visibility:</label>
                    <select name="Item_Visibility" value={formData.Item_Visibility} onChange={handleChange} required>
                        {[...Array(10)].map((_, i) => (
                            <option key={i} value={i / 10}>{i / 10}</option>
                        ))}
                    </select><br /><br />

                    <label className={styles.label} htmlFor="Item_MRP">Item MRP:</label>
                    <input 
                        type="number" 
                        name="Item_MRP" 
                        value={formData.Item_MRP} 
                        step="0.01" 
                        min="0.01" 
                        onChange={handleChange} 
                        required 
                    /><br /><br />

                    <label className={styles.label} htmlFor="Outlet_Size">Outlet Size:</label>
                    <select name="Outlet_Size" value={formData.Outlet_Size} onChange={handleChange} required>
                        <option value="1">Small</option>
                        <option value="2">Medium</option>
                        <option value="3">High</option>
                    </select><br /><br />

                    <label className={styles.label} htmlFor="Outlet_Location_Type">Outlet Location Type:</label>
                    <select name="Outlet_Location_Type" value={formData.Outlet_Location_Type} onChange={handleChange} required>
                        <option value="1">Tier 1</option>
                        <option value="2">Tier 2</option>
                        <option value="3">Tier 3</option>
                    </select><br /><br />

                    <label className={styles.label} htmlFor="Outlet_Type">Outlet Type:</label>
                    <select name="Outlet_Type" value={formData.Outlet_Type} onChange={handleChange} required>
                        <option value="1">Supermarket Type 1</option>
                        <option value="2">Supermarket Type 2</option>
                        <option value="3">Supermarket Type 3</option>
                        <option value="4">Grocery Store</option>
                    </select><br /><br />

                    <label className={styles.label} htmlFor="Outlet_Age">Outlet Age:</label>
                    <input 
                        type="number" 
                        name="Outlet_Age" 
                        value={formData.Outlet_Age} 
                        step="1" 
                        min="1" 
                        onChange={handleChange} 
                        required 
                    /><br /><br />

                    <label className={styles.label} htmlFor="Item_Type">Item Type:</label>
                    <select name="Item_Type" value={formData.Item_Type} onChange={handleChange} required>
                        {[
                            'Breads', 'Breakfast', 'Canned', 'Dairy', 'Frozen Foods', 'Fruits and Vegetables',
                            'Hard Drinks', 'Health and Hygiene', 'Household', 'Meat', 'Others', 'Seafood',
                            'Snack Foods', 'Soft Drinks', 'Starchy Foods'
                        ].map((item, index) => (
                            <option key={index} value={index + 1}>{item}</option>
                        ))}
                    </select><br /><br />

                    <label className={styles.label} htmlFor="Outlet_Identifier">Outlet Identifier:</label>
                    <select name="Outlet_Identifier" value={formData.Outlet_Identifier} onChange={handleChange} required>
                        {['OUT013', 'OUT017', 'OUT018', 'OUT019', 'OUT027', 'OUT035', 'OUT045', 'OUT046', 'OUT049'].map(id => (
                            <option key={id} value={id}>{id}</option>
                        ))}
                    </select>
                    <br /><br /><br />

                    <input id="button" className={styles.button} type="submit" value="Predict" />
                </form>

                <div id="predictionResult" className={styles.predictionResult}>{predictionResult}</div>
            </div>
        </div>
    )
}

export default PredictionPage;

